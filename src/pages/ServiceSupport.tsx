import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Headphones,
  Shield,
  Factory,
  HelpCircle,
  Award,
  Truck,
  Users,
  BookOpen,
  Camera,
  Play,
  DollarSign,
  Search,
  Heart
} from 'lucide-react';
import ContactFormA from '../components/Forms/ContactFormA';
import { useTranslation } from '../hooks/useTranslation';
import SEOTags from '../components/SEO/SEOTags';

const ServiceSupport: React.FC = () => {
  const { t } = useTranslation();

  const serviceCategories = [
    {
      title: t('serviceSupport.categories.technicalSupport.title'),
      description: t('serviceSupport.categories.technicalSupport.description'),
      icon: Headphones,
      services: [
        {
          name: t('serviceSupport.services.afterSalesService.name'),
          description: t('serviceSupport.services.afterSalesService.description'),
          href: '/service-support/after-sales',
          icon: Shield
        },
        {
          name: t('serviceSupport.services.knowledgeBase.name'),
          description: t('serviceSupport.services.knowledgeBase.description'),
          href: '/service-support/knowledge-base',
          icon: BookOpen
        },
        {
          name: t('serviceSupport.services.helpCenter.name'),
          description: t('serviceSupport.services.helpCenter.description'),
          href: '/service-support/help-center',
          icon: HelpCircle
        }
      ]
    },
    {
      title: t('serviceSupport.categories.manufacturingServices.title'),
      description: t('serviceSupport.categories.manufacturingServices.description'),
      icon: Factory,
      services: [
        {
          name: t('serviceSupport.services.iplManufacturing.name'),
          description: t('serviceSupport.services.iplManufacturing.description'),
          href: '/service-support/manufacturing',
          icon: Factory
        },
        {
          name: t('serviceSupport.services.winFdaListing.name'),
          description: t('serviceSupport.services.winFdaListing.description'),
          href: '/service-support/win-fda-listing',
          icon: Award
        }
      ]
    },
    {
      title: t('serviceSupport.categories.businessSupport.title'),
      description: t('serviceSupport.categories.businessSupport.description'),
      icon: Users,
      services: [
        {
          name: t('serviceSupport.services.beautySourcing.name'),
          description: t('serviceSupport.services.beautySourcing.description'),
          href: '/service-support/beauty-sourcing',
          icon: Search
        },
        {
          name: t('serviceSupport.services.pricingGuide.name'),
          description: t('serviceSupport.services.pricingGuide.description'),
          href: '/service-support/pricing-guide',
          icon: DollarSign
        }
      ]
    },
    {
      title: t('serviceSupport.categories.resourcesMedia.title'),
      description: t('serviceSupport.categories.resourcesMedia.description'),
      icon: Camera,
      services: [
        {
          name: t('serviceSupport.services.gallery.name'),
          description: t('serviceSupport.services.gallery.description'),
          href: '/service-support/gallery',
          icon: Camera
        },
        {
          name: t('serviceSupport.services.videos.name'),
          description: t('serviceSupport.services.videos.description'),
          href: '/service-support/videos',
          icon: Play
        }
      ]
    }
  ];

  const stats = [
    { number: '5000+', label: t('serviceSupport.stats.satisfiedClients'), icon: Heart },
    { number: '24/7', label: t('serviceSupport.stats.technicalSupport'), icon: Headphones },
    { number: '99.9%', label: t('serviceSupport.stats.uptimeGuarantee'), icon: Shield },
    { number: '50+', label: t('serviceSupport.stats.countriesServed'), icon: Truck }
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOTags 
        title={t('serviceSupport.seo.title', 'Service & Support | IPL Device Manufacturing Support | iShine')}
        description={t('serviceSupport.seo.description', 'Comprehensive service and support for IPL device manufacturers. After-sales service, technical support, knowledge base, and manufacturing assistance.')}
        keywords={t('serviceSupport.seo.keywords', 'IPL service support, after-sales service, technical support, manufacturing support, knowledge base')}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Headphones className="w-20 h-20 mx-auto mb-6 text-white" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('serviceSupport.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-4xl mx-auto">
              {t('serviceSupport.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/service-support/help-center"
                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                {t('serviceSupport.hero.cta')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('serviceSupport.ecosystem.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('serviceSupport.ecosystem.subtitle')}
            </p>
          </motion.div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="border border-gray-200 rounded-2xl p-8 bg-gray-50"
              >
                <div className="flex items-center mb-6">
                  <category.icon className="w-12 h-12 text-blue-600 mr-4" />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                    >
                      <Link
                        to={service.href}
                        className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 group"
                      >
                        <service.icon className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {service.name}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {service.description}
                        </p>
                        <div className="mt-4 text-blue-600 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                          {t('serviceSupport.learnMore')}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('serviceSupport.cta.title')}
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              {t('serviceSupport.cta.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactFormA />
    </div>
  );
};

export default ServiceSupport; 