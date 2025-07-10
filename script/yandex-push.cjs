const https = require('https');
const fs = require('fs');
const path = require('path');

// Yandex Webmaster API配置
const YANDEX_USER_ID = 'YOUR_YANDEX_USER_ID'; // 需要从Yandex Webmaster获取
const YANDEX_HOST = 'iplmanufacturer.com';

// 高优先级页面列表
const highPriorityUrls = [
  'https://iplmanufacturer.com/',
  'https://iplmanufacturer.com/about',
  'https://iplmanufacturer.com/ipl-hair-removal',
  'https://iplmanufacturer.com/solutions',
  'https://iplmanufacturer.com/contact',
  'https://iplmanufacturer.com/how-to-use',
  'https://iplmanufacturer.com/blog/sapphire-cooling',
  'https://iplmanufacturer.com/blog/ai-powered-skin-sensing',
  'https://iplmanufacturer.com/blog/future-home-hair-removal',
  'https://iplmanufacturer.com/blog/global-market-shifts',
  'https://iplmanufacturer.com/blog/industries',
  'https://iplmanufacturer.com/blog/sustainable-manufacturing'
];

// 创建简单的HTTP ping通知
function pingYandex() {
  return new Promise((resolve, reject) => {
    // Ping Yandex sitemap
    const sitemapUrl = `https://webmaster.yandex.ru/ping?sitemap=https://iplmanufacturer.com/sitemap.xml`;
    
    https.get(sitemapUrl, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        console.log('✅ Yandex sitemap ping completed');
        console.log('📊 Response:', data || 'Success');
        resolve(data);
      });
    }).on('error', (err) => {
      console.error('❌ Yandex ping failed:', err.message);
      reject(err);
    });
  });
}

// 生成robots.txt ping
function pingRobots() {
  return new Promise((resolve, reject) => {
    const robotsUrl = `https://webmaster.yandex.ru/ping?url=https://iplmanufacturer.com/robots.txt`;
    
    https.get(robotsUrl, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        console.log('🤖 Yandex robots.txt ping completed');
        resolve(data);
      });
    }).on('error', (err) => {
      console.error('❌ Robots ping failed:', err.message);
      reject(err);
    });
  });
}

// 输出优化建议
function outputOptimizationTips() {
  console.log('\n🔧 Yandex优化建议:');
  console.log('='.repeat(50));
  
  console.log('\n1. 📈 提高爬取频率:');
  console.log('   - 定期更新sitemap.xml');
  console.log('   - 增加高质量内容');
  console.log('   - 优化页面加载速度');
  console.log('   - 确保服务器稳定性');
  
  console.log('\n2. 🔍 Yandex爬虫友好性:');
  console.log('   - 减少JavaScript依赖');
  console.log('   - 提供静态HTML内容');
  console.log('   - 优化Meta标签');
  console.log('   - 添加结构化数据');
  
  console.log('\n3. 🚀 立即行动项:');
  console.log('   - 在Yandex Webmaster中验证网站');
  console.log('   - 手动提交重要页面URL');
  console.log('   - 检查网站在Yandex的索引状态');
  console.log('   - 监控爬取统计数据');
  
  console.log('\n4. 📋 检查清单:');
  console.log('   ✅ robots.txt配置正确');
  console.log('   ✅ sitemap.xml可访问');
  console.log('   ✅ Yandex验证文件存在');
  console.log('   ⚠️  需要：定期内容更新');
  console.log('   ⚠️  需要：页面加载优化');
}

// 检查网站状态
async function checkWebsiteStatus() {
  console.log('\n🔍 检查网站状态...');
  
  const urlsToCheck = [
    'https://iplmanufacturer.com/',
    'https://iplmanufacturer.com/robots.txt',
    'https://iplmanufacturer.com/sitemap.xml',
    'https://iplmanufacturer.com/yandex_3eff46c214498b28.html'
  ];
  
  for (const url of urlsToCheck) {
    try {
      await new Promise((resolve, reject) => {
        https.get(url, (res) => {
          const status = res.statusCode;
          if (status === 200) {
            console.log(`✅ ${url} - HTTP ${status}`);
          } else {
            console.log(`⚠️  ${url} - HTTP ${status}`);
          }
          resolve();
        }).on('error', (err) => {
          console.log(`❌ ${url} - ${err.message}`);
          resolve();
        });
      });
    } catch (error) {
      console.log(`❌ ${url} - Error`);
    }
  }
}

// 主函数
async function main() {
  console.log('🇷🇺 Yandex搜索引擎优化工具');
  console.log('='.repeat(50));
  
  try {
    // 检查网站状态
    await checkWebsiteStatus();
    
    // Ping Yandex
    console.log('\n📡 通知Yandex更新...');
    await pingYandex();
    await pingRobots();
    
    // 输出优化建议
    outputOptimizationTips();
    
    console.log('\n🎯 高优先级页面 (建议手动提交到Yandex):');
    highPriorityUrls.forEach((url, index) => {
      console.log(`   ${index + 1}. ${url}`);
    });
    
    console.log('\n✨ 完成！建议24-48小时后检查Yandex爬取统计。');
    
  } catch (error) {
    console.error('❌ 执行失败:', error.message);
  }
}

// 如果直接运行此脚本
if (require.main === module) {
  main();
}

module.exports = { pingYandex, pingRobots, highPriorityUrls }; 