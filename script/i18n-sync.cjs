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
    try {
      fs.readdirSync(dir).forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
          walk(filePath);
        } else if (file.endsWith('.tsx')) {
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            const regex = /t\s*\(\s*(['"])((?:(?!\1).)*)\1\s*(?:,\s*(['"])((?:(?!\3).)*)\3)?\s*\)/g;
            let match;
            while ((match = regex.exec(content)) !== null) {
              if (match[2]) {
                allKeys.add(match[2]);
                console.log(`Found key: ${match[2]} in ${filePath}`);
              }
            }
          } catch (e) {
            console.error(`Error processing file ${filePath}:`, e.message);
          }
        }
      });
    } catch (e) {
      console.error(`Error walking directory ${dir}:`, e.message);
    }
  }
  walk(srcDir);
  return Array.from(allKeys);
}

// Build nested object from flat keys
function buildNestedObject(keys) {
  const obj = {};
  keys.forEach(key => {
    try {
      const parts = key.split('.');
      let current = obj;
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (i === parts.length - 1) {
          if (current[part] === undefined) {
            current[part] = part; // Default value: key part itself
          }
        } else {
          current[part] = current[part] || {};
          current = current[part];
        }
      }
    } catch (e) {
      console.error(`Error building nested object for key ${key}:`, e.message);
    }
  });
  return obj;
}

function deepFix(enObj, langObj = {}) {
  try {
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
  } catch (e) {
    console.error('Error in deepFix:', e.message);
    return enObj;
  }
}

function readJsonSafely(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
      .replace(/^\uFEFF/, '') // Remove BOM if present
      .replace(/,(\s*[}\]])/g, '$1') // Remove trailing commas
      .replace(/\/\/.*/g, '') // Remove single-line comments
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments
      .replace(/\r\n/g, '\n') // Normalize line endings
      .replace(/\n\s*\n/g, '\n') // Remove empty lines
      .trim();
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
  try {
    const allKeys = getAllKeys();
    console.log('Found keys:', allKeys);
    const nestedObj = buildNestedObject(allKeys);
    console.log('Built nested object:', JSON.stringify(nestedObj, null, 2));
    const enData = readJsonSafely(enPath);
    deepMerge(enData, nestedObj);
    if (writeJsonSafely(enPath, enData)) {
      console.log('✅ en.json updated successfully with all keys from codebase.');
    }
  } catch (e) {
    console.error('Error in main function:', e.message);
  }
}

function syncAllLanguages() {
  try {
    const enJson = readJsonSafely(path.join(translationsDir, 'en.json'));
    if (!Object.keys(enJson).length) {
      console.error('❌ Failed to read en.json');
      return;
    }

    const langFiles = fs.readdirSync(translationsDir)
      .filter(f => f.endsWith('.json') && f !== 'en.json');

    langFiles.forEach(file => {
      try {
        const langCode = file.replace('.json', '');
        const langPath = path.join(translationsDir, file);
        const langJson = readJsonSafely(langPath);
        const fixedJson = deepFix(enJson, langJson);
        
        if (writeJsonSafely(langPath, fixedJson)) {
          console.log(`✅ Synced ${langCode}.json`);
        }
      } catch (e) {
        console.error(`Error processing ${file}:`, e.message);
      }
    });
  } catch (e) {
    console.error('Error in syncAllLanguages:', e.message);
  }
}

if (process.argv.includes('--sync-all')) {
  syncAllLanguages();
}

main(); 