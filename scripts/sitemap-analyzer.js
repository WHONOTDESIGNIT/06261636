const fs = require('fs');
const path = require('path');

// 分析sitemap的详细脚本
function analyzeSitemap() {
  console.log('🔍 === SITEMAP 全面分析报告 ===\n');
  
  const sitemapFiles = [
    'public/sitemap.xml',
    'public/sitemap-main.xml', 
    'public/sitemap-multilingual.xml'
  ];
  
  let totalUrls = 0;
  let allUrls = new Set();
  let duplicateUrls = [];
  
  sitemapFiles.forEach(file => {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8');
      const urlMatches = content.match(/<loc>(.*?)<\/loc>/g) || [];
      
      console.log(`📄 ${path.basename(file)}:`);
      console.log(`   - URL数量: ${urlMatches.length}`);
      console.log(`   - 文件大小: ${(fs.statSync(file).size / 1024).toFixed(2)} KB`);
      
      urlMatches.forEach(match => {
        const url = match.replace(/<\/?loc>/g, '');
        if (allUrls.has(url)) {
          duplicateUrls.push(url);
        }
        allUrls.add(url);
      });
      
      totalUrls += urlMatches.length;
      console.log('');
    } else {
      console.log(`❌ ${file} 不存在\n`);
    }
  });
  
  console.log('📊 === 总体统计 ===');
  console.log(`总URL数量: ${totalUrls}`);
  console.log(`唯一URL数量: ${allUrls.size}`);
  console.log(`重复URL数量: ${duplicateUrls.length}`);
  
  if (duplicateUrls.length > 0) {
    console.log('\n⚠️  重复URL列表:');
    duplicateUrls.slice(0, 5).forEach(url => console.log(`   - ${url}`));
  }
  
  // 分析实际项目页面
  console.log('\n🗂️  === 项目页面分析 ===');
  
  const pageFiles = [];
  function findPages(dir) {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
          findPages(fullPath);
        } else if (file.endsWith('.tsx')) {
          pageFiles.push(fullPath);
        }
      });
    }
  }
  
  findPages('src/pages');
  console.log(`实际页面文件数量: ${pageFiles.length}`);
  
  // 检查App.tsx中的路由配置
  if (fs.existsSync('src/App.tsx')) {
    const appContent = fs.readFileSync('src/App.tsx', 'utf8');
    const routeMatches = appContent.match(/path:\s*['"`]([^'"`]+)['"`]/g) || [];
    console.log(`App.tsx中配置的路由数量: ${routeMatches.length}`);
  }
  
  console.log('\n✅ 分析完成！');
}

// 运行分析
try {
  analyzeSitemap();
} catch (error) {
  console.error('❌ 分析过程中出现错误:', error.message);
}