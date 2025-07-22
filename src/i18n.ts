// @ts-nocheck
import i18next, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import resourcesToBackend from 'i18next-resources-to-backend';

const config: InitOptions = {
  fallbackLng: 'en',
  supportedLngs: ['en', 'zh', 'ja', 'ko', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'ar', 'hi', 'tr'],
  interpolation: { escapeValue: false },
  detection: {
    order: ['path', 'localStorage', 'navigator'],
    caches: ['localStorage'],
    lookupFromPathIndex: 0
  },
  debug: process.env.NODE_ENV === 'development',
  react: {
    useSuspense: false
  },
  // 添加必要的回调函数
  missingKeyHandler: (lngs: readonly string[], ns: string, key: string, fallbackValue: string, updateMissing: boolean, options: any) => {
    console.warn(`Missing translation key: ${key} for languages: ${lngs.join(', ')} in namespace: ${ns}`);
    if (fallbackValue) {
      console.warn('Fallback value:', fallbackValue);
    }
    if (updateMissing) {
      console.warn('Update missing:', updateMissing);
    }
    if (options) {
      console.warn('Options:', options);
    }
  }
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpBackend)
  .use(resourcesToBackend((language: string) => import(`./translations/${language}.json`)))
  .init(config)
  .then(() => {
    console.log('i18next initialized successfully');
  })
  .catch((error) => {
    console.error('Failed to initialize i18next:', error);
  });

// 添加事件监听器用于调试
i18next.on('initialized', (options) => {
  console.log('i18next initialized:', options);
});

i18next.on('loaded', (loaded) => {
  console.log('i18next resources loaded:', loaded);
});

i18next.on('failedLoading', (lng, ns, msg) => {
  console.error('i18next failed loading:', { lng, ns, msg });
});

i18next.on('missingKey', (lngs, namespace, key, res) => {
  console.warn('i18next missing key:', { lngs, namespace, key, res });
});

// 添加语言变更监听器
i18next.on('languageChanged', (lng) => {
  // 更新文档的语言属性
  document.documentElement.lang = lng;
  
  // 更新文档的文字方向
  document.documentElement.dir = ['ar', 'he'].includes(lng) ? 'rtl' : 'ltr';
  
  // 触发自定义事件
  window.dispatchEvent(new Event('languageChanged'));
});

export default i18next; 