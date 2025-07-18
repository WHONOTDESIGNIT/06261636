export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  thumbnail?: string; // 添加可选的缩略图字段
  features: string[];
  category: 'ipl' | 'accessories';
  link?: string; // 新增可选link字段
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

declare module 'i18next-http-backend' {
  import { BackendOptions, RequestCallback } from 'i18next';
  class Http {
    constructor(options?: BackendOptions);
    read(language: string, namespace: string, callback: RequestCallback): void;
  }
  export default Http;
}