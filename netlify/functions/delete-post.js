const { getStore } = require('@netlify/blobs');

exports.handler = async (event) => {
  const { id } = JSON.parse(event.body);
  const store = getStore({ name: 'BlogPosts', consistency: 'strong' });
  await store.delete(id);
  return { statusCode: 200, body: '删除成功' };
}; 