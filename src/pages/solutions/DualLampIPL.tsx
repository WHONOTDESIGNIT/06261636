import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Zap, Shield, Star } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const DualLampIPL: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ishine-orange-500 to-ishine-purple-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Lightbulb className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Dual-lamp IPL Custom</h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Revolutionary dual-lamp IPL technology for superior performance and reliability. 
              Double the power, enhanced efficiency, and extended device lifespan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dual-lamp Technology</h2>
            <p className="text-lg text-gray-600">
              Advanced dual-lamp system for enhanced performance and reliability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: 'Double Power',
                description: 'Enhanced energy output for faster, more effective treatments',
                features: ['Higher energy density', 'Faster treatment', 'Better results', 'Reduced sessions']
              },
              {
                icon: Shield,
                title: 'Reliability',
                description: 'Redundant lamp system ensures continuous operation',
                features: ['Backup system', 'Extended lifespan', 'Consistent performance', 'Reduced downtime']
              },
              {
                icon: Star,
                title: 'Efficiency',
                description: 'Optimized light distribution for uniform treatment',
                features: ['Even coverage', 'Uniform intensity', 'Precise targeting', 'Optimal wavelengths']
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                description: 'Cutting-edge technology for superior user experience',
                features: ['Smart control', 'Auto optimization', 'Safety features', 'User-friendly design']
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <benefit.icon className="w-12 h-12 text-ishine-orange-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-ishine-orange-500 rounded-full mr-2"></div>
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

export default DualLampIPL;