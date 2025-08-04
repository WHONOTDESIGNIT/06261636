import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { u as useLanguage } from "../main.ssg.mjs";
import { Home, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
const Breadcrumbs = ({ customItems, className = "" }) => {
  const location = useLocation();
  const { t, currentLanguage } = useLanguage();
  const baseUrl = "https://iplmanufacturer.com";
  const pathNameMap = {
    "home": t("nav.home", "Home"),
    "solutions": t("nav.solutions", "Solutions"),
    "ipl-hair-removal": t("nav.iplHairRemoval", "IPL Hair Removal"),
    "ipl": t("nav.iplHairRemoval", "IPL Hair Removal"),
    "accessories": t("nav.accessories", "Accessories"),
    "service-support": t("nav.serviceSupport", "Service & Support"),
    "service": t("nav.serviceSupport", "Service & Support"),
    "blog": t("nav.blog", "Blog"),
    "about": t("nav.about", "About"),
    "how-to-use": t("nav.howToUse", "How to Use"),
    "contact": t("nav.contact", "Contact"),
    "smart-app": t("ipl.smartApp.title", "Smart App IPL"),
    "ice-feeling": t("ipl.iceFeeling.title", "Ice Feeling IPL"),
    "emerald": t("ipl.emerald.title", "Emerald IPL"),
    "skin-sensor": t("ipl.skinSensor.title", "Skin Sensor IPL"),
    "battery-powered": t("ipl.batteryPowered.title", "Battery Powered IPL"),
    "handheld": t("ipl.handheld.title", "Handheld IPL"),
    "ice-cooling": t("ipl.iceCooling.title", "Ice Cooling IPL"),
    "dual-lamp": t("ipl.dualLamp.title", "Dual Lamp IPL"),
    "ai-powered": t("ipl.aiPowered.title", "AI-Powered IPL"),
    "logo-printing": t("solutions.logoPrinting.title", "Logo Printing"),
    "packaging-solutions": t("solutions.packaging.title", "Packaging Solutions"),
    "drop-shipping": t("solutions.dropShipping.title", "Drop Shipping"),
    "global-shipping": t("solutions.globalShipping.title", "Global Shipping"),
    "brand-customization": t("solutions.brandCustomization.title", "Brand Customization"),
    "compliance": t("solutions.compliance.title", "Compliance"),
    "design-prototyping": t("solutions.designPrototyping.title", "Design & Prototyping"),
    "multi-head-ipl": t("solutions.multiHeadIPL.title", "Multi Head IPL"),
    "dual-lamp-ipl": t("solutions.dualLampIPL.title", "Dual Lamp IPL")
  };
  const generateBreadcrumbs = () => {
    if (customItems)
      return customItems;
    const pathnames = location.pathname.split("/").filter((x) => x && x !== currentLanguage);
    const breadcrumbs2 = [
      { name: t("nav.home", "Home"), path: "/" }
    ];
    let currentPath = "";
    pathnames.forEach((pathname) => {
      currentPath += currentPath === "" ? pathname : `/${pathname}`;
      const displayName = pathNameMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1).replace(/-/g, " ");
      breadcrumbs2.push({
        name: displayName,
        path: `/${currentPath}`
      });
    });
    return breadcrumbs2;
  };
  const breadcrumbs = generateBreadcrumbs();
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${baseUrl}${item.path}`
    }))
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Helmet, { children: /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) }) }),
    /* @__PURE__ */ jsx("nav", { className: `flex items-center space-x-2 text-sm text-gray-600 mb-6 px-4 py-2 bg-gray-50 rounded-lg ${className}`, "aria-label": "Breadcrumb", children: breadcrumbs.map((item, index) => {
      const isLast = index === breadcrumbs.length - 1;
      return /* @__PURE__ */ jsxs(React.Fragment, { children: [
        index === 0 ? /* @__PURE__ */ jsx(Home, { className: "w-4 h-4 text-gray-500" }) : /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4 text-gray-400" }),
        isLast ? /* @__PURE__ */ jsx("span", { className: "text-gray-900 font-semibold", "aria-current": "page", children: item.name }) : /* @__PURE__ */ jsx(
          Link,
          {
            to: item.path,
            className: "hover:text-ishine-blue-600 transition-colors font-medium",
            children: item.name
          }
        )
      ] }, item.path);
    }) })
  ] });
};
export {
  Breadcrumbs as B
};
