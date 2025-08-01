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
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const savedLang = localStorage.getItem('selectedLanguage');
    const urlLang = window.location.pathname.match(/^\/([a-z]{2})(\/|$)/)?.[1];
    return urlLang || savedLang || 'en';
  });

  const { t } = useTranslation(currentLanguage);

  // 监听路由变化的替代方案
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      const langMatch = path.match(/^\/([a-z]{2})(\/|$)/);
      if (langMatch) {
        const lang = langMatch[1];
        if (lang !== currentLanguage) {
          setCurrentLanguage(lang);
          localStorage.setItem('selectedLanguage', lang);
        }
      }
    };

    // 监听浏览器历史变化
    window.addEventListener('popstate', handleLocationChange);
    
    // 监听自定义语言变化事件
    window.addEventListener('languageChanged', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('languageChanged', handleLocationChange);
    };
  }, [currentLanguage]);

  const setLanguage = (languageCode: string) => {
    setCurrentLanguage(languageCode);
    localStorage.setItem('selectedLanguage', languageCode);
    window.dispatchEvent(new Event('languageChanged'));
  };

  const isRTL = ['ar', 'he'].includes(currentLanguage);

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
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

