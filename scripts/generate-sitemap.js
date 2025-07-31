import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 网站基础信息
const SITE_URL = 'https://iplmanufacturer.com';
const CURRENT_DATE = new Date().toISOString().split('T')[0];

// 支持的语言列表（10种语言）
const LANGUAGES = ['en', 'de', 'es', 'ar', 'he', 'pt', 'nl', 'pl', 'fr', 'it'];

// 主要页面路由（60个核心页面）
const MAIN_ROUTES = [
  // 主页面 (5个)
  '',
  'solutions',
  'ipl-hair-removal',
  'how-to-use',
  'about',
  'contact',
  'service-support',
  'sitemap',

  // IPL设备页面 (9个)
  'ipl-hair-removal/smart-app',
  'ipl-hair-removal/ice-feeling',
  'ipl-hair-removal/emerald',
  'ipl-hair-removal/skin-sensor',
  'ipl-hair-removal/battery-powered',
  'ipl-hair-removal/handheld',
  'ipl-hair-removal/ice-cooling',
  'ipl-hair-removal/dual-lamp',
  'ipl-hair-removal/ai-powered',

  // 解决方案页面 (9个)
  'solutions/logo-printing',
  'solutions/packaging',
  'solutions/drop-shipping',
  'solutions/global-shipping',
  'solutions/brand-customization',
  'solutions/compliance',
  'solutions/design-prototyping',
  'solutions/multi-head-ipl',
  'solutions/dual-lamp-ipl',

  // 配件页面 (4个)
  'accessories/sapphire-lens',
  'accessories/adapter',
  'accessories/goggles',
  'accessories/filter',

  // 服务支持页面 (9个)
  'service-support/after-sales',
  'service-support/win-fda-listing',
  'service-support/manufacturing',
  'service-support/knowledge-base',
  'service-support/beauty-sourcing',
  'service-support/pricing-guide',
  'service-support/help-center',
  'service-support/gallery',
  'service-support/videos',

  // 博客页面 (9个)
  'blog/news-insights',
  'blog/industries',
  'blog/ipl-best-choice',
  'blog/future-home-hair-removal-devices',
  'blog/fda-510k-pathway',
  'blog/multi-head-ipl-systems',
  'blog/ai-powered-skin-sensing',
  'blog/global-market-shifts',
  'blog/sustainable-manufacturing',

  // 关于页面 (7个)
  'about/founder-message',
  'about/technology',
  'about/global-witness',
  'about/core-principles',
  'about/company',
  'about/brand-story',
  'about/quality',

  // 其他重要页面 (8个)
  'shipping-cost',
  'admin',
  'iplmanufacturer/us',
  'iplmanufacturer/de',
  'iplmanufacturer/es',
  'iplmanufacturer/fr',
  'iplmanufacturer/it',
  'iplmanufacturer/global'
];

// 页面优先级配置
const PAGE_PRIORITIES = {
  '': 1.0,
  'ipl-hair-removal': 0.9,
  'solutions': 0.9,
  'contact': 0.8,
  'about': 0.8,
  'service-support': 0.8,
  'how-to-use': 0.7,
  'blog': 0.6,
  'accessories': 0.6,
  'shipping-cost': 0.5,
  'admin': 0.3,
  'sitemap': 0.3
};

// 更新频率配置
const CHANGE_FREQUENCIES = {
  '': 'weekly',
  'blog': 'weekly',
  'news': 'weekly',
  'products': 'monthly',
  'services': 'monthly',
  'about': 'yearly',
  'contact': 'yearly',
  'admin': 'never'
};

// 获取页面优先级
function getPriority(route) {
  for (const [key, priority] of Object.entries(PAGE_PRIORITIES)) {
    if (route.startsWith(key)) {
      return priority;
    }
  }
  return 0.5;
}

// 获取更新频率
function getChangeFreq(route) {
  for (const [key, freq] of Object.entries(CHANGE_FREQUENCIES)) {
    if (route.includes(key)) {
      return freq;
    }
  }
  return 'monthly';
}

// 生成URL条目
function generateUrlEntry(url, priority, changefreq, lastmod = CURRENT_DATE, hreflangLinks = []) {
  let entry = `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>`;
  
  // 添加hreflang链接
  if (hreflangLinks.length > 0) {
    hreflangLinks.forEach(link => {
      entry += `\n    <xhtml:link rel="alternate" hreflang="${link.hreflang}" href="${link.href}" />`;
    });
  }
  
  entry += `\n  </url>`;
  return entry;
}

// 生成多语言sitemap（600个URL）
function generateMultilingualSitemap() {
  const urls = [];
  
  MAIN_ROUTES.forEach(route => {
    const priority = getPriority(route);
    const changefreq = getChangeFreq(route);
    
    LANGUAGES.forEach(lang => {
      let url, hreflangLinks = [];
      
      // 生成当前语言的URL
      if (lang === 'en') {
        url = route === '' ? SITE_URL : `${SITE_URL}/${route}`;
      } else {
        url = route === '' ? `${SITE_URL}/${lang}` : `${SITE_URL}/${lang}/${route}`;
      }
      
      // 生成hreflang链接
      LANGUAGES.forEach(hrefLang => {
        let hrefUrl;
        if (hrefLang === 'en') {
          hrefUrl = route === '' ? SITE_URL : `${SITE_URL}/${route}`;
        } else {
          hrefUrl = route === '' ? `${SITE_URL}/${hrefLang}` : `${SITE_URL}/${hrefLang}/${route}`;
        }
        hreflangLinks.push({ hreflang: hrefLang, href: hrefUrl });
      });
      
      // 添加x-default链接（指向英文版本）
      const xDefaultUrl = route === '' ? SITE_URL : `${SITE_URL}/${route}`;
      hreflangLinks.push({ hreflang: 'x-default', href: xDefaultUrl });
      
      // 调整非英文页面的优先级
      const adjustedPriority = lang === 'en' ? priority : priority * 0.9;
      
      urls.push(generateUrlEntry(url, adjustedPriority, changefreq, CURRENT_DATE, hreflangLinks));
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

  return sitemap;
}

// 生成主sitemap（英文版本）
function generateMainSitemap() {
  const urls = [];
  
  MAIN_ROUTES.forEach(route => {
    const cleanRoute = route === '' ? '' : `/${route}`;
    const url = `${SITE_URL}${cleanRoute}`;
    const priority = getPriority(route);
    const changefreq = getChangeFreq(route);
    
    urls.push(generateUrlEntry(url, priority, changefreq));
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return sitemap;
}

// 生成sitemap索引
function generateSitemapIndex() {
  const sitemaps = [
    'sitemap-main.xml',
    'sitemap-multilingual.xml'
  ];
  
  const sitemapEntries = sitemaps.map(sitemap => `  <sitemap>
    <loc>${SITE_URL}/${sitemap}</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
  </sitemap>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</sitemapindex>`;
}

// 确保public目录存在
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 生成所有sitemap文件
try {
  // 主sitemap（英文版本）
  const mainSitemap = generateMainSitemap();
  fs.writeFileSync(path.join(publicDir, 'sitemap-main.xml'), mainSitemap);
  console.log('✅ 主sitemap生成成功: sitemap-main.xml');
  
  // 多语言sitemap（600个URL）
  const multilingualSitemap = generateMultilingualSitemap();
  fs.writeFileSync(path.join(publicDir, 'sitemap-multilingual.xml'), multilingualSitemap);
  console.log('✅ 多语言sitemap生成成功: sitemap-multilingual.xml');
  
  // sitemap索引
  const sitemapIndex = generateSitemapIndex();
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapIndex);
  console.log('✅ Sitemap索引生成成功: sitemap.xml');
  
  console.log('\n📊 Sitemap统计:');
  console.log(`- 主要页面数: ${MAIN_ROUTES.length}`);
  console.log(`- 支持语言: ${LANGUAGES.length}`);
  console.log(`- 总URL数: ${MAIN_ROUTES.length * LANGUAGES.length}`);
  console.log(`- 预计文件大小: ~${Math.round((MAIN_ROUTES.length * LANGUAGES.length * 200) / 1024)}KB`);
  console.log(`\n🔗 提交到Google Search Console的URL:`);
  console.log(`${SITE_URL}/sitemap.xml`);
  
} catch (error) {
  console.error('❌ Sitemap生成失败:', error);
  process.exit(1);
}