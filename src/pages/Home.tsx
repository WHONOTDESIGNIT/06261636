import { useState } from "react";
import { Flame, Palette, BadgeCheck, Package, CheckCircle, ChevronDown } from "lucide-react";
import ContactFormA from '../components/Forms/ContactFormA';
import Silk from './Silk';
import LanguageSelector from '../components/Layout/LanguageSelector';
import { iplDevices, accessories } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

const heroBg = "bg-gradient-to-br from-blue-700 via-indigo-500 to-purple-600";
const sectionBg = "bg-white";
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
    content: "Tailor packaging for retail, e-commerce, or gifting."
  },
  {
    label: "Certification Support",
    icon: <CheckCircle className="w-6 h-6" />,
    content: "Comprehensive support for global certifications."
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
  "“iShine helped us launch our IPL brand in record time. The quality and service are top-notch!”",
  "“The customization options are endless. Our clients love the unique packaging and features.”",
  "“Professional team, fast response, and reliable delivery. Highly recommended for OEM/ODM.”",
  "“We expanded to new markets thanks to iShine's certification and compliance support.”",
  "“The after-sales service is excellent. Any issues are resolved quickly and professionally.”",
  "“Our brand image improved significantly with iShine's design and manufacturing expertise.”"
];

const qaList = [
  { q: "What is IPL and how does it work?", a: "IPL (Intense Pulsed Light) uses broad-spectrum light to target hair follicles, reducing hair growth safely and effectively." },
  { q: "Can I customize the device functions?", a: "Yes, we offer full customization of features, colors, packaging, and more to fit your brand needs." },
  { q: "What certifications do you support?", a: "We support FDA, CE, RoHS, and other global certifications to ensure compliance in your target markets." },
  { q: "How long is the production lead time?", a: "Typical lead time is 25-35 days after sample approval, depending on order size and customization." },
  { q: "Do you provide after-sales support?", a: "Yes, we offer comprehensive after-sales service including technical support and warranty." },
  { q: "Can you ship globally?", a: "Absolutely. We provide flexible global shipping solutions to meet your logistics needs." },
];

export default function HomePage() {
  const [optionIdx, setOptionIdx] = useState(0);
  const [qaOpen, setQaOpen] = useState<number | null>(null);
  const [testimonialPage, setTestimonialPage] = useState(0);

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
          <p className="text-lg md:text-2xl mb-8 font-medium drop-shadow">You design it, we build it and box it.</p>
          <a href="#contact" className="inline-block px-8 py-3 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:bg-blue-100 transition">Get a Free Quote</a>
        </div>
      </section>

      {/* Brand Empowerment / USP */}
      <section className={`${sectionBg} py-16 px-4 md:px-0`}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* 容器1：主标题+副标题+按钮 */}
          <div className="flex flex-col items-start justify-center h-full">
            <h2 className="text-3xl font-bold mb-4">Empower Your Brand</h2>
            <p className="text-lg mb-6">Unlock the full potential of your cosmetics business with iShine's OEM/ODM IPL solutions.</p>
            <a href="#contact" className="inline-block px-6 py-2 bg-blue-700 text-white font-semibold rounded-full shadow hover:bg-blue-800 transition">Read More</a>
          </div>
          {/* 容器2：富文本1 */}
          <div className="text-lg">
            iShine team work with the different industries brands owner, products development managers, products managers, category sourcing manager, retail compliance specialist, products designers together and offer them OEM ODM solution from molded IPL devices design, prototyping to IPL contract manufacturing, printing, package to ensure their IPL projects success.
          </div>
          {/* 容器3：富文本2 */}
          <div className="text-lg">
            We have the capability for Custom ice cooling IPL, Custom multi-function IPL, Custom Sapphire IPL device, Custom Smart APP-connected IPL device, Custom Dual-lamp IPL, Custom Skin Sensor IPL device. Help you design it, build it and box it. From idea to market. iShine provide solutions that best fit for your brand identity.
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured IPL Devices</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {iplDevices.slice(0, 9).map((product) => (
              <div key={product.id} className="bg-white rounded-xl p-6 flex flex-col items-center shadow-lg">
                <img src={product.image} alt={product.name} className="w-72 h-72 object-contain mb-4 rounded-lg" />
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
          <p className="text-center mb-8 text-lg">Stand out in the market with fully customizable IPL devices tailored to your brand.</p>
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
            {processSteps.map((step, i) => (
              <div key={i} className="bg-white rounded-xl p-6 flex flex-col items-center shadow-lg">
                <img src={step.img} alt={step.title} className="w-16 h-16 object-contain mb-4 rounded-lg" />
                <h3 className="font-bold text-base mb-1">{step.title}</h3>
                <p className="text-center text-sm">{step.desc}</p>
              </div>
            ))}
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
              <div
                key={i}
                className={`relative rounded-xl p-6 cursor-pointer transition-colors duration-200 group border-2 border-blue-700
                  ${qaOpen === i ? qaHover : qaTheme}
                  hover:bg-white hover:text-blue-700
                `}
                onClick={() => setQaOpen(qaOpen === i ? null : i)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold transition-colors duration-200 group-hover:text-blue-700 group-hover:bg-white px-1 rounded">
                    {qa.q}
                  </span>
                  <span className={`absolute right-4 top-1/2 -translate-y-1/2 rounded-full px-2 py-1 transition-colors duration-200
                    ${qaOpen === i ? qaBadgeHover : qaBadge}
                    group-hover:bg-blue-700 group-hover:text-white
                  `}>
                    <ChevronDown className={`w-5 h-5 transition-transform ${qaOpen === i ? "rotate-180" : ""}`} />
                  </span>
                </div>
                {qaOpen === i && (
                  <div className="mt-4 text-base">
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

      {/* Footer */}
      <footer className="py-8 px-4 md:px-0 bg-[#1A4DFF] text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Flame className="w-7 h-7" />
            <span className="font-bold text-lg">iShine IPL</span>
          </div>
          <div className="flex gap-6">
            <a href="#about" className="hover:underline">About</a>
            <a href="#products" className="hover:underline">Products</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="#faq" className="hover:underline">FAQ</a>
          </div>
          <div className="text-sm">&copy; {new Date().getFullYear()} iShine IPL. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}