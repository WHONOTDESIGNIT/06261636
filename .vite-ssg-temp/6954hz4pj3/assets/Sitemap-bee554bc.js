import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { u as useLanguage } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "react-helmet-async";
import "lucide-react";
const Sitemap = () => {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-white pt-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4 py-12", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-8 text-center", children: t("sitemap.title") }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-4", children: t("sitemap.mainPages") }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.home") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.about") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/ipl-hair-removal", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.iplHairRemoval") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/solutions", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.solutions") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.contact") }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-4", children: t("sitemap.iplProducts") }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/ipl/emerald-ipl", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.emeraldIpl") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/ipl/ice-cooling-ipl", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.iceCoolingIpl") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/ipl/ice-feeling-ipl", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.iceFeelingIpl") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/ipl/handheld-ipl", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.handheldIpl") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/ipl/battery-powered-ipl", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.batteryPoweredIpl") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/ipl/skin-sensor-ipl", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.skinSensorIpl") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/ipl/ai-powered-ipl", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.aiPoweredIpl") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/ipl/dual-lamp-ipl", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.dualLampIpl") }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-4", children: t("sitemap.aboutPages") }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about/brand-story", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.brandStory") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about/company-info", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.companyInfo") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about/core-principles", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.corePrinciples") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about/founder-message", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.founderMessage") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about/global-witness", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.globalWitness") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about/quality", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.quality") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about/technology", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.technology") }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-4", children: t("sitemap.solutions") }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/solutions/brand-customization", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.brandCustomization") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/solutions/compliance", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.compliance") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/solutions/design-prototyping", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.designPrototyping") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/solutions/drop-shipping", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.dropShipping") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/solutions/dual-lamp-ipl", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.dualLampIplSolution") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/solutions/global-shipping", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.globalShipping") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/solutions/logo-printing", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.logoPrinting") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/solutions/multi-head-ipl", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.multiHeadIpl") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/solutions/packaging-solutions", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.packagingSolutions") }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-4", children: t("sitemap.accessories") }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/accessories/adapter", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.adapter") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/accessories/filter", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.filter") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/accessories/protective-goggles", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.protectiveGoggles") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/accessories/sapphire-lens", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.sapphireLens") }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-4", children: t("sitemap.serviceSupport") }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/service-support", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.serviceSupport") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/service-support/after-sales-service", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.afterSalesService") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/service-support/help-center", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.helpCenter") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/service-support/knowledge-base", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.knowledgeBase") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/service-support/ipl-manufacturing", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.iplManufacturing") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/service-support/win-fda-listing", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.winFdaListing") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/service-support/beauty-sourcing", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.beautySourcing") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/service-support/pricing-guide", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.pricingGuide") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/service-support/gallery", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.gallery") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/service-support/videos", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.videos") }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-4", children: t("sitemap.blog") }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/ai-powered-skin-sensing", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.aiPoweredSkinSensing") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/fda-510k-pathway", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.fda510kPathway") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/future-home-hair-removal", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.futureHomeHairRemoval") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/global-market-shifts", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.globalMarketShifts") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/industries", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.industries") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/ipl-best-choice", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.iplBestChoice") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/multi-head-ipl-systems", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.multiHeadIplSystems") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/news-insights", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.newsInsights") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/sapphire-cooling", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.sapphireCooling") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/sustainable-manufacturing", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.sustainableManufacturing") }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800 mb-4", children: t("sitemap.otherPages") }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/how-to-use", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.howToUse") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/shipping-cost", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.shippingCost") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/silk", className: "text-blue-600 hover:text-blue-800", children: t("sitemap.silk") }) })
        ] })
      ] })
    ] })
  ] }) });
};
export {
  Sitemap as default
};
