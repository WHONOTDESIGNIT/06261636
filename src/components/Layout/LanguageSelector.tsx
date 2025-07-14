import React, { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { languages } from '../../data/languages';
import { useNavigate, useLocation } from 'react-router-dom';

interface Language {
  code: string;
  flag: string;
  name: string;
  nativeName?: string;
}

const LanguageSelector: React.FC = () => {
  const { currentLanguage, currentCountry, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  // 移除自动IP检测和重定向功能，只保留默认设置
  useEffect(() => {
    if (!currentLanguage || !currentCountry) {
      // 静态设置默认语言，不触发任何重定向
      setLanguage('en', 'global');
    }
  }, [currentLanguage, currentCountry, setLanguage]);

  /* ---------------- 语言切换下拉 ---------------- */
  const currentValue = `${currentLanguage || 'en'}-${currentCountry || 'global'}`;

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCode = e.target.value;
    const [langCode, countryCode] = selectedCode.split('-');
    
    // 先更新语言状态
    setLanguage(langCode, countryCode);

    // 计算新的路径
    let newPath = location.pathname;
    const pathSegments = newPath.split('/').filter(Boolean); // 移除空字符串
    
    // 检查当前路径是否已有语言前缀
    const hasLanguagePrefix = pathSegments.length > 0 && 
      languages.some(l => l.code.startsWith(pathSegments[0]));
    
    if (hasLanguagePrefix) {
      // 移除现有语言前缀
      pathSegments.shift();
    }
    
    // 构建新路径
    if (langCode === 'en') {
      // 英文：无前缀路径
      newPath = pathSegments.length > 0 ? `/${pathSegments.join('/')}` : '/';
    } else {
      // 其他语言：添加语言前缀
      newPath = `/${langCode}${pathSegments.length > 0 ? '/' + pathSegments.join('/') : ''}`;
    }
    
    // 添加查询参数和哈希
    const fullPath = `${newPath}${location.search}${location.hash}`;
    
    // 使用 navigate 进行客户端路由跳转，避免页面重载
    navigate(fullPath, { replace: true });
  };

  return (
    <div className="relative inline-block">
      <select
        value={currentValue}
        onChange={handleLanguageChange}
        className="appearance-none bg-white border border-gray-300 rounded-md pl-4 pr-10 py-2 text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-ishine-blue-500 focus:border-transparent cursor-pointer min-w-[140px]"
      >
        {languages.map((option: Language) => (
          <option key={option.code} value={option.code}>
            {option.flag} {option.nativeName || option.name}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
    </div>
  );
};

export default LanguageSelector;