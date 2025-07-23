import { getStore } from '@netlify/blobs';

export async function handler(event) {
  const { key } = event.queryStringParameters;
  if (!key) {
    return { statusCode: 400, body: 'Missing key' };
  }
  const store = getStore({ name: 'UserUpload', consistency: 'strong' });
  const file = await store.get(key);
  if (!file) {
    return { statusCode: 404, body: 'Not found' };
  }
  // 尝试获取文件类型
  let contentType = 'application/octet-stream';
  if (file.metadata && file.metadata.type) {
    contentType = file.metadata.type;
  }
  return {
    statusCode: 200,
    headers: { 'Content-Type': contentType },
    body: file.value.toString('base64'),
    isBase64Encoded: true,
  };
} 