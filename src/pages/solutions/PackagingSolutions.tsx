import React from 'react';
import { Settings, Zap, Target } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';
import { useLanguage } from '../../context/LanguageContext';

const MultiHeadIPL: React.FC = () => {
  const { t } = useLanguage();

  const headTypes = [
    {
      name: t('multiHeadIPL.heads.precisionFace.name'),
      spotSize: t('multiHeadIPL.heads.precisionFace.spotSize'),
      application: t('multiHeadIPL.heads.precisionFace.application'),
      features: t('multiHeadIPL.heads.precisionFace.features'),
      icon: <Target className="w-8 h-8 text-[rgb(0,116,224)]" />,
    },
    {
      name: t('multiHeadIPL.heads.underarm.name'),
      spotSize: t('multiHeadIPL.heads.underarm.spotSize'), 
      application: t('multiHeadIPL.heads.underarm.application'),
      features: t('multiHeadIPL.heads.underarm.features'),
      icon: <Target className="w-8 h-8 text-[rgb(0,116,224)]" />,
    },
    {
      name: t('multiHeadIPL.heads.bikini.name'),
      spotSize: t('multiHeadIPL.heads.bikini.spotSize'),
      application: t('multiHeadIPL.heads.bikini.application'),
      features: t('multiHeadIPL.heads.bikini.features'),
      icon: <Target className="w-8 h-8 text-[rgb(0,116,224)]" />,
    },
    {
      name: t('multiHeadIPL.heads.largeBody.name'),
      spotSize: t('multiHeadIPL.heads.largeBody.spotSize'),
      application: t('multiHeadIPL.heads.largeBody.application'),
      features: t('multiHeadIPL.heads.largeBody.features'),
      icon: <Target className="w-8 h-8 text-[rgb(0,116,224)]" />,
    },
    {
      name: t('multiHeadIPL.heads.sapphire.name'),
      spotSize: t('multiHeadIPL.heads.sapphire.spotSize'),
      application: t('multiHeadIPL.heads.sapphire.application'),
      features: t('multiHeadIPL.heads.sapphire.features'),
      icon: <Zap className="w-8 h-8 text-[rgb(0,116,224)]" />,
    },
    {
      name: t('multiHeadIPL.heads.professional.name'),
      spotSize: t('multiHeadIPL.heads.professional.spotSize'),
      application: t('multiHeadIPL.heads.professional.application'),
      features: t('multiHeadIPL.heads.professional.features'),
      icon: <Target className="w-8 h-8 text-[rgb(0,116,224)]" />,
    },
  ];

  const technicalSpecs = [
    { parameter: t('multiHeadIPL.specs.spotSize.parameter'), value: t('multiHeadIPL.specs.spotSize.value'), note: t('multiHeadIPL.specs.spotSize.note') },
    { parameter: t('multiHeadIPL.specs.wavelength.parameter'), value: t('multiHeadIPL.specs.wavelength.value'), note: t('multiHeadIPL.specs.wavelength.note') },
    { parameter: t('multiHeadIPL.specs.cooling.parameter'), value: t('multiHeadIPL.specs.cooling.value'), note: t('multiHeadIPL.specs.cooling.note') },
    { parameter: t('multiHeadIPL.specs.energy.parameter'), value: t('multiHeadIPL.specs.energy.value'), note: t('multiHeadIPL.specs.energy.note') },
    { parameter: t('multiHeadIPL.specs.coverage.parameter'), value: t('multiHeadIPL.specs.coverage.value'), note: t('multiHeadIPL.specs.coverage.note') },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgb(30,157,139)] to-[rgb(36,151,144)] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Settings className="w-16 h-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{t('multiHeadIPL.hero.title')}</h1>
          <p className="text-xl mb-8 text-gray-100">
            {t('multiHeadIPL.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Attachment Head Portfolio */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-[rgb(0,116,224)] text-center">{t('multiHeadIPL.portfolio.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {headTypes.map((head) => (
              <div key={head.name} className="bg-[#f9f9f9] rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
                {head.icon}
                <h3 className="text-lg font-semibold mb-2">{head.name}</h3>
                <div className="text-[rgb(0,116,224)] font-bold text-xl mb-2">{head.spotSize}</div>
                <p className="text-gray-800 text-sm mb-2">{head.application}</p>
                <p className="text-gray-600 text-xs">{head.features}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-[#f9f9f9]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-[rgb(0,116,224)] text-center">{t('multiHeadIPL.specs.title')}</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow-sm text-left">
              <thead>
                <tr>
                  <th className="py-3 px-4 font-semibold text-gray-700">{t('multiHeadIPL.specs.table.parameter')}</th>
                  <th className="py-3 px-4 font-semibold text-gray-700">{t('multiHeadIPL.specs.table.range')}</th>
                  <th className="py-3 px-4 font-semibold text-gray-700">{t('multiHeadIPL.specs.table.notes')}</th>
                </tr>
              </thead>
              <tbody>
                {technicalSpecs.map((spec, idx) => (
                  <tr key={idx} className="border-b last:border-b-0">
                    <td className="py-3 px-4 text-gray-800">{spec.parameter}</td>
                    <td className="py-3 px-4 text-[rgb(0,116,224)] font-medium">{spec.value}</td>
                    <td className="py-3 px-4 text-gray-600">{spec.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-[rgb(0,116,224)] text-center">{t('multiHeadIPL.features.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#f9f9f9] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-[rgb(0,116,224)]">{t('multiHeadIPL.features.sapphire.title')}</h3>
              <ul className="space-y-2 text-gray-800 text-sm">
                <li>• {t('multiHeadIPL.features.sapphire.painReduction')}</li>
                <li>• {t('multiHeadIPL.features.sapphire.continuousCooling')}</li>
                <li>• {t('multiHeadIPL.features.sapphire.safeSkinTypes')}</li>
                <li>• {t('multiHeadIPL.features.sapphire.temperatureControl')}</li>
              </ul>
            </div>
            <div className="bg-[#f9f9f9] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-[rgb(0,116,224)]">{t('multiHeadIPL.features.recognition.title')}</h3>
              <ul className="space-y-2 text-gray-800 text-sm">
                <li>• {t('multiHeadIPL.features.recognition.adaptation')}</li>
                <li>• {t('multiHeadIPL.features.recognition.recognition')}</li>
                <li>• {t('multiHeadIPL.features.recognition.feedback')}</li>
                <li>• {t('multiHeadIPL.features.recognition.safety')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Engineering Process */}
      <section className="py-12 bg-[#f9f9f9]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-[rgb(0,116,224)] mb-4">{t('multiHeadIPL.process.title')}</h3>
          <div className="grid md:grid-cols-4 gap-6 text-sm">
            <div>
              <span className="text-[rgb(0,116,224)] font-bold text-lg">01</span>
              <p className="text-gray-800 mt-1">{t('multiHeadIPL.process.step1')}</p>
            </div>
            <div>
              <span className="text-[rgb(0,116,224)] font-bold text-lg">02</span>
              <p className="text-gray-800 mt-1">{t('multiHeadIPL.process.step2')}</p>
            </div>
            <div>
              <span className="text-[rgb(0,116,224)] font-bold text-lg">03</span>
              <p className="text-gray-800 mt-1">{t('multiHeadIPL.process.step3')}</p>
            </div>
            <div>
              <span className="text-[rgb(0,116,224)] font-bold text-lg">04</span>
              <p className="text-gray-800 mt-1">{t('multiHeadIPL.process.step4')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data-Driven Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-[rgb(0,116,224)] mb-6">{t('multiHeadIPL.benefits.title')}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[rgb(236,67,113)] mb-2">40%</div>
              <p className="text-gray-700">{t('multiHeadIPL.benefits.faster')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[rgb(236,67,113)] mb-2">90%</div>
              <p className="text-gray-700">{t('multiHeadIPL.benefits.painReduction')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[rgb(236,67,113)] mb-2">85%</div>
              <p className="text-gray-700">{t('multiHeadIPL.benefits.satisfaction')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[rgb(236,67,113)] to-[rgb(125,0,99)] py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
            {t('multiHeadIPL.cta.title')}
          </h2>
          <p className="text-lg text-white mb-8">
            {t('multiHeadIPL.cta.subtitle')}
          </p>
          <button
            className="bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold px-8 py-3 rounded-full transition"
          >
            {t('multiHeadIPL.cta.button')}
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

export default MultiHeadIPL;
