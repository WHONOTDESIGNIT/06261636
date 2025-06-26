import React from 'react';
import { motion } from 'framer-motion';
import { Printer, Palette, CheckCircle, Star } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const LogoPrinting: React.FC = () => {
  const printingMethods = [
    {
      name: 'Laser Engraving',
      description: 'Permanent, precise logo engraving directly onto device surface',
      features: ['Permanent marking', 'High precision', 'Professional finish', 'Scratch resistant'],
      image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'UV Printing',
      description: 'Full-color logo printing with UV-cured inks for vibrant results',
      features: ['Full color printing', 'UV resistant', 'Quick turnaround', 'Cost effective'],
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Silk Screen Printing',
      description: 'Traditional screen printing for simple, durable logo applications',
      features: ['Durable finish', 'Cost effective', 'Bulk production', 'Consistent quality'],
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Heat Transfer',
      description: 'Heat-applied vinyl or digital transfers for complex designs',
      features: ['Complex designs', 'Multiple colors', 'Flexible application', 'Quick setup'],
      image: 'https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const specifications = [
    { label: 'Minimum Order Quantity', value: '100 pieces' },
    { label: 'Logo Size Range', value: '5mm - 50mm' },
    { label: 'Color Options', value: 'Full spectrum available' },
    { label: 'File Formats', value: 'AI, EPS, PDF, PNG (high-res)' },
    { label: 'Production Time', value: '3-7 business days' },
    { label: 'Quality Standard', value: 'ISO 9001 certified' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ishine-blue-500 to-ishine-teal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Printer className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Logo Printing Services</h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Professional logo printing and branding solutions for your IPL devices. 
              Multiple printing methods to match your brand requirements and budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Printing Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Printing Methods</h2>
            <p className="text-lg text-gray-600">
              Choose the perfect printing method for your brand requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {printingMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={method.image}
                  alt={method.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{method.name}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <div className="space-y-2">
                    {method.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
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

      {/* Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-lg text-gray-600">
              Detailed specifications for our logo printing services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specifications.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{spec.label}</h3>
                <p className="text-ishine-blue-500 font-medium">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600">
              Simple steps to get your logo printed on IPL devices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Submit Design', description: 'Send us your logo files and specifications' },
              { step: '02', title: 'Review & Quote', description: 'We review your design and provide a detailed quote' },
              { step: '03', title: 'Sample Approval', description: 'Approve the sample before full production' },
              { step: '04', title: 'Production', description: 'Professional printing and quality control' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-ishine-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
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

export default LogoPrinting;