import React from 'react';
import { motion } from 'framer-motion';
import { Package, Shield, Recycle, Award } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const PackagingSolutions: React.FC = () => {
  const packagingTypes = [
    {
      name: 'Premium Gift Boxes',
      description: 'Luxury packaging with magnetic closure and foam inserts',
      features: ['Magnetic closure', 'Custom foam inserts', 'Premium materials', 'Gift-ready presentation'],
      image: 'https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Retail Display Boxes',
      description: 'Eye-catching retail packaging designed for shelf appeal',
      features: ['Shelf-ready design', 'Product visibility', 'Brand messaging', 'Easy opening'],
      image: 'https://images.pexels.com/photos/4792510/pexels-photo-4792510.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Eco-Friendly Packaging',
      description: 'Sustainable packaging solutions using recyclable materials',
      features: ['100% recyclable', 'Biodegradable options', 'Minimal waste', 'Eco certifications'],
      image: 'https://images.pexels.com/photos/4792511/pexels-photo-4792511.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Shipping Boxes',
      description: 'Protective packaging optimized for safe shipping',
      features: ['Impact protection', 'Secure closure', 'Shipping labels', 'Cost optimized'],
      image: 'https://images.pexels.com/photos/4792512/pexels-photo-4792512.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const customizationOptions = [
    { icon: Package, title: 'Custom Dimensions', description: 'Tailored to your exact product specifications' },
    { icon: Shield, title: 'Protection Level', description: 'Choose from basic to premium protection options' },
    { icon: Recycle, title: 'Material Selection', description: 'Various materials from eco-friendly to luxury options' },
    { icon: Award, title: 'Finishing Options', description: 'Embossing, foiling, UV coating, and more' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ishine-teal-500 to-ishine-blue-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Package className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Packaging Solutions</h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Custom packaging solutions that protect your IPL devices and enhance your brand presentation. 
              From eco-friendly options to premium gift boxes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packaging Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Packaging Options</h2>
            <p className="text-lg text-gray-600">
              Choose the perfect packaging solution for your brand and market
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packagingTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={type.image}
                  alt={type.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.name}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {type.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-ishine-teal-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Customization Options</h2>
            <p className="text-lg text-gray-600">
              Tailor every aspect of your packaging to match your brand
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customizationOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <option.icon className="w-12 h-12 text-ishine-teal-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Packaging?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-ishine-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Brand Enhancement</h3>
                    <p className="text-gray-600">Professional packaging that elevates your brand perception and customer experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-ishine-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Product Protection</h3>
                    <p className="text-gray-600">Secure packaging that ensures your IPL devices arrive in perfect condition</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-ishine-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Cost Efficiency</h3>
                    <p className="text-gray-600">Optimized packaging design that reduces shipping costs while maintaining quality</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Packaging Solutions"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ishine-teal-500/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactFormA />
    </div>
  );
};

export default PackagingSolutions;