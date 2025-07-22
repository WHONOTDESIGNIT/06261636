import { useTranslation as useI18nTranslation } from 'react-i18next';
import { KeyPrefix, UseTranslationOptions } from 'react-i18next';
import { I18nTranslations } from '../types/i18n';

type TranslationKey = RecursiveKeyOf<I18nTranslations>;

// 递归获取所有可能的翻译键
type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: TObj[TKey] extends object
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`;
}[keyof TObj & (string | number)];

export interface UseTypedTranslationOptions<Ns extends string = string>
  extends UseTranslationOptions<Ns> {
  keyPrefix?: KeyPrefix<Ns>;
}

export function useTypedTranslation() {
  const { t, i18n, ready } = useI18nTranslation();

  const typedT = (key: TranslationKey, options?: Record<string, any>) => {
    const translation = t(key, options);
    
    // 在开发环境下进行额外的类型检查
    if (process.env.NODE_ENV === 'development') {
      if (translation === key) {
        console.warn(`Missing translation for key: ${key} in language: ${i18n.language}`);
      }
    }
    
    return translation;
  };

  return {
    t: typedT,
    i18n,
    ready,
    language: i18n.language,
    changeLanguage: i18n.changeLanguage,
    isRTL: ['ar', 'he'].includes(i18n.language)
  };
}

// 导出类型
export type { TranslationKey }; 