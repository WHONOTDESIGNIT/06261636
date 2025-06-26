import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Calculator, TrendingUp, FileText } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const PricingGuide: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-r from-green-500 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <DollarSign className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Pricing Guide</h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Transparent pricing information and cost breakdowns for all our 
              IPL manufacturing and customization services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: DollarSign, title: 'Transparent Pricing', description: 'Clear cost structure' },
              { icon: Calculator, title: 'Cost Calculator', description: 'Estimate your project' },
              { icon: TrendingUp, title: 'Volume Discounts', description: 'Better rates for bulk orders' },
              { icon: FileText, title: 'Detailed Quotes', description: 'Comprehensive breakdowns' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <feature.icon className="w-12 h-12 text-green-500 mx-auto mb-4" />
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

export default PricingGuide;