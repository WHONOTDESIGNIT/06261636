import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { u as useLanguage } from "../main.ssg.mjs";
import "vite-ssg";
import "react-router-dom";
import "react-helmet-async";
import "lucide-react";
const countryRates = [
  { country: "United States", code: "US", rate: 8 },
  // 单位：每件8美元
  { country: "United Kingdom", code: "UK", rate: 10 },
  { country: "Germany", code: "DE", rate: 9 },
  { country: "Australia", code: "AU", rate: 12 },
  { country: "Japan", code: "JP", rate: 7 },
  { country: "China", code: "CN", rate: 5 }
  // ... 可补充更多国家
];
function ShippingCostPage() {
  const { t } = useLanguage();
  const [country, setCountry] = useState("US");
  const [quantity, setQuantity] = useState(1);
  const [result, setResult] = useState(null);
  const handleSubmit = (e) => {
    var _a, _b;
    e.preventDefault();
    const rate = ((_a = countryRates.find((c) => c.code === country)) == null ? void 0 : _a.rate) || 0;
    const total = rate * quantity;
    const countryName = t(`shippingCost.countries.${country}`, ((_b = countryRates.find((c) => c.code === country)) == null ? void 0 : _b.country) || "");
    setResult(t("shippingCost.result", `Estimated shipping cost to ${countryName}: $${total} USD (${quantity} unit${quantity > 1 ? "s" : ""})`));
  };
  return /* @__PURE__ */ jsxs("div", { className: "max-w-xl mx-auto py-16 px-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-6 text-blue-700 text-center", children: t("shippingCost.title", "Shipping Cost Calculator") }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "bg-white rounded-xl shadow p-6 flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx("label", { className: "font-semibold", children: t("shippingCost.destinationCountry", "Destination Country") }),
      /* @__PURE__ */ jsx(
        "select",
        {
          className: "border border-gray-300 rounded px-3 py-2",
          value: country,
          onChange: (e) => setCountry(e.target.value),
          children: countryRates.map((c) => /* @__PURE__ */ jsx("option", { value: c.code, children: t(`shippingCost.countries.${c.code}`, c.country) }, c.code))
        }
      ),
      /* @__PURE__ */ jsx("label", { className: "font-semibold", children: t("shippingCost.productQuantity", "Product Quantity") }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          min: 1,
          className: "border border-gray-300 rounded px-3 py-2",
          value: quantity,
          onChange: (e) => setQuantity(Number(e.target.value))
        }
      ),
      /* @__PURE__ */ jsx("button", { type: "submit", className: "bg-blue-700 text-white font-bold py-2 rounded hover:bg-blue-800 transition", children: t("shippingCost.calculate", "Calculate") })
    ] }),
    result && /* @__PURE__ */ jsx("div", { className: "mt-6 p-4 bg-blue-50 rounded text-blue-700 font-semibold text-center border border-blue-200", children: result })
  ] });
}
export {
  ShippingCostPage as default
};
