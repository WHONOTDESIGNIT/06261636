import React, { createContext, useContext, useState, useEffect } from 'react';
import { languages } from '../data/languages';
import { useTranslation } from '../hooks/useTranslation';

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (languageCode: string) => void;
  t: (key: string, defaultValue?: string) => string;
  isRTL: boolean;
  availableLanguages: typeof languages;
  isReady: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export interface LanguageProviderProps {
  children: React.ReactNode;
  initialLanguage?: string;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children, initialLanguage }) => {
  // Avoid accessing window/localStorage during SSR. Initialize with a safe default.
  const [currentLanguage, setCurrentLanguage] = useState<string>(initialLanguage || 'en');
  const [isReady, setIsReady] = useState(false);

  const { t, isLoaded } = useTranslation(currentLanguage);

  // Initialize language and subscribe to client-side changes
  useEffect(() => {
    if (typeof window === 'undefined') {
      setIsReady(true);
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
    const detectedLang = readLanguageFromClient();
    if (detectedLang && detectedLang !== currentLanguage) {
      setCurrentLanguage(detectedLang);
    }
    setIsReady(true);

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

  // Don't render children until ready to prevent hydration mismatch
  if (!isReady || !isLoaded) {
    return (
      <LanguageContext.Provider
        value={{
          currentLanguage: initialLanguage || 'en',
          setLanguage: () => {},
          t: (key: string, defaultValue?: string) => defaultValue || key,
          isRTL: ['ar', 'he'].includes(initialLanguage || 'en'),
          availableLanguages: languages,
          isReady: false
        }}
      >
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-ishine-blue-500"></div>
        </div>
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage,
        t,
        isRTL,
        availableLanguages: languages,
        isReady: true
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

