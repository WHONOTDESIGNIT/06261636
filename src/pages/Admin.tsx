import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface BlogPost {
  id: string;
  title: string;
  content: string;
}

const AdminPage: React.FC = () => {
  // 图片上传
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadResult, setUploadResult] = useState<string>('');
  const [gallery, setGallery] = useState<{ key: string, metadata: any }[]>([]);
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
    const images = await res.json();
    setGallery(images);
    setLoading(false);
  };

  // 获取所有博文
  const fetchPosts = async () => {
    try {
      const res = await fetch('/.netlify/functions/list-posts');
      const data = await res.json();
      if (Array.isArray(data)) {
        setPosts(data);
      } else {
        setPosts([]);
        console.error('list-posts 返回的不是数组:', data);
      }
    } catch (err) {
      setPosts([]);
      console.error('list-posts 接口异常:', err);
    }
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
            {gallery.map(img => (
              <div key={img.key} style={{ border: '1px solid #ddd', padding: 8, borderRadius: 8, background: '#fff' }}>
                <img src={`/.netlify/functions/get-image?key=${img.key}`} alt={img.key} style={{ width: 120, height: 120, objectFit: 'cover', display: 'block', marginBottom: 8 }} />
                <div style={{ fontSize: 12, wordBreak: 'break-all' }}>{img.metadata?.name || img.key}</div>
                <div style={{ fontSize: 12, color: '#888' }}>大小: {img.metadata?.size || '-'} bytes</div>
                <div style={{ fontSize: 12, color: '#888' }}>上传: {img.metadata?.uploadTime ? new Date(img.metadata.uploadTime).toLocaleString() : '-'}</div>
                <button onClick={() => navigator.clipboard.writeText(`/.netlify/functions/get-image?key=${img.key}`)}>复制链接</button>
                <button onClick={() => handleDelete(img.key)} style={{ color: 'red', marginLeft: 8 }}>删除</button>
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

type ImageBlob = {
  key: string;
  url: string;
  metadata: {
    size: number;
    width?: number;
    height?: number;
    uploadTime: string;
    altText?: string;
    categories?: string[];
  };
};

const AdminDashboard = () => {
  const { t } = useTranslation();
  const [blobs, setBlobs] = useState<ImageBlob[]>([]);
  const [selectedBlobs, setSelectedBlobs] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentEditBlob, setCurrentEditBlob] = useState<ImageBlob | null>(null);

  // 获取所有blob图片
  const fetchBlobs = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/.netlify/functions/list-images');
      const data = await res.json();
      setBlobs(data.map((img: any) => ({
        key: img.key,
        url: `/.netlify/functions/get-image?key=${img.key}`,
        metadata: img.metadata
      })));
    } catch (err) {
      console.error('Failed to fetch blobs:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 初始化加载
  useEffect(() => { fetchBlobs(); }, [fetchBlobs]);

  // 上传文件
  const handleUpload = async (files: FileList) => {
    setIsUploading(true);
    setUploadProgress(0);
    
    try {
      const formData = new FormData();
      Array.from(files).forEach(file => {
        formData.append('files', file);
      });

      const xhr = new XMLHttpRequest();
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          setUploadProgress(Math.round((event.loaded / event.total) * 100));
        }
      };

      await new Promise((resolve, reject) => {
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(new Error('Upload failed'));
        xhr.open('POST', '/.netlify/functions/upload', true);
        xhr.send(formData);
      });

      await fetchBlobs();
    } catch (err) {
      console.error('Upload error:', err);
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  // 删除选中图片
  const handleDeleteSelected = async () => {
    if (!selectedBlobs.length) return;
    
    try {
      await Promise.all(selectedBlobs.map(key => 
        fetch('/.netlify/functions/delete-image', {
          method: 'POST',
          body: JSON.stringify({ key }),
          headers: { 'Content-Type': 'application/json' }
        })
      ));
      
      setSelectedBlobs([]);
      await fetchBlobs();
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  // 打开编辑模态框
  const openEditModal = (blob: ImageBlob) => {
    setCurrentEditBlob(blob);
    setEditModalOpen(true);
  };

  // 保存元数据修改
  const saveMetadata = async (updatedBlob: ImageBlob) => {
    try {
      await fetch('/.netlify/functions/update-metadata', {
        method: 'POST',
        body: JSON.stringify({
          key: updatedBlob.key,
          metadata: updatedBlob.metadata
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      
      setEditModalOpen(false);
      await fetchBlobs();
    } catch (err) {
      console.error('Update metadata error:', err);
    }
  };

  // 过滤显示的blob
  const filteredBlobs = blobs.filter(blob => 
    blob.key.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blob.metadata.altText?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="admin-container">
      {/* 头部和搜索框代码保持不变 */}
      
      {/* 上传区域 */}
      <section className="upload-section">
        <FileDropzone 
          onDrop={handleUpload}
          disabled={isUploading}
        />
        {isUploading && (
          <div className="upload-progress">
            <progress value={uploadProgress} max="100" />
            <span>{uploadProgress}%</span>
          </div>
        )}
      </section>

      {/* 操作工具栏 */}
      <div className="action-toolbar">
        <button 
          onClick={handleDeleteSelected}
          disabled={!selectedBlobs.length}
        >
          {t('admin.delete_selected')}
        </button>
        <span>{selectedBlobs.length} {t('admin.selected_items')}</span>
      </div>

      {/* 图片库 */}
      <section className="gallery-section">
        {isLoading ? (
          <div className="loading-indicator">{t('admin.loading')}</div>
        ) : (
          <div className="image-grid">
            {filteredBlobs.map(blob => (
              <ImageCard 
                key={blob.key} 
                blob={blob}
                isSelected={selectedBlobs.includes(blob.key)}
                onSelect={(selected) => {
                  setSelectedBlobs(prev => 
                    selected 
                      ? [...prev, blob.key] 
                      : prev.filter(key => key !== blob.key)
                  );
                }}
                onEdit={() => openEditModal(blob)}
              />
            ))}
          </div>
        )}
      </section>

      {/* 编辑模态框 */}
      {editModalOpen && currentEditBlob && (
        <EditMetadataModal
          blob={currentEditBlob}
          onClose={() => setEditModalOpen(false)}
          onSave={saveMetadata}
        />
      )}
    </div>
  );
};

// FileDropzone组件实现
const FileDropzone = ({ onDrop, disabled }: {
  onDrop: (files: FileList) => void;
  disabled: boolean;
}) => {
  // 实现拖放上传功能
  return (
    <div className="file-dropzone">
      <input 
        type="file" 
        multiple 
        onChange={(e) => e.target.files && onDrop(e.target.files)}
        disabled={disabled}
      />
      <p>{disabled ? '上传中...' : '拖放文件到这里或点击选择文件'}</p>
    </div>
  );
};

// EditMetadataModal组件实现
const EditMetadataModal = ({ blob, onClose, onSave }: {
  blob: ImageBlob;
  onClose: () => void;
  onSave: (updatedBlob: ImageBlob) => void;
}) => {
  const [altText, setAltText] = useState(blob.metadata.altText || '');
  const [categories, setCategories] = useState(
    blob.metadata.categories?.join(', ') || ''
  );

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>编辑元数据</h3>
        <div className="form-group">
          <label>替代文本</label>
          <input 
            type="text" 
            value={altText} 
            onChange={(e) => setAltText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>分类 (逗号分隔)</label>
          <input 
            type="text" 
            value={categories} 
            onChange={(e) => setCategories(e.target.value)}
          />
        </div>
        <div className="modal-actions">
          <button onClick={onClose}>取消</button>
          <button onClick={() => onSave({
            ...blob,
            metadata: {
              ...blob.metadata,
              altText,
              categories: categories.split(',').map(c => c.trim()).filter(c => c)
            }
          })}>保存</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;