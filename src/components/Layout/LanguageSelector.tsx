import React from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext'; // 根据你的项目路径调整

interface LanguageOption {
  code: string;
  country: string;
  label: string;
  flag: string;
}

const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, currentCountry, setLanguage } = useLanguage();

  // 语言选项配置
  const languageOptions: LanguageOption[] = [
    { code: 'en', country: 'global', label: 'English', flag: '🌐' }, // 默认全球英语
    { code: 'en', country: 'us', label: 'English (US)', flag: '🇺🇸' },
    { code: 'en', country: 'gb', label: 'English (UK)', flag: '🇬🇧' },
    { code: 'de', country: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', country: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'es', country: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'it', country: 'it', label: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', country: 'pt', label: 'Português', flag: '🇵🇹' },
    { code: 'zh', country: 'cn', label: '中文', flag: '🇨🇳' },
    { code: 'ja', country: 'jp', label: '日本語', flag: '🇯🇵' },
    { code: 'ko', country: 'kr', label: '한국어', flag: '🇰🇷' },
  ];

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const [langCode, countryCode] = selectedValue.split('-');
    setLanguage(langCode, countryCode);
  };

  // 构建当前选中值
  const currentValue = `${currentLanguage}-${currentCountry}`;

  return (
    <div className="relative inline-block">
      <select
        value={currentValue}
        onChange={handleLanguageChange}
        className="
          appearance-none bg-white border border-gray-300 rounded-md
          pl-4 pr-10 py-2 text-sm font-medium text-gray-700
          hover:border-gray-400 focus:outline-none focus:ring-2 
          focus:ring-ishine-blue-500 focus:border-transparent
          cursor-pointer min-w-[140px]
        "
      >
        {languageOptions.map((option) => (
          <option 
            key={`${option.code}-${option.country}`} 
            value={`${option.code}-${option.country}`}
          >
            {option.flag} {option.label}
          </option>
        ))}
      </select>
      
      {/* 自定义下拉箭头 */}
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
    </div>
  );
};

export default LanguageSwitcher;
