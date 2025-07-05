import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, ShieldCheck, Star, ArrowRight } from 'lucide-react';
import ContactFormA from '../components/Forms/ContactFormA';
import { useTranslation } from '../hooks/useTranslation';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('home.hero.title')}
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t('home.hero.subtitle')}
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-blue-50 transition"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            {t('home.hero.cta')}
            <ArrowRight className="ml-2" />
          </motion.a>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('home.who.title')}</h2>
          <p className="text-lg text-gray-700 mb-8">{t('home.who.desc')}</p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-10 h-10 text-blue-500 mb-2" />
              <span className="font-semibold">{t('home.who.advantage.quality')}</span>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-yellow-500 mb-2" />
              <span className="font-semibold">{t('home.who.advantage.brand')}</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-cyan-500 mb-2" />
              <span className="font-semibold">{t('home.who.advantage.team')}</span>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-10 h-10 text-green-500 mb-2" />
              <span className="font-semibold">{t('home.who.advantage.global')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">{t('home.solutions.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h3 className="font-semibold text-xl mb-2">{t('home.solutions.oem')}</h3>
              <p className="text-gray-600">{t('home.solutions.oemDesc')}</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h3 className="font-semibold text-xl mb-2">{t('home.solutions.odm')}</h3>
              <p className="text-gray-600">{t('home.solutions.odmDesc')}</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h3 className="font-semibold text-xl mb-2">{t('home.solutions.full')}</h3>
              <p className="text-gray-600">{t('home.solutions.fullDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Witness */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">{t('home.global.title')}</h2>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {/* 品牌logo墙，可用静态图片或占位 */}
            <div className="w-32 h-16 bg-gray-100 rounded flex items-center justify-center text-gray-400">LOGO1</div>
            <div className="w-32 h-16 bg-gray-100 rounded flex items-center justify-center text-gray-400">LOGO2</div>
            <div className="w-32 h-16 bg-gray-100 rounded flex items-center justify-center text-gray-400">LOGO3</div>
            <div className="w-32 h-16 bg-gray-100 rounded flex items-center justify-center text-gray-400">LOGO4</div>
          </div>
          <div className="text-center text-gray-600">{t('home.global.desc')}</div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">{t('home.why.title')}</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <ShieldCheck className="w-10 h-10 mx-auto text-blue-500 mb-2" />
              <div className="font-semibold">{t('home.why.cert')}</div>
            </div>
            <div>
              <Star className="w-10 h-10 mx-auto text-yellow-500 mb-2" />
              <div className="font-semibold">{t('home.why.qc')}</div>
            </div>
            <div>
              <Users className="w-10 h-10 mx-auto text-cyan-500 mb-2" />
              <div className="font-semibold">{t('home.why.service')}</div>
            </div>
            <div>
              <Globe className="w-10 h-10 mx-auto text-green-500 mb-2" />
              <div className="font-semibold">{t('home.why.response')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">{t('home.contact.title')}</h2>
          <p className="text-center text-gray-700 mb-8">{t('home.contact.desc')}</p>
          <ContactFormA />
        </div>
      </section>
    </div>
  );
};

export default Home;