import { I18nTranslations } from '../types/i18n';

type SyncOptions = {
  preserveExisting?: boolean;
  removeExtra?: boolean;
  ignoreKeys?: string[];
};

export class TranslationSync {
  private baseTranslations: I18nTranslations;
  private options: SyncOptions;

  constructor(baseTranslations: I18nTranslations, options: SyncOptions = {}) {
    this.baseTranslations = baseTranslations;
    this.options = {
      preserveExisting: true,
      removeExtra: false,
      ignoreKeys: [],
      ...options
    };
  }

  sync(translations: Partial<I18nTranslations>): I18nTranslations {
    return this.deepSync(this.baseTranslations, translations);
  }

  private deepSync(base: any, target: any, path: string[] = []): any {
    const result: any = Array.isArray(base) ? [] : {};

    // 同步基础翻译中的所有键
    for (const key in base) {
      const currentPath = [...path, key];
      const fullPath = currentPath.join('.');

      // 跳过被忽略的键
      if (this.options.ignoreKeys?.includes(fullPath)) {
        result[key] = target?.[key] ?? base[key];
        continue;
      }

      if (typeof base[key] === 'object' && base[key] !== null) {
        // 递归处理嵌套对象
        result[key] = this.deepSync(base[key], target?.[key], currentPath);
      } else {
        // 处理叶子节点
        if (this.options.preserveExisting && target?.[key]) {
          result[key] = target[key];
        } else {
          result[key] = base[key];
        }
      }
    }

    // 处理目标翻译中的额外键
    if (!this.options.removeExtra && target) {
      for (const key in target) {
        const currentPath = [...path, key];
        const fullPath = currentPath.join('.');

        // 跳过被忽略的键
        if (this.options.ignoreKeys?.includes(fullPath)) {
          continue;
        }

        // 如果键不在基础翻译中，且不需要移除额外键
        if (!(key in base)) {
          result[key] = target[key];
        }
      }
    }

    return result;
  }

  // 获取两个翻译之间的差异
  getDiff(translations: Partial<I18nTranslations>): {
    missing: string[];
    extra: string[];
    different: string[];
  } {
    const diff = {
      missing: [] as string[],
      extra: [] as string[],
      different: [] as string[]
    };

    this.compareObjects(this.baseTranslations, translations, [], diff);
    return diff;
  }

  private compareObjects(base: any, target: any, path: string[] = [], diff: any) {
    // 检查缺失的键
    for (const key in base) {
      const currentPath = [...path, key];
      const fullPath = currentPath.join('.');

      // 跳过被忽略的键
      if (this.options.ignoreKeys?.includes(fullPath)) {
        continue;
      }

      if (!(key in target)) {
        diff.missing.push(fullPath);
      } else if (typeof base[key] === 'object' && base[key] !== null) {
        this.compareObjects(base[key], target[key], currentPath, diff);
      } else if (base[key] !== target[key]) {
        diff.different.push(fullPath);
      }
    }

    // 检查额外的键
    for (const key in target) {
      const currentPath = [...path, key];
      const fullPath = currentPath.join('.');

      // 跳过被忽略的键
      if (this.options.ignoreKeys?.includes(fullPath)) {
        continue;
      }

      if (!(key in base)) {
        diff.extra.push(fullPath);
      }
    }
  }

  // 从基础翻译中提取所有键
  getAllKeys(): string[] {
    const keys: string[] = [];
    this.extractKeys(this.baseTranslations, [], keys);
    return keys;
  }

  private extractKeys(obj: any, path: string[] = [], result: string[]) {
    for (const key in obj) {
      const currentPath = [...path, key];
      const fullPath = currentPath.join('.');

      // 跳过被忽略的键
      if (this.options.ignoreKeys?.includes(fullPath)) {
        continue;
      }

      if (typeof obj[key] === 'object' && obj[key] !== null) {
        this.extractKeys(obj[key], currentPath, result);
      } else {
        result.push(fullPath);
      }
    }
  }
}

// 导出同步器实例
export const createSync = (baseTranslations: I18nTranslations, options?: SyncOptions) => {
  return new TranslationSync(baseTranslations, options);
}; 