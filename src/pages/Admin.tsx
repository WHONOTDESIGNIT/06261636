import React, { useRef, useState, useEffect } from 'react';

interface BlogPost {
  id: string;
  title: string;
  content: string;
}

const AdminPage: React.FC = () => {
  // 图片上传
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadResult, setUploadResult] = useState<string>('');
  const [gallery, setGallery] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // 博文管理
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postResult, setPostResult] = useState('');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  // 获取所有图片key
  const fetchGallery = async () => {
    setLoading(true);
    const res = await fetch('/.netlify/functions/list-images');
    const keys = await res.json();
    setGallery(keys);
    setLoading(false);
  };

  // 获取所有博文
  const fetchPosts = async () => {
    const res = await fetch('/.netlify/functions/list-posts');
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchGallery();
    fetchPosts();
  }, []);

  // 上传图片
  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    const fileInput = fileInputRef.current;
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      alert('请选择图片');
      return;
    }
    const formData = new FormData();
    for (let i = 0; i < fileInput.files.length; i++) {
      formData.append('file', fileInput.files[i]);
    }
    const res = await fetch('/.netlify/functions/upload', { method: 'POST', body: formData });
    const result = await res.json();
    setUploadResult(`上传成功，Keys：${result.keys.join(', ')}`);
    fetchGallery();
  };

  // 删除图片
  const handleDelete = async (key: string) => {
    if (!window.confirm('确定要删除这张图片吗？')) return;
    await fetch('/.netlify/functions/delete-image', {
      method: 'POST',
      body: JSON.stringify({ key }),
      headers: { 'Content-Type': 'application/json' }
    });
    fetchGallery();
  };

  // 发布/编辑博文
  const handlePost = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editingPost ? '/.netlify/functions/edit-post' : '/.netlify/functions/publish-post';
    const body = editingPost
      ? { id: editingPost.id, title: postTitle, content: postContent }
      : { title: postTitle, content: postContent };
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    });
    const result = await res.text();
    setPostResult(result);
    setPostTitle('');
    setPostContent('');
    setEditingPost(null);
    fetchPosts();
  };

  // 删除博文
  const handleDeletePost = async (id: string) => {
    if (!window.confirm('确定要删除这篇博文吗？')) return;
    await fetch('/.netlify/functions/delete-post', {
      method: 'POST',
      body: JSON.stringify({ id }),
      headers: { 'Content-Type': 'application/json' }
    });
    fetchPosts();
  };

  // 编辑博文
  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setPostTitle(post.title);
    setPostContent(post.content);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc' }}>
      {/* 图片管理 */}
      <div style={{ flex: 1, padding: 32, borderRight: '1px solid #eee' }}>
        <h2>图片上传</h2>
        <form onSubmit={handleUpload} encType="multipart/form-data" style={{ marginBottom: 24 }}>
          <input type="file" name="file" accept="image/*" ref={fileInputRef} multiple />
          <button type="submit" style={{ marginLeft: 8 }}>上传</button>
        </form>
        <div style={{ color: 'green', marginBottom: 16 }}>{uploadResult}</div>
        <h3>图册管理</h3>
        {loading ? <div>加载中...</div> : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            {gallery.map(key => (
              <div key={key} style={{ border: '1px solid #ddd', padding: 8, borderRadius: 8, background: '#fff' }}>
                <img src={`/.netlify/functions/get-image?key=${key}`} alt={key} style={{ width: 120, height: 120, objectFit: 'cover', display: 'block', marginBottom: 8 }} />
                <div style={{ fontSize: 12, wordBreak: 'break-all' }}>{key}</div>
                <button onClick={() => navigator.clipboard.writeText(`/.netlify/functions/get-image?key=${key}`)}>复制链接</button>
                <button onClick={() => handleDelete(key)} style={{ color: 'red', marginLeft: 8 }}>删除</button>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* 博文管理 */}
      <div style={{ flex: 1.5, padding: 32 }}>
        <h2>{editingPost ? '编辑博文' : '发布博文'}</h2>
        <form onSubmit={handlePost} style={{ marginBottom: 32 }}>
          <div>
            <input
              type="text"
              placeholder="标题"
              value={postTitle}
              onChange={e => setPostTitle(e.target.value)}
              style={{ width: '100%', marginBottom: 8, padding: 8 }}
              required
            />
          </div>
          <div>
            <textarea
              placeholder="正文（可插入图片链接）"
              value={postContent}
              onChange={e => setPostContent(e.target.value)}
              style={{ width: '100%', height: 120, marginBottom: 8, padding: 8 }}
              required
            />
          </div>
          <button type="submit">{editingPost ? '保存修改' : '发布'}</button>
          {editingPost && <button type="button" style={{ marginLeft: 8 }} onClick={() => { setEditingPost(null); setPostTitle(''); setPostContent(''); }}>取消编辑</button>}
        </form>
        <div style={{ color: 'green', marginBottom: 16 }}>{postResult}</div>
        <h3>博文列表</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {posts.map(post => (
            <div key={post.id} style={{ border: '1px solid #ddd', borderRadius: 8, background: '#fff', padding: 16 }}>
              <div style={{ fontWeight: 'bold', fontSize: 18 }}>{post.title}</div>
              <div style={{ margin: '8px 0', color: '#555', fontSize: 14, whiteSpace: 'pre-wrap' }}>{post.content}</div>
              <button onClick={() => handleEditPost(post)}>编辑</button>
              <button onClick={() => handleDeletePost(post.id)} style={{ color: 'red', marginLeft: 8 }}>删除</button>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32, fontSize: 14, color: '#888' }}>
          <b>插入图片：</b>可在正文中插入 <code>{`<img src="/.netlify/functions/get-image?key=xxx.jpg" />`}</code>
        </div>
      </div>
    </div>
  );
};

export default AdminPage; 