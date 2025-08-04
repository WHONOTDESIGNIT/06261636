import { jsxs, jsx } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { u as useLanguage } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "lucide-react";
const NewsInsights = () => {
  const { t } = useLanguage();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t("blog.posts.newsInsights.title"),
    "description": t("blog.posts.newsInsights.intro"),
    "author": {
      "@type": "Organization",
      "name": "SHENZHEN ISHINE TECHNOLOGY COMPANY LIMITED"
    },
    "datePublished": "2024-06-27",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "/blog/news-insights"
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", style: { wordSpacing: "0.1em" }, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: t("blog.posts.newsInsights.title") }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: t("blog.posts.newsInsights.intro") }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "beauty technology news, IPL industry insights, market trends, innovation updates, beauty devices" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "/blog/news-insights" }),
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
              children: t("blog.posts.newsInsights.title")
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
              children: t("newsInsights.publishDate")
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxs("article", { className: "max-w-4xl mx-auto px-5 py-16", style: { lineHeight: "1.7", wordSpacing: "0.1em" }, children: [
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("blog.posts.newsInsights.sections.introduction") }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700 mb-6", children: t("newsInsights.introduction.content") })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("newsInsights.technologyTrends.title") }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3 text-blue-900", children: t("newsInsights.trends.aiIntegration.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-blue-800", children: t("newsInsights.trends.aiIntegration.desc") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3 text-green-900", children: t("newsInsights.trends.smartDevices.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-green-800", children: t("newsInsights.trends.smartDevices.desc") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3 text-purple-900", children: t("newsInsights.trends.portability.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-purple-800", children: t("newsInsights.trends.portability.desc") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3 text-orange-900", children: t("newsInsights.trends.sustainability.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-orange-800", children: t("newsInsights.trends.sustainability.desc") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("newsInsights.marketAnalysis.title") }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700 mb-6", children: t("newsInsights.marketAnalysis.content") }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg mb-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3 text-gray-900", children: t("newsInsights.marketStats.title") }),
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4 text-center", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-2xl font-bold text-blue-600", children: t("newsInsights.marketStats.globalValue") }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: t("newsInsights.marketStats.currentMarket") })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-2xl font-bold text-green-600", children: t("newsInsights.marketStats.growth") }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: t("newsInsights.marketStats.annualGrowth") })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-2xl font-bold text-purple-600", children: t("newsInsights.marketStats.projection") }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: t("newsInsights.marketStats.futureMarket") })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("newsInsights.newsHighlights.title") }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-blue-500 pl-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg", children: t("newsInsights.news.regulatory.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: t("newsInsights.news.regulatory.desc") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-green-500 pl-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg", children: t("newsInsights.news.innovation.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: t("newsInsights.news.innovation.desc") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-purple-500 pl-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg", children: t("newsInsights.news.partnerships.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: t("newsInsights.news.partnerships.desc") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-orange-500 pl-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg", children: t("newsInsights.news.consumer.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: t("newsInsights.news.consumer.desc") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("newsInsights.predictions.title") }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700 mb-6", children: t("newsInsights.predictions.content") }),
        /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3 text-yellow-900", children: t("newsInsights.predictions.forecast.title") }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsx("li", { className: "text-yellow-800", children: t("newsInsights.predictions.forecast.technology") }),
            /* @__PURE__ */ jsx("li", { className: "text-yellow-800", children: t("newsInsights.predictions.forecast.market") }),
            /* @__PURE__ */ jsx("li", { className: "text-yellow-800", children: t("newsInsights.predictions.forecast.consumer") }),
            /* @__PURE__ */ jsx("li", { className: "text-yellow-800", children: t("newsInsights.predictions.forecast.regulation") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("newsInsights.expertOpinions.title") }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("blockquote", { className: "border-l-4 border-blue-500 pl-4 italic text-gray-700", children: [
            t("newsInsights.quotes.expert1.quote"),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "block mt-2 text-sm text-gray-500", children: t("newsInsights.quotes.expert1.attribution") })
          ] }),
          /* @__PURE__ */ jsxs("blockquote", { className: "border-l-4 border-green-500 pl-4 italic text-gray-700", children: [
            t("newsInsights.quotes.expert2.quote"),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "block mt-2 text-sm text-gray-500", children: t("newsInsights.quotes.expert2.attribution") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("newsInsights.events.title") }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3 text-blue-900", children: t("newsInsights.events.conferences.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-blue-800", children: t("newsInsights.events.conferences.desc") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3 text-green-900", children: t("newsInsights.events.exhibitions.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-green-800", children: t("newsInsights.events.exhibitions.desc") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("blog.posts.newsInsights.sections.conclusion") }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700 mb-6", children: t("newsInsights.conclusion.content") })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-10 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-4 text-gray-900", children: t("common.relatedArticles") }),
        /* @__PURE__ */ jsxs("ul", { className: "list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/global-market-shifts", className: "text-blue-600 underline", children: t("blog.posts.globalMarketShifts.title") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/ai-powered-skin-sensing", className: "text-blue-600 underline", children: t("blog.posts.aiPoweredSkinSensing.title") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/future-home-hair-removal", className: "text-blue-600 underline", children: t("blog.posts.futureHomeHairRemoval.title") }) })
        ] })
      ] }) })
    ] })
  ] });
};
export {
  NewsInsights as default
};
