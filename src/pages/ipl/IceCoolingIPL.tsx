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

  /* ========= 1. 资源配置 ========= */
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
          <a href="/" className="hover:text-blue-600">Home</a>
          <span className="mx-2">/</span>
          <a href="/products" className="hover:text-blue-600">IPL Hair Removal</a>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Ice Cooling IPL Hair Removal Device</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-[#f9f9f9] rounded-2xl overflow-hidden group">
              <img
                src={productImages[currentImageIndex]}
                alt="Ice Cooling IPL Hair Removal Device"
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
                  ✨ 奢华冰爽冷却技术 - 女神级享受 ✨
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  体验专业级的奢华冰爽脱毛技术，采用{" "}
                  <strong>航空级冷却金属板</strong>，接触皮肤瞬间降温至{" "}
                  <strong>5°C超低温</strong>，配合{" "}
                  <strong>20 J/cm²高能量IPL脉冲</strong>和{" "}
                  <strong>800,000+闪光寿命</strong>，
                  打造女神般的丝滑肌肤体验。奢华设计，专为追求完美的现代女性而生。
                </p>
              </div>
              <ul className="space-y-3" style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✔️</span>
                  奢华女神设计 — 航空级金属质感，彰显高贵品味。
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✔️</span>
                  冰爽冷却板技术 — 接触皮肤瞬间降温至5°C，真正无痛体验。
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✔️</span>
                  9档精准能量控制 — 从敏感区到粗硬毛发，精准定制。
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✔️</span>
                  适用所有肤色 — Fitzpatrick I-V安全认证。
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✔️</span>
                  5.0 cm²超大治疗窗口 — 快速覆盖，效率提升50%。
                </li>
              </ul>
            </div>

            {/* Stock */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-medium">✅ 现货充足 – 仅剩18台</p>
              <p className="text-sm text-green-600 mt-1">24小时内发货</p>
            </div>

            {/* Quantity & Cart */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  数量
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
                  <span className="text-sm text-gray-600">单次最多10件</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg">
                <ShoppingCart className="w-5 h-5 mr-2" />
                立即购买
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
                <p className="text-xs text-gray-600">18个月<br />质保</p>
              </div>
              <div className="text-center">
                <Truck className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="text-xs text-gray-600">全国<br />包邮</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="text-xs text-gray-600">FDA<br />认证</p>
              </div>
            </div>

            {/* Product Meta */}
            <div className="pt-6 border-t border-gray-200 space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">产品编号:</span> ICE-COOLING-004
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">分类:</span>
                <a href="/category/ipl-devices" className="text-blue-600 hover:underline ml-1">
                  IPL脱毛设备
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
                    ❄️ 航空级冰爽冷却金属板技术
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3" />
                      瞬间接触冷却至5°C，真正实现无痛脱毛体验。
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3" />
                      9档能量精准控制，从敏感区到粗硬毛发全覆盖。
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3" />
                      奢华女神设计，航空级金属质感彰显高贵品味。
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="inline-block bg-white/20 rounded-2xl p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/30 rounded-full flex items-center justify-center">
                      <span className="text-3xl">❄️</span>
                    </div>
                    <p className="text-sm">奢华冰爽设计</p>
                    <p className="text-xs opacity-80">女神级享受</p>
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
                <h3 className="text-xl font-bold">冰爽冷却技术</h3>
                <p className="text-gray-700">
                  航空级冷却金属板采用先进的导热技术，接触皮肤瞬间降温至5°C超低温，
                  配合智能温度控制系统，确保每次治疗都能享受冰爽舒适的无痛体验。
                </p>
              </div>
              <div className="space-y-6">
                <img
                  src="/images/ice-cooling-ipl/feature-luxury.jpg"
                  alt="Luxury Design"
                  className="w-full rounded-xl"
                />
                <h3 className="text-xl font-bold">奢华女神设计</h3>
                <p className="text-gray-700">
                  采用航空级金属材质，钻石切割工艺，流线型奢华设计。
                  每一个细节都体现着对完美的追求，专为追求高品质生活的现代女性打造。
                </p>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-100">
              <h2 className="text-2xl font-bold mb-6 text-center">
                冰爽IPL脱毛原理
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  ['冷却准备', '将冰爽金属板贴合肌肤，瞬间降温至5°C舒适温度'],
                  ['能量脉冲', '选择适合档位，发射精准IPL能量脉冲破坏毛囊'],
                  ['丝滑享受', '定期使用享受女神般丝滑肌肤，持久无毛状态'],
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
              <h2 className="text-2xl font-bold text-center">技术参数</h2>
              {/* Tab Nav */}
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
                        ? '技术参数'
                        : tab === 'safety'
                        ? '安全须知'
                        : '用户评价'}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Specs */}
              {activeSubTab === 'specifications' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-4">设备参数</h3>
                    <div className="space-y-3 text-sm">
                      {[
                        ['光源类型', 'IPL强脉冲光'],
                        ['波长范围', '530-1200 nm'],
                        ['能量档位', '9档精准调节'],
                        ['最大能量', '20 J/cm²'],
                        ['闪光寿命', '800,000+'],
                        ['治疗窗口', '5.0 cm²'],
                      ].map(([k, v]) => (
                        <div key={k} className="flex justify-between">
                          <span className="text-gray-600">{k}:</span>
                          <span className="font-medium">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-4">冷却系统</h3>
                    <div className="space-y-3 text-sm">
                      {[
                        ['冷却方式', '接触式金属板'],
                        ['冷却温度', '5°C超低温'],
                        ['冷却响应', '瞬间接触冷却'],
                        ['温控系统', '智能恒温控制'],
                        ['电源规格', '110-240V 通用'],
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
                          安全使用须知
                        </h3>
                        <p className="text-yellow-700 mt-1">
                          请从最低档位开始使用，让肌肤逐步适应IPL能量。
                          冰爽冷却板可能造成轻微的冷感刺激。
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-red-600">
                        ⚠️ 禁用人群:
                      </h3>
                      <ul className="space-y-2 text-sm">
                        {[
                          '孕期及哺乳期女性',
                          'Fitzpatrick VI深色肌肤',
                          '白色、灰色或红色毛发',
                          '活跃性皮肤疾病患者',
                          '18岁以下未成年人',
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
                        ✓ 内置安全保护:
                      </h3>
                      <ul className="space-y-2 text-sm">
                        {[
                          '肤色智能识别系统',
                          'UV滤光镜头保护',
                          '接触式冷却安全',
                          '自动断电保护',
                          'CE & FDA双重认证',
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
                    <h3 className="text-lg font-semibold mb-4">用户评价</h3>
                    {['Linda 女士', '小雅', '美美'].map((name, idx) => (
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
                          <span className="ml-2 text-xs text-gray-500">已验证购买</span>
                        </div>
                        <p className="text-sm text-gray-700">
                          "这款设备真的是女神级的享受！冰爽的金属板贴在皮肤上超级舒服，
                          9档调节非常精准，脱毛效果比美容院还好。外观也超级奢华，爱了！"
                        </p>
                      </div>
                    ))}
                    <div className="mt-6 text-center">
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                        查看全部243条评价
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Package Contents */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">包装清单</h2>
              <img
                src="/images/ice-cooling-ipl/package-contents.jpg"
                alt="Package Contents"
                className="w-full rounded-xl"
              />
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  '1× 冰爽IPL脱毛仪主机',
                  '1× 电源适配器',
                  '1× 护目镜',
                  '1× 中文说明书',
                  '1× 清洁布',
                  '1× 奢华收纳盒',
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
            准备体验女神级冰爽脱毛？
          </h2>
          <p className="text-lg text-white mb-8">
            加入数千位选择冰爽IPL的精致女性，享受奢华无痛的脱毛体验。
          </p>
          <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full transition hover:opacity-90 shadow-lg">
            立即下单 - 全国包邮
          </button>
        </div>
      </section>
    </div>
  );
};

export default IceCoolingIPL;
