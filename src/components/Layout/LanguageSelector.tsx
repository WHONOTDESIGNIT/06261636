//
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

  /* ---------------- 第一次加载：按 IP 预选语言 ---------------- */
  useEffect(() => {
    if (!currentLanguage || !currentCountry) {
      fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
          const countryCode = data.country_code ? data.country_code.toLowerCase() : '';
          const match = languages.find(lang => lang.code.endsWith(`-${countryCode}`));
          if (match) {
            const [lang, country] = match.code.split('-');
            setLanguage(lang, country);
          } else {
            setLanguage('en', 'global');
          }
        })
        .catch(() => setLanguage('en', 'global'));
    }
  }, [currentLanguage, currentCountry, setLanguage]);

  /* ---------------- 语言切换下拉 ---------------- */
  const currentValue = `${currentLanguage || 'en'}-${currentCountry || 'global'}`;

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCode = e.target.value;
    const [langCode, countryCode] = selectedCode.split('-');
    setLanguage(langCode, countryCode);

    let newPath = location.pathname;
    const pathSegments = newPath.split('/');
    if (pathSegments.length > 1 && languages.some(l => l.code.startsWith(pathSegments[1]))) {
      // 当前有语言前缀，去掉
      pathSegments.splice(1, 1);
      newPath = pathSegments.join('/') || '/';
    }
    if (langCode !== 'en') {
      // 非英文加前缀
      if (!newPath.startsWith('/')) newPath = '/' + newPath;
      newPath = `/${langCode}${newPath}`;
    } else {
      // 英文不加前缀，确保没有 /en
      newPath = newPath.replace(/^\/en/, '') || '/';
    }
    navigate(`${newPath}${location.search}`);
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