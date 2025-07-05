// @ts-check
// 需要在 tsconfig.json 中的 compilerOptions.types 加入 "node"，或在文件顶部加上如下引用：
// <reference types="node" />

import * as fs from 'fs';
import * as path from 'path';

// 递归获取对象所有 key 的路径
function getAllKeys(obj: any, prefix = ''): string[] {
  let keys: string[] = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      const newPrefix = prefix ? `${prefix}.${key}` : key;
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        keys = keys.concat(getAllKeys(value, newPrefix));
      } else {
        keys.push(newPrefix);
      }
    }
  }
  return keys;
}

// 递归检查 key 是否存在
function hasKey(obj: any, keyPath: string): boolean {
  const parts = keyPath.split('.');
  let current = obj;
  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      return false;
    }
  }
  return true;
}

// __dirname 需要 Node.js 环境，tsconfig 需 types: ["node"]
const translationsDir = path.resolve(__dirname, '../src/translations');
const baseLang = 'en.json';

const basePath = path.join(translationsDir, baseLang);
if (!fs.existsSync(basePath)) {
  console.error(`Base language file not found: ${basePath}`);
  process.exit(1);
}

const baseObj = JSON.parse(fs.readFileSync(basePath, 'utf-8'));
const baseKeys = getAllKeys(baseObj);

const files = fs.readdirSync(translationsDir).filter(f => f.endsWith('.json') && f !== baseLang);

let hasMissing = false;

for (const file of files) {
  const filePath = path.join(translationsDir, file);
  const obj = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const missingKeys = baseKeys.filter(key => !hasKey(obj, key));
  if (missingKeys.length > 0) {
    hasMissing = true;
    console.log(`\n[${file}] 缺失的 key:`);
    missingKeys.forEach(k => console.log('  ' + k));
  } else {
    console.log(`\n[${file}] 所有 key 均已覆盖。`);
  }
}

if (!hasMissing) {
  console.log('\n所有语言包的 key 都已完整覆盖 en.json。');
} 