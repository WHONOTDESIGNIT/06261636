import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import resourcesToBackend from 'i18next-resources-to-backend';

// @ts-expect-error: i18next types are not fully compatible with the current configuration
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpBackend)
  .use(resourcesToBackend((language: string) => import(`./translations/${language}.json`)))
  .init({
    fallbackLng: 'en',
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
    returnNull: false,
    returnEmptyString: false,
    saveMissing: true,
    saveMissingTo: 'all',
    // 添加更多的配置选项
    load: 'languageOnly', // 只加载语言代码，不加载区域设置
    preload: ['en'], // 预加载英语翻译
    keySeparator: '.', // 使用点号作为键分隔符
    nsSeparator: ':', // 使用冒号作为命名空间分隔符
    pluralSeparator: '_', // 使用下划线作为复数分隔符
    contextSeparator: '_', // 使用下划线作为上下文分隔符
    appendNamespaceToMissingKey: true, // 在缺失的键前添加命名空间
    parseMissingKeyHandler: (key) => {
      console.warn(`Missing translation key: ${key}`);
      return key;
    }
  })
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