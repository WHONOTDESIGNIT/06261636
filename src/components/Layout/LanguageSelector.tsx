import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

const LanguageSelector = ({ languages, selectedLanguage, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [groupedLanguages, setGroupedLanguages] = useState({});

  // Define the column layout as requested
  const columns = [
    ['Europe'],
    ['North America', 'Middle East & Africa'],
    ['Asia', 'Global']
  ];

  useEffect(() => {
    // Group languages by region
    const groupByRegion = () => {
      const groups = {};
      
      languages.forEach(lang => {
        // Filter languages based on search term
        if (
          searchTerm === '' ||
          lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lang.nativeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lang.code.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          if (!groups[lang.region]) {
            groups[lang.region] = [];
          }
          groups[lang.region].push(lang);
        }
      });
      
      setGroupedLanguages(groups);
    };

    groupByRegion();
  }, [languages, searchTerm]);

  const handleLanguageSelect = (language) => {
    onSelect(language);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Search Bar */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <input
            type="text"
            placeholder="Search languages..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* Language Grid */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto pb-4">
          {Object.entries(groupedLanguages).length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {columns.map((regions, colIdx) => (
                <div key={colIdx} className="space-y-6">
                  {regions.map(region => (
                    groupedLanguages[region] && groupedLanguages[region].length > 0 ? (
                      <div key={region} className="space-y-3">
                        <h3 className="font-semibold text-gray-700 mb-2 pb-2 border-b border-gray-200">
                          {region}
                        </h3>
                        <div className="space-y-2">
                          {groupedLanguages[region].map(lang => (
                            <button
                              key={lang.code}
                              onClick={() => handleLanguageSelect(lang)}
                              className={`flex items-center space-x-3 w-full text-left p-3 rounded-lg transition-all duration-200 ${
                                selectedLanguage.code === lang.code
                                  ? 'bg-blue-50 border border-blue-200 shadow-sm'
                                  : 'bg-white hover:bg-gray-50 border border-transparent hover:border-gray-200'
                              }`}
                            >
                              <span className="text-xl">{lang.flag}</span>
                              <div className="flex-1 min-w-0">
                                <div className="font-medium text-gray-900 truncate">{lang.name}</div>
                                <div className="text-sm text-gray-500 truncate">{lang.nativeName}</div>
                              </div>
                              {selectedLanguage.code === lang.code && (
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : null
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 py-12">
              <Search className="w-12 h-12 mb-4 text-gray-300" />
              <p className="text-lg">No languages found</p>
              <p className="text-sm">Try a different search term</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;