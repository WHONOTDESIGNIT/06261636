const { getStore } = require('@netlify/blobs');

exports.handler = async (event) => {
  const { title, content } = JSON.parse(event.body);
  const id = Date.now().toString();
  const store = getStore({ name: 'BlogPosts', consistency: 'strong' });
  await store.set(id, JSON.stringify({ title, content }));
  return { statusCode: 200, body: '发布成功' };
}; 