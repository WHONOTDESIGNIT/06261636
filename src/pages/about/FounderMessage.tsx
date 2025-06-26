import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Target, Star } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const FounderMessage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-r from-ishine-blue-500 to-ishine-purple-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <User className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Founder Message</h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              A personal message from our founder about the vision, mission, 
              and values that drive iShine forward.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Founder"
                className="rounded-lg shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision for the Future</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Heart className="w-8 h-8 text-ishine-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Passion for Innovation</h3>
                    <p className="text-gray-600">Our journey began with a simple belief: everyone deserves access to professional-quality beauty technology.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Target className="w-8 h-8 text-ishine-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Mission-Driven Approach</h3>
                    <p className="text-gray-600">We're committed to empowering brands worldwide with cutting-edge IPL solutions that make a real difference.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Star className="w-8 h-8 text-ishine-teal-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Excellence in Everything</h3>
                    <p className="text-gray-600">From our FDA GMP facilities to our customer service, we maintain the highest standards in every aspect of our business.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactFormA />
    </div>
  );
};

export default FounderMessage;