const fs = require('fs');
const path = require('path');

// 网站基础信息
const SITE_URL = 'https://iplmanufacturer.com';
const CURRENT_DATE = new Date().toISOString().split('T')[0];

// 支持的语言列表
const LANGUAGES = ['en', 'de', 'es', 'ar', 'he', 'pt', 'nl', 'pl'];

// 主要页面路由
const MAIN_ROUTES = [
  '',
  'solutions',
  'ipl-hair-removal',
  'how-to-use',
  'about',
  'contact',
  'service-support',
  'sitemap'
];

// IPL设备页面
const IPL_DEVICE_ROUTES = [
  'ipl-hair-removal/smart-app',
  'ipl-hair-removal/ice-feeling',
  'ipl-hair-removal/emerald',
  'ipl-hair-removal/skin-sensor',
  'ipl-hair-removal/battery-powered',
  'ipl-hair-removal/handheld',
  'ipl-hair-removal/ice-cooling',
  'ipl-hair-removal/dual-lamp',
  'ipl-hair-removal/ai-powered'
];

// 解决方案页面
const SOLUTION_ROUTES = [
  'solutions/logo-printing',
  'solutions/packaging',
  'solutions/drop-shipping',
  'solutions/global-shipping',
  'solutions/brand-customization',
  'solutions/compliance',
  'solutions/design-prototyping',
  'solutions/multi-head-ipl',
  'solutions/dual-lamp-ipl'
];

// 配件页面
const ACCESSORY_ROUTES = [
  'accessories/sapphire-lens',
  'accessories/adapter',
  'accessories/goggles',
  'accessories/filter'
];

// 服务支持页面
const SERVICE_ROUTES = [
  'service-support/after-sales',
  'service-support/win-fda-listing',
  'service-support/manufacturing',
  'service-support/knowledge-base',
  'service-support/beauty-sourcing',
  'service-support/pricing-guide',
  'service-support/help-center',
  'service-support/gallery',
  'service-support/videos'
];

// 博客页面
const BLOG_ROUTES = [
  'blog/news-insights',
  'blog/industries',
  'blog/ipl-best-choice',
  'blog/future-home-hair-removal-devices',
  'blog/fda-510k-pathway',
  'blog/multi-head-ipl-systems',
  'blog/ai-powered-skin-sensing',
  'blog/global-market-shifts',
  'blog/sustainable-manufacturing'
];

// 关于页面
const ABOUT_ROUTES = [
  'about/founder-message',
  'about/technology',
  'about/global-witness',
  'about/core-principles',
  'about/company',
  'about/brand-story',
  'about/quality'
];

// 合并所有路由
const ALL_ROUTES = [
  ...MAIN_ROUTES,
  ...IPL_DEVICE_ROUTES,
  ...SOLUTION_ROUTES,
  ...ACCESSORY_ROUTES,
  ...SERVICE_ROUTES,
  ...BLOG_ROUTES,
  ...ABOUT_ROUTES
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
  'contact': 'yearly'
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
function generateUrlEntry(url, priority, changefreq, lastmod = CURRENT_DATE) {
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

// 生成主sitemap
function generateMainSitemap() {
  const urls = [];
  
  // 为每个路由生成URL条目
  ALL_ROUTES.forEach(route => {
    const cleanRoute = route === '' ? '' : `/${route}`;
    const url = `${SITE_URL}${cleanRoute}`;
    const priority = getPriority(route);
    const changefreq = getChangeFreq(route);
    
    urls.push(generateUrlEntry(url, priority, changefreq));
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

  return sitemap;
}

// 生成多语言sitemap
function generateMultilingualSitemap() {
  const urls = [];
  
  ALL_ROUTES.forEach(route => {
    const priority = getPriority(route);
    const changefreq = getChangeFreq(route);
    
    // 英文版本（无前缀）
    const enUrl = route === '' ? SITE_URL : `${SITE_URL}/${route}`;
    
    // 生成hreflang链接
    const hreflangLinks = LANGUAGES.map(lang => {
      if (lang === 'en') {
        return `    <xhtml:link rel="alternate" hreflang="${lang}" href="${enUrl}" />`;
      } else {
        const langUrl = route === '' ? `${SITE_URL}/${lang}` : `${SITE_URL}/${lang}/${route}`;
        return `    <xhtml:link rel="alternate" hreflang="${lang}" href="${langUrl}" />`;
      }
    }).join('\n');
    
    // x-default链接
    const xDefaultLink = `    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}" />`;
    
    urls.push(`  <url>
    <loc>${enUrl}</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${hreflangLinks}
${xDefaultLink}
  </url>`);
    
    // 其他语言版本
    LANGUAGES.forEach(lang => {
      if (lang !== 'en') {
        const langUrl = route === '' ? `${SITE_URL}/${lang}` : `${SITE_URL}/${lang}/${route}`;
        
        const langHreflangLinks = LANGUAGES.map(l => {
          if (l === 'en') {
            return `    <xhtml:link rel="alternate" hreflang="${l}" href="${enUrl}" />`;
          } else {
            const lUrl = route === '' ? `${SITE_URL}/${l}` : `${SITE_URL}/${l}/${route}`;
            return `    <xhtml:link rel="alternate" hreflang="${l}" href="${lUrl}" />`;
          }
        }).join('\n');
        
        urls.push(`  <url>
    <loc>${langUrl}</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority * 0.9}</priority>
${langHreflangLinks}
${xDefaultLink}
  </url>`);
      }
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
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
  // 主sitemap
  const mainSitemap = generateMainSitemap();
  fs.writeFileSync(path.join(publicDir, 'sitemap-main.xml'), mainSitemap);
  console.log('✅ 主sitemap生成成功: sitemap-main.xml');
  
  // 多语言sitemap
  const multilingualSitemap = generateMultilingualSitemap();
  fs.writeFileSync(path.join(publicDir, 'sitemap-multilingual.xml'), multilingualSitemap);
  console.log('✅ 多语言sitemap生成成功: sitemap-multilingual.xml');
  
  // sitemap索引
  const sitemapIndex = generateSitemapIndex();
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapIndex);
  console.log('✅ Sitemap索引生成成功: sitemap.xml');
  
  console.log('\n📊 Sitemap统计:');
  console.log(`- 总页面数: ${ALL_ROUTES.length}`);
  console.log(`- 支持语言: ${LANGUAGES.length}`);
  console.log(`- 总URL数: ${ALL_ROUTES.length * LANGUAGES.length}`);
  console.log(`\n🔗 提交到Google Search Console的URL:`);
  console.log(`${SITE_URL}/sitemap.xml`);
  
} catch (error) {
  console.error('❌ Sitemap生成失败:', error);
  process.exit(1);
}