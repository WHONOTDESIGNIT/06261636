import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, ShoppingCart, Plus, Minus, Shield, Truck, Award, Eye, Check, Info } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';
import { useLanguage } from '../../context/LanguageContext';
import SEOTags from '../../components/SEO/SEOTags';
import Breadcrumbs from '../../components/SEO/Breadcrumbs';

const SkinSensorIPL: React.FC = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const productImages = [
    '/images/skin-sensor-ipl/skin-sensor-ipl-front.jpg',
    '/images/skin-sensor-ipl/skin-sensor-ipl-sensor-detail.jpg', 
    '/images/skin-sensor-ipl/skin-sensor-ipl-side-view.jpg',
    '/images/skin-sensor-ipl/skin-sensor-ipl-usage.jpg',
    '/images/skin-sensor-ipl/skin-sensor-ipl-features.jpg',
    '/images/skin-sensor-ipl/skin-sensor-ipl-package.jpg',
    '/images/skin-sensor-ipl/skin-sensor-ipl-comparison.jpg',
    '/images/skin-sensor-ipl/skin-sensor-ipl-accessories.jpg'
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
    <>
      <SEOTags 
        title="Skin Sensor IPL Device | Safe & Intelligent Hair Removal"
        description="Advanced IPL device with skin sensor technology for safe, effective, and personalized hair removal. Intelligent detection for all skin types."
        keywords="skin sensor IPL, intelligent IPL, safe hair removal, personalized IPL, all skin types IPL"
      />
      <div className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4">
          <div className="mt-4">
            <Breadcrumbs />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Product Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative bg-[#f9f9f9] rounded-2xl overflow-hidden group">
                <img
                  src={productImages[currentImageIndex]}
                  alt="Skin Sensor IPL Device"
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
                  {t('ipl.skinSensor.title')}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4.9/5 (284 customer reviews)</span>
                </div>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-[rgb(0,116,224)]">$249.00</span>
                  <span className="text-xl text-gray-500 line-through">$329.00</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-semibold">Save 24%</span>
                </div>
                <p className="text-sm text-gray-600">Free shipping • 1-year warranty included</p>
              </div>

              {/* Product Description */}
              <div className="space-y-4">
                <div className="bg-[#f9f9f9] rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <span className="w-5 h-5 mr-2 text-[rgb(0,116,224)]">👁️</span>
                    ✨ {t('ipl.skinSensor.features.intelligentDetection')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {t('ipl.skinSensor.desc')}
                  </p>
                </div>

                <ul className="space-y-3" style={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✔️</span>
                    {t('ipl.skinSensor.features.intelligentDetection')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✔️</span>
                    {t('ipl.skinSensor.features.maxSafety')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✔️</span>
                    {t('ipl.skinSensor.features.personalized')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✔️</span>
                    {t('ipl.skinSensor.features.realTime')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✔️</span>
                    {t('ipl.skinSensor.features.proResults')}
                  </li>
                </ul>
              </div>

              {/* Stock Status */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">✅ In Stock - Ready to Ship (31 units available)</p>
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
                  <span className="font-medium">SKU:</span> IPL-SENSOR-001
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
                  Reviews (284)
                </button>
              </nav>
            </div>

            {/* Description Content */}
            <div className="py-8">
              <div className="space-y-8">
                
                {/* Skin Sensor Features Section */}
                <div className="bg-gradient-to-r from-[rgb(30,157,139)] to-[rgb(36,151,144)] rounded-2xl p-8 text-white">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">💖 Advanced Skin Sensor Technology for Safe & Effective Results!</h2>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                          Automatic skin tone detection and classification (Fitzpatrick I-IV)
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                          Real-time energy adjustment based on skin characteristics
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                          Safety lockout prevents treatment on unsuitable skin tones
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                          Continuous monitoring throughout treatment session
                        </li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <div className="inline-block bg-white/20 rounded-2xl p-6">
                        <Eye className="w-16 h-16 mx-auto mb-4" />
                        <p className="text-sm">Intelligent Skin Recognition</p>
                        <p className="text-xs opacity-80">Advanced Optical Sensors</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <img src="/images/skin-sensor-ipl/feature-skin-detection.jpg" alt="Skin Detection Technology" className="w-full rounded-xl" />
                    <h3 className="text-xl font-bold">🔍 Intelligent Skin Detection</h3>
                    <p className="text-gray-700">
                      Our revolutionary optical skin sensor technology automatically analyzes your skin tone and 
                      hair characteristics in real-time. The advanced algorithm ensures optimal energy delivery 
                      while maintaining complete safety for your specific skin type[1].
                    </p>
                  </div>
                  <div className="space-y-6">
                    <img src="/images/skin-sensor-ipl/feature-safety-system.jpg" alt="Safety Protection System" className="w-full rounded-xl" />
                    <h3 className="text-xl font-bold">🛡️ Multi-Layer Safety Protection</h3>
                    <p className="text-gray-700">
                      Experience worry-free hair removal with our comprehensive safety system. Multiple sensors 
                      work together to prevent over-treatment, automatically adjusting power levels and providing 
                      instant feedback for optimal treatment conditions[1].
                    </p>
                  </div>
                </div>

                {/* How it Works */}
                <div className="bg-[#f9f9f9] rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-6 text-center">How Skin Sensor Technology Works</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[rgb(0,116,224)] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                      <h4 className="font-semibold mb-2">Skin Analysis</h4>
                      <p className="text-sm text-gray-600">Advanced optical sensors scan and analyze your skin tone and hair color</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[rgb(0,116,224)] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                      <h4 className="font-semibold mb-2">Auto-Adjustment</h4>
                      <p className="text-sm text-gray-600">Device automatically sets optimal energy level for your specific characteristics</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[rgb(0,116,224)] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                      <h4 className="font-semibold mb-2">Safe Treatment</h4>
                      <p className="text-sm text-gray-600">Continuous monitoring ensures safe, effective treatment throughout session</p>
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
                        <span className="font-medium">5 Auto-Adjustable</span>
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
                    <h3 className="text-lg font-semibold mb-4">Sensor Technology</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Skin Sensor:</span>
                        <span className="font-medium">Advanced Optical Recognition</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Detection Range:</span>
                        <span className="font-medium">Fitzpatrick I-IV</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Response Time:</span>
                        <span className="font-medium">&lt; 0.1 seconds</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Safety Features:</span>
                        <span className="font-medium">Auto Shut-off + UV Filter</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Calibration:</span>
                        <span className="font-medium">Factory Calibrated</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Package Contents */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">What's Included</h2>
                  <img src="/images/skin-sensor-ipl/package-contents.jpg" alt="Package Contents" className="w-full rounded-xl" />
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        1x Skin Sensor IPL Device
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
                        1x Quick Start Guide
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
                      The skin sensor provides additional safety, but proper use is still essential[1].
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
                  <h3 className="text-xl font-semibold text-green-600">✓ Skin Sensor Safety Features:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      Automatic skin tone detection and classification
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      Real-time energy level adjustment
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      Safety lockout for unsuitable skin types
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      UV filter protection and auto shut-off
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      CE and FDA certified with sensor technology
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Before First Use:</h3>
                <ol className="space-y-2 text-sm">
                  <li>1. Allow the skin sensor to calibrate (device will indicate when ready)</li>
                  <li>2. Perform a patch test on a small area 24 hours before full treatment</li>
                  <li>3. Shave the treatment area (do not wax or pluck)</li>
                  <li>4. Clean and dry your skin thoroughly</li>
                  <li>5. Wear the provided protective glasses</li>
                  <li>6. Let the device automatically set the appropriate intensity</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[rgb(236,67,113)] to-[rgb(125,0,99)] py-16">
          <div className="max-w-2xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
              Ready to Experience Intelligent Hair Removal?
            </h2>
            <p className="text-lg text-white mb-8">
              Join thousands of satisfied customers who trust our advanced skin sensor technology for safe, effective, personalized IPL treatments[1].
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
    </>
  );
};

export default SkinSensorIPL;
