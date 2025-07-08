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
  'en', 'zh', 'fr', 'de', 'es', 'it', 'pt', 'ru', 'ja', 'ko', 'hi', 'ar', 'th', 'vi', 'id', 'ms', 'he', 'tr', 'nl', 'cs', 'da', 'et', 'hr', 'pl'
];

const scannedRoutes = scanPageRoutes();
const allPaths = [];
scannedRoutes.forEach(route => {
  langs.forEach(lang => {
    if (lang === 'en') {
      allPaths.push(route.startsWith('/') ? route : '/' + route);
    } else {
      allPaths.push(`/${lang}${route.startsWith('/') ? route : '/' + route}`);
    }
  });
});

// 生成 sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  ${allPaths.map(path => `<url><loc>${path}</loc></url>`).join('')}\n</urlset>`;
const sitemapPath = path.join(__dirname, 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap);

console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
console.log(`📊 Total URLs: ${allPaths.length}`);
console.log(`🌍 Languages: en + ${langs.length - 1} others`);
console.log(`📄 Pages per language: ${Math.round(allPaths.length / langs.length)}`); 