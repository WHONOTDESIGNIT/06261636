import React, { useState } from "react";
import { Flame, Palette, Box, BadgeCheck, Package, CheckCircle, ChevronDown, ChevronRight, Users, Star, MessageCircle, ArrowRight, ShieldCheck, Globe } from "lucide-react";
import ContactFormA from '../components/Forms/ContactFormA';
import { useTranslation } from '../hooks/useTranslation';

const heroBg = "bg-gradient-to-br from-blue-700 via-indigo-500 to-purple-600";
const sectionBg = "bg-white";
const accent = "text-blue-700";
const gridShadow = "shadow-[0_4px_16px_rgba(26,77,255,0.08)]";
const qaTheme = "bg-blue-700 text-white";
const qaHover = "bg-white text-blue-700";
const qaBadge = "bg-white text-blue-700";
const qaBadgeHover = "bg-blue-700 text-white";

const productList = [
  { img: "/ipl1.jpg", titleKey: "home.products.ipl1" },
  { img: "/ipl2.jpg", titleKey: "home.products.ipl2" },
  { img: "/ipl3.jpg", titleKey: "home.products.ipl3" },
  { img: "/ipl4.jpg", titleKey: "home.products.ipl4" },
  { img: "/ipl5.jpg", titleKey: "home.products.ipl5" },
  { img: "/ipl6.jpg", titleKey: "home.products.ipl6" },
];

const unlimitedOptions = [
  {
    labelKey: "home.options.color",
    icon: <Palette className="w-6 h-6" />,
    contentKey: "home.options.colorDesc"
  },
  {
    labelKey: "home.options.logo",
    icon: <BadgeCheck className="w-6 h-6" />,
    contentKey: "home.options.logoDesc"
  },
  {
    labelKey: "home.options.function",
    icon: <Flame className="w-6 h-6" />,
    contentKey: "home.options.functionDesc"
  },
  {
    labelKey: "home.options.packaging",
    icon: <Package className="w-6 h-6" />,
    contentKey: "home.options.packagingDesc"
  },
  {
    labelKey: "home.options.cert",
    icon: <CheckCircle className="w-6 h-6" />,
    contentKey: "home.options.certDesc"
  },
];

const processSteps = [
  { img: "/step1.jpg", titleKey: "home.process.step1", descKey: "home.process.step1Desc" },
  { img: "/step2.jpg", titleKey: "home.process.step2", descKey: "home.process.step2Desc" },
  { img: "/step3.jpg", titleKey: "home.process.step3", descKey: "home.process.step3Desc" },
  { img: "/step4.jpg", titleKey: "home.process.step4", descKey: "home.process.step4Desc" },
  { img: "/step5.jpg", titleKey: "home.process.step5", descKey: "home.process.step5Desc" },
  { img: "/step6.jpg", titleKey: "home.process.step6", descKey: "home.process.step6Desc" },
  { img: "/step7.jpg", titleKey: "home.process.step7", descKey: "home.process.step7Desc" },
  { img: "/step8.jpg", titleKey: "home.process.step8", descKey: "home.process.step8Desc" },
];

const testimonials = [
  "home.testimonials.1",
  "home.testimonials.2",
  "home.testimonials.3",
  "home.testimonials.4",
  "home.testimonials.5",
  "home.testimonials.6"
];

const qaList = [
  { qKey: "home.qa.q1", aKey: "home.qa.a1" },
  { qKey: "home.qa.q2", aKey: "home.qa.a2" },
  { qKey: "home.qa.q3", aKey: "home.qa.a3" },
  { qKey: "home.qa.q4", aKey: "home.qa.a4" },
  { qKey: "home.qa.q5", aKey: "home.qa.a5" },
  { qKey: "home.qa.q6", aKey: "home.qa.a6" },
];

export default function HomePage() {
  const { t } = useTranslation();
  const [optionIdx, setOptionIdx] = useState(0);
  const [qaOpen, setQaOpen] = useState<number | null>(null);
  const [testimonialPage, setTestimonialPage] = useState(0);

  return (
    <div className="font-inter bg-[#F8FAFC] text-[#22223B]">
      {/* Hero Section */}
      <section className={`${heroBg} min-h-[66vh] flex flex-col justify-center items-center text-white relative overflow-hidden`}>
        <div className="max-w-2xl text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">{t("home.hero.title")}</h1>
          <p className="text-lg md:text-2xl mb-8 font-medium drop-shadow">{t("home.hero.subtitle")}</p>
          <a href="#contact" className="inline-block px-8 py-3 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:bg-blue-100 transition">{t("home.hero.cta")}</a>
        </div>
        <div className="absolute inset-0 bg-[url('/hero-bg.svg')] bg-cover bg-center opacity-10 pointer-events-none" />
      </section>

      {/* 品牌赋能/USP */}
      <section className={`${sectionBg} py-16 px-4 md:px-0`}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <img src="/about-ipl.svg" alt="iShine IPL" className="w-full md:w-1/2 rounded-xl shadow-xl" />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">{t("home.usp.title")}</h2>
            <p className="text-lg mb-4">{t("home.usp.desc")}</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><Flame className="w-5 h-5 text-blue-700" /> {t("home.usp.innovation")}</li>
              <li className="flex items-center gap-2"><Palette className="w-5 h-5 text-blue-700" /> {t("home.usp.custom")}</li>
              <li className="flex items-center gap-2"><BadgeCheck className="w-5 h-5 text-blue-700" /> {t("home.usp.cert")}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 产品展示 */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{t("home.products.title")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {productList.map((p, i) => (
              <div key={i} className={`bg-white rounded-xl p-6 flex flex-col items-center ${gridShadow} hover:scale-105 transition-transform`}>
                <img src={p.img} alt={t(p.titleKey)} className="w-24 h-24 object-contain mb-4 rounded-lg" />
                <h3 className="font-bold text-lg">{t(p.titleKey)}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 定制选项 */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-r from-blue-100 via-white to-purple-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">{t("home.options.title")}</h2>
          <p className="text-center mb-8 text-lg">{t("home.options.desc")}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {unlimitedOptions.map((opt, idx) => (
              <button
                key={opt.labelKey}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold border transition ${optionIdx === idx ? "bg-blue-700 text-white" : "bg-white text-blue-700 border-blue-700"} hover:bg-blue-700 hover:text-white`}
                onClick={() => setOptionIdx(idx)}
              >
                {opt.icon}
                {t(opt.labelKey)}
              </button>
            ))}
          </div>
          <div className="max-w-2xl mx-auto bg-white rounded-xl p-6 shadow-lg text-center text-lg min-h-[80px] flex items-center justify-center transition-all">
            {t(unlimitedOptions[optionIdx].contentKey)}
          </div>
        </div>
      </section>

      {/* OEM/ODM 流程 */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">{t("home.process.title")}</h2>
          <p className="text-center mb-8 text-lg">{t("home.process.desc")}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="bg-white rounded-xl p-6 flex flex-col items-center shadow-lg">
                <img src={step.img} alt={t(step.titleKey)} className="w-16 h-16 object-contain mb-4 rounded-lg" />
                <h3 className="font-bold text-base mb-1">{t(step.titleKey)}</h3>
                <p className="text-center text-sm">{t(step.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 客户见证 */}
      <section className="py-16 px-4 md:px-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{t("home.testimonials.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            {testimonials.slice(testimonialPage*3, testimonialPage*3+3).map((tk, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg text-center text-lg italic">{t(tk)}</div>
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

      {/* QA Section */}
      <section className="py-16 px-4 md:px-0">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{t("home.qa.title")}</h2>
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
                  <span className="font-bold">{t(qa.qKey)}</span>
                  <span className={`absolute right-4 top-1/2 -translate-y-1/2 rounded-full px-2 py-1 transition-colors duration-200 ${qaOpen === i ? qaBadgeHover : qaBadge}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform ${qaOpen === i ? "rotate-180" : ""}`} />
                  </span>
                </div>
                {qaOpen === i && (
                  <div className="mt-4 text-base">
                    {t(qa.aKey)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系我们/CTA */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">{t("home.contact.title")}</h2>
          <p className="text-center text-gray-700 mb-8">{t("home.contact.desc")}</p>
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
            <a href="#about" className="hover:underline">{t("home.footer.about")}</a>
            <a href="#products" className="hover:underline">{t("home.footer.products")}</a>
            <a href="#contact" className="hover:underline">{t("home.footer.contact")}</a>
            <a href="#faq" className="hover:underline">{t("home.footer.faq")}</a>
          </div>
          <div className="text-sm">&copy; {new Date().getFullYear()} iShine IPL. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}