import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Gem, Snowflake, Shield, CheckCircle } from "lucide-react";
import { u as useLanguage, C as ContactFormA } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "react-router-dom";
import "react-helmet-async";
const SapphireLens = () => {
  const { t } = useLanguage();
  const features = [
    {
      icon: Gem,
      title: t("accessories.sapphireLens.features.cooling.title"),
      description: t("accessories.sapphireLens.features.cooling.description")
    },
    {
      icon: Snowflake,
      title: t("accessories.sapphireLens.features.comfort.title"),
      description: t("accessories.sapphireLens.features.comfort.description")
    },
    {
      icon: Shield,
      title: t("accessories.sapphireLens.features.safety.title"),
      description: t("accessories.sapphireLens.features.safety.description")
    },
    {
      icon: CheckCircle,
      title: t("accessories.sapphireLens.features.quality.title"),
      description: t("accessories.sapphireLens.features.quality.description")
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-20", children: [
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-20", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        children: [
          /* @__PURE__ */ jsx(Gem, { className: "w-16 h-16 mx-auto mb-6" }),
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: t("accessories.sapphireLens.hero.title") }),
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl max-w-3xl mx-auto text-gray-100 mb-10", children: t("accessories.sapphireLens.hero.subtitle") })
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
          /* @__PURE__ */ jsx(feature.icon, { className: "w-12 h-12 text-cyan-500 mx-auto mb-4" }),
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
  SapphireLens as default
};
