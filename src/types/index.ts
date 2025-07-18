export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  thumbnail?: string;
  link?: string;
  category?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  phone?: string;
  country?: string;
  business?: string;
  timeline?: string;
  verification?: string;
}
// Add other necessary types here 