import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Headphones, ListChecks, Shield, RotateCcw, DollarSign, FileText, Info } from "lucide-react";
import { u as useLanguage, C as ContactFormA } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "react-router-dom";
import "react-helmet-async";
const AfterSalesService = () => {
  const { t } = useLanguage();
  const scenarios = [
    "Not reviewing the user manual thoroughly before use",
    "Using the device without confirming skin/hair type suitability",
    "Selecting an energy level beyond personal skin tolerance",
    "Unstable local voltage affecting device performance",
    "Blade-induced scratches during pre-treatment",
    "Device not fully contacting skin or not held at a 90° angle",
    "Sensitive skin experiencing pronounced discomfort",
    "Product or packaging damaged during shipping",
    "Skipping pre-use shaving, leading to hair burns",
    "Not wearing protective goggles, resulting in eye discomfort or injury",
    "Other unforeseen causes"
  ];
  const bestPractices = [
    "Read the User Manual: Review all guidelines and contraindications before first use.",
    "Check Suitability: Confirm your skin and hair type match device recommendations.",
    "Start Low, Go Slow: Always begin with the lowest energy setting; increase only if comfortable.",
    "Voltage Check: Ensure your local voltage matches device requirements.",
    "Pre-Shave Properly: Shave treatment areas to avoid hair burns.",
    "Wear Safety Goggles: Always use provided eye protection.",
    "Correct Device Angle: Maintain full contact and a 90° angle between device and skin.",
    "Gentle Handling: Avoid using blades or accessories that may cause injury.",
    "Unbox Carefully: Inspect for shipping damage before use.",
    "For Sensitive Skin: Test on a small area first; discontinue if discomfort occurs."
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-20 overflow-x-hidden", children: [
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-ishine-blue-500 to-ishine-teal-500 text-white py-20", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        children: [
          /* @__PURE__ */ jsx(Headphones, { className: "w-16 h-16 mx-auto mb-6" }),
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: t("afterSalesService.hero.title") }),
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-100", children: t("afterSalesService.hero.subtitle") })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "text-3xl md:text-4xl font-bold text-center mb-12 text-ishine-blue-500",
          children: t("afterSalesService.commonIssues.title")
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12 mb-16", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h3", { className: "flex items-center gap-2 text-xl font-semibold mb-4", children: [
            /* @__PURE__ */ jsx(ListChecks, { className: "w-6 h-6 text-ishine-teal-500" }),
            " ",
            t("afterSalesService.commonIssues.scenarios.title")
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "list-disc pl-6 space-y-3 text-gray-700", children: scenarios.map((item) => /* @__PURE__ */ jsx(
            motion.li,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.4 },
              children: item
            },
            item
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h3", { className: "flex items-center gap-2 text-xl font-semibold mb-4", children: [
            /* @__PURE__ */ jsx(Shield, { className: "w-6 h-6 text-ishine-teal-500" }),
            " ",
            t("afterSalesService.commonIssues.prevention.title")
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "list-disc pl-6 space-y-3 text-gray-700", children: bestPractices.map((item) => /* @__PURE__ */ jsx(
            motion.li,
            {
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.4 },
              children: item
            },
            item
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "/how-to-use-guide",
          className: "inline-block bg-[rgb(222,117,16)] hover:bg-[rgb(198,104,14)] text-white font-semibold py-3 px-8 rounded-lg shadow transition-colors duration-300",
          children: t("afterSalesService.commonIssues.howToUseGuide")
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "text-3xl md:text-4xl font-bold text-center mb-12 text-ishine-blue-500",
          children: t("afterSalesService.commitments.title")
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-10 mb-10", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: 0.1 },
            className: "bg-white rounded-lg shadow p-6 text-center",
            children: [
              /* @__PURE__ */ jsx(Shield, { className: "w-10 h-10 mx-auto text-ishine-blue-500 mb-4" }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: t("afterSalesService.commitments.warranty.title") }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: t("afterSalesService.commitments.warranty.description") })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: 0.2 },
            className: "bg-white rounded-lg shadow p-6 text-center",
            children: [
              /* @__PURE__ */ jsx(RotateCcw, { className: "w-10 h-10 mx-auto text-ishine-blue-500 mb-4" }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: t("afterSalesService.commitments.return.title") }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: t("afterSalesService.commitments.return.description") })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: 0.3 },
            className: "bg-white rounded-lg shadow p-6 text-center",
            children: [
              /* @__PURE__ */ jsx(DollarSign, { className: "w-10 h-10 mx-auto text-ishine-blue-500 mb-4" }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: t("afterSalesService.commitments.moneyBack.title") }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: t("afterSalesService.commitments.moneyBack.description") })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-gray-600 mb-10 max-w-3xl mx-auto text-sm", children: t("afterSalesService.commitments.note") }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-center gap-6", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/warranty-claim",
            className: "bg-[rgb(0,102,161)] hover:bg-[rgb(0,86,136)] text-white font-semibold py-3 px-8 rounded-lg shadow transition-colors duration-300",
            children: t("afterSalesService.commitments.warrantyClaim")
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/return-request",
            className: "bg-[rgb(0,102,161)] hover:bg-[rgb(0,86,136)] text-white font-semibold py-3 px-8 rounded-lg shadow transition-colors duration-300",
            children: t("afterSalesService.commitments.returnRequest")
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-ishine-blue-500 mb-6 text-center", children: t("afterSalesService.returnsTerms.title") }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-gray-700", children: [
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: t("afterSalesService.returnsTerms.returnWindow") }) }),
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: t("afterSalesService.returnsTerms.process") }) }),
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: t("afterSalesService.returnsTerms.exclusions") }) }),
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: t("afterSalesService.returnsTerms.refunds") }) }),
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: t("afterSalesService.returnsTerms.warrantyExclusions") }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "/terms-and-conditions",
          className: "inline-flex items-center gap-2 text-ishine-blue-500 hover:text-ishine-teal-500 font-semibold transition-colors duration-300",
          children: [
            /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5" }),
            " ",
            t("afterSalesService.returnsTerms.fullTerms")
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-ishine-blue-500 mb-8", children: t("afterSalesService.insights.title") }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            className: "bg-white rounded-lg shadow p-8",
            children: [
              /* @__PURE__ */ jsx(Info, { className: "w-10 h-10 mx-auto text-ishine-teal-500 mb-4" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-lg", children: t("afterSalesService.insights.failureRate") })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: 0.2 },
            className: "bg-white rounded-lg shadow p-8",
            children: [
              /* @__PURE__ */ jsx(Info, { className: "w-10 h-10 mx-auto text-ishine-teal-500 mb-4" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-lg", children: t("afterSalesService.insights.failureRate") })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(ContactFormA, {})
  ] });
};
export {
  AfterSalesService as default
};
