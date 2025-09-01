import React, { createContext, useContext, useState, useEffect } from 'react';
import { languages } from '../data/languages';
import { useTranslation } from '../hooks/useTranslation';

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (languageCode: string) => void;
  t: (key: string, defaultValue?: string) => string;
  isRTL: boolean;
  availableLanguages: typeof languages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Avoid accessing window/localStorage during SSR. Initialize with a safe default.
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');
  const [isClient, setIsClient] = useState(false);

  const { t } = useTranslation(currentLanguage);

  // Initialize language and subscribe to client-side changes
  useEffect(() => {
    setIsClient(true);
    if (typeof window === 'undefined') {
      return;
    }

    const readLanguageFromClient = (): string => {
      const path = window.location.pathname;
      const langMatch = path.match(/^\/([a-z]{2})(\/|$)/);
      const urlLang = langMatch?.[1];
      const savedLang = typeof window !== 'undefined' ? window.localStorage.getItem('selectedLanguage') : null;
      return urlLang || savedLang || 'en';
    };

    // Set initial language from URL or localStorage on mount
    setCurrentLanguage(prev => {
      const detected = readLanguageFromClient();
      return detected || prev;
    });

    const handleLocationChange = () => {
      const detected = readLanguageFromClient();
      if (detected && detected !== currentLanguage) {
        setCurrentLanguage(detected);
        try {
          window.localStorage.setItem('selectedLanguage', detected);
        } catch {}
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('languageChanged', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('languageChanged', handleLocationChange);
    };
  }, [currentLanguage]);

  const setLanguage = (languageCode: string) => {
    setCurrentLanguage(languageCode);
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem('selectedLanguage', languageCode);
      } catch {}
      window.dispatchEvent(new Event('languageChanged'));
    }
  };

  const isRTL = ['ar', 'he'].includes(currentLanguage);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = currentLanguage;
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    }
  }, [currentLanguage, isRTL]);

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage,
        t,
        isRTL,
        availableLanguages: languages
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

