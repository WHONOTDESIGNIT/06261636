const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 辅助函数：递归补齐结构（手动填充模板）
function deepMerge(target, source, isTemplate = false) {
  for (const key in source) {
    if (typeof source[key] === 'object' && !Array.isArray(source[key])) {
      if (typeof target[key] !== 'object' || target[key] === null) {
        target[key] = {};
      }
      deepMerge(target[key], source[key], isTemplate);
    } else if (!target.hasOwnProperty(key)) {
      target[key] = isTemplate ? `[TODO: Translate '${source[key]}' to target language]` : source[key];
    }
  }
  return target;
}

// 使用 git diff 获取变更键（增量）
function getChangedKeys() {
  try {
    const diff = execSync('git diff HEAD').toString();
    const keys = new Set();
    const regex = /t\(['"]([^'"]+)['"]\)/g;
    let match;
    while ((match = regex.exec(diff)) !== null) {
      keys.add(match[1]);
    }
    return Array.from(keys);
  } catch (e) {
    console.warn('Git diff failed, scanning all keys');
    return [];
  }
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

// 主函数
function main(mode) {
  let enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
  const changedKeys = getChangedKeys();

  if (mode === '--update-en') {
    const newKeys = buildNewKeys(changedKeys);
    enData = deepMerge(enData, newKeys);
    fs.writeFileSync(enPath, JSON.stringify(enData, null, 2), 'utf8');
    console.log('✅ en.json 更新完成');
  } else if (mode === '--sync-all') {
    fs.readdirSync(translationsDir).forEach(file => {
      if (file.endsWith('.json') && file !== 'en.json') {
        const filePath = path.join(translationsDir, file);
        let targetData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        targetData = deepMerge(targetData, enData, true); // 使用模板填充
        fs.writeFileSync(filePath, JSON.stringify(targetData, null, 2), 'utf8');
        console.log(`✅ ${file} 补齐完成（使用手动模板）`);
      }
    });
  } else {
    console.log('用法: node i18n-sync.cjs --update-en 或 --sync-all');
  }
}

main(process.argv[2]); 