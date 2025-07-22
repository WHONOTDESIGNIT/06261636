const fs = require('fs');
const path = require('path');

// Recursive deep merge function
function deepMerge(target, source) {
  for (const key in source) {
    if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
      if (typeof target[key] !== 'object' || target[key] === null) {
        target[key] = {};
      }
      deepMerge(target[key], source[key]);
    } else {
      if (!target.hasOwnProperty(key)) {
        target[key] = source[key]; // Add missing with default value
      }
    }
  }
}

// Extract all t('key') from .tsx files
function getAllKeys() {
  const srcDir = path.join(__dirname, '../src');
  const allKeys = new Set();

  function walk(dir) {
    fs.readdirSync(dir).forEach(file => {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isDirectory()) {
        walk(filePath);
      } else if (file.endsWith('.tsx')) {
        const content = fs.readFileSync(filePath, 'utf8');
        const regex = new RegExp("t\\s*\\(\\s*([\"'])(.*?)\\1\\s*\\)", "g"); // Safe regex for t('key') or t("key")
        let match;
        while ((match = regex.exec(content)) !== null) {
          allKeys.add(match[2]);
        }
      }
    });
  }
  walk(srcDir);
  return Array.from(allKeys);
}

// Build nested object from flat keys
function buildNestedObject(keys) {
  const obj = {};
  keys.forEach(key => {
    const parts = key.split('.');
    let current = obj;
    parts.forEach((part, index) => {
      if (index === parts.length - 1) {
        if (!current[part]) current[part] = part; // Default value: key part itself
      } else {
        if (!current[part]) current[part] = {};
        current = current[part];
      }
    });
  });
  return obj;
}

function deepFix(enObj, langObj = {}) {
  if (typeof enObj !== 'object' || enObj === null) {
    return langObj !== undefined ? langObj : enObj;
  }
  const result = Array.isArray(enObj) ? [] : {};
  for (const key in enObj) {
    if (typeof enObj[key] === 'object' && enObj[key] !== null) {
      result[key] = deepFix(enObj[key], langObj[key]);
    } else {
      result[key] = langObj && langObj[key] !== undefined ? langObj[key] : enObj[key];
    }
  }
  return result;
}

function readJsonSafely(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
      .replace(/^\uFEFF/, '') // Remove BOM if present
      .replace(/,(\s*[}\]])/g, '$1') // Remove trailing commas
      .replace(/\/\/.*/g, '') // Remove single-line comments
      .replace(/\/\*[\s\S]*?\*\//g, ''); // Remove multi-line comments
    return JSON.parse(content);
  } catch (e) {
    console.error(`Error reading ${filePath}:`, e.message);
    return {};
  }
}

function writeJsonSafely(filePath, data) {
  try {
    const content = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, content + '\n', 'utf8');
    return true;
  } catch (e) {
    console.error(`Error writing ${filePath}:`, e.message);
    return false;
  }
}

const translationsDir = path.join(__dirname, '../src/translations');
const enPath = path.join(translationsDir, 'en.json');

// Main function
function main() {
  console.log('Starting full en.json update...');
  const allKeys = getAllKeys();
  const nestedObj = buildNestedObject(allKeys);
  const enData = readJsonSafely(enPath);
  deepMerge(enData, nestedObj);
  if (writeJsonSafely(enPath, enData)) {
    console.log('✅ en.json updated successfully with all keys from codebase.');
  }
}

function syncAllLanguages() {
  const enJson = readJsonSafely(path.join(translationsDir, 'en.json'));
  if (!Object.keys(enJson).length) {
    console.error('❌ Failed to read en.json');
    return;
  }

  const langFiles = fs.readdirSync(translationsDir)
    .filter(f => f.endsWith('.json') && f !== 'en.json');

  langFiles.forEach(file => {
    const langCode = file.replace('.json', '');
    const langPath = path.join(translationsDir, file);
    const langJson = readJsonSafely(langPath);
    const fixedJson = deepFix(enJson, langJson);
    
    if (writeJsonSafely(langPath, fixedJson)) {
      console.log(`✅ Synced ${langCode}.json`);
    }
  });
}

if (process.argv.includes('--sync-all')) {
  syncAllLanguages();
}

main(); 