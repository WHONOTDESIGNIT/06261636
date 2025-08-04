import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { u as useLanguage, b as useForm, B as Button, S as SEOTags } from "../main.ssg.mjs";
import "vite-ssg";
import "react";
import "react-router-dom";
import "react-helmet-async";
import "lucide-react";
const ContactFormB = () => {
  const { t } = useLanguage();
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: ""
  });
  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1e3));
    alert(t("contact.form.submitSuccess", "Thank you for your message! We'll be in touch within 24hrs."));
  };
  return /* @__PURE__ */ jsx("div", { className: "bg-gray-50 py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-2", children: t("contact.form.title", "What's in your mind? Let's talk!") }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: t("contact.form.subtitle", "Fill out this form to get the process started. We'll be in touch within 24hrs.") })
    ] }),
    /* @__PURE__ */ jsxs("form", { className: "bg-white rounded-lg shadow-lg p-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "contact-b-name", className: "sr-only", children: t("contact.form.name", "Name") }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "contact-b-name",
              type: "text",
              placeholder: t("contact.form.name", "Name*"),
              value: values.name || "",
              onChange: (e) => handleChange("name", e.target.value),
              className: `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ishine-blue-500 focus:border-ishine-blue-500 ${errors.name ? "border-red-500" : "border-gray-300"}`,
              required: true
            }
          ),
          errors.name && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: t(`contact.form.errors.name`, errors.name) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "contact-b-email", className: "sr-only", children: t("contact.form.email", "Email Address") }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "contact-b-email",
              type: "email",
              placeholder: t("contact.form.email", "Email Address*"),
              value: values.email || "",
              onChange: (e) => handleChange("email", e.target.value),
              className: `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ishine-blue-500 focus:border-ishine-blue-500 ${errors.email ? "border-red-500" : "border-gray-300"}`,
              required: true
            }
          ),
          errors.email && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: t(`contact.form.errors.email`, errors.email) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "contact-b-phone", className: "sr-only", children: t("contact.form.phone", "Phone number") }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "contact-b-phone",
              type: "tel",
              placeholder: t("contact.form.phone", "Phone number* e.g.(+1-541-3456-3001)"),
              value: values.phone || "",
              onChange: (e) => handleChange("phone", e.target.value),
              className: `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ishine-blue-500 focus:border-ishine-blue-500 ${errors.phone ? "border-red-500" : "border-gray-300"}`,
              required: true
            }
          ),
          errors.phone && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: t(`contact.form.errors.phone`, errors.phone) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "contact-b-country", className: "sr-only", children: t("contact.form.country", "Country") }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "contact-b-country",
              type: "text",
              placeholder: t("contact.form.country", "Country"),
              value: values.country || "",
              onChange: (e) => handleChange("country", e.target.value),
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ishine-blue-500 focus:border-ishine-blue-500"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "contact-b-message", className: "sr-only", children: t("contact.form.message", "Message") }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            id: "contact-b-message",
            placeholder: t("contact.form.message", "Describe your needs here*"),
            value: values.message || "",
            onChange: (e) => handleChange("message", e.target.value),
            rows: 5,
            className: `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ishine-blue-500 focus:border-ishine-blue-500 ${errors.message ? "border-red-500" : "border-gray-300"}`,
            required: true
          }
        ),
        errors.message && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: t(`contact.form.errors.message`, errors.message) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          variant: "form",
          onClick: () => handleSubmit(onSubmit),
          disabled: isSubmitting,
          className: "w-full",
          children: isSubmitting ? t("contact.form.sending", "Sending...") : t("contact.form.submit", "Submit")
        }
      ) })
    ] })
  ] }) });
};
const Contact = () => {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-20", children: [
    /* @__PURE__ */ jsx(
      SEOTags,
      {
        title: t("contact.seo.title", "Contact iShine - IPL Device Manufacturing Inquiries"),
        description: t("contact.seo.description", "Contact iShine Manufacturing for IPL device OEM/ODM inquiries, custom manufacturing solutions, and business partnerships. Get expert consultation today."),
        keywords: t("contact.seo.keywords", "contact iShine, IPL manufacturing inquiry, OEM ODM consultation, custom IPL devices, beauty device manufacturing")
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
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: t("contact.title", "Contact Us") }),
          /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-gray-100 max-w-3xl mx-auto", children: t("contact.subtitle", "Get in touch with our team for business inquiries, support, or partnership opportunities.") })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxs("section", { className: "relative h-[23vh] min-h-[500px] w-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://i.postimg.cc/63r0rmF6/company-photo.webp",
            alt: t("contact.companyPhotoAlt", "iShine Manufacturing Facility"),
            className: "w-full h-full object-cover object-center"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/20" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative h-full flex items-center justify-center", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.4, duration: 0.8 },
          className: "text-center text-white px-4"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(ContactFormB, {})
  ] });
};
export {
  Contact as default
};
