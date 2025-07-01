import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  ShoppingCart,
  Plus,
  Minus,
  Shield,
  Truck,
  Award,
  Check,
  Info,
} from 'lucide-react';

const IceCoolingIPL: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeSubTab, setActiveSubTab] = useState<'specifications' | 'safety' | 'reviews'>('specifications');

  const productImages = [
    '/images/ice-cooling-ipl/front.jpg',
    '/images/ice-cooling-ipl/interface.jpg',
    '/images/ice-cooling-ipl/side.jpg',
    '/images/ice-cooling-ipl/usage.jpg',
    '/images/ice-cooling-ipl/features.jpg',
    '/images/ice-cooling-ipl/package.jpg',
    '/images/ice-cooling-ipl/comparison.jpg',
    '/images/ice-cooling-ipl/accessories.jpg',
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
          <a href="/products" className="hover:text-blue-600">IPL Hair Removal</a>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Ice Cooling IPL Hair Removal Device</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Gallery */}
          <div className="space-y-4">
            <div className="relative bg-[#f9f9f9] rounded-2xl overflow-hidden group">
              <img
                src={productImages[currentImageIndex]}
                alt="Ice Cooling IPL Hair Removal Device"
                className="w-full h-[600px] object-cover"
              />
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
                Ice Cooling IPL Hair Removal Device
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
                <span className="text-sm text-gray-600">4.8/5 (243 reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-blue-600">$449.00</span>
                <span className="text-xl text-gray-500 line-through">$699.00</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-semibold">
                  Save 36%
                </span>
              </div>
              <p className="text-sm text-gray-600">Free shipping • 18-month warranty included</p>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <span className="w-5 h-5 mr-2 text-blue-600">❄️</span>
                  ✨ Luxurious Ice Cooling Technology - Goddess-level Experience ✨
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Experience professional-grade luxurious ice cooling hair removal technology, featuring an <strong>aerospace-grade cooling metal plate</strong> that instantly cools the skin to <strong>5°C ultra-low temperature</strong>. Combined with <strong>20 J/cm² high-energy IPL pulses</strong> and <strong>800,000+ flashes</strong>, it delivers a goddess-like silky skin experience. The luxurious design is crafted for perfection-seeking modern women.
                </p>
              </div>
              <ul className="space-y-3" style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✔️</span>
                  Luxurious goddess design — Aerospace-grade metal texture, showcasing noble taste.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✔️</span>
                  Ice cooling plate technology — Instantly cools skin to 5°C for truly painless experience.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✔️</span>
                  9-level precise energy control — Customizable for sensitive areas and coarse hair.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✔️</span>
                  Suitable for all skin tones — Fitzpatrick I-V certified.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✔️</span>
                  5.0 cm² extra-large treatment window — Fast coverage, 50% higher efficiency.
                </li>
              </ul>
            </div>

            {/* Stock */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-medium">✅ In Stock – Only 18 units left</p>
              <p className="text-sm text-green-600 mt-1">Ships within 24 hours</p>
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
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Buy Now
              </button>
            </div>

            {/* Payment Icons */}
            <div className="space-y-4">
              <img
                src="/images/payment-shipping-icons.png"
                alt="Payment & Shipping"
                className="w-[310px]"
              />
              <img
                src="/images/guarantee-shipping.png"
                alt="Guarantee & Shipping"
                className="w-[310px]"
              />
              <img
                src="/images/featured-in.png"
                alt="Featured In"
                className="w-[350px]"
              />
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
                <span className="font-medium">SKU:</span> ICE-COOLING-004
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Category:</span>
                <a href="/category/ipl-devices" className="text-blue-600 hover:underline ml-1">
                  IPL Hair Removal Devices
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-16">
          <div className="space-y-8">
            {/* Ice Cooling Technology Banner */}
            <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    ❄️ Aerospace-Grade Ice Cooling Metal Plate Technology
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3" />
                      Instantly cools to 5°C on contact for truly painless hair removal.
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3" />
                      9-level precise energy control for all skin and hair types.
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3" />
                      Luxurious goddess design with aerospace-grade metal finish.
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="inline-block bg-white/20 rounded-2xl p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/30 rounded-full flex items-center justify-center">
                      <span className="text-3xl">❄️</span>
                    </div>
                    <p className="text-sm">Luxury Ice Cooling Design</p>
                    <p className="text-xs opacity-80">Goddess-level Experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <img
                  src="/images/ice-cooling-ipl/feature-cooling.jpg"
                  alt="Ice Cooling Technology"
                  className="w-full rounded-xl"
                />
                <h3 className="text-xl font-bold">Ice Cooling Technology</h3>
                <p className="text-gray-700">
                  The aerospace-grade cooling metal plate uses advanced thermal conduction to instantly cool the skin to 5°C, with intelligent temperature control for a truly painless and comfortable experience every session.
                </p>
              </div>
              <div className="space-y-6">
                <img
                  src="/images/ice-cooling-ipl/feature-luxury.jpg"
                  alt="Luxury Design"
                  className="w-full rounded-xl"
                />
                <h3 className="text-xl font-bold">Luxurious Goddess Design</h3>
                <p className="text-gray-700">
                  Crafted with aerospace-grade metal, diamond-cut finish, and a streamlined luxurious silhouette. Every detail reflects the pursuit of perfection for the modern woman.
                </p>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-100">
              <h2 className="text-2xl font-bold mb-6 text-center">
                How Ice Cooling IPL Works
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  ['Cooling Prep', 'Apply the ice cooling metal plate to skin for instant 5°C comfort.'],
                  ['Energy Pulse', 'Select the right level and deliver precise IPL pulses to target follicles.'],
                  ['Silky Enjoyment', 'Use regularly to enjoy goddess-level silky, hair-free skin.'],
                ].map(([title, desc], i) => (
                  <div key={title} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
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
                          ? 'border-blue-500 text-blue-600'
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
                        ['Light Source', 'IPL Intense Pulsed Light'],
                        ['Wavelength', '530-1200 nm'],
                        ['Energy Levels', '9 adjustable'],
                        ['Max Energy', '20 J/cm²'],
                        ['Flash Lifetime', '800,000+'],
                        ['Treatment Window', '5.0 cm²'],
                      ].map(([k, v]) => (
                        <div key={k} className="flex justify-between">
                          <span className="text-gray-600">{k}:</span>
                          <span className="font-medium">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-4">Cooling System</h3>
                    <div className="space-y-3 text-sm">
                      {[
                        ['Cooling Type', 'Contact metal plate'],
                        ['Cooling Temp', '5°C ultra-low'],
                        ['Cooling Response', 'Instant contact cooling'],
                        ['Temp Control', 'Intelligent constant temperature'],
                        ['Power', '110-240V Universal'],
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
                        <h3 className="text-lg font-medium text-yellow-800">
                          Safety Guidelines
                        </h3>
                        <p className="text-yellow-700 mt-1">
                          Always start from the lowest level and let your skin adapt to IPL energy. The ice cooling plate may cause slight cold sensation.
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
                          'White, grey, or red hair',
                          'Active skin disorders',
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
                        ✓ Built-in Safety:
                      </h3>
                      <ul className="space-y-2 text-sm">
                        {[
                          'Skin tone sensor',
                          'UV filtered lens',
                          'Contact cooling safety',
                          'Auto power-off',
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
              {activeSubTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
                    {['Linda', 'Sophia', 'Emma'].map((name, idx) => (
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
                          "This device truly feels goddess-level! The ice cooling plate is super comfortable, 9-level adjustment is very precise, and the hair removal effect is better than salons. The appearance is also super luxurious, I love it!"
                        </p>
                      </div>
                    ))}
                    <div className="mt-6 text-center">
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                        View all 243 reviews
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Package Contents */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Package Contents</h2>
              <img
                src="/images/ice-cooling-ipl/package-contents.jpg"
                alt="Package Contents"
                className="w-full rounded-xl"
              />
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  '1× Ice Cooling IPL Hair Removal Device',
                  '1× Power Adapter',
                  '1× Protective Glasses',
                  '1× User Manual',
                  '1× Cleaning Cloth',
                  '1× Luxury Storage Case',
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
      <section className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 py-16">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
            Ready for Goddess-Level Ice Cooling Hair Removal?
          </h2>
          <p className="text-lg text-white mb-8">
            Join thousands of women who choose Ice Cooling IPL for a luxurious, painless hair removal experience.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full transition hover:opacity-90 shadow-lg">
            Order Now – Free Shipping
          </button>
        </div>
      </section>
    </div>
  );
};

export default IceCoolingIPL;
