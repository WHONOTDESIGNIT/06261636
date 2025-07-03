import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Plus,
  Minus,
  Shield,
  Truck,
  Award,
  Smartphone,
} from 'lucide-react';

const SmartAppIPL: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const productImages = [
    'https://i.postimg.cc/WpYCbRgg/smart-ipl-1.webp',
    'https://i.postimg.cc/KvdWBn9Y/smart-ipl-2.webp',
    'https://i.postimg.cc/2ShKwVJ7/smart-ipl-3.webp',
    'https://i.postimg.cc/k5Chh7P3/smart-ipl-4.webp',
    'https://i.postimg.cc/SKG1BHmX/smart-ipl-5.webp',
    'https://i.postimg.cc/Jn4YMKhp/smart-ipl-6.webp',
    'https://i.postimg.cc/85KK5WJN/smart-ipl-7.webp',
    'https://i.postimg.cc/KcWphPh5/smart-ipl-8.webp',
  ];
  const thumbnails = productImages;

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  const increaseQuantity = () => quantity < 10 && setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4 mt-4 uppercase">
          <a href="/" className="hover:text-[rgb(0,116,224)]">Home</a>
          <span className="mx-2">/</span>
          <a href="/ipl-hair-removal" className="hover:text-[rgb(0,116,224)]">IPL Hair Removal</a>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Smart App IPL Device</span>
        </nav>

        {/* Main Product Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-[#f9f9f9] rounded-2xl overflow-hidden group">
              <img
                src={productImages[currentImageIndex]}
                alt="Smart App IPL Device"
                className="w-full h-[800px] object-cover"
              />
              {/* Navigation Buttons */}
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
              {/* Dots */}
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
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {thumbnails.slice(0,8).map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative overflow-hidden rounded-lg border-2 transition-colors ${
                    index === currentImageIndex ? 'border-[rgb(0,116,224)]' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-20 object-cover hover:scale-105 transition-transform"
                  />
                </button>
              ))}
            </div>
          </div>
          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Smart App IPL Hair Removal Device
            </h1>
            {/* Ratings */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-sm text-gray-600">4.9/5 (158 reviews)</span>
            </div>
            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-[rgb(0,116,224)]">$229.00</span>
                <span className="text-xl text-gray-500 line-through">$329.00</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-semibold">Save 23%</span>
              </div>
              <p className="text-sm text-gray-600">Free shipping • 12-month warranty</p>
            </div>
            {/* Description */}
            <div className="space-y-4">
              <div className="bg-[#f9f9f9] rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Smartphone className="w-5 h-5 mr-2 text-[rgb(0,116,224)]" />
                  ✨ Smart App Connect Technology ✨
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Seamlessly connect your IPL device via Bluetooth to our <strong>SmartApp</strong>.  
                  Enjoy guided treatments, real-time session tracking, personalized routines,  
                  and AI-powered insights. Control intensity levels, monitor progress, and receive  
                  reminders—all from your smartphone.
                </p>
              </div>
              {/* Features list */}
              <ul className="space-y-3" style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔️</span> Bluetooth 5.0 connectivity for stable pairing
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔️</span> Personalized treatment plans via AI analysis
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔️</span> Real-time intensity control and on-screen feedback
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔️</span> Session scheduling and usage reminders
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔️</span> Compatible with iOS & Android
                </li>
              </ul>
            </div>
            {/* Stock */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-medium">✅ In Stock</p>
              <p className="text-sm text-green-600 mt-1">Ships in 24 hours</p>
            </div>
            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={decreaseQuantity}
                      className="p-2 hover:bg-gray-100 transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                    <button
                      onClick={increaseQuantity}
                      className="p-2 hover:bg-gray-100 transition-colors"
                      disabled={quantity >= 10}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              <button className="w-full bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold py-4 rounded-lg flex items-center justify-center transition-colors">
                GET A QUOTE NOW
              </button>
            </div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-[rgb(0,116,224)]" />
                <p className="text-xs text-gray-600">12-Month Warranty</p>
              </div>
              <div className="text-center">
                <Truck className="w-8 h-8 mx-auto mb-2 text-[rgb(0,116,224)]" />
                <p className="text-xs text-gray-600">Free Shipping</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-2 text-[rgb(0,116,224)]" />
                <p className="text-xs text-gray-600">FDA Approved</p>
              </div>
            </div>
            {/* Product Meta */}
            <div className="pt-6 border-t border-gray-200 space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">SKU:</span> SMART-APP-IPL-001
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Category:</span>
                <a href="/ipl-hair-removal" className="text-[rgb(0,116,224)] hover:underline ml-1">
                  IPL Hair Removal
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* Product Description with images and text */}
        <section className="my-16 px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Product Features & Benefits</h2>
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            <img src="/images/smart-app-ipl/feature1.jpg" alt="Guided App Control" className="w-full md:w-1/2 rounded-xl shadow-md" />
            <div className="md:ml-8 mt-6 md:mt-0">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Smart App Connectivity</h3>
              <p className="text-gray-700 mb-4">
                Connect your device effortlessly via Bluetooth 5.0. Use the dedicated mobile app to customize treatments, track progress, and receive personalized recommendations, making home hair removal smarter and more convenient.
              </p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            <img src="/images/smart-app-ipl/feature2.jpg" alt="Smart Treatment" className="w-full md:w-1/2 rounded-xl shadow-md" />
            <div className="md:ml-8 mt-6 md:mt-0">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Intelligent Treatment System</h3>
              <p className="text-gray-700 mb-4">
                The app guides you through each session, adjusting intensity based on your skin tone and hair density. Real-time feedback ensures safe, effective, and painless treatments every time.
              </p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            <img src="/images/smart-app-ipl/feature3.jpg" alt="Progress Monitoring" className="w-full md:w-1/2 rounded-xl shadow-md" />
            <div className="md:ml-8 mt-6 md:mt-0">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Progress & Reminder Alerts</h3>
              <p className="text-gray-700 mb-4">
                Track your treatment history and receive timely reminders for sessions. Achieve optimal results with guided routines tailored to your skin and hair type.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SmartAppIPL;