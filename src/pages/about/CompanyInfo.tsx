import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Breadcrumbs from '../../components/SEO/Breadcrumbs';

const CompanyInfo: React.FC = () => {
  const { currentLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[rgb(0,116,224)] to-[rgb(0,89,179)] min-h-[70vh] flex items-center justify-center text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Leading IPL Device
                <span
                  className="block text-[rgb(255,255,255,0.9)] ml-[5px] lg:ml-[20px]"
                  style={{ marginLeft: 20 }}
                >
                  Manufacturer
                </span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-[rgb(255,255,255,0.9)] leading-relaxed">
                Precision engineering, global compliance, and innovative beauty technology
                for B2B partners worldwide
              </p>
            </div>
            {/* Hero Visual */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <img
                  src="/images/company/hero-manufacturing.jpg"
                  alt="iShine IPL Manufacturing"
                  className="w-full rounded-xl shadow-lg"
                />
                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-white text-[rgb(0,116,224)] rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white text-[rgb(0,116,224)] rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-5xl py-16">
        <Breadcrumbs />

        {/* Company Overview */}
        <section className="mb-12" id="manufacturing">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About iShine IPL Manufacturer</h2>
          <p className="text-lg text-gray-700 mb-6">
            iShine is a leading manufacturer specializing in the design, engineering, and assembly of IPL (Intense Pulsed Light) hair removal devices for global B2B clients. We combine in-house component manufacturing, rigorous quality control, and advanced assembly processes to deliver reliable, innovative beauty technology at scale.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-3 text-base text-gray-700">
              <li>
                <span className="font-bold text-[rgb(0,116,224)]">•</span> In-house IPL device component manufacturing
              </li>
              <li>
                <span className="font-bold text-[rgb(0,116,224)]">•</span> Strict quality inspection on all incoming materials
              </li>
              <li>
                <span className="font-bold text-[rgb(0,116,224)]">•</span> Precision frame welding and medical-grade coatings
              </li>
              <li>
                <span className="font-bold text-[rgb(0,116,224)]">•</span> Modular assembly lines for scalable production
              </li>
              <li>
                <span className="font-bold text-[rgb(0,116,224)]">•</span> Repeated test runs and internal inspections before shipment
              </li>
              <li>
                <span className="font-bold text-[rgb(0,116,224)]">•</span> Use of SUS 304L/316L stainless steel for key components (GMP & CE compliant)
              </li>
              <li>
                <span className="font-bold text-[rgb(0,116,224)]">•</span> Sourcing from first-class suppliers for global support
              </li>
            </ul>
            <div>
              <img
                src="/images/company/ipl-factory-overview.jpg"
                alt="iShine IPL Factory"
                className="rounded-xl shadow-md w-full"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Partner With iShine?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-3 text-base text-gray-700">
              <li>
                <span className="font-bold text-[rgb(0,116,224)]">✓</span> Decades of experience in IPL and beauty device manufacturing
              </li>
              <li>
                <span className="font-bold text-[rgb(0,116,224)]">✓</span> Full compliance with GMP, CE, and FDA standards
              </li>
              <li>
                <span className="font-bold text-[rgb(0,116,224)]">✓</span> End-to-end OEM/ODM solutions: from design to after-sales
              </li>
              <li>
                <span className="font-bold text-[rgb(0,116,224)]">✓</span> International logistics and support for global distributors
              </li>
              <li>
                <span className="font-bold text-[rgb(0,116,224)]">✓</span> Transparent process, timely delivery, and scalable capacity
              </li>
            </ul>
            <div className="bg-[#f9f9f9] rounded-xl p-6 shadow">
              <h3 className="text-lg font-semibold mb-2 text-[rgb(0,116,224)]">Our Mission</h3>
              <p className="text-gray-700">
                Empower B2B partners with high-performance, safe, and innovative IPL solutions that drive business growth and end-user satisfaction.
              </p>
            </div>
          </div>
        </section>

        {/* Manufacturing Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Manufacturing Excellence</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-100 rounded-xl p-6">
              <h4 className="font-semibold text-[rgb(0,116,224)] mb-2">Component Production</h4>
              <p className="text-gray-700">All IPL device core components are produced in-house for full process control and traceability.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-6">
              <h4 className="font-semibold text-[rgb(0,116,224)] mb-2">Quality Assurance</h4>
              <p className="text-gray-700">Every batch undergoes multi-stage inspection, including material verification, precision measurement, and functional testing.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-6">
              <h4 className="font-semibold text-[rgb(0,116,224)] mb-2">Assembly & Testing</h4>
              <p className="text-gray-700">Automated and manual assembly lines ensure consistency. Each device is tested repeatedly until it meets our certificate of quality.</p>
            </div>
          </div>
        </section>

        {/* Certifications & Compliance */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Certifications & Compliance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-3 text-base text-gray-700">
              <li>
                <span className="font-bold text-[rgb(0,116,224)]">•</span> GMP-compliant workshop and process
              </li>
              <li>
                <span className="font-bold text-[rgb(0,116,224)]">•</span> CE-certified device safety and design
              </li>
              <li>
                <span className="font-bold text-[rgb(0,116,224)]">•</span> FDA registration for key models
              </li>
              <li>
                <span className="font-bold text-[rgb(0,116,224)]">•</span> Full traceability for every device shipped
              </li>
            </ul>
            <div>
              <img
                src="/images/company/certifications.jpg"
                alt="Certifications"
                className="rounded-xl shadow-md w-full"
              />
            </div>
          </div>
        </section>

        {/* Global B2B Service */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Global Service & Support</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-3">
                iShine supports B2B partners worldwide—distributors, OEM/ODM clients, and brand owners—with:
              </p>
              <ul className="space-y-2 text-base text-gray-700">
                <li>
                  <span className="font-bold text-[rgb(0,116,224)]">•</span> Flexible customization: logo, housing, packaging, software
                </li>
                <li>
                  <span className="font-bold text-[rgb(0,116,224)]">•</span> Fast lead times and robust export logistics
                </li>
                <li>
                  <span className="font-bold text-[rgb(0,116,224)]">•</span> Dedicated technical and marketing support
                </li>
                <li>
                  <span className="font-bold text-[rgb(0,116,224)]">•</span> Long-term partnership focus for mutual growth
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/images/company/global-service.jpg"
                alt="Global Service"
                className="rounded-xl shadow-md w-full"
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-[rgb(0,116,224)] to-[rgb(0,89,179)] rounded-2xl p-8 text-white mb-16 text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to Grow Your IPL Business?</h2>
          <p className="mb-6 text-lg">
            Partner with iShine for quality, compliance, and innovation in every device. Contact our team for a factory tour, sample order, or technical consultation.
          </p>
          <a
            href={`/${currentLanguage}/contact`}
            className="inline-block bg-white text-[rgb(0,116,224)] font-semibold px-8 py-3 rounded-full transition hover:opacity-90"
          >
            Contact Us
          </a>
        </section>
      </div>
    </div>
  );
};

export default CompanyInfo;
