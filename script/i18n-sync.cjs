const fs = require('fs');
const path = require('path');

// 辅助函数：递归补齐结构 + 同步内容（检查差异）
function translateToLanguage(key, value, lang) {
  // Placeholder for translation logic - in practice, use a translation service or map
  // For now, simulate with prefix (replace with actual translations)
  const translations = {
    'de': (str) => `German: ${str}`, // Replace with real translations
    // Add for other languages
  };
  return translations[lang] ? translations[lang](value) : value;
}

function deepMerge(target, source, lang, isForce = false) {
  let hasChanges = false;
  const changes = [];
  for (const key in source) {
    if (typeof source[key] === 'object' && !Array.isArray(source[key])) {
      if (typeof target[key] !== 'object' || target[key] === null) {
        target[key] = {};
        hasChanges = true;
      }
      const subChanges = deepMerge(target[key], source[key], lang, isForce);
      if (subChanges) hasChanges = true;
    } else {
      if (!target.hasOwnProperty(key)) {
        target[key] = translateToLanguage(key, source[key], lang);
        changes.push(`Added and translated key: ${key}`);
        hasChanges = true;
      } else if (target[key] !== source[key] && isForce) {
        const oldVal = target[key];
        target[key] = translateToLanguage(key, source[key], lang);
        changes.push(`Synced and translated key: ${key} (was: ${oldVal})`);
        hasChanges = true;
      }
    }
  }
  if (changes.length > 0) console.log(`Changes for ${lang}: ${changes.join(', ')}`);
  return hasChanges;
}

// 构建新键对象（从变更键）
function buildNewKeys(changedKeys) {
  const newObj = {};
  changedKeys.forEach(key => {
    const parts = key.split('.');
    let current = newObj;
    parts.forEach((part, i) => {
      if (i === parts.length - 1) {
        current[part] = `New key: ${key}`; // 默认英文模板
      } else {
        if (!current[part]) current[part] = {};
        current = current[part];
      }
    });
  });
  return newObj;
}

function walk(dir, allKeys) {
  try {
    fs.readdirSync(dir).forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        walk(filePath, allKeys);
      } else if (file.endsWith('.tsx')) {
        const content = fs.readFileSync(filePath, 'utf8');
        const regex = new RegExp('t\\\\([\\\'\"]([^\\\'\"]+)[\\\'\"]\\\\)', 'g');
        let match;
        while ((match = regex.exec(content)) !== null) {
          allKeys.add(match[1]);
        }
      }
    });
  } catch (e) {
    console.log('Directory scan error, skipping:', e.message);
  }
}

function getAllKeys() {
  const srcDir = path.join(__dirname, '../src');
  const allKeys = new Set();
  walk(srcDir, allKeys);
  return Array.from(allKeys);
}

const translationsDir = path.join(__dirname, '../src/translations');
const enPath = path.join(translationsDir, 'en.json');

// 主函数（添加 --force 支持）
function main(args) {
  let mode = args[2];
  if (!mode) {
    mode = '--sync-all';
    console.log('No mode specified, running --sync-all by default');
  }
  const isForce = args.includes('--force') || false;
  let enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
  const allKeys = getAllKeys();

  if (mode === '--update-en') {
    const newKeys = buildNewKeys(allKeys);
    const hasChanges = deepMerge(enData, newKeys, 'en');
    if (hasChanges) {
      fs.writeFileSync(enPath, JSON.stringify(enData, null, 2) + '\n', 'utf8');
      console.log('✅ en.json fully updated with all keys from codebase');
    } else {
      console.log('✅ en.json is already complete');
    }
  } else if (mode === '--sync-all') {
    fs.readdirSync(translationsDir).forEach(file => {
      if (file.endsWith('.json') && file !== 'en.json') {
        const filePath = path.join(translationsDir, file);
        let targetData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const lang = file.split('.').[0];
        const hasChanges = deepMerge(targetData, enData, lang, isForce); // 传递 isForce
        if (hasChanges || isForce) { // 强制时总是写
          fs.writeFileSync(filePath, JSON.stringify(targetData, null, 2), 'utf8');
          console.log(`✅ ${file} 已强制同步结构和内容（与 en.json 对齐）`);
        } else {
          console.log(`✅ ${file} 已与 en.json 完全一致，无需更新`);
        }
      }
    });
  } else {
    console.log('用法: node i18n-sync.cjs --update-en 或 --sync-all [--force]');
  }
}

main(process.argv); 