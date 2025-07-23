import { getStore } from '@netlify/blobs';

export async function handler(event, context) {
  const { id } = JSON.parse(event.body);
  const store = getStore({ name: 'BlogPosts', consistency: 'strong' });
  await store.delete(id);
  return { statusCode: 200, body: '删除成功' };
} 