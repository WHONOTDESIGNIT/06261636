import React from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Snowflake,
  Layers,
  Gem,
  Zap,
  ShieldCheck,
  Smartphone,
  Lightbulb,
  TrendingUp,
  Globe
} from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

// Timeline data
const timeline = [
  {
    year: '2015',
    title: 'First-Gen IPL Devices',
    desc: 'Safe, reliable IPL for home use set the foundation for global OEM partnerships.'
  },
  {
    year: '2018',
    title: 'Ice Cooling IPL',
    desc: 'Integrated cooling modules (~10°C) for pain-free sessions and sensitive-skin suitability.'
  },
  {
    year: '2019',
    title: 'Multi-Function IPL',
    desc: 'Modular attachments enable hair removal and skin rejuvenation on one platform.'
  },
  {
    year: '2020',
    title: 'Sapphire IPL',
    desc: 'Sapphire Contact Cooling ensures real-time temperature control and higher energy delivery.'
  },
  {
    year: '2021',
    title: 'Dual-Lamp IPL',
    desc: 'Dual-lamp architecture boosts flash counts, lifespan, and body-area coverage.'
  },
  {
    year: '2022',
    title: 'Skin Sensor IPL',
    desc: 'On-board sensors auto-adjust energy for broader skin-tone compatibility and safety.'
  },
  {
    year: '2023',
    title: 'Smart App-Connected IPL',
    desc: 'Bluetooth/Wi-Fi devices with app for guidance, analytics, and remote diagnostics.'
  }
];

// Capability cards
const capabilities = [
  { icon: Snowflake, title: 'Ice Cooling IPL', desc: 'Proprietary cooling for pain-free treatment.' },
  { icon: Layers, title: 'Multi-Function IPL', desc: 'Modular heads for hair removal & skincare.' },
  { icon: Gem, title: 'Sapphire IPL', desc: 'Sapphire window for advanced cooling & safety.' },
  { icon: Zap, title: 'Dual-Lamp IPL', desc: 'Extended lifespan & efficiency with dual lamps.' },
  { icon: ShieldCheck, title: 'Skin Sensor IPL', desc: 'Real-time tone detection & adaptive energy.' },
  { icon: Smartphone, title: 'Smart App IPL', desc: 'App integration for data-driven treatments.' }
];

const Technology: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 overflow-x-hidden">
      {/* ---------------- HERO ---------------- */}
      <section className="bg-gradient-to-r from-ishine-teal-500 to-ishine-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Cpu className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Pioneering IPL Innovation: Our Technology Milestones</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-100 mb-10">
              iShine has spent a decade pushing the boundaries of IPL home hair removal with relentless R&D and custom engineering. Discover how we deliver safer, smarter, more comfortable devices for global partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* -------------- TIMELINE -------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-ishine-teal-600">Our IPL Technology Evolution Timeline</h2>
          <div className="relative border-l-2 border-ishine-teal-500 pl-6 space-y-12">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative ml-2.5"
              >
                <span className="absolute -left-3 top-2 w-4 h-4 rounded-full bg-ishine-teal-500" />
                <h3 className="text-xl font-semibold text-ishine-blue-600">{item.year}: {item.title}</h3>
                <p className="text-gray-700 text-sm mt-1 max-w-3xl">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------- CAPABILITIES -------------- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-ishine-teal-600">Custom IPL Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {capabilities.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow p-6 text-center"
              >
                <Icon className="w-10 h-10 text-ishine-teal-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-700 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/request-custom-solution"
              className="inline-block bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300"
            >
              Request Custom Solution
            </a>
          </div>
        </div>
      </section>

      {/* -------------- DATA-DRIVEN R&D -------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-ishine-teal-600">Data-Driven R&D: Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="flex gap-3">
              <TrendingUp className="w-6 h-6 text-ishine-teal-500 mt-1" />
              <p className="text-gray-700 text-sm"><strong>Continuous Innovation:</strong> Annual R&D investment targeting user comfort, safety, and clinical efficacy.</p>
            </div>
            <div className="flex gap-3">
              <Globe className="w-6 h-6 text-ishine-teal-500 mt-1" />
              <p className="text-gray-700 text-sm"><strong>Global Compliance:</strong> All devices undergo rigorous FDA, CE, and international standard testing.</p>
            </div>
            <div className="flex gap-3">
              <Lightbulb className="w-6 h-6 text-ishine-teal-500 mt-1" />
              <p className="text-gray-700 text-sm"><strong>User-Centric Design:</strong> Every generation is shaped by user feedback, clinical data, and market trends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------- FUTURE READY -------------- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-ishine-teal-600">Looking Ahead: Future-Ready IPL</h2>
          <p className="text-gray-700 max-w-4xl mx-auto mb-8">
            <strong>AI-Powered IPL:</strong> Next-gen devices will feature AI-driven personalization and predictive maintenance.<br />
            <strong>Sustainability:</strong> We are developing eco-friendly materials, energy-efficient designs, and recyclable packaging.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300"
          >
            Have a Vision? Let's Build It Together
          </a>
        </div>
      </section>

      {/* -------------- CONTACT FORM -------------- */}
      <ContactFormA />
    </div>
  );
};

export default Technology;