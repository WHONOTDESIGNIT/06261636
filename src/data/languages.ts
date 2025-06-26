import { Language } from '../types';

export const languages: Language[] = [
  // Europe
  { code: 'nl-be', name: 'België', nativeName: 'Nederlands', flag: '🇧🇪', region: 'Europe' },
  { code: 'fr-be', name: 'Belgique', nativeName: 'Français', flag: '🇧🇪', region: 'Europe' },
  { code: 'cs-cz', name: 'Česká republika', nativeName: 'Čeština', flag: '🇨🇿', region: 'Europe' },
  { code: 'da-dk', name: 'Danmark', nativeName: 'Dansk', flag: '🇩🇰', region: 'Europe' },
  { code: 'de-de', name: 'Deutschland', nativeName: 'Deutsch', flag: '🇩🇪', region: 'Europe' },
  { code: 'et-ee', name: 'Eesti', nativeName: 'Eesti', flag: '🇪🇪', region: 'Europe' },
  { code: 'es-es', name: 'España', nativeName: 'Español', flag: '🇪🇸', region: 'Europe' },
  { code: 'fr-fr', name: 'France', nativeName: 'Français', flag: '🇫🇷', region: 'Europe' },
  { code: 'hr-hr', name: 'Hrvatska', nativeName: 'Hrvatski', flag: '🇭🇷', region: 'Europe' },
  { code: 'en-ie', name: 'Ireland', nativeName: 'English', flag: '🇮🇪', region: 'Europe' },
  { code: 'it-it', name: 'Italia', nativeName: 'Italiano', flag: '🇮🇹', region: 'Europe' },
  { code: 'en-gb', name: 'United Kingdom', nativeName: 'English', flag: '🇬🇧', region: 'Europe' },
  
  // North America
  { code: 'en-ca', name: 'Canada', nativeName: 'English', flag: '🇨🇦', region: 'North America' },
  { code: 'fr-ca', name: 'Canada', nativeName: 'Français', flag: '🇨🇦', region: 'North America' },
  { code: 'en-us', name: 'United States', nativeName: 'English', flag: '🇺🇸', region: 'North America' },
  
  // Latin America
  { code: 'es-ar', name: 'Argentina', nativeName: 'Español', flag: '🇦🇷', region: 'Latin America' },
  { code: 'pt-br', name: 'Brasil', nativeName: 'Português', flag: '🇧🇷', region: 'Latin America' },
  { code: 'es-mx', name: 'México', nativeName: 'Español', flag: '🇲🇽', region: 'Latin America' },
  
  // Asia Pacific
  { code: 'en-au', name: 'Australia', nativeName: 'English', flag: '🇦🇺', region: 'Asia Pacific' },
  { code: 'en-in', name: 'India', nativeName: 'English', flag: '🇮🇳', region: 'Asia Pacific' },
  { code: 'ja-jp', name: '日本', nativeName: '日本語', flag: '🇯🇵', region: 'Asia Pacific' },
  { code: 'ko-kr', name: '한국', nativeName: '한국어', flag: '🇰🇷', region: 'Asia Pacific' },
  { code: 'zh-cn', name: '中国大陆', nativeName: '中文', flag: '🇨🇳', region: 'Asia Pacific' },
  { code: 'zh-tw', name: '台灣地區', nativeName: '繁體中文', flag: '🇹🇼', region: 'Asia Pacific' },
  
  // Middle East & Africa
  { code: 'en-ae', name: 'United Arab Emirates', nativeName: 'English', flag: '🇦🇪', region: 'Middle East & Africa' },
  { code: 'en-sa', name: 'Saudi Arabia', nativeName: 'English', flag: '🇸🇦', region: 'Middle East & Africa' },
  { code: 'en-za', name: 'South Africa', nativeName: 'English', flag: '🇿🇦', region: 'Middle East & Africa' },
  
  // Global
  { code: 'en-aa', name: 'Global', nativeName: 'English', flag: '🌍', region: 'Global' }
];