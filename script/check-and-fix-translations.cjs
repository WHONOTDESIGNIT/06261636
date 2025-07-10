import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 读取英文模板
const enJsonPath = path.join(__dirname, '../src/translations/en.json');
const enJson = JSON.parse(fs.readFileSync(enJsonPath, 'utf8'));

// 获取所有语言文件
const translationsDir = path.join(__dirname, '../src/translations');
const langFiles = fs.readdirSync(translationsDir)
  .filter(f => f.endsWith('.json') && f !== 'en.json')
  .sort();

console.log(`🔍 检查 ${langFiles.length} 个非英语语言文件的结构完整性...`);
console.log('=' .repeat(50));

// 深度比较对象结构
function compareStructure(enObj, langObj, path = '') {
  const issues = [];
  
  if (typeof enObj !== typeof langObj) {
    issues.push(`${path}: 类型不匹配`);
    return issues;
  }
  
  if (typeof enObj === 'object' && enObj !== null) {
    const enKeys = Object.keys(enObj);
    const langKeys = Object.keys(langObj || {});
    
    // 检查缺失的键
    const missingKeys = enKeys.filter(key => !langKeys.includes(key));
    if (missingKeys.length > 0) {
      issues.push(`${path}: 缺失键 [${missingKeys.join(', ')}]`);
    }
    
    // 检查多余的键
    const extraKeys = langKeys.filter(key => !enKeys.includes(key));
    if (extraKeys.length > 0) {
      issues.push(`${path}: 多余键 [${extraKeys.join(', ')}]`);
    }
    
    // 递归检查共同键
    for (const key of enKeys) {
      if (langKeys.includes(key)) {
        const subPath = path ? `${path}.${key}` : key;
        issues.push(...compareStructure(enObj[key], langObj[key], subPath));
      }
    }
  }
  
  return issues;
}

// 修复语言文件结构
function fixLanguageFile(langCode, langJson) {
  console.log(`\n🔧 修复 ${langCode}.json 结构...`);
  
  // 深度克隆并修复结构
  function deepFix(enObj, langObj = {}) {
    if (typeof enObj !== 'object' || enObj === null) {
      return langObj !== undefined ? langObj : enObj;
    }
    
    const result = Array.isArray(enObj) ? [] : {};
    
    for (const key in enObj) {
      if (typeof enObj[key] === 'object' && enObj[key] !== null) {
        result[key] = deepFix(enObj[key], langObj[key]);
      } else {
        // 保留已有翻译，否则使用英文原文
        result[key] = langObj && langObj[key] !== undefined ? langObj[key] : enObj[key];
      }
    }
    
    return result;
  }
  
  const fixedJson = deepFix(enJson, langJson);
  
  // 写回文件
  const filePath = path.join(translationsDir, `${langCode}.json`);
  fs.writeFileSync(filePath, JSON.stringify(fixedJson, null, 2), 'utf8');
  
  console.log(`✅ ${langCode}.json 修复完成`);
  return fixedJson;
}

// 检查所有语言文件
const results = [];

for (const file of langFiles) {
  const langCode = file.replace('.json', '');
  console.log(`\n📋 检查 ${langCode}.json...`);
  
  try {
    const langJsonPath = path.join(translationsDir, file);
    const langJson = JSON.parse(fs.readFileSync(langJsonPath, 'utf8'));
    
    const issues = compareStructure(enJson, langJson);
    
    if (issues.length === 0) {
      console.log(`✅ ${langCode} - 结构完整`);
      results.push({ lang: langCode, status: 'complete', issues: [] });
    } else {
      console.log(`❌ ${langCode} - 发现 ${issues.length} 个问题:`);
      issues.slice(0, 5).forEach(issue => console.log(`   - ${issue}`));
      if (issues.length > 5) {
        console.log(`   ... 还有 ${issues.length - 5} 个问题`);
      }
      
      // 修复文件
      fixLanguageFile(langCode, langJson);
      results.push({ lang: langCode, status: 'fixed', issues: issues.length });
    }
  } catch (error) {
    console.log(`🚫 ${langCode} - 文件错误: ${error.message}`);
    results.push({ lang: langCode, status: 'error', error: error.message });
  }
}

// 输出总结
console.log('\n' + '='.repeat(50));
console.log('📊 检查总结:');
console.log('='.repeat(50));

const complete = results.filter(r => r.status === 'complete');
const fixed = results.filter(r => r.status === 'fixed');
const errors = results.filter(r => r.status === 'error');

console.log(`✅ 结构完整: ${complete.length} 个文件`);
console.log(`🔧 已修复: ${fixed.length} 个文件`);
console.log(`🚫 错误: ${errors.length} 个文件`);

if (complete.length > 0) {
  console.log(`\n完整文件: ${complete.map(r => r.lang).join(', ')}`);
}

if (fixed.length > 0) {
  console.log(`\n已修复文件: ${fixed.map(r => r.lang).join(', ')}`);
}

if (errors.length > 0) {
  console.log(`\n错误文件: ${errors.map(r => r.lang).join(', ')}`);
}

console.log(`\n🎉 全部检查完成！总共处理了 ${langFiles.length} 个语言文件。`); 