import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import resourcesToBackend from 'i18next-resources-to-backend';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpBackend)
  .use(resourcesToBackend((language: string) => import(`./translations/${language}.json`)))
  // @ts-ignore: i18next types are not fully compatible
  .init({
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      caches: ['localStorage']
    },
    debug: true,
    react: {
      useSuspense: false
    },
    returnNull: false,
    returnEmptyString: false,
    saveMissing: true,
    saveMissingTo: 'all'
  })
  .then(() => {
    console.log('i18next initialized successfully');
  })
  .catch((error) => {
    console.error('Failed to initialize i18next:', error);
  });

// Add event listeners for debugging
i18next.on('initialized', (options: any) => {
  console.log('i18next initialized:', options);
});

i18next.on('loaded', (loaded: any) => {
  console.log('i18next loaded:', loaded);
});

i18next.on('failedLoading', (lng: string, ns: string, msg: string) => {
  console.error('i18next failed loading:', { lng, ns, msg });
});

i18next.on('missingKey', (lngs: string[], namespace: string, key: string, res: string) => {
  console.warn('i18next missing key:', { lngs, namespace, key, res });
});

export default i18next; 