import { useState, useEffect } from 'react';

interface TranslationData {
  [key: string]: string | string[] | TranslationData;
}

export const useTranslation = (language: string = 'en') => {
  const [translations, setTranslations] = useState<TranslationData>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        setLoading(true);
        // Dynamic import of translation files
        const translationModule = await import(`../translations/${language}.json`);
        setTranslations(translationModule.default);
      } catch (error) {
        console.warn(`Translation file for ${language} not found, falling back to English`);
        try {
          const fallbackModule = await import('../translations/en.json');
          setTranslations(fallbackModule.default);
        } catch (fallbackError) {
          console.error('Failed to load fallback translations:', fallbackError);
          setTranslations({});
        }
      } finally {
        setLoading(false);
      }
    };

    loadTranslations();
  }, [language]);

  const t = (key: string, fallback?: string): string => {
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return fallback || key;
      }
    }
    
    return typeof value === 'string' ? value : fallback || key;
  };

  return { t, loading, language };
};