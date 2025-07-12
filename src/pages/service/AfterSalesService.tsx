import React from 'react';
import { motion } from 'framer-motion';
import {
  Headphones,
  ListChecks,
  Shield,
  RotateCcw,
  DollarSign,
  FileText,
  Info
} from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';
import { useTranslation } from '../../hooks/useTranslation';

const AfterSalesService: React.FC = () => {
  const { t } = useTranslation();

  const scenarios: string[] = [
    'Not reviewing the user manual thoroughly before use',
    'Using the device without confirming skin/hair type suitability',
    'Selecting an energy level beyond personal skin tolerance',
    'Unstable local voltage affecting device performance',
    'Blade-induced scratches during pre-treatment',
    'Device not fully contacting skin or not held at a 90° angle',
    'Sensitive skin experiencing pronounced discomfort',
    'Product or packaging damaged during shipping',
    'Skipping pre-use shaving, leading to hair burns',
    'Not wearing protective goggles, resulting in eye discomfort or injury',
    'Other unforeseen causes'
  ];
  const bestPractices: string[] = [
    'Read the User Manual: Review all guidelines and contraindications before first use.',
    'Check Suitability: Confirm your skin and hair type match device recommendations.',
    'Start Low, Go Slow: Always begin with the lowest energy setting; increase only if comfortable.',
    'Voltage Check: Ensure your local voltage matches device requirements.',
    'Pre-Shave Properly: Shave treatment areas to avoid hair burns.',
    'Wear Safety Goggles: Always use provided eye protection.',
    'Correct Device Angle: Maintain full contact and a 90° angle between device and skin.',
    'Gentle Handling: Avoid using blades or accessories that may cause injury.',
    'Unbox Carefully: Inspect for shipping damage before use.',
    'For Sensitive Skin: Test on a small area first; discontinue if discomfort occurs.'
  ];

  return (
    <div className="min-h-screen pt-20 overflow-x-hidden">
      {/* ---------------------------- HERO ---------------------------- */}
      <section className="bg-gradient-to-r from-ishine-blue-500 to-ishine-teal-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Headphones className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('afterSalesService.hero.title')}</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-100">
              {t('afterSalesService.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* --------------- COMMON ISSUES & PREVENTION ---------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-ishine-blue-500"
          >
            {t('afterSalesService.commonIssues.title')}
          </motion.h2>

          {/* Typical scenarios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
                <ListChecks className="w-6 h-6 text-ishine-teal-500" /> {t('afterSalesService.commonIssues.scenarios.title')}
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                {scenarios.map((item) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* How to avoid */}
            <div>
              <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
                <Shield className="w-6 h-6 text-ishine-teal-500" /> {t('afterSalesService.commonIssues.prevention.title')}
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                {bestPractices.map((item) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/how-to-use-guide"
              className="inline-block bg-[rgb(222,117,16)] hover:bg-[rgb(198,104,14)] text-white font-semibold py-3 px-8 rounded-lg shadow transition-colors duration-300"
            >
              {t('afterSalesService.commonIssues.howToUseGuide')}
            </a>
          </div>
        </div>
      </section>

      {/* ------------ OUR RESPONSE & SERVICE COMMITMENTS ---------- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-ishine-blue-500"
          >
            {t('afterSalesService.commitments.title')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* 1-Year Warranty */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg shadow p-6 text-center"
            >
              <Shield className="w-10 h-10 mx-auto text-ishine-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('afterSalesService.commitments.warranty.title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('afterSalesService.commitments.warranty.description')}
              </p>
            </motion.div>

            {/* 365-Day Return */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow p-6 text-center"
            >
              <RotateCcw className="w-10 h-10 mx-auto text-ishine-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('afterSalesService.commitments.return.title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('afterSalesService.commitments.return.description')}
              </p>
            </motion.div>

            {/* 90-Day Money Back */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg shadow p-6 text-center"
            >
              <DollarSign className="w-10 h-10 mx-auto text-ishine-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('afterSalesService.commitments.moneyBack.title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('afterSalesService.commitments.moneyBack.description')}
              </p>
            </motion.div>
          </div>

          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto text-sm">
            {t('afterSalesService.commitments.note')}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="/warranty-claim"
              className="bg-[rgb(0,102,161)] hover:bg-[rgb(0,86,136)] text-white font-semibold py-3 px-8 rounded-lg shadow transition-colors duration-300"
            >
              {t('afterSalesService.commitments.warrantyClaim')}
            </a>
            <a
              href="/return-request"
              className="bg-[rgb(0,102,161)] hover:bg-[rgb(0,86,136)] text-white font-semibold py-3 px-8 rounded-lg shadow transition-colors duration-300"
            >
              {t('afterSalesService.commitments.returnRequest')}
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- RETURNS & TERMS ---------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ishine-blue-500 mb-6 text-center">{t('afterSalesService.returnsTerms.title')}</h2>
          <div className="space-y-6 text-gray-700">
            <p><strong>{t('afterSalesService.returnsTerms.returnWindow')}</strong></p>
            <p><strong>{t('afterSalesService.returnsTerms.process')}</strong></p>
            <p><strong>{t('afterSalesService.returnsTerms.exclusions')}</strong></p>
            <p><strong>{t('afterSalesService.returnsTerms.refunds')}</strong></p>
            <p><strong>{t('afterSalesService.returnsTerms.warrantyExclusions')}</strong></p>
          </div>
          <div className="text-center mt-10">
            <a
              href="/terms-and-conditions"
              className="inline-flex items-center gap-2 text-ishine-blue-500 hover:text-ishine-teal-500 font-semibold transition-colors duration-300"
            >
              <FileText className="w-5 h-5" /> {t('afterSalesService.returnsTerms.fullTerms')}
            </a>
          </div>
        </div>
      </section>

      {/* --------------- DATA-DRIVEN INSIGHTS ---------------- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ishine-blue-500 mb-8">{t('afterSalesService.insights.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow p-8"
            >
              <Info className="w-10 h-10 mx-auto text-ishine-teal-500 mb-4" />
              <p className="text-gray-700 text-lg">
                {t('afterSalesService.insights.failureRate')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow p-8"
            >
              <Info className="w-10 h-10 mx-auto text-ishine-teal-500 mb-4" />
              <p className="text-gray-700 text-lg">
                {t('afterSalesService.insights.failureRate')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactFormA />
    </div>
  );
};

export default AfterSalesService;