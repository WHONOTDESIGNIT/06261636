const fs = require('fs');
const path = require('path');

// 辅助函数：递归补齐结构 + 同步内容（检查差异）
function deepMerge(target, source, isForce = false) {
  let hasChanges = false;
  const changes = []; // 日志数组
  for (const key in source) {
    if (typeof source[key] === 'object' && !Array.isArray(source[key])) {
      if (typeof target[key] !== 'object' || target[key] === null) {
        target[key] = {};
        hasChanges = true;
      }
      const subChanges = deepMerge(target[key], source[key], isForce);
      if (subChanges) hasChanges = true;
    } else {
      if (!target.hasOwnProperty(key)) {
        target[key] = source[key]; // 补齐缺失
        changes.push(`Added key: ${key}`);
        hasChanges = true;
      } else if (target[key] !== source[key] && isForce) { // force 时同步差异
        const oldVal = target[key];
        target[key] = source[key];
        changes.push(`Synced key: ${key} (was: ${oldVal})`);
        hasChanges = true;
      }
    }
  }
  if (changes.length > 0) console.log(`Changes: ${changes.join(', ')}`);
  return hasChanges;
}

// 使用文件修改时间获取最近变更文件（替代 git diff，BoltNew友好）
function getChangedKeys() {
  const recentThreshold = 60 * 60 * 1000; // 1 小时（毫秒）
  const now = Date.now();
  const srcDir = path.join(__dirname, '../src');
  const changedFiles = [];

  function walk(dir) {
    try {
      fs.readdirSync(dir).forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          walk(filePath);
        } else if (file.endsWith('.tsx') && now - stat.mtimeMs < recentThreshold) {
          changedFiles.push(filePath);
        }
      });
    } catch (e) {
      console.log('目录扫描错误，跳过:', e.message);
    }
  }
  walk(srcDir);

  if (changedFiles.length === 0) {
    console.log('无最近变更文件，使用全扫描模式');
    return []; // 或实现全扫描
  }

  // 从变更文件中提取 t('key')
  const keys = new Set();
  changedFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const regex = /t\(['"]([^'"]+)['"]\)/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      keys.add(match[1]);
    }
  });
  return Array.from(keys);
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

const translationsDir = path.join(__dirname, '../src/translations');
const enPath = path.join(translationsDir, 'en.json');

// 主函数（添加 --force 支持）
function main(args) {
  const mode = args[2];
  const isForce = args.includes('--force');
  let enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
  const changedKeys = getChangedKeys();

  if (mode === '--update-en') {
    const newKeys = buildNewKeys(changedKeys);
    const updatedData = deepMerge(enData, newKeys);
    if (JSON.stringify(updatedData) !== JSON.stringify(enData)) {
      fs.writeFileSync(enPath, JSON.stringify(updatedData, null, 2), 'utf8');
      console.log('✅ en.json 更新完成（有变更）');
    } else {
      console.log('✅ en.json 无需更新（无新键）');
    }
  } else if (mode === '--sync-all') {
    fs.readdirSync(translationsDir).forEach(file => {
      if (file.endsWith('.json') && file !== 'en.json') {
        const filePath = path.join(translationsDir, file);
        let targetData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const hasChanges = deepMerge(targetData, enData, isForce); // 传递 isForce
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