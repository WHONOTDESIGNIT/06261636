import { useState } from "react";
import { Link } from "react-router-dom";
import { Flame, Palette, BadgeCheck, Package, CheckCircle, ChevronDown, Settings, Send, ThumbsUp } from "lucide-react";
import ContactFormA from '../components/Forms/ContactFormA';
import { iplDevices } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import SEOTags from '../components/SEO/SEOTags';

const heroBg = "bg-gradient-to-br from-blue-700 via-indigo-500 to-purple-600";

const unlimitedOptions = [
  {
    label: "Color Customization",
    icon: <Palette className="w-6 h-6" />,
    content: {
      img: "/homeimages/ipl color customize.png",
      text: [
        <span style={{ fontWeight: 700, fontSize: '1.5em' }}>
          Customize the Color of Your IPL Device
        </span>,
        "You can customize IPL products color according to the Pantone book. We will add the Pantone Color Paste to the ABS material when the material mixed. Our usual colors are White, Red, Translucent, Green, and Gray. We also can make the double color, marble color and multi-colored Molded IPL products for you if you needed.",
        "iShine own the printing workshop for printing the pattern or logo color by Silk Screen printing, Pad printing, Heat Transfer printing and Water Transfer printing, In mold Decoration, Digital printing."
      ],
      cardClass: "bg-[#F3F4F7] rounded-[32px] shadow-lg",
      imgClass: "rounded-[32px] border-4 border-blue-200",
    }
  },
  {
    label: "Logo Printing",
    icon: <BadgeCheck className="w-6 h-6" />,
    content: {
      img: "/homeimages/ipl logo printing (2).png",
      text: [
        <>
          iShine helps companies create custom logo IPL products that make your brand stand out. iShine custom Logo IPL products,{' '}
          <Link to="/blog/promotional-ipl-merchandise" className="text-blue-700 underline underline-offset-2 hover:text-blue-800 transition">promotional IPL merchandise</Link>, and gift giveaways that you’ll love. We offer logo branding services to the{' '}
          <Link to="/blog/industries" className="text-blue-700 underline underline-offset-2 hover:text-blue-800 transition">Cosmetics and Hair Removal</Link> industries. We work with the Cosmetic brands owners, Marketing and Advertising, Licensor, Licensee, wholesale, retail chain, swimming wear store, and product development companies together offer molded logo{' '}
          <Link to="/ipl-hair-removal" className="text-blue-700 underline underline-offset-2 hover:text-blue-800 transition">IPL products</Link> to the whole world to expand your brands and Market.
        </>,
        <>
          In iShine group, we offer different ways to put your logo and pattern on. The different logo and patterns may need different methods.{' '}
          <Link to="/solutions/logo-printing" className="text-blue-700 underline underline-offset-2 font-bold hover:text-blue-800 transition">Click Here</Link> to get rough information for the different performance with the different printing ways.
        </>
      ],
      cardClass: "bg-white rounded-2xl shadow-xl border border-blue-100",
      imgClass: "rounded-xl border-2 border-blue-400",
    }
  },
  {
    label: "Function Customization",
    icon: <Flame className="w-6 h-6" />,
    content: {
      img: "/homeimages/9 home hair removal device technologies.webp",
      text: [
        <span style={{ fontWeight: 700, fontSize: '1.5em' }}>
          iShine’s Own Eight IPL Device Technologies.
        </span>,
        <>
          iShine’s IPL devices feature eight advanced technologies, including:
          <ul className="list-disc pl-6 mt-2 mb-2 space-y-1">
            <li>Hair removal</li>
            <li>Replaceable heads</li>
            <li>Sapphire cooling</li>
            <li>Ice-cooling technology</li>
            <li>App connectivity</li>
            <li>Skin sensor</li>
            <li>Continuous automatic flash</li>
            <li>Skin rejuvenation</li>
          </ul>
        </>,
        "All the IPL products iShine made from basic one to smart skin-sensor IPL to meet your different project needs."
      ],
      cardClass: "bg-[#F3F4F7] rounded-[32px] shadow-lg",
      imgClass: "rounded-[32px] border-4 border-blue-200",
    }
  },
  {
    label: "Packaging Design",
    icon: <Package className="w-6 h-6" />,
    content: {
      img: "/homeimages/IPL packaging solutions (1).webp",
      text: (
        <>
          Premium packaging for retail, e-commerce, and gifting.<br />
          <a
            href="/solutions/packaging-solutions"
            className="font-bold underline text-blue-700 hover:text-blue-800 transition ml-1"
            style={{ textUnderlineOffset: 3 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here
          </a>
          {" to explore the packaging solutions you’ll love."}
        </>
      ),
      cardClass: "bg-[#F3F4F7] rounded-[32px] shadow-lg",
      imgClass: "rounded-[32px] border-4 border-blue-200",
    }
  },
  {
    label: "Certification",
    icon: <CheckCircle className="w-6 h-6" />,
    content: {
      img: [
        "https://github.com/WHONOTDESIGNIT/06261636/blob/main/homeimages/FDA_IPL_ISHINE.png",
        "https://github.com/WHONOTDESIGNIT/06261636/blob/main/homeimages/iso13485%20cert%20ishine.png",
        "https://raw.githubusercontent.com/WHONOTDESIGNIT/06261636/main/homeimages/MDL_IPL-ISHINE.png"
      ],
      text: "",
      cardClass: "bg-[#F3F4F7] rounded-[32px] shadow-lg",
      imgClass: "rounded-[32px] border-4 border-blue-200",
    }
  },
  {
    label: "Quality Control",
    icon: <ThumbsUp className="w-6 h-6" />,
    content: {
      img: [
        "/homeimages/quality-control-room-ishine.png",
        "/homeimages/quality-control-ishine.png"
      ],
      cardClass: "bg-[#F3F4F7] rounded-[32px] shadow-lg",
      imgClass: "rounded-[32px] border-4 border-blue-200",
    }
  },
];

const processSteps = [
  { img: "/step1.jpg", title: "Consultation", desc: "" },
  { img: "/step2.jpg", title: "Product Design", desc: "" },
  { img: "/step3.jpg", title: "Prototyping & Sample Confirmation", desc: "" },
  { img: "/step4.jpg", title: "Printing", desc: "" },
  { img: "/step5.jpg", title: "Mass Production", desc: "" },
  { img: "/step6.jpg", title: "IPQC", desc: "" },
  { img: "/step7.jpg", title: "OQC", desc: "" },
  { img: "/step8.jpg", title: "Packaging & Shipping", desc: "" },
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
    a: (lang: string) => (
      <div>
        <p style={{ marginTop: '56px' }}>Absolutely. We offer reliable worldwide shipping to support your business wherever you are.</p>
        <ul className="list-disc pl-5 my-2">
          <li>
            <b>Global Logistics Coverage:</b> Yes, we provide international shipping solutions with tracking codes for every order.
          </li>
          <li>
            <b>Transparent Shipping Costs:</b> Shipping fees are calculated based on your order's weight and quantity.
          </li>
          <li>Click on the <Link to={`/${lang}/shipping-cost`} className="text-blue-700 font-bold underline underline-offset-2 hover:text-blue-800 transition">Check Shipping Cost</Link> button.</li>
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
  {
    src: '/homeimages/home-ipl-hair-removal-device-incoming-material-testing.webp',
    alt: 'Home IPL hair removal device incoming material testing and quality control process'
  },
  {
    src: '/homeimages/home-ipl-hair-removal-device-packaging-process.webp', 
    alt: 'Professional packaging process for home IPL hair removal devices'
  },
  {
    src: '/homeimages/home-ipl-hair-removal-device-warehouse-storage.webp',
    alt: 'Modern warehouse facility for home IPL hair removal device storage and distribution'
  },
  {
    src: '/homeimages/research-department-ishine.webp',
    alt: 'iShine research and development department for IPL technology innovation'
  }
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
  const { currentLanguage, t } = useLanguage();

  return (
    <div className="font-inter bg-[#F8FAFC] text-[#22223B]">
      <SEOTags 
        title={t('home.seo.title', 'iShine - Custom IPL Hair Removal Device Manufacturing | OEM/ODM Solutions')}
        description={t('home.seo.description', 'Leading IPL device manufacturer providing custom OEM/ODM solutions. Design, build, and brand your own IPL hair removal devices with iShine.')}
        keywords={t('home.seo.keywords', 'IPL hair removal devices, custom manufacturing, OEM ODM, beauty device manufacturing, IPL device manufacturer')}
      />
      {/* Hero Section */}
      <section className={`${heroBg} min-h-[66vh] flex flex-col justify-center items-center text-white relative overflow-hidden`}>
        {/* 内容层 */}
        <div className="max-w-4xl text-center pt-14">
          <h1 className="text-2xl md:text-6xl font-bold mb-4 drop-shadow-lg">{t('home.hero.title1', 'Custom IPL Hair Removal Devices for Cosmetics Brands')}</h1>
          <p className="text-lg md:text-2xl mb-8 font-medium drop-shadow mt-8">{t('home.hero.subtitle', 'You design it, we build it and box it.')}</p>
          <Link to="#contact" className="inline-block px-8 py-3 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:bg-blue-100 transition">{t('home.hero.cta', 'Get a Free Quote')}</Link>
        </div>
      </section>

      {/* Brand Empowerment / USP */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-r from-blue-100 via-white to-purple-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* 容器1：主标题+副标题+按钮 */}
          <div className="flex flex-col items-start justify-center h-full">
            <h2 className="text-3xl font-bold mb-4 text-blue-700">{t('home.about.title', 'About iShine')}</h2>
            <p className="text-lg mb-6 text-blue-700">{t('home.about.subtitle', 'One-stop IPL solutions.')}</p>
            <Link to="#contact" className="inline-block px-6 py-2 bg-blue-700 text-white font-semibold rounded-full shadow hover:bg-blue-800 transition">{t('home.about.cta', 'Read More')}</Link>
          </div>
          {/* 容器2：富文本1 */}
          <div className="text-lg">
            {t('home.about.description1', 'iShine Tech Co., Limited, is one-stop supplier for')}{' '}
            <Link to={`/${currentLanguage}/service-support/manufacturing`} className="text-blue-700 underline underline-offset-2 decoration-blue-700 hover:text-blue-800 hover:decoration-blue-800 transition">
              {t('home.about.manufacturing', 'IPL hair removal devices manufacturing')}
            </Link>{' '}{t('home.about.and', 'and')}{' '}
            <Link to={`/${currentLanguage}/solutions/brand-customization`} className="text-blue-700 underline underline-offset-2 decoration-blue-700 hover:text-blue-800 hover:decoration-blue-800 transition">
              {t('home.about.customization', 'customization')}
            </Link>. {t('home.about.description2', 'Help you design it, build it and box it. From idea to market.')}
          </div>
          {/* 容器3：富文本2 */}
          <div className="text-lg">
            {t('home.about.description3', 'We have the capability for Custom ice cooling IPL, Smart APP-connected IPL device, Skin Sensor IPL device. iShine provide solutions that best fit for your brand identity.')}
          </div>
        </div>
      </section>

      {/* 视频+富文本 Section */}
      <section className="py-16 px-4 md:px-0">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* 左侧：YouTube 视频 */}
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/1QZLr0yQ2nY"
              title="iShine IPL Hair Removal Device Manufacturing"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          {/* 右侧：品牌介绍富文本 */}
          <div className="text-lg">
            {t('home.video.description', 'Watch how iShine brings your IPL device ideas to life, from design to delivery. Our advanced manufacturing and strict quality control ensure your brand stands out in the beauty market.')}
          </div>
        </div>
      </section>

      {/* 图册 Section */}
      <section className="py-16 px-4 md:px-0 flex flex-col items-center">
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
            src={galleryImages[(galleryIndex - 1 + galleryImages.length) % galleryImages.length].src}
            alt={galleryImages[(galleryIndex - 1 + galleryImages.length) % galleryImages.length].alt}
            className="rounded-xl opacity-70 hover:opacity-90 transition-opacity cursor-pointer"
            style={{ width: '15%', height: '100%', objectFit: 'cover', marginRight: 10 }}
            onClick={() => setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
          />

          {/* 主图 */}
          <img
            src={galleryImages[galleryIndex].src}
            alt={galleryImages[galleryIndex].alt}
            className="rounded-2xl z-10 shadow-lg"
            style={{ width: '70%', height: '100%', objectFit: 'cover' }}
          />

          {/* 右侧缩略图 */}
          <img
            src={galleryImages[(galleryIndex + 1) % galleryImages.length].src}
            alt={galleryImages[(galleryIndex + 1) % galleryImages.length].alt}
            className="rounded-xl opacity-70 hover:opacity-90 transition-opacity cursor-pointer"
            style={{ width: '15%', height: '100%', objectFit: 'cover', marginLeft: 10 }}
            onClick={() => setGalleryIndex((prev) => (prev + 1) % galleryImages.length)}
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
        </div>

        {/* 小圆点指示器 - 移到图片下方 */}
        <div className="flex gap-4 mt-6">
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
      </section>

      {/* Product Showcase */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-blue-700 text-center">{t('home.productShowcase.title', 'CUSTMIZED IPL DEVICES')}</h2>
          <h3 className="text-2xl font-semibold mb-4 text-blue-700 text-center">{t('home.productShowcase.subtitle', 'You design it, we build it, box it')}</h3>
          {/* 黄色细线+正文 */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-1 mb-4 mt-8" style={{ background: 'rgb(239,187,32)' }}></div>
            <p className="text-lg text-gray-700 max-w-5.5xl text-justify mt-8">
              {t('home.productShowcase.description', 'iShine is a full-service custom IPL products manufacturer offering end-to-end customization, from mold development and prototyping to mass production and packaging. iShine already customized more than 1,000 custom devices IPL projects for our partner in the past with much experience in IPL products Technical solution and Compliance solution.')} <p>{t('home.productShowcase.include', 'The custom IPL products include:')}</p>
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
          {/* 新增：产品特性描述段落 */}
          <div className="w-full mt-10 mb-2 p-6 bg-transparent rounded-xl text-gray-800 text-base leading-relaxed" style={{ boxShadow: 'none' }}>
            <p className="mb-2 font-semibold text-lg text-blue-700">All iShine home IPL hair removal devices are designed for long-lasting performance and user safety. Built with advanced materials and precision engineering, these devices are:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Resistant to temperature fluctuations (operating range: -10 °C to 45 °C), as well as common household chemicals and UV exposure.</li>
              <li>Easy to clean and maintain, with a smooth, ergonomic design that fits comfortably in the hand.</li>
              <li>Available in a variety of shapes, sizes, and modern color options to suit different preferences and needs.</li>
              <li>Lightweight, soft-touch, and flexible for comfortable handling during treatments.</li>
              <li>Free from PVC, BPA, phthalates, and lead—safe for direct skin contact, non-toxic, and harmless for all users.</li>
              <li>Environmentally conscious: made with recyclable components and energy-efficient technology.</li>
              <li>Equipped with medical-grade biocompatible materials for safe use on all suitable skin types.</li>
              <li>Designed with user-friendly features such as intuitive controls, multiple intensity settings, and built-in skin sensors for added safety.</li>
              <li>Compliant with international safety standards and suitable for home use, providing professional-level results with minimal discomfort.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-r from-blue-100 via-white to-purple-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl font-bold mb-2 text-center text-blue-700">{t('home.customization.title', 'Unlimited Customization Options')}</h2>
          <p className="text-center mb-8 text-lg" style={{ marginBottom: '2.5rem' }}>iShine offers a wide range of customization options for you. You can work with us to create unique and competitive IPL devices for your business.</p>
          <div className="w-full">
            <div className="flex flex-nowrap justify-center gap-2 mb-8">
              {unlimitedOptions.map((opt, idx) => (
                <button
                  key={opt.label}
                  className={`flex items-center gap-2 px-4 py-3 rounded-full font-semibold border transition whitespace-nowrap ${optionIdx === idx ? "bg-blue-700 text-white" : "bg-white text-blue-700 border-blue-700"} hover:bg-blue-700 hover:text-white`}
                  onClick={() => setOptionIdx(idx)}
                >
                  {opt.icon}
                  {t(`home.customization.options.${idx}.label`, opt.label)}
                </button>
              ))}
            </div>
            <div
              className={`p-6 min-h-[500px] flex items-center justify-center transition-all ${unlimitedOptions[optionIdx].content.cardClass || 'bg-[#F3F4F7] rounded-2xl shadow-lg'}`}
            >
              <div className="flex flex-col md:flex-row items-start gap-8 w-full h-full justify-center overflow-x-auto">
                {optionIdx === 5 ? (
                  <div className="w-full flex flex-col items-start">
                    {/* Section A: 横向排列图片和文案 */}
                    <div className="flex flex-row items-start w-full gap-8 mb-4">
                      <img
                        src="/homeimages/quality-control-ishine.png"
                        alt="Quality Control"
                        style={{ width: '300px', height: '217px', objectFit: 'contain' }}
                        className="object-contain rounded-2xl flex-shrink-0"
                      />
                      <div
                        className="text-base text-gray-700 font-medium"
                        style={{ width: '600px' }}
                      >
                        Custom your IPL products Quality Control Inspection. Our common IPL products Quality Control Inspection is from supplier selection, production specification, In-process Inspection, Before shipment inspection (OQC). We also accept the customer hire the 3rd party to pre-shipment QC include Full inspection if needed.
                      </div>
                    </div>
                    {/* Section B: 新增两张图片 */}
                    <div className="flex flex-row gap-6 w-full mt-2">
                      <img
                        src="/homeimages/quality-control-room-ishine.png"
                        alt="Quality Control Room"
                        style={{ height: '258.59px', width: 'auto', objectFit: 'contain' }}
                        className="object-contain rounded-2xl flex-shrink-0"
                      />
                      <img
                        src="/homeimages/flash test.png"
                        alt="Flash Test"
                        style={{ height: '258.59px', width: 'auto', objectFit: 'contain' }}
                        className="object-contain rounded-2xl flex-shrink-0"
                      />
                    </div>
                  </div>
                ) : Array.isArray(unlimitedOptions[optionIdx].content.img) ? (
                  <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', width: '1264px' }}>
                    {unlimitedOptions[optionIdx].content.img.map((src, idx) => (
                      <div key={idx} className={optionIdx === 5 ? "flex flex-col items-start" : "flex flex-col items-center"}>
                        <img
                          src={src}
                          alt={unlimitedOptions[optionIdx].label + ' ' + (idx + 1)}
                          style={optionIdx === 5
                            ? { height: '217px', width: 'auto', objectFit: 'contain', marginBottom: '8px' }
                            : { width: '572px', height: '572px', objectFit: 'contain', marginBottom: '8px' }}
                          className="object-contain rounded-2xl flex-shrink-0"
                        />
                        {optionIdx === 4 && (
                          <div className="text-center text-base text-gray-700 font-medium" style={{ position: 'relative', top: '-18px' }}>
                            {[
                              'FDA 510(k) Certificate',
                              'ISO 13485 Medical Device Quality Management Certificate',
                              'MDL (Canada) Medical Device Listing'
                            ][idx]}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <img
                    src={unlimitedOptions[optionIdx].content.img}
                    alt={unlimitedOptions[optionIdx].label}
                    style={optionIdx === 2
                      ? { width: '600px', height: '600px' }
                      : optionIdx === 3
                        ? { width: '600px', height: '387.5px' }
                        : optionIdx === 5
                          ? { height: '217px', width: 'auto' }
                          : { width: '600px', height: '337.5px' }}
                    className="object-cover rounded-2xl flex-shrink-0"
                  />
                )}
                {optionIdx !== 4 && optionIdx !== 5 && (
                  <div className="flex-1 w-full text-left max-w-full">
                    {Array.isArray(unlimitedOptions[optionIdx].content.text)
                      ? unlimitedOptions[optionIdx].content.text.map((p, i, arr) => (
                          <>
                            <p key={i} className="mb-4 last:mb-0">
                              {typeof p === 'string'
                                ? t(`home.customization.options.${optionIdx}.content.text.${i}`, p)
                                : p}
                            </p>
                            {i === 0 && arr.length > 1 && <p className="my-4" key="gap"></p>}
                            {/* 在Function Customization最后一段下方加按钮 */}
                            {optionIdx === 2 && i === arr.length - 1 && (
                              <div className="mt-6 flex justify-start">
                                <Link
                                  to="/solutions"
                                  className="inline-block px-8 py-3 bg-blue-700 text-white font-bold rounded-full shadow hover:bg-blue-800 transition"
                                >
                                  Ask Our Expert
                                </Link>
                              </div>
                            )}
                          </>
                        ))
                      : t(
                          `home.customization.options.${optionIdx}.content.text`,
                          typeof unlimitedOptions[optionIdx].content.text === 'string' ? unlimitedOptions[optionIdx].content.text : undefined
                        )
                    }
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* More Support Section */}
        <section className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-5xl font-bold text-blue-700 mb-2 text-center">More Support</h2>
          <div className="h-16 md:h-[3.75rem]"></div>
          <p className="text-lg mb-6 text-gray-700 text-center">Flexible customization, providing sample testing and design assistance services.</p>
          <ul className="space-y-3 text-base">
            <li className="flex items-start gap-2"><CheckCircle className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0" />MOQ: 1000 pcs by new IPL devices developments.</li>
            <li className="flex items-start gap-2"><CheckCircle className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0" />Prototype time: 30-100 days for IPL prototypes samples making.</li>
            <li className="flex items-start gap-2"><CheckCircle className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0" />Mass Production time: 30–45 days with quanity in 3,000-300,000pcs.</li>
            <li className="flex items-start gap-2"><CheckCircle className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0" />Certified: FDA, TGA, MDL, REACH Products compliant by SGS, Intertek,BV etc.ISO13485 Certified Factory.</li>
          </ul>
        </section>
      </section>

      {/* OEM/ODM Process */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">The Process of Customized IPL products</h2>
          <p className="text-center mb-8 text-lg">{t('home.process.subtitle', 'From idea to delivery, we make your IPL device project successful.')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => {
              const Icon = processIcons[i % processIcons.length];
              return (
                <div key={i} className="bg-white rounded-xl p-6 flex flex-col items-center shadow-lg">
                  <Icon className="w-16 h-16 text-blue-700 mb-4" />
                  <h3 className="font-bold text-base mb-1">{`${i + 1}. ${t(`home.process.steps.${i}.title`, step.title)}`}</h3>
                  <p className="text-center text-sm">{t(`home.process.steps.${i}.desc`, step.desc)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('home.testimonials.title', 'What Our Clients Say')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            {testimonials.slice(testimonialPage*3, testimonialPage*3+3).map((tk, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg text-center text-lg italic">{t(`home.testimonials.${testimonialPage*3+i}`, tk)}</div>
            ))}
          </div>
          <div className="flex justify-center gap-2">
            {[0,1].map(i => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full ${testimonialPage === i ? "bg-blue-700" : "bg-blue-200"}`}
                onClick={() => setTestimonialPage(i)}
                aria-label={t('home.testimonials.pageButton', `Go to testimonials page ${i+1}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-0">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('home.faq.title', 'Frequently Asked Questions')}</h2>
          <div className="flex flex-col gap-6">
            {qaList.map((item, idx) => (
              <div key={idx} className="mb-4">
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
                  onClick={() => setQaOpen(qaOpen === idx ? null : idx)}
                  style={{ transition: 'background 0.2s, color 0.2s' }}
                >
                  <span className="font-bold">{t(`home.faq.${idx}.q`, item.q)}</span>
                  <span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${qaOpen === idx ? "rotate-180" : ""}`} />
                  </span>
                </div>
                {/* 答案内容，下拉区域，无边框 */}
                {qaOpen === idx && (
                  <div className="px-6 py-4 bg-transparent text-base">
                    {typeof item.a === "function" ? item.a(currentLanguage) : (typeof item.a === "string" ? t(`home.faq.${idx}.a`, item.a) : item.a)}
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
          <h2 className="text-3xl font-bold text-center mb-6">{t('home.contact.title', 'Contact Us')}</h2>
          <p className="text-center text-gray-700 mb-8">{t('home.contact.subtitle', 'Ready to empower your brand? Get in touch for a free consultation and quote.')}</p>
          <ContactFormA />
        </div>
      </section>
    </div>
  );
}