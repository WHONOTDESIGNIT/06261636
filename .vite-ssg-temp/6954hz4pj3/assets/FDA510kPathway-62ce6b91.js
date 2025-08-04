import { jsxs, jsx } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { u as useLanguage } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "lucide-react";
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "FDA 510(k) Pathway: Navigating Medical Device Classification for IPL",
  "description": "A comprehensive guide to the FDA 510(k) pathway for home-use IPL hair removal devices. Learn about regulatory requirements, marketing claims, and how iShine helps brands achieve compliance.",
  "author": {
    "@type": "Organization",
    "name": "SHENZHEN ISHINE TECHNOLOGY COMPANY LIMITED"
  },
  "datePublished": "2024-07-04",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "/blog/fda-510k-pathway"
  }
};
const FDA510kPathway = () => {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", style: { wordSpacing: "0.1em" }, children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "FDA 510(k) Pathway for IPL Devices: US Medical Device Compliance Guide" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "A comprehensive guide to the FDA 510(k) pathway for home-use IPL hair removal devices. Learn about regulatory requirements, marketing claims, and how iShine helps brands achieve compliance." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "FDA 510k, IPL hair removal, medical device compliance, home IPL device, FDA clearance, regulatory pathway, 510k submission, US market access, iShine" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "/blog/fda-510k-pathway" }),
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
              children: "FDA 510(k) Pathway: Navigating Medical Device Classification for IPL"
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
              children: "July 4, 2024"
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
                children: "Introduction"
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
                children: t("fda510kPathway.introduction.content")
              }
            )
          ] }),
          /* @__PURE__ */ jsx("section", { className: "py-10 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("fda510kPathway.section1.title") }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: t("fda510kPathway.section1.subTitle1") }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 mb-4", children: [
              /* @__PURE__ */ jsx("li", { children: t("fda510kPathway.section1.item1") }),
              /* @__PURE__ */ jsx("li", { children: t("fda510kPathway.section1.item2") }),
              /* @__PURE__ */ jsx("li", { children: t("fda510kPathway.section1.item3") })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: t("fda510kPathway.section1.subTitle2") }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 mb-4", children: [
              /* @__PURE__ */ jsx("li", { children: t("fda510kPathway.section1.item4") }),
              /* @__PURE__ */ jsx("li", { children: t("fda510kPathway.section1.item5") }),
              /* @__PURE__ */ jsx("li", { children: t("fda510kPathway.section1.item6") })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("section", { className: "py-10 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("fda510kPathway.section2.title") }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 mb-4", children: [
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: t("fda510kPathway.section2.item1.title") }),
                ": ",
                t("fda510kPathway.section2.item1.content")
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: t("fda510kPathway.section2.item2.title") }),
                ": ",
                t("fda510kPathway.section2.item2.content")
              ] }),
              /* @__PURE__ */ jsx("li", { children: t("fda510kPathway.section2.item3") })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "mt-4", children: [
              /* @__PURE__ */ jsx("strong", { children: t("fda510kPathway.section2.keyPoint.title") }),
              ": ",
              t("fda510kPathway.section2.keyPoint.content")
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("section", { className: "py-10 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("fda510kPathway.section3.title") }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 mb-4", children: [
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: t("fda510kPathway.section3.item1.title") }),
                ": ",
                t("fda510kPathway.section3.item1.content")
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: t("fda510kPathway.section3.item2.title") }),
                ": ",
                t("fda510kPathway.section3.item2.content")
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: t("fda510kPathway.section3.item3.title") }),
                ": ",
                t("fda510kPathway.section3.item3.content")
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: t("fda510kPathway.section3.item4.title") }),
                ": ",
                t("fda510kPathway.section3.item4.content")
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("section", { className: "py-10 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("fda510kPathway.section4.title") }),
            /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full bg-white border rounded-lg shadow", children: [
              /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-blue-100 text-blue-900", children: [
                /* @__PURE__ */ jsx("th", { className: "py-2 px-4", children: t("fda510kPathway.section4.table.header1") }),
                /* @__PURE__ */ jsx("th", { className: "py-2 px-4", children: t("fda510kPathway.section4.table.header2") })
              ] }) }),
              /* @__PURE__ */ jsxs("tbody", { children: [
                /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4 font-semibold", children: t("fda510kPathway.section4.table.row1.benefit") }),
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4 font-semibold", children: t("fda510kPathway.section4.table.row1.description") })
                ] }),
                /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4 font-semibold", children: t("fda510kPathway.section4.table.row2.benefit") }),
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4 font-semibold", children: t("fda510kPathway.section4.table.row2.description") })
                ] }),
                /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4 font-semibold", children: t("fda510kPathway.section4.table.row3.benefit") }),
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4 font-semibold", children: t("fda510kPathway.section4.table.row3.description") })
                ] }),
                /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4 font-semibold", children: t("fda510kPathway.section4.table.row4.benefit") }),
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4 font-semibold", children: t("fda510kPathway.section4.table.row4.description") })
                ] }),
                /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4 font-semibold", children: t("fda510kPathway.section4.table.row5.benefit") }),
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4 font-semibold", children: t("fda510kPathway.section4.table.row5.description") })
                ] }),
                /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4 font-semibold", children: t("fda510kPathway.section4.table.row6.benefit") }),
                  /* @__PURE__ */ jsx("td", { className: "py-2 px-4 font-semibold", children: t("fda510kPathway.section4.table.row6.description") })
                ] })
              ] })
            ] }) })
          ] }) }),
          /* @__PURE__ */ jsx("section", { className: "py-10 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("fda510kPathway.section5.title") }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 mb-4", children: [
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: t("fda510kPathway.section5.item1.title") }),
                ": ",
                t("fda510kPathway.section5.item1.content")
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: t("fda510kPathway.section5.item2.title") }),
                ": ",
                t("fda510kPathway.section5.item2.content")
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: t("fda510kPathway.section5.item3.title") }),
                ": ",
                t("fda510kPathway.section5.item3.content")
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: t("fda510kPathway.section5.item4.title") }),
                ": ",
                t("fda510kPathway.section5.item4.content")
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("section", { className: "py-10 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-gray-900", children: t("fda510kPathway.conclusion.title") }),
            /* @__PURE__ */ jsx("p", { children: t("fda510kPathway.conclusion.content") }),
            /* @__PURE__ */ jsxs("p", { className: "mt-4 text-sm text-gray-500", children: [
              /* @__PURE__ */ jsx("strong", { children: t("fda510kPathway.conclusion.note.title") }),
              ": ",
              t("fda510kPathway.conclusion.note.content")
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("section", { className: "py-10 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-4 text-gray-900", children: t("fda510kPathway.faq.title") }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: t("fda510kPathway.faq.item1.question") }),
                /* @__PURE__ */ jsx("p", { children: t("fda510kPathway.faq.item1.answer") })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: t("fda510kPathway.faq.item2.question") }),
                /* @__PURE__ */ jsx("p", { children: t("fda510kPathway.faq.item2.answer") })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: t("fda510kPathway.faq.item3.question") }),
                /* @__PURE__ */ jsx("p", { children: t("fda510kPathway.faq.item3.answer") })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("section", { className: "py-10 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-4 text-gray-900", children: t("fda510kPathway.exploreMore.title") }),
            /* @__PURE__ */ jsxs("ul", { className: "list-inside list-disc space-y-2", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/news-insights", className: "text-blue-600 underline", children: t("fda510kPathway.exploreMore.item1") }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.fda.gov/medical-devices/premarket-notification-510k", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline", children: t("fda510kPathway.exploreMore.item2") }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.ulike.com/blogs/hair-removal/is-the-ulike-air-10-fda-approved-or-fda-cleared", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline", children: t("fda510kPathway.exploreMore.item3") }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.projectebeauty.com/blogs/news/does-fda-approval-matter-when-choosing-an-led-light-therapy-mask", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline", children: t("fda510kPathway.exploreMore.item4") }) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("section", { className: "py-10 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-4 text-gray-900", children: t("fda510kPathway.author.title") }),
            /* @__PURE__ */ jsx("p", { children: t("fda510kPathway.author.content") })
          ] }) })
        ]
      }
    )
  ] });
};
export {
  FDA510kPathway as default
};
