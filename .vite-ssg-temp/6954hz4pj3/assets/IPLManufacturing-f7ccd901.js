import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Factory, HelpCircle, Upload, Cog, PackageSearch, Settings, Award, FileText } from "lucide-react";
import { C as ContactFormA } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "react-router-dom";
import "react-helmet-async";
const steps = [
  {
    id: 1,
    title: "Customer Industrial Design (ID) Submission",
    duration: "Depends on Customer",
    desc: "After securing your appearance patent, submit your Industrial Design (ID) files to initiate the project. Protects your IP and sets the foundation for all downstream engineering.",
    cta: {
      text: "Upload Your ID Files",
      href: "/upload-id-files",
      color: "rgb(222,117,16)",
      hover: "rgb(198,104,14)"
    },
    icon: Upload
  },
  {
    id: 2,
    title: "Mechanical Design (MD) & Structural Engineering",
    duration: "4 weeks",
    desc: "Transform your ID into a manufacturable structure, optimizing for performance, safety, and cost. Deliverables: 3D CAD models, BOM, and DFM analysis. Parallel DHF & DMR documentation.",
    icon: Cog
  },
  {
    id: 3,
    title: "Prototype & Sample Build (Hand Sample)",
    duration: "2–4 weeks",
    desc: "Rapid prototyping (CNC, 3D printing, soft tooling) to create a working sample for functional and aesthetic validation before tooling.",
    icon: PackageSearch
  },
  {
    id: 4,
    title: "Tooling & Mold Fabrication",
    duration: "4–6 weeks",
    desc: "Precision mold design and fabrication for plastic parts and key components, scheduling mold T0 upon completion.",
    icon: Settings
  },
  {
    id: 5,
    title: "T0 & T1 Mold Trials",
    duration: "3 weeks",
    desc: "Evaluate part quality, fit, and function during T0; adjust defects and cosmetics for T1.",
    icon: Cog
  },
  {
    id: 6,
    title: "Pilot Production (Trial Run)",
    duration: "2–4 weeks",
    desc: "Assemble limited units, conduct tests, finalize SOPs, and continue DHF/DMR updates.",
    icon: Factory
  },
  {
    id: 7,
    title: "Regulatory Testing & Documentation",
    duration: "8–10 weeks",
    desc: "Submit samples for FDA & MDL compliance tests (safety, EMC, photobiological). Prepare and compile all technical documents, labeling, and manuals.",
    icon: Award
  },
  {
    id: 8,
    title: "Regulatory Submission & Approval",
    duration: "12–16 weeks",
    desc: "Submit complete technical files for review; monitor progress, respond to queries, and obtain certificates.",
    icon: FileText
  },
  {
    id: 9,
    title: "Mass Production Launch",
    duration: "4–6 weeks",
    desc: "Ramp up to full-scale manufacturing after regulatory clearance. Implement production optimizations, QC, and packaging.",
    icon: Factory
  }
];
const timeline = [
  { step: "ID Submission", duration: "Customer-driven" },
  { step: "MD & Structural Design", duration: "4 weeks" },
  { step: "Prototype", duration: "2–4 weeks" },
  { step: "Tooling", duration: "4–6 weeks" },
  { step: "T0 Mold Trial", duration: "1 week" },
  { step: "T1 Mold Trial", duration: "2 weeks" },
  { step: "Pilot Production", duration: "2–4 weeks" },
  { step: "FDA/MDL Testing", duration: "8–10 weeks" },
  { step: "Documentation", duration: "2–4 weeks" },
  { step: "FDA/MDL Submission", duration: "12–16 weeks" },
  { step: "Mass Production", duration: "4–6 weeks" }
];
const faqs = [
  {
    q: "What is the minimum order quantity for mass production?",
    a: "Typically 500 units per model per color."
  },
  {
    q: "Can you support custom packaging and user manuals?",
    a: "Yes, all packaging and documentation can be fully customized to your brand and regulatory requirements."
  },
  {
    q: "How do you ensure product quality and compliance?",
    a: "Strict QC at every stage, plus comprehensive DHF/DMR documentation and third-party lab testing."
  }
];
const IPLManufacturing = () => {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-20 overflow-x-hidden", children: [
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-ishine-purple-500 to-ishine-pink-500 text-white py-20", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        children: [
          /* @__PURE__ */ jsx(Factory, { className: "w-16 h-16 mx-auto mb-6" }),
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: "From Idea to Market: The Complete IPL Home Device Manufacturing Journey" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-100", children: "Transform your patented IPL device concept into a market-ready product with iShine's end-to-end manufacturing process. Our technical expertise, transparent workflow, and regulatory know-how ensure your device meets the highest standards—on time, every time." }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/start-project",
              className: "inline-block bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300",
              children: "Start Your Project"
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center mb-12 text-ishine-purple-600", children: "Step-by-Step Manufacturing Process" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-12", children: steps.map((step, idx) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: idx * 0.1 },
          className: "bg-gray-50 rounded-lg p-6 shadow",
          children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx(step.icon, { className: "w-10 h-10 text-ishine-purple-500 mt-1" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold mb-1", children: [
                step.id,
                ". ",
                step.title
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 mb-2", children: step.desc }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500 italic mb-2", children: [
                "Duration: ",
                step.duration
              ] }),
              step.cta && /* @__PURE__ */ jsx(
                "a",
                {
                  href: step.cta.href,
                  className: `inline-block bg-[${step.cta.color}] hover:bg-[${step.cta.hover}] text-white font-semibold py-2 px-6 rounded transition-colors duration-300 text-sm`,
                  children: step.cta.text
                }
              )
            ] })
          ] })
        },
        step.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center mb-12 text-ishine-purple-600", children: "Timeline Overview" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: timeline.map((item) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow p-4 flex justify-between items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-700", children: item.step }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-sm", children: item.duration })
      ] }, item.step)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 text-ishine-purple-600", children: "Why Choose iShine?" }),
      /* @__PURE__ */ jsxs("p", { className: "max-w-3xl mx-auto text-gray-700 mb-8", children: [
        "Full-spectrum expertise: From concept to compliance, we manage every technical and regulatory detail.",
        /* @__PURE__ */ jsx("br", {}),
        "Transparent process: Real-time updates, milestone reviews, and open communication.",
        /* @__PURE__ */ jsx("br", {}),
        "Regulatory confidence: Proven track record with FDA, MDL, and international standards."
      ] }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/download-process-pdf",
          className: "inline-block bg-[rgb(0,102,161)] hover:bg-[rgb(0,86,136)] text-white font-semibold py-3 px-8 rounded-lg shadow transition-colors duration-300",
          children: "Download Full Process PDF"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center mb-12 text-ishine-purple-600", children: "FAQs" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6", children: faqs.map(({ q, a }, idx) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: idx * 0.1 },
          className: "bg-white rounded-lg shadow p-6",
          children: [
            /* @__PURE__ */ jsxs("h3", { className: "flex items-center gap-2 text-lg font-semibold text-ishine-purple-500 mb-2", children: [
              /* @__PURE__ */ jsx(HelpCircle, { className: "w-5 h-5" }),
              " ",
              q
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-sm", children: a })
          ]
        },
        q
      )) })
    ] }) }),
    /* @__PURE__ */ jsx(ContactFormA, {})
  ] });
};
export {
  IPLManufacturing as default
};
