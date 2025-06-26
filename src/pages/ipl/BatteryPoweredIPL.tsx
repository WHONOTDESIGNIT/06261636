import React from 'react';
import { motion } from 'framer-motion';
import { Battery, Zap, MapPin, Clock } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const BatteryPoweredIPL: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-r from-ishine-orange-500 to-ishine-pink-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Battery className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Battery Powered IPL Device</h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Complete freedom with cordless operation. Long-lasting battery power 
              for uninterrupted hair removal treatments anywhere.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Battery, title: 'Long Battery Life', description: 'Extended usage time' },
              { icon: Zap, title: 'Fast Charging', description: 'Quick recharge capability' },
              { icon: MapPin, title: 'Portable Design', description: 'Use anywhere, anytime' },
              { icon: Clock, title: 'Continuous Use', description: 'Uninterrupted treatments' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <feature.icon className="w-12 h-12 text-ishine-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactFormA />
    </div>
  );
};

export default BatteryPoweredIPL;