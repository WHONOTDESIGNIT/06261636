const fs = require('fs');
const path = require('path');

// 注意：此脚本生成sitemap.xml并写入public/目录，确保Netlify的publish directory包含public/，以正确托管sitemap文件。
// 推荐：在public/_headers中添加以下规则以确保正确的Content-Type：
// /sitemap.xml
//   Content-Type: application/xml

// 辅助函数：PascalCase to kebab-case
function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2') // 添加连字符
    .replace(/[\s_]+/g, '-') // 替换空格/下划线
    .toLowerCase(); // 转小写
}

// 递归扫描 src/pages 下所有 .tsx 文件
function scanPageRoutes() {
  const baseDir = path.join(__dirname, '../src/pages');
  function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat && stat.isDirectory()) {
        results = results.concat(walk(filePath));
      } else if (file.endsWith('.tsx')) {
        results.push(filePath);
      }
    });
    return results;
  }
  const files = walk(baseDir);
  // 生成路由路径（转换为 kebab-case）
  return files.map(f => {
    let rel = f.replace(baseDir, '').replace(/\\/g, '/');
    rel = rel.replace(/\.tsx$/, '');
    if (rel.endsWith('/index')) rel = rel.slice(0, -6);
    if (rel === '/Home') return '';
    // 转换为 kebab-case
    rel = rel.split('/').map(segment => toKebabCase(segment)).join('/');
    return rel;
  }).filter(route => !route.includes('admin') && !route.includes('private')); // 排除私有路由
}

// 动态读取实际支持的语言列表
const translationsDir = path.join(__dirname, '../src/translations');
const langs = fs.readdirSync(translationsDir)
  .filter(file => file.endsWith('.json'))
  .map(file => file.replace('.json', ''))
  .sort();

const baseUrl = 'https://iplmanufacturer.com';
const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

const scannedRoutes = scanPageRoutes();
const englishRoutes = [];
const otherLangRoutes = [];

// 定义高优先级页面（使用 kebab-case）
const highPriorityPages = [
  '',
  '/about',
  '/ipl-hair-removal',
  '/solutions',
  '/contact',
  '/how-to-use',
  '/blog/sapphire-cooling',
  '/blog/ai-powered-skin-sensing',
  '/blog/future-home-hair-removal',
  '/blog/global-market-shifts'
];

// 分类路由：英文页面和其他语言页面
scannedRoutes.forEach(route => {
  const cleanRoute = route.startsWith('/') ? route : '/' + route;
  englishRoutes.push(cleanRoute === '/' ? '' : cleanRoute);
  
  langs.slice(1).forEach(lang => { // 跳过'en'
    otherLangRoutes.push(`/${lang}${cleanRoute}`);
  });
});

// 生成hreflang links for English pages
function generateHreflangLinks(route) {
  const links = [];
  langs.forEach(lang => {
    if (lang === 'en') {
      links.push(`    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${route}" />`);
    } else {
      links.push(`    <xhtml:link rel="alternate" hreflang="${lang}" href="${baseUrl}/${lang}${route}" />`);
    }
  });
  links.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${route}" />`);
  return links.join('\n');
}

// 获取页面优先级
function getPagePriority(route) {
  if (route === '' || route === '/') return '1.0';
  if (highPriorityPages.includes(route)) return '0.9';
  if (route.includes('/blog/')) return '0.8';
  if (route.includes('/solutions') || route.includes('/ipl-hair-removal')) return '0.9';
  if (route.includes('/about/') || route.includes('/service/')) return '0.7';
  return '0.6';
}

// 获取更新频率
function getChangeFreq(route) {
  if (route === '' || route === '/') return 'daily';
  if (route.includes('/blog/')) return 'weekly';
  if (highPriorityPages.includes(route)) return 'weekly';
  return 'monthly';
}

// 生成sitemap XML
let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- High Priority English Pages (for better Yandex crawling) -->`;

// 首先添加高优先级英文页面
const sortedEnglishRoutes = [...englishRoutes].sort((a, b) => {
  const aPriority = parseFloat(getPagePriority(a));
  const bPriority = parseFloat(getPagePriority(b));
  return bPriority - aPriority; // 降序排列
});

sortedEnglishRoutes.forEach(route => {
  const url = route === '' ? '/' : route;
  const priority = getPagePriority(route);
  const changefreq = getChangeFreq(route);
  
  sitemapContent += `
  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${generateHreflangLinks(url)}
  </url>`;
});

sitemapContent += `

  <!-- Other Language Pages -->`;

// 其他语言页面 - 按优先级排序
const sortedOtherRoutes = [...otherLangRoutes].sort((a, b) => {
  const aRoute = a.replace(/^\/[a-z]{2}/, ''); // 移除语言前缀
  const bRoute = b.replace(/^\/[a-z]{2}/, '');
  const aPriority = parseFloat(getPagePriority(aRoute));
  const bPriority = parseFloat(getPagePriority(bRoute));
  return bPriority - aPriority;
});

sortedOtherRoutes.forEach(route => {
  const routeWithoutLang = route.replace(/^\/[a-z]{2}/, '');
  const priority = Math.max(0.5, parseFloat(getPagePriority(routeWithoutLang)) - 0.2);
  const changefreq = getChangeFreq(routeWithoutLang);
  
  sitemapContent += `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
});

sitemapContent += `
</urlset>`;

// 写入文件
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapContent);

// 创建Yandex专用的简化sitemap（仅包含高优先级页面）
const yandexSitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Yandex Optimized Sitemap - High Priority Pages Only -->
${highPriorityPages.map(route => {
  const url = route === '' ? '/' : route;
  return `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${getChangeFreq(route)}</changefreq>
    <priority>${getPagePriority(route)}</priority>
  </url>`;
}).join('')}
</urlset>`;

const yandexSitemapPath = path.join(__dirname, '../public/sitemap-yandex.xml');
fs.writeFileSync(yandexSitemapPath, yandexSitemapContent);

const totalUrls = englishRoutes.length + otherLangRoutes.length;
console.log(`✅ Main Sitemap generated: ${sitemapPath}`);
console.log(`🇷🇺 Yandex Sitemap generated: ${yandexSitemapPath}`);
console.log(`📊 Total URLs: ${totalUrls}`);
console.log(`🌍 Languages: en + ${langs.length - 1} others`);
console.log(`📄 Pages per language: ${scannedRoutes.length}`);
console.log(`⭐ High priority pages: ${highPriorityPages.length}`); 