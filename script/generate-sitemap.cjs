const fs = require('fs');
const path = require('path');

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
  // 生成路由路径
  return files.map(f => {
    let rel = f.replace(baseDir, '').replace(/\\/g, '/');
    rel = rel.replace(/\.tsx$/, '');
    if (rel.endsWith('/index')) rel = rel.slice(0, -6);
    if (rel === '/Home') return '';
    return rel;
  });
}

const langs = [
  'en', 'de', 'nl', 'cs', 'es', 'da', 'et', 'fr', 'ru', 'hr', 'it', 'pt', 'hi', 'ja', 'ko', 'zh', 'th', 'vi', 'id', 'ms', 'ar', 'he', 'tr'
];

const baseUrl = 'https://iplmanufacturer.com';
const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

const scannedRoutes = scanPageRoutes();
const englishRoutes = [];
const otherLangRoutes = [];

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

// 生成sitemap XML
let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- English pages (with hreflang) -->`;

// 英文页面（带hreflang）
englishRoutes.forEach(route => {
  const url = route === '' ? '/' : route;
  const priority = url === '/' ? '1.0' : (url.includes('/solutions') || url.includes('/ipl-hair-removal') ? '0.9' : '0.8');
  const changefreq = url === '/' ? 'weekly' : 'monthly';
  
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

// 其他语言页面
otherLangRoutes.forEach(route => {
  const priority = route.includes('/contact') ? '0.8' : '0.7';
  sitemapContent += `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;
});

sitemapContent += `
</urlset>`;

// 写入文件
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapContent);

const totalUrls = englishRoutes.length + otherLangRoutes.length;
console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
console.log(`📊 Total URLs: ${totalUrls}`);
console.log(`🌍 Languages: en + ${langs.length - 1} others`);
console.log(`📄 Pages per language: ${scannedRoutes.length}`); 