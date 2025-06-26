import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const Compliance: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ishine-blue-500 to-ishine-purple-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Shield className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Compliance & Certifications</h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Comprehensive compliance support and certifications for global market entry. 
              We handle all regulatory requirements so you can focus on your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Global Certifications</h2>
            <p className="text-lg text-gray-600">
              Our devices meet international safety and quality standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'FDA GMP', region: 'United States', icon: '🇺🇸' },
              { name: 'CE Marking', region: 'European Union', icon: '🇪🇺' },
              { name: 'ISO 13485', region: 'International', icon: '🌍' },
              { name: 'FCC', region: 'United States', icon: '🇺🇸' },
              { name: 'RoHS', region: 'European Union', icon: '🇪🇺' },
              { name: 'PSE', region: 'Japan', icon: '🇯🇵' },
              { name: 'KC', region: 'South Korea', icon: '🇰🇷' },
              { name: 'CCC', region: 'China', icon: '🇨🇳' }
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600">{cert.region}</p>
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

export default Compliance;