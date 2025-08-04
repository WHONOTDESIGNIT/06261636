import { jsxs, jsx } from "react/jsx-runtime";
import { FileCheck2 } from "lucide-react";
import { u as useLanguage, C as ContactFormA } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "react-router-dom";
import "react-helmet-async";
const fdaSteps = [
  {
    title: "Custom IPL Device Development",
    desc: "Design and manufacture your own IPL hair removal device with full OEM/ODM support, appearance patent protection, and technical documentation."
  },
  {
    title: "FDA Device Listing",
    desc: "We assist you in listing your IPL device with the FDA, ensuring your product is registered for legal U.S. distribution."
  },
  {
    title: "510(k) Submission Support",
    desc: "Guidance through the FDA 510(k) clearance process: predicate device research, testing, documentation, and regulatory communication—so you can obtain your unique K number efficiently."
  },
  {
    title: "Compliance & Documentation",
    desc: "All devices are engineered to meet FDA, IEC 60601, IEC 62471, and ISO 10993 standards, with full support for labeling, risk management, and post-market surveillance."
  }
];
const timeline = [
  { day: "Day 1", event: "FDA receives 510(k) application" },
  { day: "Day 7", event: "FDA sends acknowledgement letter with assigned K number or hold letter" },
  { day: "Day 15", event: "FDA conducts Acceptance Review—application accepted for Substantive Review or placed on RTA hold" },
  { day: "Day 60", event: "FDA conducts Substantive Review; may request additional info or place on hold" },
  { day: "Day 90", event: "FDA sends decision to company sponsors" },
  { day: "Day 100+", event: "If no decision, FDA provides written feedback explaining delay" }
];
const WinFDAListing = () => {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white pt-20", children: [
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-[rgb(30,157,139)] to-[rgb(36,151,144)] text-white py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx(FileCheck2, { className: "w-16 h-16 mx-auto mb-6 text-white" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6 tracking-tight", children: t("winFdaListing.hero.title") }),
      /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-gray-100", children: t("winFdaListing.hero.subtitle") })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10", children: fdaSteps.map((step) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "bg-[#f9f9f9] rounded-2xl shadow-sm p-8 flex flex-col items-start hover:shadow-md transition",
        children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2 text-[rgb(0,116,224)]", children: step.title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-800", children: step.desc })
        ]
      },
      step.title
    )) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-[#f9f9f9]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-[rgb(0,116,224)] text-center", children: "How iShine Guides Your 510(k) Journey" }),
      /* @__PURE__ */ jsx("p", { className: "text-center mb-8 text-gray-700", children: "Our regulatory team collects all necessary data, prepares and organizes documentation, and manages the entire submission process—so you can secure your K number with clarity and confidence." }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full bg-white rounded-xl shadow-sm text-left", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 font-semibold text-gray-700", children: "Timeline" }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 font-semibold text-gray-700", children: "Milestone" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: timeline.map((item, idx) => /* @__PURE__ */ jsxs("tr", { className: "border-b last:border-b-0", children: [
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-[rgb(0,116,224)] font-medium", children: item.day }),
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-gray-800", children: item.event })
        ] }, idx)) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 text-sm text-gray-600 text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Note:" }),
        " Actual review time may vary if FDA requests additional information or clarification."
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-[rgb(236,67,113)] to-[rgb(125,0,99)] py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-4 tracking-tight", children: "Ready to Launch Your FDA-Listed IPL Device?" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-white mb-8", children: "Our technical team will guide you through every regulatory step—from concept to FDA clearance and beyond." }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold px-8 py-3 rounded-full transition",
          children: "Get Expert Support"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-[#f9f9f9] py-16", children: /* @__PURE__ */ jsx(ContactFormA, {}) })
  ] });
};
export {
  WinFDAListing as default
};
