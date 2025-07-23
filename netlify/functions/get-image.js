const { getStore } = require('@netlify/blobs');

exports.handler = async (event) => {
  const { key } = event.queryStringParameters;
  const store = getStore({ name: 'UserUpload', consistency: 'strong' });
  const blob = await store.get(key, { type: 'stream' });

  if (!blob) {
    return { statusCode: 404, body: 'Not found' };
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'image/jpeg' }, // 可根据实际图片类型调整
    body: blob,
    isBase64Encoded: true,
  };
};