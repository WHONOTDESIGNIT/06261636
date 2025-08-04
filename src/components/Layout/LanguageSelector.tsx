import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface LanguageSelectorProps {
  className?: string;
}

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className = '' }) => {
  const { currentLanguage } = useLanguage();

  const handleLanguageChange = (newLang: string) => {
    if (newLang === currentLanguage) return;

    // 使用 window.location.href 进行页面跳转
    // 让服务器端重定向处理所有逻辑
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
    const currentHash = window.location.hash;
    
    let newUrl: string;
    
    if (newLang === 'en') {
      // 英文：移除语言前缀
      const cleanPath = currentPath.replace(/^\/(zh|es|fr|de|ja|ko|pt|ru|ar)(\/|$)/, '/') || '/';
      newUrl = cleanPath + currentSearch + currentHash;
    } else {
      // 其他语言：添加或替换语言前缀
      const cleanPath = currentPath.replace(/^\/(zh|es|fr|de|ja|ko|pt|ru|ar)(\/|$)/, '/') || '/';
      const newPath = cleanPath === '/' ? `/${newLang}` : `/${newLang}${cleanPath}`;
      newUrl = newPath + currentSearch + currentHash;
    }
    
    // 直接跳转，让服务器处理重定向
    window.location.href = newUrl;
  };

  return (
    <div className={`language-selector ${className}`}>
      <select
        value={currentLanguage}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="language-select"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
