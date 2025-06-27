import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface LanguageContextType {
  currentLanguage: string;
  currentCountry: string;
  setLanguage: (languageCode: string, countryCode: string) => void;
  t: (key: string, fallback?: string) => string;
  loading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [currentCountry, setCurrentCountry] = useState('global');
  const { t, loading } = useTranslation(currentLanguage);

  useEffect(() => {
    // Check if we're on a country-specific route
    const path = window.location.pathname;
    const countryMatch = path.match(/\/iplmanufacturer\/([a-z]{2})/);
    
    if (countryMatch) {
      const countryCode = countryMatch[1];
      setCurrentCountry(countryCode);
      
      // Set language based on country (you can expand this mapping)
      const languageMap: Record<string, string> = {
        'us': 'en', 'gb': 'en', 'ca': 'en', 'au': 'en',
        'de': 'de', 'fr': 'fr', 'es': 'es', 'it': 'it',
        'pt': 'pt', 'nl': 'nl', 'mx': 'es', 'br': 'pt',
        'jp': 'ja', 'kr': 'ko', 'cn': 'zh', 'tw': 'zh',
        'th': 'th', 'vn': 'vi', 'id': 'id', 'my': 'ms',
        'ae': 'ar', 'sa': 'ar', 'il': 'he', 'tr': 'tr',
        'in': 'hi', 'cz': 'cs', 'dk': 'da', 'ee': 'et',
        'hr': 'hr', 'be': 'nl'
      };
      
      const detectedLanguage = languageMap[countryCode] || 'en';
      setCurrentLanguage(detectedLanguage);
    }
  }, []);

  const setLanguage = (languageCode: string, countryCode: string) => {
    setCurrentLanguage(languageCode);
    setCurrentCountry(countryCode);
    
    // Store in localStorage for persistence
    localStorage.setItem('selectedLanguage', languageCode);
    localStorage.setItem('selectedCountry', countryCode);
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      currentCountry,
      setLanguage,
      t,
      loading
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};