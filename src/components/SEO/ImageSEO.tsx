import React from 'react';

interface ImageSEOProps {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

const ImageSEO: React.FC<ImageSEOProps> = ({
  src,
  alt,
  title,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false
}) => {
  // 为重要图片设置预加载
  const shouldPreload = priority && loading === 'eager';
  
  return (
    <>
      {shouldPreload && (
        <link rel="preload" as="image" href={src} />
      )}
      <img
        src={src}
        alt={alt}
        title={title}
        width={width}
        height={height}
        className={className}
        loading={loading}
        decoding="async"
        // 添加结构化数据属性
        itemProp="image"
      />
    </>
  );
};

export default ImageSEO;