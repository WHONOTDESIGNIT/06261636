import { getStore } from '@netlify/blobs';

export async function handler(event) {
  const { key } = JSON.parse(event.body);
  if (!key) {
    return { statusCode: 400, body: 'Missing key' };
  }
  const store = getStore({ name: 'UserUpload', consistency: 'strong' });
  await store.delete(key);
  return { statusCode: 200, body: '删除成功' };
} 