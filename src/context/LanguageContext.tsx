import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface LanguageOption {
  code: string;
  country: string;
  label: string;
  flag: string;
}

const LanguageSelector: React.FC = () => {
  const { currentLanguage, currentCountry, setLanguage } = useLanguage();

  // 完整语言选项配置 - 包含你的所有映射
  const languageOptions: LanguageOption[] = [
    // 全球默认选项 (首选项)
    { code: 'en', country: 'global', label: 'English', flag: '🌐' },
    
    // 英语系国家
    { code: 'en', country: 'us', label: 'English (United States)', flag: '🇺🇸' },
    { code: 'en', country: 'gb', label: 'English (United Kingdom)', flag: '🇬🇧' },
    { code: 'en', country: 'ca', label: 'English (Canada)', flag: '🇨🇦' },
    { code: 'en', country: 'au', label: 'English (Australia)', flag: '🇦🇺' },
    
    // 欧洲主要语言
    { code: 'de', country: 'de', label: 'Deutsch (Deutschland)', flag: '🇩🇪' },
    { code: 'fr', country: 'fr', label: 'Français (France)', flag: '🇫🇷' },
    { code: 'es', country: 'es', label: 'Español (España)', flag: '🇪🇸' },
    { code: 'it', country: 'it', label: 'Italiano (Italia)', flag: '🇮🇹' },
    { code: 'pt', country: 'pt', label: 'Português (Portugal)', flag: '🇵🇹' },
    { code: 'nl', country: 'nl', label: 'Nederlands (Nederland)', flag: '🇳🇱' },
    
    // 拉丁美洲
    { code: 'es', country: 'mx', label: 'Español (México)', flag: '🇲🇽' },
    { code: 'pt', country: 'br', label: 'Português (Brasil)', flag: '🇧🇷' },
    
    // 亚洲主要语言
    { code: 'ja', country: 'jp', label: '日本語 (日本)', flag: '🇯🇵' },
    { code: 'ko', country: 'kr', label: '한국어 (대한민국)', flag: '🇰🇷' },
    { code: 'zh', country: 'cn', label: '中文 (中国)', flag: '🇨🇳' },
    { code: 'zh', country: 'tw', label: '中文 (台灣)', flag: '🇹🇼' },
    
    // 东南亚语言
    { code: 'th', country: 'th', label: 'ไทย (ประเทศไทย)', flag: '🇹🇭' },
    { code: 'vi', country: 'vn', label: 'Tiếng Việt (Việt Nam)', flag: '🇻🇳' },
    { code: 'id', country: 'id', label: 'Bahasa Indonesia (Indonesia)', flag: '🇮🇩' },
    { code: 'ms', country: 'my', label: 'Bahasa Malaysia (Malaysia)', flag: '🇲🇾' },
    
    // 中东语言
    { code: 'ar', country: 'ae', label: 'العربية (الإمارات)', flag: '🇦🇪' },
    { code: 'ar', country: 'sa', label: 'العربية (السعودية)', flag: '🇸🇦' },
    { code: 'he', country: 'il', label: 'עברית (ישראל)', flag: '🇮🇱' },
    { code: 'tr', country: 'tr', label: 'Türkçe (Türkiye)', flag: '🇹🇷' },
    
    // 其他欧洲和区域语言
    { code: 'hi', country: 'in', label: 'हिन्दी (भारत)', flag: '🇮🇳' },
    { code: 'cs', country: 'cz', label: 'Čeština (Česká republika)', flag: '🇨🇿' },
    { code: 'da', country: 'dk', label: 'Dansk (Danmark)', flag: '🇩🇰' },
    { code: 'et', country: 'ee', label: 'Eesti (Eesti)', flag: '🇪🇪' },
    { code: 'hr', country: 'hr', label: 'Hrvatski (Hrvatska)', flag: '🇭🇷' },
    { code: 'nl', country: 'be', label: 'Nederlands (België)', flag: '🇧🇪' },
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
          cursor-pointer min-w-[180px]
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

export default LanguageSelector;
