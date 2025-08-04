import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Lightbulb, Cog, Package, Rocket, Users, Award } from "lucide-react";
import { u as useLanguage, S as SEOTags, C as ContactFormA } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "react-router-dom";
import "react-helmet-async";
const Solutions = () => {
  const { t } = useLanguage();
  const solutions = [
    {
      icon: Lightbulb,
      title: t("solutions.productDesignDevelopment", "Product Design & Development"),
      description: t("solutions.productDesignDevelopmentDescription", "From initial concept to final design, our expert team brings your IPL vision to life with cutting-edge technology and market insights."),
      features: ["Concept Development", "Industrial Design", "Technical Specifications", "Prototype Creation"]
    },
    {
      icon: Cog,
      title: t("solutions.oemManufacturing", "OEM Manufacturing"),
      description: t("solutions.oemManufacturingDescription", "Complete manufacturing solutions with your specifications. We handle production while you focus on your brand and market."),
      features: ["Custom Manufacturing", "Quality Control", "Scalable Production", "FDA GMP Compliance"]
    },
    {
      icon: Package,
      title: t("solutions.odmSolutions", "ODM Solutions"),
      description: t("solutions.odmSolutionsDescription", "Choose from our proven IPL designs and customize them with your branding, packaging, and unique features."),
      features: ["Ready-to-Market Designs", "Brand Customization", "Quick Time-to-Market", "Cost-Effective"]
    },
    {
      icon: Rocket,
      title: t("solutions.endToEndSupport", "End-to-End Support"),
      description: t("solutions.endToEndSupportDescription", "Complete project management from initial consultation to product launch and beyond, ensuring your success every step of the way."),
      features: ["Project Management", "Regulatory Support", "Launch Assistance", "After-Sales Service"]
    }
  ];
  const process = [
    { step: "01", title: t("solutions.consultation", "Consultation"), description: t("solutions.consultationDescription", "Understand your vision, market, and requirements") },
    { step: "02", title: t("solutions.design", "Design"), description: t("solutions.designDescription", "Create custom designs or adapt existing solutions") },
    { step: "03", title: t("solutions.prototype", "Prototype"), description: t("solutions.prototypeDescription", "Build and test prototypes to ensure quality") },
    { step: "04", title: t("solutions.manufacturing", "Manufacturing"), description: t("solutions.manufacturingDescription", "Full-scale production with quality assurance") },
    { step: "05", title: t("solutions.launch", "Launch"), description: t("solutions.launchDescription", "Support your market entry and ongoing success") }
  ];
  const industries = [
    { name: "Beauty Salons", description: "Professional-grade IPL devices for salon use", icon: "💄" },
    { name: "E-commerce Brands", description: "Direct-to-consumer IPL solutions", icon: "🛒" },
    { name: "Retail Chains", description: "Private label IPL devices for retail", icon: "🏪" },
    { name: "Medical Aesthetics", description: "Clinical-grade IPL for medical professionals", icon: "🏥" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-20", children: [
    /* @__PURE__ */ jsx(
      SEOTags,
      {
        title: t("solutions.seo.title", "IPL Device Manufacturing Solutions | Custom OEM/ODM Services | iShine"),
        description: t("solutions.seo.description", "Comprehensive IPL device manufacturing solutions including logo printing, packaging, drop shipping, global shipping, and brand customization. Turn your ideas into market-ready products."),
        keywords: t("solutions.seo.keywords", "IPL manufacturing solutions, OEM ODM services, logo printing, packaging solutions, drop shipping, brand customization")
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-ishine-teal-500 to-ishine-blue-500 text-white py-16", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: "text-center",
        children: [
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: t("solutions.completeIPLSolutions", "Complete IPL Solutions") }),
          /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-gray-100 max-w-3xl mx-auto", children: t("solutions.completeIPLSolutionsDescription", "From initial concept to market launch, we provide comprehensive OEM/ODM solutions that transform your IPL vision into successful products.") })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: t("solutions.ourSolutionPortfolio", "Our Solution Portfolio") }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: t("solutions.comprehensiveServices", "Comprehensive services to bring your IPL products to market successfully") })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: solutions.map((solution, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: index * 0.1 },
          className: "bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow",
          children: [
            /* @__PURE__ */ jsx(solution.icon, { className: "w-12 h-12 text-ishine-blue-500 mb-6" }),
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-gray-900 mb-4", children: solution.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: solution.description }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: solution.features.map((feature, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-center text-gray-700", children: [
              /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-ishine-blue-500 rounded-full mr-3" }),
              feature
            ] }, i)) })
          ]
        },
        solution.title
      )) })
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
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: t("solutions.ourProcess", "Our Process") }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: t("solutions.streamlinedWorkflow", "Streamlined workflow to ensure your project success") })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-ishine-blue-200 transform -translate-y-1/2" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-5 gap-8", children: process.map((step, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: index * 0.1 },
            className: "relative text-center",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-ishine-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10", children: step.step }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: step.title }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: step.description })
            ]
          },
          step.step
        )) })
      ] })
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
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: t("solutions.industriesWeServe", "Industries We Serve") }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: t("solutions.tailoredSolutions", "Tailored solutions for diverse market segments") })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: industries.map((industry, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: index * 0.1 },
          className: "bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow",
          children: [
            /* @__PURE__ */ jsx("div", { className: "text-4xl mb-4", children: industry.icon }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-3", children: industry.name }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: industry.description })
          ]
        },
        industry.name
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-gradient-to-r from-ishine-purple-500 to-ishine-pink-500 text-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: t("solutions.provenSuccess", "Proven Success") }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-100", children: t("solutions.numbersSpeak", "Numbers that speak to our expertise and commitment") })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [
        { icon: Users, number: "50+", label: t("solutions.globalClients", "Global Clients") },
        { icon: Package, number: "200+", label: t("solutions.productsLaunched", "Products Launched") },
        { icon: Award, number: "99.5%", label: t("solutions.qualityRate", "Quality Rate") },
        { icon: Rocket, number: "6", label: t("solutions.yearsExperience", "Years Experience") }
      ].map((stat, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: index * 0.1 },
          className: "text-center",
          children: [
            /* @__PURE__ */ jsx(stat.icon, { className: "w-12 h-12 mx-auto mb-4" }),
            /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold mb-2", children: stat.number }),
            /* @__PURE__ */ jsx("div", { className: "text-lg text-gray-200", children: stat.label })
          ]
        },
        stat.label
      )) })
    ] }) }),
    /* @__PURE__ */ jsx(ContactFormA, {})
  ] });
};
export {
  Solutions as default
};
