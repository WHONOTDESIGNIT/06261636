import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Headphones, Shield, BookOpen, HelpCircle, Factory, Award, Users, Search, DollarSign, Camera, Play, Heart, Truck } from "lucide-react";
import { u as useLanguage, S as SEOTags, C as ContactFormA } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "react-helmet-async";
const ServiceSupport = () => {
  const { t } = useLanguage();
  const serviceCategories = [
    {
      title: t("serviceSupport.categories.technicalSupport.title"),
      description: t("serviceSupport.categories.technicalSupport.description"),
      icon: Headphones,
      services: [
        {
          name: t("serviceSupport.services.afterSalesService.name"),
          description: t("serviceSupport.services.afterSalesService.description"),
          href: "/service-support/after-sales",
          icon: Shield
        },
        {
          name: t("serviceSupport.services.knowledgeBase.name"),
          description: t("serviceSupport.services.knowledgeBase.description"),
          href: "/service-support/knowledge-base",
          icon: BookOpen
        },
        {
          name: t("serviceSupport.services.helpCenter.name"),
          description: t("serviceSupport.services.helpCenter.description"),
          href: "/service-support/help-center",
          icon: HelpCircle
        }
      ]
    },
    {
      title: t("serviceSupport.categories.manufacturingServices.title"),
      description: t("serviceSupport.categories.manufacturingServices.description"),
      icon: Factory,
      services: [
        {
          name: t("serviceSupport.services.iplManufacturing.name"),
          description: t("serviceSupport.services.iplManufacturing.description"),
          href: "/service-support/manufacturing",
          icon: Factory
        },
        {
          name: t("serviceSupport.services.winFdaListing.name"),
          description: t("serviceSupport.services.winFdaListing.description"),
          href: "/service-support/win-fda-listing",
          icon: Award
        }
      ]
    },
    {
      title: t("serviceSupport.categories.businessSupport.title"),
      description: t("serviceSupport.categories.businessSupport.description"),
      icon: Users,
      services: [
        {
          name: t("serviceSupport.services.beautySourcing.name"),
          description: t("serviceSupport.services.beautySourcing.description"),
          href: "/service-support/beauty-sourcing",
          icon: Search
        },
        {
          name: t("serviceSupport.services.pricingGuide.name"),
          description: t("serviceSupport.services.pricingGuide.description"),
          href: "/service-support/pricing-guide",
          icon: DollarSign
        }
      ]
    },
    {
      title: t("serviceSupport.categories.resourcesMedia.title"),
      description: t("serviceSupport.categories.resourcesMedia.description"),
      icon: Camera,
      services: [
        {
          name: t("serviceSupport.services.gallery.name"),
          description: t("serviceSupport.services.gallery.description"),
          href: "/service-support/gallery",
          icon: Camera
        },
        {
          name: t("serviceSupport.services.videos.name"),
          description: t("serviceSupport.services.videos.description"),
          href: "/service-support/videos",
          icon: Play
        }
      ]
    }
  ];
  const stats = [
    { number: "5000+", label: t("serviceSupport.stats.satisfiedClients"), icon: Heart },
    { number: "24/7", label: t("serviceSupport.stats.technicalSupport"), icon: Headphones },
    { number: "99.9%", label: t("serviceSupport.stats.uptimeGuarantee"), icon: Shield },
    { number: "50+", label: t("serviceSupport.stats.countriesServed"), icon: Truck }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-20", children: [
    /* @__PURE__ */ jsx(
      SEOTags,
      {
        title: t("serviceSupport.seo.title", "Service & Support | IPL Device Manufacturing Support | iShine"),
        description: t("serviceSupport.seo.description", "Comprehensive service and support for IPL device manufacturers. After-sales service, technical support, knowledge base, and manufacturing assistance."),
        keywords: t("serviceSupport.seo.keywords", "IPL service support, after-sales service, technical support, manufacturing support, knowledge base")
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: "text-center",
        children: [
          /* @__PURE__ */ jsx(Headphones, { className: "w-20 h-20 mx-auto mb-6 text-white" }),
          /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-6xl font-bold mb-6", children: t("serviceSupport.hero.title") }),
          /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl mb-8 text-gray-100 max-w-4xl mx-auto", children: t("serviceSupport.hero.subtitle") }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/service-support/help-center",
              className: "bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300",
              children: t("serviceSupport.hero.cta")
            }
          ) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: stats.map((stat, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: index * 0.1 },
        className: "text-center",
        children: [
          /* @__PURE__ */ jsx(stat.icon, { className: "w-12 h-12 text-blue-600 mx-auto mb-4" }),
          /* @__PURE__ */ jsx("div", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-2", children: stat.number }),
          /* @__PURE__ */ jsx("div", { className: "text-gray-600 font-medium", children: stat.label })
        ]
      },
      stat.label
    )) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6", children: t("serviceSupport.ecosystem.title") }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: t("serviceSupport.ecosystem.subtitle") })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "space-y-16", children: serviceCategories.map((category, categoryIndex) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8, delay: categoryIndex * 0.2 },
          className: "border border-gray-200 rounded-2xl p-8 bg-gray-50",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-6", children: [
              /* @__PURE__ */ jsx(category.icon, { className: "w-12 h-12 text-blue-600 mr-4" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-bold text-gray-900 mb-2", children: category.title }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: category.description })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: category.services.map((service, serviceIndex) => /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.6, delay: serviceIndex * 0.1 },
                children: /* @__PURE__ */ jsxs(
                  Link,
                  {
                    to: service.href,
                    className: "block bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 group",
                    children: [
                      /* @__PURE__ */ jsx(service.icon, { className: "w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" }),
                      /* @__PURE__ */ jsx("h4", { className: "text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300", children: service.name }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: service.description }),
                      /* @__PURE__ */ jsx("div", { className: "mt-4 text-blue-600 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300", children: t("serviceSupport.learnMore") })
                    ]
                  }
                )
              },
              service.name
            )) })
          ]
        },
        category.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6", children: t("serviceSupport.cta.title") }),
          /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-gray-100", children: t("serviceSupport.cta.subtitle") })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(ContactFormA, {})
  ] });
};
export {
  ServiceSupport as default
};
