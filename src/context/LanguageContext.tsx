import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLocation } from 'react-router-dom';
import { useTranslation as useTranslationI18next } from 'react-i18next';

// 类型定义，保证类型安全
interface LanguageContextType {
  currentLanguage: string;
  currentCountry: string;
  setLanguage: (languageCode: string, countryCode?: string) => void;
  t: (key: string, fallback?: string) => string;
  loading: boolean;
}

// 创建Context，初始值为undefined，强制只能在Provider内部用
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider组件，负责全局语言/国家状态
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 状态：当前语言和国家
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // 从 localStorage 或 URL 获取初始语言
    const savedLang = localStorage.getItem('selectedLanguage');
    const urlLang = window.location.pathname.match(/^\/([a-z]{2})(\/|$)/)?.[1];
    return urlLang || savedLang || 'en';
  });
  const [currentCountry, setCurrentCountry] = useState(() => {
    return localStorage.getItem('selectedCountry') || 'global';
  });

  // t/翻译函数与loading状态从自定义hook获取
  const { t, loading } = useTranslation(currentLanguage);
  const location = useLocation();
  const { i18n } = useTranslationI18next();

  useEffect(() => {
    // 检查URL路径中是否有语言前缀
    const path = location.pathname;
    const langMatch = path.match(/^\/([a-z]{2})(\/|$)/);
    if (langMatch) {
      const lang = langMatch[1];
      setCurrentLanguage(lang);
      localStorage.setItem('selectedLanguage', lang);
    }
  }, [location.pathname]);

  // 切换语言和国家，并持久化
  const setLanguage = async (languageCode: string, countryCode?: string) => {
    try {
      // 先加载语言资源
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
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      currentCountry,
      setLanguage,
      t,
      loading
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook：消费Context，必须在Provider内部用
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
