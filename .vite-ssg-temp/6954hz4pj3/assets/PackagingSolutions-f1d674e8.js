import { jsx, jsxs } from "react/jsx-runtime";
import { Target, Zap, Settings } from "lucide-react";
import { u as useLanguage, C as ContactFormA } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "react-router-dom";
import "react-helmet-async";
const MultiHeadIPL = () => {
  const { t } = useLanguage();
  const headTypes = [
    {
      name: t("multiHeadIPL.heads.precisionFace.name"),
      spotSize: t("multiHeadIPL.heads.precisionFace.spotSize"),
      application: t("multiHeadIPL.heads.precisionFace.application"),
      features: t("multiHeadIPL.heads.precisionFace.features"),
      icon: /* @__PURE__ */ jsx(Target, { className: "w-8 h-8 text-[rgb(0,116,224)]" })
    },
    {
      name: t("multiHeadIPL.heads.underarm.name"),
      spotSize: t("multiHeadIPL.heads.underarm.spotSize"),
      application: t("multiHeadIPL.heads.underarm.application"),
      features: t("multiHeadIPL.heads.underarm.features"),
      icon: /* @__PURE__ */ jsx(Target, { className: "w-8 h-8 text-[rgb(0,116,224)]" })
    },
    {
      name: t("multiHeadIPL.heads.bikini.name"),
      spotSize: t("multiHeadIPL.heads.bikini.spotSize"),
      application: t("multiHeadIPL.heads.bikini.application"),
      features: t("multiHeadIPL.heads.bikini.features"),
      icon: /* @__PURE__ */ jsx(Target, { className: "w-8 h-8 text-[rgb(0,116,224)]" })
    },
    {
      name: t("multiHeadIPL.heads.largeBody.name"),
      spotSize: t("multiHeadIPL.heads.largeBody.spotSize"),
      application: t("multiHeadIPL.heads.largeBody.application"),
      features: t("multiHeadIPL.heads.largeBody.features"),
      icon: /* @__PURE__ */ jsx(Target, { className: "w-8 h-8 text-[rgb(0,116,224)]" })
    },
    {
      name: t("multiHeadIPL.heads.sapphire.name"),
      spotSize: t("multiHeadIPL.heads.sapphire.spotSize"),
      application: t("multiHeadIPL.heads.sapphire.application"),
      features: t("multiHeadIPL.heads.sapphire.features"),
      icon: /* @__PURE__ */ jsx(Zap, { className: "w-8 h-8 text-[rgb(0,116,224)]" })
    },
    {
      name: t("multiHeadIPL.heads.professional.name"),
      spotSize: t("multiHeadIPL.heads.professional.spotSize"),
      application: t("multiHeadIPL.heads.professional.application"),
      features: t("multiHeadIPL.heads.professional.features"),
      icon: /* @__PURE__ */ jsx(Target, { className: "w-8 h-8 text-[rgb(0,116,224)]" })
    }
  ];
  const technicalSpecs = [
    { parameter: t("multiHeadIPL.specs.spotSize.parameter"), value: t("multiHeadIPL.specs.spotSize.value"), note: t("multiHeadIPL.specs.spotSize.note") },
    { parameter: t("multiHeadIPL.specs.wavelength.parameter"), value: t("multiHeadIPL.specs.wavelength.value"), note: t("multiHeadIPL.specs.wavelength.note") },
    { parameter: t("multiHeadIPL.specs.cooling.parameter"), value: t("multiHeadIPL.specs.cooling.value"), note: t("multiHeadIPL.specs.cooling.note") },
    { parameter: t("multiHeadIPL.specs.energy.parameter"), value: t("multiHeadIPL.specs.energy.value"), note: t("multiHeadIPL.specs.energy.note") },
    { parameter: t("multiHeadIPL.specs.coverage.parameter"), value: t("multiHeadIPL.specs.coverage.value"), note: t("multiHeadIPL.specs.coverage.note") }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white pt-20", children: [
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-[rgb(30,157,139)] to-[rgb(36,151,144)] text-white py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx(Settings, { className: "w-16 h-16 mx-auto mb-6 text-white" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6 tracking-tight", children: t("multiHeadIPL.hero.title") }),
      /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-gray-100", children: t("multiHeadIPL.hero.subtitle") })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-8 text-[rgb(0,116,224)] text-center", children: t("multiHeadIPL.portfolio.title") }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: headTypes.map((head) => /* @__PURE__ */ jsxs("div", { className: "bg-[#f9f9f9] rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition", children: [
        head.icon,
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", children: head.name }),
        /* @__PURE__ */ jsx("div", { className: "text-[rgb(0,116,224)] font-bold text-xl mb-2", children: head.spotSize }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-800 text-sm mb-2", children: head.application }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-xs", children: head.features })
      ] }, head.name)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-[#f9f9f9]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-8 text-[rgb(0,116,224)] text-center", children: t("multiHeadIPL.specs.title") }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full bg-white rounded-xl shadow-sm text-left", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 font-semibold text-gray-700", children: t("multiHeadIPL.specs.table.parameter") }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 font-semibold text-gray-700", children: t("multiHeadIPL.specs.table.range") }),
          /* @__PURE__ */ jsx("th", { className: "py-3 px-4 font-semibold text-gray-700", children: t("multiHeadIPL.specs.table.notes") })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: technicalSpecs.map((spec, idx) => /* @__PURE__ */ jsxs("tr", { className: "border-b last:border-b-0", children: [
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-gray-800", children: spec.parameter }),
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-[rgb(0,116,224)] font-medium", children: spec.value }),
          /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-gray-600", children: spec.note })
        ] }, idx)) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-8 text-[rgb(0,116,224)] text-center", children: t("multiHeadIPL.features.title") }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-[#f9f9f9] rounded-xl p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-3 text-[rgb(0,116,224)]", children: t("multiHeadIPL.features.sapphire.title") }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-800 text-sm", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              "• ",
              t("multiHeadIPL.features.sapphire.painReduction")
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              "• ",
              t("multiHeadIPL.features.sapphire.continuousCooling")
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              "• ",
              t("multiHeadIPL.features.sapphire.safeSkinTypes")
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              "• ",
              t("multiHeadIPL.features.sapphire.temperatureControl")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-[#f9f9f9] rounded-xl p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-3 text-[rgb(0,116,224)]", children: t("multiHeadIPL.features.recognition.title") }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-800 text-sm", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              "• ",
              t("multiHeadIPL.features.recognition.adaptation")
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              "• ",
              t("multiHeadIPL.features.recognition.recognition")
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              "• ",
              t("multiHeadIPL.features.recognition.feedback")
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              "• ",
              t("multiHeadIPL.features.recognition.safety")
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 bg-[#f9f9f9]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[rgb(0,116,224)] mb-4", children: t("multiHeadIPL.process.title") }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-6 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-[rgb(0,116,224)] font-bold text-lg", children: "01" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-800 mt-1", children: t("multiHeadIPL.process.step1") })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-[rgb(0,116,224)] font-bold text-lg", children: "02" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-800 mt-1", children: t("multiHeadIPL.process.step2") })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-[rgb(0,116,224)] font-bold text-lg", children: "03" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-800 mt-1", children: t("multiHeadIPL.process.step3") })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-[rgb(0,116,224)] font-bold text-lg", children: "04" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-800 mt-1", children: t("multiHeadIPL.process.step4") })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[rgb(0,116,224)] mb-6", children: t("multiHeadIPL.benefits.title") }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-[rgb(236,67,113)] mb-2", children: "40%" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: t("multiHeadIPL.benefits.faster") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-[rgb(236,67,113)] mb-2", children: "90%" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: t("multiHeadIPL.benefits.painReduction") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-[rgb(236,67,113)] mb-2", children: "85%" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: t("multiHeadIPL.benefits.satisfaction") })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-[rgb(236,67,113)] to-[rgb(125,0,99)] py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-4 tracking-tight", children: t("multiHeadIPL.cta.title") }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-white mb-8", children: t("multiHeadIPL.cta.subtitle") }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold px-8 py-3 rounded-full transition",
          children: t("multiHeadIPL.cta.button")
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-[#f9f9f9] py-16", children: /* @__PURE__ */ jsx(ContactFormA, {}) })
  ] });
};
export {
  MultiHeadIPL as default
};
