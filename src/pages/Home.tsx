import { useState } from "react";
import { Flame, Palette, BadgeCheck, Package, CheckCircle, ChevronDown, Settings, Send, ThumbsUp } from "lucide-react";
import ContactFormA from '../components/Forms/ContactFormA';
import Silk from './Silk';
import { iplDevices } from '../data/products';

const heroBg = "bg-gradient-to-br from-blue-700 via-indigo-500 to-purple-600";
const qaTheme = "bg-blue-700 text-white";
const qaHover = "bg-white text-blue-700";
const qaBadge = "bg-white text-blue-700";
const qaBadgeHover = "bg-blue-700 text-white";

const unlimitedOptions = [
  {
    label: "Color Customization",
    icon: <Palette className="w-6 h-6" />,
    content: "Choose from unlimited color options to match your brand identity."
  },
  {
    label: "Logo Printing",
    icon: <BadgeCheck className="w-6 h-6" />,
    content: "Add your logo for a fully branded product experience."
  },
  {
    label: "Function Customization",
    icon: <Flame className="w-6 h-6" />,
    content: "Customize features and functions to meet your market needs."
  },
  {
    label: "Packaging Design",
    icon: <Package className="w-6 h-6" />,
    content: "Premium packaging for retail, e-commerce, or gifting."
  },
  {
    label: "Certification Support",
    icon: <CheckCircle className="w-6 h-6" />,
    content: "Fully support for global certifications."
  },
];

const processSteps = [
  { img: "/step1.jpg", title: "Consultation", desc: "Discuss your brand vision and requirements." },
  { img: "/step2.jpg", title: "Design & Prototyping", desc: "Get custom designs and functional prototypes." },
  { img: "/step3.jpg", title: "Sample Confirmation", desc: "Approve samples before mass production." },
  { img: "/step4.jpg", title: "Mass Production", desc: "Efficient and high-quality manufacturing." },
  { img: "/step5.jpg", title: "Quality Inspection", desc: "Strict QC for every batch." },
  { img: "/step6.jpg", title: "Certification", desc: "Support for FDA, CE, and more." },
  { img: "/step7.jpg", title: "Global Shipping", desc: "Worldwide delivery with flexible logistics." },
  { img: "/step8.jpg", title: "After-Sales Service", desc: "Ongoing support for your business." },
];

const testimonials = [
  "“iShine helped us launch our IPL brand in record time. The quality and service are impressive!”",
  "“The customization options are endless. Our clients love the unique packaging and features.”",
  "“Professional team, fast response, and reliable delivery. Highly recommended for OEM/ODM.”",
  "“We expanded to new markets thanks to iShine's certification and compliance support.”",
  "“The after-sales service is excellent. Any issues are resolved quickly and professionally.”",
  "“Our brand repuation improved significantly with iShine's design and manufacturing expertise.”"
];

const qaList = [
  {
    q: "What is IPL and how does it work?",
    a: (
      <span>
        IPL (Intense Pulsed Light) uses broad-spectrum light to target hair follicles, reducing hair growth safely and effectively.
      </span>
    ),
  },
  {
    q: "Can I customize the device functions?",
    a: "Yes, we offer full customization of features, colors, packaging, and more to fit your brand needs."
  },
  {
    q: "What certifications do you support?",
    a: "We support FDA, CE, RoHS, and other global certifications to ensure compliance in your target markets."
  },
  {
    q: "How long is the production lead time?",
    a: "Typical lead time is 25-35 days after sample approval, depending on order size and customization."
  },
  {
    q: "Do you provide after-sales support?",
    a: "Yes, we offer comprehensive after-sales service including technical support and warranty."
  },
  {
    q: "Can you ship globally?",
    a: (
      <div>
        <p style={{ marginBottom: '157px' }}>Absolutely. We offer reliable worldwide shipping to support your business wherever you are.</p>
        <ul className="list-disc pl-5 my-2">
          <li>
            <b>Global Logistics Coverage:</b> Yes, we provide international shipping solutions with tracking codes for every order.
          </li>
          <li>
            <b>Transparent Shipping Costs:</b> Shipping fees are calculated based on your order's weight and quantity.
          </li>
          <li>Click on the <a href="/shipping-cost" className="text-blue-700 font-bold underline underline-offset-2 hover:text-blue-800 transition">Check Shipping Cost</a> button.</li>
        </ul>
        <p className="mt-2"><b>How to Check Your Shipping Cost:</b></p>
        <ol className="list-decimal pl-5 my-2">
          <li>Enter your order details (weight/quantity).</li>
          <li>Instantly view the corresponding shipping rates and options.</li>
          <li>Track your shipment anytime with the provided logistics code after dispatch.</li>
        </ol>
        <p className="mt-2">Need help? Our team is here to assist you with any shipping or logistics questions.</p>
      </div>
    ),
  },
];

const galleryImages = [
  '/gallery1.jpg', '/gallery2.jpg', '/gallery3.jpg', '/gallery4.jpg',
  '/gallery5.jpg', '/gallery6.jpg', '/gallery7.jpg', '/gallery8.jpg'
];

const processIcons = [
  Send,         // Consultation
  Palette,      // Design & Prototyping
  BadgeCheck,   // Sample Confirmation
  Settings,     // Mass Production
  CheckCircle,  // Quality Inspection
  BadgeCheck,   // Certification
  Package,      // Global Shipping
  ThumbsUp      // After-Sales Service
];

export default function HomePage() {
  const [optionIdx, setOptionIdx] = useState(0);
  const [qaOpen, setQaOpen] = useState<number | null>(null);
  const [testimonialPage, setTestimonialPage] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);

  return (
    <div className="font-inter bg-[#F8FAFC] text-[#22223B]">
      {/* Hero Section */}
      <section className={`${heroBg} min-h-[66vh] flex flex-col justify-center items-center text-white relative overflow-hidden`}>
        {/* Silk Canvas 背景 */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Silk speed={5} scale={1} color="#7B7481" noiseIntensity={1.5} rotation={0} />
        </div>
        {/* 内容层 */}
        <div className="max-w-4xl text-center z-10 relative pt-14">
          <h1 className="text-2xl md:text-6xl font-bold mb-4 drop-shadow-lg">Custom IPL Hair Removal Devices for Cosmetics Brands</h1>
          <p className="text-lg md:text-2xl mb-8 font-medium drop-shadow mt-8">You design it, we build it and box it.</p>
          <a href="#contact" className="inline-block px-8 py-3 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:bg-blue-100 transition">Get a Free Quote</a>
        </div>
      </section>

      {/* Brand Empowerment / USP */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-r from-blue-100 via-white to-purple-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* 容器1：主标题+副标题+按钮 */}
          <div className="flex flex-col items-start justify-center h-full">
            <h2 className="text-3xl font-bold mb-4 text-blue-700">About iShine</h2>
            <p className="text-lg mb-6 text-blue-700">One-stop IPL solutions.</p>
            <a href="#contact" className="inline-block px-6 py-2 bg-blue-700 text-white font-semibold rounded-full shadow hover:bg-blue-800 transition">Read More</a>
          </div>
          {/* 容器2：富文本1 */}
          <div className="text-lg">
            iShine Tech Co., Limited, is one-stop supplier for{" "}
            <a href="/service-support/manufacturing" className="text-blue-700 underline underline-offset-2 decoration-blue-700 hover:text-blue-800 hover:decoration-blue-800 transition">
              IPL hair removal devices manufacturing
            </a>{" "}and{" "}
            <a href="/solutions/brand-customization" className="text-blue-700 underline underline-offset-2 decoration-blue-700 hover:text-blue-800 hover:decoration-blue-800 transition">
              customization
            </a>. Help you design it, build it and box it. From idea to market.
          </div>
          {/* 容器3：富文本2 */}
          <div className="text-lg">
            We have the capability for Custom ice cooling IPL, Smart APP-connected IPL device, Skin Sensor IPL device. iShine provide solutions that best fit for your brand identity.
          </div>
        </div>
      </section>

      {/* 视频+富文本 Section */}
      <section className="py-16 px-4 md:px-0">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* 左侧：YouTube 视频 */}
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/A4qIxsmfXqo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          {/* 右侧：富文本 */}
          <div>
            <h2 className="text-4xl font-bold text-blue-700 mb-4">WHAT WE DO</h2>
            <div className="w-16 h-1 mb-4" style={{ background: 'rgb(239,187,32)' }}></div>
            <p className="text-lg text-gray-700">
            iShine team work with the different industries brands owner, products development managers, products managers, category sourcing manager, retail compliance specialist, products designers together and offer them OEM ODM solution from molded IPL devices design, prototyping to IPL contract manufacturing, printing, package to ensure their IPL projects success.
            </p>
          </div>
        </div>
      </section>

      {/* 黄色细线+正文 */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-16 h-1 mb-4" style={{ background: 'rgb(239,187,32)' }}></div>
        <p className="text-lg text-gray-700 max-w-3xl text-center">
          Our IPL devices are engineered for performance, safety, and design flexibility. Whether you need custom features, global certifications, or unique packaging, iShine delivers solutions that help your brand stand out in the beauty industry.
        </p>
      </div>

      {/* 图册 Section */}
      <section className="py-16 px-4 md:px-0 flex justify-center">
        <div
          className="relative flex items-center w-full max-w-5xl"
          style={{ height: 400 }}
        >
          {/* 左侧角标 */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-60 rounded-full w-12 h-12 flex items-center justify-center text-white hover:bg-opacity-80 transition"
            onClick={() => setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
            aria-label="Previous"
            style={{ left: 0 }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          {/* 左侧缩略图 */}
          <img
            src={galleryImages[(galleryIndex - 1 + galleryImages.length) % galleryImages.length]}
            alt="prev"
            className="rounded-xl opacity-70"
            style={{ width: '40%', height: '100%', objectFit: 'cover', marginRight: 10 }}
          />

          {/* 主图 */}
          <img
            src={galleryImages[galleryIndex]}
            alt="main"
            className="rounded-2xl z-10"
            style={{ width: '20%', height: '100%', objectFit: 'cover' }}
          />

          {/* 右侧缩略图 */}
          <img
            src={galleryImages[(galleryIndex + 1) % galleryImages.length]}
            alt="next"
            className="rounded-xl opacity-70"
            style={{ width: '40%', height: '100%', objectFit: 'cover', marginLeft: 10 }}
          />

          {/* 右侧角标 */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-60 rounded-full w-12 h-12 flex items-center justify-center text-white hover:bg-opacity-80 transition"
            onClick={() => setGalleryIndex((prev) => (prev + 1) % galleryImages.length)}
            aria-label="Next"
            style={{ right: 0 }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>

          {/* 小圆点指示器 */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-20">
            {galleryImages.map((_, idx) => (
              <span
                key={idx}
                className={`block rounded-full transition-colors duration-200 cursor-pointer`}
                style={{
                  width: 8,
                  height: 8,
                  background: galleryIndex === idx ? 'rgb(64,64,64)' : 'rgb(191,191,191)',
                  border: 'none',
                  boxShadow: galleryIndex === idx ? '0 0 0 2px #222' : 'none',
                }}
                onMouseEnter={() => setGalleryIndex(idx)}
                onClick={() => setGalleryIndex(idx)}
                onMouseOver={e => (e.currentTarget.style.background = 'black')}
                onMouseOut={e => (e.currentTarget.style.background = galleryIndex === idx ? 'rgb(64,64,64)' : 'rgb(191,191,191)')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-blue-700 text-center">CUSTMIZED IPL DEVICES</h2>
          <h3 className="text-2xl font-semibold mb-4 text-blue-700 text-center">You design it, we build it, box it</h3>
          {/* 黄色细线+正文 */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-1 mb-4 mt-8" style={{ background: 'rgb(239,187,32)' }}></div>
            <p className="text-lg text-gray-700 max-w-5.5xl text-justify mt-8">
              iShine is a full-service custom IPL products manufacturer offering end-to-end customization, from mold development and prototyping to mass production and packaging. iShine already customized more than 1,000 custom devices IPL projects for our partner in the past with much experience in IPL products Technical solution and Compliance solution. <p>The custom IPL products include:</p>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {iplDevices.slice(0, 9).map((product) => (
              <div key={product.id} className="bg-white rounded-xl p-6 flex flex-col items-center shadow-lg border border-gray-400">
                <img src={product.image} alt={product.name} className="w-100 h-100 object-contain mb-4 rounded-lg" />
                <h3 className="font-bold text-lg text-center">{product.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-r from-blue-100 via-white to-purple-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">Unlimited Customization Options</h2>
          <p className="text-center mb-8 text-lg">Stand out in the market with fully customizable IPL devices fit for your brand.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {unlimitedOptions.map((opt, idx) => (
              <button
                key={opt.label}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold border transition ${optionIdx === idx ? "bg-blue-700 text-white" : "bg-white text-blue-700 border-blue-700"} hover:bg-blue-700 hover:text-white`}
                onClick={() => setOptionIdx(idx)}
              >
                {opt.icon}
                {opt.label}
              </button>
            ))}
          </div>
          <div className="max-w-2xl mx-auto bg-white rounded-xl p-6 shadow-lg text-center text-lg min-h-[80px] flex items-center justify-center transition-all">
            {unlimitedOptions[optionIdx].content}
          </div>
        </div>
      </section>

      {/* OEM/ODM Process */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">OEM/ODM Process</h2>
          <p className="text-center mb-8 text-lg">From idea to delivery, we make your IPL device project seamless and successful.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => {
              const Icon = processIcons[i % processIcons.length];
              return (
                <div key={i} className="bg-white rounded-xl p-6 flex flex-col items-center shadow-lg">
                  <Icon className="w-16 h-16 text-blue-700 mb-4" />
                  <h3 className="font-bold text-base mb-1">{step.title}</h3>
                  <p className="text-center text-sm">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            {testimonials.slice(testimonialPage*3, testimonialPage*3+3).map((tk, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg text-center text-lg italic">{tk}</div>
            ))}
          </div>
          <div className="flex justify-center gap-2">
            {[0,1].map(i => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full ${testimonialPage === i ? "bg-blue-700" : "bg-blue-200"}`}
                onClick={() => setTestimonialPage(i)}
                aria-label={`Go to testimonials page ${i+1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-0">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-6">
            {qaList.map((qa, i) => (
              <div key={i} className="mb-4">
                {/* 问题卡片 */}
                <div
                  className={`
                    flex items-center justify-between
                    rounded-xl px-6 py-4 cursor-pointer
                    border-2 border-blue-700
                    bg-blue-700 text-white
                    hover:bg-white hover:text-blue-700
                    transition-colors duration-200
                    min-h-[56px]  // 你可以根据实际需要设置固定高度
                  `}
                  onClick={() => setQaOpen(qaOpen === i ? null : i)}
                  style={{ transition: 'background 0.2s, color 0.2s' }}
                >
                  <span className="font-bold">{qa.q}</span>
                  <span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${qaOpen === i ? "rotate-180" : ""}`} />
                  </span>
                </div>
                {/* 答案内容，下拉区域，无边框 */}
                {qaOpen === i && (
                  <div className="px-6 py-4 bg-transparent text-base">
                    {qa.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
          <p className="text-center text-gray-700 mb-8">Ready to empower your brand? Get in touch for a free consultation and quote.</p>
          <ContactFormA />
        </div>
      </section>
    </div>
  );
}