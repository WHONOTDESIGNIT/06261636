import 'i18next';

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

// 定义翻译键的类型结构
interface I18nTranslations {
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