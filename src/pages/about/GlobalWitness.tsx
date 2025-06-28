import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

// Example brand image paths, replace with your actual image paths
const brandImages = [
  'https://i.postimg.cc/bwBTXYLZ/global-witness-05.jpg',
  'brand2.png',
  'brand3.png',
  'brand4.png',
  'brand5.png',
  'brand6.png',
  'brand7.png',
  'brand8.png',
  'brand9.png',
  'brand10.png',
  // ...add as many as needed
];

const CONTAINER_WIDTH = 353 * 5 + 10 * 4; // 5 images + 4 gaps = 1,865px

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
            width: `${CONTAINER_WIDTH}px`,
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 353px)',
            gap: '10px',
            background: '#f9f9f9',
            borderRadius: '24px',
            padding: '40px 0',
            justifyContent: 'flex-start'
          }}
        >
          {brandImages.map((src, idx) => (
            <div
              key={src}
              style={{
                width: '353px',
                borderRadius: '18px',
                overflow: 'hidden',
                background: '#fff',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center'
              }}
            >
              <img
                src={src}
                alt={`Brand ${idx + 1}`}
                style={{
                  width: '353px',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '18px',
                  objectFit: 'contain',
                  background: '#fff'
                }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <ContactFormA />
    </div>
  );
};

export default GlobalWitness;
