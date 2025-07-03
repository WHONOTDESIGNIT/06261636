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

const BatteryPoweredIPL: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeSubTab, setActiveSubTab] = useState<'specifications' | 'safety' | 'reviews'>('specifications');

  // Replace with your actual images
  const productImages = [
    '/images/battery-ipl/front.jpg',
    '/images/battery-ipl/interface.jpg',
    '/images/battery-ipl/side.jpg',
    '/images/battery-ipl/usage.jpg',
    '/images/battery-ipl/features.jpg',
    '/images/battery-ipl/package.jpg',
    '/images/battery-ipl/comparison.jpg',
    '/images/battery-ipl/accessories.jpg',
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
          <a href="/home" className="hover:text-blue-600">Home</a>
          <span className="mx-2">/</span>
          <a href="/ipl-hair-removal" className="hover:text-blue-600">IPL Hair Removal</a>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Battery-Powered IPL Hair Removal Device</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-[#f9f9f9] rounded-2xl overflow-hidden group">
              <img
                src={productImages[currentImageIndex]}
                alt="Battery Powered IPL Hair Removal Device"
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
                Battery-Powered IPL Hair Removal Device
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
                <span className="text-sm text-gray-600">4.9/5 (312 reviews)</span>
              </div>
            </div>
            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-blue-600">$399.00</span>
                <span className="text-xl text-gray-500 line-through">$599.00</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-semibold">
                  Save 33%
                </span>
              </div>
              <p className="text-sm text-gray-600">Free shipping • 12-month warranty included</p>
            </div>
            {/* Description */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <span className="w-5 h-5 mr-2 text-blue-600">🔋</span>
                  ✨ Built-in Rechargeable Battery - Freedom from Adapters ✨
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Experience the ultimate cordless convenience with our <strong>battery-powered IPL device</strong>. Equipped with a high-capacity rechargeable battery, it offers seamless mobility without the need for power adapters. Enjoy professional-grade hair removal anywhere, anytime, with up to 9 adjustable energy levels for personalized treatments.
                </p>
              </div>
              <ul className="space-y-3" style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✔️</span>
                  Cordless design for ultimate freedom and convenience.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✔️</span>
                  9 adjustable energy levels for customized treatments.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✔️</span>
                  Long-lasting rechargeable battery with 600+ recharge cycles.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✔️</span>
                  No need for power adapters during use, ideal for travel.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✔️</span>
                  Suitable for all skin tones, FDA & CE approved.
                </li>
              </ul>
            </div>
            {/* Stock */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-medium">✅ In Stock – 45 units left</p>
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
                Get A Wholesale Price Now!
              </button>
            </div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="text-xs text-gray-600">18-Month<br />Warranty</p>
              </div>
              <div className="text-center">
                <Truck className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="text-xs text-gray-600">Free<br />Shipping</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="text-xs text-gray-600">FDA<br />Certified</p>
              </div>
            </div>
            {/* Product Meta */}
            <div className="pt-6 border-t border-gray-200 space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">SKU:</span> BATTERY-IPL-001
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Category:</span>
                <a href="/ipl-hair-removal" className="text-blue-600 hover:underline ml-1">
                  IPL Hair Removal Devices
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Tabs Section */}
      <div className="mb-16">
        <div className="space-y-8">
          {/* Battery Technology Banner */}
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  🔋 Built-in Rechargeable Battery - Cordless Freedom
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3" />
                    No need for power adapters during use, enjoy cordless convenience anywhere.
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3" />
                    9 adjustable energy levels for personalized treatments.
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3" />
                    Long-lasting rechargeable battery with 600+ recharge cycles.
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3" />
                    Compact and portable, perfect for travel and outdoor use.
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3" />
                    Suitable for all skin tones, FDA & CE approved.
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="inline-block bg-white/20 rounded-2xl p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/30 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🔋</span>
                  </div>
                  <p className="text-sm">Cordless & Portable</p>
                  <p className="text-xs opacity-80">Enjoy freedom anywhere</p>
                </div>
              </div>
            </div>
          </div>
          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <img
                src="/images/battery-ipl/feature-cooling.jpg"
                alt="Cordless Convenience"
                className="w-full rounded-xl"
              />
              <h3 className="text-xl font-bold">Cordless Design</h3>
              <p className="text-gray-700">
                Experience true freedom with our built-in rechargeable battery, eliminating the need for power cords and adapters. Perfect for home, travel, and outdoor use.
              </p>
            </div>
            <div className="space-y-6">
              <img
                src="/images/battery-ipl/feature-energy.jpg"
                alt="9 Energy Levels"
                className="w-full rounded-xl"
              />
              <h3 className="text-xl font-bold">9 Adjustable Energy Levels</h3>
              <p className="text-gray-700">
                Fine-tune your treatment with 9 levels of energy, ensuring safe and effective hair removal tailored to your skin and hair type.
              </p>
            </div>
          </div>
          {/* How It Works */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-100">
            <h2 className="text-2xl font-bold mb-6 text-center">
              How Battery-Powered IPL Works
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                ['Charge & Prepare', 'Fully charge the device for cordless use.'],
                ['Select & Pulse', 'Choose your energy level and deliver pulses to target follicles.'],
                ['Enjoy & Maintain', 'Use regularly for smooth, hair-free skin without cords.'],
              ].map(([title, desc], i) => (
                <div key={title} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {i + 1}
                  </div>
                  <h4 className="font-semibold mb-2">{title}</h4>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Technical Tabs */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Technical Specifications</h2>
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8 justify-center">
                {['specifications', 'safety', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveSubTab(tab as any)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeSubTab === tab
                        ? 'border-purple-500 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab === 'specifications'
                      ? 'Specifications'
                      : tab === 'safety'
                      ? 'Safety'
                      : 'Reviews'}
                  </button>
                ))}
              </nav>
            </div>
            {activeSubTab === 'specifications' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Device Specs</h3>
                  <div className="space-y-3 text-sm">
                    {[
                      ['Power Source', 'Built-in Rechargeable Battery'],
                      ['Battery Life', 'Up to 2 hours per charge'],
                      ['Energy Levels', '9 adjustable levels'],
                      ['Flash Count', '600+ recharge cycles'],
                      ['Size', 'Compact and portable'],
                      ['Weight', 'Approx. 1.2 kg'],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between">
                        <span className="text-gray-600">{k}:</span>
                        <span className="font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Features</h3>
                  <div className="space-y-3 text-sm">
                    {[
                      ['Cordless', 'Yes'],
                      ['Adjustable Energy', '9 levels'],
                      ['Portable', 'Yes'],
                      ['Safety', 'FDA & CE approved'],
                      ['Usage Time', 'Up to 2 hours per full charge'],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between">
                        <span className="text-gray-600">{k}:</span>
                        <span className="font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {activeSubTab === 'safety' && (
              <div className="space-y-6">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <div className="flex">
                    <Info className="w-5 h-5 text-yellow-400 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-medium text-yellow-800">Safety Guidelines</h3>
                      <p className="text-yellow-700 mt-1">
                        Always start with the lowest energy level and let your skin adapt. Fully charge before use for optimal safety.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-red-600">⚠️ Do Not Use If:</h3>
                    <ul className="space-y-2 text-sm">
                      {[
                        'Pregnant or breastfeeding',
                        'Skin with active infections',
                        'Open wounds or skin lesions',
                        'Over tattoos or pigmented moles',
                        'Under 18 years old',
                      ].map((txt) => (
                        <li key={txt} className="flex items-start">
                          <span className="text-red-500 mr-2 mt-1">•</span>
                          {txt}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-green-600">✓ Built-in Protections:</h3>
                    <ul className="space-y-2 text-sm">
                      {[
                        'Skin contact detection',
                        'Auto shut-off after 15 minutes',
                        'Overheat protection',
                        'Child lock',
                        'FDA & CE certified',
                      ].map((txt) => (
                        <li key={txt} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">•</span>
                          {txt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {activeSubTab === 'reviews' && (
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
                  {['Emma W.', 'Olivia', 'Ava'].map((name, idx) => (
                    <div
                      key={name}
                      className={`border-b border-gray-100 pb-4 ${idx === 2 ? 'border-none' : ''}`}
                    >
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="ml-2 text-sm font-medium">{name}</span>
                        <span className="ml-2 text-xs text-gray-500">Verified Purchase</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        "Absolutely love the cordless freedom! The battery lasts long, and the 9 energy levels give me full control. Highly recommend for home use!"
                      </p>
                    </div>
                  ))}
                  <div className="mt-6 text-center">
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      View All 312 Reviews
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 py-16">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4 text-white tracking-tight">
            Experience Cordless Freedom with Built-in Battery IPL!
          </h2>
          <p className="text-lg text-white mb-8">
            Join thousands of women enjoying the ultimate cordless, portable, and powerful hair removal experience.
          </p>
          <button className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-full transition hover:opacity-90 shadow-lg">
            Order Now – Free Shipping
          </button>
        </div>
      </section>
    </div>
  );
};

export default BatteryPoweredIPL;
