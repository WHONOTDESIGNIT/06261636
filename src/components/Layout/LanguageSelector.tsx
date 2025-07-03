import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { languages } from '../../data/languages';

const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, currentCountry, setLanguage } = useLanguage();

  // 构建当前选中值
  const currentValue = `${currentLanguage}-${currentCountry}`;

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCode = e.target.value;
    const [langCode, countryCode] = selectedCode.split('-');
    setLanguage(langCode, countryCode);
  };

  return (
    <div className="relative inline-block w-[80vw] max-w-full">
      <select
        value={currentValue}
        onChange={handleLanguageChange}
        className="appearance-none bg-white border border-gray-300 rounded-md pl-4 pr-10 py-2 text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-ishine-blue-500 focus:border-transparent cursor-pointer w-full min-w-0"
        style={{ maxWidth: '100%' }}
      >
        {languages.map((option) => (
          <option
            key={option.code}
            value={option.code}
          >
            {option.flag} {option.nativeName || option.name}
          </option>
        ))}
      </select>
      {/* 自定义下拉箭头 */}
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
    </div>
  );
};

export default LanguageSwitcher;
