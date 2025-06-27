import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Search, ChevronsDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { languages } from '../../data/languages';
import { getCountryCodeFromLanguageCode, formatCountryUrl } from '../../utils/languageUtils';

export const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [animationPosition, setAnimationPosition] = useState({ bottom: 30, left: '50%' });
  
  const languageGridRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  // Calculate floating animation position based on viewport and Language Grid boundaries
  useEffect(() => {
    if (!isOpen || !languageGridRef.current) return;

    const updateAnimationPosition = () => {
      const gridElement = languageGridRef.current;
      if (!gridElement) return;

      const gridRect = gridElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      // Calculate visible portion of Language Grid
      const gridTop = Math.max(0, gridRect.top);
      const gridBottom = Math.min(viewportHeight, gridRect.bottom);
      const gridLeft = Math.max(0, gridRect.left);
      const gridRight = Math.min(viewportWidth, gridRect.right);

      // Check if Language Grid is visible in viewport
      const isGridVisible = gridBottom > gridTop && gridRight > gridLeft;

      if (isGridVisible) {
        // Calculate position relative to visible portion of Language Grid
        const visibleGridHeight = gridBottom - gridTop;
        const visibleGridWidth = gridRight - gridLeft;
        
        // Position animation at bottom of visible Language Grid area
        const bottomOffset = Math.max(30, viewportHeight - gridBottom + 30);
        const leftPosition = gridLeft + (visibleGridWidth / 2);
        
        setAnimationPosition({
          bottom: bottomOffset,
          left: `${leftPosition}px`
        });
      } else {
        // Hide animation when Language Grid is not visible
        setAnimationPosition({
          bottom: -100, // Move off-screen
          left: '50%'
        });
      }
    };

    // Initial position calculation
    updateAnimationPosition();

    // Update position on scroll and resize
    const handleScroll = () => {
      requestAnimationFrame(updateAnimationPosition);
    };

    const handleResize = () => {
      updateAnimationPosition();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const handleLanguageSelect = (language: typeof languages[0]) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    setSearchTerm('');
    
    // Extract country code from language code
    const countryCode = getCountryCodeFromLanguageCode(language.code);
    
    // Navigate to country-specific URL
    const countryUrl = formatCountryUrl(countryCode);
    navigate(countryUrl);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
      >
        <span className="text-lg">{selectedLanguage.flag}</span>
        <span className="hidden sm:inline">{selectedLanguage.name}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-white">
            <div className="max-w-4xl mx-auto p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Select Language & Region</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  <span className="sr-only">Close</span>
                  ×
                </button>
              </div>

              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for a country..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ishine-blue-500 focus:border-ishine-blue-500 bg-white"
                />
              </div>

              {/* Language Grid with ref for position tracking */}
              <div 
                ref={languageGridRef}
                className="relative bg-white rounded-xl border border-gray-200 p-[30px] max-h-96 overflow-y-auto"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(groupedLanguages).map(([region, langs]) => (
                    <div key={region}>
                      <h3 className="font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-2">
                        {region}
                      </h3>
                      <div className="space-y-2">
                        {langs.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => handleLanguageSelect(lang)}
                            className="flex items-center space-x-3 w-full text-left p-2 rounded-lg hover:bg-navy-blue hover:text-white transition-all duration-200"
                          >
                            <span className="text-lg">{lang.flag}</span>
                            <div>
                              <div className="font-medium">{lang.name}</div>
                              <div className="text-sm opacity-75">{lang.nativeName}</div>
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

          {/* Floating Animation Container with position: fixed */}
          <div
            ref={animationRef}
            className="fixed z-[60] transition-all duration-300 ease-out"
            style={{
              bottom: `${animationPosition.bottom}px`,
              left: animationPosition.left,
              transform: 'translateX(-50%)',
            }}
          >
            <ChevronsDown className="w-[30px] h-[30px] text-gray-400 animate-bounce-down drop-shadow-lg" />
          </div>
        </>
      )}
    </div>
  );
};