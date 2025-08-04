import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Plane, Shield, Clock, Globe } from "lucide-react";
import { u as useLanguage, S as SEOTags, C as ContactFormA } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "react-router-dom";
import "react-helmet-async";
const GlobalShipping = () => {
  const { t } = useLanguage();
  const shippingZones = [
    {
      region: t("globalShipping.zones.northAmerica.region"),
      countries: [t("globalShipping.zones.northAmerica.countries.us"), t("globalShipping.zones.northAmerica.countries.canada"), t("globalShipping.zones.northAmerica.countries.mexico")],
      deliveryTime: t("globalShipping.zones.northAmerica.deliveryTime"),
      icon: "🇺🇸"
    },
    {
      region: t("globalShipping.zones.europe.region"),
      countries: [t("globalShipping.zones.europe.countries.germany"), t("globalShipping.zones.europe.countries.france"), t("globalShipping.zones.europe.countries.uk"), t("globalShipping.zones.europe.countries.netherlands"), t("globalShipping.zones.europe.countries.italy")],
      deliveryTime: t("globalShipping.zones.europe.deliveryTime"),
      icon: "🇪🇺"
    },
    {
      region: t("globalShipping.zones.asiaPacific.region"),
      countries: [t("globalShipping.zones.asiaPacific.countries.japan"), t("globalShipping.zones.asiaPacific.countries.australia"), t("globalShipping.zones.asiaPacific.countries.singapore"), t("globalShipping.zones.asiaPacific.countries.southKorea")],
      deliveryTime: t("globalShipping.zones.asiaPacific.deliveryTime"),
      icon: "🌏"
    },
    {
      region: t("globalShipping.zones.restOfWorld.region"),
      countries: [t("globalShipping.zones.restOfWorld.countries.brazil"), t("globalShipping.zones.restOfWorld.countries.india"), t("globalShipping.zones.restOfWorld.countries.southAfrica"), t("globalShipping.zones.restOfWorld.countries.uae")],
      deliveryTime: t("globalShipping.zones.restOfWorld.deliveryTime"),
      icon: "🌍"
    }
  ];
  const services = [
    {
      icon: Plane,
      title: t("globalShipping.services.express.title"),
      description: t("globalShipping.services.express.description"),
      features: [t("globalShipping.services.express.features.delivery"), t("globalShipping.services.express.features.tracking"), t("globalShipping.services.express.features.insurance"), t("globalShipping.services.express.features.priority")]
    },
    {
      icon: Shield,
      title: t("globalShipping.services.secure.title"),
      description: t("globalShipping.services.secure.description"),
      features: [t("globalShipping.services.secure.features.protection"), t("globalShipping.services.secure.features.resistance"), t("globalShipping.services.secure.features.seals"), t("globalShipping.services.secure.features.inserts")]
    },
    {
      icon: Clock,
      title: t("globalShipping.services.flexible.title"),
      description: t("globalShipping.services.flexible.description"),
      features: [t("globalShipping.services.flexible.features.standard"), t("globalShipping.services.flexible.features.express"), t("globalShipping.services.flexible.features.economy"), t("globalShipping.services.flexible.features.scheduled")]
    },
    {
      icon: Globe,
      title: t("globalShipping.services.customs.title"),
      description: t("globalShipping.services.customs.description"),
      features: [t("globalShipping.services.customs.features.clearance"), t("globalShipping.services.customs.features.documentation"), t("globalShipping.services.customs.features.duty"), t("globalShipping.services.customs.features.compliance")]
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOTags,
      {
        title: "Global Shipping Solutions | Worldwide IPL Device Delivery",
        description: "Professional global shipping services for IPL hair removal devices. Express delivery to 50+ countries with customs clearance, tracking, and secure packaging.",
        keywords: "global shipping, worldwide delivery, IPL device shipping, customs clearance, express shipping, secure packaging"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-20", children: [
      /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-ishine-cyan-500 to-ishine-blue-500 text-white py-16", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-center",
          children: [
            /* @__PURE__ */ jsx(Globe, { className: "w-16 h-16 mx-auto mb-6 text-white" }),
            /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: t("globalShipping.hero.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-gray-100 max-w-3xl mx-auto", children: t("globalShipping.hero.subtitle") })
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "text-center mb-12",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: t("globalShipping.zones.title") }),
              /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: t("globalShipping.zones.subtitle") })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: shippingZones.map((zone, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: index * 0.1 },
            className: "bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow",
            children: [
              /* @__PURE__ */ jsx("div", { className: "text-4xl mb-4", children: zone.icon }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-3", children: zone.region }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 mb-4", children: zone.countries.join(", ") }),
              /* @__PURE__ */ jsx("div", { className: "text-ishine-cyan-500 font-semibold", children: zone.deliveryTime })
            ]
          },
          zone.region
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "text-center mb-12",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: t("globalShipping.services.title") }),
              /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: t("globalShipping.services.subtitle") })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: services.map((service, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: index * 0.1 },
            className: "bg-white rounded-lg p-8 hover:shadow-lg transition-shadow",
            children: [
              /* @__PURE__ */ jsx(service.icon, { className: "w-12 h-12 text-ishine-cyan-500 mb-6" }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-gray-900 mb-4", children: service.title }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: service.description }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: service.features.map((feature, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-center text-gray-700", children: [
                /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-ishine-cyan-500 rounded-full mr-3" }),
                feature
              ] }, i)) })
            ]
          },
          service.title
        )) })
      ] }) }),
      /* @__PURE__ */ jsx(ContactFormA, {})
    ] })
  ] });
};
export {
  GlobalShipping as default
};
