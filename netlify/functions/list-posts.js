const { getStore } = require('@netlify/blobs');

exports.handler = async () => {
  const store = getStore({ name: 'BlogPosts', consistency: 'strong' });
  const keys = await store.list();
  const posts = [];
  for (const key of keys) {
    const post = await store.get(key);
    if (post) {
      posts.push({ id: key, ...JSON.parse(post) });
    }
  }
  // 按时间倒序
  posts.sort((a, b) => b.id.localeCompare(a.id));
  return {
    statusCode: 200,
    body: JSON.stringify(posts),
    headers: { 'Content-Type': 'application/json' }
  };
}; 