import { ViteSSG } from "vite-ssg";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, createContext, useContext, useState, useEffect, lazy, Suspense } from "react";
import { useLocation, Link, BrowserRouter, Routes, Route, useParams, Outlet } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ChevronDown, Youtube, Linkedin, X, Menu, Facebook, Instagram, MessageCircle, ChevronUp, CheckCircle, Palette, BadgeCheck, Flame, Package, ThumbsUp, Send, Settings } from "lucide-react";
const languages$1 = [
  // Global (English first) - 固定第一行
  { code: "en-global", name: "Global", nativeName: "English", flag: "🌍", region: "Global" },
  // 保留的7种语言
  { code: "de-de", name: "Germany", nativeName: "Deutsch", flag: "🇩🇪", region: "Europe" },
  { code: "es-es", name: "Spain", nativeName: "Español", flag: "🇪🇸", region: "Europe" },
  { code: "ar-ae", name: "United Arab Emirates", nativeName: "العربية", flag: "🇦🇪", region: "Middle East & Africa" },
  { code: "he-il", name: "Israel", nativeName: "עברית", flag: "🇮🇱", region: "Middle East & Africa" },
  { code: "nl-nl", name: "Netherlands", nativeName: "Nederlands", flag: "🇳🇱", region: "Europe" },
  { code: "pt-pt", name: "Portugal", nativeName: "Português", flag: "🇵🇹", region: "Europe" },
  { code: "pl-pl", name: "Poland", nativeName: "Polski", flag: "🇵🇱", region: "Europe" }
];
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const translations = {};
const loadTranslation = async (lang) => {
  if (translations[lang])
    return translations[lang];
  try {
    const module = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../translations/ar.json": () => import("./assets/ar-dc3c27d0.js"), "../translations/de.json": () => import("./assets/de-6ce3147a.js"), "../translations/en.json": () => import("./assets/en-b02cc804.js"), "../translations/es.json": () => import("./assets/es-46dfc752.js"), "../translations/he.json": () => import("./assets/he-94e0ff83.js"), "../translations/nl.json": () => import("./assets/nl-1537bc34.js"), "../translations/pl.json": () => import("./assets/pl-c23617d9.js"), "../translations/pt.json": () => import("./assets/pt-027d3bf4.js") }), `../translations/${lang}.json`);
    translations[lang] = module.default;
    return translations[lang];
  } catch (error) {
    console.warn(`Failed to load translation for ${lang}, falling back to English`);
    if (!translations["en"]) {
      const enModule = await import("./assets/en-b02cc804.js");
      translations["en"] = enModule.default;
    }
    return translations["en"];
  }
};
function getNested(obj, path) {
  return path.split(".").reduce((acc, part) => acc && acc[part] !== void 0 ? acc[part] : void 0, obj);
}
function useTranslation(currentLanguage) {
  const t = useCallback(async (key, defaultValue) => {
    const langPack = await loadTranslation(currentLanguage);
    const value = getNested(langPack, key);
    if (typeof value === "string")
      return value;
    return defaultValue !== void 0 ? defaultValue : key;
  }, [currentLanguage]);
  const tSync = useCallback((key, defaultValue) => {
    const langPack = translations[currentLanguage] || translations["en"] || {};
    const value = getNested(langPack, key);
    if (typeof value === "string")
      return value;
    return defaultValue !== void 0 ? defaultValue : key;
  }, [currentLanguage]);
  return { t: tSync, tAsync: t };
}
const LanguageContext = createContext(void 0);
const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    var _a;
    const savedLang = localStorage.getItem("selectedLanguage");
    const urlLang = (_a = window.location.pathname.match(/^\/([a-z]{2})(\/|$)/)) == null ? void 0 : _a[1];
    return urlLang || savedLang || "en";
  });
  const { t } = useTranslation(currentLanguage);
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      const langMatch = path.match(/^\/([a-z]{2})(\/|$)/);
      if (langMatch) {
        const lang = langMatch[1];
        if (lang !== currentLanguage) {
          setCurrentLanguage(lang);
          localStorage.setItem("selectedLanguage", lang);
        }
      }
    };
    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("languageChanged", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("languageChanged", handleLocationChange);
    };
  }, [currentLanguage]);
  const setLanguage = (languageCode) => {
    setCurrentLanguage(languageCode);
    localStorage.setItem("selectedLanguage", languageCode);
    window.dispatchEvent(new Event("languageChanged"));
  };
  const isRTL = ["ar", "he"].includes(currentLanguage);
  useEffect(() => {
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [currentLanguage, isRTL]);
  return /* @__PURE__ */ jsx(
    LanguageContext.Provider,
    {
      value: {
        currentLanguage,
        setLanguage,
        t,
        isRTL,
        availableLanguages: languages$1
      },
      children
    }
  );
};
const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === void 0) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "ar", name: "العربية", flag: "🇸🇦" }
];
const LanguageSelector = ({ className = "" }) => {
  const { currentLanguage } = useLanguage();
  const handleLanguageChange = (newLang) => {
    if (newLang === currentLanguage)
      return;
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
    const currentHash = window.location.hash;
    let newUrl;
    if (newLang === "en") {
      const cleanPath = currentPath.replace(/^\/(zh|es|fr|de|ja|ko|pt|ru|ar)(\/|$)/, "/") || "/";
      newUrl = cleanPath + currentSearch + currentHash;
    } else {
      const cleanPath = currentPath.replace(/^\/(zh|es|fr|de|ja|ko|pt|ru|ar)(\/|$)/, "/") || "/";
      const newPath = cleanPath === "/" ? `/${newLang}` : `/${newLang}${cleanPath}`;
      newUrl = newPath + currentSearch + currentHash;
    }
    window.location.href = newUrl;
  };
  return /* @__PURE__ */ jsx("div", { className: `language-selector ${className}`, children: /* @__PURE__ */ jsx(
    "select",
    {
      value: currentLanguage,
      onChange: (e) => handleLanguageChange(e.target.value),
      className: "language-select",
      children: languages.map((lang) => /* @__PURE__ */ jsxs("option", { value: lang.code, children: [
        lang.flag,
        " ",
        lang.name
      ] }, lang.code))
    }
  ) });
};
const iplDevices = [
  {
    id: "smart-app",
    name: "Smart App-Controlled IPL Device",
    description: "Advanced IPL device with smartphone connectivity and personalized treatment plans",
    image: "https://i.postimg.cc/CLg7qVKB/app-ipl-2.webp",
    thumbnail: "https://i.postimg.cc/CLg7qVKB/app-ipl-2.webp",
    // 新增缩略图字段
    features: ["App Control", "Custom Programs", "Progress Tracking", "Safety Sensors"],
    category: "ipl",
    link: "/ipl-hair-removal/smart-app"
    // 新增
  },
  {
    id: "ice-feeling",
    name: "Ice Feeling IPL Device",
    description: "Cooling technology for comfortable hair removal experience",
    image: "https://i.postimg.cc/qMnXKR6c/ice-feeling-ipl-1.webp",
    thumbnail: "https://i.postimg.cc/43qb4DM3/ice-feeling-ipl.webp",
    // 新增缩略图字段
    features: ["Cooling Technology", "Pain-Free", "Continuous Use", "Professional Grade"],
    category: "ipl",
    link: "/ipl-hair-removal/ice-feeling"
  },
  {
    id: "emerald",
    name: "Emerald IPL Device",
    description: "Premium IPL device with emerald crystal technology",
    image: "https://i.postimg.cc/1RpcPYK9/emerald-ipl-2.webp",
    thumbnail: "https://i.postimg.cc/1RpcPYK9/emerald-ipl-2.webp",
    // 新增缩略图字段
    features: ["Emerald Crystal", "Long-lasting", "Professional Results", "Elegant Design"],
    category: "ipl",
    link: "/ipl-hair-removal/emerald"
  },
  {
    id: "skin-sensor",
    name: "Skin Sensor IPL Device",
    description: "Intelligent skin detection for optimal treatment customization",
    image: "https://i.postimg.cc/DyZ57Ppm/skin-sensor.webp",
    thumbnail: "https://i.postimg.cc/DyZ57Ppm/skin-sensor.webp",
    // 新增缩略图字段
    features: ["Skin Detection", "Auto Adjustment", "Safe Treatment", "Multi-tone Compatible"],
    category: "ipl",
    link: "/ipl-hair-removal/skin-sensor"
  },
  {
    id: "battery-powered",
    name: "Battery Powered IPL Device",
    description: "Cordless convenience with long-lasting battery performance",
    image: "https://i.postimg.cc/fbHR2mNL/Batery-ipl.webp",
    thumbnail: "https://i.postimg.cc/fbHR2mNL/Batery-ipl.webp",
    // 新增缩略图字段
    features: ["Cordless", "Long Battery Life", "Portable", "Travel Friendly"],
    category: "ipl",
    link: "/ipl-hair-removal/battery-powered"
  },
  {
    id: "handheld",
    name: "Handheld IPL Device",
    description: "Compact and ergonomic design for easy handling",
    image: "https://i.postimg.cc/BvHc6YGc/handheld-ipl.webp",
    thumbnail: "https://i.postimg.cc/BvHc6YGc/handheld-ipl.webp",
    // 新增缩略图字段
    features: ["Ergonomic Design", "Lightweight", "Easy Grip", "Precision Control"],
    category: "ipl",
    link: "/ipl-hair-removal/handheld"
  },
  {
    id: "ice-cooling",
    name: "Ice Cooling IPL Device",
    description: "Advanced cooling system for maximum comfort during treatment",
    image: "https://i.postimg.cc/9FD908dR/ice-cooling-ipl.webp",
    thumbnail: "https://i.postimg.cc/9FD908dR/ice-cooling-ipl.webp",
    // 新增缩略图字段
    features: ["Advanced Cooling", "Comfort Treatment", "Reduced Sensation", "Continuous Operation"],
    category: "ipl",
    link: "/ipl-hair-removal/ice-cooling"
  },
  {
    id: "dual-lamp",
    name: "Dual-Lamp IPL Device",
    description: "Enhanced efficiency with dual lamp technology",
    image: "https://i.postimg.cc/zGc8B7kB/dual-lamp-ipl.webp",
    thumbnail: "https://i.postimg.cc/zGc8B7kB/dual-lamp-ipl.webp",
    // 新增缩略图字段
    features: ["Dual Lamps", "Faster Treatment", "Even Coverage", "Professional Power"],
    category: "ipl",
    link: "/ipl-hair-removal/dual-lamp"
  },
  {
    id: "ai-powered",
    name: "AI-Powered IPL Device",
    description: "Artificial intelligence for personalized treatment optimization",
    image: "https://i.postimg.cc/BQzVPVRd/ai-powered-ipl.webp",
    thumbnail: "https://i.postimg.cc/BQzVPVRd/ai-powered-ipl.webp",
    // 新增缩略图字段
    features: ["AI Technology", "Smart Learning", "Personalized", "Advanced Analytics"],
    category: "ipl",
    link: "/ipl-hair-removal/ai-powered"
  }
];
const accessories = [
  {
    id: "sapphire-lens",
    name: "Sapphire Lens",
    description: "Premium sapphire crystal lens for enhanced durability and performance",
    image: "https://i.postimg.cc/9Mc8j5qq/sapphire-len.webp",
    thumbnail: "https://i.postimg.cc/9Mc8j5qq/sapphire-len.webp",
    // 新增缩略图字段
    features: ["Sapphire Crystal", "Scratch Resistant", "Optimal Light Transmission", "Long Lasting"],
    category: "accessories",
    link: "/accessories/sapphire-lens"
  },
  {
    id: "adapter",
    name: "Power Adapter",
    description: "Universal power adapter with multiple voltage support",
    image: "https://i.postimg.cc/GtVxtZ9K/power-adaptor.webp",
    thumbnail: "https://i.postimg.cc/GtVxtZ9K/power-adaptor.webp",
    // 新增缩略图字段
    features: ["Universal Compatibility", "Fast Charging", "Safety Certified", "Compact Design"],
    category: "accessories",
    link: "/accessories/adapter"
  },
  {
    id: "goggles",
    name: "Safety Goggles",
    description: "Professional-grade protective eyewear for IPL treatments",
    image: "https://i.postimg.cc/1tYp7L0S/safety-goggles.webp",
    thumbnail: "https://i.postimg.cc/1tYp7L0S/safety-goggles.webp",
    // 新增缩略图字段
    features: ["UV Protection", "Comfortable Fit", "Adjustable Strap", "Professional Grade"],
    category: "accessories",
    link: "/accessories/goggles"
  },
  {
    id: "filter",
    name: "Optical Filter",
    description: "High-quality optical filter for precise light wavelength control",
    image: "https://i.postimg.cc/tRw33GCt/filter.webp",
    thumbnail: "https://i.postimg.cc/tRw33GCt/filter.webp",
    // 新增缩略图字段
    features: ["Precision Filtering", "Wavelength Control", "High Quality", "Professional Standard"],
    category: "accessories",
    link: "/accessories/filter"
  }
];
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const { currentLanguage, t } = useLanguage();
  const navigation = [
    {
      name: t("header.nav.solutions", "Solutions"),
      href: currentLanguage === "en" ? "/solutions" : `/${currentLanguage}/solutions`,
      hasDropdown: true,
      items: [
        { name: t("header.nav.logoPrinting", "Logo Printing"), href: currentLanguage === "en" ? "/solutions/logo-printing" : `/${currentLanguage}/solutions/logo-printing`, icon: "🖨️" },
        { name: t("header.nav.packaging", "Packaging Solutions"), href: currentLanguage === "en" ? "/solutions/packaging" : `/${currentLanguage}/solutions/packaging`, icon: "📦" },
        { name: t("header.nav.dropShipping", "Drop Shipping"), href: currentLanguage === "en" ? "/solutions/drop-shipping" : `/${currentLanguage}/solutions/drop-shipping`, icon: "🚚" },
        { name: t("header.nav.globalShipping", "Global Shipping"), href: currentLanguage === "en" ? "/solutions/global-shipping" : `/${currentLanguage}/solutions/global-shipping`, icon: "🌍" },
        { name: t("header.nav.brandCustomization", "Brand Customization"), href: currentLanguage === "en" ? "/solutions/brand-customization" : `/${currentLanguage}/solutions/brand-customization`, icon: "🎨" },
        { name: t("header.nav.compliance", "Compliance & Certifications"), href: currentLanguage === "en" ? "/solutions/compliance" : `/${currentLanguage}/solutions/compliance`, icon: "✅" },
        { name: t("header.nav.designPrototyping", "Design & Prototyping"), href: currentLanguage === "en" ? "/solutions/design-prototyping" : `/${currentLanguage}/solutions/design-prototyping`, icon: "⚙️" },
        { name: t("header.nav.multiHeadIPL", "Multi-head IPL Custom"), href: currentLanguage === "en" ? "/solutions/multi-head-ipl" : `/${currentLanguage}/solutions/multi-head-ipl`, icon: "🔬" },
        { name: t("header.nav.dualLampIPL", "Dual-lamp IPL Custom"), href: currentLanguage === "en" ? "/solutions/dual-lamp-ipl" : `/${currentLanguage}/solutions/dual-lamp-ipl`, icon: "💡" }
      ]
    },
    {
      name: t("header.nav.iplHairRemoval", "IPL Hair Removal"),
      href: currentLanguage === "en" ? "/ipl-hair-removal" : `/${currentLanguage}/ipl-hair-removal`,
      hasDropdown: true,
      items: [
        {
          name: t("header.nav.iplDevices", "IPL Devices"),
          isCategory: true,
          items: [
            { name: t("header.nav.smartAppIPL", "Smart App-Controlled IPL Device"), href: currentLanguage === "en" ? "/ipl-hair-removal/smart-app" : `/${currentLanguage}/ipl-hair-removal/smart-app`, thumbnail: true },
            { name: t("header.nav.iceFeelingIPL", "Ice Feeling IPL Device"), href: currentLanguage === "en" ? "/ipl-hair-removal/ice-feeling" : `/${currentLanguage}/ipl-hair-removal/ice-feeling`, thumbnail: true },
            { name: t("header.nav.emeraldIPL", "Emerald IPL Device"), href: currentLanguage === "en" ? "/ipl-hair-removal/emerald" : `/${currentLanguage}/ipl-hair-removal/emerald`, thumbnail: true },
            { name: t("header.nav.skinSensorIPL", "Skin Sensor IPL Device"), href: currentLanguage === "en" ? "/ipl-hair-removal/skin-sensor" : `/${currentLanguage}/ipl-hair-removal/skin-sensor`, thumbnail: true },
            { name: t("header.nav.batteryPoweredIPL", "Battery Powered IPL Device"), href: currentLanguage === "en" ? "/ipl-hair-removal/battery-powered" : `/${currentLanguage}/ipl-hair-removal/battery-powered`, thumbnail: true },
            { name: t("header.nav.handheldIPL", "Handheld IPL Device"), href: currentLanguage === "en" ? "/ipl-hair-removal/handheld" : `/${currentLanguage}/ipl-hair-removal/handheld`, thumbnail: true },
            { name: t("header.nav.iceCoolingIPL", "Ice Cooling IPL Device"), href: currentLanguage === "en" ? "/ipl-hair-removal/ice-cooling" : `/${currentLanguage}/ipl-hair-removal/ice-cooling`, thumbnail: true },
            { name: t("header.nav.dualLampIPLDevice", "Dual-Lamp IPL Device"), href: currentLanguage === "en" ? "/ipl-hair-removal/dual-lamp" : `/${currentLanguage}/ipl-hair-removal/dual-lamp`, thumbnail: true },
            { name: t("header.nav.aiPoweredIPL", "AI-POWERED IPL Device"), href: currentLanguage === "en" ? "/ipl-hair-removal/ai-powered" : `/${currentLanguage}/ipl-hair-removal/ai-powered`, thumbnail: true }
          ]
        },
        {
          name: t("header.nav.accessories", "Accessories"),
          isCategory: true,
          items: [
            { name: t("header.nav.sapphireLens", "Sapphire Lens"), href: currentLanguage === "en" ? "/accessories/sapphire-lens" : `/${currentLanguage}/accessories/sapphire-lens`, icon: "💎" },
            { name: t("header.nav.opticalFilter", "Optical Filter"), href: currentLanguage === "en" ? "/accessories/filter" : `/${currentLanguage}/accessories/filter`, icon: "🔍" },
            { name: t("header.nav.powerAdapter", "Power Adapter"), href: currentLanguage === "en" ? "/accessories/adapter" : `/${currentLanguage}/accessories/adapter`, icon: "🔌" },
            { name: t("header.nav.safetyGoggles", "Safety Goggles"), href: currentLanguage === "en" ? "/accessories/goggles" : `/${currentLanguage}/accessories/goggles`, icon: "🥽" }
          ]
        }
      ]
    },
    {
      name: t("header.nav.howToUse", "How to Use"),
      href: currentLanguage === "en" ? "/how-to-use" : `/${currentLanguage}/how-to-use`
    },
    {
      name: t("header.nav.serviceSupport", "Service & Support"),
      href: currentLanguage === "en" ? "/service-support" : `/${currentLanguage}/service-support`,
      hasDropdown: true,
      items: [
        {
          name: t("header.nav.service", "Service"),
          isCategory: true,
          items: [
            { name: t("header.nav.afterSales", "After-Sales Service"), href: currentLanguage === "en" ? "/service-support/after-sales" : `/${currentLanguage}/service-support/after-sales` },
            { name: t("header.nav.winFDAListing", "Win FDA Listing"), href: currentLanguage === "en" ? "/service-support/win-fda-listing" : `/${currentLanguage}/service-support/win-fda-listing` },
            { name: t("header.nav.iplManufacturing", "IPL Devices Manufacturing"), href: currentLanguage === "en" ? "/service-support/manufacturing" : `/${currentLanguage}/service-support/manufacturing` },
            { name: t("header.nav.knowledgeBase", "Knowledge Base"), href: currentLanguage === "en" ? "/service-support/knowledge-base" : `/${currentLanguage}/service-support/knowledge-base` }
          ]
        },
        {
          name: t("header.nav.supportGuide", "Support > Buying Guide"),
          isCategory: true,
          items: [
            { name: t("header.nav.beautySourcing", "Beauty Niche Sourcing & Accessories"), href: currentLanguage === "en" ? "/service-support/beauty-sourcing" : `/${currentLanguage}/service-support/beauty-sourcing` },
            { name: t("header.nav.pricingGuide", "Pricing Guide"), href: currentLanguage === "en" ? "/service-support/pricing-guide" : `/${currentLanguage}/service-support/pricing-guide` },
            { name: t("header.nav.helpCenter", "Help Center"), href: currentLanguage === "en" ? "/service-support/help-center" : `/${currentLanguage}/service-support/help-center` },
            { name: t("header.nav.gallery", "Gallery"), href: currentLanguage === "en" ? "/service-support/gallery" : `/${currentLanguage}/service-support/gallery` },
            { name: t("header.nav.videos", "Videos"), href: currentLanguage === "en" ? "/service-support/videos" : `/${currentLanguage}/service-support/videos` }
          ]
        },
        {
          name: t("header.nav.blog", "Blog"),
          isCategory: true,
          items: [
            { name: t("header.nav.newsInsights", "News & Insights"), href: currentLanguage === "en" ? "/blog/news-insights" : `/${currentLanguage}/blog/news-insights` },
            { name: t("header.nav.industries", "Industries We Serve"), href: currentLanguage === "en" ? "/blog/industries" : `/${currentLanguage}/blog/industries` }
          ]
        }
      ]
    },
    {
      name: t("header.nav.about", "About"),
      href: currentLanguage === "en" ? "/about" : `/${currentLanguage}/about`,
      hasDropdown: true,
      items: [
        { name: t("header.nav.founderMessage", "Founder Message"), href: currentLanguage === "en" ? "/about/founder-message" : `/${currentLanguage}/about/founder-message` },
        { name: t("header.nav.technology", "Our Technology"), href: currentLanguage === "en" ? "/about/technology" : `/${currentLanguage}/about/technology` },
        { name: t("header.nav.globalWitness", "Global Witness"), href: currentLanguage === "en" ? "/about/global-witness" : `/${currentLanguage}/about/global-witness` },
        { name: t("header.nav.corePrinciples", "Core Principles"), href: currentLanguage === "en" ? "/about/core-principles" : `/${currentLanguage}/about/core-principles` },
        { name: t("header.nav.company", "About iShine"), href: currentLanguage === "en" ? "/about/company" : `/${currentLanguage}/about/company` },
        { name: t("header.nav.brandStory", "Brand Story"), href: currentLanguage === "en" ? "/about/brand-story" : `/${currentLanguage}/about/brand-story` },
        { name: t("header.nav.quality", "Quality"), href: currentLanguage === "en" ? "/about/quality" : `/${currentLanguage}/about/quality` }
      ]
    },
    { name: t("header.nav.contact", "Contact"), href: currentLanguage === "en" ? "/contact" : `/${currentLanguage}/contact` }
  ];
  const isActive = (href) => location.pathname === href;
  const handleDropdownToggle = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };
  const getThumbnailUrl = (itemName) => {
    const iplDevice = iplDevices.find((device) => device.name === itemName);
    if (iplDevice && iplDevice.thumbnail) {
      return iplDevice.thumbnail;
    }
    const accessory = accessories.find((acc) => acc.name === itemName);
    if (accessory && accessory.thumbnail) {
      return accessory.thumbnail;
    }
    return "";
  };
  return /* @__PURE__ */ jsx("header", { className: "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200", children: /* @__PURE__ */ jsxs("nav", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center h-32", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-gradient-to-br from-ishine-blue-500 to-ishine-purple-500 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-sm", children: "iS" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-gray-900", children: t("header.logo", "iShine") })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden lg:flex items-center space-x-8", children: navigation.map((item) => {
        var _a;
        return /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                to: item.href,
                className: `text-sm font-medium transition-colors duration-200 hover:text-ishine-blue-500 ${isActive(item.href) ? "text-ishine-blue-500" : "text-gray-700"}`,
                children: item.name
              }
            ),
            item.hasDropdown && /* @__PURE__ */ jsx(ChevronDown, { className: "ml-1 w-4 h-4 text-gray-500 group-hover:text-ishine-blue-500 transition-colors" })
          ] }),
          item.hasDropdown && /* @__PURE__ */ jsx("div", { className: `absolute top-full left-0 mt-2 ${item.name === "IPL Hair Removal" ? "w-120" : "w-80"} bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50`, children: /* @__PURE__ */ jsx("div", { className: "p-4", children: (_a = item.items) == null ? void 0 : _a.map((subItem, index2) => {
            var _a2;
            return /* @__PURE__ */ jsx("div", { children: subItem.isCategory ? /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 mb-2 text-sm border-b border-gray-200 pb-1", children: subItem.name }),
              /* @__PURE__ */ jsx("div", { className: "space-y-1", children: (_a2 = subItem.items) == null ? void 0 : _a2.map((categoryItem, catIndex) => /* @__PURE__ */ jsxs(
                Link,
                {
                  to: categoryItem.href,
                  className: "flex items-center px-3 py-2 text-sm text-gray-600 hover:text-ishine-blue-500 hover:bg-gray-50 rounded-md transition-colors",
                  children: [
                    categoryItem.thumbnail ? /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: getThumbnailUrl(categoryItem.name),
                        alt: categoryItem.name,
                        className: "w-8 h-8 rounded object-cover mr-3",
                        onError: (e) => {
                          e.currentTarget.style.display = "none";
                        }
                      }
                    ) : categoryItem.icon ? /* @__PURE__ */ jsx("span", { className: "text-lg mr-3", children: categoryItem.icon }) : null,
                    categoryItem.name
                  ]
                },
                catIndex
              )) })
            ] }) : /* @__PURE__ */ jsxs(
              Link,
              {
                to: subItem.href,
                className: "flex items-center px-3 py-2 text-sm text-gray-600 hover:text-ishine-blue-500 hover:bg-gray-50 rounded-md transition-colors",
                children: [
                  subItem.thumbnail ? /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: getThumbnailUrl(subItem.name),
                      alt: subItem.name,
                      className: "w-8 h-8 rounded object-cover mr-3",
                      onError: (e) => {
                        e.currentTarget.style.display = "none";
                      }
                    }
                  ) : subItem.icon ? /* @__PURE__ */ jsx("span", { className: "text-lg mr-3", children: subItem.icon }) : null,
                  subItem.name
                ]
              }
            ) }, index2);
          }) }) })
        ] }, item.name);
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsx(LanguageSelector, {}),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://youtube.com",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "p-2 text-gray-600 hover:text-red-500 transition-colors",
            children: /* @__PURE__ */ jsx(Youtube, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://linkedin.com",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "p-2 text-gray-600 hover:text-blue-600 transition-colors",
            children: /* @__PURE__ */ jsx(Linkedin, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsMenuOpen(!isMenuOpen),
            className: "lg:hidden p-2 text-gray-600 hover:text-gray-900",
            children: isMenuOpen ? /* @__PURE__ */ jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6" })
          }
        )
      ] })
    ] }),
    isMenuOpen && /* @__PURE__ */ jsxs("div", { className: "lg:hidden py-4 border-t border-gray-200 max-h-96 overflow-y-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-4 px-4", children: /* @__PURE__ */ jsx(LanguageSelector, {}) }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-4", children: navigation.map((item) => {
        var _a;
        return /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                to: item.href,
                onClick: () => setIsMenuOpen(false),
                className: `text-sm font-medium transition-colors duration-200 hover:text-ishine-blue-500 ${isActive(item.href) ? "text-ishine-blue-500" : "text-gray-700"}`,
                children: item.name
              }
            ),
            item.hasDropdown && /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => handleDropdownToggle(item.name),
                className: "p-1",
                children: /* @__PURE__ */ jsx(
                  ChevronDown,
                  {
                    className: `w-4 h-4 text-gray-500 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`
                  }
                )
              }
            )
          ] }),
          item.hasDropdown && activeDropdown === item.name && /* @__PURE__ */ jsx("div", { className: "mt-2 ml-4 space-y-2", children: (_a = item.items) == null ? void 0 : _a.map((subItem, index2) => {
            var _a2;
            return /* @__PURE__ */ jsx("div", { children: subItem.isCategory ? /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 mb-1 text-xs", children: subItem.name }),
              /* @__PURE__ */ jsx("div", { className: "space-y-1 ml-2", children: (_a2 = subItem.items) == null ? void 0 : _a2.map((categoryItem, catIndex) => /* @__PURE__ */ jsx(
                Link,
                {
                  to: categoryItem.href,
                  onClick: () => setIsMenuOpen(false),
                  className: "block text-xs text-gray-600 hover:text-ishine-blue-500 py-1",
                  children: categoryItem.name
                },
                catIndex
              )) })
            ] }) : /* @__PURE__ */ jsxs(
              Link,
              {
                to: subItem.href,
                onClick: () => setIsMenuOpen(false),
                className: "flex items-center text-sm text-gray-600 hover:text-ishine-blue-500 py-1",
                children: [
                  subItem.thumbnail ? /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: getThumbnailUrl(subItem.name),
                      alt: subItem.name,
                      className: "w-6 h-6 rounded object-cover mr-2",
                      onError: (e) => {
                        e.currentTarget.style.display = "none";
                      }
                    }
                  ) : subItem.icon ? /* @__PURE__ */ jsx("span", { className: "text-sm mr-2", children: subItem.icon }) : null,
                  subItem.name
                ]
              }
            ) }, index2);
          }) })
        ] }, item.name);
      }) })
    ] })
  ] }) });
};
const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { className: "bg-ishine-blue-700 text-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-white rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-ishine-blue-700 font-bold text-sm", children: "iS" }) }),
          /* @__PURE__ */ jsx("span", { className: "text-xl font-bold", children: "iShine" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-4", children: "Company Info" }),
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-4", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "text-gray-300 hover:text-white transition-colors", children: /* @__PURE__ */ jsx(Facebook, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "text-gray-300 hover:text-white transition-colors", children: /* @__PURE__ */ jsx(Instagram, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "text-gray-300 hover:text-white transition-colors", children: /* @__PURE__ */ jsx(Youtube, { className: "w-5 h-5" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-4", children: "Products" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-300", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/ipl-hair-removal", className: "hover:text-white transition-colors", children: "IPL Hair Removal" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/accessories", className: "hover:text-white transition-colors", children: "Accessories" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/gallery", className: "hover:text-white transition-colors", children: "Gallery" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-4", children: "Services" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-300", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/service-support/after-sales", className: "hover:text-white transition-colors", children: "After-Sales Service" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/service-support/manufacturing", className: "hover:text-white transition-colors", children: "IPL Manufacturing" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/service-support/pricing-guide", className: "hover:text-white transition-colors", children: "Buying Guide" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/service-support/help-center", className: "hover:text-white transition-colors", children: "Help Center" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/sitemap", className: "hover:text-white transition-colors", children: "Sitemap" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-4", children: "Company" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-300", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about/company", className: "hover:text-white transition-colors", children: "About iShine" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about/brand-story", className: "hover:text-white transition-colors", children: "Brand Story" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about/quality", className: "hover:text-white transition-colors", children: "Quality" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/news-insights", className: "hover:text-white transition-colors", children: "Blog" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-4", children: "Contact" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-300 text-sm", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            "Tel: ",
            /* @__PURE__ */ jsx("a", { href: "tel:+8613823508753", className: "hover:text-white transition-colors", children: "+86-13823508753" })
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            "WhatsApp: ",
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/8615012891148", target: "_blank", rel: "noopener noreferrer", className: "hover:text-white transition-colors", children: "+86-15012891148" })
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            "Email: ",
            /* @__PURE__ */ jsx("a", { href: "mailto:service@iplmanufacturer.com", className: "hover:text-white transition-colors", children: "service@iplmanufacturer.com" })
          ] }),
          /* @__PURE__ */ jsx("li", { children: "ADDRESS: 208 Room, 4 Building, No.45, Makan Road, Xi'li Street, Shenzhen, Guangdong, China, 518071" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "All rights reserved." }),
      /* @__PURE__ */ jsxs("div", { className: "flex space-x-6 mt-4 md:mt-0", children: [
        /* @__PURE__ */ jsx(Link, { to: "/privacy-policy", className: "text-gray-300 hover:text-white text-sm transition-colors", children: "Privacy Policy" }),
        /* @__PURE__ */ jsx(Link, { to: "/terms-of-service", className: "text-gray-300 hover:text-white text-sm transition-colors", children: "Terms of Service" })
      ] })
    ] })
  ] }) });
};
const FloatingWidgets = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { t } = useLanguage();
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const openWhatsApp = () => {
    window.open("https://wa.me/8615012891148", "_blank");
  };
  return /* @__PURE__ */ jsxs("div", { className: "fixed bottom-6 right-6 z-40 flex flex-col space-y-4", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: openWhatsApp,
        className: "bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
        "aria-label": t("floating.contact") || "Contact Us",
        children: /* @__PURE__ */ jsx(MessageCircle, { className: "w-6 h-6" })
      }
    ),
    showBackToTop && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: scrollToTop,
        className: "bg-ishine-blue-500 hover:bg-ishine-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
        "aria-label": t("floating.backToTop") || "Back to top",
        children: /* @__PURE__ */ jsx(ChevronUp, { className: "w-6 h-6" })
      }
    )
  ] });
};
const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };
  const validateForm = () => {
    var _a, _b, _c, _d, _e;
    const newErrors = {};
    if (!((_a = values.name) == null ? void 0 : _a.trim())) {
      newErrors.name = "Name is required";
    }
    if (!((_b = values.email) == null ? void 0 : _b.trim())) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!((_c = values.phone) == null ? void 0 : _c.trim())) {
      newErrors.phone = "Phone number is required";
    }
    if (!((_d = values.country) == null ? void 0 : _d.trim())) {
      newErrors.country = "Country is required";
    }
    if (!((_e = values.message) == null ? void 0 : _e.trim())) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (onSubmit) => {
    if (!validateForm())
      return;
    setIsSubmitting(true);
    try {
      await onSubmit(values);
      setValues(initialValues);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit
  };
};
const Button = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const baseClasses = "font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const variantClasses = {
    primary: "bg-ishine-blue-500 text-white hover:bg-ishine-blue-600 focus:ring-ishine-blue-500",
    secondary: "bg-ishine-teal-500 text-white hover:bg-ishine-teal-600 focus:ring-ishine-teal-500",
    outline: "border-2 border-ishine-blue-500 text-ishine-blue-500 hover:bg-ishine-blue-500 hover:text-white focus:ring-ishine-blue-500",
    form: "bg-ishine-form-500 text-white hover:bg-ishine-form-600 focus:ring-ishine-form-500"
  };
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  return /* @__PURE__ */ jsx("button", { className: classes, ...props, children });
};
const ContactFormA = () => {
  const [mathQuestion, setMathQuestion] = useState(() => {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    return { a, b, answer: a + b };
  });
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm({
    name: "",
    email: "",
    phone: "",
    country: "",
    business: "",
    timeline: "",
    message: "",
    verification: ""
  });
  const onSubmit = async (data) => {
    if (data.verification !== mathQuestion.answer) {
      alert("Please solve the math question correctly.");
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 1e3));
    alert("Thank you for your inquiry! We will reply within 24 hours.");
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    setMathQuestion({ a, b, answer: a + b });
  };
  return /* @__PURE__ */ jsx("div", { className: "bg-gray-50 py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-2", children: "What's in your mind? Let's talk." }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "we will reply you within 24 hours" })
    ] }),
    /* @__PURE__ */ jsxs("form", { className: "bg-white rounded-lg shadow-lg p-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "contact-name", className: "sr-only", children: "Name" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "contact-name",
              type: "text",
              placeholder: "Name*",
              value: values.name || "",
              onChange: (e) => handleChange("name", e.target.value),
              className: `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ishine-blue-500 focus:border-ishine-blue-500 ${errors.name ? "border-red-500" : "border-gray-300"}`,
              required: true
            }
          ),
          errors.name && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "contact-email", className: "sr-only", children: "Email Address" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "contact-email",
              type: "email",
              placeholder: "Email Address*",
              value: values.email || "",
              onChange: (e) => handleChange("email", e.target.value),
              className: `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ishine-blue-500 focus:border-ishine-blue-500 ${errors.email ? "border-red-500" : "border-gray-300"}`,
              required: true
            }
          ),
          errors.email && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.email })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "contact-phone", className: "sr-only", children: "Phone Number" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "contact-phone",
              type: "tel",
              placeholder: "Phone Number* e.g.(+1-541-3456-3001)",
              value: values.phone || "",
              onChange: (e) => handleChange("phone", e.target.value),
              className: `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ishine-blue-500 focus:border-ishine-blue-500 ${errors.phone ? "border-red-500" : "border-gray-300"}`,
              required: true
            }
          ),
          errors.phone && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.phone })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "contact-country", className: "sr-only", children: "Country" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "contact-country",
              type: "text",
              placeholder: "Country*",
              value: values.country || "",
              onChange: (e) => handleChange("country", e.target.value),
              className: `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ishine-blue-500 focus:border-ishine-blue-500 ${errors.country ? "border-red-500" : "border-gray-300"}`,
              required: true
            }
          ),
          errors.country && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.country })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "contact-business", className: "sr-only", children: "Business Experience" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              id: "contact-business",
              value: values.business || "",
              onChange: (e) => handleChange("business", e.target.value),
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ishine-blue-500 focus:border-ishine-blue-500",
              children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "Are you new in IPL business?" }),
                /* @__PURE__ */ jsx("option", { value: "new", children: "I am new and need more help to start my own IPL project" }),
                /* @__PURE__ */ jsx("option", { value: "experienced", children: "I own a brand and would like to add more IPL production lines" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "contact-timeline", className: "sr-only", children: "Project Timeline" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              id: "contact-timeline",
              value: values.timeline || "",
              onChange: (e) => handleChange("timeline", e.target.value),
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ishine-blue-500 focus:border-ishine-blue-500",
              children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "When do you want to make your own IPL device?" }),
                /* @__PURE__ */ jsx("option", { value: "3months", children: "Within 3 months" }),
                /* @__PURE__ */ jsx("option", { value: "6months", children: "Within 6 months" }),
                /* @__PURE__ */ jsx("option", { value: "1year", children: "1+ year from now on" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "contact-message", className: "sr-only", children: "Message" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            id: "contact-message",
            placeholder: "Describe your needs here*",
            value: values.message || "",
            onChange: (e) => handleChange("message", e.target.value),
            rows: 5,
            className: `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ishine-blue-500 focus:border-ishine-blue-500 ${errors.message ? "border-red-500" : "border-gray-300"}`,
            required: true
          }
        ),
        errors.message && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.message })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 flex items-center space-x-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxs("label", { htmlFor: "math-verification", className: "text-lg font-medium", children: [
          mathQuestion.a,
          " + ",
          mathQuestion.b,
          " ="
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "math-verification",
            type: "number",
            value: values.verification || "",
            onChange: (e) => handleChange("verification", parseInt(e.target.value) || 0),
            className: "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ishine-blue-500 focus:border-ishine-blue-500",
            required: true,
            "aria-label": `Math verification: ${mathQuestion.a} plus ${mathQuestion.b} equals`
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          onClick: () => handleSubmit(onSubmit),
          disabled: isSubmitting,
          className: "w-full",
          children: isSubmitting ? "Sending..." : "Get A Quote!"
        }
      ) })
    ] })
  ] }) });
};
const SEOTags = ({
  title,
  description,
  keywords,
  image,
  canonical,
  noindex = false
}) => {
  const { currentLanguage } = useLanguage();
  const location = useLocation();
  const baseUrl = "https://iplmanufacturer.com";
  const currentPath = location.pathname;
  const getCanonicalUrl = () => {
    if (canonical)
      return canonical;
    if (currentLanguage === "en") {
      const cleanPath = currentPath.replace(/^\/en(\/|$)/, "/").replace(/\/$/, "") || "/";
      return `${baseUrl}${cleanPath === "/" ? "" : cleanPath}`;
    }
    return `${baseUrl}${currentPath}`;
  };
  const generateHreflangLinks = () => {
    const hreflangLinks2 = [];
    const pathWithoutLang = currentPath.replace(/^\/[a-z]{2}(\/|$)/, "/");
    const cleanPath = pathWithoutLang === "/" ? "" : pathWithoutLang.replace(/\/$/, "");
    const supportedLangs2 = languages$1.map((l) => l.code.split("-")[0]);
    supportedLangs2.forEach((langCode) => {
      let href;
      if (langCode === "en") {
        href = `${baseUrl}${cleanPath}`;
      } else {
        href = `${baseUrl}/${langCode}${cleanPath}`;
      }
      hreflangLinks2.push({
        rel: "alternate",
        hreflang: langCode,
        href
      });
    });
    hreflangLinks2.push({
      rel: "alternate",
      hreflang: "x-default",
      href: `${baseUrl}${cleanPath}`
    });
    return hreflangLinks2;
  };
  const hreflangLinks = generateHreflangLinks();
  const canonicalUrl = getCanonicalUrl();
  const finalTitle = title || "iShine - IPL Device Manufacturing Solutions | From Idea to Market";
  const finalDescription = description || "iShine - Leading IPL device manufacturer providing OEM/ODM solutions from idea to market. Custom IPL hair removal devices for global beauty brands.";
  const finalKeywords = keywords || "IPL devices, OEM manufacturing, ODM solutions, hair removal, beauty devices, custom manufacturing";
  const finalImage = image || `${baseUrl}/og-image.jpg`;
  return /* @__PURE__ */ jsxs(Helmet, { children: [
    /* @__PURE__ */ jsx("title", { children: finalTitle }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: finalDescription }),
    /* @__PURE__ */ jsx("meta", { name: "keywords", content: finalKeywords }),
    /* @__PURE__ */ jsx("meta", { name: "author", content: "iShine Manufacturing Co., Ltd." }),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonicalUrl }),
    /* @__PURE__ */ jsx("html", { lang: currentLanguage }),
    hreflangLinks.map((link, index2) => /* @__PURE__ */ jsx(
      "link",
      {
        rel: link.rel,
        hrefLang: link.hreflang,
        href: link.href
      },
      index2
    )),
    noindex && /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex, nofollow" }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: finalTitle }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: finalDescription }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: canonicalUrl }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: finalImage }),
    /* @__PURE__ */ jsx("meta", { property: "og:locale", content: currentLanguage === "zh" ? "zh_CN" : `${currentLanguage}_${currentLanguage.toUpperCase()}` }),
    hreflangLinks.filter((link) => link.hreflang !== "x-default" && link.hreflang !== currentLanguage).map((link, index2) => /* @__PURE__ */ jsx(
      "meta",
      {
        property: "og:locale:alternate",
        content: link.hreflang === "zh" ? "zh_CN" : `${link.hreflang}_${link.hreflang.toUpperCase()}`
      },
      index2
    )),
    /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: finalTitle }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: finalDescription }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: finalImage }),
    /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
    /* @__PURE__ */ jsx("meta", { httpEquiv: "content-language", content: currentLanguage }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "iShine Manufacturing Co., Ltd.",
      "url": baseUrl,
      "logo": `${baseUrl}/logo.png`,
      "description": finalDescription,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+86-xxx-xxxx-xxxx",
        "contactType": "customer service"
      },
      "sameAs": [
        "https://www.linkedin.com/company/ishine-manufacturing"
      ]
    }) })
  ] });
};
const heroBg = "bg-gradient-to-br from-blue-700 via-indigo-500 to-purple-600";
const unlimitedOptions = [
  {
    label: "Color Customization",
    icon: /* @__PURE__ */ jsx(Palette, { className: "w-6 h-6" }),
    content: {
      img: "/homeimages/ipl color customize.png",
      text: [
        /* @__PURE__ */ jsx("span", { style: { fontWeight: 700, fontSize: "1.5em" }, children: "Customize the Color of Your IPL Device" }),
        "You can customize IPL products color according to the Pantone book. We will add the Pantone Color Paste to the ABS material when the material mixed. Our usual colors are White, Red, Translucent, Green, and Gray. We also can make the double color, marble color and multi-colored Molded IPL products for you if you needed.",
        "iShine own the printing workshop for printing the pattern or logo color by Silk Screen printing, Pad printing, Heat Transfer printing and Water Transfer printing, In mold Decoration, Digital printing."
      ],
      cardClass: "bg-[#F3F4F7] rounded-[32px] shadow-lg",
      imgClass: "rounded-[32px] border-4 border-blue-200"
    }
  },
  {
    label: "Logo Printing",
    icon: /* @__PURE__ */ jsx(BadgeCheck, { className: "w-6 h-6" }),
    content: {
      img: "/homeimages/ipl logo printing (2).png",
      text: [
        /* @__PURE__ */ jsxs(Fragment, { children: [
          "iShine helps companies create custom logo IPL products that make your brand stand out. iShine custom Logo IPL products,",
          " ",
          /* @__PURE__ */ jsx(Link, { to: "/blog/promotional-ipl-merchandise", className: "text-blue-700 underline underline-offset-2 hover:text-blue-800 transition", children: "promotional IPL merchandise" }),
          ", and gift giveaways that you’ll love. We offer logo branding services to the",
          " ",
          /* @__PURE__ */ jsx(Link, { to: "/blog/industries", className: "text-blue-700 underline underline-offset-2 hover:text-blue-800 transition", children: "Cosmetics and Hair Removal" }),
          " industries. We work with the Cosmetic brands owners, Marketing and Advertising, Licensor, Licensee, wholesale, retail chain, swimming wear store, and product development companies together offer molded logo",
          " ",
          /* @__PURE__ */ jsx(Link, { to: "/ipl-hair-removal", className: "text-blue-700 underline underline-offset-2 hover:text-blue-800 transition", children: "IPL products" }),
          " to the whole world to expand your brands and Market."
        ] }),
        /* @__PURE__ */ jsxs(Fragment, { children: [
          "In iShine group, we offer different ways to put your logo and pattern on. The different logo and patterns may need different methods.",
          " ",
          /* @__PURE__ */ jsx(Link, { to: "/solutions/logo-printing", className: "text-blue-700 underline underline-offset-2 font-bold hover:text-blue-800 transition", children: "Click Here" }),
          " to get rough information for the different performance with the different printing ways."
        ] })
      ],
      cardClass: "bg-white rounded-2xl shadow-xl border border-blue-100",
      imgClass: "rounded-xl border-2 border-blue-400"
    }
  },
  {
    label: "Function Customization",
    icon: /* @__PURE__ */ jsx(Flame, { className: "w-6 h-6" }),
    content: {
      img: "/homeimages/9 home hair removal device technologies.webp",
      text: [
        /* @__PURE__ */ jsx("span", { style: { fontWeight: 700, fontSize: "1.5em" }, children: "iShine’s Own Eight IPL Device Technologies." }),
        /* @__PURE__ */ jsxs(Fragment, { children: [
          "iShine’s IPL devices feature eight advanced technologies, including:",
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 mt-2 mb-2 space-y-1", children: [
            /* @__PURE__ */ jsx("li", { children: "Hair removal" }),
            /* @__PURE__ */ jsx("li", { children: "Replaceable heads" }),
            /* @__PURE__ */ jsx("li", { children: "Sapphire cooling" }),
            /* @__PURE__ */ jsx("li", { children: "Ice-cooling technology" }),
            /* @__PURE__ */ jsx("li", { children: "App connectivity" }),
            /* @__PURE__ */ jsx("li", { children: "Skin sensor" }),
            /* @__PURE__ */ jsx("li", { children: "Continuous automatic flash" }),
            /* @__PURE__ */ jsx("li", { children: "Skin rejuvenation" })
          ] })
        ] }),
        "All the IPL products iShine made from basic one to smart skin-sensor IPL to meet your different project needs."
      ],
      cardClass: "bg-[#F3F4F7] rounded-[32px] shadow-lg",
      imgClass: "rounded-[32px] border-4 border-blue-200"
    }
  },
  {
    label: "Packaging Design",
    icon: /* @__PURE__ */ jsx(Package, { className: "w-6 h-6" }),
    content: {
      img: "/homeimages/IPL packaging solutions (1).webp",
      text: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Premium packaging for retail, e-commerce, and gifting.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/solutions/packaging-solutions",
            className: "font-bold underline text-blue-700 hover:text-blue-800 transition ml-1",
            style: { textUnderlineOffset: 3 },
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Click Here"
          }
        ),
        " to explore the packaging solutions you’ll love."
      ] }),
      cardClass: "bg-[#F3F4F7] rounded-[32px] shadow-lg",
      imgClass: "rounded-[32px] border-4 border-blue-200"
    }
  },
  {
    label: "Certification",
    icon: /* @__PURE__ */ jsx(CheckCircle, { className: "w-6 h-6" }),
    content: {
      img: [
        "https://github.com/WHONOTDESIGNIT/06261636/blob/main/homeimages/FDA_IPL_ISHINE.png",
        "https://github.com/WHONOTDESIGNIT/06261636/blob/main/homeimages/iso13485%20cert%20ishine.png",
        "https://raw.githubusercontent.com/WHONOTDESIGNIT/06261636/main/homeimages/MDL_IPL-ISHINE.png"
      ],
      text: "",
      cardClass: "bg-[#F3F4F7] rounded-[32px] shadow-lg",
      imgClass: "rounded-[32px] border-4 border-blue-200"
    }
  },
  {
    label: "Quality Control",
    icon: /* @__PURE__ */ jsx(ThumbsUp, { className: "w-6 h-6" }),
    content: {
      img: [
        "/homeimages/quality-control-room-ishine.png",
        "/homeimages/quality-control-ishine.png"
      ],
      cardClass: "bg-[#F3F4F7] rounded-[32px] shadow-lg",
      imgClass: "rounded-[32px] border-4 border-blue-200"
    }
  }
];
const processSteps = [
  { img: "/step1.jpg", title: "Consultation", desc: "" },
  { img: "/step2.jpg", title: "Product Design", desc: "" },
  { img: "/step3.jpg", title: "Prototyping & Sample Confirmation", desc: "" },
  { img: "/step4.jpg", title: "Printing", desc: "" },
  { img: "/step5.jpg", title: "Mass Production", desc: "" },
  { img: "/step6.jpg", title: "IPQC", desc: "" },
  { img: "/step7.jpg", title: "OQC", desc: "" },
  { img: "/step8.jpg", title: "Packaging & Shipping", desc: "" }
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
    a: /* @__PURE__ */ jsx("span", { children: "IPL (Intense Pulsed Light) uses broad-spectrum light to target hair follicles, reducing hair growth safely and effectively." })
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
    a: (lang) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { style: { marginTop: "56px" }, children: "Absolutely. We offer reliable worldwide shipping to support your business wherever you are." }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 my-2", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("b", { children: "Global Logistics Coverage:" }),
          " Yes, we provide international shipping solutions with tracking codes for every order."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("b", { children: "Transparent Shipping Costs:" }),
          " Shipping fees are calculated based on your order's weight and quantity."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          "Click on the ",
          /* @__PURE__ */ jsx(Link, { to: `/${lang}/shipping-cost`, className: "text-blue-700 font-bold underline underline-offset-2 hover:text-blue-800 transition", children: "Check Shipping Cost" }),
          " button."
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-2", children: /* @__PURE__ */ jsx("b", { children: "How to Check Your Shipping Cost:" }) }),
      /* @__PURE__ */ jsxs("ol", { className: "list-decimal pl-5 my-2", children: [
        /* @__PURE__ */ jsx("li", { children: "Enter your order details (weight/quantity)." }),
        /* @__PURE__ */ jsx("li", { children: "Instantly view the corresponding shipping rates and options." }),
        /* @__PURE__ */ jsx("li", { children: "Track your shipment anytime with the provided logistics code after dispatch." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-2", children: "Need help? Our team is here to assist you with any shipping or logistics questions." })
    ] })
  }
];
const galleryImages = [
  {
    src: "/homeimages/home-ipl-hair-removal-device-incoming-material-testing.webp",
    alt: "Home IPL hair removal device incoming material testing and quality control process"
  },
  {
    src: "/homeimages/home-ipl-hair-removal-device-packaging-process.webp",
    alt: "Professional packaging process for home IPL hair removal devices"
  },
  {
    src: "/homeimages/home-ipl-hair-removal-device-warehouse-storage.webp",
    alt: "Modern warehouse facility for home IPL hair removal device storage and distribution"
  },
  {
    src: "/homeimages/research-department-ishine.webp",
    alt: "iShine research and development department for IPL technology innovation"
  }
];
const processIcons = [
  Send,
  // Consultation
  Palette,
  // Design & Prototyping
  BadgeCheck,
  // Sample Confirmation
  Settings,
  // Mass Production
  CheckCircle,
  // Quality Inspection
  BadgeCheck,
  // Certification
  Package,
  // Global Shipping
  ThumbsUp
  // After-Sales Service
];
function HomePage() {
  const [optionIdx, setOptionIdx] = useState(0);
  const [qaOpen, setQaOpen] = useState(null);
  const [testimonialPage, setTestimonialPage] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const { currentLanguage, t } = useLanguage();
  return /* @__PURE__ */ jsxs("div", { className: "font-inter bg-[#F8FAFC] text-[#22223B]", children: [
    /* @__PURE__ */ jsx(
      SEOTags,
      {
        title: t("home.seo.title", "iShine - Custom IPL Hair Removal Device Manufacturing | OEM/ODM Solutions"),
        description: t("home.seo.description", "Leading IPL device manufacturer providing custom OEM/ODM solutions. Design, build, and brand your own IPL hair removal devices with iShine."),
        keywords: t("home.seo.keywords", "IPL hair removal devices, custom manufacturing, OEM ODM, beauty device manufacturing, IPL device manufacturer")
      }
    ),
    /* @__PURE__ */ jsx("section", { className: `${heroBg} min-h-[66vh] flex flex-col justify-center items-center text-white relative overflow-hidden`, children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl text-center pt-14", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl md:text-6xl font-bold mb-4 drop-shadow-lg", children: t("home.hero.title1", "Custom IPL Hair Removal Devices for Cosmetics Brands") }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-2xl mb-8 font-medium drop-shadow mt-8", children: t("home.hero.subtitle", "You design it, we build it and box it.") }),
      /* @__PURE__ */ jsx(Link, { to: "#contact", className: "inline-block px-8 py-3 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:bg-blue-100 transition", children: t("home.hero.cta", "Get a Free Quote") })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 md:px-0 bg-gradient-to-r from-blue-100 via-white to-purple-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-center h-full", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4 text-blue-700", children: t("home.about.title", "About iShine") }),
        /* @__PURE__ */ jsx("p", { className: "text-lg mb-6 text-blue-700", children: t("home.about.subtitle", "One-stop IPL solutions.") }),
        /* @__PURE__ */ jsx(Link, { to: "#contact", className: "inline-block px-6 py-2 bg-blue-700 text-white font-semibold rounded-full shadow hover:bg-blue-800 transition", children: t("home.about.cta", "Read More") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-lg", children: [
        t("home.about.description1", "iShine Tech Co., Limited, is one-stop supplier for"),
        " ",
        /* @__PURE__ */ jsx(Link, { to: `/${currentLanguage}/service-support/manufacturing`, className: "text-blue-700 underline underline-offset-2 decoration-blue-700 hover:text-blue-800 hover:decoration-blue-800 transition", children: t("home.about.manufacturing", "IPL hair removal devices manufacturing") }),
        " ",
        t("home.about.and", "and"),
        " ",
        /* @__PURE__ */ jsx(Link, { to: `/${currentLanguage}/solutions/brand-customization`, className: "text-blue-700 underline underline-offset-2 decoration-blue-700 hover:text-blue-800 hover:decoration-blue-800 transition", children: t("home.about.customization", "customization") }),
        ". ",
        t("home.about.description2", "Help you design it, build it and box it. From idea to market.")
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-lg", children: t("home.about.description3", "We have the capability for Custom ice cooling IPL, Smart APP-connected IPL device, Skin Sensor IPL device. iShine provide solutions that best fit for your brand identity.") })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 md:px-0", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full aspect-video rounded-xl overflow-hidden shadow-lg", children: /* @__PURE__ */ jsx(
        "iframe",
        {
          src: "https://www.youtube.com/embed/1QZLr0yQ2nY",
          title: "iShine IPL Hair Removal Device Manufacturing",
          frameBorder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true,
          className: "w-full h-full"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "text-lg", children: t("home.video.description", "Watch how iShine brings your IPL device ideas to life, from design to delivery. Our advanced manufacturing and strict quality control ensure your brand stands out in the beauty market.") })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-16 px-4 md:px-0 flex flex-col items-center", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "relative flex items-center w-full max-w-5xl",
          style: { height: 400 },
          children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-60 rounded-full w-12 h-12 flex items-center justify-center text-white hover:bg-opacity-80 transition",
                onClick: () => setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length),
                "aria-label": "Previous",
                style: { left: 0 },
                children: /* @__PURE__ */ jsx("svg", { width: "24", height: "24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("polyline", { points: "15 18 9 12 15 6" }) })
              }
            ),
            /* @__PURE__ */ jsx(
              "img",
              {
                src: galleryImages[(galleryIndex - 1 + galleryImages.length) % galleryImages.length].src,
                alt: galleryImages[(galleryIndex - 1 + galleryImages.length) % galleryImages.length].alt,
                className: "rounded-xl opacity-70 hover:opacity-90 transition-opacity cursor-pointer",
                style: { width: "15%", height: "100%", objectFit: "cover", marginRight: 10 },
                onClick: () => setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
              }
            ),
            /* @__PURE__ */ jsx(
              "img",
              {
                src: galleryImages[galleryIndex].src,
                alt: galleryImages[galleryIndex].alt,
                className: "rounded-2xl z-10 shadow-lg",
                style: { width: "70%", height: "100%", objectFit: "cover" }
              }
            ),
            /* @__PURE__ */ jsx(
              "img",
              {
                src: galleryImages[(galleryIndex + 1) % galleryImages.length].src,
                alt: galleryImages[(galleryIndex + 1) % galleryImages.length].alt,
                className: "rounded-xl opacity-70 hover:opacity-90 transition-opacity cursor-pointer",
                style: { width: "15%", height: "100%", objectFit: "cover", marginLeft: 10 },
                onClick: () => setGalleryIndex((prev) => (prev + 1) % galleryImages.length)
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-60 rounded-full w-12 h-12 flex items-center justify-center text-white hover:bg-opacity-80 transition",
                onClick: () => setGalleryIndex((prev) => (prev + 1) % galleryImages.length),
                "aria-label": "Next",
                style: { right: 0 },
                children: /* @__PURE__ */ jsx("svg", { width: "24", height: "24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("polyline", { points: "9 18 15 12 9 6" }) })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex gap-4 mt-6", children: galleryImages.map((_, idx) => /* @__PURE__ */ jsx(
        "span",
        {
          className: `block rounded-full transition-colors duration-200 cursor-pointer`,
          style: {
            width: 8,
            height: 8,
            background: galleryIndex === idx ? "rgb(64,64,64)" : "rgb(191,191,191)",
            border: "none",
            boxShadow: galleryIndex === idx ? "0 0 0 2px #222" : "none"
          },
          onMouseEnter: () => setGalleryIndex(idx),
          onClick: () => setGalleryIndex(idx),
          onMouseOver: (e) => e.currentTarget.style.background = "black",
          onMouseOut: (e) => e.currentTarget.style.background = galleryIndex === idx ? "rgb(64,64,64)" : "rgb(191,191,191)"
        },
        idx
      )) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 md:px-0 bg-gradient-to-br from-blue-50 via-white to-purple-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-5xl font-bold mb-4 text-blue-700 text-center", children: t("home.productShowcase.title", "CUSTMIZED IPL DEVICES") }),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mb-4 text-blue-700 text-center", children: t("home.productShowcase.subtitle", "You design it, we build it, box it") }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "w-32 h-1 mb-4 mt-8", style: { background: "rgb(239,187,32)" } }),
        /* @__PURE__ */ jsxs("p", { className: "text-lg text-gray-700 max-w-5.5xl text-justify mt-8", children: [
          t("home.productShowcase.description", "iShine is a full-service custom IPL products manufacturer offering end-to-end customization, from mold development and prototyping to mass production and packaging. iShine already customized more than 1,000 custom devices IPL projects for our partner in the past with much experience in IPL products Technical solution and Compliance solution."),
          " ",
          /* @__PURE__ */ jsx("p", { children: t("home.productShowcase.include", "The custom IPL products include:") })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8", children: iplDevices.slice(0, 9).map((product) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl p-6 flex flex-col items-center shadow-lg border border-gray-400", children: [
        /* @__PURE__ */ jsx("img", { src: product.image, alt: product.name, className: "w-100 h-100 object-contain mb-4 rounded-lg" }),
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg text-center", children: product.name })
      ] }, product.id)) }),
      /* @__PURE__ */ jsxs("div", { className: "w-full mt-10 mb-2 p-6 bg-transparent rounded-xl text-gray-800 text-base leading-relaxed", style: { boxShadow: "none" }, children: [
        /* @__PURE__ */ jsx("p", { className: "mb-2 font-semibold text-lg text-blue-700", children: "All iShine home IPL hair removal devices are designed for long-lasting performance and user safety. Built with advanced materials and precision engineering, these devices are:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Resistant to temperature fluctuations (operating range: -10 °C to 45 °C), as well as common household chemicals and UV exposure." }),
          /* @__PURE__ */ jsx("li", { children: "Easy to clean and maintain, with a smooth, ergonomic design that fits comfortably in the hand." }),
          /* @__PURE__ */ jsx("li", { children: "Available in a variety of shapes, sizes, and modern color options to suit different preferences and needs." }),
          /* @__PURE__ */ jsx("li", { children: "Lightweight, soft-touch, and flexible for comfortable handling during treatments." }),
          /* @__PURE__ */ jsx("li", { children: "Free from PVC, BPA, phthalates, and lead—safe for direct skin contact, non-toxic, and harmless for all users." }),
          /* @__PURE__ */ jsx("li", { children: "Environmentally conscious: made with recyclable components and energy-efficient technology." }),
          /* @__PURE__ */ jsx("li", { children: "Equipped with medical-grade biocompatible materials for safe use on all suitable skin types." }),
          /* @__PURE__ */ jsx("li", { children: "Designed with user-friendly features such as intuitive controls, multiple intensity settings, and built-in skin sensors for added safety." }),
          /* @__PURE__ */ jsx("li", { children: "Compliant with international safety standards and suitable for home use, providing professional-level results with minimal discomfort." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-16 px-4 md:px-0 bg-gradient-to-r from-blue-100 via-white to-purple-100", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-6xl font-bold mb-2 text-center text-blue-700", children: t("home.customization.title", "Unlimited Customization Options") }),
        /* @__PURE__ */ jsx("p", { className: "text-center mb-8 text-lg", style: { marginBottom: "2.5rem" }, children: "iShine offers a wide range of customization options for you. You can work with us to create unique and competitive IPL devices for your business." }),
        /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-nowrap justify-center gap-2 mb-8", children: unlimitedOptions.map((opt, idx) => /* @__PURE__ */ jsxs(
            "button",
            {
              className: `flex items-center gap-2 px-4 py-3 rounded-full font-semibold border transition whitespace-nowrap ${optionIdx === idx ? "bg-blue-700 text-white" : "bg-white text-blue-700 border-blue-700"} hover:bg-blue-700 hover:text-white`,
              onClick: () => setOptionIdx(idx),
              children: [
                opt.icon,
                t(`home.customization.options.${idx}.label`, opt.label)
              ]
            },
            opt.label
          )) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `p-6 min-h-[500px] flex items-center justify-center transition-all ${unlimitedOptions[optionIdx].content.cardClass || "bg-[#F3F4F7] rounded-2xl shadow-lg"}`,
              children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-start gap-8 w-full h-full justify-center overflow-x-auto", children: [
                optionIdx === 5 ? /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col items-start", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-start w-full gap-8 mb-4", children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: "/homeimages/quality-control-ishine.png",
                        alt: "Quality Control",
                        style: { width: "300px", height: "217px", objectFit: "contain" },
                        className: "object-contain rounded-2xl flex-shrink-0"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "text-base text-gray-700 font-medium",
                        style: { width: "600px" },
                        children: "Custom your IPL products Quality Control Inspection. Our common IPL products Quality Control Inspection is from supplier selection, production specification, In-process Inspection, Before shipment inspection (OQC). We also accept the customer hire the 3rd party to pre-shipment QC include Full inspection if needed."
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-6 w-full mt-2", children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: "/homeimages/quality-control-room-ishine.png",
                        alt: "Quality Control Room",
                        style: { height: "258.59px", width: "auto", objectFit: "contain" },
                        className: "object-contain rounded-2xl flex-shrink-0"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: "/homeimages/flash test.png",
                        alt: "Flash Test",
                        style: { height: "258.59px", width: "auto", objectFit: "contain" },
                        className: "object-contain rounded-2xl flex-shrink-0"
                      }
                    )
                  ] })
                ] }) : Array.isArray(unlimitedOptions[optionIdx].content.img) ? /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "row", gap: "16px", width: "1264px" }, children: unlimitedOptions[optionIdx].content.img.map((src, idx) => /* @__PURE__ */ jsxs("div", { className: optionIdx === 5 ? "flex flex-col items-start" : "flex flex-col items-center", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src,
                      alt: unlimitedOptions[optionIdx].label + " " + (idx + 1),
                      style: optionIdx === 5 ? { height: "217px", width: "auto", objectFit: "contain", marginBottom: "8px" } : { width: "572px", height: "572px", objectFit: "contain", marginBottom: "8px" },
                      className: "object-contain rounded-2xl flex-shrink-0"
                    }
                  ),
                  optionIdx === 4 && /* @__PURE__ */ jsx("div", { className: "text-center text-base text-gray-700 font-medium", style: { position: "relative", top: "-18px" }, children: [
                    "FDA 510(k) Certificate",
                    "ISO 13485 Medical Device Quality Management Certificate",
                    "MDL (Canada) Medical Device Listing"
                  ][idx] })
                ] }, idx)) }) : /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: unlimitedOptions[optionIdx].content.img,
                    alt: unlimitedOptions[optionIdx].label,
                    style: optionIdx === 2 ? { width: "600px", height: "600px" } : optionIdx === 3 ? { width: "600px", height: "387.5px" } : optionIdx === 5 ? { height: "217px", width: "auto" } : { width: "600px", height: "337.5px" },
                    className: "object-cover rounded-2xl flex-shrink-0"
                  }
                ),
                optionIdx !== 4 && optionIdx !== 5 && /* @__PURE__ */ jsx("div", { className: "flex-1 w-full text-left max-w-full", children: Array.isArray(unlimitedOptions[optionIdx].content.text) ? unlimitedOptions[optionIdx].content.text.map((p, i, arr) => /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("p", { className: "mb-4 last:mb-0", children: typeof p === "string" ? t(`home.customization.options.${optionIdx}.content.text.${i}`, p) : p }, i),
                  i === 0 && arr.length > 1 && /* @__PURE__ */ jsx("p", { className: "my-4" }, "gap"),
                  optionIdx === 2 && i === arr.length - 1 && /* @__PURE__ */ jsx("div", { className: "mt-6 flex justify-start", children: /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: "/solutions",
                      className: "inline-block px-8 py-3 bg-blue-700 text-white font-bold rounded-full shadow hover:bg-blue-800 transition",
                      children: "Ask Our Expert"
                    }
                  ) })
                ] })) : t(
                  `home.customization.options.${optionIdx}.content.text`,
                  typeof unlimitedOptions[optionIdx].content.text === "string" ? unlimitedOptions[optionIdx].content.text : void 0
                ) })
              ] })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mt-12 max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-5xl font-bold text-blue-700 mb-2 text-center", children: "More Support" }),
        /* @__PURE__ */ jsx("div", { className: "h-16 md:h-[3.75rem]" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg mb-6 text-gray-700 text-center", children: "Flexible customization, providing sample testing and design assistance services." }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-base", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "w-6 h-6 text-blue-700 mt-1 flex-shrink-0" }),
            "MOQ: 1000 pcs by new IPL devices developments."
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "w-6 h-6 text-blue-700 mt-1 flex-shrink-0" }),
            "Prototype time: 30-100 days for IPL prototypes samples making."
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "w-6 h-6 text-blue-700 mt-1 flex-shrink-0" }),
            "Mass Production time: 30–45 days with quanity in 3,000-300,000pcs."
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "w-6 h-6 text-blue-700 mt-1 flex-shrink-0" }),
            "Certified: FDA, TGA, MDL, REACH Products compliant by SGS, Intertek,BV etc.ISO13485 Certified Factory."
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 md:px-0 bg-gradient-to-br from-blue-50 via-white to-purple-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-2 text-center", children: "The Process of Customized IPL products" }),
      /* @__PURE__ */ jsx("p", { className: "text-center mb-8 text-lg", children: t("home.process.subtitle", "From idea to delivery, we make your IPL device project successful.") }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8", children: processSteps.map((step, i) => {
        const Icon = processIcons[i % processIcons.length];
        return /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl p-6 flex flex-col items-center shadow-lg", children: [
          /* @__PURE__ */ jsx(Icon, { className: "w-16 h-16 text-blue-700 mb-4" }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-base mb-1", children: `${i + 1}. ${t(`home.process.steps.${i}.title`, step.title)}` }),
          /* @__PURE__ */ jsx("p", { className: "text-center text-sm", children: t(`home.process.steps.${i}.desc`, step.desc) })
        ] }, i);
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 md:px-0", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 text-center", children: t("home.testimonials.title", "What Our Clients Say") }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-6", children: testimonials.slice(testimonialPage * 3, testimonialPage * 3 + 3).map((tk, i) => /* @__PURE__ */ jsx("div", { className: "bg-white rounded-xl p-6 shadow-lg text-center text-lg italic", children: t(`home.testimonials.${testimonialPage * 3 + i}`, tk) }, i)) }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-2", children: [0, 1].map((i) => /* @__PURE__ */ jsx(
        "button",
        {
          className: `w-3 h-3 rounded-full ${testimonialPage === i ? "bg-blue-700" : "bg-blue-200"}`,
          onClick: () => setTestimonialPage(i),
          "aria-label": t("home.testimonials.pageButton", `Go to testimonials page ${i + 1}`)
        },
        i
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 md:px-0", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 text-center", children: t("home.faq.title", "Frequently Asked Questions") }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-6", children: qaList.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `
                    flex items-center justify-between
                    rounded-xl px-6 py-4 cursor-pointer
                    border-2 border-blue-700
                    bg-blue-700 text-white
                    hover:bg-white hover:text-blue-700
                    transition-colors duration-200
                    min-h-[56px]  // 你可以根据实际需要设置固定高度
                  `,
            onClick: () => setQaOpen(qaOpen === idx ? null : idx),
            style: { transition: "background 0.2s, color 0.2s" },
            children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold", children: t(`home.faq.${idx}.q`, item.q) }),
              /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(ChevronDown, { className: `w-5 h-5 transition-transform ${qaOpen === idx ? "rotate-180" : ""}` }) })
            ]
          }
        ),
        qaOpen === idx && /* @__PURE__ */ jsx("div", { className: "px-6 py-4 bg-transparent text-base", children: typeof item.a === "function" ? item.a(currentLanguage) : typeof item.a === "string" ? t(`home.faq.${idx}.a`, item.a) : item.a })
      ] }, idx)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "contact", className: "py-16 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center mb-6", children: t("home.contact.title", "Contact Us") }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-gray-700 mb-8", children: t("home.contact.subtitle", "Ready to empower your brand? Get in touch for a free consultation and quote.") }),
      /* @__PURE__ */ jsx(ContactFormA, {})
    ] }) })
  ] });
}
const Solutions = lazy(() => import("./assets/Solutions-49680434.js"));
const IPLHairRemoval = lazy(() => import("./assets/IPLHairRemoval-580a9171.js"));
const HowToUse = lazy(() => import("./assets/HowToUse-483a8747.js"));
const About = lazy(() => import("./assets/About-09e585cb.js"));
const Contact = lazy(() => import("./assets/Contact-9ddce6b7.js"));
const LogoPrinting = lazy(() => import("./assets/LogoPrinting-17f23055.js"));
const PackagingSolutions = lazy(() => import("./assets/PackagingSolutions-f1d674e8.js"));
const DropShipping = lazy(() => import("./assets/DropShipping-a539bd1a.js"));
const GlobalShipping = lazy(() => import("./assets/GlobalShipping-31c5ad6c.js"));
const BrandCustomization = lazy(() => import("./assets/BrandCustomization-33a80607.js"));
const Compliance = lazy(() => import("./assets/Compliance-31c5ad6c.js"));
const DesignPrototyping = lazy(() => import("./assets/DesignPrototyping-145b4d06.js"));
const MultiHeadIPL = lazy(() => import("./assets/MultiHeadIPL-75599ec5.js"));
const DualLampIPL = lazy(() => import("./assets/DualLampIPL-4a5002c5.js"));
const SmartAppIPL = lazy(() => import("./assets/SmartAppIPL-be9ad745.js"));
const IceFeelingIPL = lazy(() => import("./assets/IceFeelingIPL-7d5f4269.js"));
const EmeraldIPL = lazy(() => import("./assets/EmeraldIPL-ad5806f3.js"));
const SkinSensorIPL = lazy(() => import("./assets/SkinSensorIPL-c0cc6adf.js"));
const BatteryPoweredIPL = lazy(() => import("./assets/BatteryPoweredIPL-8c686b76.js"));
const HandheldIPL = lazy(() => import("./assets/HandheldIPL-e70e2e21.js"));
const IceCoolingIPL = lazy(() => import("./assets/IceCoolingIPL-755b4cae.js"));
const DualLampIPLDevice = lazy(() => import("./assets/DualLampIPLDevice-65c1f79f.js"));
const AIPoweredIPL = lazy(() => import("./assets/AIPoweredIPL-e1f8c79e.js"));
const SapphireLens = lazy(() => import("./assets/SapphireLens-cda0bacd.js"));
const Adapter = lazy(() => import("./assets/Adapter-8bf4309c.js"));
const ProtectiveGoggles = lazy(() => import("./assets/ProtectiveGoggles-b78a8f42.js"));
const Filter = lazy(() => import("./assets/Filter-6e2e4a7a.js"));
const AfterSalesService = lazy(() => import("./assets/AfterSalesService-48d6f18a.js"));
const WinFDAListing = lazy(() => import("./assets/WinFDAListing-d6e2b6c7.js"));
const IPLManufacturing = lazy(() => import("./assets/IPLManufacturing-f7ccd901.js"));
const KnowledgeBase = lazy(() => import("./assets/KnowledgeBase-19c65ca9.js"));
const BeautySourcing = lazy(() => import("./assets/BeautySourcing-2dcfaeb1.js"));
const PricingGuide = lazy(() => import("./assets/PricingGuide-d40e49b8.js"));
const HelpCenter = lazy(() => import("./assets/HelpCenter-c7a49e48.js"));
const Gallery = lazy(() => import("./assets/Gallery-3bb592d9.js"));
const Videos = lazy(() => import("./assets/Videos-04d82329.js"));
const ServiceSupport = lazy(() => import("./assets/ServiceSupport-55787567.js"));
const NewsInsights = lazy(() => import("./assets/NewsInsights-7275049b.js"));
const Industries = lazy(() => import("./assets/Industries-8ca4f5ab.js"));
const IPLBestChoice = lazy(() => import("./assets/IPLBestChoice-4ac5da0f.js"));
const FutureHomeHairRemoval = lazy(() => import("./assets/FutureHomeHairRemoval-c03a6f8e.js"));
const FDA510kPathway = lazy(() => import("./assets/FDA510kPathway-62ce6b91.js"));
const MultiHeadIPLSystems = lazy(() => import("./assets/MultiHeadIPLSystems-dc7d3983.js"));
const AIPoweredSkinSensing = lazy(() => import("./assets/AIPoweredSkinSensing-0dd8f488.js"));
const GlobalMarketShifts = lazy(() => import("./assets/GlobalMarketShifts-c830d012.js"));
const SustainableManufacturing = lazy(() => import("./assets/SustainableManufacturing-5996a841.js"));
const FounderMessage = lazy(() => import("./assets/FounderMessage-b9960891.js"));
const Technology = lazy(() => import("./assets/Technology-e51047dd.js"));
const GlobalWitness = lazy(() => import("./assets/GlobalWitness-67790da8.js"));
const CorePrinciples = lazy(() => import("./assets/CorePrinciples-82c3a03a.js"));
const CompanyInfo = lazy(() => import("./assets/CompanyInfo-8b54b661.js"));
const BrandStory = lazy(() => import("./assets/BrandStory-ffb49217.js"));
const Quality = lazy(() => import("./assets/Quality-9e1f267e.js"));
const CountryPage = lazy(() => import("./assets/CountryPage-8d188236.js"));
const Sitemap = lazy(() => import("./assets/Sitemap-bee554bc.js"));
const ShippingCostPage = lazy(() => import("./assets/shipping-cost-46e01500.js"));
const AdminPage = lazy(() => import("./assets/Admin-afeafbba.js"));
const LoadingSpinner = () => /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-32 w-32 border-b-2 border-ishine-blue-500" }) });
const NotFound = () => /* @__PURE__ */ jsxs("div", { style: { padding: "4rem", textAlign: "center" }, children: [
  /* @__PURE__ */ jsx("h1", { children: "404 - Page Not Found" }),
  /* @__PURE__ */ jsx("p", { children: "The page you are looking for does not exist." })
] });
const supportedLangs = languages$1.map((l) => l.code.split("-")[0]);
const MainLayout = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(LoadingSpinner, {}), children: /* @__PURE__ */ jsx(Outlet, {}) }) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(FloatingWidgets, {})
  ] });
};
const LanguageGuard = () => {
  const { lang } = useParams();
  const currentLang = lang || "en";
  const isValidLang = supportedLangs.includes(currentLang);
  if (!isValidLang) {
    return /* @__PURE__ */ jsx(NotFound, {});
  }
  return /* @__PURE__ */ jsx(MainLayout, {});
};
const App = () => {
  return /* @__PURE__ */ jsx(HelmetProvider, { children: /* @__PURE__ */ jsx(BrowserRouter, { children: /* @__PURE__ */ jsx(LanguageProvider, { children: /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(HomePage, {}) }),
    /* @__PURE__ */ jsxs(Route, { path: "/:lang", element: /* @__PURE__ */ jsx(LanguageGuard, {}), children: [
      /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsx(HomePage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "solutions", element: /* @__PURE__ */ jsx(Solutions, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "solutions/logo-printing", element: /* @__PURE__ */ jsx(LogoPrinting, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "solutions/packaging-solutions", element: /* @__PURE__ */ jsx(PackagingSolutions, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "solutions/drop-shipping", element: /* @__PURE__ */ jsx(DropShipping, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "solutions/global-shipping", element: /* @__PURE__ */ jsx(GlobalShipping, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "solutions/brand-customization", element: /* @__PURE__ */ jsx(BrandCustomization, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "solutions/compliance", element: /* @__PURE__ */ jsx(Compliance, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "solutions/design-prototyping", element: /* @__PURE__ */ jsx(DesignPrototyping, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "solutions/multi-head-ipl", element: /* @__PURE__ */ jsx(MultiHeadIPL, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "solutions/dual-lamp-ipl", element: /* @__PURE__ */ jsx(DualLampIPL, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "ipl-hair-removal", element: /* @__PURE__ */ jsx(IPLHairRemoval, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "ipl/smart-app-ipl", element: /* @__PURE__ */ jsx(SmartAppIPL, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "ipl/ice-feeling-ipl", element: /* @__PURE__ */ jsx(IceFeelingIPL, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "ipl/emerald-ipl", element: /* @__PURE__ */ jsx(EmeraldIPL, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "ipl/skin-sensor-ipl", element: /* @__PURE__ */ jsx(SkinSensorIPL, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "ipl/battery-powered-ipl", element: /* @__PURE__ */ jsx(BatteryPoweredIPL, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "ipl/handheld-ipl", element: /* @__PURE__ */ jsx(HandheldIPL, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "ipl/ice-cooling-ipl", element: /* @__PURE__ */ jsx(IceCoolingIPL, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "ipl/dual-lamp-ipl-device", element: /* @__PURE__ */ jsx(DualLampIPLDevice, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "ipl/ai-powered-ipl", element: /* @__PURE__ */ jsx(AIPoweredIPL, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "accessories/sapphire-lens", element: /* @__PURE__ */ jsx(SapphireLens, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "accessories/adapter", element: /* @__PURE__ */ jsx(Adapter, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "accessories/protective-goggles", element: /* @__PURE__ */ jsx(ProtectiveGoggles, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "accessories/filter", element: /* @__PURE__ */ jsx(Filter, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "service-support", element: /* @__PURE__ */ jsx(ServiceSupport, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "service/after-sales-service", element: /* @__PURE__ */ jsx(AfterSalesService, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "service/win-fda-listing", element: /* @__PURE__ */ jsx(WinFDAListing, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "service/ipl-manufacturing", element: /* @__PURE__ */ jsx(IPLManufacturing, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "service/knowledge-base", element: /* @__PURE__ */ jsx(KnowledgeBase, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "service/beauty-sourcing", element: /* @__PURE__ */ jsx(BeautySourcing, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "service/pricing-guide", element: /* @__PURE__ */ jsx(PricingGuide, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "service/help-center", element: /* @__PURE__ */ jsx(HelpCenter, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "service/gallery", element: /* @__PURE__ */ jsx(Gallery, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "service/videos", element: /* @__PURE__ */ jsx(Videos, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "blog/news-insights", element: /* @__PURE__ */ jsx(NewsInsights, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "blog/industries", element: /* @__PURE__ */ jsx(Industries, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "blog/ipl-best-choice", element: /* @__PURE__ */ jsx(IPLBestChoice, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "blog/future-home-hair-removal", element: /* @__PURE__ */ jsx(FutureHomeHairRemoval, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "blog/fda-510k-pathway", element: /* @__PURE__ */ jsx(FDA510kPathway, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "blog/multi-head-ipl-systems", element: /* @__PURE__ */ jsx(MultiHeadIPLSystems, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "blog/ai-powered-skin-sensing", element: /* @__PURE__ */ jsx(AIPoweredSkinSensing, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "blog/global-market-shifts", element: /* @__PURE__ */ jsx(GlobalMarketShifts, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "blog/sustainable-manufacturing", element: /* @__PURE__ */ jsx(SustainableManufacturing, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "how-to-use", element: /* @__PURE__ */ jsx(HowToUse, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "about", element: /* @__PURE__ */ jsx(About, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "about/founder-message", element: /* @__PURE__ */ jsx(FounderMessage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "about/technology", element: /* @__PURE__ */ jsx(Technology, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "about/global-witness", element: /* @__PURE__ */ jsx(GlobalWitness, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "about/core-principles", element: /* @__PURE__ */ jsx(CorePrinciples, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "about/company-info", element: /* @__PURE__ */ jsx(CompanyInfo, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "about/brand-story", element: /* @__PURE__ */ jsx(BrandStory, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "about/quality", element: /* @__PURE__ */ jsx(Quality, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "contact", element: /* @__PURE__ */ jsx(Contact, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "country/:countryCode", element: /* @__PURE__ */ jsx(CountryPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "sitemap", element: /* @__PURE__ */ jsx(Sitemap, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "shipping-cost", element: /* @__PURE__ */ jsx(ShippingCostPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "admin", element: /* @__PURE__ */ jsx(AdminPage, {}) })
    ] }),
    /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NotFound, {}) })
  ] }) }) }) });
};
const index = "";
const routes = [];
const createApp = ViteSSG(
  App,
  { routes },
  () => {
  }
);
export {
  Button as B,
  ContactFormA as C,
  HomePage as H,
  SEOTags as S,
  accessories as a,
  useForm as b,
  useTranslation as c,
  createApp,
  iplDevices as i,
  useLanguage as u
};
