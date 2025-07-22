import 'i18next';

// 语言配置类型
export interface Language {
  code: string;
  name: string;
  nativeName?: string;
  isDefault?: boolean;
  isRTL?: boolean;
}

// 翻译配置类型
export interface I18nConfig {
  // 支持的语言列表
  supportedLanguages: Language[];
  
  // 必需的翻译键
  requiredKeys: string[];
  
  // 翻译键的命名规则
  namingRules: {
    pattern: RegExp;
    maxDepth: number;
    maxKeyLength: number;
  };
  
  // 特殊处理规则
  specialRules: {
    preserveOriginal: string[];
    numberFormat: string[];
    dateFormat: string[];
  };
  
  // 文件结构规则
  fileRules: {
    translationsDir: string;
    filePattern: string;
    backup: {
      enabled: boolean;
      dir: string;
      keepCount: number;
    };
  };
  
  // 同步规则
  syncRules: {
    allowKeyDeletion: boolean;
    autoAddNewKeys: boolean;
    preserveComments: boolean;
    preserveOrder: boolean;
  };
  
  // 验证规则
  validationRules: {
    checkPlaceholders: boolean;
    checkHtmlTags: boolean;
    checkLength: {
      enabled: boolean;
      maxLength: number;
    };
  };
  
  // 报告设置
  reportSettings: {
    detailed: boolean;
    showWarnings: boolean;
    exportFormat: string;
    outputDir: string;
  };
}

// 翻译键的类型结构
export interface I18nTranslations {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    home: string;
    about: string;
    products: string;
    services: string;
    contact: string;
  };
  pages: {
    home: {
      title: string;
      description: string;
    };
    about: {
      title: string;
      description: string;
      story: string;
      mission: string;
      vision: string;
    };
    products: {
      title: string;
      description: string;
    };
    services: {
      title: string;
      description: string;
    };
    contact: {
      title: string;
      description: string;
      form: {
        name: string;
        email: string;
        message: string;
        submit: string;
      };
    };
  };
  howToUse: {
    title: string;
    description: string;
    seo: {
      title: string;
      description: string;
      keywords: string;
    };
    heroTitle: string;
    heroDescription: string;
    stepByStepTitle: string;
    stepByStepDescription: string;
    steps: {
      preparation: {
        title: string;
        description: string;
        details: {
          shave: string;
          clean: string;
          dry: string;
          remove: string;
        };
      };
      deviceSetup: {
        title: string;
        description: string;
        details: {
          connect: string;
          power: string;
          intensity: string;
          attach: string;
        };
      };
      skinToneTest: {
        title: string;
        description: string;
        details: {
          test: string;
          wait: string;
          adjust: string;
          proceed: string;
        };
      };
      treatmentProcess: {
        title: string;
        description: string;
        details: {
          place: string;
          press: string;
          move: string;
          complete: string;
        };
      };
      postTreatmentCare: {
        title: string;
        description: string;
        details: {
          cooling: string;
          sun: string;
          sunscreen: string;
          moisturize: string;
        };
      };
    };
    safetyGuidelines: {
      title: string;
      description: string;
      warnings: {
        title: string;
        points: string[];
      };
      eyeProtection: {
        title: string;
        points: string[];
      };
      skinSensitivity: {
        title: string;
        points: string[];
      };
    };
    treatmentSchedule: {
      title: string;
      description: string;
      weeks1to4: {
        week: string;
        frequency: string;
        description: string;
      };
      weeks5to8: {
        week: string;
        frequency: string;
        description: string;
      };
      weeks9to12: {
        week: string;
        frequency: string;
        description: string;
      };
      after12weeks: {
        week: string;
        frequency: string;
        description: string;
      };
    };
  };
  common: {
    buttons: {
      submit: string;
      cancel: string;
      save: string;
      edit: string;
      delete: string;
      confirm: string;
      back: string;
      next: string;
    };
    validation: {
      required: string;
      email: string;
      minLength: string;
      maxLength: string;
      numeric: string;
      url: string;
    };
    errors: {
      general: string;
      network: string;
      notFound: string;
      unauthorized: string;
      forbidden: string;
    };
    success: {
      saved: string;
      updated: string;
      deleted: string;
      sent: string;
    };
  };
}

// 扩展 i18next 的类型定义
declare module 'i18next' {
  interface InitOptions {
    fallbackLng?: string | string[] | false;
    supportedLngs?: string[];
    interpolation?: {
      escapeValue?: boolean;
      [key: string]: any;
    };
    detection?: {
      order?: string[];
      caches?: string[];
      lookupFromPathIndex?: number;
      [key: string]: any;
    };
    debug?: boolean;
    react?: {
      useSuspense?: boolean;
      [key: string]: any;
    };
    missingKeyHandler?: (
      lngs: readonly string[],
      ns: string,
      key: string,
      fallbackValue: string,
      updateMissing: boolean,
      options: any
    ) => void;
    [key: string]: any;
  }

  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: I18nTranslations;
    };
    returnNull: false;
  }
}

// 递归获取所有可能的翻译键
export type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: TObj[TKey] extends object
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`;
}[keyof TObj & (string | number)];

// 翻译键类型
export type TranslationKey = RecursiveKeyOf<I18nTranslations>;

// 翻译选项类型
export interface TranslationOptions {
  fallback?: string;
  interpolation?: { [key: string]: string | number };
  context?: string;
  count?: number;
} 