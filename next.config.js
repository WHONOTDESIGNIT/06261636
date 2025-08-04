const nextIntlPlugin = require('next-intl/plugin');

module.exports = nextIntlPlugin()({
  i18n: {
    locales: ['en', 'ar', 'de', 'es', 'he', 'nl', 'pl', 'pt'],  // 从您的 translations 目录获取
    defaultLocale: 'en'
  }
});