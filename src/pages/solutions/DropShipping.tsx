import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Box, Zap, CheckCircle } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';
import { useLanguage } from '../../context/LanguageContext';

const DropShipping: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Truck,
      title: t('solutions.dropShipping.features.logistics.title'),
      description: t('solutions.dropShipping.features.logistics.description')
    },
    {
      icon: Box,
      title: t('solutions.dropShipping.features.inventory.title'),
      description: t('solutions.dropShipping.features.inventory.description')
    },
    {
      icon: Zap,
      title: t('solutions.dropShipping.features.automation.title'),
      description: t('solutions.dropShipping.features.automation.description')
    },
    {
      icon: CheckCircle,
      title: t('solutions.dropShipping.features.support.title'),
      description: t('solutions.dropShipping.features.support.description')
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Truck className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('solutions.dropShipping.hero.title')}</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-100 mb-10">
              {t('solutions.dropShipping.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <feature.icon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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

export default DropShipping;
