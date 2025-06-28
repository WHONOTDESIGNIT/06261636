import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

// Example brand image paths, replace with your actual image paths
const brandImages = [
  'https://i.postimg.cc/dVVYH6Sq/global-witness-01.jpg',
  'https://i.postimg.cc/0Nr9Qnpt/global-witness-04.jpg',
  'https://i.postimg.cc/m2w4yJjX/global-witness-07.jpg',
  'https://i.postimg.cc/bwBTXYLZ/global-witness-05.jpg',
  'https://i.postimg.cc/QMCy5nYT/7d7c6493e74549d2cb4dc6d0bbdfa153.jpg',
  'https://i.postimg.cc/8CnPB9pQ/Global-witness-02.webp',
  'https://i.postimg.cc/XNBXxjB2/global-witness-0.jpg',
  'https://i.postimg.cc/43WX4VCf/global-witness-01.webp',
  'https://i.postimg.cc/qMnXKR6c/ice-feeling-ipl-1.webp',
  'https://i.postimg.cc/9Ft1qMrw/advanced-ipl.webp',
  // ...add as many as needed
];

const GlobalWitness: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Globe className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Global Witness</h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Our global presence and international partnerships demonstrate 
              our commitment to serving clients worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Gallery */}
      <section className="py-20 bg-white">
        <div
          className="mx-auto"
          style={{
            maxWidth: '100%',
            background: '#f9f9f9',
            borderRadius: '24px',
            padding: '40px',
            columnCount: 5,
            columnGap: '10px'
          }}
        >
          {brandImages.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={`Brand ${idx + 1}`}
              style={{
                width: '100%',
                marginBottom: '10px',
                borderRadius: '18px',
                display: 'block',
                objectFit: 'contain',
                background: '#fff'
              }}
              loading="lazy"
            />
          ))}
        </div>
      </section>

      <ContactFormA />
    </div>
  );
};

export default GlobalWitness;