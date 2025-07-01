import { Product } from '../types';

export const iplDevices: Product[] = [
  {
    id: 'smart-app',
    name: 'Smart App-Controlled IPL Device',
    description: 'Advanced IPL device with smartphone connectivity and personalized treatment plans',
    image: 'https://i.postimg.cc/CLg7qVKB/app-ipl-2.webp',
    thumbnail: 'https://i.postimg.cc/CLg7qVKB/app-ipl-2.webp', // 新增缩略图字段
    features: ['App Control', 'Custom Programs', 'Progress Tracking', 'Safety Sensors'],
    category: 'ipl',
    link: '/ipl-hair-removal/smart-app' ,// 新增
  },
  {
    id: 'ice-feeling',
    name: 'Ice Feeling IPL Device',
    description: 'Cooling technology for comfortable hair removal experience',
    image: 'https://i.postimg.cc/qMnXKR6c/ice-feeling-ipl-1.webp',
    thumbnail: 'https://i.postimg.cc/43qb4DM3/ice-feeling-ipl.webp', // 新增缩略图字段
    features: ['Cooling Technology', 'Pain-Free', 'Continuous Use', 'Professional Grade'],
    category: 'ipl',
    link: '/ipl-hair-removal/ice-feeling',
  },
  {
    id: 'emerald',
    name: 'Emerald IPL Device',
    description: 'Premium IPL device with emerald crystal technology',
    image: 'https://i.postimg.cc/1RpcPYK9/emerald-ipl-2.webp',
    thumbnail: 'https://i.postimg.cc/1RpcPYK9/emerald-ipl-2.webp', // 新增缩略图字段
    features: ['Emerald Crystal', 'Long-lasting', 'Professional Results', 'Elegant Design'],
    category: 'ipl',
    link: '/ipl-hair-removal/emerald',
  },
  {
    id: 'skin-sensor',
    name: 'Skin Sensor IPL Device',
    description: 'Intelligent skin detection for optimal treatment customization',
    image: 'https://i.postimg.cc/DyZ57Ppm/skin-sensor.webp',
    thumbnail: 'https://i.postimg.cc/DyZ57Ppm/skin-sensor.webp', // 新增缩略图字段
    features: ['Skin Detection', 'Auto Adjustment', 'Safe Treatment', 'Multi-tone Compatible'],
    category: 'ipl',
  },
  {
    id: 'battery-powered',
    name: 'Battery Powered IPL Device',
    description: 'Cordless convenience with long-lasting battery performance',
    image: 'https://i.postimg.cc/fbHR2mNL/Batery-ipl.webp',
    thumbnail: 'https://i.postimg.cc/fbHR2mNL/Batery-ipl.webp', // 新增缩略图字段
    features: ['Cordless', 'Long Battery Life', 'Portable', 'Travel Friendly'],
    category: 'ipl',
  },
  {
    id: 'handheld',
    name: 'Handheld IPL Device',
    description: 'Compact and ergonomic design for easy handling',
    image: 'https://i.postimg.cc/BvHc6YGc/handheld-ipl.webp',
    thumbnail: 'https://i.postimg.cc/BvHc6YGc/handheld-ipl.webp', // 新增缩略图字段
    features: ['Ergonomic Design', 'Lightweight', 'Easy Grip', 'Precision Control'],
    category: 'ipl',
  },
  {
    id: 'ice-cooling',
    name: 'Ice Cooling IPL Device',
    description: 'Advanced cooling system for maximum comfort during treatment',
    image: 'https://i.postimg.cc/9FD908dR/ice-cooling-ipl.webp',
    thumbnail: 'https://i.postimg.cc/9FD908dR/ice-cooling-ipl.webp', // 新增缩略图字段
    features: ['Advanced Cooling', 'Comfort Treatment', 'Reduced Sensation', 'Continuous Operation'],
    category: 'ipl',
  },
  {
    id: 'dual-lamp',
    name: 'Dual-Lamp IPL Device',
    description: 'Enhanced efficiency with dual lamp technology',
    image: 'https://i.postimg.cc/zGc8B7kB/dual-lamp-ipl.webp',
    thumbnail: 'https://i.postimg.cc/zGc8B7kB/dual-lamp-ipl.webp', // 新增缩略图字段
    features: ['Dual Lamps', 'Faster Treatment', 'Even Coverage', 'Professional Power'],
    category: 'ipl',
  },
  {
    id: 'ai-powered',
    name: 'AI-Powered IPL Device',
    description: 'Artificial intelligence for personalized treatment optimization',
    image: 'https://i.postimg.cc/BQzVPVRd/ai-powered-ipl.webp',
    thumbnail: 'https://i.postimg.cc/BQzVPVRd/ai-powered-ipl.webp', // 新增缩略图字段
    features: ['AI Technology', 'Smart Learning', 'Personalized', 'Advanced Analytics'],
    category: 'ipl',
  }
];

export const accessories: Product[] = [
  {
    id: 'sapphire-lens',
    name: 'Sapphire Lens',
    description: 'Premium sapphire crystal lens for enhanced durability and performance',
    image: 'https://i.postimg.cc/9Mc8j5qq/sapphire-len.webp',
    thumbnail: 'https://i.postimg.cc/9Mc8j5qq/sapphire-len.webp', // 新增缩略图字段
    features: ['Sapphire Crystal', 'Scratch Resistant', 'Optimal Light Transmission', 'Long Lasting'],
    category: 'accessories'
  },
  {
    id: 'adapter',
    name: 'Power Adapter',
    description: 'Universal power adapter with multiple voltage support',
    image: 'https://i.postimg.cc/GtVxtZ9K/power-adaptor.webp',
    thumbnail: 'https://i.postimg.cc/GtVxtZ9K/power-adaptor.webp', // 新增缩略图字段
    features: ['Universal Compatibility', 'Fast Charging', 'Safety Certified', 'Compact Design'],
    category: 'accessories'
  },
  {
    id: 'goggles',
    name: 'Safety Goggles',
    description: 'Professional-grade protective eyewear for IPL treatments',
    image: 'https://i.postimg.cc/1tYp7L0S/safety-goggles.webp',
    thumbnail: 'https://i.postimg.cc/1tYp7L0S/safety-goggles.webp', // 新增缩略图字段
    features: ['UV Protection', 'Comfortable Fit', 'Adjustable Strap', 'Professional Grade'],
    category: 'accessories'
  },
  {
    id: 'filter',
    name: 'Optical Filter',
    description: 'High-quality optical filter for precise light wavelength control',
    image: 'https://i.postimg.cc/tRw33GCt/filter.webp',
    thumbnail: 'https://i.postimg.cc/tRw33GCt/filter.webp', // 新增缩略图字段
    features: ['Precision Filtering', 'Wavelength Control', 'High Quality', 'Professional Standard'],
    category: 'accessories'
  }
];