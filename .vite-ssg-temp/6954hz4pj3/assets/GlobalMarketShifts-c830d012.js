import { jsxs, jsx } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { u as useLanguage } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "lucide-react";
const GlobalMarketShifts = () => {
  const { t } = useLanguage();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t("blog.posts.globalMarketShifts.title"),
    "description": t("blog.posts.globalMarketShifts.intro"),
    "author": {
      "@type": "Organization",
      "name": "SHENZHEN ISHINE TECHNOLOGY COMPANY LIMITED"
    },
    "datePublished": "2024-07-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "/blog/global-market-shifts"
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", style: { wordSpacing: "0.1em" }, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: t("blog.posts.globalMarketShifts.title") }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: t("blog.posts.globalMarketShifts.intro") }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "global beauty market, IPL hair removal trends, market analysis, beauty technology, consumer behavior" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "/blog/global-market-shifts" }),
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
              children: t("blog.posts.globalMarketShifts.title")
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
              children: t("globalMarketShifts.publishDate")
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxs("article", { className: "max-w-4xl mx-auto px-5 py-16", style: { lineHeight: "1.7", wordSpacing: "0.1em" }, children: [
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("blog.posts.globalMarketShifts.sections.introduction") }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700 mb-6", children: t("globalMarketShifts.introduction.content") })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("globalMarketShifts.marketSize.title") }),
        /* @__PURE__ */ jsx("div", { className: "bg-blue-50 p-6 rounded-lg mb-6", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-blue-900", children: t("globalMarketShifts.stats.marketValue") }),
            /* @__PURE__ */ jsx("p", { className: "text-blue-800", children: t("globalMarketShifts.stats.currentMarket") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-blue-900", children: t("globalMarketShifts.stats.cagr") }),
            /* @__PURE__ */ jsx("p", { className: "text-blue-800", children: t("globalMarketShifts.stats.growthRate") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-blue-900", children: t("globalMarketShifts.stats.projection") }),
            /* @__PURE__ */ jsx("p", { className: "text-blue-800", children: t("globalMarketShifts.stats.futureValue") })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("globalMarketShifts.regionalAnalysis.title") }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-green-500 pl-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg", children: t("globalMarketShifts.regions.northAmerica.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: t("globalMarketShifts.regions.northAmerica.desc") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-blue-500 pl-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg", children: t("globalMarketShifts.regions.europe.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: t("globalMarketShifts.regions.europe.desc") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-purple-500 pl-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg", children: t("globalMarketShifts.regions.asiaPacific.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: t("globalMarketShifts.regions.asiaPacific.desc") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("globalMarketShifts.keyTrends.title") }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3 text-green-900", children: t("globalMarketShifts.trends.athomeDevices.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-green-800", children: t("globalMarketShifts.trends.athomeDevices.desc") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3 text-blue-900", children: t("globalMarketShifts.trends.aiIntegration.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-blue-800", children: t("globalMarketShifts.trends.aiIntegration.desc") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3 text-purple-900", children: t("globalMarketShifts.trends.sustainability.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-purple-800", children: t("globalMarketShifts.trends.sustainability.desc") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3 text-orange-900", children: t("globalMarketShifts.trends.personalization.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-orange-800", children: t("globalMarketShifts.trends.personalization.desc") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("globalMarketShifts.futureOutlook.title") }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700 mb-6", children: t("globalMarketShifts.futureOutlook.content") }),
        /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3 text-yellow-900", children: t("globalMarketShifts.predictions.title") }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsx("li", { className: "text-yellow-800", children: t("globalMarketShifts.predictions.growth") }),
            /* @__PURE__ */ jsx("li", { className: "text-yellow-800", children: t("globalMarketShifts.predictions.technology") }),
            /* @__PURE__ */ jsx("li", { className: "text-yellow-800", children: t("globalMarketShifts.predictions.accessibility") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("blog.posts.globalMarketShifts.sections.conclusion") }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700 mb-6", children: t("globalMarketShifts.conclusion.content") })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-10 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-4 text-gray-900", children: t("common.relatedArticles") }),
        /* @__PURE__ */ jsxs("ul", { className: "list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/future-home-hair-removal", className: "text-blue-600 underline", children: t("blog.posts.futureHomeHairRemoval.title") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/industries", className: "text-blue-600 underline", children: t("blog.posts.industries.title") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/sustainable-manufacturing", className: "text-blue-600 underline", children: t("blog.posts.sustainableManufacturing.title") }) })
        ] })
      ] }) })
    ] })
  ] });
};
export {
  GlobalMarketShifts as default
};
