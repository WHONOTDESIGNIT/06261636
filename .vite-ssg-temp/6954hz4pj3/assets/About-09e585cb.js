import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Award, Users, Globe, Target } from "lucide-react";
import { u as useLanguage, S as SEOTags, C as ContactFormA } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "react-router-dom";
import "react-helmet-async";
const About = () => {
  const { t } = useLanguage();
  const values = [
    { icon: Award, title: t("about.values.qualityTitle"), description: t("about.values.qualityDesc") },
    { icon: Users, title: t("about.values.customerTitle"), description: t("about.values.customerDesc") },
    { icon: Globe, title: t("about.values.globalTitle"), description: t("about.values.globalDesc") },
    { icon: Target, title: t("about.values.innovationTitle"), description: t("about.values.innovationDesc") }
  ];
  const milestones = [
    { year: "2018", title: t("about.milestones.2018.title"), description: t("about.milestones.2018.desc") },
    { year: "2019", title: t("about.milestones.2019.title"), description: t("about.milestones.2019.desc") },
    { year: "2020", title: t("about.milestones.2020.title"), description: t("about.milestones.2020.desc") },
    { year: "2021", title: t("about.milestones.2021.title"), description: t("about.milestones.2021.desc") },
    { year: "2022", title: t("about.milestones.2022.title"), description: t("about.milestones.2022.desc") },
    { year: "2023", title: t("about.milestones.2023.title"), description: t("about.milestones.2023.desc") }
  ];
  const team = [
    { role: t("about.team.rnd"), count: "15+", description: t("about.team.rndDesc") },
    { role: t("about.team.quality"), count: "8+", description: t("about.team.qualityDesc") },
    { role: t("about.team.customer"), count: "10+", description: t("about.team.customerDesc") }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-20", children: [
    /* @__PURE__ */ jsx(
      SEOTags,
      {
        title: t("about.seo.title", "About iShine - Leading IPL Device Manufacturer | Innovation & Quality"),
        description: t("about.seo.description", "Discover iShine's journey as a leading IPL device manufacturer. Learn about our innovation, quality standards, and commitment to excellence in beauty device manufacturing."),
        keywords: t("about.seo.keywords", "about iShine, IPL manufacturer, beauty device company, innovation, quality, manufacturing excellence")
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-ishine-blue-500 via-ishine-purple-500 to-ishine-teal-500 text-white py-16", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: "text-center",
        children: [
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: t("about.heroTitle") }),
          /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-gray-100 max-w-3xl mx-auto", children: t("about.heroDesc") })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-6", children: t("about.storyTitle") }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-6", children: t("about.storyP1") }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-6", children: t("about.storyP2") }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: t("about.storyP3") })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 30 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.6 },
          className: "relative",
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600",
                alt: "iShine Manufacturing Facility",
                className: "rounded-lg shadow-xl"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-ishine-blue-500/20 to-transparent rounded-lg" })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: t("about.valuesTitle") }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: t("about.valuesDesc") })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: values.map((value, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: index * 0.1 },
          className: "bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow",
          children: [
            /* @__PURE__ */ jsx(value.icon, { className: "w-12 h-12 text-ishine-blue-500 mx-auto mb-4" }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-3", children: value.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: value.description })
          ]
        },
        value.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: t("about.journeyTitle") }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: t("about.journeyDesc") })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-ishine-blue-200" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-12", children: milestones.map((milestone, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.6, delay: index * 0.1 },
            className: `relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`,
            children: [
              /* @__PURE__ */ jsx("div", { className: `w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`, children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6", children: [
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-ishine-blue-500 mb-2", children: milestone.year }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: milestone.title }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: milestone.description })
              ] }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-ishine-blue-500 rounded-full border-4 border-white shadow-lg" })
            ]
          },
          milestone.year
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: t("about.teamTitle") }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: t("about.teamDesc") })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: team.map((member, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: index * 0.1 },
          className: "bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow",
          children: [
            /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-ishine-blue-500 mb-2", children: member.count }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-3", children: member.role }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: member.description })
          ]
        },
        member.role
      )) })
    ] }) }),
    /* @__PURE__ */ jsx(ContactFormA, {})
  ] });
};
export {
  About as default
};
