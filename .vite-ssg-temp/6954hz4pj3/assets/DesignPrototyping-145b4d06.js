import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Palette, Target, Award, CheckCircle } from "lucide-react";
import { u as useLanguage, S as SEOTags, C as ContactFormA } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "react-router-dom";
import "react-helmet-async";
const DesignPrototyping = () => {
  const { t } = useLanguage();
  const features = [
    {
      icon: Palette,
      title: t("solutions.designPrototyping.features.design.title"),
      description: t("solutions.designPrototyping.features.design.description")
    },
    {
      icon: Target,
      title: t("solutions.designPrototyping.features.prototyping.title"),
      description: t("solutions.designPrototyping.features.prototyping.description")
    },
    {
      icon: Award,
      title: t("solutions.designPrototyping.features.testing.title"),
      description: t("solutions.designPrototyping.features.testing.description")
    },
    {
      icon: CheckCircle,
      title: t("solutions.designPrototyping.features.refinement.title"),
      description: t("solutions.designPrototyping.features.refinement.description")
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOTags,
      {
        title: "Design & Prototyping | Custom IPL Device Development",
        description: "Professional design and prototyping services for custom IPL hair removal devices. Rapid prototyping, 3D modeling, and engineering for innovative beauty tech.",
        keywords: "design prototyping, IPL device development, custom IPL, rapid prototyping, 3D modeling, beauty tech engineering"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-20", children: [
      /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ jsx(Palette, { className: "w-16 h-16 mx-auto mb-6" }),
            /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: t("solutions.designPrototyping.hero.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl max-w-3xl mx-auto text-gray-100 mb-10", children: t("solutions.designPrototyping.hero.subtitle") })
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
            /* @__PURE__ */ jsx(feature.icon, { className: "w-12 h-12 text-blue-500 mx-auto mb-4" }),
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
  DesignPrototyping as default
};
