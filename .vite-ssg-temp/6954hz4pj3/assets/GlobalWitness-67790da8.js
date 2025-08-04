import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Globe, Heart } from "lucide-react";
import { u as useLanguage, C as ContactFormA } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "react-router-dom";
import "react-helmet-async";
const brandImages = [
  "https://i.postimg.cc/dVVYH6Sq/global-witness-01.jpg",
  "https://i.postimg.cc/0Nr9Qnpt/global-witness-04.jpg",
  "https://i.postimg.cc/m2w4yJjX/global-witness-07.jpg",
  "https://i.postimg.cc/bwBTXYLZ/global-witness-05.jpg",
  "https://i.postimg.cc/QMCy5nYT/7d7c6493e74549d2cb4dc6d0bbdfa153.jpg",
  "https://i.postimg.cc/8CnPB9pQ/Global-witness-02.webp",
  "https://i.postimg.cc/XNBXxjB2/global-witness-0.jpg",
  "https://i.postimg.cc/43WX4VCf/global-witness-01.webp",
  "https://i.postimg.cc/qMnXKR6c/ice-feeling-ipl-1.webp",
  "https://i.postimg.cc/9Ft1qMrw/advanced-ipl.webp"
  // ...add as many as needed
];
const GlobalWitness = () => {
  const { t } = useLanguage();
  const witnessSections = [
    {
      icon: Globe,
      title: t("about.globalWitness.impact.title"),
      content: t("about.globalWitness.impact.content")
    },
    {
      icon: Heart,
      title: t("about.globalWitness.partnerships.title"),
      content: t("about.globalWitness.partnerships.content")
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-20", children: [
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-20", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        children: [
          /* @__PURE__ */ jsx(Globe, { className: "w-16 h-16 mx-auto mb-6" }),
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: t("about.globalWitness.hero.title") }),
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl max-w-3xl mx-auto text-gray-100 mb-10", children: t("about.globalWitness.hero.subtitle") })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12", children: witnessSections.map((section, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: index * 0.1 },
        className: "bg-gray-50 rounded-lg p-8",
        children: [
          /* @__PURE__ */ jsx(section.icon, { className: "w-12 h-12 text-teal-500 mb-4" }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-gray-900 mb-4", children: section.title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: section.content })
        ]
      },
      section.title
    )) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "mx-auto",
        style: {
          maxWidth: "100%",
          background: "#f9f9f9",
          borderRadius: "24px",
          padding: "40px",
          columnCount: 5,
          columnGap: "10px"
        },
        children: brandImages.map((src, idx) => /* @__PURE__ */ jsx(
          "img",
          {
            src,
            alt: `Brand ${idx + 1}`,
            style: {
              width: "100%",
              marginBottom: "10px",
              borderRadius: "18px",
              display: "block",
              objectFit: "contain",
              background: "#fff"
            },
            loading: "lazy"
          },
          src
        ))
      }
    ) }),
    /* @__PURE__ */ jsx(ContactFormA, {})
  ] });
};
export {
  GlobalWitness as default
};
