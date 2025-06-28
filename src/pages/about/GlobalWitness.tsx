import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Award, MapPin } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const GlobalWitness: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
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

      {/* -------- BRAND GALLERY -------- */}
      <section className="py-20 bg-white">
        {/* Replace items in brandImages with actual logo paths */}
        {(() => {
          const brandImages = [
            'brand1.png',
            'brand2.png',
            'brand3.png',
            'brand4.png',
            'brand5.png',
            // Add more image paths here without duplicates
          ];
          return (
            <div className="max-w-full mx-auto flex flex-wrap justify-center gap-[10px] bg-[#f9f9f9] rounded-[24px] p-10">
              {brandImages.map((src) => (
                <div key={src} className="w-[353px] rounded-[18px] overflow-hidden">
                  <img
                    src={src}
                    alt={src.split('.')[0]}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          );
        })()}
      </section>

      <ContactFormA />
    </div>
  );
};

export default GlobalWitness;