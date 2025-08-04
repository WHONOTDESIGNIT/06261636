import { jsxs, jsx } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { u as useLanguage } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "lucide-react";
const Industries = () => {
  const { t } = useLanguage();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t("blog.posts.industries.title"),
    "description": t("blog.posts.industries.intro"),
    "author": {
      "@type": "Organization",
      "name": "SHENZHEN ISHINE TECHNOLOGY COMPANY LIMITED"
    },
    "datePublished": "2024-06-30",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "/blog/industries"
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", style: { wordSpacing: "0.1em" }, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: t("blog.posts.industries.title") }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: t("blog.posts.industries.intro") }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "beauty industry, IPL manufacturing, hair removal devices, beauty technology, medical devices" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "/blog/industries" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(jsonLd) })
    ] }),
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
          /* @__PURE__ */ jsx("div", { className: "mb-6 text-center", children: /* @__PURE__ */ jsx("span", { style: { color: "#a0aec0", fontSize: "14px", fontWeight: "400" }, children: "🏠 Blog" }) }),
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
                textAlign: "center"
              },
              children: t("blog.posts.industries.title")
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
              children: t("industries.publishDate")
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxs("article", { className: "max-w-4xl mx-auto px-5 py-16", style: { lineHeight: "1.7", wordSpacing: "0.1em" }, children: [
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("blog.posts.industries.sections.introduction") }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700 mb-6", children: t("industries.introduction.content") })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("industries.beautyOverview.title") }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700 mb-6", children: t("industries.beautyOverview.content") }),
        /* @__PURE__ */ jsxs("div", { className: "bg-pink-50 p-6 rounded-lg mb-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-3 text-pink-900", children: t("industries.beautyStats.title") }),
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-pink-800", children: t("industries.beautyStats.marketSize") }),
              /* @__PURE__ */ jsx("p", { className: "text-pink-700", children: t("industries.beautyStats.globalValue") })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-pink-800", children: t("industries.beautyStats.growth") }),
              /* @__PURE__ */ jsx("p", { className: "text-pink-700", children: t("industries.beautyStats.annualGrowth") })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-pink-800", children: t("industries.beautyStats.projection") }),
              /* @__PURE__ */ jsx("p", { className: "text-pink-700", children: t("industries.beautyStats.futureValue") })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("industries.iplSegment.title") }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700 mb-6", children: t("industries.iplSegment.content") }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3 text-blue-900", children: t("industries.iplAdvantages.title") }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
              /* @__PURE__ */ jsx("li", { className: "text-blue-800", children: t("industries.iplAdvantages.convenience") }),
              /* @__PURE__ */ jsx("li", { className: "text-blue-800", children: t("industries.iplAdvantages.costEffective") }),
              /* @__PURE__ */ jsx("li", { className: "text-blue-800", children: t("industries.iplAdvantages.privacy") }),
              /* @__PURE__ */ jsx("li", { className: "text-blue-800", children: t("industries.iplAdvantages.safety") })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3 text-green-900", children: t("industries.marketTrends.title") }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
              /* @__PURE__ */ jsx("li", { className: "text-green-800", children: t("industries.marketTrends.technology") }),
              /* @__PURE__ */ jsx("li", { className: "text-green-800", children: t("industries.marketTrends.portability") }),
              /* @__PURE__ */ jsx("li", { className: "text-green-800", children: t("industries.marketTrends.affordability") }),
              /* @__PURE__ */ jsx("li", { className: "text-green-800", children: t("industries.marketTrends.effectiveness") })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("industries.manufacturing.title") }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700 mb-6", children: t("industries.manufacturing.content") }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-blue-500 pl-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg", children: t("industries.qualityControl.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: t("industries.qualityControl.desc") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-green-500 pl-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg", children: t("industries.innovation.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: t("industries.innovation.desc") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-purple-500 pl-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg", children: t("industries.compliance.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: t("industries.compliance.desc") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("industries.technology.title") }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3 text-purple-900", children: t("industries.techFeatures.ai.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-purple-800", children: t("industries.techFeatures.ai.desc") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3 text-orange-900", children: t("industries.techFeatures.cooling.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-orange-800", children: t("industries.techFeatures.cooling.desc") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-teal-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3 text-teal-900", children: t("industries.techFeatures.connectivity.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-teal-800", children: t("industries.techFeatures.connectivity.desc") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("industries.opportunities.title") }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700 mb-6", children: t("industries.opportunities.content") }),
        /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3 text-yellow-900", children: t("industries.growthAreas.title") }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsx("li", { className: "text-yellow-800", children: t("industries.growthAreas.emergingMarkets") }),
            /* @__PURE__ */ jsx("li", { className: "text-yellow-800", children: t("industries.growthAreas.maleGrooming") }),
            /* @__PURE__ */ jsx("li", { className: "text-yellow-800", children: t("industries.growthAreas.premiumDevices") }),
            /* @__PURE__ */ jsx("li", { className: "text-yellow-800", children: t("industries.growthAreas.subscription") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("blog.posts.industries.sections.conclusion") }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700 mb-6", children: t("industries.conclusion.content") })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-10 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-4 text-gray-900", children: t("common.relatedArticles") }),
        /* @__PURE__ */ jsxs("ul", { className: "list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/global-market-shifts", className: "text-blue-600 underline", children: t("blog.posts.globalMarketShifts.title") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/sustainable-manufacturing", className: "text-blue-600 underline", children: t("blog.posts.sustainableManufacturing.title") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/service/ipl-manufacturing", className: "text-blue-600 underline", children: t("nav.service.iplManufacturing") }) })
        ] })
      ] }) })
    ] })
  ] });
};
export {
  Industries as default
};
