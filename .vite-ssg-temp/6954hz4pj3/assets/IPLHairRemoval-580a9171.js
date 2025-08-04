import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { u as useLanguage, S as SEOTags, i as iplDevices, a as accessories, C as ContactFormA } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "react-helmet-async";
import "lucide-react";
const ProductCard = ({ product, showThumbnail = false }) => {
  return /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300", children: [
    /* @__PURE__ */ jsx("div", { className: "aspect-w-16 aspect-h-9", children: product.link ? /* @__PURE__ */ jsx(Link, { to: product.link, children: /* @__PURE__ */ jsx(
      "img",
      {
        src: product.image,
        alt: product.name,
        className: `object-cover ${showThumbnail ? "w-8 h-8" : "w-full h-48"}`
      }
    ) }) : /* @__PURE__ */ jsx(
      "img",
      {
        src: product.image,
        alt: product.name,
        className: `object-cover ${showThumbnail ? "w-8 h-8" : "w-full h-48"}`
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
      product.link ? /* @__PURE__ */ jsx(Link, { to: product.link, className: "hover:text-ishine-blue-600", children: /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: product.name }) }) : /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: product.name }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: product.description }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: product.features.map((feature, index) => /* @__PURE__ */ jsx(
        "span",
        {
          className: "px-3 py-1 bg-ishine-blue-100 text-ishine-blue-700 text-sm rounded-full",
          children: feature
        },
        index
      )) })
    ] })
  ] });
};
const IPLHairRemoval = () => {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-20", children: [
    /* @__PURE__ */ jsx(
      SEOTags,
      {
        title: t("iplHairRemoval.seo.title", "IPL Hair Removal Devices | Smart App, Ice Cooling, AI-Powered | iShine"),
        description: t("iplHairRemoval.seo.description", "Professional IPL hair removal devices including smart app-controlled, ice cooling, AI-powered, and skin sensor models. Custom manufacturing for beauty brands worldwide."),
        keywords: t("iplHairRemoval.seo.keywords", "IPL hair removal devices, smart IPL, ice cooling IPL, AI-powered IPL, skin sensor IPL, beauty devices")
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-ishine-pink-500 to-ishine-purple-600 text-white py-16", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: "text-center",
        children: [
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: t("iplHairRemoval.heroTitle") }),
          /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-gray-100 max-w-3xl mx-auto", children: t("iplHairRemoval.heroDescription") })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: t("iplHairRemoval.iplDevicesTitle") }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: t("iplHairRemoval.iplDevicesDescription") })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: iplDevices.map((device, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: index * 0.1 },
          children: /* @__PURE__ */ jsx(ProductCard, { product: device })
        },
        device.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: t("iplHairRemoval.accessoriesTitle") }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: t("iplHairRemoval.accessoriesDescription") })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: accessories.map((accessory, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: index * 0.1 },
          children: /* @__PURE__ */ jsx(ProductCard, { product: accessory })
        },
        accessory.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-6", children: t("iplHairRemoval.advancedIplTitle") }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-ishine-blue-500 rounded-full flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-sm", children: "1" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-900 mb-2", children: t("iplHairRemoval.smartTechnologyIntegration") }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: t("iplHairRemoval.smartTechnologyIntegrationDescription") })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-ishine-teal-500 rounded-full flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-sm", children: "2" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-900 mb-2", children: t("iplHairRemoval.coolingComfortSystems") }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: t("iplHairRemoval.coolingComfortSystemsDescription") })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-ishine-purple-500 rounded-full flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-sm", children: "3" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-900 mb-2", children: t("iplHairRemoval.intelligentSkinSensors") }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: t("iplHairRemoval.intelligentSkinSensorsDescription") })
                ] })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 30 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.6 },
          className: "relative",
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "https://i.postimg.cc/9Ft1qMrw/advanced-ipl.webp",
                alt: "IPL Technology",
                className: "rounded-lg shadow-xl"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-ishine-blue-500/20 to-transparent rounded-lg" })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsx(ContactFormA, {})
  ] });
};
export {
  IPLHairRemoval as default
};
