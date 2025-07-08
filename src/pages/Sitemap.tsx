import React from "react";
import { Link } from "react-router-dom";

const pages = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/solutions", label: "Solutions" },
  { path: "/ipl-hair-removal", label: "IPL Hair Removal" },
  { path: "/how-to-use", label: "How To Use" },
  { path: "/contact", label: "Contact" },
  { path: "/service-support/after-sales", label: "After-Sales Service" },
  { path: "/service-support/manufacturing", label: "IPL Manufacturing" },
  { path: "/service-support/pricing-guide", label: "Pricing Guide" },
  { path: "/service-support/help-center", label: "Help Center" },
  { path: "/service-support/gallery", label: "Gallery" },
  { path: "/solutions/logo-printing", label: "Logo Printing" },
  { path: "/solutions/packaging", label: "Packaging Solutions" },
  { path: "/solutions/drop-shipping", label: "Drop Shipping" },
  { path: "/solutions/global-shipping", label: "Global Shipping" },
  { path: "/solutions/brand-customization", label: "Brand Customization" },
  { path: "/solutions/compliance", label: "Compliance" },
  { path: "/solutions/design-prototyping", label: "Design & Prototyping" },
  { path: "/solutions/multi-head-ipl", label: "Multi-Head IPL" },
  { path: "/solutions/dual-lamp-ipl", label: "Dual-Lamp IPL" },
  { path: "/ipl-hair-removal/smart-app", label: "Smart App IPL" },
  { path: "/ipl-hair-removal/ice-feeling", label: "Ice Feeling IPL" },
  { path: "/ipl-hair-removal/emerald", label: "Emerald IPL" },
  { path: "/ipl-hair-removal/skin-sensor", label: "Skin Sensor IPL" },
  { path: "/ipl-hair-removal/battery-powered", label: "Battery Powered IPL" },
  { path: "/ipl-hair-removal/handheld", label: "Handheld IPL" },
  { path: "/ipl-hair-removal/ice-cooling", label: "Ice Cooling IPL" },
  { path: "/ipl-hair-removal/dual-lamp", label: "Dual Lamp IPL Device" },
  { path: "/ipl-hair-removal/ai-powered", label: "AI Powered IPL" },
  { path: "/accessories/sapphire-lens", label: "Sapphire Lens" },
  { path: "/accessories/adapter", label: "Adapter" },
  { path: "/accessories/goggles", label: "Protective Goggles" },
  { path: "/accessories/filter", label: "Filter" },
  { path: "/about/founder-message", label: "Founder Message" },
  { path: "/about/technology", label: "Technology" },
  { path: "/about/global-witness", label: "Global Witness" },
  { path: "/about/core-principles", label: "Core Principles" },
  { path: "/about/company", label: "Company Info" },
  { path: "/about/brand-story", label: "Brand Story" },
  { path: "/about/quality", label: "Quality" },
  { path: "/blog/news-insights", label: "News & Insights" },
  { path: "/blog/industries", label: "Industries" },
  { path: "/blog/ipl-best-choice", label: "IPL Best Choice" },
  { path: "/blog/future-home-hair-removal-devices", label: "Future Home Hair Removal" },
  { path: "/blog/fda-510k-pathway", label: "FDA 510k Pathway" },
  { path: "/shipping-cost", label: "Shipping Cost Calculator" },
];

const Sitemap: React.FC = () => (
  <div className="max-w-3xl mx-auto py-16 px-4">
    <h1 className="text-3xl font-bold mb-8 text-blue-700">Sitemap</h1>
    <ul className="space-y-2">
      {pages.map((page) => (
        <li key={page.path}>
          <Link to={page.path} className="text-blue-700 hover:underline text-lg">
            {page.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Sitemap; 