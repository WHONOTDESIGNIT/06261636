import { getStore } from '@netlify/blobs';

export async function handler() {
  const store = getStore({ name: 'UserUpload', consistency: 'strong' });
  const keys = await store.list();
  const images = [];
  for (const key of keys) {
    const file = await store.get(key);
    images.push({ key, metadata: file?.metadata || {} });
  }
  return {
    statusCode: 200,
    body: JSON.stringify(images),
    headers: { 'Content-Type': 'application/json' },
  };
} 