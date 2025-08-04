import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Minus, Plus, Shield, Truck, Award, Snowflake, Info, Check } from "lucide-react";
import { u as useLanguage, S as SEOTags } from "../main.ssg.mjs";
import { Helmet } from "react-helmet-async";
import { B as Breadcrumbs } from "./Breadcrumbs-9e177a61.js";
import "vite-ssg";
import "react-router-dom";
const ProductSchema = ({
  name,
  description,
  image,
  brand,
  model,
  sku,
  price,
  priceCurrency,
  availability,
  condition,
  category,
  manufacturer,
  warranty,
  features,
  aggregateRating,
  offers
}) => {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": image,
    "brand": {
      "@type": "Brand",
      "name": brand
    },
    "model": model,
    "sku": sku,
    "category": category,
    "manufacturer": manufacturer ? {
      "@type": "Organization",
      "name": manufacturer
    } : void 0,
    "warranty": warranty,
    "additionalProperty": features == null ? void 0 : features.map((feature) => ({
      "@type": "PropertyValue",
      "name": "Feature",
      "value": feature
    })),
    "offers": offers && offers.length > 0 ? offers.map((offer) => ({
      "@type": "Offer",
      "price": offer.price,
      "priceCurrency": offer.priceCurrency,
      "availability": offer.availability,
      "validFrom": offer.validFrom,
      "validThrough": offer.validThrough,
      "seller": offer.seller ? {
        "@type": "Organization",
        "name": offer.seller
      } : {
        "@type": "Organization",
        "name": brand
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": offer.priceCurrency
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 2,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 3,
            "maxValue": 7,
            "unitCode": "DAY"
          }
        }
      }
    })) : {
      "@type": "Offer",
      "price": price,
      "priceCurrency": priceCurrency,
      "availability": `https://schema.org/${availability}`,
      "itemCondition": `https://schema.org/${condition}`,
      "seller": {
        "@type": "Organization",
        "name": brand
      },
      "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1e3).toISOString().split("T")[0],
      // 30 days from now
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": priceCurrency
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 2,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 3,
            "maxValue": 7,
            "unitCode": "DAY"
          }
        }
      }
    },
    "aggregateRating": aggregateRating ? {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount,
      "bestRating": aggregateRating.bestRating || 5,
      "worstRating": aggregateRating.worstRating || 1
    } : void 0
  };
  const cleanSchema = JSON.parse(JSON.stringify(productSchema));
  return /* @__PURE__ */ jsx(Helmet, { children: /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(cleanSchema, null, 2) }) });
};
const IceFeelingIPL = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeSubTab, setActiveSubTab] = useState("specifications");
  const productImages = [
    "https://i.postimg.cc/wMrKRZrf/sapphire-IPL.webp",
    "https://i.postimg.cc/76BdjjqH/sapphire-ipl-black.webp",
    "https://i.postimg.cc/tRM8k0rD/sapphire-ipl-black-2.webp",
    "https://i.postimg.cc/dV8XJhJS/sapphire-ipl-black-3.webp",
    "https://i.postimg.cc/HLzh7Fcw/SAPPHIRE-IPL-PURPLE.webp",
    "https://i.postimg.cc/HWrTd9RZ/pink.webp",
    "https://i.postimg.cc/SQHkszpy/PINK-010-IPL-hair-removal-1.webp",
    "https://i.postimg.cc/htBn8Wj6/white-010-1.webp"
  ];
  const thumbnails = productImages;
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  const increaseQuantity = () => quantity < 10 && setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOTags,
      {
        title: "Ice Feeling IPL Device | Painless Cooling Hair Removal",
        description: "Ice feeling IPL device with advanced cooling technology for painless hair removal. Comfortable, safe, and effective for all skin types.",
        keywords: "ice feeling IPL, cooling IPL, painless hair removal, advanced cooling, comfortable IPL, all skin types"
      }
    ),
    /* @__PURE__ */ jsx(
      ProductSchema,
      {
        name: "Ice Feeling IPL Device - Sapphire Cooling Hair Removal",
        description: "Advanced IPL hair removal device with sapphire cooling technology that maintains skin temperature at 5°C for painless treatment. Features dual-lamp xenon technology, 5 energy levels, and 999,999+ flashes for permanent hair reduction.",
        image: productImages,
        brand: "SapphireIPL",
        model: "ICE-SAPPHIRE-002",
        sku: "ICE-SAPPHIRE-002",
        price: 149,
        priceCurrency: "USD",
        availability: "InStock",
        condition: "NewCondition",
        category: "IPL Hair Removal Device",
        manufacturer: "SapphireIPL Technologies",
        warranty: "12-month warranty included",
        features: [
          "Sapphire cooling plate maintains 5°C temperature",
          "IPL Xenon Dual-Lamp technology",
          "5 adjustable energy levels (12-18 J/cm²)",
          "999,999+ flash count",
          "0.35s ultra-fast flash speed",
          "Auto and manual flash modes",
          "Skin-tone sensor for safety",
          "4.0 cm² spot size",
          "FDA cleared and CE certified",
          "Suitable for all skin types"
        ],
        aggregateRating: {
          ratingValue: 5,
          reviewCount: 212,
          bestRating: 5,
          worstRating: 1
        }
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
                  alt: t("ipl.iceFeeling.title"),
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
                  className: `w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? "bg-[rgb(0,116,224)]" : "bg-white/50"}`
                },
                index
              )) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-2", children: thumbnails.map((thumb, index) => /* @__PURE__ */ jsx(
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
              /* @__PURE__ */ jsx("h1", { className: "text-3xl lg:text-4xl font-bold text-gray-900 mb-4", children: t("ipl.iceFeeling.title") }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 mb-4", children: [
                /* @__PURE__ */ jsx("div", { className: "flex items-center", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(
                  Star,
                  {
                    className: `w-5 h-5 ${i < 5 ? "text-yellow-400 fill-current" : "text-gray-300"}`
                  },
                  i
                )) }),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "5.0/5 (212 reviews)" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
                /* @__PURE__ */ jsx("span", { className: "text-3xl font-bold text-[rgb(0,116,224)]", children: "$149.00" }),
                /* @__PURE__ */ jsx("span", { className: "text-xl text-gray-500 line-through", children: "$299.00" }),
                /* @__PURE__ */ jsx("span", { className: "bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-semibold", children: "Save 30%" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Free shipping • 12-month warranty included" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-[#f9f9f9] rounded-xl p-6", children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold mb-3 flex items-center", children: [
                  /* @__PURE__ */ jsx("span", { className: "w-5 h-5 mr-2 text-[rgb(0,116,224)]", children: "❄️" }),
                  t("ipl.iceFeeling.features.cooling")
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed mb-4", children: t("ipl.iceFeeling.desc") })
              ] }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-3", style: { listStyle: "none", paddingLeft: 0 }, children: [
                /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-green-500 mr-3 mt-1", children: "✔️" }),
                  t("ipl.iceFeeling.features.longSmooth")
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-green-500 mr-3 mt-1", children: "✔️" }),
                  t("ipl.iceFeeling.features.cooling")
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-green-500 mr-3 mt-1", children: "✔️" }),
                  t("ipl.iceFeeling.features.energyLevels")
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-green-500 mr-3 mt-1", children: "✔️" }),
                  t("ipl.iceFeeling.features.flashModes")
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-green-500 mr-3 mt-1", children: "✔️" }),
                  t("ipl.iceFeeling.features.multiUse")
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-green-800 font-medium", children: "✅ In Stock " }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-green-600 mt-1", children: "Ships within 24 h" })
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
              /* @__PURE__ */ jsx("button", { className: "w-full bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center", children: "GET A QUOTE NOW" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4 pt-6 border-t border-gray-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx(Shield, { className: "w-8 h-8 mx-auto mb-2 text-[rgb(0,116,224)]" }),
                /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-600", children: [
                  "12-Month",
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
                  "Cleared"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-gray-200 space-y-2", children: [
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: "SKU:" }),
                " ICE-SAPPHIRE-002"
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Category:" }),
                /* @__PURE__ */ jsx("a", { href: "/ipl-hair-removal", className: "text-[rgb(0,116,224)] hover:underline ml-1", children: "IPL Hair Removal" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mb-16", children: /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-[rgb(0,140,255)] to-[rgb(0,96,192)] rounded-2xl p-8 text-white", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8 items-center", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: "💎 Sapphire Ice Plate Keeps Skin at 5 °C" }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-white rounded-full mr-3" }),
                  "Continuous cooling enables pain-free sessions even on sensitive zones."
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-white rounded-full mr-3" }),
                  "Higher energy pulses deliver permanent results 3× faster."
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-white rounded-full mr-3" }),
                  "Built-in sensor adjusts intensity for safe treatment."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs("div", { className: "inline-block bg-white/20 rounded-2xl p-6", children: [
              /* @__PURE__ */ jsx(Snowflake, { className: "w-16 h-16 mx-auto mb-4" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: "Sapphire bring ICE FEELING!" })
            ] }) })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/images/ice-feeling-ipl/feature-cooling.jpg",
                  alt: "Ice Cooling Head",
                  className: "w-full rounded-xl"
                }
              ),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "Ice-Cool Precision" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: "The sapphire window cools on contact, reducing surface temperature from 158 °F to 41 °F to numb nerve endings." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/images/ice-feeling-ipl/feature-flash.jpg",
                  alt: "Fast Flash Speed",
                  className: "w-full rounded-xl"
                }
              ),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "0.35 s Ultra-Fast Flashes" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: "Treat legs or arms in under 8 minutes thanks to rapid xenon tubes and 0.35 s reload time." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#f9f9f9] rounded-xl p-8", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-center", children: "How Sapphire Ice Feeling IPL Works" }),
            /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [
              ["Connect & Cool", "Place the chilled sapphire head flat on shaved skin"],
              ["Pulse & Glide", "Auto-flash mode lets you glide smoothly across large areas"],
              ["Maintain & Glow", "Use weekly for 8 weeks, then monthly to stay hair-free"]
            ].map(([title, desc], i) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-[rgb(0,116,224)] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4", children: i + 1 }),
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: desc })
            ] }, title)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-center", children: "Technical Details" }),
            /* @__PURE__ */ jsx("div", { className: "border-b border-gray-200", children: /* @__PURE__ */ jsx("nav", { className: "-mb-px flex space-x-8 justify-center", children: ["specifications", "safety", "reviews"].map((tab) => /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setActiveSubTab(tab),
                className: `py-2 px-1 border-b-2 font-medium text-sm ${activeSubTab === tab ? "border-[rgb(0,116,224)] text-[rgb(0,116,224)]" : "border-transparent text-gray-500 hover:text-gray-700"}`,
                children: tab === "specifications" ? "Specifications" : tab === "safety" ? "Safety" : "Reviews"
              },
              tab
            )) }) }),
            activeSubTab === "specifications" && /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-white border border-gray-200 rounded-xl p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4", children: "Device Specs" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3 text-sm", children: [
                  ["Light Source", "IPL Xenon Dual-Lamp"],
                  ["Wavelength", "530-1200 nm"],
                  ["Energy Levels", "5 Adjustable"],
                  ["Cooling Plate", "Sapphire 5 °C"],
                  ["Flash Count", "999 999+"],
                  ["Spot Size", "4.0 cm²"]
                ].map(([k, v]) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxs("span", { className: "text-gray-600", children: [
                    k,
                    ":"
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: v })
                ] }, k)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-white border border-gray-200 rounded-xl p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4", children: "Smart Features" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3 text-sm", children: [
                  ["Cooling Range", "41 °F / 5 °C"],
                  ["Intensity", "12-18 J/cm²"],
                  ["Modes", "Auto / Manual"],
                  ["Sensors", "Skin-tone + Contact"],
                  ["Adapter", "12 V / 3 A"]
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
                  /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-yellow-800", children: "Important Safety Guidelines" }),
                  /* @__PURE__ */ jsx("p", { className: "text-yellow-700 mt-1", children: "Follow all instructions to avoid skin irritation or burns[12][19]." })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-red-600", children: "⚠️ Do Not Use If:" }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: [
                    "Pregnant or breastfeeding",
                    "Fitzpatrick VI skin",
                    "White, grey or red hair",
                    "Active skin cancer",
                    "Under 18 years old"
                  ].map((txt) => /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-red-500 mr-2 mt-1", children: "•" }),
                    txt
                  ] }, txt)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-green-600", children: "✓ Built-In Protections:" }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: [
                    "Automatic skin-tone detection",
                    "UV filter coated lens",
                    "Contact cooling",
                    "Auto shut-off after 10 min",
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
              ["Lisa K.", "Anna S.", "Grace T."].map((name, idx) => /* @__PURE__ */ jsxs(
                "div",
                {
                  className: `border-b border-gray-100 pb-4 ${idx === 2 ? "border-none" : ""}`,
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-2", children: [
                      /* @__PURE__ */ jsx("div", { className: "flex items-center", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 text-yellow-400 fill-current" }, i)) }),
                      /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm font-medium", children: name }),
                      /* @__PURE__ */ jsx("span", { className: "ml-2 text-xs text-gray-500", children: "Verified Purchase" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700", children: '"The cooling plate makes every flash totally painless. Hair growth slowed dramatically after 4 sessions."[37][24]' })
                  ]
                },
                name
              )),
              /* @__PURE__ */ jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsx("button", { className: "text-[rgb(0,116,224)] hover:text-[rgb(0,89,179)] font-medium text-sm", children: "View All 212 Reviews" }) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: "What's Included" }),
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/images/ice-feeling-ipl/package-contents.jpg",
                alt: "Package Contents",
                className: "w-full rounded-xl"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: [
              "1× Sapphire Ice Feeling IPL Device",
              "1× Power Adapter",
              "1× Protective Glasses",
              "1× User Manual",
              "1× Razor",
              "1× Storage Pouch"
            ].map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-green-500 mr-2" }),
              item
            ] }, item)) })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-[rgb(0,160,240)] to-[rgb(0,116,224)] py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto text-center px-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-4 tracking-tight", children: "Ready for Ice-Cool Hair Removal?" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-white mb-8", children: "Join 200 000+ users enjoying sapphire cooling comfort at home." }),
        /* @__PURE__ */ jsx("button", { className: "bg-white text-[rgb(0,116,224)] font-semibold px-8 py-3 rounded-full transition hover:opacity-90", children: "Order Now – Free Shipping" })
      ] }) })
    ] })
  ] });
};
export {
  IceFeelingIPL as default
};
