import { getStore } from '@netlify/blobs';

export async function handler(event, context) {
  const { id, title, content } = JSON.parse(event.body);
  const store = getStore({ name: 'BlogPosts', consistency: 'strong' });
  await store.set(id, JSON.stringify({ title, content }));
  return { statusCode: 200, body: '修改成功' };
} 