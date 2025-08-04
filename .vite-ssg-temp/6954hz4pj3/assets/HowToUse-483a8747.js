import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Zap, Eye, CheckCircle, Shield, AlertTriangle, Thermometer, BookOpen, Calendar, HelpCircle, Play, Clock } from "lucide-react";
import { u as useLanguage, S as SEOTags, C as ContactFormA } from "../main.ssg.mjs";
import "vite-ssg";
import "react-router-dom";
import "react-helmet-async";
const HowToUse = () => {
  const { t, currentLanguage } = useLanguage();
  useEffect(() => {
    const testKeys = [
      "howToUse.heroTitle",
      "howToUse.heroDescription",
      "howToUse.steps.preparation.title",
      "howToUse.steps.preparation.description"
    ];
    testKeys.forEach((key) => {
      const translation = t(key);
      if (translation === key) {
        console.warn(`Missing translation for key: ${key} in language: ${currentLanguage}`);
      }
    });
  }, [t, currentLanguage]);
  const steps = [
    {
      step: "01",
      title: t("howToUse.steps.preparation.title"),
      description: t("howToUse.steps.preparation.description"),
      details: [
        t("howToUse.steps.preparation.details.shave"),
        t("howToUse.steps.preparation.details.clean"),
        t("howToUse.steps.preparation.details.dry"),
        t("howToUse.steps.preparation.details.remove")
      ],
      icon: Heart
    },
    {
      step: "02",
      title: t("howToUse.steps.deviceSetup.title"),
      description: t("howToUse.steps.deviceSetup.description"),
      details: [
        t("howToUse.steps.deviceSetup.details.connect"),
        t("howToUse.steps.deviceSetup.details.power"),
        t("howToUse.steps.deviceSetup.details.intensity"),
        t("howToUse.steps.deviceSetup.details.attach")
      ],
      icon: Zap
    },
    {
      step: "03",
      title: t("howToUse.steps.skinToneTest.title"),
      description: t("howToUse.steps.skinToneTest.description"),
      details: [
        t("howToUse.steps.skinToneTest.details.test"),
        t("howToUse.steps.skinToneTest.details.wait"),
        t("howToUse.steps.skinToneTest.details.adjust"),
        t("howToUse.steps.skinToneTest.details.proceed")
      ],
      icon: Eye
    },
    {
      step: "04",
      title: t("howToUse.steps.treatmentProcess.title"),
      description: t("howToUse.steps.treatmentProcess.description"),
      details: [
        t("howToUse.steps.treatmentProcess.details.place"),
        t("howToUse.steps.treatmentProcess.details.press"),
        t("howToUse.steps.treatmentProcess.details.move"),
        t("howToUse.steps.treatmentProcess.details.complete")
      ],
      icon: CheckCircle
    },
    {
      step: "05",
      title: t("howToUse.steps.postTreatmentCare.title"),
      description: t("howToUse.steps.postTreatmentCare.description"),
      details: [
        t("howToUse.steps.postTreatmentCare.details.cooling"),
        t("howToUse.steps.postTreatmentCare.details.sun"),
        t("howToUse.steps.postTreatmentCare.details.sunscreen"),
        t("howToUse.steps.postTreatmentCare.details.moisturize")
      ],
      icon: Shield
    }
  ];
  const safetyGuidelines = [
    {
      icon: AlertTriangle,
      title: t("howToUse.safetyGuidelines.warnings.title"),
      points: [
        t("howToUse.safetyGuidelines.warnings.point1"),
        t("howToUse.safetyGuidelines.warnings.point2"),
        t("howToUse.safetyGuidelines.warnings.point3"),
        t("howToUse.safetyGuidelines.warnings.point4"),
        t("howToUse.safetyGuidelines.warnings.point5")
      ]
    },
    {
      icon: Eye,
      title: t("howToUse.safetyGuidelines.eyeProtection.title"),
      points: [
        t("howToUse.safetyGuidelines.eyeProtection.point1"),
        t("howToUse.safetyGuidelines.eyeProtection.point2"),
        t("howToUse.safetyGuidelines.eyeProtection.point3"),
        t("howToUse.safetyGuidelines.eyeProtection.point4")
      ]
    },
    {
      icon: Thermometer,
      title: t("howToUse.safetyGuidelines.skinSensitivity.title"),
      points: [
        t("howToUse.safetyGuidelines.skinSensitivity.point1"),
        t("howToUse.safetyGuidelines.skinSensitivity.point2"),
        t("howToUse.safetyGuidelines.skinSensitivity.point3"),
        t("howToUse.safetyGuidelines.skinSensitivity.point4")
      ]
    }
  ];
  const treatmentSchedule = [
    { week: t("howToUse.treatmentSchedule.weeks1to4.week"), frequency: t("howToUse.treatmentSchedule.weeks1to4.frequency"), description: t("howToUse.treatmentSchedule.weeks1to4.description") },
    { week: t("howToUse.treatmentSchedule.weeks5to8.week"), frequency: t("howToUse.treatmentSchedule.weeks5to8.frequency"), description: t("howToUse.treatmentSchedule.weeks5to8.description") },
    { week: t("howToUse.treatmentSchedule.weeks9to12.week"), frequency: t("howToUse.treatmentSchedule.weeks9to12.frequency"), description: t("howToUse.treatmentSchedule.weeks9to12.description") },
    { week: t("howToUse.treatmentSchedule.after12weeks.week"), frequency: t("howToUse.treatmentSchedule.after12weeks.frequency"), description: t("howToUse.treatmentSchedule.after12weeks.description") }
  ];
  const troubleshooting = [
    {
      problem: t("howToUse.troubleshooting.deviceNotTurningOn.problem"),
      solutions: [
        t("howToUse.troubleshooting.deviceNotTurningOn.solution1"),
        t("howToUse.troubleshooting.deviceNotTurningOn.solution2"),
        t("howToUse.troubleshooting.deviceNotTurningOn.solution3"),
        t("howToUse.troubleshooting.deviceNotTurningOn.solution4")
      ]
    },
    {
      problem: t("howToUse.troubleshooting.noLightFlash.problem"),
      solutions: [
        t("howToUse.troubleshooting.noLightFlash.solution1"),
        t("howToUse.troubleshooting.noLightFlash.solution2"),
        t("howToUse.troubleshooting.noLightFlash.solution3"),
        t("howToUse.troubleshooting.noLightFlash.solution4")
      ]
    },
    {
      problem: t("howToUse.troubleshooting.skinIrritation.problem"),
      solutions: [
        t("howToUse.troubleshooting.skinIrritation.solution1"),
        t("howToUse.troubleshooting.skinIrritation.solution2"),
        t("howToUse.troubleshooting.skinIrritation.solution3"),
        t("howToUse.troubleshooting.skinIrritation.solution4")
      ]
    },
    {
      problem: t("howToUse.troubleshooting.noResults.problem"),
      solutions: [
        t("howToUse.troubleshooting.noResults.solution1"),
        t("howToUse.troubleshooting.noResults.solution2"),
        t("howToUse.troubleshooting.noResults.solution3"),
        t("howToUse.troubleshooting.noResults.solution4")
      ]
    }
  ];
  const faqs = [
    {
      question: t("howToUse.faqs.q1.question"),
      answer: t("howToUse.faqs.q1.answer")
    },
    {
      question: t("howToUse.faqs.q2.question"),
      answer: t("howToUse.faqs.q2.answer")
    },
    {
      question: t("howToUse.faqs.q3.question"),
      answer: t("howToUse.faqs.q3.answer")
    },
    {
      question: t("howToUse.faqs.q4.question"),
      answer: t("howToUse.faqs.q4.answer")
    },
    {
      question: t("howToUse.faqs.q5.question"),
      answer: t("howToUse.faqs.q5.answer")
    },
    {
      question: t("howToUse.faqs.q6.question"),
      answer: t("howToUse.faqs.q6.answer")
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-20", children: [
    /* @__PURE__ */ jsx(
      SEOTags,
      {
        title: t("howToUse.seo.title"),
        description: t("howToUse.seo.description"),
        keywords: t("howToUse.seo.keywords")
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-ishine-blue-500 to-ishine-teal-500 text-white py-16", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: "text-center",
        children: [
          /* @__PURE__ */ jsx(BookOpen, { className: "w-16 h-16 mx-auto mb-6 text-white" }),
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: t("howToUse.heroTitle") }),
          /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-gray-100 max-w-3xl mx-auto", children: t("howToUse.heroDescription") })
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
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: t("howToUse.stepByStepTitle") }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: t("howToUse.stepByStepDescription") })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "space-y-8", children: steps.map((step, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.6, delay: index * 0.1 },
          className: `flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`,
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-ishine-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4", children: step.step }),
                /* @__PURE__ */ jsx(step.icon, { className: "w-8 h-8 text-ishine-blue-500 mr-3" }),
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-gray-900", children: step.title })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-4", children: step.description }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: step.details.map((detail, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: detail })
              ] }, i)) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-br from-ishine-blue-100 to-ishine-teal-100 rounded-lg p-8 h-64 flex items-center justify-center", children: /* @__PURE__ */ jsx(step.icon, { className: "w-24 h-24 text-ishine-blue-500" }) }) })
          ]
        },
        step.step
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
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: t("howToUse.safetyGuidelinesTitle") }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: t("howToUse.safetyGuidelinesDescription") })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: safetyGuidelines.map((guideline, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: index * 0.1 },
          className: "bg-white rounded-lg p-6 shadow-lg",
          children: [
            /* @__PURE__ */ jsx(guideline.icon, { className: "w-12 h-12 text-red-500 mb-4" }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-4", children: guideline.title }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: guideline.points.map((point, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700 text-sm", children: point })
            ] }, i)) })
          ]
        },
        guideline.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: t("howToUse.treatmentScheduleTitle") }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: t("howToUse.treatmentScheduleDescription") })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: treatmentSchedule.map((schedule, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: index * 0.1 },
          className: "bg-gray-50 rounded-lg p-6 text-center",
          children: [
            /* @__PURE__ */ jsx(Calendar, { className: "w-12 h-12 text-ishine-blue-500 mx-auto mb-4" }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: schedule.week }),
            /* @__PURE__ */ jsx("p", { className: "text-ishine-blue-500 font-medium mb-2", children: schedule.frequency }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: schedule.description })
          ]
        },
        schedule.week
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
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: t("howToUse.troubleshootingTitle") }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: t("howToUse.troubleshootingDescription") })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "space-y-8", children: troubleshooting.map((item, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: index * 0.1 },
          className: "bg-white rounded-lg p-6 shadow-lg",
          children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-gray-900 mb-4 flex items-center", children: [
              /* @__PURE__ */ jsx(HelpCircle, { className: "w-6 h-6 text-ishine-blue-500 mr-3" }),
              item.problem
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: item.solutions.map((solution, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: solution })
            ] }, i)) })
          ]
        },
        item.problem
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: t("howToUse.faqTitle") }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: t("howToUse.faqDescription") })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: index * 0.1 },
          className: "bg-gray-50 rounded-lg p-6",
          children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-gray-900 mb-3 flex items-start", children: [
              /* @__PURE__ */ jsx(HelpCircle, { className: "w-5 h-5 text-ishine-blue-500 mr-2 mt-1 flex-shrink-0" }),
              faq.question
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700 ml-7", children: faq.answer })
          ]
        },
        faq.question
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
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: t("howToUse.videoTutorialsTitle") }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: t("howToUse.videoTutorialsDescription") })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
        { title: t("howToUse.videoTutorials.gettingStarted.title"), duration: "5:30" },
        { title: t("howToUse.videoTutorials.safetyGuidelines.title"), duration: "4:15" },
        { title: t("howToUse.videoTutorials.treatmentTechniques.title"), duration: "7:20" },
        { title: t("howToUse.videoTutorials.postTreatmentCare.title"), duration: "3:45" },
        { title: t("howToUse.videoTutorials.troubleshooting.title"), duration: "6:10" },
        { title: t("howToUse.videoTutorials.maintenance.title"), duration: "2:55" }
      ].map((video, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: index * 0.1 },
          className: "bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-br from-ishine-blue-500 to-ishine-teal-500 h-48 flex items-center justify-center", children: /* @__PURE__ */ jsx(Play, { className: "w-16 h-16 text-white" }) }),
            /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: video.title }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center text-gray-600", children: [
                /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 mr-2" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: video.duration })
              ] })
            ] })
          ]
        },
        video.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsx(ContactFormA, {})
  ] });
};
export {
  HowToUse as default
};
