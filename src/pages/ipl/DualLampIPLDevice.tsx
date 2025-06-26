import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Zap, Award, Target } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const DualLampIPLDevice: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-r from-ishine-purple-500 to-ishine-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Lightbulb className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Dual-Lamp IPL Device</h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Double the power, double the efficiency. Revolutionary dual-lamp technology 
              for faster treatments and superior results.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lightbulb, title: 'Dual Lamps', description: 'Enhanced power and coverage' },
              { icon: Zap, title: 'Faster Treatment', description: 'Reduced session time' },
              { icon: Award, title: 'Professional Power', description: 'Salon-grade performance' },
              { icon: Target, title: 'Even Coverage', description: 'Uniform light distribution' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <feature.icon className="w-12 h-12 text-ishine-purple-500 mx-auto mb-4" />
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

export default DualLampIPLDevice;