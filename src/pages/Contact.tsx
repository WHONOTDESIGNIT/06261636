import React from 'react';
import { motion } from 'framer-motion';
import ContactFormB from '../components/Forms/ContactFormB';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ishine-blue-500 to-ishine-teal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('contact.title', 'Contact Us')}</h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">{t('contact.subtitle', 'Get in touch with our team for business inquiries, support, or partnership opportunities.')}</p>
          </motion.div>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative h-[23vh] min-h-[500px] w-full">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://i.postimg.cc/63r0rmF6/company-photo.webp"
            alt={t('contact.companyPhotoAlt', 'iShine Manufacturing Facility')}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center text-white px-4"
          >
          </motion.div>
        </div>
      </section>

      {/* Contact Form - Now directly follows the image section */}
      <ContactFormB />
    </div>
  );
};

export default Contact;