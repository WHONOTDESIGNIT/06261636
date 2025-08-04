import { jsxs, jsx } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { u as useLanguage } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "lucide-react";
const SustainableManufacturing = () => {
  const { t } = useLanguage();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t("blog.posts.sustainableManufacturing.title"),
    "description": t("blog.posts.sustainableManufacturing.intro"),
    "author": {
      "@type": "Organization",
      "name": "SHENZHEN ISHINE TECHNOLOGY COMPANY LIMITED"
    },
    "datePublished": "2024-06-29",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "/blog/sustainable-manufacturing"
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", style: { wordSpacing: "0.1em" }, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: t("blog.posts.sustainableManufacturing.title") }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: t("blog.posts.sustainableManufacturing.intro") }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "sustainable manufacturing, eco-friendly production, green technology, environmental responsibility, sustainable beauty" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "/blog/sustainable-manufacturing" }),
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
              children: t("blog.posts.sustainableManufacturing.title")
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
              children: t("sustainableManufacturing.publishDate")
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxs("article", { className: "max-w-4xl mx-auto px-5 py-16", style: { lineHeight: "1.7", wordSpacing: "0.1em" }, children: [
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("blog.posts.sustainableManufacturing.sections.introduction") }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700 mb-6", children: t("sustainableManufacturing.introduction.content") })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("sustainableManufacturing.environmental.title") }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700 mb-6", children: t("sustainableManufacturing.environmental.content") }),
        /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-6 rounded-lg mb-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-3 text-green-900", children: t("sustainableManufacturing.initiatives.title") }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsx("li", { className: "text-green-800", children: t("sustainableManufacturing.initiatives.renewableEnergy") }),
            /* @__PURE__ */ jsx("li", { className: "text-green-800", children: t("sustainableManufacturing.initiatives.wasteReduction") }),
            /* @__PURE__ */ jsx("li", { className: "text-green-800", children: t("sustainableManufacturing.initiatives.sustainableMaterials") }),
            /* @__PURE__ */ jsx("li", { className: "text-green-800", children: t("sustainableManufacturing.initiatives.carbonFootprint") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("sustainableManufacturing.materials.title") }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3 text-blue-900", children: t("sustainableManufacturing.materials.recyclable.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-blue-800", children: t("sustainableManufacturing.materials.recyclable.desc") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-6 rounded-lg", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3 text-purple-900", children: t("sustainableManufacturing.materials.biodegradable.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-purple-800", children: t("sustainableManufacturing.materials.biodegradable.desc") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("sustainableManufacturing.process.title") }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-green-500 pl-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg", children: t("sustainableManufacturing.process.efficiency.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: t("sustainableManufacturing.process.efficiency.desc") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-blue-500 pl-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg", children: t("sustainableManufacturing.process.automation.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: t("sustainableManufacturing.process.automation.desc") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-purple-500 pl-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg", children: t("sustainableManufacturing.process.quality.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: t("sustainableManufacturing.process.quality.desc") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("sustainableManufacturing.impact.title") }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700 mb-6", children: t("sustainableManufacturing.impact.content") }),
        /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-3 text-yellow-900", children: t("sustainableManufacturing.benefits.title") }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
            /* @__PURE__ */ jsx("li", { className: "text-yellow-800", children: t("sustainableManufacturing.benefits.costReduction") }),
            /* @__PURE__ */ jsx("li", { className: "text-yellow-800", children: t("sustainableManufacturing.benefits.brandImage") }),
            /* @__PURE__ */ jsx("li", { className: "text-yellow-800", children: t("sustainableManufacturing.benefits.compliance") }),
            /* @__PURE__ */ jsx("li", { className: "text-yellow-800", children: t("sustainableManufacturing.benefits.innovation") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("sustainableManufacturing.future.title") }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700 mb-6", children: t("sustainableManufacturing.future.content") }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-6 rounded-lg text-center", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-green-900 mb-2", children: t("sustainableManufacturing.goals.carbonNeutral.target") }),
            /* @__PURE__ */ jsx("p", { className: "text-green-800", children: t("sustainableManufacturing.goals.carbonNeutral.desc") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg text-center", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-blue-900 mb-2", children: t("sustainableManufacturing.goals.renewable.target") }),
            /* @__PURE__ */ jsx("p", { className: "text-blue-800", children: t("sustainableManufacturing.goals.renewable.desc") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-6 rounded-lg text-center", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-purple-900 mb-2", children: t("sustainableManufacturing.goals.waste.target") }),
            /* @__PURE__ */ jsx("p", { className: "text-purple-800", children: t("sustainableManufacturing.goals.waste.desc") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("blog.posts.sustainableManufacturing.sections.conclusion") }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700 mb-6", children: t("sustainableManufacturing.conclusion.content") })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-10 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-4 text-gray-900", children: t("common.relatedArticles") }),
        /* @__PURE__ */ jsxs("ul", { className: "list-inside list-disc space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/global-market-shifts", className: "text-blue-600 underline", children: t("blog.posts.globalMarketShifts.title") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/industries", className: "text-blue-600 underline", children: t("blog.posts.industries.title") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/future-home-hair-removal", className: "text-blue-600 underline", children: t("blog.posts.futureHomeHairRemoval.title") }) })
        ] })
      ] }) })
    ] })
  ] });
};
export {
  SustainableManufacturing as default
};
