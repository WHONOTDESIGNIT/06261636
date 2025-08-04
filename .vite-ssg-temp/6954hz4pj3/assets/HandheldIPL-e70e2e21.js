import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Minus, Plus, Shield, Truck, Award } from "lucide-react";
import { u as useLanguage, C as ContactFormA } from "../main.ssg.mjs";
import { B as Breadcrumbs } from "./Breadcrumbs-9e177a61.js";
import "vite-ssg";
import "react-router-dom";
import "react-helmet-async";
const HandheldIPL = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeSubTab, setActiveSubTab] = useState("specifications");
  const productImages = [
    "https://i.postimg.cc/J0SkY7gb/handheld-ipl-1.webp",
    "https://i.postimg.cc/kMHKgw4B/handheld-ipl-2.webp",
    "https://i.postimg.cc/4Nht7t7w/handheld-ipl-3.webp",
    "https://i.postimg.cc/Vs0BM22j/handheld-ipl-4.webp",
    "https://i.postimg.cc/qv48PqqL/handheld-ipl-5.webp",
    "https://i.postimg.cc/9QbGC2qj/handheld-ipl-6.webp",
    "https://i.postimg.cc/rpYxR9Jn/handheld-ipl-7.webp",
    "https://i.postimg.cc/k468QtYn/handheld-ipl-8.webp"
  ];
  const thumbnails = productImages;
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  const increaseQuantity = () => quantity < 10 && setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white pt-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(Breadcrumbs, {}) }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 mb-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative bg-[#f9f9f9] rounded-2xl overflow-hidden group", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: productImages[currentImageIndex],
                alt: "Handheld IPL Hair Removal Device",
                className: "w-full h-[700px] object-cover"
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
                className: `w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? "bg-blue-500" : "bg-white/50"}`
              },
              index
            )) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-2", children: thumbnails.map((thumb, index) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setCurrentImageIndex(index),
              className: `relative overflow-hidden rounded-lg border-2 transition-colors ${index === currentImageIndex ? "border-blue-500" : "border-gray-200"}`,
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
            /* @__PURE__ */ jsx("h1", { className: "text-3xl lg:text-4xl font-bold text-gray-900 mb-4", children: t("ipl.handheld.title") }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(
                Star,
                {
                  className: `w-5 h-5 ${i < 5 ? "text-yellow-400 fill-current" : "text-gray-300"}`
                },
                i
              )) }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "4.8/5 (198 reviews)" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
              /* @__PURE__ */ jsx("span", { className: "text-3xl font-bold text-blue-600", children: "$329.00" }),
              /* @__PURE__ */ jsx("span", { className: "text-xl text-gray-500 line-through", children: "$459.00" }),
              /* @__PURE__ */ jsx("span", { className: "bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-semibold", children: "Save 28%" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Free shipping • 12-month warranty included" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold mb-3 flex items-center", children: [
                /* @__PURE__ */ jsx("span", { className: "w-5 h-5 mr-2 text-blue-600", children: "🦲" }),
                "✨ ",
                t("ipl.handheld.features.ergonomic")
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed mb-4", children: t("ipl.handheld.desc") })
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-3", style: { listStyle: "none", paddingLeft: 0 }, children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-500 mr-3 mt-1", children: "✔️" }),
                t("ipl.handheld.features.ergonomic")
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-500 mr-3 mt-1", children: "✔️" }),
                t("ipl.handheld.features.energyLevels")
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-500 mr-3 mt-1", children: "✔️" }),
                t("ipl.handheld.features.portable")
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-500 mr-3 mt-1", children: "✔️" }),
                t("ipl.handheld.features.allSkin")
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-500 mr-3 mt-1", children: "✔️" }),
                t("ipl.handheld.features.certified")
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-green-800 font-medium", children: "✅ In Stock " }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-green-600 mt-1", children: "Ships within 24 hours" })
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
            /* @__PURE__ */ jsx("button", { className: "w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 rounded-lg transition-shadow shadow-lg flex items-center justify-center", children: "GET A QUOTE NOW" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 mt-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2", children: [
              /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5 text-blue-500 mr-2" }),
              " 12-Month Warranty"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2", children: [
              /* @__PURE__ */ jsx(Truck, { className: "w-5 h-5 text-blue-500 mr-2" }),
              " Free Shipping"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2", children: [
              /* @__PURE__ */ jsx(Award, { className: "w-5 h-5 text-blue-500 mr-2" }),
              " FDA & CE Approved"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-lg p-8 mb-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-8 border-b border-gray-200 mb-8", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: `pb-2 text-lg font-semibold transition-colors ${activeSubTab === "specifications" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`,
              onClick: () => setActiveSubTab("specifications"),
              children: "Specifications"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: `pb-2 text-lg font-semibold transition-colors ${activeSubTab === "safety" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`,
              onClick: () => setActiveSubTab("safety"),
              children: "Safety"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: `pb-2 text-lg font-semibold transition-colors ${activeSubTab === "reviews" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`,
              onClick: () => setActiveSubTab("reviews"),
              children: "Reviews"
            }
          )
        ] }),
        activeSubTab === "specifications" && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-xl font-semibold mb-4", children: "Product Specifications" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700", children: [
            /* @__PURE__ */ jsx("li", { children: "Device Type: Handheld IPL Hair Removal" }),
            /* @__PURE__ */ jsx("li", { children: "Energy Levels: 5 adjustable settings" }),
            /* @__PURE__ */ jsx("li", { children: "Power Source: AC Adapter" }),
            /* @__PURE__ */ jsx("li", { children: "Flash Life: 500,000 flashes" }),
            /* @__PURE__ */ jsx("li", { children: "Display: LED screen" }),
            /* @__PURE__ */ jsx("li", { children: "Weight: 343.0 grams" }),
            /* @__PURE__ */ jsx("li", { children: "Dimensions: 189 x 149 x 90 mm" }),
            /* @__PURE__ */ jsx("li", { children: "Warranty: 12 months" })
          ] })
        ] }),
        activeSubTab === "safety" && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-xl font-semibold mb-4", children: "Safety & Certifications" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2 text-gray-700", children: [
            /* @__PURE__ */ jsx("li", { children: "FDA & CE certified for safe home use" }),
            /* @__PURE__ */ jsx("li", { children: "Automatic shut-off after 10 minutes of inactivity" }),
            /* @__PURE__ */ jsx("li", { children: "Gentle on all skin types" }),
            /* @__PURE__ */ jsx("li", { children: "UV filter for skin protection" })
          ] })
        ] }),
        activeSubTab === "reviews" && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-xl font-semibold mb-4", children: "Customer Reviews" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "border-b pb-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-2", children: [
                /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 text-yellow-400 mr-1" }),
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Emily R." }),
                /* @__PURE__ */ jsx("span", { className: "ml-2 text-gray-500 text-sm", children: "Verified Buyer" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: '"Super easy to use and the results are amazing! The 5 energy levels are perfect for my sensitive skin."' })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "border-b pb-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-2", children: [
                /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 text-yellow-400 mr-1" }),
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Liam T." }),
                /* @__PURE__ */ jsx("span", { className: "ml-2 text-gray-500 text-sm", children: "Verified Buyer" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: '"Compact and lightweight, I can take it anywhere. Highly recommend for home use!"' })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-2", children: [
                /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 text-yellow-400 mr-1" }),
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Sophia W." }),
                /* @__PURE__ */ jsx("span", { className: "ml-2 text-gray-500 text-sm", children: "Verified Buyer" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: '"Noticeable results after just a few sessions. The ergonomic design makes it so easy to handle."' })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(ContactFormA, {})
  ] });
};
export {
  HandheldIPL as default
};
