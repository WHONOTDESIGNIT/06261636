import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Target } from 'lucide-react';
import ContactFormA from '../components/Forms/ContactFormA';

const About: React.FC = () => {
  const values = [
    { icon: Award, title: 'Quality Excellence', description: 'FDA GMP certified manufacturing with rigorous quality control' },
    { icon: Users, title: 'Customer Focus', description: 'Dedicated to understanding and exceeding customer expectations' },
    { icon: Globe, title: 'Global Impact', description: 'Serving beauty brands worldwide with innovative IPL solutions' },
    { icon: Target, title: 'Innovation Drive', description: 'Continuous R&D investment in next-generation IPL technology' }
  ];

  const milestones = [
    { year: '2018', title: 'Company Founded', description: 'iShine established as IPL device manufacturer' },
    { year: '2019', title: 'First International Client', description: 'Partnership with KU-2 Cosmetic in Germany' },
    { year: '2020', title: 'FDA GMP Certification', description: 'Achieved FDA GMP clean room certification' },
    { year: '2021', title: 'Smart IPL Launch', description: 'Introduced first app-controlled IPL devices' },
    { year: '2022', title: 'Global Expansion', description: 'Partnerships with Costco and ROSESKINCO' },
    { year: '2023', title: 'AI Integration', description: 'Launched AI-powered IPL technology' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ishine-blue-500 via-ishine-purple-500 to-ishine-teal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About iShine</h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Your trusted partner in IPL device manufacturing, bringing innovative beauty technology from concept to market since 2018.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2018, iShine emerged from a vision to democratize advanced IPL technology. 
                We recognized that beauty brands needed a reliable partner who could transform their ideas 
                into market-ready products with precision and excellence.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Today, we're proud to serve clients across three continents, from innovative startups 
                to established beauty conglomerates. Our commitment to quality, innovation, and customer 
                success drives everything we do.
              </p>
              <p className="text-lg text-gray-600">
                At iShine, we don't just manufacture devices – we craft solutions that empower brands 
                to succeed in the competitive beauty market.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="iShine Manufacturing Facility"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ishine-blue-500/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide our work and relationships with clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <value.icon className="w-12 h-12 text-ishine-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">
              Key milestones in our growth and innovation
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-ishine-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="text-2xl font-bold text-ishine-blue-500 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-ishine-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-lg text-gray-600">
              Dedicated professionals committed to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { role: 'R&D Engineers', count: '15+', description: 'Expert engineers developing cutting-edge IPL technology' },
              { role: 'Quality Specialists', count: '8+', description: 'Ensuring every device meets the highest standards' },
              { role: 'Customer Success', count: '10+', description: 'Dedicated support from concept to market launch' }
            ].map((team, index) => (
              <motion.div
                key={team.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl font-bold text-ishine-blue-500 mb-2">{team.count}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{team.role}</h3>
                <p className="text-gray-600">{team.description}</p>
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

export default About;