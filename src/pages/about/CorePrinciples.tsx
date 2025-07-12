import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Shield, Zap } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';
import { useLanguage } from '../../context/LanguageContext';

const CorePrinciples: React.FC = () => {
  const { t } = useLanguage();

  const principles = [
    {
      icon: Target,
      title: t('about.corePrinciples.principles.innovation.title'),
      content: t('about.corePrinciples.principles.innovation.content')
    },
    {
      icon: Shield,
      title: t('about.corePrinciples.principles.quality.title'),
      content: t('about.corePrinciples.principles.quality.content')
    },
    {
      icon: Heart,
      title: t('about.corePrinciples.principles.partnership.title'),
      content: t('about.corePrinciples.principles.partnership.content')
    },
    {
      icon: Zap,
      title: t('about.corePrinciples.principles.accessibility.title'),
      content: t('about.corePrinciples.principles.accessibility.content')
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Target className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about.corePrinciples.hero.title')}</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-100 mb-10">
              {t('about.corePrinciples.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-8"
              >
                <principle.icon className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{principle.title}</h3>
                <p className="text-gray-700 leading-relaxed">{principle.content}</p>
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

export default CorePrinciples;
