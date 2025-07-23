const { getStore } = require('@netlify/blobs');
const multiparty = require('multiparty');
const { v4: uuidv4 } = require('uuid');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // 解析 multipart/form-data
  const form = new multiparty.Form();
  const buffer = Buffer.from(event.body, 'base64');
  const files = await new Promise((resolve, reject) => {
    form.parse({ headers: event.headers, body: buffer }, (err, fields, files) => {
      if (err) reject(err);
      else resolve(files.file || []);
    });
  });

  const store = getStore({ name: 'UserUpload', consistency: 'strong' });
  const keys = [];
  for (const file of files) {
    const key = uuidv4() + '-' + file.originalFilename;
    await store.set(key, require('fs').readFileSync(file.path));
    keys.push(key);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ keys }),
    headers: { 'Content-Type': 'application/json' }
  };
};
