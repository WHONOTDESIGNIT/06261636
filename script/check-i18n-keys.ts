// @ts-check
// 需要在 tsconfig.json 中的 compilerOptions.types 加入 "node"，或在文件顶部加上如下引用：
// <reference types="node" />

import fetch from 'node-fetch';
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

// 递归设置 key 到对象（自动创建嵌套结构）
function setKey(obj: any, keyPath: string, value: any) {
  const parts = keyPath.split('.');
  let current = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    if (!(part in current) || typeof current[part] !== 'object') {
      current[part] = {};
    }
    current = current[part];
  }
  current[parts[parts.length - 1]] = value;
}

// 调用 LibreTranslate API 自动翻译
async function translateWithLibre(text: string, target: string, source = 'en'): Promise<string> {
  const res = await fetch('https://libretranslate.com/translate', {
    method: 'POST',
    body: JSON.stringify({
      q: text,
      source,
      target,
      format: 'text'
    }),
    headers: { 'Content-Type': 'application/json' }
  });
  const data = await res.json();
  return data.translatedText || text;
}

// 主流程
(async () => {
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

  for (const file of files) {
    const filePath = path.join(translationsDir, file);
    const obj = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const missingKeys = baseKeys.filter(key => !hasKey(obj, key));
    const targetLang = file.replace('.json', '');

    if (missingKeys.length > 0) {
      console.log(`\n[${file}] 缺失的 key:`);
      for (const key of missingKeys) {
        // 用英文原文作为翻译源
        const value = key.split('.').reduce((acc, cur) => acc && acc[cur], baseObj);
        // 自动翻译
        const translated = await translateWithLibre(value, targetLang);
        setKey(obj, key, translated);
        console.log(`  ${key} -> ${translated}`);
      }
      fs.writeFileSync(filePath, JSON.stringify(obj, null, 2), 'utf-8');
      console.log(`[${file}] 已自动翻译并补全缺失 key。`);
    } else {
      console.log(`\n[${file}] 所有 key 均已覆盖。`);
    }
  }
})(); 