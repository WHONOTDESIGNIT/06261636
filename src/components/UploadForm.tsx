import React, { useRef, useState } from 'react';

const UploadForm: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fileInput = fileInputRef.current;
    if (!fileInput || !fileInput.files || !fileInput.files[0]) {
      alert('请选择图片');
      return;
    }
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    const res = await fetch('/.netlify/functions/upload', { method: 'POST', body: formData });
    const key = await res.text();
    setResult(
      `上传成功，Key：${key}<br>图片预览：<img src="/.netlify/functions/get-image?key=${key}" width="200"/>`
    );
  };

  return (
    <section className="py-8 flex flex-col items-center">
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="mb-4 flex flex-col items-center gap-2" style={{ background: '#fff', borderRadius: 8, padding: 16, boxShadow: '0 2px 8px #0001', maxWidth: 400 }}>
        <input type="file" name="file" accept="image/*" className="mb-2" ref={fileInputRef} />
        <button type="submit" className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition">上传图片</button>
      </form>
      <div className="text-center" dangerouslySetInnerHTML={{ __html: result }} />
    </section>
  );
};

export default UploadForm; 