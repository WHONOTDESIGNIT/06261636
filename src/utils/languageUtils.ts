// Language utility functions for routing and translation management
export const getLanguageFromCountryCode = (countryCode: string): string => {
  // Map country codes to primary language codes
  const countryToLanguage: Record<string, string> = {
    'us': 'en', // Default to English for USA
    'gb': 'en',
    'de': 'de',
    'es': 'es',
    'pt': 'pt',
    'nl': 'nl',
    'pl': 'pl',
    'ae': 'ar',
    'sa': 'ar',
    'il': 'he',
    'global': 'en'
  };
  
  return countryToLanguage[countryCode.toLowerCase()] || 'en';
};