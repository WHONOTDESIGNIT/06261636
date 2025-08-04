import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Zap, Award, Shield, CheckCircle } from "lucide-react";
import { u as useLanguage, S as SEOTags, C as ContactFormA } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "react-router-dom";
import "react-helmet-async";
const DualLampIPL = () => {
  const { t } = useLanguage();
  const features = [
    {
      icon: Zap,
      title: t("solutions.dualLampIPL.features.technology.title"),
      description: t("solutions.dualLampIPL.features.technology.description")
    },
    {
      icon: Award,
      title: t("solutions.dualLampIPL.features.efficiency.title"),
      description: t("solutions.dualLampIPL.features.efficiency.description")
    },
    {
      icon: Shield,
      title: t("solutions.dualLampIPL.features.safety.title"),
      description: t("solutions.dualLampIPL.features.safety.description")
    },
    {
      icon: CheckCircle,
      title: t("solutions.dualLampIPL.features.customization.title"),
      description: t("solutions.dualLampIPL.features.customization.description")
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOTags,
      {
        title: "Dual Lamp IPL Device | Professional Dual-Light Hair Removal System",
        description: "Professional dual lamp IPL device with enhanced coverage and efficiency. Features dual light sources for faster treatment and improved hair removal results.",
        keywords: "dual lamp IPL, dual light IPL, professional IPL device, enhanced coverage IPL, faster hair removal"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white pt-20", children: [
      /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ jsx(Zap, { className: "w-16 h-16 mx-auto mb-6" }),
            /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: t("solutions.dualLampIPL.hero.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl max-w-3xl mx-auto text-gray-100 mb-10", children: t("solutions.dualLampIPL.hero.subtitle") })
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
            /* @__PURE__ */ jsx(feature.icon, { className: "w-12 h-12 text-pink-500 mx-auto mb-4" }),
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
  DualLampIPL as default
};
