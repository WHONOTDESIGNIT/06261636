import fs from 'fs';
import path from 'path';
import glob from 'glob';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import chalk from 'chalk';

interface TranslationKey {
  key: string;
  defaultValue?: string;
  file: string;
  line: number;
}

interface TranslationStructure {
  [key: string]: string | TranslationStructure;
}

class I18nManager {
  private sourceDir: string;
  private translationsDir: string;
  private masterLanguage: string = 'en';
  private supportedLanguages: string[] = ['en', 'zh', 'ja', 'ko', 'es', 'fr', 'de'];
  private existingKeys: Set<string> = new Set();
  private newKeys: Set<string> = new Set();
  private unusedKeys: Set<string> = new Set();
  private keyUsageMap: Map<string, string[]> = new Map();

  constructor(sourceDir: string, translationsDir: string) {
    this.sourceDir = sourceDir;
    this.translationsDir = translationsDir;
  }

  // 从React组件中提取翻译键
  private extractKeysFromFile(filePath: string): TranslationKey[] {
    const keys: TranslationKey[] = [];
    const content = fs.readFileSync(filePath, 'utf-8');

    try {
      const ast = parse(content, {
        sourceType: 'module',
        plugins: ['jsx', 'typescript'],
      });

      traverse(ast, {
        CallExpression(path) {
          if (
            path.node.callee.type === 'Identifier' &&
            path.node.callee.name === 't'
          ) {
            const args = path.node.arguments;
            if (args.length > 0 && args[0].type === 'StringLiteral') {
              const key = args[0].value;
              const defaultValue = args[1]?.type === 'StringLiteral' ? args[1].value : undefined;
              const location = path.node.loc;
              
              keys.push({
                key,
                defaultValue,
                file: filePath,
                line: location?.start.line || 0,
              });
            }
          }
        },
      });
    } catch (error) {
      console.error(chalk.red(`Error parsing ${filePath}:`), error);
    }

    return keys;
  }

  // 从所有源文件中收集翻译键
  private async collectAllKeys(): Promise<TranslationKey[]> {
    const files = glob.sync('**/*.{tsx,jsx,ts,js}', {
      cwd: this.sourceDir,
      ignore: ['node_modules/**', 'build/**', 'dist/**'],
    });

    const allKeys: TranslationKey[] = [];
    for (const file of files) {
      const filePath = path.join(this.sourceDir, file);
      const keys = this.extractKeysFromFile(filePath);
      allKeys.push(...keys);

      // 更新键使用映射
      keys.forEach(({ key, file }) => {
        const files = this.keyUsageMap.get(key) || [];
        if (!files.includes(file)) {
          files.push(file);
          this.keyUsageMap.set(key, files);
        }
      });
    }

    return allKeys;
  }

  // 构建嵌套的翻译结构
  private buildNestedStructure(keys: TranslationKey[]): TranslationStructure {
    const structure: TranslationStructure = {};

    keys.forEach(({ key, defaultValue }) => {
      const parts = key.split('.');
      let current = structure;

      parts.forEach((part, index) => {
        if (index === parts.length - 1) {
          // 如果键已存在，不覆盖它
          if (!(part in current)) {
            current[part] = defaultValue || part;
          }
        } else {
          current[part] = current[part] || {};
          current = current[part] as TranslationStructure;
        }
      });
    });

    return structure;
  }

  // 合并翻译结构，保留现有翻译
  private mergeTranslations(
    existing: TranslationStructure,
    newStructure: TranslationStructure
  ): TranslationStructure {
    const merged: TranslationStructure = { ...existing };

    const merge = (
      target: TranslationStructure,
      source: TranslationStructure
    ): TranslationStructure => {
      Object.keys(source).forEach((key) => {
        if (
          typeof source[key] === 'object' &&
          source[key] !== null &&
          !Array.isArray(source[key])
        ) {
          target[key] = merge(
            (target[key] as TranslationStructure) || {},
            source[key] as TranslationStructure
          );
        } else if (!(key in target)) {
          // 只添加新键，不覆盖现有翻译
          target[key] = source[key];
        }
      });
      return target;
    };

    return merge(merged, newStructure);
  }

  // 同步所有语言文件
  private async syncLanguageFiles(structure: TranslationStructure): Promise<void> {
    // 确保翻译目录存在
    if (!fs.existsSync(this.translationsDir)) {
      fs.mkdirSync(this.translationsDir, { recursive: true });
    }

    // 首先更新主语言文件
    const masterFilePath = path.join(this.translationsDir, `${this.masterLanguage}.json`);
    let masterContent: TranslationStructure = {};
    
    if (fs.existsSync(masterFilePath)) {
      try {
        masterContent = JSON.parse(fs.readFileSync(masterFilePath, 'utf-8'));
      } catch (error) {
        console.error(chalk.red(`Error reading ${masterFilePath}:`), error);
      }
    }

    // 合并并保存主语言文件
    const updatedMasterContent = this.mergeTranslations(masterContent, structure);
    fs.writeFileSync(
      masterFilePath,
      JSON.stringify(updatedMasterContent, null, 2) + '\n'
    );

    // 同步其他语言文件
    for (const lang of this.supportedLanguages) {
      if (lang === this.masterLanguage) continue;

      const langFilePath = path.join(this.translationsDir, `${lang}.json`);
      let langContent: TranslationStructure = {};

      if (fs.existsSync(langFilePath)) {
        try {
          langContent = JSON.parse(fs.readFileSync(langFilePath, 'utf-8'));
        } catch (error) {
          console.error(chalk.red(`Error reading ${langFilePath}:`), error);
        }
      }

      // 合并结构，保留现有翻译
      const updatedLangContent = this.mergeTranslations(langContent, updatedMasterContent);
      fs.writeFileSync(
        langFilePath,
        JSON.stringify(updatedLangContent, null, 2) + '\n'
      );
    }
  }

  // 生成翻译报告
  private generateReport(): void {
    console.log(chalk.blue('\nTranslation Management Report:'));
    console.log(chalk.yellow('\nKey Usage Statistics:'));
    this.keyUsageMap.forEach((files, key) => {
      console.log(chalk.green(`\nKey: ${key}`));
      console.log(chalk.gray('Used in:'));
      files.forEach(file => {
        console.log(chalk.gray(`  - ${file}`));
      });
    });

    if (this.newKeys.size > 0) {
      console.log(chalk.yellow('\nNew Keys Added:'));
      this.newKeys.forEach(key => console.log(chalk.green(`  + ${key}`)));
    }

    if (this.unusedKeys.size > 0) {
      console.log(chalk.yellow('\nUnused Keys (not deleted):'));
      this.unusedKeys.forEach(key => console.log(chalk.red(`  - ${key}`)));
    }
  }

  // 主执行方法
  public async execute(): Promise<void> {
    console.log(chalk.blue('Starting i18n management process...'));

    // 收集所有翻译键
    const keys = await this.collectAllKeys();
    console.log(chalk.green(`Found ${keys.length} translation keys in source files.`));

    // 构建翻译结构
    const structure = this.buildNestedStructure(keys);

    // 同步语言文件
    await this.syncLanguageFiles(structure);
    console.log(chalk.green('Successfully synchronized all language files.'));

    // 生成报告
    this.generateReport();
  }
}

// 执行脚本
const manager = new I18nManager(
  path.resolve(__dirname, '../src'),
  path.resolve(__dirname, '../src/translations')
);

manager.execute().catch(error => {
  console.error(chalk.red('Error executing i18n manager:'), error);
  process.exit(1);
}); 