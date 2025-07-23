const { getStore } = require('@netlify/blobs');

exports.handler = async (event) => {
  const { id, title, content } = JSON.parse(event.body);
  const store = getStore({ name: 'BlogPosts', consistency: 'strong' });
  await store.set(id, JSON.stringify({ title, content }));
  return { statusCode: 200, body: '修改成功' };
}; 