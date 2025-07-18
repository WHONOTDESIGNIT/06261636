import { useEffect } from 'react';
import { useTranslation as useI18nextTranslation } from 'react-i18next';

export const useTranslation = (language: string = 'en') => {
  // Use i18next's hook
  const { t: i18nT, i18n, ready } = useI18nextTranslation();
  
  // Sync language with i18next
  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);
  
  // Custom t function to handle nested keys (as before)
  const t = (key: string, fallback?: string): string => {
    return i18nT(key, { defaultValue: fallback || key });
  };

  return { t, loading: !ready, language: i18n.language };
};