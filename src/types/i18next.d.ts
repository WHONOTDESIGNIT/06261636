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
} 