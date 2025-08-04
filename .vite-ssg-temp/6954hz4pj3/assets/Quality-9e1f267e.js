import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { u as useLanguage, C as ContactFormA } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "react-helmet-async";
const qualityPoints = [
  "Medical-grade components and strict ISO 13485 biocompatibility testing",
  "Fully compliant with FDA, CE, IEC 60601, and IEC 62471 safety standards",
  "Integrated skin sensor: safe, precise, and prevents accidental flashes",
  "Advanced optical technology for effective, gentle hair removal",
  "Highly precise assembly and rigorous multi-stage QC",
  "Long-life flash lamps and wear-resistant accessories",
  "User-friendly design for maximum reliability and ease of use",
  "Trusted by global brands in Europe, North America, and Asia"
];
const Quality = () => {
  const { currentLanguage, t } = useLanguage();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white pt-20", children: [
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-[rgb(30,157,139)] to-[rgb(36,151,144)] text-white py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx(ShieldCheck, { className: "w-16 h-16 mx-auto mb-6 text-white" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6 tracking-tight", children: t("about.quality.heroTitle", "Quality You Can Trust") }),
      /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-gray-100", children: t("about.quality.heroDesc", "Every iShine IPL device is engineered for safety, reliability, and consistent results—meeting the world's most demanding B2B standards.") })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto px-4", children: /* @__PURE__ */ jsx("ul", { className: "space-y-6", children: qualityPoints.map((point, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
      /* @__PURE__ */ jsx(ShieldCheck, { className: "w-6 h-6 text-[rgb(0,116,224)] flex-shrink-0 mt-1 mr-3" }),
      /* @__PURE__ */ jsx("span", { className: "text-lg text-gray-800", children: t(`about.quality.point${idx + 1}`, point) })
    ] }, idx)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-[rgb(236,67,113)] to-[rgb(125,0,99)] py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-4 tracking-tight", children: t("about.quality.ctaTitle", "Want to Know More About iShine Quality?") }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-white mb-8", children: t("about.quality.ctaDesc", "Contact us for detailed quality documentation, certifications, and case studies.") }),
      /* @__PURE__ */ jsx(Link, { to: `/${currentLanguage}/contact`, children: /* @__PURE__ */ jsx(
        "button",
        {
          className: "bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold px-8 py-3 rounded-full transition",
          children: "Get in Touch"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-[#f9f9f9] py-16", children: /* @__PURE__ */ jsx(ContactFormA, {}) })
  ] });
};
export {
  Quality as default
};
