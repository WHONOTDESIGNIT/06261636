import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from '../hooks/useTranslation';
// 删除这行：import { LanguageContext } from '../context/LanguageContext';

// 1. 移除未使用的 AdminPage 组件
// const AdminPage: React.FC = () => { ... } // 整个组件实现删除

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
  const { t } = useTranslation('en');
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
    <div className="admin-container" style={{ marginTop: '200px' }}>
      {/* 头部和搜索框 */}
      <header className="admin-header">
        <h1>{t('admin.title')}</h1>
        <div className="search-box">
          <input 
            type="text" 
            placeholder={t('admin.search_placeholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>
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
              <div key={blob.key}>
                <ImageCard
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
              </div>
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

// 定义ImageCard组件
const ImageCard = ({ blob, isSelected, onSelect, onEdit }: {
blob: ImageBlob;
isSelected: boolean;
onSelect: (selected: boolean) => void;
onEdit: () => void;
}) => {
return (
<div className="image-card">
<input 
type="checkbox" 
checked={isSelected}
onChange={(e) => onSelect(e.target.checked)}
/>
<img src={blob.url} alt={blob.metadata.altText || ''} />
<button onClick={onEdit}>编辑</button>
</div>
);
};