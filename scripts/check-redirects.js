const axios = require('axios');

// 要检测的URL列表
const urlsToCheck = [
  'https://www.iplmanufacturer.com/about',
  'https://iplmanufacturer.com/about',
  'https://www.iplmanufacturer.com/en/about',
  'https://iplmanufacturer.com/en/about'
];

async function checkRedirects(url) {
  try {
    console.log(`\n🔍 检测 URL: ${url}`);
    
    const response = await axios.get(url, {
      maxRedirects: 10, // 最大重定向次数
      timeout: 10000,   // 10秒超时
      validateStatus: function (status) {
        return status < 400; // 接受所有小于400的状态码
      }
    });
    
    console.log(`✅ 状态码: ${response.status}`);
    console.log(`📍 最终URL: ${response.request.res.responseUrl || url}`);
    
    // 检查重定向历史
    if (response.request._redirectable && response.request._redirectable._redirectCount > 0) {
      console.log(`🔄 重定向次数: ${response.request._redirectable._redirectCount}`);
    }
    
    return { url, status: response.status, success: true };
    
  } catch (error) {
    if (error.code === 'ERR_FR_TOO_MANY_REDIRECTS') {
      console.log(`❌ 重定向循环错误: ${url}`);
      console.log(`🔄 重定向次数超过限制`);
      return { url, error: '重定向循环', success: false };
    } else if (error.code === 'ECONNABORTED') {
      console.log(`⏰ 请求超时: ${url}`);
      return { url, error: '请求超时', success: false };
    } else {
      console.log(`❌ 错误: ${error.message}`);
      return { url, error: error.message, success: false };
    }
  }
}

async function main() {
  console.log('🚀 开始检测重定向状态...');
  
  const results = [];
  
  for (const url of urlsToCheck) {
    const result = await checkRedirects(url);
    results.push(result);
    
    // 添加延迟避免请求过快
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // 汇总报告
  console.log('\n📊 检测结果汇总:');
  console.log('='.repeat(50));
  
  results.forEach(result => {
    if (result.success) {
      console.log(`✅ ${result.url} - 状态码: ${result.status}`);
    } else {
      console.log(`❌ ${result.url} - 错误: ${result.error}`);
    }
  });
  
  const failedCount = results.filter(r => !r.success).length;
  if (failedCount > 0) {
    console.log(`\n⚠️  发现 ${failedCount} 个问题URL`);
    process.exit(1);
  } else {
    console.log('\n🎉 所有URL检测通过！');
  }
}

main().catch(console.error);