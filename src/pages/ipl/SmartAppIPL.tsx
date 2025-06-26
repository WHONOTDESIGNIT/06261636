import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Wifi, BarChart3, Shield } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const SmartAppIPL: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'App Control',
      description: 'Complete device control through intuitive mobile app',
      details: ['iOS & Android compatible', 'Real-time monitoring', 'Remote operation', 'User-friendly interface']
    },
    {
      icon: BarChart3,
      title: 'Progress Tracking',
      description: 'Monitor your hair removal journey with detailed analytics',
      details: ['Treatment history', 'Progress photos', 'Results tracking', 'Personalized insights']
    },
    {
      icon: Wifi,
      title: 'Smart Connectivity',
      description: 'Seamless wireless connection and updates',
      details: ['WiFi connectivity', 'Automatic updates', 'Cloud sync', 'Multi-device support']
    },
    {
      icon: Shield,
      title: 'Safety Features',
      description: 'Advanced safety protocols and skin protection',
      details: ['Skin tone detection', 'Auto-adjustment', 'Safety locks', 'Emergency stop']
    }
  ];

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
            <Smartphone className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Smart App-Controlled IPL Device</h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Revolutionary IPL technology meets smart connectivity. Control your hair removal 
              treatments with precision through our advanced mobile application.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Features</h2>
            <p className="text-lg text-gray-600">
              Advanced technology for personalized hair removal experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-ishine-blue-500 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-ishine-blue-500 rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Image Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Smart App-Controlled IPL Device"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ishine-blue-500/20 to-transparent rounded-lg"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Next-Generation IPL Technology</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-ishine-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Personalized Treatment Plans</h3>
                    <p className="text-gray-600">AI-powered algorithms create customized treatment schedules based on your skin type and hair characteristics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-ishine-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Real-time Feedback</h3>
                    <p className="text-gray-600">Instant feedback on treatment effectiveness and skin condition monitoring</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-ishine-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Professional Results</h3>
                    <p className="text-gray-600">Salon-quality results in the comfort of your home with professional-grade technology</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactFormA />
    </div>
  );
};

export default SmartAppIPL;