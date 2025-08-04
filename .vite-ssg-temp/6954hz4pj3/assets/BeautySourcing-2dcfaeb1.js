import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Search, Package, Globe, TrendingUp, Users, Info, ClipboardCheck } from "lucide-react";
import { u as useLanguage, C as ContactFormA } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "react-router-dom";
import "react-helmet-async";
const whyChoose = [
  {
    icon: Package,
    title: "Comprehensive Beauty Electronics Portfolio",
    description: "Access a curated network of manufacturers for all categories—skincare, haircare, and beauty tech."
  },
  {
    icon: Globe,
    title: "One-Stop Sourcing",
    description: "From idea to delivery, we manage the entire procurement lifecycle, reducing your time-to-market and risk."
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Vendor Selection",
    description: "Leverage our market intelligence and supplier analytics to maximize value and quality."
  }
];
const sourcingManagement = [
  {
    title: "Vendor Identification",
    desc: "In-depth market research to identify and evaluate suppliers based on your unique product requirements."
  },
  {
    title: "RFQ & Negotiation",
    desc: "Streamlined RFQ process and transparent negotiation support to secure optimal terms."
  },
  {
    title: "Vendor Audit & Inspections",
    desc: "On-site and virtual audits with comprehensive inspection protocols before production."
  },
  {
    title: "Factory Visits",
    desc: "Hands-on evaluation of manufacturing environments and engagement with engineering teams."
  }
];
const procurementServices = [
  {
    title: "Supplier Management",
    desc: "Ongoing relationship management and proactive risk mitigation with suppliers."
  },
  {
    title: "Logistics Services",
    desc: "End-to-end logistics coordination, customs clearance, and real-time tracking."
  },
  {
    title: "Production Transfer",
    desc: "Seamless transfer of production between factories or regions to optimize cost and lead time."
  },
  {
    title: "Production Management",
    desc: "Order placement, demand forecasting, and rigorous quality assurance with JIT inventory options."
  },
  {
    title: "Supply Chain Diversification",
    desc: "Strategic sourcing from multiple geographies and suppliers to reduce risk and enhance flexibility."
  }
];
const advantageFeatures = [
  {
    icon: Users,
    title: "Expert Sourcing Team",
    description: "Deep industry expertise and a global network of vetted suppliers."
  },
  {
    icon: Info,
    title: "Trend Intelligence",
    description: "Stay ahead with insights on emerging beauty tech, sustainability, and consumer preferences."
  },
  {
    icon: ClipboardCheck,
    title: "Custom Solutions",
    description: "OEM/ODM, private label, and packaging customization for every beauty electronics project."
  }
];
const processSteps = [
  "Submit Your Requirements",
  "Vendor Identification & Shortlisting",
  "RFQ & Negotiation",
  "Factory Audit & Sampling",
  "Order, Production & Quality Control",
  "Logistics & Delivery"
];
const frequentProducts = [
  "Facial Cleansing Brushes",
  "LED Beauty Masks",
  "Blackhead Removers",
  "High-Speed Hair Dryers",
  "Curling Irons & Straighteners",
  "RF (Radio Frequency) Devices",
  "IPL Hair Removal Devices (OEM/ODM)",
  "Accessories: Sapphire lenses, adapters, goggles, filters"
];
const BeautySourcing = () => {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-20 overflow-x-hidden", children: [
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-pink-500 to-purple-600 text-white py-20", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        children: [
          /* @__PURE__ */ jsx(Search, { className: "w-16 h-16 mx-auto mb-6" }),
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: t("beautySourcing.hero.title") }),
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-100", children: t("beautySourcing.hero.subtitle") }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/sourcing-consultation",
              className: "inline-block bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300",
              children: "Request a Sourcing Consultation"
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-center mb-12 text-pink-600", children: "Why Choose iShine for Beauty Sourcing?" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-12", children: whyChoose.map(({ icon: Icon, title, description }) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "bg-gray-50 rounded-lg p-6 shadow",
          children: [
            /* @__PURE__ */ jsx(Icon, { className: "w-10 h-10 text-pink-500 mb-4 mx-auto" }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-center mb-2", children: title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-center text-sm", children: description })
          ]
        },
        title
      )) }),
      /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "/sourcing-categories",
          className: "inline-block bg-[rgb(222,117,16)] hover:bg-[rgb(198,104,14)] text-white font-semibold py-3 px-8 rounded-lg shadow transition-colors duration-300",
          children: "Explore Our Sourcing Categories"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center mb-12 text-pink-600", children: "Sourcing Management Services" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10", children: sourcingManagement.map(({ title, desc }) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "bg-white rounded-lg shadow p-6",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-sm", children: desc })
          ]
        },
        title
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center mb-12 text-pink-600", children: "Global Procurement Services" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10", children: procurementServices.map(({ title, desc }) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "bg-gray-50 rounded-lg shadow p-6",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-sm", children: desc })
          ]
        },
        title
      )) }),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "/sourcing-playbook",
          className: "inline-block bg-[rgb(0,102,161)] hover:bg-[rgb(0,86,136)] text-white font-semibold py-3 px-8 rounded-lg shadow transition-colors duration-300",
          children: "Download Our Sourcing Playbook"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center mb-12 text-pink-600", children: "The iShine Advantage" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-12", children: advantageFeatures.map(({ icon: Icon, title, description }) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "bg-white rounded-lg shadow p-6 text-center",
          children: [
            /* @__PURE__ */ jsx(Icon, { className: "w-10 h-10 text-pink-500 mb-4 mx-auto" }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-sm", children: description })
          ]
        },
        title
      )) }),
      /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "/start-sourcing-project",
          className: "inline-block bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300",
          children: "Start Your Sourcing Project"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-12 text-pink-600", children: "How Our Process Works" }),
      /* @__PURE__ */ jsx("ol", { className: "space-y-6 text-left mx-auto max-w-3xl list-decimal list-inside text-gray-700", children: processSteps.map((step, idx) => /* @__PURE__ */ jsx(
        motion.li,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: idx * 0.1 },
          children: step
        },
        step
      )) }),
      /* @__PURE__ */ jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "/contact-sourcing-expert",
          className: "inline-block bg-[rgb(222,117,16)] hover:bg-[rgb(198,104,14)] text-white font-semibold py-3 px-8 rounded-lg shadow transition-colors duration-300",
          children: "Contact Sourcing Expert"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center mb-12 text-pink-600", children: "Frequently Sourced Beauty Electronics" }),
      /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 list-disc pl-6 mx-auto max-w-3xl", children: frequentProducts.map((item) => /* @__PURE__ */ jsx("li", { children: item }, item)) }),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "/full-product-list",
          className: "inline-block bg-[rgb(0,102,161)] hover:bg-[rgb(0,86,136)] text-white font-semibold py-3 px-8 rounded-lg shadow transition-colors duration-300",
          children: "Browse Full Product List"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 text-pink-600", children: "Data-Driven Sourcing Insights" }),
      /* @__PURE__ */ jsx(
        motion.blockquote,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "text-lg italic text-gray-700",
          children: `"Strategic sourcing in beauty electronics is about more than price—it's about supplier reliability, trend alignment, and operational agility. Our data shows that diversified supply chains and rigorous vendor audits reduce procurement risk by over 30%."`
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6 text-pink-600", children: "Need a Custom Solution?" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-8", children: "Our sourcing managers are ready to help you build your next beauty device or accessory line—faster, safer, and smarter." }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/get-a-quote",
          className: "inline-block bg-[rgb(0,102,161)] hover:bg-[rgb(0,86,136)] text-white font-semibold py-3 px-8 rounded-lg shadow transition-colors duration-300",
          children: "Get A Quote!"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(ContactFormA, {})
  ] });
};
export {
  BeautySourcing as default
};
