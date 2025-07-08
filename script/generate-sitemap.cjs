// 所有页面路径
const pages = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/solutions', priority: '0.9', changefreq: 'monthly' },
  { path: '/ipl-hair-removal', priority: '0.9', changefreq: 'monthly' },
  { path: '/how-to-use', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/country', priority: '0.8', changefreq: 'monthly' },
  // about 子页面
  { path: '/about/brand-story', priority: '0.8', changefreq: 'monthly' },
  { path: '/about/company', priority: '0.8', changefreq: 'monthly' },
  { path: '/about/core-principles', priority: '0.8', changefreq: 'monthly' },
  { path: '/about/founder-message', priority: '0.8', changefreq: 'monthly' },
  { path: '/about/global-witness', priority: '0.8', changefreq: 'monthly' },
  { path: '/about/quality', priority: '0.8', changefreq: 'monthly' },
  { path: '/about/technology', priority: '0.8', changefreq: 'monthly' },
  // solutions 子页面
  { path: '/solutions/brand-customization', priority: '0.7', changefreq: 'monthly' },
  { path: '/solutions/compliance', priority: '0.7', changefreq: 'monthly' },
  { path: '/solutions/design-prototyping', priority: '0.7', changefreq: 'monthly' },
  { path: '/solutions/drop-shipping', priority: '0.7', changefreq: 'monthly' },
  { path: '/solutions/dual-lamp-ipl', priority: '0.7', changefreq: 'monthly' },
  { path: '/solutions/global-shipping', priority: '0.7', changefreq: 'monthly' },
  { path: '/solutions/logo-printing', priority: '0.7', changefreq: 'monthly' },
  { path: '/solutions/multi-head-ipl', priority: '0.7', changefreq: 'monthly' },
  { path: '/solutions/packaging', priority: '0.7', changefreq: 'monthly' },
  // service 子页面
  { path: '/service/after-sales-service', priority: '0.7', changefreq: 'monthly' },
  { path: '/service/beauty-sourcing', priority: '0.7', changefreq: 'monthly' },
  { path: '/service/gallery', priority: '0.7', changefreq: 'monthly' },
  { path: '/service/help-center', priority: '0.7', changefreq: 'monthly' },
  { path: '/service/ipl-manufacturing', priority: '0.7', changefreq: 'monthly' },
  { path: '/service/knowledge-base', priority: '0.7', changefreq: 'monthly' },
  { path: '/service/pricing-guide', priority: '0.7', changefreq: 'monthly' },
  { path: '/service/videos', priority: '0.7', changefreq: 'monthly' },
  { path: '/service/win-fda-listing', priority: '0.7', changefreq: 'monthly' },
  // ipl 子页面
  { path: '/ipl/ai-powered-ipl', priority: '0.8', changefreq: 'monthly' },
  { path: '/ipl/battery-powered-ipl', priority: '0.8', changefreq: 'monthly' },
  { path: '/ipl/dual-lamp-ipl-device', priority: '0.8', changefreq: 'monthly' },
  { path: '/ipl/emerald-ipl', priority: '0.8', changefreq: 'monthly' },
  { path: '/ipl/handheld-ipl', priority: '0.8', changefreq: 'monthly' },
  { path: '/ipl/ice-cooling-ipl', priority: '0.8', changefreq: 'monthly' },
  { path: '/ipl/ice-feeling-ipl', priority: '0.8', changefreq: 'monthly' },
  { path: '/ipl/skin-sensor-ipl', priority: '0.8', changefreq: 'monthly' },
  { path: '/ipl/smart-app-ipl', priority: '0.8', changefreq: 'monthly' },
  // blog 子页面
  { path: '/blog/fda-510k-pathway', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/future-home-hair-removal', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/industries', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/ipl-best-choice', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/news-insights', priority: '0.7', changefreq: 'weekly' },
  { path: '/blog/sapphire-cooling', priority: '0.7', changefreq: 'monthly' },
  // accessories 子页面
  { path: '/accessories/adapter', priority: '0.7', changefreq: 'monthly' },
  { path: '/accessories/filter', priority: '0.7', changefreq: 'monthly' },
  { path: '/accessories/protective-goggles', priority: '0.7', changefreq: 'monthly' },
  { path: '/accessories/sapphire-lens', priority: '0.7', changefreq: 'monthly' },
  { path: '/shipping-cost', priority: '0.7', changefreq: 'monthly' },
];

// 新增未收录页面
const extraPages = [
  '/sitemap',
  '/shipping-cost',
  '/iplmanufacturer/[countryCode]', // 动态路由可按需展开或示例
  '/about/founder-message',
  '/about/technology',
  '/about/global-witness',
  '/about/core-principles',
  '/about/company',
  '/about/brand-story',
  '/about/quality'
];

// 生成所有语种的路径
const allLangs = ['en', 'zh', 'fr', 'de', 'es', 'it', 'pt', 'ru', 'ja', 'ko', 'hi', 'ar', 'th', 'vi', 'id', 'ms', 'he', 'tr', 'nl', 'cs', 'da', 'et', 'hr'];
const extraLangPages = [];
extraPages.forEach(page => {
  allLangs.forEach(lang => {
    if (lang === 'en') {
      extraLangPages.push(page);
    } else {
      extraLangPages.push(`/${lang}${page}`);
    }
  });
});

// 合并所有页面路径
const allPaths = [...pages.map(p => p.path), ...extraLangPages];

// 生成sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPaths.map(path => `<url><loc>${path}</loc></url>`).join('')}
</urlset>`;

// 保存sitemap.xml到文件
const fs = require('fs');
const path = require('path');
const sitemapPath = path.join(__dirname, 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap);

console.log('Sitemap generated successfully!'); 