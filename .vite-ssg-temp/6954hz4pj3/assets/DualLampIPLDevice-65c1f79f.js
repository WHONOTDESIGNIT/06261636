import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Lightbulb, Zap, Award, Target } from "lucide-react";
import { u as useLanguage, C as ContactFormA } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "react-router-dom";
import "react-helmet-async";
const DualLampIPLDevice = () => {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-20", children: [
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-ishine-purple-500 to-ishine-orange-500 text-white py-16", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: "text-center",
        children: [
          /* @__PURE__ */ jsx(Lightbulb, { className: "w-16 h-16 mx-auto mb-6 text-white" }),
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: t("ipl.dualLamp.title") }),
          /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-gray-100 max-w-3xl mx-auto", children: t("ipl.dualLamp.desc") })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
      { icon: Lightbulb, title: t("ipl.dualLamp.features.dualLamps"), description: t("ipl.dualLamp.features.dualLampsDesc") },
      { icon: Zap, title: t("ipl.dualLamp.features.faster"), description: t("ipl.dualLamp.features.fasterDesc") },
      { icon: Award, title: t("ipl.dualLamp.features.proPower"), description: t("ipl.dualLamp.features.proPowerDesc") },
      { icon: Target, title: t("ipl.dualLamp.features.evenCoverage"), description: t("ipl.dualLamp.features.evenCoverageDesc") }
    ].map((feature, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: index * 0.1 },
        className: "text-center",
        children: [
          /* @__PURE__ */ jsx(feature.icon, { className: "w-12 h-12 text-ishine-purple-500 mx-auto mb-4" }),
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
  DualLampIPLDevice as default
};
