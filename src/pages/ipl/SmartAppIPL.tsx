import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, ShoppingCart, Plus, Minus, Shield, Truck, Award, Smartphone, Check, Info } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const SmartAppIPL: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const productImages = [
    '/images/smart-app-ipl/smart-app-ipl-front.jpg',
    '/images/smart-app-ipl/smart-app-ipl-app-interface.jpg', 
    '/images/smart-app-ipl/smart-app-ipl-side-view.jpg',
    '/images/smart-app-ipl/smart-app-ipl-usage.jpg',
    '/images/smart-app-ipl/smart-app-ipl-features.jpg',
    '/images/smart-app-ipl/smart-app-ipl-package.jpg',
    '/images/smart-app-ipl/smart-app-ipl-comparison.jpg',
    '/images/smart-app-ipl/smart-app-ipl-accessories.jpg'
  ];

  const thumbnails = productImages.map(img => img);

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

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {thumbnails.slice(0, 8).map((thumb, index) => (
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
                Smart App-Controlled IPL Device
              </h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.8/5 (127 customer reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-[rgb(0,116,224)]">$299.00</span>
                <span className="text-xl text-gray-500 line-through">$399.00</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-semibold">Save 25%</span>
              </div>
              <p className="text-sm text-gray-600">Free shipping • 1-year warranty included</p>
            </div>

            {/* Product Description */}
            <div className="space-y-4">
              <div className="bg-[#f9f9f9] rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Smartphone className="w-5 h-5 mr-2 text-[rgb(0,116,224)]" />
                  ✨ Revolutionary App-Controlled Technology ✨
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Experience the future of home hair removal with our <strong>Smart App-Controlled IPL Device</strong>. 
                  This revolutionary device combines clinically proven <strong>IPL technology</strong> with advanced 
                  <strong>❄️ Bluetooth connectivity and AI-powered skin analysis</strong> – for visibly smoother skin 
                  in record time, completely pain-free. With <strong>9 individually adjustable intensity levels</strong> 
                  and smart app guidance, this device is perfect for all skin types and body areas.
                </p>
              </div>

              <ul className="space-y-3" style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔️</span>
                  <span><strong>Long-lasting smooth skin</strong> – IPL targets hair roots and prevents regrowth permanently</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔️</span>
                  <span><strong>Pain-free & skin-friendly</strong> – ❄️ Ice cooling reduces heat sensation and irritation to a minimum</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔️</span>
                  <span><strong>Maximum flexibility</strong> – 9️⃣ intensity levels for face, legs, bikini area, underarms & more</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔️</span>
                  <span><strong>Smart App Integration</strong> – Personalized treatment plans and real-time skin analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔️</span>
                  <span><strong>Saves time & money</strong> – 💰 No more expensive treatments at beauty salons</span>
                </li>
              </ul>
            </div>

            {/* Stock Status */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-medium">✅ In Stock - Ready to Ship (24 units available)</p>
              <p className="text-sm text-green-600 mt-1">Delivery time: 1 business day</p>
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
                  <span className="text-sm text-gray-600">Max 10 per order</span>
                </div>
              </div>

              <button className="w-full bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
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
                <p className="text-xs text-gray-600">1-Year<br />Warranty</p>
              </div>
              <div className="text-center">
                <Truck className="w-8 h-8 mx-auto mb-2 text-[rgb(0,116,224)]" />
                <p className="text-xs text-gray-600">Free<br />Shipping</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-2 text-[rgb(0,116,224)]" />
                <p className="text-xs text-gray-600">FDA<br />Approved</p>
              </div>
            </div>

            {/* Product Meta */}
            <div className="pt-6 border-t border-gray-200 space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">SKU:</span> IPL-SMART-001
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Category:</span> 
                <a href="/category/ipl-devices" className="text-[rgb(0,116,224)] hover:underline ml-1">IPL Hair Removal</a>
              </p>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mb-16">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button className="py-2 px-1 border-b-2 border-[rgb(0,116,224)] text-[rgb(0,116,224)] font-medium text-sm">
                Description
              </button>
              <button className="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">
                Product Safety
              </button>
              <button className="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">
                Reviews (127)
              </button>
            </nav>
          </div>

          {/* Description Content */}
          <div className="py-8">
            <div className="space-y-8">
              
              {/* App Features Section */}
              <div className="bg-gradient-to-r from-[rgb(30,157,139)] to-[rgb(36,151,144)] rounded-2xl p-8 text-white">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">💖 Smart App Integration for Professional Results at Home!</h2>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        Real-time skin tone analysis and safety monitoring
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        Customized treatment schedules and reminders
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        Progress photos and hair reduction tracking
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        Expert tips and technique guidance
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="inline-block bg-white/20 rounded-2xl p-6">
                      <Smartphone className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-sm">Download the free iShine app</p>
                      <p className="text-xs opacity-80">Available on iOS & Android</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <img src="/images/smart-app-ipl/feature-app-interface.jpg" alt="App Interface" className="w-full rounded-xl" />
                  <h3 className="text-xl font-bold">Smart Skin Analysis</h3>
                  <p className="text-gray-700">
                    The revolutionary app automatically analyzes your skin tone and hair color to recommend 
                    the perfect intensity setting. Advanced AI ensures optimal results while maintaining 
                    complete safety for your skin type.
                  </p>
                </div>
                <div className="space-y-6">
                  <img src="/images/smart-app-ipl/feature-cooling.jpg" alt="Ice Cooling Technology" className="w-full rounded-xl" />
                  <h3 className="text-xl font-bold">❄️ Advanced Ice Cooling Technology</h3>
                  <p className="text-gray-700">
                    Experience completely pain-free hair removal with our patented ice cooling system. 
                    The device maintains an optimal temperature to ensure comfort while maximizing 
                    treatment effectiveness.
                  </p>
                </div>
              </div>

              {/* How it Works */}
              <div className="bg-[#f9f9f9] rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">How the Smart App Works</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[rgb(0,116,224)] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                    <h4 className="font-semibold mb-2">Connect & Analyze</h4>
                    <p className="text-sm text-gray-600">Connect your device via Bluetooth and let the app analyze your skin tone</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[rgb(0,116,224)] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                    <h4 className="font-semibold mb-2">Personalized Plan</h4>
                    <p className="text-sm text-gray-600">Receive a customized treatment schedule based on your specific needs</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[rgb(0,116,224)] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                    <h4 className="font-semibold mb-2">Track Progress</h4>
                    <p className="text-sm text-gray-600">Monitor your results with before/after photos and treatment history</p>
                  </div>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Device Specifications</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Light Source:</span>
                      <span className="font-medium">IPL (Intense Pulsed Light)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Wavelength:</span>
                      <span className="font-medium">530-1200nm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Energy Levels:</span>
                      <span className="font-medium">9 Auto-Adjustable</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Flash Window:</span>
                      <span className="font-medium">4.1 cm²</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Flash Count:</span>
                      <span className="font-medium">900,000+</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Smart Features</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Connectivity:</span>
                      <span className="font-medium">Bluetooth 5.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">App Compatibility:</span>
                      <span className="font-medium">iOS 12+ / Android 8+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Skin Sensor:</span>
                      <span className="font-medium">Advanced AI Recognition</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cooling System:</span>
                      <span className="font-medium">Ice Contact Cooling</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Safety Features:</span>
                      <span className="font-medium">UV Filter + Auto Shut-off</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Package Contents */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">What's Included</h2>
                <img src="/images/smart-app-ipl/package-contents.jpg" alt="Package Contents" className="w-full rounded-xl" />
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      1x Smart App-Controlled IPL Device
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      1x Power Adapter
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      1x Protective Glasses
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      1x User Manual (Multi-language)
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      1x Cleaning Cloth
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      Free iShine Mobile App
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Product Safety Section */}
          <div className="py-8 border-t border-gray-200" style={{ display: 'none' }}>
            <h2 className="text-2xl font-bold mb-6">Product Safety Information</h2>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <div className="flex">
                <Info className="w-5 h-5 text-yellow-400 mr-3 mt-0.5" />
                <div>
                  <h3 className="text-lg font-medium text-yellow-800">Important Safety Guidelines</h3>
                  <p className="text-yellow-700 mt-1">
                    Please read all safety instructions carefully before using this device. 
                    Improper use may cause skin irritation or burns.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-red-600">⚠️ Do Not Use If:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    You are pregnant or breastfeeding
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    You have very dark skin (Fitzpatrick skin type V-VI)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    You have white, grey, or red hair
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    You have active skin cancer in the treatment area
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    You are under 18 years of age
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-green-600">✓ Safety Features:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    Automatic skin tone detection
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    UV filter protection
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    Contact cooling system
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    Auto shut-off after 10 minutes
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    CE and FDA certified
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Before First Use:</h3>
              <ol className="space-y-2 text-sm">
                <li>1. Perform a patch test on a small area 24 hours before full treatment</li>
                <li>2. Shave the treatment area (do not wax or pluck)</li>
                <li>3. Clean and dry your skin</li>
                <li>4. Wear the provided protective glasses</li>
                <li>5. Start with the lowest intensity setting</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[rgb(236,67,113)] to-[rgb(125,0,99)] py-16">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
            Ready to Experience Smart Hair Removal?
          </h2>
          <p className="text-lg text-white mb-8">
            Join thousands of satisfied customers who've made the switch to intelligent, app-controlled IPL technology.
          </p>
          <button
            className="bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Order Now - Free Shipping
          </button>
        </div>
      </section>

      {/* Footer Contact Form */}
      <div className="bg-[#f9f9f9] py-16">
        <ContactFormA />
      </div>
    </div>
  );
};

export default SmartAppIPL;
