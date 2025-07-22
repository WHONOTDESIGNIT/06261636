import { useEffect } from 'react';
import { useTranslation as useI18nextTranslation } from 'react-i18next';

export const useTranslation = (language: string = 'en') => {
  // Use i18next's hook
  const { t: i18nT, i18n, ready } = useI18nextTranslation();
  
  // Sync language with i18next
  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language).catch(error => {
        console.error('Failed to change language:', error);
      });
    }
  }, [language, i18n]);
  
  // Custom t function to handle nested keys and debug missing translations
  const t = (key: string, fallback?: string): string => {
    const translation = i18nT(key, { defaultValue: fallback || key });
    if (translation === key && !fallback) {
      console.warn(`Missing translation for key: ${key} in language: ${language}`);
    }
    return translation;
  };

  return { t, loading: !ready, language: i18n.language };
};