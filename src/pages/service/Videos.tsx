import React from 'react';
import { motion } from 'framer-motion';
import { Play, Video, Monitor, Users } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const Videos: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Play className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Videos</h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Watch our comprehensive video library featuring product demonstrations, 
              tutorials, and manufacturing insights.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Play, title: 'Product Demos', description: 'See devices in action' },
              { icon: Video, title: 'Tutorials', description: 'Step-by-step guides' },
              { icon: Monitor, title: 'Webinars', description: 'Educational sessions' },
              { icon: Users, title: 'Client Stories', description: 'Success testimonials' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <feature.icon className="w-12 h-12 text-red-500 mx-auto mb-4" />
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

export default Videos;