import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Users,
  Wrench,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const hurdles = [
  'High entry barriers and costs for IPL manufacturing—especially for SMEs.',
  'Limited access to advanced features like ice cooling, skin sensors, and smart connectivity.',
  'Rigid, high-cost manufacturing in the West or inconsistent quality/support in Asia.',
  'Few partners offering true OEM/ODM flexibility, regulatory guidance, and mentorship.'
];

const differentiators = [
  {
    title: 'High-Performance, Customizable Devices',
    desc: 'Engineer reliable IPL devices designed for rapid changeovers and multi-purpose use.'
  },
  {
    title: 'Turn-Key Project Expertise',
    desc: 'One-on-one consultation covering cost analysis, GMP cleanroom design, and regulatory docs.'
  },
  {
    title: 'End-to-End Supply Chain Optimization',
    desc: 'Optimize cost structures, streamline sourcing, and connect with trusted suppliers.'
  }
];

const BrandStory: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 overflow-x-hidden">
      {/* ---------------- HERO ---------------- */}
      <section className="bg-gradient-to-r from-ishine-orange-500 to-ishine-pink-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <BookOpen className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">From Challenge to Change: The iShine Journey</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-100 mb-10">
              The IPL industry struggled with high costs, limited customization, and technical hurdles. iShine was founded to break this mold—empowering businesses worldwide with next-generation IPL technology and a seamless path from idea to market.
            </p>
            <a
              href="/solutions"
              className="inline-block bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300"
            >
              Discover Our Solutions
            </a>
          </motion.div>
        </div>
      </section>

      {/* -------------- PROBLEM SECTION -------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-ishine-orange-600 mb-6">
           The Problem We Set Out to Solve
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            {hurdles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <blockquote className="mt-6 text-ishine-pink-600 italic border-l-4 border-ishine-pink-500 pl-4">
            "We saw a market where innovation was stifled by price, complexity, and lack of support. That's why iShine was born—to make advanced IPL technology accessible, customizable, and reliable for every ambitious brand."
          </blockquote>
        </div>
      </section>

      {/* -------------- LISTENING SECTION -------------- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-ishine-orange-600 mb-6">
            <Users className="w-6 h-6" /> Listening, Learning, and Building Differently
          </h2>
          <p className="text-gray-700 mb-4">
            From day one, iShine's approach has been hands-on and customer-centric:
          </p>
          <p className="text-gray-700 mb-2">
            • Working alongside brands to solve pain points in design, compliance, and scale-up.<br />
            • Investing in R&D, automation, and supply-chain partnerships to deliver complete solutions.<br />
            • Guiding clients through feasibility, GMP production planning, and component sourcing.
          </p>
        </div>
      </section>

      {/* -------------- DIFFERENTIATORS -------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-ishine-orange-600 mb-12">
            <ShieldCheck className="w-6 h-6" /> What Sets iShine Apart
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

      {/* -------------- EMPOWERING BRANDS -------------- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-ishine-orange-600 mb-6">Empowering Brands: From "Zero to One" & "Good to Excellence"</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Whether launching your first IPL product or scaling a global portfolio, iShine partners for every milestone—taking start-ups from concept to launch and helping established brands leap to world-class status.
          </p>
        </div>
      </section>

      {/* -------------- OUR EVOLUTION -------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-ishine-orange-600 mb-6">
            <Wrench className="w-6 h-6" /> Our Evolution: A Global, Innovation-Driven Team
          </h2>
          <p className="text-gray-700 mb-4">
            We've built a diverse team of engineers, designers, and regulatory experts, invested in state-of-the-art manufacturing, and co-innovated custom IPL solutions with clients worldwide.
          </p>
          <p className="text-gray-700">
            Today, iShine offers ice cooling IPL, multi-function IPL, sapphire window IPL, smart app-connected IPL, dual-lamp IPL, and skin sensor IPL—each reflecting our commitment to collaboration and excellence.
          </p>
        </div>
      </section>

      {/* -------------- PROMISE -------------- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-bold text-ishine-orange-600 mb-6">
            <TrendingUp className="w-6 h-6" /> Our Promise
          </h2>
          <p className="text-gray-700 mb-8">
            No one should be limited by technology, cost, or complexity when building an IPL business. iShine exists to make advanced IPL solutions accessible, customizable, and scalable for every visionary brand.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300"
          >
            Let's Build Your Success Story
          </a>
        </div>
      </section>

      {/* -------------- CONTACT FORM -------------- */}
      <ContactFormA />
    </div>
  );
};

export default BrandStory;