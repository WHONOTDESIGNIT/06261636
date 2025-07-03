import { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { languages } from '../../data/languages';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, currentCountry, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  // 首次加载时根据IP自动设置默认语言
  useEffect(() => {
    if (!currentLanguage || !currentCountry) {
      fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
          // data.country_code 例如 'IT', 'FR', 'DE', ...
          const countryCode = data.country_code ? data.country_code.toLowerCase() : '';
          // 在languages中查找code以该countryCode结尾的语言
          const match = languages.find(lang => lang.code.endsWith(`-${countryCode}`));
          if (match) {
            const [lang, country] = match.code.split('-');
            setLanguage(lang, country);
          } else {
            setLanguage('en', 'global'); // fallback
          }
        })
        .catch(() => {
          setLanguage('en', 'global'); // fallback
        });
    }
  }, [currentLanguage, currentCountry, setLanguage]);

  // 构建当前选中值
  const currentValue = `${currentLanguage || 'en'}-${currentCountry || 'global'}`;

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCode = e.target.value;
    const [langCode, countryCode] = selectedCode.split('-');
    setLanguage(langCode, countryCode);

    // 修正：用 split/join 替换第一个路径段为新语言，保证路径正确
    const pathSegments = location.pathname.split('/');
    if (pathSegments.length > 1) {
      pathSegments[1] = langCode;
      const newPath = pathSegments.join('/') || '/';
      navigate(`${newPath}${location.search}`);
    } else {
      navigate(`/${langCode}${location.search}`);
    }
  };

  return (
    <div className="relative inline-block">
      <select
        value={currentValue}
        onChange={handleLanguageChange}
        className="appearance-none bg-white border border-gray-300 rounded-md pl-4 pr-10 py-2 text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-ishine-blue-500 focus:border-transparent cursor-pointer min-w-[140px]"
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