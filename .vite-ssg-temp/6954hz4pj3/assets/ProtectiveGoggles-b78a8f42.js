import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Eye, Shield, Zap, CheckCircle } from "lucide-react";
import { u as useLanguage, C as ContactFormA } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "react-router-dom";
import "react-helmet-async";
const ProtectiveGoggles = () => {
  const { t } = useLanguage();
  const features = [
    {
      icon: Eye,
      title: t("accessories.protectiveGoggles.features.protection.title"),
      description: t("accessories.protectiveGoggles.features.protection.description")
    },
    {
      icon: Shield,
      title: t("accessories.protectiveGoggles.features.comfort.title"),
      description: t("accessories.protectiveGoggles.features.comfort.description")
    },
    {
      icon: Zap,
      title: t("accessories.protectiveGoggles.features.durability.title"),
      description: t("accessories.protectiveGoggles.features.durability.description")
    },
    {
      icon: CheckCircle,
      title: t("accessories.protectiveGoggles.features.safety.title"),
      description: t("accessories.protectiveGoggles.features.safety.description")
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-20", children: [
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-orange-600 to-red-600 text-white py-20", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        children: [
          /* @__PURE__ */ jsx(Eye, { className: "w-16 h-16 mx-auto mb-6" }),
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: t("accessories.protectiveGoggles.hero.title") }),
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl max-w-3xl mx-auto text-gray-100 mb-10", children: t("accessories.protectiveGoggles.hero.subtitle") })
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
          /* @__PURE__ */ jsx(feature.icon, { className: "w-12 h-12 text-orange-500 mx-auto mb-4" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: feature.title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: feature.description })
        ]
      },
      feature.title
    )) }) }) }),
    /* @__PURE__ */ jsx(ContactFormA, {})
  ] });
};
export {
  ProtectiveGoggles as default
};
