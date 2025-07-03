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
} from 'lucide-react';

const EmeraldIPL: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeSubTab, setActiveSubTab] = useState<'specifications' | 'safety' | 'reviews'>('specifications');

  /* ========= 1. 资源配置 ========= */
  const productImages = [
    'https://i.postimg.cc/nVqpXhVB/EMERALD-IPL-4.webp',
    'https://i.postimg.cc/pddL8bcx/EMERALD-IPL-3.webp',
    'https://i.postimg.cc/hGhKv8ht/EMERALD-IPL-FRONT.webp',
    'https://i.postimg.cc/cJj0nK8M/EMERALD-IPL-SUITE-SKIN-TONE.webp',
  ];
  const thumbnails = productImages;

  /* ========= 2. 事件处理 ========= */
  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  const increaseQuantity = () => quantity < 10 && setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  /* ========= 3. 组件渲染 ========= */
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4 mt-4 uppercase">
          <a href="/" className="hover:text-emerald-600">Home</a>
          <span className="mx-2">/</span>
          <a href="/ipl-hair-removal" className="hover:text-emerald-600">IPL Hair Removal</a>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Emerald IPL Hair Removal Device</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-[#f9f9f9] rounded-2xl overflow-hidden group">
              <img
                src={productImages[currentImageIndex]}
                alt="Emerald IPL Hair Removal Device"
                className="w-full h-[800px] object-cover"
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
                      index === currentImageIndex ? 'bg-emerald-500' : 'bg-white/50'
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
                    index === currentImageIndex ? 'border-emerald-500' : 'border-gray-200'
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
                Emerald IPL Hair Removal Device
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
                <span className="text-sm text-gray-600">4.9/5 (186 reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-emerald-600">$269.00</span>
                <span className="text-xl text-gray-500 line-through">$399.00</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-semibold">
                  Save 33%
                </span>
              </div>
              <p className="text-sm text-gray-600">Free shipping • 12-month warranty included</p>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <div className="bg-[#f9f9f9] rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <span className="w-5 h-5 mr-2 text-emerald-600">💎</span>
                  ✨ Emerald Precision IPL Technology ✨
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Experience professional-grade hair removal at home with our{" "}
                  <strong>Emerald IPL Device</strong> featuring advanced{" "}
                  <strong>Intense Pulsed Light technology</strong> with
                  15 J/cm² of energy and <strong>600,000+ flashes</strong> for
                  long-lasting smooth skin. The precision-engineered system
                  delivers consistent results across all treatment areas.
                </p>
              </div>
              <ul className="space-y-3" style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔️</span>
                  Professional results — up to 94% hair reduction after 12 weeks.
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔️</span>
                  5-level manual intensity control for personalized treatments.
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔️</span>
                  Safe for all skin tones within Fitzpatrick I-V range.
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔️</span>
                  Large 4.2 cm² treatment window for faster coverage.
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔️</span>
                  Ergonomic design with built-in safety sensors.
                </li>
              </ul>
            </div>

            {/* Stock */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-medium">✅ In Stock – 28 units left</p>
              <p className="text-sm text-green-600 mt-1">Ships within 24 h</p>
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
                </div>
              </div>
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center">
                GET A QUOTE NOW
              </button>
            </div>


            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
                <p className="text-xs text-gray-600">12-Month<br />Warranty</p>
              </div>
              <div className="text-center">
                <Truck className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
                <p className="text-xs text-gray-600">Free<br />Shipping</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
                <p className="text-xs text-gray-600">FDA<br />Cleared</p>
              </div>
            </div>

            {/* Product Meta */}
            <div className="pt-6 border-t border-gray-200 space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">SKU:</span> EMERALD-IPL-003
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Category:</span>
                <a href="/category/ipl-devices" className="text-emerald-600 hover:underline ml-1">
                  IPL Hair Removal
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-16">
          <div className="space-y-8">
            {/* Emerald Technology Banner */}
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-8 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    💎 Emerald Precision IPL Technology
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3" />
                      5-level manual intensity control for optimal customization.
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3" />
                      Professional-grade 15 J/cm² energy output for effective results.
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3" />
                      Advanced skin tone sensor ensures safe treatment delivery.
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="inline-block bg-white/20 rounded-2xl p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/30 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💎</span>
                    </div>
                    <p className="text-sm">Premium Emerald Design</p>
                    <p className="text-xs opacity-80">Professional Quality</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <img
                  src="/images/emerald-ipl/feature-precision.jpg"
                  alt="Precision Technology"
                  className="w-full rounded-xl"
                />
                <h3 className="text-xl font-bold">Precision Control</h3>
                <p className="text-gray-700">
                  Manual 5-level intensity adjustment allows you to customize
                  treatment power based on your skin sensitivity and hair type
                  for optimal results and comfort.
                </p>
              </div>
              <div className="space-y-6">
                <img
                  src="/images/emerald-ipl/feature-coverage.jpg"
                  alt="Large Treatment Window"
                  className="w-full rounded-xl"
                />
                <h3 className="text-xl font-bold">Fast Coverage</h3>
                <p className="text-gray-700">
                  The large 4.2 cm² treatment window covers more area per flash,
                  reducing treatment time by up to 40% compared to smaller devices
                  while maintaining consistent energy distribution.
                </p>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-[#f9f9f9] rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">
                How Emerald IPL Works
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  ['Prepare & Set', 'Shave treatment area and select appropriate intensity level'],
                  ['Target & Flash', 'Place device on skin and trigger manual flash pulses'],
                  ['Maintain & Enjoy', 'Follow treatment schedule for long-lasting smooth results'],
                ].map(([title, desc], i) => (
                  <div key={title} className="text-center">
                    <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
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
              <h2 className="text-2xl font-bold text-center">Technical Details</h2>
              {/* Tab Nav */}
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8 justify-center">
                  {['specifications', 'safety', 'reviews'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveSubTab(tab as any)}
                      className={`py-2 px-1 border-b-2 font-medium text-sm ${
                        activeSubTab === tab
                          ? 'border-emerald-500 text-emerald-600'
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

              {/* Specs */}
              {activeSubTab === 'specifications' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-4">Device Specs</h3>
                    <div className="space-y-3 text-sm">
                      {[
                        ['Light Source', 'IPL Xenon Lamp'],
                        ['Wavelength', '550-1200 nm'],
                        ['Energy Levels', '5 Adjustable'],
                        ['Max Energy', '15 J/cm²'],
                        ['Flash Count', '600,000+'],
                        ['Spot Size', '4.2 cm²'],
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
                        ['Control Type', 'Manual 5-Level'],
                        ['Flash Mode', 'Single Pulse'],
                        ['Sensors', 'Skin-tone Detection'],
                        ['Safety Lock', 'Contact Required'],
                        ['Power Source', '110-240V AC'],
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

              {/* Safety */}
              {activeSubTab === 'safety' && (
                <div className="space-y-6">
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <div className="flex">
                      <Info className="w-5 h-5 text-yellow-400 mr-3 mt-0.5" />
                      <div>
                        <h3 className="text-lg font-medium text-yellow-800">
                          Important Safety Guidelines
                        </h3>
                        <p className="text-yellow-700 mt-1">
                          Always start with the lowest intensity level and gradually
                          increase as your skin adapts to treatment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-red-600">
                        ⚠️ Do Not Use If:
                      </h3>
                      <ul className="space-y-2 text-sm">
                        {[
                          'Pregnant or breastfeeding',
                          'Fitzpatrick VI skin type',
                          'White, grey or red hair',
                          'Active skin conditions',
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
                      <h3 className="text-xl font-semibold text-green-600">
                        ✓ Built-In Safety:
                      </h3>
                      <ul className="space-y-2 text-sm">
                        {[
                          'Skin tone sensor protection',
                          'UV filtered lens system',
                          'Contact detection required',
                          'Automatic shut-off timer',
                          'CE & FDA certified',
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

              {/* Reviews */}
              {activeSubTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
                    {['Maria P.', 'Jessica L.', 'Amanda R.'].map((name, idx) => (
                      <div
                        key={name}
                        className={`border-b border-gray-100 pb-4 ${idx === 2 ? 'border-none' : ''
                          }`}
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
                          "Love the simplicity and effectiveness of this device.
                          The 5-level control gives me perfect customization for
                          different body areas. Excellent results!"
                        </p>
                      </div>
                    ))}
                    <div className="mt-6 text-center">
                      <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                        View All 186 Reviews
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Package Contents */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">What's Included</h2>
              <img
                src="/images/emerald-ipl/package-contents.jpg"
                alt="Package Contents"
                className="w-full rounded-xl"
              />
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  '1× Emerald IPL Hair Removal Device',
                  '1× Power Adapter',
                  '1× Protective Glasses',
                  '1× User Manual',
                  '1× Cleaning Cloth',
                  '1× Storage Case',
                ].map((item) => (
                  <div key={item} className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-emerald-500 to-emerald-600 py-16">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
            Ready for Professional Results at Home?
          </h2>
          <p className="text-lg text-white mb-8">
            Join thousands who've chosen Emerald IPL for effective, convenient hair removal.
          </p>
          <button className="bg-white text-emerald-600 font-semibold px-8 py-3 rounded-full transition hover:opacity-90">
            Order Now – Free Shipping
          </button>
        </div>
      </section>
    </div>
  );
};

export default EmeraldIPL;
