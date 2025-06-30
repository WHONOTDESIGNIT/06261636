import React from 'react';
import { motion } from 'framer-motion';
import {
  Factory,
  Cog,
  Award,
  Upload,
  Settings,
  PackageSearch,
  FileText,
  HelpCircle
} from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

// Manufacturing steps data
const steps = [
  {
    id: 1,
    title: 'Customer Industrial Design (ID) Submission',
    desc: 'After securing your appearance patent, submit your Industrial Design (ID) files to initiate the project. Protects your IP and sets the foundation for all downstream engineering.',
    cta: {
      text: 'Upload Your ID Files',
      href: '/upload-id-files',
      color: 'rgb(222,117,16)',
      hover: 'rgb(198,104,14)'
    },
    icon: Upload
  },
  {
    id: 2,
    title: 'Mechanical Design (MD) & Structural Engineering',
    duration: '4 weeks',
    desc: 'Transform your ID into a manufacturable structure, optimizing for performance, safety, and cost. Deliverables: 3D CAD models, BOM, and DFM analysis. Parallel DHF & DMR documentation.',
    icon: Cog
  },
  {
    id: 3,
    title: 'Prototype & Sample Build (Hand Sample)',
    duration: '2–4 weeks',
    desc: 'Rapid prototyping (CNC, 3D printing, soft tooling) to create a working sample for functional and aesthetic validation before tooling.',
    icon: PackageSearch
  },
  {
    id: 4,
    title: 'Tooling & Mold Fabrication',
    duration: '4–6 weeks',
    desc: 'Precision mold design and fabrication for plastic parts and key components, scheduling mold T0 upon completion.',
    icon: Settings
  },
  {
    id: 5,
    title: 'T0 & T1 Mold Trials',
    duration: '3 weeks',
    desc: 'Evaluate part quality, fit, and function during T0; adjust defects and cosmetics for T1.',
    icon: Cog
  },
  {
    id: 6,
    title: 'Pilot Production (Trial Run)',
    duration: '2–4 weeks',
    desc: 'Assemble limited units, conduct tests, finalize SOPs, and continue DHF/DMR updates.',
    icon: Factory
  },
  {
    id: 7,
    title: 'Regulatory Testing & Documentation',
    duration: '8–10 weeks',
    desc: 'Submit samples for FDA & MDL compliance tests (safety, EMC, photobiological). Prepare and compile all technical documents, labeling, and manuals.',
    icon: Award
  },
  {
    id: 8,
    title: 'Regulatory Submission & Approval',
    duration: '12–16 weeks',
    desc: 'Submit complete technical files for review; monitor progress, respond to queries, and obtain certificates.',
    icon: FileText
  },
  {
    id: 9,
    title: 'Mass Production Launch',
    duration: '4–6 weeks',
    desc: 'Ramp up to full-scale manufacturing after regulatory clearance. Implement production optimizations, QC, and packaging.',
    icon: Factory
  }
];

const timeline = [
  { step: 'ID Submission', duration: 'Customer-driven' },
  { step: 'MD & Structural Design', duration: '4 weeks' },
  { step: 'Prototype', duration: '2–4 weeks' },
  { step: 'Tooling', duration: '4–6 weeks' },
  { step: 'T0 Mold Trial', duration: '1 week' },
  { step: 'T1 Mold Trial', duration: '2 weeks' },
  { step: 'Pilot Production', duration: '2–4 weeks' },
  { step: 'FDA/MDL Testing', duration: '8–10 weeks' },
  { step: 'Documentation', duration: '2–4 weeks' },
  { step: 'FDA/MDL Submission', duration: '12–16 weeks' },
  { step: 'Mass Production', duration: '4–6 weeks' }
];

const faqs = [
  {
    q: 'What is the minimum order quantity for mass production?',
    a: 'Typically 500 units per model per color.'
  },
  {
    q: 'Can you support custom packaging and user manuals?',
    a: 'Yes, all packaging and documentation can be fully customized to your brand and regulatory requirements.'
  },
  {
    q: 'How do you ensure product quality and compliance?',
    a: 'Strict QC at every stage, plus comprehensive DHF/DMR documentation and third-party lab testing.'
  }
];

const IPLManufacturing: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 overflow-x-hidden">
      {/* ---------------------------- HERO ---------------------------- */}
      <section className="bg-gradient-to-r from-ishine-purple-500 to-ishine-pink-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Factory className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">From Idea to Market: The Complete IPL Home Device Manufacturing Journey</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-100">
              Transform your patented IPL device concept into a market-ready product with iShine's end-to-end manufacturing process. Our technical expertise, transparent workflow, and regulatory know-how ensure your device meets the highest standards—on time, every time.
            </p>
            <a
              href="/start-project"
              className="inline-block bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>

      {/* ---------------- STEPS ---------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-ishine-purple-600">Step-by-Step Manufacturing Process</h2>
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 shadow"
              >
                <div className="flex items-start gap-4">
                  <step.icon className="w-10 h-10 text-ishine-purple-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      {step.id}. {step.title}
                    </h3>
                    <p className="text-sm text-gray-700 mb-2">{step.desc}</p>
                    <p className="text-xs text-gray-500 italic mb-2">Duration: {step.duration}</p>
                    {step.cta && (
                      <a
                        href={step.cta.href}
                        className={`inline-block bg-[${step.cta.color}] hover:bg-[${step.cta.hover}] text-white font-semibold py-2 px-6 rounded transition-colors duration-300 text-sm`}
                      >
                        {step.cta.text}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TIMELINE ---------------- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-ishine-purple-600">Timeline Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {timeline.map((item) => (
              <div key={item.step} className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
                <span className="font-medium text-gray-700">{item.step}</span>
                <span className="text-gray-500 text-sm">{item.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WHY CHOOSE ---------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-ishine-purple-600">Why Choose iShine?</h2>
          <p className="max-w-3xl mx-auto text-gray-700 mb-8">
            Full-spectrum expertise: From concept to compliance, we manage every technical and regulatory detail.<br />
            Transparent process: Real-time updates, milestone reviews, and open communication.<br />
            Regulatory confidence: Proven track record with FDA, MDL, and international standards.
          </p>
          <a
            href="/download-process-pdf"
            className="inline-block bg-[rgb(0,102,161)] hover:bg-[rgb(0,86,136)] text-white font-semibold py-3 px-8 rounded-lg shadow transition-colors duration-300"
          >
            Download Full Process PDF
          </a>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-ishine-purple-600">FAQs</h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }, idx) => (
              <motion.div
                key={q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-lg shadow p-6"
              >
                <h3 className="flex items-center gap-2 text-lg font-semibold text-ishine-purple-500 mb-2">
                  <HelpCircle className="w-5 h-5" /> {q}
                </h3>
                <p className="text-gray-700 text-sm">{a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- GET STARTED ---------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-ishine-purple-600">Get Started</h2>
          <p className="text-gray-700 mb-8">Ready to bring your IPL device to life?</p>
          <a
            href="/get-a-quote"
            className="inline-block bg-[rgb(0,102,161)] hover:bg-[rgb(0,86,136)] text-white font-semibold py-3 px-8 rounded-lg shadow transition-colors duration-300"
          >
            Get a Quote!
          </a>
        </div>
      </section>

      {/* ---------------- CONTACT FORM ---------------- */}
      <ContactFormA />
    </div>
  );
};

export default IPLManufacturing;