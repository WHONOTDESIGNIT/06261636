import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Search, X, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { languages } from '../../data/languages';
import { getCountryCodeFromLanguageCode, formatCountryUrl } from '../../utils/languageUtils';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  region: string;
}

export const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  
  const triggerRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Filter and group languages
  const filteredLanguages = languages.filter(lang =>
    lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lang.nativeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lang.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedLanguages = filteredLanguages.reduce((acc, lang) => {
    if (!acc[lang.region]) {
      acc[lang.region] = [];
    }
    acc[lang.region].push(lang);
    return acc;
  }, {} as Record<string, Language[]>);

  // Column layout for responsive design
  const columns = [
    ['Europe'],
    ['North America', 'Middle East & Africa'],
    ['Asia Pacific', 'Latin America', 'Global']
  ];

  // Handle click outside to close modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
      
      // Focus search input when modal opens
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!isOpen) return;

    const allLanguages = Object.values(groupedLanguages).flat();
    
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setFocusedIndex(prev => 
          prev < allLanguages.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        event.preventDefault();
        setFocusedIndex(prev => 
          prev > 0 ? prev - 1 : allLanguages.length - 1
        );
        break;
      case 'Enter':
        event.preventDefault();
        if (focusedIndex >= 0 && allLanguages[focusedIndex]) {
          handleLanguageSelect(allLanguages[focusedIndex]);
        }
        break;
      case 'Tab':
        // Allow normal tab navigation within modal
        break;
      default:
        // Focus search input for typing
        if (event.key.length === 1 && searchInputRef.current) {
          searchInputRef.current.focus();
        }
        break;
    }
  };

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    setSearchTerm('');
    setFocusedIndex(-1);
    
    // Extract country code and navigate
    const countryCode = getCountryCodeFromLanguageCode(language.code);
    const countryUrl = formatCountryUrl(countryCode);
    navigate(countryUrl);
    
    // Return focus to trigger button
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 100);
  };

  const handleTriggerClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchTerm('');
      setFocusedIndex(-1);
    }
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        onClick={handleTriggerClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleTriggerClick();
          }
        }}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-200 rounded-lg border border-gray-200 bg-gradient-to-b from-gray-100 to-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-ishine-blue-500 focus:ring-offset-2"
        style={{
          borderRadius: '8px',
          padding: '12px 16px',
          background: 'linear-gradient(to bottom, rgb(241, 241, 241), rgb(255, 255, 255))',
          border: '1px solid #d1d5db'
        }}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label={`Current language: ${selectedLanguage.nativeName}. Click to change language.`}
      >
        <span className="text-lg" role="img" aria-label={`${selectedLanguage.name} flag`}>
          {selectedLanguage.flag}
        </span>
        <span className="hidden sm:inline font-medium">
          {selectedLanguage.nativeName}
        </span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {/* Full-Screen Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-white"
          role="dialog"
          aria-modal="true"
          aria-labelledby="language-selector-title"
          onKeyDown={handleKeyDown}
        >
          <div 
            ref={modalRef}
            className="h-full flex flex-col animate-in fade-in duration-200"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
              <div className="flex items-center space-x-3">
                <Globe className="w-6 h-6 text-ishine-blue-500" />
                <h2 
                  id="language-selector-title"
                  className="text-2xl font-bold text-gray-900"
                >
                  Select Language & Region
                </h2>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-ishine-blue-500"
                aria-label="Close language selector"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Search Bar */}
            <div className="p-6 border-b border-gray-200 bg-gray-50">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search for a country or language..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setFocusedIndex(-1);
                  }}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ishine-blue-500 focus:border-ishine-blue-500 bg-white transition-all duration-200"
                  aria-label="Search languages and countries"
                />
              </div>
            </div>

            {/* Language Grid */}
            <div className="flex-1 overflow-y-auto p-6">
              {Object.entries(groupedLanguages).length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {columns.map((regions, colIdx) => (
                    <div key={colIdx} className="space-y-8">
                      {regions.map(region => (
                        groupedLanguages[region] && groupedLanguages[region].length > 0 ? (
                          <div key={region} className="space-y-4">
                            <h3 className="font-semibold text-gray-900 text-lg mb-4 pb-2 border-b border-gray-200">
                              {region}
                            </h3>
                            <div className="space-y-2">
                              {groupedLanguages[region].map((lang, langIndex) => {
                                const globalIndex = Object.values(groupedLanguages)
                                  .flat()
                                  .findIndex(l => l.code === lang.code);
                                const isFocused = globalIndex === focusedIndex;
                                const isSelected = selectedLanguage.code === lang.code;
                                
                                return (
                                  <button
                                    key={lang.code}
                                    onClick={() => handleLanguageSelect(lang)}
                                    className={`flex items-center space-x-3 w-full text-left p-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ishine-blue-500 ${
                                      isSelected
                                        ? 'bg-ishine-blue-50 border border-ishine-blue-200 shadow-sm'
                                        : isFocused
                                        ? 'bg-navy-blue text-white'
                                        : 'bg-white hover:bg-navy-blue hover:text-white border border-transparent hover:border-gray-200'
                                    }`}
                                    aria-pressed={isSelected}
                                    aria-label={`Select ${lang.name} - ${lang.nativeName}`}
                                  >
                                    <span 
                                      className="text-xl flex-shrink-0" 
                                      role="img" 
                                      aria-label={`${lang.name} flag`}
                                    >
                                      {lang.flag}
                                    </span>
                                    <div className="flex-1 min-w-0">
                                      <div className={`font-medium truncate ${
                                        isSelected ? 'text-ishine-blue-700' : ''
                                      }`}>
                                        {lang.name}
                                      </div>
                                      <div className={`text-sm truncate ${
                                        isSelected 
                                          ? 'text-ishine-blue-600' 
                                          : isFocused || (lang.code !== selectedLanguage.code && 'group-hover:text-white')
                                          ? 'opacity-90' 
                                          : 'text-gray-500'
                                      }`}>
                                        {lang.nativeName}
                                      </div>
                                    </div>
                                    {isSelected && (
                                      <div className="w-3 h-3 rounded-full bg-ishine-blue-500 flex-shrink-0"></div>
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ) : null
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                  <Search className="w-12 h-12 mb-4 text-gray-300" />
                  <p className="text-lg font-medium">No languages found</p>
                  <p className="text-sm">Try a different search term</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-4">
                  <span>Use ↑↓ arrow keys to navigate</span>
                  <span>Press Enter to select</span>
                  <span>Press Esc to close</span>
                </div>
                <div>
                  {Object.values(groupedLanguages).flat().length} languages available
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};