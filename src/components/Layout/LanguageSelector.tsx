import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { languages } from '../../data/languages';

export const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredLanguages = languages.filter(lang =>
    lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lang.nativeName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedLanguages = filteredLanguages.reduce((acc, lang) => {
    if (!acc[lang.region]) {
      acc[lang.region] = [];
    }
    acc[lang.region].push(lang);
    return acc;
  }, {} as Record<string, typeof languages>);

  const handleLanguageSelect = (language: typeof languages[0]) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    setSearchTerm('');
  };

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Prevent body scroll when dropdown is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
      >
        <span className="text-lg">{selectedLanguage.flag}</span>
        <span className="hidden sm:inline">English</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white rounded-2xl shadow-2xl border border-gray-200" style={{ 
          width: '110%', 
          height: '900%', 
          maxHeight: '90vh',
          top: '5vh',
          left: '5vw',
          right: '5vw',
          bottom: '5vh'
        }}>
          <div className="h-full flex flex-col p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-6 flex-shrink-0">
              <h2 className="text-2xl font-bold text-gray-900">Select Language & Region</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="sr-only">Close</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="relative mb-6 flex-shrink-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for a country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ishine-blue-500 focus:border-ishine-blue-500 bg-white transition-all"
              />
            </div>

            <div className="flex-1 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full overflow-y-auto bg-white rounded-xl p-4">
                {Object.entries(groupedLanguages).map(([region, langs]) => (
                  <div key={region} className="h-fit">
                    <h3 className="font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-2 sticky top-0 bg-white">
                      {region}
                    </h3>
                    <div className="space-y-2">
                      {langs.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageSelect(lang)}
                          className="flex items-center space-x-3 w-full text-left p-3 rounded-xl bg-white hover:bg-ishine-blue-500 transition-all duration-200 group border border-transparent hover:border-ishine-blue-500 hover:shadow-md"
                        >
                          <span className="text-lg">{lang.flag}</span>
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-white transition-colors">{lang.name}</div>
                            <div className="text-sm text-gray-500 group-hover:text-gray-200 transition-colors">{lang.nativeName}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};