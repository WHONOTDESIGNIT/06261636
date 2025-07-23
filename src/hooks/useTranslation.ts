// 本地 JSON 国际化 hooks，无需 i18n 依赖
import { useCallback } from 'react';

// 语言包静态导入（如需支持更多语言，按需添加）
import en from '../translations/en.json';
import de from '../translations/de.json';
// ... 其它语言包

const translations: Record<string, any> = {
  en,
  de,
  // ... 其它语言
};

// 多级 key 解析工具
function getNested(obj: any, path: string): any {
  return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
}

export function useTranslation(currentLanguage: string) {
  // t(key, defaultValue?)
  const t = useCallback((key: string, defaultValue?: string): string => {
    const langPack = translations[currentLanguage] || translations['en'];
    const value = getNested(langPack, key);
    if (typeof value === 'string') return value;
    return defaultValue !== undefined ? defaultValue : key;
  }, [currentLanguage]);

  return { t };
} 