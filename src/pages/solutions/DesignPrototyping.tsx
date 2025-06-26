import React from 'react';
import { motion } from 'framer-motion';
import { Cog, Lightbulb, Zap, Target } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const DesignPrototyping: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ishine-teal-500 to-ishine-cyan-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Cog className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Design & Prototyping</h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              From concept to reality. Our expert design team transforms your ideas into 
              functional prototypes, ready for testing and market validation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Design Process</h2>
            <p className="text-lg text-gray-600">
              Systematic approach to bring your IPL device concept to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lightbulb,
                title: 'Concept Development',
                description: 'Transform your ideas into detailed specifications',
                features: ['Market research', 'User requirements', 'Technical feasibility', 'Design brief']
              },
              {
                icon: Target,
                title: 'Industrial Design',
                description: 'Create attractive and functional product designs',
                features: ['3D modeling', 'Ergonomic design', 'Material selection', 'Color schemes']
              },
              {
                icon: Cog,
                title: 'Engineering',
                description: 'Technical development and optimization',
                features: ['Circuit design', 'Mechanical engineering', 'Safety compliance', 'Performance testing']
              },
              {
                icon: Zap,
                title: 'Prototyping',
                description: 'Build and test functional prototypes',
                features: ['Rapid prototyping', 'Functional testing', 'User feedback', 'Iteration cycles']
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <step.icon className="w-12 h-12 text-ishine-teal-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-ishine-teal-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactFormA />
    </div>
  );
};

export default DesignPrototyping;