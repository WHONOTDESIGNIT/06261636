import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { u as useLanguage, C as ContactFormA } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "react-helmet-async";
import "lucide-react";
const IPLBestChoice = () => {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", style: { wordSpacing: "0.1em" }, children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "w-full py-16 px-4",
        style: {
          background: "linear-gradient(135deg, #1a365d 0%, #2c5282 50%, #1a365d 100%)",
          minHeight: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 text-center", children: /* @__PURE__ */ jsxs(
            "span",
            {
              style: {
                color: "#a0aec0",
                fontSize: "14px",
                fontWeight: "400"
              },
              children: [
                "🏠 ",
                t("blog.breadcrumb", "Blog")
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(
            "h1",
            {
              style: {
                fontSize: "3rem",
                fontWeight: "700",
                color: "#ffffff",
                lineHeight: "1.1",
                marginBottom: "16px",
                letterSpacing: "-0.02em",
                textAlign: "center",
                margin: "0 auto",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              },
              children: t("blog.iplBestChoice.title", "Why IPL Home Hair Removal Devices Are the Best Choice Among All Hair Removal Tools")
            }
          ),
          /* @__PURE__ */ jsx(
            "p",
            {
              style: {
                color: "#a0aec0",
                fontSize: "16px",
                fontWeight: "400",
                marginTop: "20px",
                textAlign: "left"
              },
              children: t("blog.iplBestChoice.date", "July 10, 2025")
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxs(
      "article",
      {
        className: "max-w-4xl mx-auto px-5 py-16",
        style: {
          maxWidth: "1400px",
          lineHeight: "1.7",
          wordSpacing: "0.1em"
        },
        children: [
          /* @__PURE__ */ jsx("section", { className: "py-10 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("hairRemovalMethodsComparison.title") }),
            /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full bg-white border rounded-lg shadow", children: [
              /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-blue-100 text-blue-900", children: [
                /* @__PURE__ */ jsx("th", { className: "py-2 px-4", children: t("hairRemovalMethodsComparison.method") }),
                /* @__PURE__ */ jsx("th", { className: "py-2 px-4", children: t("hairRemovalMethodsComparison.pros") }),
                /* @__PURE__ */ jsx("th", { className: "py-2 px-4", children: t("hairRemovalMethodsComparison.cons") }),
                /* @__PURE__ */ jsx("th", { className: "py-2 px-4", children: t("hairRemovalMethodsComparison.bestFor") })
              ] }) }),
              /* @__PURE__ */ jsxs("tbody", { children: [
                /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4 font-semibold", children: t("hairRemovalMethodsComparison.IPLHomeDevice") }),
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: t("hairRemovalMethodsComparison.IPLHomeDevicePros") }),
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: t("hairRemovalMethodsComparison.IPLHomeDeviceCons") }),
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: t("hairRemovalMethodsComparison.IPLHomeDeviceBestFor") })
                ] }),
                /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: t("hairRemovalMethodsComparison.waxing") }),
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: t("hairRemovalMethodsComparison.waxingPros") }),
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: t("hairRemovalMethodsComparison.waxingCons") }),
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: t("hairRemovalMethodsComparison.waxingBestFor") })
                ] }),
                /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: t("hairRemovalMethodsComparison.hairRemovalCream") }),
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: t("hairRemovalMethodsComparison.hairRemovalCreamPros") }),
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: t("hairRemovalMethodsComparison.hairRemovalCreamCons") }),
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: t("hairRemovalMethodsComparison.hairRemovalCreamBestFor") })
                ] }),
                /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: t("hairRemovalMethodsComparison.razor") }),
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: t("hairRemovalMethodsComparison.razorPros") }),
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: t("hairRemovalMethodsComparison.razorCons") }),
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: t("hairRemovalMethodsComparison.razorBestFor") })
                ] }),
                /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: t("hairRemovalMethodsComparison.electricShaver") }),
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: t("hairRemovalMethodsComparison.electricShaverPros") }),
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: t("hairRemovalMethodsComparison.electricShaverCons") }),
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: t("hairRemovalMethodsComparison.electricShaverBestFor") })
                ] }),
                /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: t("hairRemovalMethodsComparison.laserHairRemoval") }),
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: t("hairRemovalMethodsComparison.laserHairRemovalPros") }),
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: t("hairRemovalMethodsComparison.laserHairRemovalCons") }),
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4", children: t("hairRemovalMethodsComparison.laserHairRemovalBestFor") })
                ] })
              ] })
            ] }) })
          ] }) }),
          /* @__PURE__ */ jsx("section", { className: "py-10 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("whyChooseIPLHomeHairRemoval.title") }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-3 text-gray-700", children: [
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: t("whyChooseIPLHomeHairRemoval.longlastingResults") }),
                " ",
                t("whyChooseIPLHomeHairRemoval.longlastingResultsDescription"),
                " ",
                /* @__PURE__ */ jsx("a", { href: "https://www.healthline.com/health/beauty-skin-care/hair-removal-methods", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline", children: t("whyChooseIPLHomeHairRemoval.healthlineLink") })
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: t("whyChooseIPLHomeHairRemoval.minimalPain") }),
                " ",
                t("whyChooseIPLHomeHairRemoval.minimalPainDescription")
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: t("whyChooseIPLHomeHairRemoval.safeForHomeUse") }),
                " ",
                t("whyChooseIPLHomeHairRemoval.safeForHomeUseDescription")
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: t("whyChooseIPLHomeHairRemoval.costEffective") }),
                " ",
                t("whyChooseIPLHomeHairRemoval.costEffectiveDescription")
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: t("whyChooseIPLHomeHairRemoval.convenient") }),
                " ",
                t("whyChooseIPLHomeHairRemoval.convenientDescription")
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("section", { className: "py-10 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("realUserStories.title") }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("blockquote", { className: "border-l-4 border-blue-500 pl-4 italic text-gray-700", children: [
                t("realUserStories.quote1"),
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "block mt-2 text-sm text-gray-500", children: t("realUserStories.quote1Attribution") })
              ] }),
              /* @__PURE__ */ jsxs("blockquote", { className: "border-l-4 border-blue-500 pl-4 italic text-gray-700", children: [
                t("realUserStories.quote2"),
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "block mt-2 text-sm text-gray-500", children: t("realUserStories.quote2Attribution") })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("section", { className: "py-10 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-4 text-gray-900", children: t("exploreMore.title") }),
            /* @__PURE__ */ jsxs("ul", { className: "list-inside list-disc space-y-2", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/how-to-use", className: "text-blue-600 underline", children: t("exploreMore.howToUse") }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/ipl-hair-removal", className: "text-blue-600 underline", children: t("exploreMore.ourIPLProductRange") }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/service-support/knowledge-base", className: "text-blue-600 underline", children: t("exploreMore.hairRemovalFAQs") }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/news-insights", className: "text-blue-600 underline", children: t("exploreMore.latestTechnologyInsights") }) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("section", { className: "py-10 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-4 text-gray-900", children: t("frequentlyAskedQuestions.title") }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: t("frequentlyAskedQuestions.isIPLSafeForAllSkinTypes") }),
                /* @__PURE__ */ jsx("p", { children: t("frequentlyAskedQuestions.isIPLSafeForAllSkinTypesDescription") })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: t("frequentlyAskedQuestions.howLongDoesItTakeToSeeResults") }),
                /* @__PURE__ */ jsx("p", { children: t("frequentlyAskedQuestions.howLongDoesItTakeToSeeResultsDescription") })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: t("frequentlyAskedQuestions.doesIPLHurt") }),
                /* @__PURE__ */ jsx("p", { children: t("frequentlyAskedQuestions.doesIPLHurtDescription") })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "bg-[#f9f9f9] py-16", children: /* @__PURE__ */ jsx(ContactFormA, {}) }),
          /* @__PURE__ */ jsx("section", { className: "py-8 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("recommendedBlog.title") }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-6", children: [
              /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx("img", { src: "/images/blog/ipl-best-choice.jpg", alt: "IPL Best Choice", className: "rounded-xl shadow-lg w-full max-w-xs" }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col justify-center", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: t("recommendedBlog.title") }),
                /* @__PURE__ */ jsx("p", { className: "mb-4", children: t("recommendedBlog.description") }),
                /* @__PURE__ */ jsx(Link, { to: "/blog/ipl-best-choice", className: "inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition", children: t("recommendedBlog.readFullArticle") })
              ] })
            ] })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "bg-[#f9f9f9] py-16", children: /* @__PURE__ */ jsx(ContactFormA, {}) }),
    /* @__PURE__ */ jsx("section", { className: "py-8 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("recommendedBlog.title") }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-6", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx("img", { src: "/images/blog/ipl-best-choice.jpg", alt: "IPL Best Choice", className: "rounded-xl shadow-lg w-full max-w-xs" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col justify-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: t("recommendedBlog.title") }),
          /* @__PURE__ */ jsx("p", { className: "mb-4", children: t("recommendedBlog.description") }),
          /* @__PURE__ */ jsx(Link, { to: "/blog/ipl-best-choice", className: "inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition", children: t("recommendedBlog.readFullArticle") })
        ] })
      ] })
    ] }) })
  ] });
};
export {
  IPLBestChoice as default
};
