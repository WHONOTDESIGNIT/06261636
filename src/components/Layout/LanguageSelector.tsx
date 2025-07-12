import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation'; // 你的自定义hook，负责加载翻译资源

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

  useEffect(() => {
    // 检查URL路径中是否有国家代码
    const path = window.location.pathname;
    const countryMatch = path.match(/\/iplmanufacturer\/([a-z]{2})/);

    if (countryMatch) {
      const countryCode = countryMatch[1];
      setCurrentCountry(countryCode);

      // 国家-语言映射表（可扩展）
      const languageMap: Record<string, string> = {
        us: 'en', gb: 'en', ca: 'en', au: 'en',
        de: 'de', fr: 'fr', es: 'es', it: 'it',
        pt: 'pt', nl: 'nl', mx: 'es', br: 'pt',
        jp: 'ja', kr: 'ko', cn: 'zh', tw: 'zh',
        th: 'th', vn: 'vi', id: 'id', my: 'ms',
        ae: 'ar', sa: 'ar', il: 'he', tr: 'tr',
        in: 'hi', cz: 'cs', dk: 'da', ee: 'et',
        hr: 'hr', be: 'nl', pl: 'pl'
      };

      const detectedLanguage = languageMap[countryCode] || 'en';
      setCurrentLanguage(detectedLanguage);
    } else {
      // 可选：从localStorage恢复用户选择
      const savedLang = localStorage.getItem('selectedLanguage');
      const savedCountry = localStorage.getItem('selectedCountry');
      if (savedLang) setCurrentLanguage(savedLang);
      if (savedCountry) setCurrentCountry(savedCountry);
    }
  }, []);

  // 切换语言和国家，并持久化
  const setLanguage = (languageCode: string, countryCode?: string) => {
    setCurrentLanguage(languageCode);
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
