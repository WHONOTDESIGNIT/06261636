import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Cpu, TrendingUp, Globe, Lightbulb, Snowflake, Layers, Gem, Zap, ShieldCheck, Smartphone } from "lucide-react";
import { u as useLanguage, C as ContactFormA } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "react-router-dom";
import "react-helmet-async";
const timeline = [
  {
    year: "2015",
    title: "First-Gen IPL Devices",
    desc: "Safe, reliable IPL for home use set the foundation for global OEM partnerships."
  },
  {
    year: "2018",
    title: "Ice Cooling IPL",
    desc: "Integrated cooling modules (~10°C) for pain-free sessions and sensitive-skin suitability."
  },
  {
    year: "2019",
    title: "Multi-Function IPL",
    desc: "Modular attachments enable hair removal and skin rejuvenation on one platform."
  },
  {
    year: "2020",
    title: "Sapphire IPL",
    desc: "Sapphire Contact Cooling ensures real-time temperature control and higher energy delivery."
  },
  {
    year: "2021",
    title: "Dual-Lamp IPL",
    desc: "Dual-lamp architecture boosts flash counts, lifespan, and body-area coverage."
  },
  {
    year: "2022",
    title: "Skin Sensor IPL",
    desc: "On-board sensors auto-adjust energy for broader skin-tone compatibility and safety."
  },
  {
    year: "2023",
    title: "Smart App-Connected IPL",
    desc: "Bluetooth/Wi-Fi devices with app for guidance, analytics, and remote diagnostics."
  }
];
const capabilities = [
  { icon: Snowflake, title: "Ice Cooling IPL", desc: "Proprietary cooling for pain-free treatment." },
  { icon: Layers, title: "Multi-Function IPL", desc: "Modular heads for hair removal & skincare." },
  { icon: Gem, title: "Sapphire IPL", desc: "Sapphire window for advanced cooling & safety." },
  { icon: Zap, title: "Dual-Lamp IPL", desc: "Extended lifespan & efficiency with dual lamps." },
  { icon: ShieldCheck, title: "Skin Sensor IPL", desc: "Real-time tone detection & adaptive energy." },
  { icon: Smartphone, title: "Smart App IPL", desc: "App integration for data-driven treatments." }
];
const Technology = () => {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-20 overflow-x-hidden", children: [
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-ishine-teal-500 to-ishine-blue-500 text-white py-20", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        children: [
          /* @__PURE__ */ jsx(Cpu, { className: "w-16 h-16 mx-auto mb-6" }),
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: t("about.technology.hero.title") }),
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl max-w-3xl mx-auto text-gray-100 mb-10", children: t("about.technology.hero.description") })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center mb-12 text-ishine-teal-600", children: t("about.technology.timeline.title") }),
      /* @__PURE__ */ jsx("div", { className: "relative border-l-2 border-ishine-teal-500 pl-6 space-y-12", children: timeline.map((item, idx) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: idx * 0.1 },
          className: "relative ml-2.5",
          children: [
            /* @__PURE__ */ jsx("span", { className: "absolute -left-3 top-2 w-4 h-4 rounded-full bg-ishine-teal-500" }),
            /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-ishine-blue-600", children: [
              item.year,
              ": ",
              item.title
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-sm mt-1 max-w-3xl", children: item.desc })
          ]
        },
        item.year
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center mb-12 text-ishine-teal-600", children: t("about.technology.capabilities.title") }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10", children: capabilities.map(({ icon: Icon, title, desc }) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "bg-white rounded-lg shadow p-6 text-center",
          children: [
            /* @__PURE__ */ jsx(Icon, { className: "w-10 h-10 text-ishine-teal-500 mb-4 mx-auto" }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-sm", children: desc })
          ]
        },
        title
      )) }),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "/request-custom-solution",
          className: "inline-block bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300",
          children: t("about.technology.capabilities.requestCustomSolution")
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 text-ishine-teal-600", children: t("about.technology.dataDrivenRnD.title") }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 text-left", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx(TrendingUp, { className: "w-6 h-6 text-ishine-teal-500 mt-1" }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-700 text-sm", children: [
            /* @__PURE__ */ jsxs("strong", { children: [
              t("about.technology.dataDrivenRnD.continuousInnovation"),
              ":"
            ] }),
            " Annual R&D investment targeting user comfort, safety, and clinical efficacy."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx(Globe, { className: "w-6 h-6 text-ishine-teal-500 mt-1" }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-700 text-sm", children: [
            /* @__PURE__ */ jsxs("strong", { children: [
              t("about.technology.dataDrivenRnD.globalCompliance"),
              ":"
            ] }),
            " All devices undergo rigorous FDA, CE, and international standard testing."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx(Lightbulb, { className: "w-6 h-6 text-ishine-teal-500 mt-1" }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-700 text-sm", children: [
            /* @__PURE__ */ jsxs("strong", { children: [
              t("about.technology.dataDrivenRnD.userCentricDesign"),
              ":"
            ] }),
            " Every generation is shaped by user feedback, clinical data, and market trends."
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 text-ishine-teal-600", children: t("about.technology.futureReady.title") }),
      /* @__PURE__ */ jsxs("p", { className: "text-gray-700 max-w-4xl mx-auto mb-8", children: [
        /* @__PURE__ */ jsxs("strong", { children: [
          t("about.technology.futureReady.aiPoweredIpl"),
          ":"
        ] }),
        " Next-gen devices will feature AI-driven personalization and predictive maintenance.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsxs("strong", { children: [
          t("about.technology.futureReady.sustainability"),
          ":"
        ] }),
        " We are developing eco-friendly materials, energy-efficient designs, and recyclable packaging."
      ] }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/contact-us",
          className: "inline-block bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300",
          children: t("about.technology.futureReady.haveAVision")
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(ContactFormA, {})
  ] });
};
export {
  Technology as default
};
