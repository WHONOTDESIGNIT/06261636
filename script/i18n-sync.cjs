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

const translationsDir = path.join(__dirname, '../src/translations');
const enPath = path.join(translationsDir, 'en.json');

// Main function
function main() {
  console.log('Starting full en.json update...');
  const allKeys = getAllKeys();
  const nestedObj = buildNestedObject(allKeys);
  let enData;
  try {
    enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
  } catch (e) {
    enData = {};
  }
  deepMerge(enData, nestedObj);
  fs.writeFileSync(enPath, JSON.stringify(enData, null, 2) + '\n', 'utf8');
  console.log('✅ en.json updated successfully with all keys from codebase.');
}

main(); 