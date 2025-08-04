import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Truck, Box, Zap, CheckCircle } from "lucide-react";
import { u as useLanguage, S as SEOTags, C as ContactFormA } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "react-router-dom";
import "react-helmet-async";
const DropShipping = () => {
  const { t } = useLanguage();
  const features = [
    {
      icon: Truck,
      title: t("solutions.dropShipping.features.logistics.title"),
      description: t("solutions.dropShipping.features.logistics.description")
    },
    {
      icon: Box,
      title: t("solutions.dropShipping.features.inventory.title"),
      description: t("solutions.dropShipping.features.inventory.description")
    },
    {
      icon: Zap,
      title: t("solutions.dropShipping.features.automation.title"),
      description: t("solutions.dropShipping.features.automation.description")
    },
    {
      icon: CheckCircle,
      title: t("solutions.dropShipping.features.support.title"),
      description: t("solutions.dropShipping.features.support.description")
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOTags,
      {
        title: "Drop Shipping Solutions | White Label IPL Device Distribution",
        description: "Complete drop shipping solutions for IPL hair removal devices. White label packaging, direct customer shipping, and inventory management for your business.",
        keywords: "drop shipping, white label IPL, direct shipping, inventory management, business solutions"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-20", children: [
      /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-20", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ jsx(Truck, { className: "w-16 h-16 mx-auto mb-6" }),
            /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: t("solutions.dropShipping.hero.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl max-w-3xl mx-auto text-gray-100 mb-10", children: t("solutions.dropShipping.hero.subtitle") })
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: features.map((feature, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: index * 0.1 },
          className: "text-center",
          children: [
            /* @__PURE__ */ jsx(feature.icon, { className: "w-12 h-12 text-yellow-500 mx-auto mb-4" }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: feature.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: feature.description })
          ]
        },
        feature.title
      )) }) }) }),
      /* @__PURE__ */ jsx(ContactFormA, {})
    ] })
  ] });
};
export {
  DropShipping as default
};
