import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Minus, Plus, Shield, Truck, Award } from "lucide-react";
import { u as useLanguage } from "../main.ssg.mjs";
import "vite-ssg";
import "react-router-dom";
import "react-helmet-async";
const SmartAppIPL = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const productImages = [
    "https://i.postimg.cc/WpYCbRgg/smart-ipl-1.webp",
    "https://i.postimg.cc/KvdWBn9Y/smart-ipl-2.webp",
    "https://i.postimg.cc/2ShKwVJ7/smart-ipl-3.webp",
    "https://i.postimg.cc/k5Chh7P3/smart-ipl-4.webp",
    "https://i.postimg.cc/SKG1BHmX/smart-ipl-5.webp",
    "https://i.postimg.cc/Jn4YMKhp/smart-ipl-6.webp",
    "https://i.postimg.cc/85KK5WJN/smart-ipl-7.webp",
    "https://i.postimg.cc/KcWphPh5/smart-ipl-8.webp"
  ];
  const thumbnails = productImages;
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  const increaseQuantity = () => quantity < 10 && setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-white pt-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("nav", { className: "text-sm text-gray-500 mb-4 mt-4 uppercase", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: "hover:text-[rgb(0,116,224)]", children: t("common.home") }),
      /* @__PURE__ */ jsx("span", { className: "mx-2", children: "/" }),
      /* @__PURE__ */ jsx("a", { href: "/ipl-hair-removal", className: "hover:text-[rgb(0,116,224)]", children: t("iplHairRemoval") }),
      /* @__PURE__ */ jsx("span", { className: "mx-2", children: "/" }),
      /* @__PURE__ */ jsx("span", { className: "text-gray-800", children: t("ipl.smartApp.title") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative bg-[#f9f9f9] rounded-2xl overflow-hidden group", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: productImages[currentImageIndex],
              alt: "Smart App IPL Device",
              className: "w-full h-[800px] object-cover"
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
        /* @__PURE__ */ jsx("h1", { className: "text-3xl lg:text-4xl font-bold text-gray-900 mb-4", children: t("ipl.smartApp.title") }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: `w-5 h-5 ${i < 5 ? "text-yellow-400 fill-current" : "text-gray-300"}` }, i)) }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "4.9/5 (158 reviews)" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-3xl font-bold text-[rgb(0,116,224)]", children: "$229.00" }),
            /* @__PURE__ */ jsx("span", { className: "text-xl text-gray-500 line-through", children: "$329.00" }),
            /* @__PURE__ */ jsx("span", { className: "bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-semibold", children: "Save 30%" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Free shipping • 12-month warranty" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-[#f9f9f9] rounded-xl p-6", children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold mb-3 flex items-center", children: [
              /* @__PURE__ */ jsx("span", { className: "w-5 h-5 mr-2 text-[rgb(0,116,224)]", children: "📱" }),
              "✨ ",
              t("ipl.smartApp.features.bluetooth")
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed mb-4", children: t("ipl.smartApp.desc") })
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3", style: { listStyle: "none", paddingLeft: 0 }, children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx("span", { className: "text-green-500 mr-3 mt-1", children: "✔️" }),
              t("ipl.smartApp.features.bluetooth")
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx("span", { className: "text-green-500 mr-3 mt-1", children: "✔️" }),
              t("ipl.smartApp.features.aiPlans")
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx("span", { className: "text-green-500 mr-3 mt-1", children: "✔️" }),
              t("ipl.smartApp.features.realTimeControl")
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx("span", { className: "text-green-500 mr-3 mt-1", children: "✔️" }),
              t("ipl.smartApp.features.scheduling")
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx("span", { className: "text-green-500 mr-3 mt-1", children: "✔️" }),
              t("ipl.smartApp.features.compatibility")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-green-800 font-medium", children: "✅ In Stock" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-green-600 mt-1", children: "Ships in 24 hours" })
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
          /* @__PURE__ */ jsx("button", { className: "w-full bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold py-4 rounded-lg flex items-center justify-center transition-colors", children: "GET A QUOTE NOW" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4 pt-6 border-t border-gray-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx(Shield, { className: "w-8 h-8 mx-auto mb-2 text-[rgb(0,116,224)]" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "12-Month Warranty" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx(Truck, { className: "w-8 h-8 mx-auto mb-2 text-[rgb(0,116,224)]" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Free Shipping" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx(Award, { className: "w-8 h-8 mx-auto mb-2 text-[rgb(0,116,224)]" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "FDA Approved" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-gray-200 space-y-2", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "SKU:" }),
            " SMART-APP-IPL-001"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Category:" }),
            /* @__PURE__ */ jsx("a", { href: "/ipl-hair-removal", className: "text-[rgb(0,116,224)] hover:underline ml-1", children: "IPL Hair Removal" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "my-16 px-4 max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 text-center text-gray-900", children: "Product Features & Benefits" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center mb-12", children: [
        /* @__PURE__ */ jsx("img", { src: "/images/smart-app-ipl/feature1.jpg", alt: "Guided App Control", className: "w-full md:w-1/2 rounded-xl shadow-md" }),
        /* @__PURE__ */ jsxs("div", { className: "md:ml-8 mt-6 md:mt-0", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4 text-gray-800", children: "Smart App Connectivity" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-4", children: "Connect your device effortlessly via Bluetooth 5.0. Use the dedicated mobile app to customize treatments, track progress, and receive personalized recommendations, making home hair removal smarter and more convenient." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center mb-12", children: [
        /* @__PURE__ */ jsx("img", { src: "/images/smart-app-ipl/feature2.jpg", alt: "Smart Treatment", className: "w-full md:w-1/2 rounded-xl shadow-md" }),
        /* @__PURE__ */ jsxs("div", { className: "md:ml-8 mt-6 md:mt-0", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4 text-gray-800", children: "Intelligent Treatment System" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-4", children: "The app guides you through each session, adjusting intensity based on your skin tone and hair density. Real-time feedback ensures safe, effective, and painless treatments every time." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center mb-12", children: [
        /* @__PURE__ */ jsx("img", { src: "/images/smart-app-ipl/feature3.jpg", alt: "Progress Monitoring", className: "w-full md:w-1/2 rounded-xl shadow-md" }),
        /* @__PURE__ */ jsxs("div", { className: "md:ml-8 mt-6 md:mt-0", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4 text-gray-800", children: "Progress & Reminder Alerts" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-4", children: "Track your treatment history and receive timely reminders for sessions. Achieve optimal results with guided routines tailored to your skin and hair type." })
        ] })
      ] })
    ] })
  ] }) });
};
export {
  SmartAppIPL as default
};
