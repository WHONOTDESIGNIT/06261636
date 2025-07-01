import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, ShoppingCart, Plus, Minus, Shield, Truck, Award, Smartphone, Check, Info } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const SmartAppIPL: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeSubTab, setActiveSubTab] = useState('specifications');
  const [thumbStart, setThumbStart] = useState(0);

  const productImages = [
    'https://i.postimg.cc/tCtVBTPz/app-ipl-three-set.webp',
    '/images/smart-app-ipl/smart-app-ipl-app-interface.jpg', 
    '/images/smart-app-ipl/smart-app-ipl-side-view.jpg',
    '/images/smart-app-ipl/smart-app-ipl-usage.jpg',
    '/images/smart-app-ipl/smart-app-ipl-features.jpg',
    '/images/smart-app-ipl/smart-app-ipl-package.jpg',
    '/images/smart-app-ipl/smart-app-ipl-comparison.jpg',
    '/images/smart-app-ipl/smart-app-ipl-accessories.jpg'
  ];

  const THUMB_WINDOW = 4;
  const maxThumbStart = productImages.length - THUMB_WINDOW;

  // 滑动窗口左移（不禁用）
  const handleThumbLeft = () => {
    setThumbStart(prev => (prev > 0 ? prev - 1 : prev));
  };

  // 滑动窗口右移（不禁用）
  const handleThumbRight = () => {
    setThumbStart(prev => (prev < maxThumbStart ? prev + 1 : prev));
  };

  // 主图切换
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const increaseQuantity = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4 mt-4 uppercase">
          <a href="/" className="hover:text-[rgb(0,116,224)]">Home</a>
          <span className="mx-2">/</span>
          <a href="/products" className="hover:text-[rgb(0,116,224)]">IPL Hair Removal</a>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Smart App-Controlled IPL Device</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-[#f9f9f9] rounded-2xl overflow-hidden group">
              <img
                src={productImages[currentImageIndex]}
                alt="Smart App-Controlled IPL Device"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-[rgb(0,116,224)]' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Gallery with sliding */}
            <div className="flex items-center mt-4">
              {/* 左箭头 - 不禁用 */}
              <button
                onClick={handleThumbLeft}
                className="p-2 rounded-full border hover:bg-gray-100"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* 缩略图窗口 */}
              <div className="grid grid-cols-4 gap-2 mx-2">
                {productImages.slice(thumbStart, thumbStart + THUMB_WINDOW).map((thumb, i) => {
                  const actualIdx = thumbStart + i;
                  return (
                    <button
                      key={actualIdx}
                      onClick={() => setCurrentImageIndex(actualIdx)}
                      className={`overflow-hidden rounded-lg border-2 transition-colors ${
                        actualIdx === currentImageIndex ? 'border-[rgb(0,116,224)]' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={thumb}
                        alt={`Thumbnail ${actualIdx + 1}`}
                        className="w-full h-20 object-cover hover:scale-105 transition-transform"
                      />
                    </button>
                  );
                })}
              </div>

              {/* 右箭头 - 不禁用 */}
              <button
                onClick={handleThumbRight}
                className="p-2 rounded-full border hover:bg-gray-100"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* 省略产品信息等其他内容 */}
          {/* ... 你的其他代码保持不变 */}
        </div>
      </div>

      {/* CTA Section, Footer, etc. */}
      {/* ... 保持不变 */}
    </div>
  );
};

export default SmartAppIPL;
