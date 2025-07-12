import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Heart, Target, Award } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';
import { useLanguage } from '../../context/LanguageContext';

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
  const { t } = useLanguage();

  const witnessSections = [
    {
      icon: Globe,
      title: t('about.globalWitness.impact.title'),
      content: t('about.globalWitness.impact.content')
    },
    {
      icon: Heart,
      title: t('about.globalWitness.partnerships.title'),
      content: t('about.globalWitness.partnerships.content')
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Globe className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about.globalWitness.hero.title')}</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-100 mb-10">
              {t('about.globalWitness.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Witness Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {witnessSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-8"
              >
                <section.icon className="w-12 h-12 text-teal-500 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h3>
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>
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

      {/* Contact Form */}
      <ContactFormA />
    </div>
  );
};

export default GlobalWitness;