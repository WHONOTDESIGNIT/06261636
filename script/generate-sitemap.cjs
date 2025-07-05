const fs = require('fs');
const path = require('path');

// 基础配置
const baseUrl = 'https://iplmanufacturer.com';
const lastmod = new Date().toISOString().split('T')[0]; // 今天的日期

// 支持的语言列表（从languages.ts文件提取）
const languages = [
  'de', 'nl', 'cs', 'es', 'da', 'et', 'fr', 'ru', 'hr', 'it', 
  'pt', 'sv', 'no', 'fi', 'hi', 'ja', 'ko', 'zh', 'th', 'vi', 
  'id', 'ms', 'ar', 'he', 'tr'
];

// 所有页面路径
const pages = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: '/solutions', priority: '0.9', changefreq: 'monthly' },
  { path: '/ipl-hair-removal', priority: '0.9', changefreq: 'monthly' },
  { path: '/how-to-use', priority: '0.8', changefreq: 'monthly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  
  // Solutions pages
  { path: '/solutions/logo-printing', priority: '0.7', changefreq: 'monthly' },
  { path: '/solutions/packaging', priority: '0.7', changefreq: 'monthly' },
  { path: '/solutions/drop-shipping', priority: '0.7', changefreq: 'monthly' },
  { path: '/solutions/global-shipping', priority: '0.7', changefreq: 'monthly' },
  { path: '/solutions/brand-customization', priority: '0.7', changefreq: 'monthly' },
  { path: '/solutions/compliance', priority: '0.7', changefreq: 'monthly' },
  { path: '/solutions/design-prototyping', priority: '0.7', changefreq: 'monthly' },
  { path: '/solutions/multi-head-ipl', priority: '0.7', changefreq: 'monthly' },
  { path: '/solutions/dual-lamp-ipl', priority: '0.7', changefreq: 'monthly' },
  
  // IPL Device pages
  { path: '/ipl-hair-removal/smart-app', priority: '0.8', changefreq: 'monthly' },
  { path: '/ipl-hair-removal/ice-feeling', priority: '0.8', changefreq: 'monthly' },
  { path: '/ipl-hair-removal/emerald', priority: '0.8', changefreq: 'monthly' },
  { path: '/ipl-hair-removal/skin-sensor', priority: '0.8', changefreq: 'monthly' },
  { path: '/ipl-hair-removal/battery-powered', priority: '0.8', changefreq: 'monthly' },
  { path: '/ipl-hair-removal/handheld', priority: '0.8', changefreq: 'monthly' },
  { path: '/ipl-hair-removal/ice-cooling', priority: '0.8', changefreq: 'monthly' },
  { path: '/ipl-hair-removal/dual-lamp', priority: '0.8', changefreq: 'monthly' },
  { path: '/ipl-hair-removal/ai-powered', priority: '0.8', changefreq: 'monthly' },
  
  // Accessories pages
  { path: '/accessories/sapphire-lens', priority: '0.7', changefreq: 'monthly' },
  { path: '/accessories/adapter', priority: '0.7', changefreq: 'monthly' },
  { path: '/accessories/goggles', priority: '0.7', changefreq: 'monthly' },
  { path: '/accessories/filter', priority: '0.7', changefreq: 'monthly' },
  
  // Service & Support pages
  { path: '/service-support/after-sales', priority: '0.7', changefreq: 'monthly' },
  { path: '/service-support/win-fda-listing', priority: '0.7', changefreq: 'monthly' },
  { path: '/service-support/manufacturing', priority: '0.7', changefreq: 'monthly' },
  { path: '/service-support/knowledge-base', priority: '0.7', changefreq: 'monthly' },
  { path: '/service-support/beauty-sourcing', priority: '0.7', changefreq: 'monthly' },
  { path: '/service-support/pricing-guide', priority: '0.7', changefreq: 'monthly' },
  { path: '/service-support/help-center', priority: '0.7', changefreq: 'monthly' },
  { path: '/service-support/gallery', priority: '0.6', changefreq: 'monthly' },
  { path: '/service-support/videos', priority: '0.6', changefreq: 'monthly' },
  
  // Blog pages
  { path: '/blog/news-insights', priority: '0.7', changefreq: 'weekly' },
  { path: '/blog/industries', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/ipl-best-choice', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/future-home-hair-removal-devices', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog/fda-510k-pathway', priority: '0.7', changefreq: 'monthly' },
  
  // About pages
  { path: '/about/founder-message', priority: '0.6', changefreq: 'yearly' },
  { path: '/about/technology', priority: '0.7', changefreq: 'monthly' },
  { path: '/about/global-witness', priority: '0.6', changefreq: 'monthly' },
  { path: '/about/core-principles', priority: '0.6', changefreq: 'yearly' },
  { path: '/about/company', priority: '0.7', changefreq: 'monthly' },
  { path: '/about/brand-story', priority: '0.6', changefreq: 'yearly' },
  { path: '/about/quality', priority: '0.7', changefreq: 'monthly' }
];

// 生成hreflang链接
function generateHreflangLinks(pagePath) {
  const cleanPath = pagePath === '' ? '' : pagePath;
  const hreflangLinks = [];
  
  // 英文版本（无前缀）
  hreflangLinks.push(`    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${cleanPath}" />`);
  
  // 其他语言版本（带前缀）
  languages.forEach(lang => {
    hreflangLinks.push(`    <xhtml:link rel="alternate" hreflang="${lang}" href="${baseUrl}/${lang}${cleanPath}" />`);
  });
  
  // x-default指向英文版本
  hreflangLinks.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${cleanPath}" />`);
  
  return hreflangLinks.join('\n');
}

// 生成单个URL条目
function generateUrlEntry(page, lang = null) {
  const href = lang ? `${baseUrl}/${lang}${page.path}` : `${baseUrl}${page.path}`;
  const hreflangLinks = lang === null ? generateHreflangLinks(page.path) : '';
  
  return `  <url>
    <loc>${href}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>${hreflangLinks ? '\n' + hreflangLinks : ''}
  </url>`;
}

// 生成完整的sitemap
function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- English pages (with hreflang) -->
`;

  // 添加英文页面（带hreflang）
  pages.forEach(page => {
    sitemap += generateUrlEntry(page) + '\n';
  });

  sitemap += '\n  <!-- Multi-language pages -->\n';

  // 添加其他语言页面
  languages.forEach(lang => {
    sitemap += `  <!-- ${lang.toUpperCase()} pages -->\n`;
    pages.forEach(page => {
      sitemap += generateUrlEntry(page, lang) + '\n';
    });
    sitemap += '\n';
  });

  sitemap += '</urlset>';
  
  return sitemap;
}

// 写入文件
function writeSitemap() {
  const sitemapContent = generateSitemap();
  const outputPath = path.join(__dirname, '../public/sitemap.xml');
  
  fs.writeFileSync(outputPath, sitemapContent, 'utf8');
  console.log(`✅ Sitemap generated successfully at ${outputPath}`);
  console.log(`📊 Total URLs: ${(pages.length * (languages.length + 1))}`);
  console.log(`🌍 Languages: en + ${languages.length} others`);
  console.log(`📄 Pages per language: ${pages.length}`);
}

// 执行生成
if (require.main === module) {
  writeSitemap();
}

module.exports = { generateSitemap, writeSitemap }; 