import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import i18next from 'i18next';
import { languages } from '../data/languages';
import { useTypedTranslation, TranslationKey } from '../hooks/useTypedTranslation';

interface LanguageContextType {
  currentLanguage: string;
  currentCountry: string;
  setLanguage: (languageCode: string, countryCode?: string) => Promise<void>;
  t: (key: TranslationKey, options?: Record<string, any>) => string;
  loading: boolean;
  isRTL: boolean;
  availableLanguages: typeof languages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 状态管理
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const savedLang = localStorage.getItem('selectedLanguage');
    const urlLang = window.location.pathname.match(/^\/([a-z]{2})(\/|$)/)?.[1];
    return urlLang || savedLang || 'en';
  });

  const [currentCountry, setCurrentCountry] = useState(() => {
    return localStorage.getItem('selectedCountry') || 'global';
  });

  const [loading, setLoading] = useState(true);
  const { t, i18n, isRTL } = useTypedTranslation();
  const location = useLocation();

  // 监听路径变化
  useEffect(() => {
    const path = location.pathname;
    const langMatch = path.match(/^\/([a-z]{2})(\/|$)/);
    if (langMatch) {
      const lang = langMatch[1];
      if (lang !== currentLanguage) {
        setCurrentLanguage(lang);
        localStorage.setItem('selectedLanguage', lang);
      }
    }
  }, [location.pathname, currentLanguage]);

  // 语言变更处理
  const setLanguage = async (languageCode: string, countryCode?: string) => {
    try {
      setLoading(true);
      
      // 加载语言资源
      await i18n.loadLanguages(languageCode);
      
      // 切换语言
      await i18n.changeLanguage(languageCode);
      
      // 更新状态
      setCurrentLanguage(languageCode);
      if (countryCode) {
        setCurrentCountry(countryCode);
        localStorage.setItem('selectedCountry', countryCode);
      }
      localStorage.setItem('selectedLanguage', languageCode);

      // 触发自定义事件
      window.dispatchEvent(new Event('languageChanged'));
    } catch (error) {
      console.error('Failed to change language:', error);
    } finally {
      setLoading(false);
    }
  };

  // 初始化
  useEffect(() => {
    const initializeLanguage = async () => {
      try {
        setLoading(true);
        await setLanguage(currentLanguage, currentCountry);
      } finally {
        setLoading(false);
      }
    };

    initializeLanguage();
  }, []); // 仅在组件挂载时运行

  // 监听 i18next 事件
  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      console.log('Language changed to:', lng);
      document.documentElement.lang = lng;
      document.documentElement.dir = ['ar', 'he'].includes(lng) ? 'rtl' : 'ltr';
    };

    i18next.on('languageChanged', handleLanguageChanged);

    return () => {
      i18next.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        currentCountry,
        setLanguage,
        t,
        loading,
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

export default LanguageProvider; 