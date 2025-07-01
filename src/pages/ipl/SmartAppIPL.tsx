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
  Check,
  Info,
  Smartphone,
} from 'lucide-react';

const SmartAppIPL: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeSubTab, setActiveSubTab] = useState<'specifications' | 'safety' | 'reviews'>('specifications');

  /* ========= 1. Resource Configuration ========= */
  const productImages = [
    'https://i.postimg.cc/tCtVBTPz/app-ipl-three-set.webp',
    'https://i.postimg.cc/59YB2xQv/12pro-1.webp',
    'https://i.postimg.cc/HLk5DHCr/app-ipl-side.webp',
    'https://i.postimg.cc/L8HgLR5x/app-ipl-lay.webp',
    'https://i.postimg.cc/hvWfjRNb/app-ipl-back.webp',
  ];
  const thumbnails = productImages;

  /* ========= 2. Event Handlers ========= */
  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  const increaseQuantity = () => quantity < 10 && setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  /* ========= 3. Render ========= */
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

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-[#f9f9f9] rounded-2xl overflow-hidden group">
              <img
                src={productImages[currentImageIndex]}
                alt="Smart App IPL Device"
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
              {thumbnails.map((thumb, index) => (
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
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Smart App IPL Hair Removal Device
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
                <span className="text-sm text-gray-600">4.9/5 (158 reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-[rgb(0,116,224)]">$129.00</span>
                <span className="text-xl text-gray-500 line-through">$239.00</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-semibold">
                  Save 23%
                </span>
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
              <ul className="space-y-3" style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔️</span>
                  Bluetooth 5.0 connectivity for stable pairing
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔️</span>
                  Personalized treatment plans via AI analysis(on the roadmap)
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔️</span>
                  Real-time intensity control and on-screen feedback
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔️</span>
                  Session scheduling and usage reminders
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔️</span>
                  Compatible with iOS & Android (App Store & Google Play)
                </li>
              </ul>
            </div>

            {/* Stock Status */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-medium">✅ In Stock – 29 units left</p>
              <p className="text-sm text-green-600 mt-1">Ships in 24 hours</p>
            </div>

            {/* Quantity & Cart */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
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
                  <span className="text-sm text-gray-600">Max 10 per order</span>
                </div>
              </div>
              <button className="w-full bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold py-4 rounded-lg flex items-center justify-center transition-colors">
                Get A Quote Now
              </button>
            </div>

            {/* Payment & Shipping Icons */}
            <div className="space-y-4">
              <img src="/images/payment-shipping-icons.png" alt="Payment & Shipping" className="w-[310px]" />
              <img src="/images/guarantee-shipping.png" alt="Guarantee & Shipping" className="w-[310px]" />
              <img src="/images/featured-in.png" alt="Featured In" className="w-[350px]" />
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-[rgb(0,116,224)]" />
                <p className="text-xs text-gray-600">12-Month<br />Warranty</p>
              </div>
              <div className="text-center">
                <Truck className="w-8 h-8 mx-auto mb-2 text-[rgb(0,116,224)]" />
                <p className="text-xs text-gray-600">Free<br />Shipping</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-2 text-[rgb(0,116,224)]" />
                <p className="text-xs text-gray-600">FDA<br />Cleared</p>
              </div>
            </div>

            {/* Product Meta */}
            <div className="pt-6 border-t border-gray-200 space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">SKU:</span> SMART-APP-IPL-002
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
      </div>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-[rgb(0,116,224)] to-[rgb(0,89,179)] py-16">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
            Ready for Smart App–Powered Hair Removal?
          </h2>
          <p className="text-lg text-white mb-8">
            Experience guided IPL treatments from your smartphone—anytime, anywhere.
          </p>
          <button className="bg-white text-[rgb(0,116,224)] font-semibold px-8 py-3 rounded-full transition hover:opacity-90">
            Order Now – Free Shipping
          </button>
        </div>
      </section>
    </div>
  );
};

export default SmartAppIPL;