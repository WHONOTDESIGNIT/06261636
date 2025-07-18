import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import resourcesToBackend from 'i18next-resources-to-backend';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .use(resourcesToBackend((language) => import(`./translations/${language}.json`)))
  .init({
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    backend: { loadPath: '/translations/{{lng}}.json' },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18next; 