import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const principles = [
  {
    title: 'Customer Obsession',
    desc: 'We anticipate, invent, and improve on behalf of our customers—delivering more than expected, every time.',
    detail: 'We don’t just serve customers; we obsess over them. We proactively solve problems and design experiences that inspire “Wow.”',
  },
  {
    title: 'Integrity',
    desc: 'We act with honesty, transparency, and responsibility in every partnership.',
    detail: 'Integrity is our foundation. We keep every promise, value long-term trust over short-term gain, and let our results speak for themselves.',
  },
  {
    title: 'Long-term Thinking',
    desc: 'We build for the future—investing in sustainable growth, continuous improvement, and enduring customer value.',
    detail: 'We stand behind our products, never skirt problems, and focus on metrics that matter: customer success and lasting impact.',
  },
];

const CorePrinciples: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgb(30,157,139)] to-[rgb(36,151,144)] text-white py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Award className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Core Principles</h1>
          </motion.div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          {principles.map((item) => (
            <div
              key={item.title}
              className="bg-[#f9f9f9] rounded-2xl shadow-sm p-8 flex flex-col items-center text-center hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-[rgb(0,116,224)] font-medium mb-2">{item.desc}</p>
              <p className="text-gray-700 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[rgb(236,67,113)] to-[rgb(125,0,99)] py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
            Let’s Build the Future Together
          </h2>
          <p className="text-lg text-white mb-8">
            Connect with iShine to experience a partnership built on customer obsession, integrity, and long-term thinking.
          </p>
          <button
            className="bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Get in Touch
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

export default CorePrinciples;
