import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { User, Target } from "lucide-react";
import { u as useLanguage, C as ContactFormA } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "react-router-dom";
import "react-helmet-async";
const FounderMessage = () => {
  const { t } = useLanguage();
  const messageSections = [
    {
      icon: User,
      title: t("about.founderMessage.message.title"),
      content: t("about.founderMessage.message.content")
    },
    {
      icon: Target,
      title: t("about.founderMessage.vision.title"),
      content: t("about.founderMessage.vision.content")
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-20", children: [
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        children: [
          /* @__PURE__ */ jsx(User, { className: "w-16 h-16 mx-auto mb-6" }),
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: t("about.founderMessage.hero.title") }),
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl max-w-3xl mx-auto text-gray-100 mb-10", children: t("about.founderMessage.hero.subtitle") })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12", children: messageSections.map((section, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: index * 0.1 },
        className: "bg-gray-50 rounded-lg p-8",
        children: [
          /* @__PURE__ */ jsx(section.icon, { className: "w-12 h-12 text-indigo-500 mb-4" }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-gray-900 mb-4", children: section.title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: section.content })
        ]
      },
      section.title
    )) }) }) }),
    /* @__PURE__ */ jsx(ContactFormA, {})
  ] });
};
export {
  FounderMessage as default
};
