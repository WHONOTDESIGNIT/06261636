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
          </motion.div>
        </div>
      </section>

      {/* ---------------- BLOG CONTENT ---------------- */}
      <section className="py-20 bg-white">
        <div className="prose prose-indigo max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2>Why iShine Exists</h2>
          <p>
            Many beauty brands dreamed of launching their own IPL devices yet felt overwhelmed by the maze
            of design complexity, regulatory hurdles, and supply-chain logistics. Others struggled to scale
            production, constrained by inflexible partners and minimal technical guidance. I founded iShine to
            change that—to guide, educate, and empower at every step.
          </p>

          <h2>Our Approach: Listening, Innovating, Delivering</h2>
          <ul>
            <li>Working hand-in-hand with clients—from initial concept to mass production.</li>
            <li>
              Investing in R&amp;D to create custom technologies: ice cooling, multi-function, sapphire window,
              smart app-connected, dual-lamp, and skin-sensor IPL devices.
            </li>
            <li>
              Offering turn-key project management that covers GMP-compliant factory planning, regulatory
              documentation, and direct access to quality component suppliers.
            </li>
            <li>Providing transparent, data-driven guidance on cost, feasibility, and scaling.</li>
          </ul>

          <h2>What Makes iShine Different</h2>
          {differentiators.map(({ title, desc }) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}

          <h2>Empowering Brands, Enabling Growth</h2>
          <p>
            Whether you're a start-up making the leap from "Zero to One" or an established brand aiming for
            world-class excellence, iShine stands ready. Our solutions are trusted across Europe, North America,
            and Asia—a testament to our commitment to quality, partnership, and innovation.
          </p>

          <h2>Looking Forward</h2>
          <p>
            A vision is only as strong as the foundation beneath it. At iShine we build that foundation every
            day through technical rigor, customer focus, and relentless improvement. Let's transform
            challenges into opportunities and ambitions into reality—together.
          </p>
        </div>
      </section>

      {/* ---------------- CONTACT FORM ---------------- */}
      <ContactFormA />
    </div>
  );
};

export default FounderMessage;