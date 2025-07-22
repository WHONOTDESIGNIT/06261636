import { I18nTranslations } from '../types/i18n';

type ValidationResult = {
  isValid: boolean;
  errors: string[];
  warnings: string[];
};

type ValidationOptions = {
  checkMissingKeys?: boolean;
  checkExtraKeys?: boolean;
  checkEmptyValues?: boolean;
  checkPlaceholders?: boolean;
  checkHtmlTags?: boolean;
  ignoreKeys?: string[];
};

export class TranslationValidator {
  private baseTranslations: I18nTranslations;
  private options: ValidationOptions;

  constructor(baseTranslations: I18nTranslations, options: ValidationOptions = {}) {
    this.baseTranslations = baseTranslations;
    this.options = {
      checkMissingKeys: true,
      checkExtraKeys: true,
      checkEmptyValues: true,
      checkPlaceholders: true,
      checkHtmlTags: true,
      ignoreKeys: [],
      ...options
    };
  }

  validate(translations: I18nTranslations, language: string): ValidationResult {
    const result: ValidationResult = {
      isValid: true,
      errors: [],
      warnings: []
    };

    // 检查缺失的键
    if (this.options.checkMissingKeys) {
      this.checkMissingKeys(this.baseTranslations, translations, [], result);
    }

    // 检查多余的键
    if (this.options.checkExtraKeys) {
      this.checkExtraKeys(translations, this.baseTranslations, [], result);
    }

    // 检查空值
    if (this.options.checkEmptyValues) {
      this.checkEmptyValues(translations, [], result);
    }

    // 检查占位符
    if (this.options.checkPlaceholders) {
      this.checkPlaceholders(this.baseTranslations, translations, [], result);
    }

    // 检查 HTML 标签
    if (this.options.checkHtmlTags) {
      this.checkHtmlTags(translations, [], result);
    }

    result.isValid = result.errors.length === 0;
    return result;
  }

  private checkMissingKeys(base: any, target: any, path: string[], result: ValidationResult) {
    for (const key in base) {
      const currentPath = [...path, key];
      const fullPath = currentPath.join('.');

      if (this.options.ignoreKeys?.includes(fullPath)) {
        continue;
      }

      if (!(key in target)) {
        result.errors.push(`Missing key: ${fullPath}`);
        continue;
      }

      if (typeof base[key] === 'object' && base[key] !== null) {
        this.checkMissingKeys(base[key], target[key], currentPath, result);
      }
    }
  }

  private checkExtraKeys(target: any, base: any, path: string[], result: ValidationResult) {
    for (const key in target) {
      const currentPath = [...path, key];
      const fullPath = currentPath.join('.');

      if (this.options.ignoreKeys?.includes(fullPath)) {
        continue;
      }

      if (!(key in base)) {
        result.warnings.push(`Extra key found: ${fullPath}`);
        continue;
      }

      if (typeof target[key] === 'object' && target[key] !== null) {
        this.checkExtraKeys(target[key], base[key], currentPath, result);
      }
    }
  }

  private checkEmptyValues(obj: any, path: string[], result: ValidationResult) {
    for (const key in obj) {
      const currentPath = [...path, key];
      const fullPath = currentPath.join('.');

      if (this.options.ignoreKeys?.includes(fullPath)) {
        continue;
      }

      if (typeof obj[key] === 'string' && obj[key].trim() === '') {
        result.errors.push(`Empty value found: ${fullPath}`);
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        this.checkEmptyValues(obj[key], currentPath, result);
      }
    }
  }

  private checkPlaceholders(base: any, target: any, path: string[], result: ValidationResult) {
    const placeholderRegex = /{{([^}]+)}}/g;

    for (const key in base) {
      const currentPath = [...path, key];
      const fullPath = currentPath.join('.');

      if (this.options.ignoreKeys?.includes(fullPath)) {
        continue;
      }

      if (typeof base[key] === 'string' && typeof target[key] === 'string') {
        const basePlaceholders = [...base[key].matchAll(placeholderRegex)].map(m => m[1]);
        const targetPlaceholders = [...target[key].matchAll(placeholderRegex)].map(m => m[1]);

        const missingPlaceholders = basePlaceholders.filter(p => !targetPlaceholders.includes(p));
        const extraPlaceholders = targetPlaceholders.filter(p => !basePlaceholders.includes(p));

        if (missingPlaceholders.length > 0) {
          result.errors.push(`Missing placeholders in ${fullPath}: ${missingPlaceholders.join(', ')}`);
        }
        if (extraPlaceholders.length > 0) {
          result.warnings.push(`Extra placeholders in ${fullPath}: ${extraPlaceholders.join(', ')}`);
        }
      } else if (typeof base[key] === 'object' && base[key] !== null) {
        this.checkPlaceholders(base[key], target[key], currentPath, result);
      }
    }
  }

  private checkHtmlTags(obj: any, path: string[], result: ValidationResult) {
    const htmlTagRegex = /<[^>]+>/g;

    for (const key in obj) {
      const currentPath = [...path, key];
      const fullPath = currentPath.join('.');

      if (this.options.ignoreKeys?.includes(fullPath)) {
        continue;
      }

      if (typeof obj[key] === 'string') {
        const matches = obj[key].match(htmlTagRegex);
        if (matches) {
          const openTags = matches.filter(tag => !tag.startsWith('</'));
          const closeTags = matches.filter(tag => tag.startsWith('</'));

          if (openTags.length !== closeTags.length) {
            result.errors.push(`Mismatched HTML tags in ${fullPath}`);
          }
        }
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        this.checkHtmlTags(obj[key], currentPath, result);
      }
    }
  }
}

// 导出验证器实例
export const createValidator = (baseTranslations: I18nTranslations, options?: ValidationOptions) => {
  return new TranslationValidator(baseTranslations, options);
}; 