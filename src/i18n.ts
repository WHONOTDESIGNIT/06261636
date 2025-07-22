import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import resourcesToBackend from 'i18next-resources-to-backend';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .use(resourcesToBackend((language: string) => import(`./translations/${language}.json`)))
  .init({
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      caches: ['localStorage']
    },
    debug: true, // Enable debug mode to see what's happening
    react: {
      useSuspense: false // Disable Suspense to avoid loading issues
    }
  });

export default i18next; 