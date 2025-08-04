import { jsxs, jsx } from "react/jsx-runtime";
import { Brush } from "lucide-react";
import { u as useLanguage, C as ContactFormA } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "react-router-dom";
import "react-helmet-async";
const LogoPrinting = () => {
  const { t } = useLanguage();
  const screenPrintingInfo = {
    label: t("logoPrinting.screenPrinting.label"),
    img: "/images/logo-screen-printing.jpg",
    // 占位图片路径
    desc: t("logoPrinting.screenPrinting.description")
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white pt-20", children: [
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-[rgb(30,157,139)] to-[rgb(36,151,144)] text-white py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx(Brush, { className: "w-16 h-16 mx-auto mb-6 text-white" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6 tracking-tight", children: t("logoPrinting.hero.title") }),
      /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-gray-100", children: t("logoPrinting.hero.subtitle") })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-[#f9f9f9] rounded-2xl shadow-sm p-8 flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: screenPrintingInfo.img,
          alt: screenPrintingInfo.label,
          className: "w-[300px] h-[200px] object-contain mb-6 rounded-xl border",
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-semibold mb-4 flex items-center justify-center gap-2", children: [
        screenPrintingInfo.label,
        /* @__PURE__ */ jsx(Brush, { className: "w-7 h-7 text-[rgb(0,116,224)]" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700 max-w-2xl", children: screenPrintingInfo.desc })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-10 bg-[#f9f9f9]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 space-y-6 text-left", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("span", { className: "font-bold text-[rgb(0,116,224)]", children: [
          t("logoPrinting.info.colors.label"),
          ":"
        ] }),
        " ",
        t("logoPrinting.info.colors.value")
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("span", { className: "font-bold text-[rgb(0,116,224)]", children: [
          t("logoPrinting.info.surface.label"),
          ":"
        ] }),
        " ",
        t("logoPrinting.info.surface.value")
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("span", { className: "font-bold text-[rgb(0,116,224)]", children: [
          t("logoPrinting.info.leadTime.label"),
          ":"
        ] }),
        " ",
        t("logoPrinting.info.leadTime.value")
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("span", { className: "font-bold text-[rgb(0,116,224)]", children: [
          t("logoPrinting.info.moq.label"),
          ":"
        ] }),
        " ",
        t("logoPrinting.info.moq.value")
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("span", { className: "font-bold text-[rgb(0,116,224)]", children: [
          t("logoPrinting.info.premium.label"),
          ":"
        ] }),
        " ",
        t("logoPrinting.info.premium.value")
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-[rgb(236,67,113)] to-[rgb(125,0,99)] py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-4 tracking-tight", children: t("logoPrinting.cta.title") }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-white mb-8", children: t("logoPrinting.cta.subtitle") }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold px-8 py-3 rounded-full transition",
          children: t("logoPrinting.cta.button")
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-[#f9f9f9] py-16", children: /* @__PURE__ */ jsx(ContactFormA, {}) })
  ] });
};
export {
  LogoPrinting as default
};
