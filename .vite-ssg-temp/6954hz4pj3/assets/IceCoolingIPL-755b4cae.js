import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Minus, Plus, Shield, Truck, Award, Info, Check } from "lucide-react";
import { u as useLanguage } from "../main.ssg.mjs";
import { B as Breadcrumbs } from "./Breadcrumbs-9e177a61.js";
import "vite-ssg";
import "react-router-dom";
import "react-helmet-async";
const IceCoolingIPL = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeSubTab, setActiveSubTab] = useState("specifications");
  const productImages = [
    "https://i.postimg.cc/3wyWVQX1/ice-cooling-ipl-4.webp",
    "https://i.postimg.cc/CLYB1t0M/ice-cooling-ipl-5.webp",
    "https://i.postimg.cc/9fvzjg1h/ice-cooling-ipl-3.webp",
    "https://i.postimg.cc/sf5G3zt0/ice-cooling-ipl-6.webp",
    "https://i.postimg.cc/NMmFG8Pr/ice-cooling-ipl-2.webp",
    "https://i.postimg.cc/VvFNnfwf/ice-cooling-ipl-1.webp",
    "https://i.postimg.cc/CxRFLHRL/ice-cooling-ipl-7.webp"
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
                alt: "Ice Cooling IPL Hair Removal Device",
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
            /* @__PURE__ */ jsx("h1", { className: "text-3xl lg:text-4xl font-bold text-gray-900 mb-4", children: t("ipl.iceCooling.title") }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(
                Star,
                {
                  className: `w-5 h-5 ${i < 5 ? "text-yellow-400 fill-current" : "text-gray-300"}`
                },
                i
              )) }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "4.8/5 (243 reviews)" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
              /* @__PURE__ */ jsx("span", { className: "text-3xl font-bold text-blue-600", children: "$229.00" }),
              /* @__PURE__ */ jsx("span", { className: "text-xl text-gray-500 line-through", children: "$359.00" }),
              /* @__PURE__ */ jsx("span", { className: "bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-semibold", children: "Save 36%" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Free shipping • 12-month warranty included" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold mb-3 flex items-center", children: [
                /* @__PURE__ */ jsx("span", { className: "w-5 h-5 mr-2 text-blue-600", children: "❄️" }),
                "✨ ",
                t("ipl.iceCooling.features.luxuryDesign")
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed mb-4", children: t("ipl.iceCooling.desc") })
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-3", style: { listStyle: "none", paddingLeft: 0 }, children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-500 mr-3 mt-1", children: "✔️" }),
                t("ipl.iceCooling.features.luxuryDesign")
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-500 mr-3 mt-1", children: "✔️" }),
                t("ipl.iceCooling.features.coolingPlate")
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-500 mr-3 mt-1", children: "✔️" }),
                t("ipl.iceCooling.features.preciseControl")
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-500 mr-3 mt-1", children: "✔️" }),
                t("ipl.iceCooling.features.allSkin")
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-500 mr-3 mt-1", children: "✔️" }),
                t("ipl.iceCooling.features.largeWindow")
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-green-800 font-medium", children: "✅ In Stock" }),
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
            /* @__PURE__ */ jsx("button", { className: "w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg", children: "Get A Quote Now" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4 pt-6 border-t border-gray-200", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx(Shield, { className: "w-8 h-8 mx-auto mb-2 text-blue-600" }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-600", children: [
                "18-Month",
                /* @__PURE__ */ jsx("br", {}),
                "Warranty"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx(Truck, { className: "w-8 h-8 mx-auto mb-2 text-blue-600" }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-600", children: [
                "Free",
                /* @__PURE__ */ jsx("br", {}),
                "Shipping"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx(Award, { className: "w-8 h-8 mx-auto mb-2 text-blue-600" }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-600", children: [
                "FDA",
                /* @__PURE__ */ jsx("br", {}),
                "Certified"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-gray-200 space-y-2", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium", children: "SKU:" }),
              " ICE-COOLING-004"
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Category:" }),
              /* @__PURE__ */ jsx("a", { href: "/ipl-hair-removal", className: "text-blue-600 hover:underline ml-1", children: "IPL Hair Removal Devices" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mb-16", children: /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-2xl p-8 text-white", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8 items-center", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: "❄️ Aerospace-Grade Ice Cooling Metal Plate Technology" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-white rounded-full mr-3" }),
                "Instantly cools to 5°C on contact for truly painless hair removal."
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-white rounded-full mr-3" }),
                "9-level precise energy control for all skin and hair types."
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-white rounded-full mr-3" }),
                "Luxurious goddess design with aerospace-grade metal finish."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs("div", { className: "inline-block bg-white/20 rounded-2xl p-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 mx-auto mb-4 bg-white/30 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-3xl", children: "❄️" }) }),
            /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Luxury Ice Cooling Design" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs opacity-80", children: "Goddess-level Experience" })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/images/ice-cooling-ipl/feature-cooling.jpg",
                alt: "Ice Cooling Technology",
                className: "w-full rounded-xl"
              }
            ),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "Ice Cooling Technology" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: "The aerospace-grade cooling metal plate uses advanced thermal conduction to instantly cool the skin to 5°C, with intelligent temperature control for a truly painless and comfortable experience every session." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/images/ice-cooling-ipl/feature-luxury.jpg",
                alt: "Luxury Design",
                className: "w-full rounded-xl"
              }
            ),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "Luxurious Goddess Design" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: "Crafted with aerospace-grade metal, diamond-cut finish, and a streamlined luxurious silhouette. Every detail reflects the pursuit of perfection for the modern woman." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-100", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-center", children: "How Ice Cooling IPL Works" }),
          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [
            ["Cooling Prep", "Apply the ice cooling metal plate to skin for instant 5°C comfort."],
            ["Energy Pulse", "Select the right level and deliver precise IPL pulses to target follicles."],
            ["Silky Enjoyment", "Use regularly to enjoy goddess-level silky, hair-free skin."]
          ].map(([title, desc], i) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4", children: i + 1 }),
            /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: desc })
          ] }, title)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-center", children: "Technical Specifications" }),
          /* @__PURE__ */ jsx("div", { className: "border-b border-gray-200", children: /* @__PURE__ */ jsx("nav", { className: "-mb-px flex space-x-8 justify-center", children: ["specifications", "safety", "reviews"].map((tab) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setActiveSubTab(tab),
              className: `py-2 px-1 border-b-2 font-medium text-sm ${activeSubTab === tab ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"}`,
              children: tab === "specifications" ? "Specifications" : tab === "safety" ? "Safety" : "Reviews"
            },
            tab
          )) }) }),
          activeSubTab === "specifications" && /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-white border border-gray-200 rounded-xl p-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4", children: "Device Specs" }),
              /* @__PURE__ */ jsx("div", { className: "space-y-3 text-sm", children: [
                ["Light Source", "IPL Intense Pulsed Light"],
                ["Wavelength", "530-1200 nm"],
                ["Energy Levels", "9 adjustable"],
                ["Max Energy", "20 J/cm²"],
                ["Flash Lifetime", "800,000+"],
                ["Treatment Window", "5.0 cm²"]
              ].map(([k, v]) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxs("span", { className: "text-gray-600", children: [
                  k,
                  ":"
                ] }),
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: v })
              ] }, k)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white border border-gray-200 rounded-xl p-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4", children: "Cooling System" }),
              /* @__PURE__ */ jsx("div", { className: "space-y-3 text-sm", children: [
                ["Cooling Type", "Contact metal plate"],
                ["Cooling Temp", "5°C ultra-low"],
                ["Cooling Response", "Instant contact cooling"],
                ["Temp Control", "Intelligent constant temperature"],
                ["Power", "110-240V Universal"]
              ].map(([k, v]) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxs("span", { className: "text-gray-600", children: [
                  k,
                  ":"
                ] }),
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: v })
              ] }, k)) })
            ] })
          ] }),
          activeSubTab === "safety" && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-yellow-50 border-l-4 border-yellow-400 p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex", children: [
              /* @__PURE__ */ jsx(Info, { className: "w-5 h-5 text-yellow-400 mr-3 mt-0.5" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-yellow-800", children: "Safety Guidelines" }),
                /* @__PURE__ */ jsx("p", { className: "text-yellow-700 mt-1", children: "Always start from the lowest level and let your skin adapt to IPL energy. The ice cooling plate may cause slight cold sensation." })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-red-600", children: "⚠️ Do Not Use If:" }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: [
                  "Pregnant or breastfeeding",
                  "Fitzpatrick VI skin type",
                  "White, grey, or red hair",
                  "Active skin disorders",
                  "Under 18 years old"
                ].map((txt) => /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-red-500 mr-2 mt-1", children: "•" }),
                  txt
                ] }, txt)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-green-600", children: "✓ Built-in Safety:" }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: [
                  "Skin tone sensor",
                  "UV filtered lens",
                  "Contact cooling safety",
                  "Auto power-off",
                  "CE & FDA certified"
                ].map((txt) => /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-green-500 mr-2 mt-1", children: "•" }),
                  txt
                ] }, txt)) })
              ] })
            ] })
          ] }),
          activeSubTab === "reviews" && /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-gray-200 rounded-xl p-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4", children: "Customer Reviews" }),
            ["Linda", "Sophia", "Emma"].map((name, idx) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: `border-b border-gray-100 pb-4 ${idx === 2 ? "border-none" : ""}`,
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "flex items-center", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 text-yellow-400 fill-current" }, i)) }),
                    /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm font-medium", children: name }),
                    /* @__PURE__ */ jsx("span", { className: "ml-2 text-xs text-gray-500", children: "Verified Purchase" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700", children: '"This device truly feels goddess-level! The ice cooling plate is super comfortable, 9-level adjustment is very precise, and the hair removal effect is better than salons. The appearance is also super luxurious, I love it!"' })
                ]
              },
              name
            )),
            /* @__PURE__ */ jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsx("button", { className: "text-blue-600 hover:text-blue-700 font-medium text-sm", children: "View all 243 reviews" }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: "Package Contents" }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/images/ice-cooling-ipl/package-contents.jpg",
              alt: "Package Contents",
              className: "w-full rounded-xl"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: [
            "1× Ice Cooling IPL Hair Removal Device",
            "1× Power Adapter",
            "1× Protective Glasses",
            "1× User Manual",
            "1× Cleaning Cloth",
            "1× Luxury Storage Case"
          ].map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-green-500 mr-2" }),
            item
          ] }, item)) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto text-center px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-4 tracking-tight", children: "Ready for Goddess-Level Ice Cooling Hair Removal?" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-white mb-8", children: "Join thousands of women who choose Ice Cooling IPL for a luxurious, painless hair removal experience." }),
      /* @__PURE__ */ jsx("button", { className: "bg-white text-blue-600 font-semibold px-8 py-3 rounded-full transition hover:opacity-90 shadow-lg", children: "Order Now – Free Shipping" })
    ] }) })
  ] });
};
export {
  IceCoolingIPL as default
};
