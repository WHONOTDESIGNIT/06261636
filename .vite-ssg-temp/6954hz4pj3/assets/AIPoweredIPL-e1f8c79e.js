import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Brain, Cpu, BarChart3, Sparkles } from "lucide-react";
import { u as useLanguage, C as ContactFormA } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "react-router-dom";
import "react-helmet-async";
const AIPoweredIPL = () => {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-20", children: [
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: "text-center",
        children: [
          /* @__PURE__ */ jsx(Brain, { className: "w-16 h-16 mx-auto mb-6 text-white" }),
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: t("ipl.aiPowered.title") }),
          /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-gray-100 max-w-3xl mx-auto", children: t("ipl.aiPowered.desc") })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
      { icon: Brain, title: t("ipl.aiPowered.features.aiTech"), description: t("ipl.aiPowered.features.aiTechDesc") },
      { icon: Cpu, title: t("ipl.aiPowered.features.smartProcessing"), description: t("ipl.aiPowered.features.smartProcessingDesc") },
      { icon: BarChart3, title: t("ipl.aiPowered.features.analytics"), description: t("ipl.aiPowered.features.analyticsDesc") },
      { icon: Sparkles, title: t("ipl.aiPowered.features.personalized"), description: t("ipl.aiPowered.features.personalizedDesc") }
    ].map((feature, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: index * 0.1 },
        className: "text-center",
        children: [
          /* @__PURE__ */ jsx(feature.icon, { className: "w-12 h-12 text-indigo-500 mx-auto mb-4" }),
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
  AIPoweredIPL as default
};
