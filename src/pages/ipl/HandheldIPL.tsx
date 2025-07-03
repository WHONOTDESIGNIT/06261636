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
  Info,
} from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const HandheldIPL: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeSubTab, setActiveSubTab] = useState<'specifications' | 'safety' | 'reviews'>('specifications');

  // Replace with your actual images
  const productImages = [
    'https://i.postimg.cc/J0SkY7gb/handheld-ipl-1.webp',
    'https://i.postimg.cc/kMHKgw4B/handheld-ipl-2.webp',
    'https://i.postimg.cc/4Nht7t7w/handheld-ipl-3.webp',
    '/images/handheld-ipl/usage.jpg',
    '/images/handheld-ipl/features.jpg',
    '/images/handheld-ipl/package.jpg',
    '/images/handheld-ipl/comparison.jpg',
    '/images/handheld-ipl/accessories.jpg',
  ];
  const thumbnails = productImages;

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  const increaseQuantity = () => quantity < 10 && setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4 mt-4 uppercase">
          <a href="/" className="hover:text-blue-600">Home</a>
          <span className="mx-2">/</span>
          <a href="/ipl-hair-removal" className="hover:text-blue-600">IPL Hair Removal</a>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Handheld IPL Hair Removal Device</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-[#f9f9f9] rounded-2xl overflow-hidden group">
              <img
                src={productImages[currentImageIndex]}
                alt="Handheld IPL Hair Removal Device"
                className="w-full h-[700px] object-cover"
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
              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-blue-500' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {thumbnails.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative overflow-hidden rounded-lg border-2 transition-colors ${
                    index === currentImageIndex ? 'border-blue-500' : 'border-gray-200'
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
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Handheld IPL Hair Removal Device
              </h1>
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.8/5 (198 reviews)</span>
              </div>
            </div>
            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-blue-600">$329.00</span>
                <span className="text-xl text-gray-500 line-through">$459.00</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-semibold">
                  Save 28%
                </span>
              </div>
              <p className="text-sm text-gray-600">Free shipping • 12-month warranty included</p>
            </div>
            {/* Description */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <span className="w-5 h-5 mr-2 text-blue-600">🤲</span>
                  ✨ Ergonomic Handheld Design - 5 Adjustable Energy Levels ✨
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Discover the perfect blend of comfort and performance with our <strong>handheld IPL device</strong>. Designed for easy grip and precise control, it features 5 adjustable energy levels to suit all skin types and sensitivities. Achieve salon-quality hair removal results at home with a lightweight, portable device.
                </p>
              </div>
              <ul className="space-y-3" style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✔️</span>
                  Ergonomic handheld design for comfortable use.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✔️</span>
                  5 adjustable energy levels for personalized treatments.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✔️</span>
                  Lightweight and portable—ideal for travel and home use.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✔️</span>
                  Suitable for all skin tones, gentle and effective.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✔️</span>
                  FDA & CE approved for safety and quality.
                </li>
              </ul>
            </div>
            {/* Stock */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-medium">✅ In Stock – 32 units left</p>
              <p className="text-sm text-green-600 mt-1">Ships within 24 hours</p>
            </div>
            {/* Quantity & Cart */}
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
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 rounded-lg transition-shadow shadow-lg flex items-center justify-center">
GET A QUOTE NOW
              </button>
            </div>
            {/* Guarantees */}
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2">
                <Shield className="w-5 h-5 text-blue-500 mr-2" /> 12-Month Warranty
              </div>
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2">
                <Truck className="w-5 h-5 text-blue-500 mr-2" /> Free Shipping
              </div>
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2">
                <Award className="w-5 h-5 text-blue-500 mr-2" /> FDA & CE Approved
              </div>
            </div>
          </div>
        </div>
        {/* Tabs Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="flex space-x-8 border-b border-gray-200 mb-8">
            <button
              className={`pb-2 text-lg font-semibold transition-colors ${activeSubTab === 'specifications' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveSubTab('specifications')}
            >
              Specifications
            </button>
            <button
              className={`pb-2 text-lg font-semibold transition-colors ${activeSubTab === 'safety' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveSubTab('safety')}
            >
              Safety
            </button>
            <button
              className={`pb-2 text-lg font-semibold transition-colors ${activeSubTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveSubTab('reviews')}
            >
              Reviews
            </button>
          </div>
          {/* Tab Content */}
          {activeSubTab === 'specifications' && (
            <div>
              <h4 className="text-xl font-semibold mb-4">Product Specifications</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Device Type: Handheld IPL Hair Removal</li>
                <li>Energy Levels: 5 adjustable settings</li>
                <li>Power Source: AC Adapter</li>
                <li>Flash Life: 500,000 flashes</li>
                <li>Display: LED screen</li>
                <li>Weight: 220g</li>
                <li>Dimensions: 180 x 60 x 40 mm</li>
                <li>Warranty: 12 months</li>
              </ul>
            </div>
          )}
          {activeSubTab === 'safety' && (
            <div>
              <h4 className="text-xl font-semibold mb-4">Safety & Certifications</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>FDA & CE certified for safe home use</li>
                <li>Skin sensor for safe operation</li>
                <li>Automatic shut-off after 10 minutes of inactivity</li>
                <li>Gentle on all skin types</li>
                <li>UV filter for skin protection</li>
              </ul>
            </div>
          )}
          {activeSubTab === 'reviews' && (
            <div>
              <h4 className="text-xl font-semibold mb-4">Customer Reviews</h4>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex items-center mb-2">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="font-semibold">Emily R.</span>
                    <span className="ml-2 text-gray-500 text-sm">Verified Buyer</span>
                  </div>
                  <p className="text-gray-700">“Super easy to use and the results are amazing! The 5 energy levels are perfect for my sensitive skin.”</p>
                </div>
                <div className="border-b pb-4">
                  <div className="flex items-center mb-2">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="font-semibold">Liam T.</span>
                    <span className="ml-2 text-gray-500 text-sm">Verified Buyer</span>
                  </div>
                  <p className="text-gray-700">“Compact and lightweight, I can take it anywhere. Highly recommend for home use!”</p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="font-semibold">Sophia W.</span>
                    <span className="ml-2 text-gray-500 text-sm">Verified Buyer</span>
                  </div>
                  <p className="text-gray-700">“Noticeable results after just a few sessions. The ergonomic design makes it so easy to handle.”</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <ContactFormA />
    </div>
  );
};

export default HandheldIPL;