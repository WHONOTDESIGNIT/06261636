import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Clock, Globe, DollarSign } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const DropShipping: React.FC = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'No Inventory Investment',
      description: 'Start selling without upfront inventory costs. We handle all stock management.',
      features: ['Zero inventory risk', 'Lower startup costs', 'Cash flow optimization', 'Scalable business model']
    },
    {
      icon: Truck,
      title: 'Direct Fulfillment',
      description: 'Orders ship directly from our facility to your customers worldwide.',
      features: ['Automated fulfillment', 'Professional packaging', 'Tracking integration', 'Quality assurance']
    },
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Quick order processing and shipping to maintain customer satisfaction.',
      features: ['24-48h processing', 'Express shipping options', 'Real-time updates', 'Priority handling']
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Expand your market reach with our international shipping capabilities.',
      features: ['Worldwide shipping', 'Customs handling', 'Local regulations', 'Multi-currency support']
    }
  ];

  const process = [
    { step: '01', title: 'Partner Setup', description: 'Register as our dropshipping partner and access our product catalog' },
    { step: '02', title: 'List Products', description: 'Add our IPL devices to your online store with your pricing' },
    { step: '03', title: 'Receive Orders', description: 'Customer places order on your website' },
    { step: '04', title: 'Forward Order', description: 'Send order details to us through our partner portal' },
    { step: '05', title: 'We Ship', description: 'We fulfill and ship directly to your customer' },
    { step: '06', title: 'Track & Support', description: 'Monitor shipment and provide customer support' }
  ];

  const requirements = [
    { label: 'Business Registration', value: 'Valid business license required' },
    { label: 'Minimum Orders', value: 'No minimum order quantity' },
    { label: 'Payment Terms', value: 'Net 30 for approved partners' },
    { label: 'Geographic Coverage', value: 'Worldwide shipping available' },
    { label: 'Product Training', value: 'Comprehensive product education' },
    { label: 'Marketing Support', value: 'Product images and descriptions' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ishine-purple-500 to-ishine-pink-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Truck className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Drop Shipping Program</h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Partner with iShine for a complete dropshipping solution. Sell our premium IPL devices 
              without inventory investment while we handle fulfillment and shipping.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dropshipping Benefits</h2>
            <p className="text-lg text-gray-600">
              Why choose iShine as your dropshipping partner
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <benefit.icon className="w-12 h-12 text-ishine-purple-500 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 mb-6">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-ishine-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">
              Simple steps to start your dropshipping business with iShine
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-ishine-purple-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner Requirements</h2>
            <p className="text-lg text-gray-600">
              What you need to become an iShine dropshipping partner
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requirements.map((req, index) => (
              <motion.div
                key={req.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{req.label}</h3>
                <p className="text-ishine-purple-500 font-medium">{req.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-ishine-pink-500 to-ishine-purple-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Start Dropshipping?</h2>
            <p className="text-xl mb-8 text-gray-100">
              Join our partner network and start selling IPL devices without inventory investment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-ishine-purple-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apply Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-ishine-purple-500 transition-colors">
                Download Partner Kit
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactFormA />
    </div>
  );
};

export default DropShipping;