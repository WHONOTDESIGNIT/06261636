import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Minus, Plus, ShoppingCart, Shield, Truck, Award, Eye, Check, Info } from "lucide-react";
import { u as useLanguage, S as SEOTags, C as ContactFormA } from "../main.ssg.mjs";
import { B as Breadcrumbs } from "./Breadcrumbs-9e177a61.js";
import "vite-ssg";
import "react-router-dom";
import "react-helmet-async";
const SkinSensorIPL = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const productImages = [
    "/images/skin-sensor-ipl/skin-sensor-ipl-front.jpg",
    "/images/skin-sensor-ipl/skin-sensor-ipl-sensor-detail.jpg",
    "/images/skin-sensor-ipl/skin-sensor-ipl-side-view.jpg",
    "/images/skin-sensor-ipl/skin-sensor-ipl-usage.jpg",
    "/images/skin-sensor-ipl/skin-sensor-ipl-features.jpg",
    "/images/skin-sensor-ipl/skin-sensor-ipl-package.jpg",
    "/images/skin-sensor-ipl/skin-sensor-ipl-comparison.jpg",
    "/images/skin-sensor-ipl/skin-sensor-ipl-accessories.jpg"
  ];
  const thumbnails = productImages.map((img) => img);
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };
  const increaseQuantity = () => {
    if (quantity < 10)
      setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1)
      setQuantity(quantity - 1);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOTags,
      {
        title: "Skin Sensor IPL Device | Safe & Intelligent Hair Removal",
        description: "Advanced IPL device with skin sensor technology for safe, effective, and personalized hair removal. Intelligent detection for all skin types.",
        keywords: "skin sensor IPL, intelligent IPL, safe hair removal, personalized IPL, all skin types IPL"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white pt-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(Breadcrumbs, {}) }),
        /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 mb-16", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative bg-[#f9f9f9] rounded-2xl overflow-hidden group", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: productImages[currentImageIndex],
                  alt: "Skin Sensor IPL Device",
                  className: "w-full h-[600px] object-cover"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: prevImage,
                  className: "absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity",
                  children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-6 h-6 text-gray-800" })
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: nextImage,
                  className: "absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity",
                  children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-6 h-6 text-gray-800" })
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2", children: productImages.map((_, index) => /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setCurrentImageIndex(index),
                  className: `w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? "bg-[rgb(0,116,224)]" : "bg-white/50"}`
                },
                index
              )) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-2", children: thumbnails.slice(0, 8).map((thumb, index) => /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setCurrentImageIndex(index),
                className: `relative overflow-hidden rounded-lg border-2 transition-colors ${index === currentImageIndex ? "border-[rgb(0,116,224)]" : "border-gray-200"}`,
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: thumb,
                    alt: `Thumbnail ${index + 1}`,
                    className: "w-full h-20 object-cover hover:scale-105 transition-transform"
                  }
                )
              },
              index
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h1", { className: "text-3xl lg:text-4xl font-bold text-gray-900 mb-4", children: t("ipl.skinSensor.title") }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 mb-4", children: [
                /* @__PURE__ */ jsx("div", { className: "flex items-center", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: `w-5 h-5 ${i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}` }, i)) }),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "4.9/5 (284 customer reviews)" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
                /* @__PURE__ */ jsx("span", { className: "text-3xl font-bold text-[rgb(0,116,224)]", children: "$249.00" }),
                /* @__PURE__ */ jsx("span", { className: "text-xl text-gray-500 line-through", children: "$329.00" }),
                /* @__PURE__ */ jsx("span", { className: "bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-semibold", children: "Save 24%" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Free shipping • 1-year warranty included" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-[#f9f9f9] rounded-xl p-6", children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold mb-3 flex items-center", children: [
                  /* @__PURE__ */ jsx("span", { className: "w-5 h-5 mr-2 text-[rgb(0,116,224)]", children: "👁️" }),
                  "✨ ",
                  t("ipl.skinSensor.features.intelligentDetection")
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed mb-4", children: t("ipl.skinSensor.desc") })
              ] }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-3", style: { listStyle: "none", paddingLeft: 0 }, children: [
                /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-green-500 mr-3 mt-1", children: "✔️" }),
                  t("ipl.skinSensor.features.intelligentDetection")
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-green-500 mr-3 mt-1", children: "✔️" }),
                  t("ipl.skinSensor.features.maxSafety")
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-green-500 mr-3 mt-1", children: "✔️" }),
                  t("ipl.skinSensor.features.personalized")
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-green-500 mr-3 mt-1", children: "✔️" }),
                  t("ipl.skinSensor.features.realTime")
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-green-500 mr-3 mt-1", children: "✔️" }),
                  t("ipl.skinSensor.features.proResults")
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-green-800 font-medium", children: "✅ In Stock - Ready to Ship (31 units available)" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-green-600 mt-1", children: "Delivery time: 1 business day" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Quantity" }),
                /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center border border-gray-300 rounded-lg", children: [
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: decreaseQuantity,
                      className: "p-2 hover:bg-gray-100 transition-colors",
                      disabled: quantity <= 1,
                      children: /* @__PURE__ */ jsx(Minus, { className: "w-4 h-4" })
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "px-4 py-2 min-w-[60px] text-center", children: quantity }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: increaseQuantity,
                      className: "p-2 hover:bg-gray-100 transition-colors",
                      disabled: quantity >= 10,
                      children: /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" })
                    }
                  )
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs("button", { className: "w-full bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center", children: [
                /* @__PURE__ */ jsx(ShoppingCart, { className: "w-5 h-5 mr-2" }),
                "Add to Cart"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsx("img", { src: "/images/payment-shipping-icons.png", alt: "Payment & Shipping", className: "w-[310px]" }),
              /* @__PURE__ */ jsx("img", { src: "/images/guarantee-shipping.png", alt: "Guarantee & Shipping", className: "w-[310px]" }),
              /* @__PURE__ */ jsx("img", { src: "/images/featured-in.png", alt: "Featured In", className: "w-[350px]" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4 pt-6 border-t border-gray-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx(Shield, { className: "w-8 h-8 mx-auto mb-2 text-[rgb(0,116,224)]" }),
                /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-600", children: [
                  "1-Year",
                  /* @__PURE__ */ jsx("br", {}),
                  "Warranty"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx(Truck, { className: "w-8 h-8 mx-auto mb-2 text-[rgb(0,116,224)]" }),
                /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-600", children: [
                  "Free",
                  /* @__PURE__ */ jsx("br", {}),
                  "Shipping"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx(Award, { className: "w-8 h-8 mx-auto mb-2 text-[rgb(0,116,224)]" }),
                /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-600", children: [
                  "FDA",
                  /* @__PURE__ */ jsx("br", {}),
                  "Approved"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-gray-200 space-y-2", children: [
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: "SKU:" }),
                " IPL-SENSOR-001"
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Category:" }),
                /* @__PURE__ */ jsx("a", { href: "/category/ipl-devices", className: "text-[rgb(0,116,224)] hover:underline ml-1", children: "IPL Hair Removal" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
          /* @__PURE__ */ jsx("div", { className: "border-b border-gray-200", children: /* @__PURE__ */ jsxs("nav", { className: "-mb-px flex space-x-8", children: [
            /* @__PURE__ */ jsx("button", { className: "py-2 px-1 border-b-2 border-[rgb(0,116,224)] text-[rgb(0,116,224)] font-medium text-sm", children: "Description" }),
            /* @__PURE__ */ jsx("button", { className: "py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm", children: "Product Safety" }),
            /* @__PURE__ */ jsx("button", { className: "py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm", children: "Reviews (284)" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "py-8", children: /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-[rgb(30,157,139)] to-[rgb(36,151,144)] rounded-2xl p-8 text-white", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8 items-center", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: "💖 Advanced Skin Sensor Technology for Safe & Effective Results!" }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-white rounded-full mr-3" }),
                    "Automatic skin tone detection and classification (Fitzpatrick I-IV)"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-white rounded-full mr-3" }),
                    "Real-time energy adjustment based on skin characteristics"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-white rounded-full mr-3" }),
                    "Safety lockout prevents treatment on unsuitable skin tones"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-white rounded-full mr-3" }),
                    "Continuous monitoring throughout treatment session"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs("div", { className: "inline-block bg-white/20 rounded-2xl p-6", children: [
                /* @__PURE__ */ jsx(Eye, { className: "w-16 h-16 mx-auto mb-4" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Intelligent Skin Recognition" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs opacity-80", children: "Advanced Optical Sensors" })
              ] }) })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsx("img", { src: "/images/skin-sensor-ipl/feature-skin-detection.jpg", alt: "Skin Detection Technology", className: "w-full rounded-xl" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "🔍 Intelligent Skin Detection" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: "Our revolutionary optical skin sensor technology automatically analyzes your skin tone and hair characteristics in real-time. The advanced algorithm ensures optimal energy delivery while maintaining complete safety for your specific skin type[1]." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsx("img", { src: "/images/skin-sensor-ipl/feature-safety-system.jpg", alt: "Safety Protection System", className: "w-full rounded-xl" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "🛡️ Multi-Layer Safety Protection" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: "Experience worry-free hair removal with our comprehensive safety system. Multiple sensors work together to prevent over-treatment, automatically adjusting power levels and providing instant feedback for optimal treatment conditions[1]." })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-[#f9f9f9] rounded-xl p-8", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-center", children: "How Skin Sensor Technology Works" }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-[rgb(0,116,224)] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4", children: "1" }),
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Skin Analysis" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Advanced optical sensors scan and analyze your skin tone and hair color" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-[rgb(0,116,224)] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4", children: "2" }),
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Auto-Adjustment" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Device automatically sets optimal energy level for your specific characteristics" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-[rgb(0,116,224)] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4", children: "3" }),
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Safe Treatment" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Continuous monitoring ensures safe, effective treatment throughout session" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-white border border-gray-200 rounded-xl p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4", children: "Device Specifications" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Light Source:" }),
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "IPL (Intense Pulsed Light)" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Wavelength:" }),
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "530-1200nm" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Energy Levels:" }),
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "5 Auto-Adjustable" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Flash Window:" }),
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "4.1 cm²" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Flash Count:" }),
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "900,000+" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-white border border-gray-200 rounded-xl p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4", children: "Sensor Technology" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Skin Sensor:" }),
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Advanced Optical Recognition" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Detection Range:" }),
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Fitzpatrick I-IV" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Response Time:" }),
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "< 0.1 seconds" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Safety Features:" }),
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Auto Shut-off + UV Filter" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Calibration:" }),
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Factory Calibrated" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: "What's Included" }),
              /* @__PURE__ */ jsx("img", { src: "/images/skin-sensor-ipl/package-contents.jpg", alt: "Package Contents", className: "w-full rounded-xl" }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-green-500 mr-2" }),
                    "1x Skin Sensor IPL Device"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-green-500 mr-2" }),
                    "1x Power Adapter"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-green-500 mr-2" }),
                    "1x Protective Glasses"
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-green-500 mr-2" }),
                    "1x User Manual (Multi-language)"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-green-500 mr-2" }),
                    "1x Cleaning Cloth"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-green-500 mr-2" }),
                    "1x Quick Start Guide"
                  ] })
                ] })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "py-8 border-t border-gray-200", style: { display: "none" }, children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6", children: "Product Safety Information" }),
            /* @__PURE__ */ jsx("div", { className: "bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6", children: /* @__PURE__ */ jsxs("div", { className: "flex", children: [
              /* @__PURE__ */ jsx(Info, { className: "w-5 h-5 text-yellow-400 mr-3 mt-0.5" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-yellow-800", children: "Important Safety Guidelines" }),
                /* @__PURE__ */ jsx("p", { className: "text-yellow-700 mt-1", children: "Please read all safety instructions carefully before using this device. The skin sensor provides additional safety, but proper use is still essential[1]." })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-red-600", children: "⚠️ Do Not Use If:" }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-red-500 mr-2 mt-1", children: "•" }),
                    "You are pregnant or breastfeeding"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-red-500 mr-2 mt-1", children: "•" }),
                    "You have very dark skin (Fitzpatrick skin type V-VI)"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-red-500 mr-2 mt-1", children: "•" }),
                    "You have white, grey, or red hair"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-red-500 mr-2 mt-1", children: "•" }),
                    "You have active skin cancer in the treatment area"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-red-500 mr-2 mt-1", children: "•" }),
                    "You are under 18 years of age"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-green-600", children: "✓ Skin Sensor Safety Features:" }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-green-500 mr-2 mt-1", children: "•" }),
                    "Automatic skin tone detection and classification"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-green-500 mr-2 mt-1", children: "•" }),
                    "Real-time energy level adjustment"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-green-500 mr-2 mt-1", children: "•" }),
                    "Safety lockout for unsuitable skin types"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-green-500 mr-2 mt-1", children: "•" }),
                    "UV filter protection and auto shut-off"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-green-500 mr-2 mt-1", children: "•" }),
                    "CE and FDA certified with sensor technology"
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 bg-blue-50 rounded-xl", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-3", children: "Before First Use:" }),
              /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm", children: [
                /* @__PURE__ */ jsx("li", { children: "1. Allow the skin sensor to calibrate (device will indicate when ready)" }),
                /* @__PURE__ */ jsx("li", { children: "2. Perform a patch test on a small area 24 hours before full treatment" }),
                /* @__PURE__ */ jsx("li", { children: "3. Shave the treatment area (do not wax or pluck)" }),
                /* @__PURE__ */ jsx("li", { children: "4. Clean and dry your skin thoroughly" }),
                /* @__PURE__ */ jsx("li", { children: "5. Wear the provided protective glasses" }),
                /* @__PURE__ */ jsx("li", { children: "6. Let the device automatically set the appropriate intensity" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-[rgb(236,67,113)] to-[rgb(125,0,99)] py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto text-center px-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-4 tracking-tight", children: "Ready to Experience Intelligent Hair Removal?" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-white mb-8", children: "Join thousands of satisfied customers who trust our advanced skin sensor technology for safe, effective, personalized IPL treatments[1]." }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold px-8 py-3 rounded-full transition",
            children: "Order Now - Free Shipping"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-[#f9f9f9] py-16", children: /* @__PURE__ */ jsx(ContactFormA, {}) })
    ] })
  ] });
};
export {
  SkinSensorIPL as default
};
