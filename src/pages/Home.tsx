import { useState, useEffect } from "react";
import Link from "next/link";
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
        <span key="color-title" style={{ fontWeight: 700, fontSize: '1.5em' }}>
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
        <span key="logo-text-1">
          iShine helps companies create custom logo IPL products that make your brand stand out. iShine custom Logo IPL products,{" "}
          <Link href="/blog/promotional-ipl-merchandise" className="text-blue-700 underline underline-offset-2 hover:text-blue-800 transition">promotional IPL merchandise</Link>, and gift giveaways that you'll love. We offer logo branding services to the{" "}
          <Link href="/blog/industries" className="text-blue-700 underline underline-offset-2 hover:text-blue-800 transition">Cosmetics and Hair Removal</Link> industries. We work with the Cosmetic brands owners, Marketing and Advertising, Licensor, Licensee, wholesale, retail chain, swimming wear store, and product development companies together offer molded logo{" "}
          <Link href="/ipl-hair-removal" className="text-blue-700 underline underline-offset-2 hover:text-blue-800 transition">IPL products</Link> to the whole world to expand your brands and Market.
        </span>,
        <span key="logo-text-2">
          In iShine group, we offer different ways to put your logo and pattern on. The different logo and patterns may need different methods.{" "}
          <Link href="/solutions/logo-printing" className="text-blue-700 underline underline-offset-2 font-bold hover:text-blue-800 transition">Click Here</Link> to get rough information for the different performance with the different printing ways.
        </span>
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
        <span key="function-title" style={{ fontWeight: 700, fontSize: '1.5em' }}>
          iShine's Own Eight IPL Device Technologies.
        </span>,
        <span key="function-list">
          iShine's IPL devices feature eight advanced technologies, including:
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
        </span>,
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
        <span key="packaging-text">
          Premium packaging for retail, e-commerce, and gifting.<br />
          <a
            href="/solutions/packaging-solutions"
            className="font-bold underline text-blue-700 hover:text-blue-800 transition ml-1"
            style={{ textUnderlineOffset: 3 }}
          >
            Click Here
          </a>
          {" to explore the packaging solutions you'll love."}
        </span>
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
  "iShine helped us launch our IPL brand in record time. The quality and service are impressive!",
  "The customization options are endless. Our clients love the unique packaging and features.",
  "Professional team, fast response, and reliable delivery. Highly recommended for OEM/ODM.",
  "We expanded to new markets thanks to iShine's certification and compliance support.",
  "The after-sales service is excellent. Any issues are resolved quickly and professionally.",
  "Our brand repuation improved significantly with iShine's design and manufacturing expertise."
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
          <li>Click on the <Link href={`/${lang}/shipping-cost`} className="text-blue-700 font-bold underline underline-offset-2 hover:text-blue-800 transition">Check Shipping Cost</Link> button.</li>
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
  const [isClient, setIsClient] = useState(false);
  const { currentLanguage, t } = useLanguage();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="font-inter bg-[#F8FAFC] text-[#22223B]">
      <SEOTags 
        title={t('home.seo.title', 'iShine - Custom IPL Hair Removal Device Manufacturing | OEM/ODM Solutions')}
        description={t('home.seo.description', 'Leading IPL device manufacturer providing custom OEM/ODM solutions. Design, build, and brand your own IPL hair removal devices with iShine.')}
        keywords={t('home.seo.keywords', 'IPL hair removal devices, custom manufacturing, OEM ODM, beauty device manufacturing, IPL device manufacturer')}
      />
      
      {/* Hero Section */}
      <section className={`${heroBg} min-h-[66vh] flex flex-col justify-center items-center text-white relative overflow-hidden`}>
        <div className="max-w-4xl text-center pt-14">
          <h1 className="text-2xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            {t('home.hero.title1', 'Custom IPL Hair Removal Devices for Cosmetics Brands')}
          </h1>
          <p className="text-lg md:text-2xl mb-8 font-medium drop-shadow mt-8">
            {t('home.hero.subtitle', 'You design it, we build it and box it.')}
          </p>
          <Link href="#contact" className="inline-block px-8 py-3 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:bg-blue-100 transition">
            {t('home.hero.cta', 'Get a Free Quote')}
          </Link>
        </div>
      </section>

      {/* Brand Empowerment / USP */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-r from-blue-100 via-white to-purple-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div className="flex flex-col items-start justify-center h-full">
            <h2 className="text-3xl font-bold mb-4 text-blue-700">
              {t('home.about.title', 'About iShine')}
            </h2>
            <p className="text-lg mb-6 text-blue-700">
              {t('home.about.subtitle', 'One-stop IPL solutions.')}
            </p>
            <Link href="#contact" className="inline-block px-6 py-2 bg-blue-700 text-white font-semibold rounded-full shadow hover:bg-blue-800 transition">
              {t('home.about.cta', 'Read More')}
            </Link>
          </div>
          <div className="text-lg">
            {t('home.about.description1', 'iShine Tech Co., Limited, is one-stop supplier for')}{' '}
            <Link href={`/${currentLanguage}/service-support/manufacturing`} className="text-blue-700 underline underline-offset-2 decoration-blue-700 hover:text-blue-800 hover:decoration-blue-800 transition">
              {t('home.about.manufacturing', 'IPL hair removal devices manufacturing')}
            </Link>{' '}{t('home.about.and', 'and')}{' '}
            <Link href={`/${currentLanguage}/solutions/brand-customization`} className="text-blue-700 underline underline-offset-2 decoration-blue-700 hover:text-blue-800 hover:decoration-blue-800 transition">
              {t('home.about.customization', 'customization')}
            </Link>. {t('home.about.description2', 'Help you design it, build it and box it. From idea to market.')}
          </div>
          <div className="text-lg">
            {t('home.about.description3', 'We have the capability for Custom ice cooling IPL, Smart APP-connected IPL device, Skin Sensor IPL device. iShine provide solutions that best fit for your brand identity.')}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 md:px-0">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
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
          <div className="text-lg">
            {t('home.video.description', 'Watch how iShine brings your IPL device ideas to life, from design to delivery. Our advanced manufacturing and strict quality control ensure your brand stands out in the beauty market.')}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 md:px-0 flex flex-col items-center">
        <div
          className="relative flex items-center w-full max-w-5xl"
          style={{ height: 400 }}
        >
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-60 rounded-full w-12 h-12 flex items-center justify-center text-white hover:bg-opacity-80 transition"
            onClick={() => setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
            aria-label="Previous"
            style={{ left: 0 }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <img
            src={galleryImages[(galleryIndex - 1 + galleryImages.length) % galleryImages.length].src}
            alt={galleryImages[(galleryIndex - 1 + galleryImages.length) % galleryImages.length].alt}
            className="rounded-xl opacity-70 hover:opacity-90 transition-opacity cursor-pointer"
            style={{ width: '15%', height: '100%', objectFit: 'cover', marginRight: 10 }}
            onClick={() => setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
          />

          <img
            src={galleryImages[galleryIndex].src}
            alt={galleryImages[galleryIndex].alt}
            className="rounded-2xl z-10 shadow-lg"
            style={{ width: '70%', height: '100%', objectFit: 'cover' }}
          />

          <img
            src={galleryImages[(galleryIndex + 1) % galleryImages.length].src}
            alt={galleryImages[(galleryIndex + 1) % galleryImages.length].alt}
            className="rounded-xl opacity-70 hover:opacity-90 transition-opacity cursor-pointer"
            style={{ width: '15%', height: '100%', objectFit: 'cover', marginLeft: 10 }}
            onClick={() => setGalleryIndex((prev) => (prev + 1) % galleryImages.length)}
          />

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-60 rounded-full w-12 h-12 flex items-center justify-center text-white hover:bg-opacity-80 transition"
            onClick={() => setGalleryIndex((prev) => (prev + 1) % galleryImages.length)}
            aria-label="Next"
            style={{ right: 0 }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

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
          <h2 className="text-5xl font-bold mb-4 text-blue-700 text-center">
            {t('home.productShowcase.title', 'CUSTMIZED IPL DEVICES')}
          </h2>
          <h3 className="text-2xl font-semibold mb-4 text-blue-700 text-center">
            {t('home.productShowcase.subtitle', 'You design it, we build it, box it')}
          </h3>
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-1 mb-4 mt-8" style={{ background: 'rgb(239,187,32)' }}></div>
            <p className="text-lg text-gray-700 max-w-5.5xl text-justify mt-8">
              {t('home.productShowcase.description', 'iShine is a full-service custom IPL products manufacturer offering end-to-end customization, from mold development and prototyping to mass production and packaging. iShine already customized more than 1,000 custom devices IPL projects for our partner in the past with much experience in IPL products Technical solution and Compliance solution.')}
            </p>
            <p className="text-lg text-gray-700 max-w-5.5xl text-justify mt-2">
              {t('home.productShowcase.include', 'The custom IPL products include:')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {iplDevices.slice(0, 9).map((product) => (
              <div key={product.id} className="bg-white rounded-xl p-6 flex flex-col items-center shadow-lg border border-gray-400">
                <img src={product.image} alt={product.name} className="w-40 h-40 object-contain mb-4" />
                <h4 className="text-xl font-bold mb-2 text-blue-700">{product.name}</h4>
                <p className="text-gray-700 mb-2 text-center">{product.description}</p>
                <Link href={product.link} className="mt-2 px-4 py-2 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition">
                  {t('home.productShowcase.details', 'View Details')}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options Section */}
      <section className="py-16 px-4 md:px-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-blue-700 text-center">
            {t('home.unlimitedOptions.title', 'Unlimited Customization Options')}
          </h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {unlimitedOptions.map((option, idx) => (
              <div
                key={option.label}
                className={`flex-1 min-w-[320px] max-w-[420px] p-8 ${option.content.cardClass} transition-shadow duration-300 hover:shadow-2xl`}
                style={{ border: optionIdx === idx ? '2px solid #3b82f6' : undefined }}
                onMouseEnter={() => setOptionIdx(idx)}
              >
                <div className="flex items-center gap-3 mb-4">
                  {option.icon}
                  <span className="text-xl font-bold text-blue-700">{option.label}</span>
                </div>
                <div className="flex flex-col gap-4">
                  {Array.isArray(option.content.img) ? (
                    <div className="flex gap-2 flex-wrap">
                      {option.content.img.map((img, i) => (
                        <img key={i} src={img} alt={option.label} className={option.content.imgClass} style={{ width: 120, height: 80, objectFit: 'cover' }} />
                      ))}
                    </div>
                  ) : (
                    <img src={option.content.img} alt={option.label} className={option.content.imgClass} style={{ width: 120, height: 80, objectFit: 'cover' }} />
                  )}
                  <div className="text-gray-700 text-base space-y-2">
                    {Array.isArray(option.content.text)
                      ? option.content.text.map((txt, i) => <div key={i}>{txt}</div>)
                      : option.content.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link href="/solutions" className="bg-blue-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition">
              查看更多方案
            </Link>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-gray-50" id="support">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">更多支持</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <img src="/images/support1.png" alt="售后服务" className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">售后服务</h3>
              <p className="text-gray-600 text-center">专业团队为您提供全方位售后支持，保障您的权益。</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <img src="/images/support2.png" alt="物流配送" className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">物流配送</h3>
              <p className="text-gray-600 text-center">高效物流体系，确保产品安全、准时送达。</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <img src="/images/support3.png" alt="定制咨询" className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">定制咨询</h3>
              <p className="text-gray-600 text-center">一对一专属顾问，满足您的个性化定制需求。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">联系我们</h2>
          <ContactFormA />
        </div>
      </section>
    </div>
  );
}
