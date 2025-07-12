import React from 'react';
import { Brush } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';
import { useLanguage } from '../../context/LanguageContext';

const LogoPrinting: React.FC = () => {
  const { t } = useLanguage();

  // 丝网印刷展示
  const screenPrintingInfo = {
    label: t('logoPrinting.screenPrinting.label'),
    img: '/images/logo-screen-printing.jpg', // 占位图片路径
    desc: t('logoPrinting.screenPrinting.description'),
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgb(30,157,139)] to-[rgb(36,151,144)] text-white py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Brush className="w-16 h-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{t('logoPrinting.hero.title')}</h1>
          <p className="text-xl mb-8 text-gray-100">
            {t('logoPrinting.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Screen Printing Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#f9f9f9] rounded-2xl shadow-sm p-8 flex flex-col items-center text-center">
            <img
              src={screenPrintingInfo.img}
              alt={screenPrintingInfo.label}
              className="w-[300px] h-[200px] object-contain mb-6 rounded-xl border"
              loading="lazy"
            />
            <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
              {screenPrintingInfo.label}
              <Brush className="w-7 h-7 text-[rgb(0,116,224)]" />
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl">{screenPrintingInfo.desc}</p>
          </div>
        </div>
      </section>

      {/* Key Info & FAQ */}
      <section className="py-10 bg-[#f9f9f9]">
        <div className="max-w-3xl mx-auto px-4 space-y-6 text-left">
          <div>
            <span className="font-bold text-[rgb(0,116,224)]">{t('logoPrinting.info.colors.label')}:</span> {t('logoPrinting.info.colors.value')}
          </div>
          <div>
            <span className="font-bold text-[rgb(0,116,224)]">{t('logoPrinting.info.surface.label')}:</span> {t('logoPrinting.info.surface.value')}
          </div>
          <div>
            <span className="font-bold text-[rgb(0,116,224)]">{t('logoPrinting.info.leadTime.label')}:</span> {t('logoPrinting.info.leadTime.value')}
          </div>
          <div>
            <span className="font-bold text-[rgb(0,116,224)]">{t('logoPrinting.info.moq.label')}:</span> {t('logoPrinting.info.moq.value')}
          </div>
          <div>
            <span className="font-bold text-[rgb(0,116,224)]">{t('logoPrinting.info.premium.label')}:</span> {t('logoPrinting.info.premium.value')}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[rgb(236,67,113)] to-[rgb(125,0,99)] py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
            {t('logoPrinting.cta.title')}
          </h2>
          <p className="text-lg text-white mb-8">
            {t('logoPrinting.cta.subtitle')}
          </p>
          <button
            className="bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold px-8 py-3 rounded-full transition"
          >
            {t('logoPrinting.cta.button')}
          </button>
        </div>
      </section>

      {/* Footer Contact Form */}
      <div className="bg-[#f9f9f9] py-16">
        <ContactFormA />
      </div>
    </div>
  );
};

export default LogoPrinting;
