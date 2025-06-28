import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const corePrinciples = [
  {
    title: 'Integrity & Transparency',
    desc: 'We believe in honest communication, transparent processes, and ethical business practices. Every partnership starts with trust and openness.',
    icon: <Award className="w-8 h-8 text-[rgb(0,116,224)] mb-3" />,
  },
  {
    title: 'Technical Excellence',
    desc: 'Our commitment to R&D and engineering ensures every IPL device meets the highest standards for performance, safety, and reliability.',
    icon: <Award className="w-8 h-8 text-[rgb(0,116,224)] mb-3" />,
  },
  {
    title: 'Customer-Centricity',
    desc: 'We listen, adapt, and co-create solutions with our partners—delivering tailored support from concept to market.',
    icon: <Award className="w-8 h-8 text-[rgb(0,116,224)] mb-3" />,
  },
  {
    title: 'Sustainability',
    desc: 'We design with the future in mind—optimizing for energy efficiency, responsible materials, and sustainable manufacturing.',
    icon: <Award className="w-8 h-8 text-[rgb(0,116,224)] mb-3" />,
  },
  {
    title: 'Continuous Improvement',
    desc: 'We never settle. Every project is an opportunity to learn, innovate, and set new benchmarks for the industry.',
    icon: <Award className="w-8 h-8 text-[rgb(0,116,224)] mb-3" />,
  },
];

const CorePrinciples: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgb(30,157,139)] to-[rgb(36,151,144)] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Award className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Core Principles</h1>
            <p className="text-xl mb-8 text-gray-100">
              At iShine, our core principles guide every decision, partnership, and innovation. We are committed to building trust, delivering technical excellence, and creating sustainable value for our global partners.
            </p>
            <button
              className="bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold px-8 py-3 rounded-full transition"
            >
              Start a Conversation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Core Principles List */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          {corePrinciples.map((item, idx) => (
            <div
              key={item.title}
              className="bg-[#f9f9f9] rounded-2xl shadow-sm p-8 flex flex-col items-center text-center hover:shadow-md transition"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[rgb(236,67,113)] to-[rgb(125,0,99)] py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
            Start with a Conversation
          </h2>
          <p className="text-lg text-white mb-8">
            Let’s connect to explore how iShine’s core principles can help elevate your IPL business. We offer practical resources and honest guidance to ensure you find the best solution for your needs.
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
