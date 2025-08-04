const https = require('https');
const http = require('http');

const testUrls = [
  'http://iplmanufacturer.com',
  'http://www.iplmanufacturer.com',
  'https://www.iplmanufacturer.com',
  'https://iplmanufacturer.com/en',
  'https://iplmanufacturer.com/solutions/',
  'https://iplmanufacturer.com/about/',
];

function checkRedirect(url, maxRedirects = 5) {
  return new Promise((resolve) => {
    const redirectChain = [];
    let currentUrl = url;
    let redirectCount = 0;

    function makeRequest(requestUrl) {
      const isHttps = requestUrl.startsWith('https');
      const client = isHttps ? https : http;
      
      const options = {
        method: 'HEAD',
        timeout: 5000,
      };

      const req = client.request(requestUrl, options, (res) => {
        redirectChain.push({
          url: requestUrl,
          status: res.statusCode,
          location: res.headers.location
        });

        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          redirectCount++;
          if (redirectCount > maxRedirects) {
            resolve({ url, redirectChain, error: 'Too many redirects' });
            return;
          }
          
          const nextUrl = res.headers.location.startsWith('http') 
            ? res.headers.location 
            : new URL(res.headers.location, requestUrl).href;
          
          makeRequest(nextUrl);
        } else {
          resolve({ url, redirectChain, final: requestUrl });
        }
      });

      req.on('error', (err) => {
        resolve({ url, redirectChain, error: err.message });
      });

      req.on('timeout', () => {
        resolve({ url, redirectChain, error: 'Request timeout' });
      });

      req.end();
    }

    makeRequest(currentUrl);
  });
}

async function checkAllRedirects() {
  console.log('🔍 检查重定向配置...');
  
  for (const url of testUrls) {
    console.log(`\n测试: ${url}`);
    const result = await checkRedirect(url);
    
    if (result.error) {
      console.log(`❌ 错误: ${result.error}`);
    } else {
      console.log(`✅ 最终URL: ${result.final}`);
      if (result.redirectChain.length > 1) {
        console.log('重定向链:');
        result.redirectChain.forEach((step, index) => {
          console.log(`  ${index + 1}. ${step.status} ${step.url} ${step.location ? '→ ' + step.location : ''}`);
        });
      }
    }
  }
}

checkAllRedirects().catch(console.error);