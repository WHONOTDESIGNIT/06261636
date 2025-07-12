import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Plane, Shield, Clock } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';
import { useLanguage } from '../../context/LanguageContext';

const GlobalShipping: React.FC = () => {
  const { t } = useLanguage();

  const shippingZones = [
    {
      region: t('globalShipping.zones.northAmerica.region'),
      countries: [t('globalShipping.zones.northAmerica.countries.us'), t('globalShipping.zones.northAmerica.countries.canada'), t('globalShipping.zones.northAmerica.countries.mexico')],
      deliveryTime: t('globalShipping.zones.northAmerica.deliveryTime'),
      icon: '🇺🇸'
    },
    {
      region: t('globalShipping.zones.europe.region'),
      countries: [t('globalShipping.zones.europe.countries.germany'), t('globalShipping.zones.europe.countries.france'), t('globalShipping.zones.europe.countries.uk'), t('globalShipping.zones.europe.countries.netherlands'), t('globalShipping.zones.europe.countries.italy')],
      deliveryTime: t('globalShipping.zones.europe.deliveryTime'),
      icon: '🇪🇺'
    },
    {
      region: t('globalShipping.zones.asiaPacific.region'),
      countries: [t('globalShipping.zones.asiaPacific.countries.japan'), t('globalShipping.zones.asiaPacific.countries.australia'), t('globalShipping.zones.asiaPacific.countries.singapore'), t('globalShipping.zones.asiaPacific.countries.southKorea')],
      deliveryTime: t('globalShipping.zones.asiaPacific.deliveryTime'),
      icon: '🌏'
    },
    {
      region: t('globalShipping.zones.restOfWorld.region'),
      countries: [t('globalShipping.zones.restOfWorld.countries.brazil'), t('globalShipping.zones.restOfWorld.countries.india'), t('globalShipping.zones.restOfWorld.countries.southAfrica'), t('globalShipping.zones.restOfWorld.countries.uae')],
      deliveryTime: t('globalShipping.zones.restOfWorld.deliveryTime'),
      icon: '🌍'
    }
  ];

  const services = [
    {
      icon: Plane,
      title: t('globalShipping.services.express.title'),
      description: t('globalShipping.services.express.description'),
      features: [t('globalShipping.services.express.features.delivery'), t('globalShipping.services.express.features.tracking'), t('globalShipping.services.express.features.insurance'), t('globalShipping.services.express.features.priority')]
    },
    {
      icon: Shield,
      title: t('globalShipping.services.secure.title'),
      description: t('globalShipping.services.secure.description'),
      features: [t('globalShipping.services.secure.features.protection'), t('globalShipping.services.secure.features.resistance'), t('globalShipping.services.secure.features.seals'), t('globalShipping.services.secure.features.inserts')]
    },
    {
      icon: Clock,
      title: t('globalShipping.services.flexible.title'),
      description: t('globalShipping.services.flexible.description'),
      features: [t('globalShipping.services.flexible.features.standard'), t('globalShipping.services.flexible.features.express'), t('globalShipping.services.flexible.features.economy'), t('globalShipping.services.flexible.features.scheduled')]
    },
    {
      icon: Globe,
      title: t('globalShipping.services.customs.title'),
      description: t('globalShipping.services.customs.description'),
      features: [t('globalShipping.services.customs.features.clearance'), t('globalShipping.services.customs.features.documentation'), t('globalShipping.services.customs.features.duty'), t('globalShipping.services.customs.features.compliance')]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ishine-cyan-500 to-ishine-blue-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Globe className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('globalShipping.hero.title')}</h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              {t('globalShipping.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shipping Zones */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('globalShipping.zones.title')}</h2>
            <p className="text-lg text-gray-600">
              {t('globalShipping.zones.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {shippingZones.map((zone, index) => (
              <motion.div
                key={zone.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{zone.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{zone.region}</h3>
                <div className="text-sm text-gray-600 mb-4">
                  {zone.countries.join(', ')}
                </div>
                <div className="text-ishine-cyan-500 font-semibold">{zone.deliveryTime}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('globalShipping.services.title')}</h2>
            <p className="text-lg text-gray-600">
              {t('globalShipping.services.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <service.icon className="w-12 h-12 text-ishine-cyan-500 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-ishine-cyan-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
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

export default GlobalShipping;