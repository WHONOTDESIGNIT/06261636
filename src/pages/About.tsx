import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Target } from 'lucide-react';
import ContactFormA from '../components/Forms/ContactFormA';
import { useLanguage } from '../context/LanguageContext';
import SEOTags from '../components/SEO/SEOTags';

const About: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Award, title: t('about.values.qualityTitle'), description: t('about.values.qualityDesc') },
    { icon: Users, title: t('about.values.customerTitle'), description: t('about.values.customerDesc') },
    { icon: Globe, title: t('about.values.globalTitle'), description: t('about.values.globalDesc') },
    { icon: Target, title: t('about.values.innovationTitle'), description: t('about.values.innovationDesc') }
  ];

  const milestones = [
    { year: '2018', title: t('about.milestones.2018.title'), description: t('about.milestones.2018.desc') },
    { year: '2019', title: t('about.milestones.2019.title'), description: t('about.milestones.2019.desc') },
    { year: '2020', title: t('about.milestones.2020.title'), description: t('about.milestones.2020.desc') },
    { year: '2021', title: t('about.milestones.2021.title'), description: t('about.milestones.2021.desc') },
    { year: '2022', title: t('about.milestones.2022.title'), description: t('about.milestones.2022.desc') },
    { year: '2023', title: t('about.milestones.2023.title'), description: t('about.milestones.2023.desc') }
  ];

  const team = [
    { role: t('about.team.rnd'), count: '15+', description: t('about.team.rndDesc') },
    { role: t('about.team.quality'), count: '8+', description: t('about.team.qualityDesc') },
    { role: t('about.team.customer'), count: '10+', description: t('about.team.customerDesc') }
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOTags 
        title={t('about.seo.title', 'About iShine - Leading IPL Device Manufacturer | Innovation & Quality')}
        description={t('about.seo.description', 'Discover iShine\'s journey as a leading IPL device manufacturer. Learn about our innovation, quality standards, and commitment to excellence in beauty device manufacturing.')}
        keywords={t('about.seo.keywords', 'about iShine, IPL manufacturer, beauty device company, innovation, quality, manufacturing excellence')}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ishine-blue-500 via-ishine-purple-500 to-ishine-teal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about.heroTitle')}</h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              {t('about.heroDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('about.storyTitle')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('about.storyP1')}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {t('about.storyP2')}
              </p>
              <p className="text-lg text-gray-600">
                {t('about.storyP3')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="iShine Manufacturing Facility"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ishine-blue-500/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('about.valuesTitle')}</h2>
            <p className="text-lg text-gray-600">
              {t('about.valuesDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <value.icon className="w-12 h-12 text-ishine-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('about.journeyTitle')}</h2>
            <p className="text-lg text-gray-600">
              {t('about.journeyDesc')}
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-ishine-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="text-2xl font-bold text-ishine-blue-500 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-ishine-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('about.teamTitle')}</h2>
            <p className="text-lg text-gray-600">
              {t('about.teamDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl font-bold text-ishine-blue-500 mb-2">{member.count}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{member.role}</h3>
                <p className="text-gray-600">{member.description}</p>
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

export default About;