// @ts-check
// 自动推送 sitemap URL 到 Bing Webmaster API
// 用法：node script/bing-push.js

const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = '28c525592dbb4fc481531dcfb7ce33db';
const API_URL = `https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=${API_KEY}`;
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');
const BATCH_SIZE = 100;

// 解析 sitemap.xml，提取所有 <loc>URL</loc>
function extractUrlsFromSitemap(xml) {
  const locRegex = /<loc>(.*?)<\/loc>/g;
  const urls = [];
  let match;
  while ((match = locRegex.exec(xml)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

// 分批推送到 Bing API
function submitBatch(urls) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({ siteUrl: 'https://iplmanufacturer.com', urlList: urls });
    const urlObj = new URL(API_URL);
    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };
    const req = https.request(options, res => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (e) {
          resolve(data);
        }
      });
    });
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

(async () => {
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error('❌ sitemap.xml not found:', SITEMAP_PATH);
    process.exit(1);
  }
  const xml = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  const urls = extractUrlsFromSitemap(xml);
  if (!urls.length) {
    console.error('❌ No URLs found in sitemap.');
    process.exit(1);
  }
  console.log(`📦 Total URLs to push: ${urls.length}`);
  let success = 0, fail = 0;
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE);
    console.log(`\n🚀 Pushing batch ${i / BATCH_SIZE + 1}: ${batch.length} URLs...`);
    try {
      const result = await submitBatch(batch);
      if (result && result.SubmitUrlBatch && result.SubmitUrlBatch.Errors && result.SubmitUrlBatch.Errors.length > 0) {
        console.error('❗️ Some errors:', result.SubmitUrlBatch.Errors);
        fail += result.SubmitUrlBatch.Errors.length;
      } else {
        console.log('✅ Batch pushed successfully.');
        success += batch.length;
      }
    } catch (e) {
      console.error('❌ Batch push failed:', e);
      fail += batch.length;
    }
  }
  console.log(`\n🎉 Done. Success: ${success}, Fail: ${fail}`);
})(); 