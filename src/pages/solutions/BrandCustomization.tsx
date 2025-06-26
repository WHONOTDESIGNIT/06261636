import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Brush, Sparkles, Award } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const BrandCustomization: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ishine-orange-500 to-ishine-pink-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Palette className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Brand Customization</h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Transform our IPL devices into your unique brand. Complete customization services 
              from colors and materials to packaging and user interface design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Customization Services</h2>
            <p className="text-lg text-gray-600">
              Every aspect of your IPL device can be customized to match your brand
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Palette,
                title: 'Color & Finish',
                description: 'Custom colors, textures, and surface finishes',
                features: ['Pantone color matching', 'Matte/Glossy finishes', 'Metallic options', 'Texture variations']
              },
              {
                icon: Brush,
                title: 'Design Elements',
                description: 'Logo placement, button design, and aesthetics',
                features: ['Logo integration', 'Button customization', 'LED indicators', 'Ergonomic design']
              },
              {
                icon: Sparkles,
                title: 'User Interface',
                description: 'Custom app interface and device display',
                features: ['App branding', 'Custom icons', 'Brand colors', 'User experience']
              },
              {
                icon: Award,
                title: 'Premium Options',
                description: 'Luxury materials and premium finishes',
                features: ['Premium materials', 'Special coatings', 'Luxury packaging', 'Exclusive designs']
              }
            ].map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <option.icon className="w-12 h-12 text-ishine-orange-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, i) => (
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

export default BrandCustomization;