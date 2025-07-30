// 本地 JSON 国际化 hooks，无需 i18n 依赖
import { useCallback } from 'react';

// 动态导入语言包，减少初始包大小
const translations: Record<string, any> = {};

// 异步加载语言包
const loadTranslation = async (lang: string) => {
  if (translations[lang]) return translations[lang];
  
  try {
    const module = await import(`../translations/${lang}.json`);
    translations[lang] = module.default;
    return translations[lang];
  } catch (error) {
    console.warn(`Failed to load translation for ${lang}, falling back to English`);
    if (!translations['en']) {
      const enModule = await import('../translations/en.json');
      translations['en'] = enModule.default;
    }
    return translations['en'];
  }
};

// 多级 key 解析工具
function getNested(obj: any, path: string): any {
  return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
}

export function useTranslation(currentLanguage: string) {
  // t(key, defaultValue?)
  const t = useCallback(async (key: string, defaultValue?: string): Promise<string> => {
    const langPack = await loadTranslation(currentLanguage);
    const value = getNested(langPack, key);
    if (typeof value === 'string') return value;
    return defaultValue !== undefined ? defaultValue : key;
  }, [currentLanguage]);
  
  // 同步版本的 t 函数，用于已加载的翻译
  const tSync = useCallback((key: string, defaultValue?: string): string => {
    const langPack = translations[currentLanguage] || translations['en'] || {};
    const value = getNested(langPack, key);
    if (typeof value === 'string') return value;
    return defaultValue !== undefined ? defaultValue : key;
  }, [currentLanguage]);

  return { t: tSync, tAsync: t };
} 