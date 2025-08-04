import { jsxs, jsx } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { u as useLanguage } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "lucide-react";
const FutureHomeHairRemoval = () => {
  const { t } = useLanguage();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t("blog.posts.futureHomeHairRemoval.title"),
    "description": t("blog.posts.futureHomeHairRemoval.intro"),
    "author": {
      "@type": "Organization",
      "name": "SHENZHEN ISHINE TECHNOLOGY COMPANY LIMITED"
    },
    "datePublished": "2024-07-03",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "/blog/future-home-hair-removal"
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", style: { wordSpacing: "0.1em" }, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: t("blog.posts.futureHomeHairRemoval.title") }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: t("blog.posts.futureHomeHairRemoval.intro") }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "future hair removal, home IPL devices, AI technology, sustainability, personalization, at-home beauty trends" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "/blog/future-home-hair-removal" }),
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
          /* @__PURE__ */ jsx("div", { className: "mb-6 text-center", children: /* @__PURE__ */ jsx(
            "span",
            {
              style: {
                color: "#a0aec0",
                fontSize: "14px",
                fontWeight: "400"
              },
              children: "🏠 Blog"
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
              children: t("blog.posts.futureHomeHairRemoval.title")
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
              children: t("futureHomeHairRemoval.publishDate")
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
          /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
            /* @__PURE__ */ jsx(
              "h2",
              {
                style: {
                  fontSize: "1.75rem",
                  fontWeight: "600",
                  marginTop: "48px",
                  marginBottom: "24px",
                  color: "#212529",
                  letterSpacing: "-0.02em"
                },
                children: t("blog.posts.futureHomeHairRemoval.sections.introduction")
              }
            ),
            /* @__PURE__ */ jsx(
              "p",
              {
                style: {
                  fontSize: "18px",
                  lineHeight: "1.7",
                  color: "#495057",
                  marginBottom: "24px",
                  textAlign: "justify",
                  wordSpacing: "0.1em"
                },
                children: t("futureHomeHairRemoval.introduction.content")
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
            /* @__PURE__ */ jsx(
              "h2",
              {
                style: {
                  fontSize: "1.75rem",
                  fontWeight: "600",
                  marginTop: "48px",
                  marginBottom: "24px",
                  color: "#212529",
                  letterSpacing: "-0.02em"
                },
                children: t("futureHomeHairRemoval.aiPowered.title")
              }
            ),
            /* @__PURE__ */ jsx(
              "p",
              {
                style: {
                  fontSize: "18px",
                  lineHeight: "1.7",
                  color: "#495057",
                  marginBottom: "24px",
                  textAlign: "justify",
                  wordSpacing: "0.1em"
                },
                children: t("futureHomeHairRemoval.aiPowered.content")
              }
            ),
            /* @__PURE__ */ jsx(
              "h3",
              {
                style: {
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  marginBottom: "16px",
                  color: "#212529",
                  letterSpacing: "-0.02em"
                },
                children: t("futureHomeHairRemoval.aiFeatures.title")
              }
            ),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-3", children: [
              /* @__PURE__ */ jsxs("li", { style: { fontSize: "18px", lineHeight: "1.7", color: "#495057" }, children: [
                /* @__PURE__ */ jsxs("strong", { children: [
                  t("futureHomeHairRemoval.aiFeatures.smartSkinDetection.title"),
                  ":"
                ] }),
                " ",
                t("futureHomeHairRemoval.aiFeatures.smartSkinDetection.desc")
              ] }),
              /* @__PURE__ */ jsxs("li", { style: { fontSize: "18px", lineHeight: "1.7", color: "#495057" }, children: [
                /* @__PURE__ */ jsxs("strong", { children: [
                  t("futureHomeHairRemoval.aiFeatures.adaptiveIntensity.title"),
                  ":"
                ] }),
                " ",
                t("futureHomeHairRemoval.aiFeatures.adaptiveIntensity.desc")
              ] }),
              /* @__PURE__ */ jsxs("li", { style: { fontSize: "18px", lineHeight: "1.7", color: "#495057" }, children: [
                /* @__PURE__ */ jsxs("strong", { children: [
                  t("futureHomeHairRemoval.aiFeatures.predictiveAnalysis.title"),
                  ":"
                ] }),
                " ",
                t("futureHomeHairRemoval.aiFeatures.predictiveAnalysis.desc")
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
            /* @__PURE__ */ jsx(
              "h2",
              {
                style: {
                  fontSize: "1.75rem",
                  fontWeight: "600",
                  marginTop: "48px",
                  marginBottom: "24px",
                  color: "#212529",
                  letterSpacing: "-0.02em"
                },
                children: t("futureHomeHairRemoval.coolingTech.title")
              }
            ),
            /* @__PURE__ */ jsx(
              "p",
              {
                style: {
                  fontSize: "18px",
                  lineHeight: "1.7",
                  color: "#495057",
                  marginBottom: "24px",
                  textAlign: "justify",
                  wordSpacing: "0.1em"
                },
                children: t("futureHomeHairRemoval.coolingTech.content")
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg mb-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-3 text-blue-900", children: t("futureHomeHairRemoval.coolingInnovations.title") }),
              /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
                /* @__PURE__ */ jsx("li", { className: "text-blue-800", children: t("futureHomeHairRemoval.coolingInnovations.cryogenicCooling") }),
                /* @__PURE__ */ jsx("li", { className: "text-blue-800", children: t("futureHomeHairRemoval.coolingInnovations.liquidNitrogen") }),
                /* @__PURE__ */ jsx("li", { className: "text-blue-800", children: t("futureHomeHairRemoval.coolingInnovations.thermoelectric") })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
            /* @__PURE__ */ jsx(
              "h2",
              {
                style: {
                  fontSize: "1.75rem",
                  fontWeight: "600",
                  marginTop: "48px",
                  marginBottom: "24px",
                  color: "#212529",
                  letterSpacing: "-0.02em"
                },
                children: t("futureHomeHairRemoval.sustainability.title")
              }
            ),
            /* @__PURE__ */ jsx(
              "p",
              {
                style: {
                  fontSize: "18px",
                  lineHeight: "1.7",
                  color: "#495057",
                  marginBottom: "24px",
                  textAlign: "justify",
                  wordSpacing: "0.1em"
                },
                children: t("futureHomeHairRemoval.sustainability.content")
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-6 rounded-lg mb-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-3 text-green-900", children: t("futureHomeHairRemoval.ecoFeatures.title") }),
              /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
                /* @__PURE__ */ jsx("li", { className: "text-green-800", children: t("futureHomeHairRemoval.ecoFeatures.solarPowered") }),
                /* @__PURE__ */ jsx("li", { className: "text-green-800", children: t("futureHomeHairRemoval.ecoFeatures.recyclableComponents") }),
                /* @__PURE__ */ jsx("li", { className: "text-green-800", children: t("futureHomeHairRemoval.ecoFeatures.energyEfficient") }),
                /* @__PURE__ */ jsx("li", { className: "text-green-800", children: t("futureHomeHairRemoval.ecoFeatures.biodegradablePackaging") })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
            /* @__PURE__ */ jsx(
              "h2",
              {
                style: {
                  fontSize: "1.75rem",
                  fontWeight: "600",
                  marginTop: "48px",
                  marginBottom: "24px",
                  color: "#212529",
                  letterSpacing: "-0.02em"
                },
                children: t("futureHomeHairRemoval.personalization.title")
              }
            ),
            /* @__PURE__ */ jsx(
              "p",
              {
                style: {
                  fontSize: "18px",
                  lineHeight: "1.7",
                  color: "#495057",
                  marginBottom: "24px",
                  textAlign: "justify",
                  wordSpacing: "0.1em"
                },
                children: t("futureHomeHairRemoval.personalization.content")
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-6 rounded-lg", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-3 text-purple-900", children: t("futureHomeHairRemoval.smartFeatures.title") }),
                /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
                  /* @__PURE__ */ jsx("li", { className: "text-purple-800", children: t("futureHomeHairRemoval.smartFeatures.mobileApp") }),
                  /* @__PURE__ */ jsx("li", { className: "text-purple-800", children: t("futureHomeHairRemoval.smartFeatures.cloudSync") }),
                  /* @__PURE__ */ jsx("li", { className: "text-purple-800", children: t("futureHomeHairRemoval.smartFeatures.remoteMonitoring") })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-6 rounded-lg", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-3 text-orange-900", children: t("futureHomeHairRemoval.userExperience.title") }),
                /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
                  /* @__PURE__ */ jsx("li", { className: "text-orange-800", children: t("futureHomeHairRemoval.userExperience.voiceControl") }),
                  /* @__PURE__ */ jsx("li", { className: "text-orange-800", children: t("futureHomeHairRemoval.userExperience.gestureRecognition") }),
                  /* @__PURE__ */ jsx("li", { className: "text-orange-800", children: t("futureHomeHairRemoval.userExperience.hapticFeedback") })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("section", { className: "py-10 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("futureHomeHairRemoval.timeline.title") }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-blue-500 pl-4", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg", children: t("futureHomeHairRemoval.timeline.current.title") }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: t("futureHomeHairRemoval.timeline.current.desc") })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-green-500 pl-4", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg", children: t("futureHomeHairRemoval.timeline.nextFiveYears.title") }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: t("futureHomeHairRemoval.timeline.nextFiveYears.desc") })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-purple-500 pl-4", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg", children: t("futureHomeHairRemoval.timeline.nextDecade.title") }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: t("futureHomeHairRemoval.timeline.nextDecade.desc") })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
            /* @__PURE__ */ jsx(
              "h2",
              {
                style: {
                  fontSize: "1.75rem",
                  fontWeight: "600",
                  marginTop: "48px",
                  marginBottom: "24px",
                  color: "#212529",
                  letterSpacing: "-0.02em"
                },
                children: t("blog.posts.futureHomeHairRemoval.sections.conclusion")
              }
            ),
            /* @__PURE__ */ jsx(
              "p",
              {
                style: {
                  fontSize: "18px",
                  lineHeight: "1.7",
                  color: "#495057",
                  marginBottom: "24px",
                  textAlign: "justify",
                  wordSpacing: "0.1em"
                },
                children: t("futureHomeHairRemoval.conclusion.content")
              }
            )
          ] }),
          /* @__PURE__ */ jsx("section", { className: "py-10 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-4 text-gray-900", children: t("common.relatedArticles") }),
            /* @__PURE__ */ jsxs("ul", { className: "list-inside list-disc space-y-2", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/ai-powered-skin-sensing", className: "text-blue-600 underline", children: t("blog.posts.aiPoweredSkinSensing.title") }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/sustainable-manufacturing", className: "text-blue-600 underline", children: t("blog.posts.sustainableManufacturing.title") }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/global-market-shifts", className: "text-blue-600 underline", children: t("blog.posts.globalMarketShifts.title") }) })
            ] })
          ] }) })
        ]
      }
    )
  ] });
};
export {
  FutureHomeHairRemoval as default
};
