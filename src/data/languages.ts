export const languages = [
  // Europe
  { code: 'nl-be', name: 'Belgium', nativeName: 'Nederlands', flag: '🇧🇪', region: 'Europe' },
  { code: 'fr-be', name: 'Belgium', nativeName: 'Français', flag: '🇧🇪', region: 'Europe' },
  { code: 'cs-cz', name: 'Czech Republic', nativeName: 'Čeština', flag: '🇨🇿', region: 'Europe' },
  { code: 'da-dk', name: 'Denmark', nativeName: 'Dansk', flag: '🇩🇰', region: 'Europe' },
  { code: 'de-de', name: 'Germany', nativeName: 'Deutsch', flag: '🇩🇪', region: 'Europe' },
  { code: 'et-ee', name: 'Estonia', nativeName: 'Eesti', flag: '🇪🇪', region: 'Europe' },
  { code: 'es-es', name: 'Spain', nativeName: 'Español', flag: '🇪🇸', region: 'Europe' },
  { code: 'fr-fr', name: 'France', nativeName: 'Français', flag: '🇫🇷', region: 'Europe' },
  { code: 'hr-hr', name: 'Croatia', nativeName: 'Hrvatski', flag: '🇭🇷', region: 'Europe' },
  { code: 'en-ie', name: 'Ireland', nativeName: 'English', flag: '🇮🇪', region: 'Europe' },
  { code: 'it-it', name: 'Italy', nativeName: 'Italiano', flag: '🇮🇹', region: 'Europe' },
  { code: 'en-gb', name: 'United Kingdom', nativeName: 'English', flag: '🇬🇧', region: 'Europe' },
  { code: 'pt-pt', name: 'Portugal', nativeName: 'Português', flag: '🇵🇹', region: 'Europe' },
  { code: 'nl-nl', name: 'Netherlands', nativeName: 'Nederlands', flag: '🇳🇱', region: 'Europe' },
  { code: 'sv-se', name: 'Sweden', nativeName: 'Svenska', flag: '🇸🇪', region: 'Europe' },
  { code: 'no-no', name: 'Norway', nativeName: 'Norsk', flag: '🇳🇴', region: 'Europe' },
  { code: 'fi-fi', name: 'Finland', nativeName: 'Suomi', flag: '🇫🇮', region: 'Europe' },
  
  // North America
  { code: 'en-ca', name: 'Canada', nativeName: 'English', flag: '🇨🇦', region: 'North America' },
  { code: 'fr-ca', name: 'Canada', nativeName: 'Français', flag: '🇨🇦', region: 'North America' },
  { code: 'en-us', name: 'United States', nativeName: 'English', flag: '🇺🇸', region: 'North America' },
  { code: 'es-mx', name: 'Mexico', nativeName: 'Español', flag: '🇲🇽', region: 'North America' },
  
  // Latin America
  { code: 'es-ar', name: 'Argentina', nativeName: 'Español', flag: '🇦🇷', region: 'Latin America' },
  { code: 'pt-br', name: 'Brazil', nativeName: 'Português', flag: '🇧🇷', region: 'Latin America' },
  { code: 'es-cl', name: 'Chile', nativeName: 'Español', flag: '🇨🇱', region: 'Latin America' },
  { code: 'es-co', name: 'Colombia', nativeName: 'Español', flag: '🇨🇴', region: 'Latin America' },
  { code: 'es-pe', name: 'Peru', nativeName: 'Español', flag: '🇵🇪', region: 'Latin America' },
  
  // Asia Pacific
  { code: 'en-au', name: 'Australia', nativeName: 'English', flag: '🇦🇺', region: 'Asia Pacific' },
  { code: 'en-nz', name: 'New Zealand', nativeName: 'English', flag: '🇳🇿', region: 'Asia Pacific' },
  { code: 'en-in', name: 'India', nativeName: 'English', flag: '🇮🇳', region: 'Asia Pacific' },
  { code: 'hi-in', name: 'India', nativeName: 'हिन्दी', flag: '🇮🇳', region: 'Asia Pacific' },
  { code: 'ja-jp', name: 'Japan', nativeName: '日本語', flag: '🇯🇵', region: 'Asia Pacific' },
  { code: 'ko-kr', name: 'South Korea', nativeName: '한국어', flag: '🇰🇷', region: 'Asia Pacific' },
  { code: 'zh-cn', name: 'China', nativeName: '简体中文', flag: '🇨🇳', region: 'Asia Pacific' },
  { code: 'zh-tw', name: 'Taiwan', nativeName: '繁體中文', flag: '🇹🇼', region: 'Asia Pacific' },
  { code: 'zh-hk', name: 'Hong Kong', nativeName: '繁體中文', flag: '🇭🇰', region: 'Asia Pacific' },
  { code: 'th-th', name: 'Thailand', nativeName: 'ไทย', flag: '🇹🇭', region: 'Asia Pacific' },
  { code: 'vi-vn', name: 'Vietnam', nativeName: 'Tiếng Việt', flag: '🇻🇳', region: 'Asia Pacific' },
  { code: 'id-id', name: 'Indonesia', nativeName: 'Bahasa Indonesia', flag: '🇮🇩', region: 'Asia Pacific' },
  { code: 'ms-my', name: 'Malaysia', nativeName: 'Bahasa Malaysia', flag: '🇲🇾', region: 'Asia Pacific' },
  { code: 'en-sg', name: 'Singapore', nativeName: 'English', flag: '🇸🇬', region: 'Asia Pacific' },
  { code: 'en-ph', name: 'Philippines', nativeName: 'English', flag: '🇵🇭', region: 'Asia Pacific' },
  
  // Middle East & Africa
  { code: 'ar-ae', name: 'United Arab Emirates', nativeName: 'العربية', flag: '🇦🇪', region: 'Middle East & Africa' },
  { code: 'ar-sa', name: 'Saudi Arabia', nativeName: 'العربية', flag: '🇸🇦', region: 'Middle East & Africa' },
  { code: 'he-il', name: 'Israel', nativeName: 'עברית', flag: '🇮🇱', region: 'Middle East & Africa' },
  { code: 'tr-tr', name: 'Turkey', nativeName: 'Türkçe', flag: '🇹🇷', region: 'Middle East & Africa' },
  { code: 'en-za', name: 'South Africa', nativeName: 'English', flag: '🇿🇦', region: 'Middle East & Africa' },
  { code: 'af-za', name: 'South Africa', nativeName: 'Afrikaans', flag: '🇿🇦', region: 'Middle East & Africa' },
  { code: 'en-ng', name: 'Nigeria', nativeName: 'English', flag: '🇳🇬', region: 'Middle East & Africa' },
  { code: 'sw-ke', name: 'Kenya', nativeName: 'Kiswahili', flag: '🇰🇪', region: 'Middle East & Africa' },
  { code: 'ar-eg', name: 'Egypt', nativeName: 'العربية', flag: '🇪🇬', region: 'Middle East & Africa' },
  
  // Global
  { code: 'en-global', name: 'Global', nativeName: 'English', flag: '🌍', region: 'Global' }
];