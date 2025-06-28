import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/UI/Button';
import ProductCard from '../components/Product/ProductCard';
import ContactFormA from '../components/Forms/ContactFormA';
import { iplDevices } from '../data/products';

const Home: React.FC = () => {
  const partners = [
    { name: 'KU-2 Cosmetic', location: 'Germany', logo: '🇩🇪' },
    { name: 'Costco', location: 'Canada', logo: '🇨🇦' },
    { name: 'ROSESKINCO', location: 'USA', logo: '🇺🇸' }
  ];

  const features = [
    { icon: CheckCircle, title: 'OEM/ODM Solutions', description: 'Complete customization from design to packaging' },
    { icon: Users, title: 'Experienced Team', description: 'Expert engineers and designers at your service' },
    { icon: Award, title: 'Quality Assurance', description: 'FDA GMP certified clean room manufacturing' },
    { icon: Globe, title: 'Global Reach', description: 'Serving clients across Europe, North America, and Asia' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-ishine-blue-500 via-ishine-purple-500 to-ishine-teal-500 text-white h-[66.67vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[42vw] h-[34vh] bg-white/60 rounded-lg"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Custom IPL Devices 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                & Branding IPL Devices
              </span>
            </h1>
            <p className="text-md sm:text-xl md:text-2xl mb-6 sm:mb-8 text-black max-w-3xl mx-auto px-4">
              Global Leading IPL device manufacturer,<br />
              help you design it, build it, and box it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button size="xxs" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                Get Quote
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Global Brands</h2>
            <p className="text-lg text-gray-600">Working with industry leaders worldwide</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{partner.logo}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-gray-600">{partner.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose iShine?</h2>
            <p className="text-lg text-gray-600">Complete IPL manufacturing solutions tailored to your needs</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-ishine-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IPL Device Range</h2>
            <p className="text-lg text-gray-600">Wide Range IPL devices for every needs</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {iplDevices.slice(0, 6).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/ipl-hair-removal">
              <Button size="lg">
                View All IPL Devices
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-ishine-teal-500 to-ishine-purple-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Need help?</h2>
            <p className="text-xl mb-8 text-gray-100">
              Let's discuss your requirements and create the IPL solution that best fit for your brand.
            </p>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-ishine-teal-500">
             Fill out the form to enjoy Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactFormA />
    </div>
  );
};

export default Home;