// pages/index.tsx
import React, { useState } from "react";
import { Flame, Palette, Box, BadgeCheck, Package, CheckCircle, ChevronDown, ChevronRight, Users, Star, MessageCircle, ArrowRight } from "lucide-react";

const heroBg = "bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500";
const sectionBg = "bg-white";
const accent = "text-blue-700";
const shadow = "shadow-lg";
const gridShadow = "shadow-[0_4px_16px_rgba(26,77,255,0.08)]";
const qaTheme = "bg-blue-700 text-white";
const qaHover = "bg-white text-blue-700";
const qaBadge = "bg-white text-blue-700";
const qaBadgeHover = "bg-blue-700 text-white";

const productList = [
  { img: "/product1.jpg", title: "Custom Silicone Bottle" },
  { img: "/product2.jpg", title: "Silicone Baby Spoon" },
  { img: "/product3.jpg", title: "Silicone Baking Mat" },
  { img: "/product4.jpg", title: "Silicone Phone Case" },
  { img: "/product5.jpg", title: "Silicone Watch Band" },
  { img: "/product6.jpg", title: "Silicone Ice Tray" },
  { img: "/product7.jpg", title: "Silicone Key Cover" },
  { img: "/product8.jpg", title: "Silicone Cup Lid" },
  { img: "/product9.jpg", title: "Silicone Cable Organizer" },
];

const unlimitedOptions = [
  {
    label: "Colors",
    icon: <Palette className="w-6 h-6" />,
    content: "Choose from a spectrum of vibrant, custom-matched silicone colors to fit your brand."
  },
  {
    label: "Logo",
    icon: <BadgeCheck className="w-6 h-6" />,
    content: "We offer precise logo printing, embossing, or debossing for maximum brand impact."
  },
  {
    label: "Prototype",
    icon: <Box className="w-6 h-6" />,
    content: "Rapid prototyping and sample making to validate your ideas before mass production."
  },
  {
    label: "Box",
    icon: <Package className="w-6 h-6" />,
    content: "Custom packaging solutions, from eco-friendly boxes to premium gift sets."
  },
  {
    label: "Functions",
    icon: <Flame className="w-6 h-6" />,
    content: "Multi-functional silicone products tailored to your unique requirements."
  },
  {
    label: "QC",
    icon: <CheckCircle className="w-6 h-6" />,
    content: "Strict quality control at every stage, ensuring compliance with FDA, LFGB, EN71, REACH, and more."
  },
];

const moreSupport = [
  "Flexible customization, providing sample testing and design assistance services.",
  "MOQ: 1000 pcs by new silicone products developments.",
  "Prototype time: 7-15 days for silicone prototypes samples making.",
  "Mass Production time: 30–45 days with quantity in 3,000-300,000pcs.",
  "Certified: FDA, LFGB, EN71, REACH Products compliant by SGS, Intertek, BV etc. ISO9001, ISO14001, BCSI, SEDEX, SA8000 Certified Factory."
];

const technicalCapabilities = [
  {
    img: "/capability1.jpg",
    title: "Precision Mold Tooling",
    desc: "16 years of experience in high-precision silicone mold design and manufacturing."
  },
  {
    img: "/capability2.jpg",
    title: "Advanced Molding",
    desc: "Silicone compression, over-molding, LSR injection, multi-shot, and more."
  },
  {
    img: "/capability3.jpg",
    title: "Full Customization",
    desc: "Infinite variety in design, function, material, color, logo, and packaging."
  }
];

const processSteps = [
  { img: "/step1.jpg", title: "Product Design", desc: "Collaborative design tailored to your needs." },
  { img: "/step2.jpg", title: "Prototype & Tooling", desc: "Rapid prototyping and precision tooling." },
  { img: "/step3.jpg", title: "Mass Production", desc: "Efficient, scalable manufacturing." },
  { img: "/step4.jpg", title: "IPQC", desc: "In-process quality control for every batch." },
  { img: "/step5.jpg", title: "Printing", desc: "Custom logo and pattern application." },
  { img: "/step6.jpg", title: "OQC", desc: "Outgoing quality control before shipping." },
  { img: "/step7.jpg", title: "Package", desc: "Secure, branded packaging solutions." },
  { img: "/step8.jpg", title: "Shipping", desc: "Global logistics and on-time delivery." },
];

const howToWorkSteps = [
  "Submit your idea or sketch",
  "Collaborative product design",
  "Prototype & sample approval",
  "Mass production & QC",
  "Packaging & branding",
  "Shipping & after-sales support"
];

const testimonials = [
  "“iShine delivered exactly what we needed, on time and with perfect quality.”",
  "“The customization options are endless. Our brand stands out thanks to iShine.”",
  "“Responsive, professional, and truly innovative in silicone manufacturing.”",
  "“From design to delivery, the process was seamless and stress-free.”",
  "“Our customers love the quality and feel of the silicone products.”",
  "“iShine’s team went above and beyond to meet our requirements.”"
];

const relatedProducts = [
  { img: "/related1.jpg", title: "Silicone Baking Mat" },
  { img: "/related2.jpg", title: "Silicone Baby Spoon" },
  { img: "/related3.jpg", title: "Silicone Phone Case" },
];

const qaList = [
  { q: "What is your minimum order quantity (MOQ)?", a: "Our MOQ is 1000 pcs for new silicone product developments. For existing products, please contact us for details." },
  { q: "How long does prototyping take?", a: "Prototype samples can be made in 7-15 days, depending on complexity and requirements." },
  { q: "What certifications do your products have?", a: "Our products comply with FDA, LFGB, EN71, REACH, and are certified by SGS, Intertek, BV, etc." },
  { q: "Can you help with product design?", a: "Absolutely! We offer design assistance and can turn your ideas into manufacturable products." },
  { q: "What is your mass production lead time?", a: "Typically 30–45 days for orders between 3,000–300,000 pcs." },
  { q: "Do you offer packaging customization?", a: "Yes, we provide a wide range of packaging options, from eco-friendly to premium gift boxes." },
  { q: "How do you ensure product quality?", a: "We have strict IPQC and OQC processes, and all products are fully inspected before shipping." },
  { q: "Can I order samples before mass production?", a: "Yes, sample testing is available to ensure your satisfaction before full production." },
  { q: "What industries do you serve?", a: "We manufacture for industrial, consumer, commercial, and medical applications worldwide." },
];

export default function HomePage() {
  const [optionIdx, setOptionIdx] = useState(0);
  const [qaOpen, setQaOpen] = useState<number | null>(null);
  const [testimonialPage, setTestimonialPage] = useState(0);

  return (
    <div className="font-inter bg-[#F8FAFC] text-[#22223B]">
      {/* Hero Section */}
      <section className={`${heroBg} min-h-[66vh] flex flex-col justify-center items-center text-white relative overflow-hidden`}>
        <div className="max-w-2xl text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">iShine Silicone Solutions</h1>
          <p className="text-lg md:text-2xl mb-8 font-medium drop-shadow">Custom Silicone Products, Infinite Possibilities</p>
          <a href="#contact" className="inline-block px-8 py-3 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:bg-blue-100 transition">Start Your Project</a>
        </div>
        <div className="absolute inset-0 bg-[url('/hero-bg.svg')] bg-cover bg-center opacity-10 pointer-events-none" />
      </section>

      {/* 图配文 Section */}
      <section className={`${sectionBg} py-16 px-4 md:px-0`}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <img src="/about-illustration.svg" alt="iShine Business" className="w-full md:w-1/2 rounded-xl shadow-xl" />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Empowering Brands with Custom Silicone</h2>
            <p className="text-lg mb-4">iShine specializes in the design, development, and manufacturing of high-quality silicone products for global brands. From kitchenware to medical devices, we turn your ideas into reality with precision and care.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><Flame className="w-5 h-5 text-blue-700" /> Innovative Product Design</li>
              <li className="flex items-center gap-2"><Palette className="w-5 h-5 text-blue-700" /> Unlimited Customization</li>
              <li className="flex items-center gap-2"><BadgeCheck className="w-5 h-5 text-blue-700" /> Certified Quality</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What We Do + Video */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-r from-blue-50 via-white to-purple-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">What We Do</h2>
            <p className="mb-6">From concept to delivery, iShine provides end-to-end silicone product solutions. Watch our process in action:</p>
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/2g811Eo7K8U"
                title="iShine Process"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Flame className="w-7 h-7 text-blue-700" />
              <span className="font-semibold">Product Innovation</span>
            </div>
            <div className="flex items-center gap-3">
              <Palette className="w-7 h-7 text-blue-700" />
              <span className="font-semibold">Color & Logo Customization</span>
            </div>
            <div className="flex items-center gap-3">
              <BadgeCheck className="w-7 h-7 text-blue-700" />
              <span className="font-semibold">Certified Manufacturing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 md:px-0">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Gallery</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {[1,2,3,4,5,6].map(i => (
              <img key={i} src={`/gallery${i}.jpg`} alt={`Gallery ${i}`} className="w-64 h-40 object-cover rounded-xl shadow-md flex-shrink-0" />
            ))}
          </div>
        </div>
      </section>

      {/* 九宫格产品展示 */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {productList.map((p, i) => (
              <div key={i} className={`bg-white rounded-xl p-6 flex flex-col items-center ${gridShadow} hover:scale-105 transition-transform`}>
                <img src={p.img} alt={p.title} className="w-24 h-24 object-contain mb-4 rounded-lg" />
                <h3 className="font-bold text-lg">{p.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 富文本容器 */}
      <section className="py-12 px-4 md:px-0">
        <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Why Choose iShine?</h2>
          <p className="mb-2">We combine <b>innovation</b>, <b>quality</b>, and <b>service</b> to deliver the best silicone products for your business. Our team supports you from idea to delivery, ensuring every detail meets your expectations.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>One-stop solution: design, prototyping, production, packaging, and shipping</li>
            <li>Strict quality control and global certifications</li>
            <li>Flexible customization and low MOQ</li>
          </ul>
        </div>
      </section>

      {/* UNLIMITED CUSTOMIZED OPTIONS */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-r from-blue-100 via-white to-purple-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">UNLIMITED CUSTOMIZED OPTIONS</h2>
          <p className="text-center mb-8 text-lg">iShine offer a wide range of customization options for you. You can work with us to create unique and competitive IPL products.</p>
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

      {/* More Support */}
      <section className="py-12 px-4 md:px-0">
        <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">More Support</h2>
          <ul className="list-disc pl-6 space-y-2">
            {moreSupport.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </section>

      {/* Parallax Hero Section 2 */}
      <section className="relative min-h-screen flex items-center justify-center bg-[url('/parallax-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-transparent" />
        <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-[50vh]">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Design Your Next Silicone Product</h2>
          <p className="text-xl text-white mb-8">From idea to delivery, we make it easy.</p>
          <a href="#contact" className="inline-block px-8 py-3 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:bg-blue-100 transition">Get Started</a>
        </div>
      </section>

      {/* OUR TECHNICAL CAPABILITIES */}
      <section className="py-16 px-4 md:px-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">OUR TECHNICAL CAPABILITIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalCapabilities.map((cap, i) => (
              <div key={i} className="bg-white rounded-xl p-6 flex flex-col items-center shadow-lg">
                <img src={cap.img} alt={cap.title} className="w-20 h-20 object-contain mb-4 rounded-lg" />
                <h3 className="font-bold text-lg mb-2">{cap.title}</h3>
                <p className="text-center">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROCESS OF CUSTOMIZED SILICONE PRODUCTS */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">THE PROCESS OF CUSTOMIZED SILICONE PRODUCTS</h2>
          <p className="text-center mb-8 text-lg">From sketch to delivery, our 8-step process ensures quality and efficiency.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="bg-white rounded-xl p-6 flex flex-col items-center shadow-lg">
                <img src={step.img} alt={step.title} className="w-16 h-16 object-contain mb-4 rounded-lg" />
                <h3 className="font-bold text-base mb-1">{step.title}</h3>
                <p className="text-center text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="#howto" className="inline-flex items-center gap-2 text-blue-700 font-bold hover:underline">
              How to make silicone products and how to put the logo on silicone products <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* How To Work With iShine */}
      <section className="relative min-h-screen flex items-center justify-center bg-[url('/workwith-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-transparent" />
        <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-[50vh]">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How To Work With iShine?</h2>
          <p className="text-xl text-white mb-8">One-stop service from design to delivery. Save time, reduce hassle.</p>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            {howToWorkSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-700 font-bold">{i+1}</span>
                <span className="text-white font-semibold">{step}</span>
                {i < howToWorkSteps.length - 1 && <ChevronRight className="w-6 h-6 text-white" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR CUSTOMER TESTIMONIALS */}
      <section className="py-16 px-4 md:px-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">OUR CUSTOMER TESTIMONIALS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            {testimonials.slice(testimonialPage*3, testimonialPage*3+3).map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg text-center text-lg italic">{t}</div>
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

      {/* Related Products */}
      <section className="py-12 px-4 md:px-0 bg-gradient-to-r from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Related Products</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {relatedProducts.map((p, i) => (
              <div key={i} className="bg-white rounded-xl p-6 flex flex-col items-center shadow-lg">
                <img src={p.img} alt={p.title} className="w-20 h-20 object-contain mb-2 rounded-lg" />
                <h3 className="font-bold">{p.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QA Section */}
      <section className="py-16 px-4 md:px-0">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {qaList.map((qa, i) => (
              <div
                key={i}
                className={`relative rounded-xl p-6 cursor-pointer transition-colors duration-200 group ${qaOpen === i ? qaHover : qaTheme}`}
                onClick={() => setQaOpen(qaOpen === i ? null : i)}
                onMouseEnter={() => setQaOpen(i)}
                onMouseLeave={() => setQaOpen(null)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold">{qa.q}</span>
                  <span className={`absolute right-4 top-1/2 -translate-y-1/2 rounded-full px-2 py-1 transition-colors duration-200 ${qaOpen === i ? qaBadgeHover : qaBadge}`}>
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

      {/* Banner */}
      <section className="py-8 px-4 md:px-0 bg-blue-700 text-white text-center">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Start Designing Better IPL Products Today.</h3>
            <p>Learn More Custom IPL Service.</p>
          </div>
          <form className="flex gap-2 mt-4 md:mt-0">
            <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l-full text-blue-700" />
            <button type="submit" className="px-6 py-2 bg-white text-blue-700 font-bold rounded-r-full hover:bg-blue-100 transition">Confirm</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-0 bg-[#1A4DFF] text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Flame className="w-7 h-7" />
            <span className="font-bold text-lg">iShine Silicone</span>
          </div>
          <div className="flex gap-6">
            <a href="#about" className="hover:underline">About</a>
            <a href="#products" className="hover:underline">Products</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="#faq" className="hover:underline">FAQ</a>
          </div>
          <div className="text-sm">&copy; {new Date().getFullYear()} iShine Silicone. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
