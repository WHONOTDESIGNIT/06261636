import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Plane, Shield, Clock } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const GlobalShipping: React.FC = () => {
  const shippingZones = [
    {
      region: 'North America',
      countries: ['United States', 'Canada', 'Mexico'],
      deliveryTime: '3-7 business days',
      icon: '🇺🇸'
    },
    {
      region: 'Europe',
      countries: ['Germany', 'France', 'UK', 'Netherlands', 'Italy'],
      deliveryTime: '5-10 business days',
      icon: '🇪🇺'
    },
    {
      region: 'Asia Pacific',
      countries: ['Japan', 'Australia', 'Singapore', 'South Korea'],
      deliveryTime: '3-8 business days',
      icon: '🌏'
    },
    {
      region: 'Rest of World',
      countries: ['Brazil', 'India', 'South Africa', 'UAE'],
      deliveryTime: '7-15 business days',
      icon: '🌍'
    }
  ];

  const services = [
    {
      icon: Plane,
      title: 'Express Shipping',
      description: 'Fast delivery for urgent orders with tracking and insurance',
      features: ['2-5 day delivery', 'Full tracking', 'Insurance included', 'Priority handling']
    },
    {
      icon: Shield,
      title: 'Secure Packaging',
      description: 'Professional packaging to ensure safe delivery worldwide',
      features: ['Impact protection', 'Moisture resistance', 'Tamper-evident seals', 'Custom inserts']
    },
    {
      icon: Clock,
      title: 'Flexible Options',
      description: 'Multiple shipping options to meet your timeline and budget',
      features: ['Standard shipping', 'Express delivery', 'Economy options', 'Scheduled delivery']
    },
    {
      icon: Globe,
      title: 'Customs Support',
      description: 'Complete customs documentation and compliance handling',
      features: ['Customs clearance', 'Documentation', 'Duty calculation', 'Compliance check']
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ishine-cyan-500 to-ishine-blue-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Globe className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Global Shipping Solutions</h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Reliable worldwide shipping for your IPL devices. Fast, secure, and fully tracked 
              delivery to over 200 countries with complete customs support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shipping Zones */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shipping Zones</h2>
            <p className="text-lg text-gray-600">
              Fast and reliable delivery to major markets worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {shippingZones.map((zone, index) => (
              <motion.div
                key={zone.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{zone.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{zone.region}</h3>
                <div className="text-sm text-gray-600 mb-4">
                  {zone.countries.join(', ')}
                </div>
                <div className="text-ishine-cyan-500 font-semibold">{zone.deliveryTime}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shipping Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive shipping solutions for your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <service.icon className="w-12 h-12 text-ishine-cyan-500 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-ishine-cyan-500 rounded-full mr-3"></div>
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

export default GlobalShipping;