import React from 'react';
import { FileCheck2 } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const fdaSteps = [
  {
    title: 'Custom IPL Device Development',
    desc: 'Design and manufacture your own IPL hair removal device with full OEM/ODM support, including appearance patent protection and technical documentation.',
  },
  {
    title: 'FDA Device Listing',
    desc: 'We assist you in listing your IPL device with the FDA, ensuring your product is registered for legal distribution in the U.S. market.[2]',
  },
  {
    title: '510(k) Submission Support',
    desc: 'Guidance through the FDA 510(k) clearance process: predicate device research, testing, documentation, and regulatory communication—so you can obtain your unique K number efficiently.[3][4]',
  },
  {
    title: 'Compliance & Documentation',
    desc: 'All devices are engineered to meet FDA, IEC 60601, IEC 62471, and ISO 10993 standards, with full support for labeling, risk management, and post-market surveillance.[3][4]',
  },
];

const FDAGMPDesign: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgb(30,157,139)] to-[rgb(36,151,144)] text-white py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <FileCheck2 className="w-16 h-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">FDA Listing & 510(k) Support</h1>
          <p className="text-xl mb-8 text-gray-100">
            iShine empowers brands to create custom IPL devices, secure appearance patents, and achieve FDA listing and 510(k) clearance—enabling confident, compliant entry into the U.S. market.
          </p>
        </div>
      </section>

      {/* FDA Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          {fdaSteps.map((step) => (
            <div
              key={step.title}
              className="bg-[#f9f9f9] rounded-2xl shadow-sm p-8 flex flex-col items-start hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2 text-[rgb(0,116,224)]">{step.title}</h3>
              <p className="text-gray-800">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[rgb(236,67,113)] to-[rgb(125,0,99)] py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
            Ready to Launch Your Own FDA-Listed IPL Device?
          </h2>
          <p className="text-lg text-white mb-8">
            Our technical team will guide you through every regulatory step—from concept to FDA clearance and beyond.
          </p>
          <button
            className="bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Get Expert Support
          </button>
        </div>
      </section>

      {/* Footer Contact Form */}
      <div className="bg-[#f9f9f9] py-16">
        <ContactFormA />
      </div>
    </div>
  );
};

export default FDAGMPDesign;
