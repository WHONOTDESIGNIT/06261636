import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Target, Award, CheckCircle } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';
import { useLanguage } from '../../context/LanguageContext';
import SEOTags from '../../components/SEO/SEOTags';

const BrandCustomization: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Palette,
      title: t('solutions.brandCustomization.features.design.title'),
      description: t('solutions.brandCustomization.features.design.description')
    },
    {
      icon: Target,
      title: t('solutions.brandCustomization.features.branding.title'),
      description: t('solutions.brandCustomization.features.branding.description')
    },
    {
      icon: Award,
      title: t('solutions.brandCustomization.features.quality.title'),
      description: t('solutions.brandCustomization.features.quality.description')
    },
    {
      icon: CheckCircle,
      title: t('solutions.brandCustomization.features.support.title'),
      description: t('solutions.brandCustomization.features.support.description')
    }
  ];

  return (
    <>
      <SEOTags 
        title="Brand Customization | Private Label IPL Device Solutions"
        description="Private label and brand customization services for IPL hair removal devices. Custom packaging, logo printing, and exclusive design for your beauty brand."
        keywords="brand customization, private label IPL, custom packaging, logo printing, exclusive design, beauty brand"
      />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Palette className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('solutions.brandCustomization.hero.title')}</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-100 mb-10">
              {t('solutions.brandCustomization.hero.subtitle')}
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
                <feature.icon className="w-12 h-12 text-pink-500 mx-auto mb-4" />
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
    </>
  );
};

export default BrandCustomization;