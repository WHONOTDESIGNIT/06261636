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
  Snowflake,
  Check,
  Info,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import SEOTags from '../../components/SEO/SEOTags';
import ProductSchema from '../../components/SEO/ProductSchema';

const IceFeelingIPL: React.FC = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeSubTab, setActiveSubTab] = useState<'specifications' | 'safety' | 'reviews'>('specifications');

  /* ========= 1. 资源配置 ========= */
  const productImages = [
    'https://i.postimg.cc/wMrKRZrf/sapphire-IPL.webp',
    'https://i.postimg.cc/76BdjjqH/sapphire-ipl-black.webp',
    'https://i.postimg.cc/tRM8k0rD/sapphire-ipl-black-2.webp',
    'https://i.postimg.cc/dV8XJhJS/sapphire-ipl-black-3.webp',
    'https://i.postimg.cc/HLzh7Fcw/SAPPHIRE-IPL-PURPLE.webp',
    'https://i.postimg.cc/HWrTd9RZ/pink.webp',
    'https://i.postimg.cc/SQHkszpy/PINK-010-IPL-hair-removal-1.webp',
    'https://i.postimg.cc/htBn8Wj6/white-010-1.webp',
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
    <>
      <SEOTags 
        title="Ice Feeling IPL Device | Painless Cooling Hair Removal"
        description="Ice feeling IPL device with advanced cooling technology for painless hair removal. Comfortable, safe, and effective for all skin types."
        keywords="ice feeling IPL, cooling IPL, painless hair removal, advanced cooling, comfortable IPL, all skin types"
      />
      <ProductSchema
        name="Ice Feeling IPL Device - Sapphire Cooling Hair Removal"
        description="Advanced IPL hair removal device with sapphire cooling technology that maintains skin temperature at 5°C for painless treatment. Features dual-lamp xenon technology, 5 energy levels, and 999,999+ flashes for permanent hair reduction."
        image={productImages}
        brand="SapphireIPL"
        model="ICE-SAPPHIRE-002"
        sku="ICE-SAPPHIRE-002"
        price={149.00}
        priceCurrency="USD"
        availability="InStock"
        condition="NewCondition"
        category="IPL Hair Removal Device"
        manufacturer="SapphireIPL Technologies"
        warranty="12-month warranty included"
        features={[
          "Sapphire cooling plate maintains 5°C temperature",
          "IPL Xenon Dual-Lamp technology",
          "5 adjustable energy levels (12-18 J/cm²)",
          "999,999+ flash count",
          "0.35s ultra-fast flash speed",
          "Auto and manual flash modes",
          "Skin-tone sensor for safety",
          "4.0 cm² spot size",
          "FDA cleared and CE certified",
          "Suitable for all skin types"
        ]}
        aggregateRating={{
          ratingValue: 5.0,
          reviewCount: 212,
          bestRating: 5,
          worstRating: 1
        }}
      />
      <div className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-4 mt-4 uppercase">
            <a href="/" className="hover:text-[rgb(0,116,224)]">{t('common.home')}</a>
            <span className="mx-2">/</span>
            <a href="/ipl-hair-removal" className="hover:text-[rgb(0,116,224)]">{t('iplHairRemoval')}</a>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{t('ipl.iceFeeling.title')}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Product Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative bg-[#f9f9f9] rounded-2xl overflow-hidden group">
                <img
                  src={productImages[currentImageIndex]}
                  alt={t('ipl.iceFeeling.title')}
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
                  {t('ipl.iceFeeling.title')}
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
                  <span className="text-sm text-gray-600">5.0/5 (212 reviews)</span>
                </div>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-[rgb(0,116,224)]">$149.00</span>
                  <span className="text-xl text-gray-500 line-through">$299.00</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-semibold">
                    Save 30%
                  </span>
                </div>
                <p className="text-sm text-gray-600">Free shipping • 12-month warranty included</p>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <div className="bg-[#f9f9f9] rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <span className="w-5 h-5 mr-2 text-[rgb(0,116,224)]">❄️</span>
                    {t('ipl.iceFeeling.features.cooling')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {t('ipl.iceFeeling.desc')}
                  </p>
                </div>
                <ul className="space-y-3" style={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✔️</span>
                    {t('ipl.iceFeeling.features.longSmooth')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✔️</span>
                    {t('ipl.iceFeeling.features.cooling')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✔️</span>
                    {t('ipl.iceFeeling.features.energyLevels')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✔️</span>
                    {t('ipl.iceFeeling.features.flashModes')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✔️</span>
                    {t('ipl.iceFeeling.features.multiUse')}
                  </li>
                </ul>
              </div>

              {/* Stock */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">✅ In Stock </p>
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
                <button className="w-full bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center">
                
                 GET A QUOTE NOW
                </button>
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
                  <span className="font-medium">SKU:</span> ICE-SAPPHIRE-002
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

          {/* Tabs Section */}
          <div className="mb-16">
            <div className="space-y-8">
              {/* Cooling Banner */}
              <div className="bg-gradient-to-r from-[rgb(0,140,255)] to-[rgb(0,96,192)] rounded-2xl p-8 text-white">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      💎 Sapphire Ice Plate Keeps Skin at 5 °C
                    </h2>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3" />
                        Continuous cooling enables pain-free sessions even on
                        sensitive zones.
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3" />
                        Higher energy pulses deliver permanent results 3× faster.
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3" />
                        Built-in sensor adjusts intensity for safe treatment.
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="inline-block bg-white/20 rounded-2xl p-6">
                      <Snowflake className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-sm font-semibold">Sapphire bring ICE FEELING!</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <img
                    src="/images/ice-feeling-ipl/feature-cooling.jpg"
                    alt="Ice Cooling Head"
                    className="w-full rounded-xl"
                  />
                  <h3 className="text-xl font-bold">Ice-Cool Precision</h3>
                  <p className="text-gray-700">
                    The sapphire window cools on contact, reducing surface
                    temperature from 158 °F to 41 °F to numb nerve endings.
                  </p>
                </div>
                <div className="space-y-6">
                  <img
                    src="/images/ice-feeling-ipl/feature-flash.jpg"
                    alt="Fast Flash Speed"
                    className="w-full rounded-xl"
                  />
                  <h3 className="text-xl font-bold">0.35 s Ultra-Fast Flashes</h3>
                  <p className="text-gray-700">
                    Treat legs or arms in under 8 minutes thanks to rapid
                    xenon tubes and 0.35 s reload time.
                  </p>
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-[#f9f9f9] rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">
                  How Sapphire Ice Feeling IPL Works
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    ['Connect & Cool', 'Place the chilled sapphire head flat on shaved skin'],
                    ['Pulse & Glide', 'Auto-flash mode lets you glide smoothly across large areas'],
                    ['Maintain & Glow', 'Use weekly for 8 weeks, then monthly to stay hair-free'],
                  ].map(([title, desc], i) => (
                    <div key={title} className="text-center">
                      <div className="w-16 h-16 bg-[rgb(0,116,224)] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
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
                            ? 'border-[rgb(0,116,224)] text-[rgb(0,116,224)]'
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
                          ['Light Source', 'IPL Xenon Dual-Lamp'],
                          ['Wavelength', '530-1200 nm'],
                          ['Energy Levels', '5 Adjustable'],
                          ['Cooling Plate', 'Sapphire 5 °C'],
                          ['Flash Count', '999 999+'],
                          ['Spot Size', '4.0 cm²'],
                        ].map(([k, v]) => (
                          <div key={k} className="flex justify-between">
                            <span className="text-gray-600">{k}:</span>
                            <span className="font-medium">{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-4">Smart Features</h3>
                      <div className="space-y-3 text-sm">
                        {[
                          ['Cooling Range', '41 °F / 5 °C'],
                          ['Intensity', '12-18 J/cm²'],
                          ['Modes', 'Auto / Manual'],
                          ['Sensors', 'Skin-tone + Contact'],
                          ['Adapter', '12 V / 3 A'],
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
                            Follow all instructions to avoid skin irritation or
                            burns[12][19].
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
                            'Fitzpatrick VI skin',
                            'White, grey or red hair',
                            'Active skin cancer',
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
                          ✓ Built-In Protections:
                        </h3>
                        <ul className="space-y-2 text-sm">
                          {[
                            'Automatic skin-tone detection',
                            'UV filter coated lens',
                            'Contact cooling',
                            'Auto shut-off after 10 min',
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
                      {['Lisa K.', 'Anna S.', 'Grace T.'].map((name, idx) => (
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
                            "The cooling plate makes every flash totally painless.
                            Hair growth slowed dramatically after 4 sessions."[37][24]
                          </p>
                        </div>
                      ))}
                      <div className="mt-6 text-center">
                        <button className="text-[rgb(0,116,224)] hover:text-[rgb(0,89,179)] font-medium text-sm">
                          View All 212 Reviews
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
                  src="/images/ice-feeling-ipl/package-contents.jpg"
                  alt="Package Contents"
                  className="w-full rounded-xl"
                />
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    '1× Sapphire Ice Feeling IPL Device',
                    '1× Power Adapter',
                    '1× Protective Glasses',
                    '1× User Manual',
                    '1× Razor',
                    '1× Storage Pouch',
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
        <section className="bg-gradient-to-r from-[rgb(0,160,240)] to-[rgb(0,116,224)] py-16">
          <div className="max-w-2xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
              Ready for Ice-Cool Hair Removal?
            </h2>
            <p className="text-lg text-white mb-8">
              Join 200 000+ users enjoying sapphire cooling comfort at home.
            </p>
            <button className="bg-white text-[rgb(0,116,224)] font-semibold px-8 py-3 rounded-full transition hover:opacity-90">
              Order Now – Free Shipping
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default IceFeelingIPL;