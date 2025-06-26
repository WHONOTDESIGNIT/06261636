export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
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