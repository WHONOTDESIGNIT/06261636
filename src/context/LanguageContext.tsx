import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation'; // Updated hook with i18next integration
import { useLocation } from 'react-router-dom';
import { useTranslation as useTranslationI18next } from 'react-i18next'; // For direct access if needed

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
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [currentCountry, setCurrentCountry] = useState('global');
  // t/翻译函数与loading状态从自定义hook获取
  const { t, loading } = useTranslation(currentLanguage);
  const location = useLocation();
  const { i18n } = useTranslationI18next(); // Get i18n instance

  useEffect(() => {
    // 检查URL路径中是否有语言前缀
    const path = location.pathname;
    const langMatch = path.match(/^\/([a-z]{2})(\/|$)/);
    if (langMatch) {
      const lang = langMatch[1];
      setCurrentLanguage(lang);
      localStorage.setItem('selectedLanguage', lang);
    } else {
      // fallback 逻辑
      const savedLang = localStorage.getItem('selectedLanguage');
      if (savedLang) setCurrentLanguage(savedLang);
    }
  }, [location.pathname]);

  // 切换语言和国家，并持久化
  const setLanguage = (languageCode: string, countryCode?: string) => {
    setCurrentLanguage(languageCode);
    i18n.changeLanguage(languageCode); // Sync with i18next
    if (countryCode) {
      setCurrentCountry(countryCode);
      localStorage.setItem('selectedCountry', countryCode);
    }
    localStorage.setItem('selectedLanguage', languageCode);
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
