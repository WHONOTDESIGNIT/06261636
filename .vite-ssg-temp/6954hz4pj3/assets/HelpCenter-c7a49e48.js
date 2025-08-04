import { jsxs, jsx } from "react/jsx-runtime";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle, MessageCircle, Phone, Mail, Package, ShieldCheck, Award, Snowflake, Truck } from "lucide-react";
import { u as useLanguage, C as ContactFormA } from "../main.ssg.mjs";
import "vite-ssg";
import "react-router-dom";
import "react-helmet-async";
const HelpCenter = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(null);
  const helpQaData = [
    {
      title: "Logo Printing / Box Customization / Branding",
      icon: Package,
      qas: [
        {
          question: "Can you print my logo on the device or packaging?",
          answer: "Yes, we offer OEM/ODM services including logo printing on both the device and packaging. Please provide your logo files and requirements."
        },
        {
          question: "What customization options are available for packaging?",
          answer: "We support full box customization, including color, material, design, and inserts. Our design team can assist you with the process."
        },
        {
          question: "Can you help with branding and product design?",
          answer: 'Absolutely! We provide branding solutions, from logo design to product appearance and packaging. For outstanding industrial design, we highly recommend collaborating with <a href="https://www.in-dare.com" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">Indare Design (China studio)</a> and <a href="https://www.whynot-design.com/" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">Whynot Design (Italian studio)</a>. Their exceptional talent has helped many of our clients achieve great success in the appearance design of home-use IPL hair removal devices.'
        }
      ]
    },
    {
      title: "Compliance",
      icon: ShieldCheck,
      qas: [
        {
          question: "What certifications do your IPL devices have?",
          answer: "Our IPL devices are certified with CE, RoHS, FCC, and FDA (510k) where required. We can provide all necessary documentation for your market."
        },
        {
          question: "Can you assist with compliance for my country?",
          answer: "Yes, we have experience supporting compliance for various regions and can help you with local regulatory requirements."
        }
      ]
    },
    {
      title: "How to Get Your Own FDA Listing",
      icon: Award,
      qas: [
        {
          question: "How much does it cost to obtain an FDA listing for my brand?",
          answer: "The cost depends on the type of device and your specific requirements. Please contact us for a detailed quotation."
        },
        {
          question: "What is the process for getting an FDA listing?",
          answer: "We guide you through the entire process: document preparation, product testing, submission, and communication with the FDA. Our team handles most of the paperwork."
        },
        {
          question: "How long does it take to get an FDA listing?",
          answer: "The typical timeline is 4–8 weeks, depending on the product and the completeness of your documentation."
        }
      ]
    },
    {
      title: "IPL Technology Research",
      icon: Snowflake,
      qas: [
        {
          question: "How does sapphire cooling technology work in IPL devices?",
          answer: "Sapphire cooling uses a sapphire crystal window that efficiently conducts heat away from the skin, providing a cold touch and reducing discomfort during treatment."
        },
        {
          question: "How is conventional ice-cooling technology implemented in IPL devices?",
          answer: "Conventional ice-cooling typically uses a metal plate or thermoelectric cooler (TEC) to lower the temperature of the treatment window, offering basic cooling but less efficiency than sapphire."
        },
        {
          question: "What is the main difference between sapphire cooling and regular ice-cooling?",
          answer: "Sapphire cooling provides faster, more consistent, and deeper cooling compared to regular ice-cooling, resulting in a more comfortable and effective treatment."
        }
      ]
    },
    {
      title: "Logistics",
      icon: Truck,
      qas: [
        {
          question: "Do you support dropshipping services?",
          answer: "Yes, we offer dropshipping and can ship directly to your customers worldwide."
        },
        {
          question: "What are your shipping costs to different countries?",
          answer: "Shipping costs depend on the destination country, order quantity, and shipping method. Please contact us for a detailed quote."
        },
        {
          question: "Which logistics partners do you work with?",
          answer: "We cooperate with major logistics providers such as DHL, FedEx, UPS, and local couriers to ensure fast and reliable delivery."
        },
        {
          question: "What is your solution if products are damaged during shipping?",
          answer: "If products are damaged due to rough handling during transit, we will offer replacements or compensation after verification."
        }
      ]
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-20", children: [
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: "text-center",
        children: [
          /* @__PURE__ */ jsx(HelpCircle, { className: "w-16 h-16 mx-auto mb-6 text-white" }),
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: t("helpCenter.hero.title") }),
          /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-gray-100 max-w-3xl mx-auto", children: t("helpCenter.hero.subtitle") })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
      { icon: HelpCircle, title: "FAQ", description: "Frequently asked questions" },
      { icon: MessageCircle, title: "Live Chat", description: "Real-time support" },
      { icon: Phone, title: "Phone Support", description: "Direct assistance" },
      { icon: Mail, title: "Email Support", description: "Detailed help via email" }
    ].map((feature, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: index * 0.1 },
        className: "text-center",
        children: [
          /* @__PURE__ */ jsx(feature.icon, { className: "w-12 h-12 text-blue-500 mx-auto mb-4" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: feature.title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: feature.description })
        ]
      },
      feature.title
    )) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: helpQaData.map((cat, catIdx) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: catIdx * 0.1 },
        className: "mb-12",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-blue-600 mb-6", children: cat.title }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4 pl-2", children: cat.qas.map((qa, qaIdx) => {
            const isOpen = open && open.catIdx === catIdx && open.qaIdx === qaIdx;
            return /* @__PURE__ */ jsxs(React.Fragment, { children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-lg p-4 shadow flex items-center justify-between", children: [
                /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx("h3", { className: "font-semibold text-blue-500 mb-0 select-none cursor-default", children: qa.question }) }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "ml-4 w-8 h-8 flex items-center justify-center rounded-full border border-blue-700 text-blue-700 text-xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-300 transition",
                    "aria-label": isOpen ? "Collapse answer" : "Expand answer",
                    onClick: () => setOpen(isOpen ? null : { catIdx, qaIdx }),
                    tabIndex: 0,
                    children: isOpen ? /* @__PURE__ */ jsx("span", { className: "text-2xl", children: "−" }) : /* @__PURE__ */ jsx("span", { className: "text-2xl", children: "+" })
                  }
                )
              ] }),
              isOpen && /* @__PURE__ */ jsx("div", { className: "bg-white rounded-lg p-4 mt-2 mb-4 ml-4 shadow-inner animate-fade-in", children: /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-base leading-relaxed whitespace-pre-line", dangerouslySetInnerHTML: { __html: qa.answer } }) })
            ] }, qa.question);
          }) })
        ]
      },
      cat.title
    )) }) }),
    /* @__PURE__ */ jsx(ContactFormA, {}),
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 mt-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: t("helpCenter.contact.title") }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl mb-8", children: t("helpCenter.contact.subtitle") }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/contact-technical-support",
          className: "inline-block bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300 hover:bg-gray-100",
          children: t("helpCenter.contact.button")
        }
      )
    ] }) })
  ] });
};
export {
  HelpCenter as default
};
