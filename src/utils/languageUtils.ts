// Language utility functions for routing and translation management
export const getCountryCodeFromLanguageCode = (languageCode: string): string => {
  // Extract country code from language code (e.g., 'en-us' -> 'us')
  const parts = languageCode.split('-');
  return parts.length > 1 ? parts[1] : parts[0];
};

export const getLanguageFromCountryCode = (countryCode: string): string => {
  // Map country codes to primary language codes
  const countryToLanguage: Record<string, string> = {
    'us': 'en',
    'gb': 'en',
    'ca': 'en',
    'au': 'en',
    'nz': 'en',
    'ie': 'en',
    'sg': 'en',
    'ph': 'en',
    'in': 'en',
    'za': 'en',
    'ng': 'en',
    'ke': 'sw',
    'de': 'de',
    'fr': 'fr',
    'es': 'es',
    'it': 'it',
    'pt': 'pt',
    'nl': 'nl',
    'se': 'sv',
    'no': 'no',
    'fi': 'fi',
    'dk': 'da',
    'cz': 'cs',
    'ee': 'et',
    'hr': 'hr',
    'be': 'nl', // Default to Dutch for Belgium
    'mx': 'es',
    'ar': 'es',
    'br': 'pt',
    'cl': 'es',
    'co': 'es',
    'pe': 'es',
    'jp': 'ja',
    'kr': 'ko',
    'cn': 'zh',
    'tw': 'zh',
    'hk': 'zh',
    'th': 'th',
    'vn': 'vi',
    'id': 'id',
    'my': 'ms',
    'ae': 'ar',
    'sa': 'ar',
    'il': 'he',
    'tr': 'tr',
    'eg': 'ar',
    'global': 'en'
  };
  
  return countryToLanguage[countryCode.toLowerCase()] || 'en';
};

export const formatCountryUrl = (countryCode: string): string => {
  return `/iplmanufacturer/${countryCode.toLowerCase()}`;
};