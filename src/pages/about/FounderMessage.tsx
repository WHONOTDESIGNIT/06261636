import React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Heart,
  Target,
  Star,
  AlertCircle,
  Lightbulb,
  ShieldCheck
} from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const differentiators = [
  {
    title: 'High-Performance, Customizable Devices',
    desc: 'Reliable, flexible, and cost-effective IPL solutions that help brands stand out.'
  },
  {
    title: 'End-to-End Project Expertise',
    desc: 'Technical consultation, GMP factory planning, regulatory navigation, and supply-chain optimization.'
  },
  {
    title: 'Close Collaboration',
    desc: 'Transparent, data-driven guidance and partnership from concept to mass production.'
  }
];

const FounderMessage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 overflow-x-hidden">
      {/* ---------------- HERO ---------------- */}
      <section className="bg-gradient-to-r from-ishine-blue-500 to-ishine-purple-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <User className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">A Vision Born from Industry Challenges</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-100 mb-10">
              Brands once faced high costs, rigid production, and limited customization in IPL manufacturing. iShine was founded to break those barriers—making advanced IPL technology accessible and versatile for every ambitious brand.
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

      {/* ---------------- WHY ISHINE EXISTS ---------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-ishine-blue-600 mb-6">
            <Heart className="w-6 h-6" /> Why iShine Exists
          </h2>
          <p className="text-gray-700 mb-4">
            Many beauty brands wanted to launch IPL devices but were overwhelmed by design complexity, compliance, and supply-chain challenges. Others struggled to scale with inflexible partners and limited support. iShine was created to guide, educate, and empower at every step.
          </p>
        </div>
      </section>

      {/* ---------------- OUR APPROACH ---------------- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-ishine-blue-600 mb-6">
            <Target className="w-6 h-6" /> Our Approach: Listening, Innovating, Delivering
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Work hand-in-hand with clients—from concept to mass production.</li>
            <li>Invest in R&D for custom ice cooling, multi-function, sapphire, smart app, dual-lamp, and skin-sensor IPL technologies.</li>
            <li>Offer turn-key project management: GMP factory design, regulatory docs, and vetted component suppliers.</li>
            <li>Provide transparent, data-driven guidance on cost, feasibility, and scaling.</li>
          </ul>
        </div>
      </section>

      {/* ---------------- DIFFERENTIATORS ---------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-ishine-blue-600 mb-12">
            <ShieldCheck className="w-6 h-6" /> What Makes iShine Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {differentiators.map(({ title, desc }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-lg shadow p-6"
              >
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-700 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- EMPOWERING BRANDS ---------------- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-ishine-blue-600 mb-6">Empowering Brands, Enabling Growth</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            From startups moving "Zero to One" to global brands striving for excellence, iShine supports every evolution. Our solutions are trusted across Europe, North America, and Asia.
          </p>
        </div>
      </section>

      {/* ---------------- LOOKING FORWARD ---------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-bold text-ishine-blue-600 mb-6">
            <Lightbulb className="w-6 h-6" /> Looking Forward
          </h2>
          <p className="text-gray-700 mb-8">
            We build our foundation daily through technical rigor, customer focus, and relentless improvement. Let's turn challenges into opportunities and ambitions into reality—together.
          </p>
          <a
            href="/start-project"
            className="inline-block bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300"
          >
            Start Your Project
          </a>
        </div>
      </section>

      {/* ---------------- CONTACT FORM ---------------- */}
      <ContactFormA />
    </div>
  );
};

export default FounderMessage;