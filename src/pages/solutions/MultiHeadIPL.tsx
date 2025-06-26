import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Settings, Award, Target } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const MultiHeadIPL: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ishine-purple-500 to-ishine-blue-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Zap className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Multi-head IPL Custom</h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Advanced multi-head IPL technology for enhanced treatment efficiency. 
              Custom configurations to meet your specific application requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Multi-head Advantages</h2>
            <p className="text-lg text-gray-600">
              Superior performance with multiple treatment heads
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Settings,
                title: 'Versatile Treatment',
                description: 'Multiple heads for different body areas and skin types',
                features: ['Face treatment head', 'Body treatment head', 'Precision head', 'Large area head']
              },
              {
                icon: Target,
                title: 'Enhanced Efficiency',
                description: 'Faster treatment times with optimized coverage',
                features: ['Reduced session time', 'Better coverage', 'Consistent results', 'User convenience']
              },
              {
                icon: Award,
                title: 'Professional Grade',
                description: 'Salon-quality performance for home use',
                features: ['High energy output', 'Precise wavelengths', 'Safety features', 'Durability tested']
              },
              {
                icon: Zap,
                title: 'Smart Technology',
                description: 'Intelligent head detection and optimization',
                features: ['Auto head detection', 'Optimized settings', 'Safety protocols', 'User guidance']
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-ishine-purple-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-ishine-purple-500 rounded-full mr-2"></div>
                      {item}
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

export default MultiHeadIPL;