export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  thumbnail?: string; // 添加可选的缩略图字段
  features: string[];
  category: 'ipl' | 'accessories';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  business?: string;
  timeline?: string;
  message: string;
  verification: number;
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  region: string;
}

// 新增缩略图接口定义
export interface ThumbnailData {
  id: string;
  imageUrl: string;
  title: string;
  description?: string;
  category?: string;
}

// Header 组件的 Props 接口
export interface HeaderProps {
  thumbnailData: ThumbnailData[];
}