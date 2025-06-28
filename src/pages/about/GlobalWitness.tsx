import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import Masonry from 'react-layout-masonry'; // Import the library
import ContactFormA from '../../components/Forms/ContactFormA';

const brandImages = [
  'https://i.postimg.cc/bwBTXYLZ/global-witness-05.jpg',
  'https://i.postimg.cc/QMCy5nYT/7d7c6493e74549d2cb4dc6d0bbdfa153.jpg',
  'https://i.postimg.cc/XNBXxjB2/global-witness-0.jpg',
  'https://i.postimg.cc/8CnPB9pQ/Global-witness-02.webp',
  'https://i.postimg.cc/0Nr9Qnpt/global-witness-04.jpg',
  'https://i.postimg.cc/m2w4yJjX/global-witness-07.jpg',
  'https://i.postimg.cc/dVVYH6Sq/global-witness-01.jpg',
  'brand8.png',
  'brand9.png',
  'brand10.png',
  // ...add more images as needed
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

      {/* Masonry Brand Gallery */}
      <section className="py-20 bg-white flex justify-center">
        <div style={{ width: '1865px', margin: '0 auto' }}>
          <Masonry columns={5} gap={10}>
            {brandImages.map((src, idx) => (
              <div
                key={src}
                style={{
                  width: '353px',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  background: '#fff',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
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
                    objectFit: 'cover',
                    background: '#fff',
                  }}
                  loading="lazy"
                />
              </div>
            ))}
          </Masonry>
        </div>
      </section>

      <ContactFormA />
    </div>
  );
};

export default GlobalWitness;
