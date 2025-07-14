import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Award, Shield, CheckCircle } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';
import { useLanguage } from '../../context/LanguageContext';
import SEOTags from '../../components/SEO/SEOTags';

const DualLampIPL: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Zap,
      title: t('solutions.dualLampIPL.features.technology.title'),
      description: t('solutions.dualLampIPL.features.technology.description')
    },
    {
      icon: Award,
      title: t('solutions.dualLampIPL.features.efficiency.title'),
      description: t('solutions.dualLampIPL.features.efficiency.description')
    },
    {
      icon: Shield,
      title: t('solutions.dualLampIPL.features.safety.title'),
      description: t('solutions.dualLampIPL.features.safety.description')
    },
    {
      icon: CheckCircle,
      title: t('solutions.dualLampIPL.features.customization.title'),
      description: t('solutions.dualLampIPL.features.customization.description')
    }
  ];

  return (
    <>
      <SEOTags 
        title="Dual Lamp IPL Device | Professional Dual-Light Hair Removal System"
        description="Professional dual lamp IPL device with enhanced coverage and efficiency. Features dual light sources for faster treatment and improved hair removal results."
        keywords="dual lamp IPL, dual light IPL, professional IPL device, enhanced coverage IPL, faster hair removal"
      />
      <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Zap className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('solutions.dualLampIPL.hero.title')}</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-100 mb-10">
              {t('solutions.dualLampIPL.hero.subtitle')}
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

export default DualLampIPL;
