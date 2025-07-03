import React from 'react';
import { ShieldCheck } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';
import { useTranslation } from '../../hooks/useTranslation';

const countryRegulations = [
  { country: 'United States', cert: 'FDA 510(k)', notes: 'Medical device; requires 510(k) clearance for claims of permanent hair removal or medical-grade performance.' },
  { country: 'Canada', cert: 'MDL', notes: 'Medical Device License (MDL) required for medical claims; Health Canada oversight.' },
  { country: 'Australia', cert: 'TGA', notes: 'Therapeutic Goods Administration (TGA) registration for medical devices.' },
  { country: 'European Union', cert: 'CE / MDR', notes: 'CE mark under MDR Annex XVI for medical devices; otherwise as cosmetic/electrical appliance.' },
  { country: 'United Kingdom', cert: 'UKCA', notes: 'UKCA for post-Brexit market; similar to CE/MDR.' },
  { country: 'China', cert: 'NMPA', notes: 'National Medical Products Administration (NMPA) registration for medical devices.' },
  { country: 'Japan', cert: 'PMDA', notes: 'Pharmaceuticals and Medical Devices Agency (PMDA) approval for medical devices.' },
  { country: 'South Korea', cert: 'MFDS', notes: 'Ministry of Food and Drug Safety (MFDS) registration.' },
  { country: 'Brazil', cert: 'ANVISA', notes: 'ANVISA registration for medical devices.' },
  { country: 'GCC (Middle East)', cert: 'SFDA/GCC Mark', notes: 'Saudi Food & Drug Authority (SFDA) or GCC mark for medical devices.' },
];

const Compliance: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgb(30,157,139)] to-[rgb(36,151,144)] text-white py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            {t('solutions.compliance.title', 'Global Compliance Solutions')}
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            {t('solutions.compliance.subtitle', 'iShine helps brands, importers, and wholesalers secure the right certifications for home IPL devices in every major market—fast, reliable, and fully B2B.')}
          </p>
        </div>
      </section>

      {/* Certification Table */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-[rgb(0,116,224)] text-center">
            {t('solutions.compliance.certTable.title', 'Key Regulations & Certifications by Country')}
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow-sm text-left">
              <thead>
                <tr>
                  <th className="py-3 px-4 font-semibold text-gray-700">{t('solutions.compliance.certTable.headers.country', 'Country/Region')}</th>
                  <th className="py-3 px-4 font-semibold text-gray-700">{t('solutions.compliance.certTable.headers.certification', 'Certification')}</th>
                  <th className="py-3 px-4 font-semibold text-gray-700">{t('solutions.compliance.certTable.headers.notes', 'Notes')}</th>
                </tr>
              </thead>
              <tbody>
                {countryRegulations.map((item, idx) => (
                  <tr key={idx} className="border-b last:border-b-0">
                    <td className="py-3 px-4 text-[rgb(0,116,224)] font-medium">
                      {t(`solutions.compliance.certTable.countries.${item.country.toLowerCase().replace(/\s+/g, '')}`, item.country)}
                    </td>
                    <td className="py-3 px-4 text-gray-800">{item.cert}</td>
                    <td className="py-3 px-4 text-gray-600">
                      {t(`solutions.compliance.certTable.notes.${item.country.toLowerCase().replace(/\s+/g, '')}`, item.notes)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* iShine Compliance Strengths */}
      <section className="py-12 bg-[#f9f9f9]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-[rgb(0,116,224)] mb-4">
            {t('solutions.compliance.strengths.title', 'Why Choose iShine for Compliance?')}
          </h3>
          <ul className="space-y-3 text-gray-800 text-base text-left inline-block">
            <li>{t('solutions.compliance.strengths.point1', '• Certified: ISO 13485, FDA (US), MDL (Canada), TGA (Australia) already achieved.')}</li>
            <li>{t('solutions.compliance.strengths.point2', '• Deep regulatory expertise—fast-track your device through global certification processes.')}</li>
            <li>{t('solutions.compliance.strengths.point3', '• Full documentation support: risk analysis, labeling, clinical data, and technical files.')}</li>
            <li>{t('solutions.compliance.strengths.point4', '• Save time—avoid costly delays and compliance pitfalls.')}</li>
            <li>{t('solutions.compliance.strengths.point5', '• Free regulatory consulting for all B2B clients.')}</li>
          </ul>
        </div>
      </section>

      {/* Critical Compliance Tip */}
      <section className="py-10 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-[rgb(236,67,113)] text-white rounded-xl p-6 mb-4 font-semibold">
            <span className="block mb-2 text-lg">{t('solutions.compliance.tip.important', 'Important:')}</span>
            <span>
              {t('solutions.compliance.tip.content', 'If you avoid using claims like "permanent hair removal" or "medical-grade" in your product listings and marketing, your IPL device may not be classified as a medical device in many countries. This allows you to legally sell without medical certification in some markets. For details, consult our regulatory team.')}
            </span>
          </div>
          <p className="text-base text-gray-700">
            {t('solutions.compliance.tip.note', 'For any questions about compliance, documentation, or certification strategy, our experts offer free, up-to-date consulting for B2B clients.')}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[rgb(236,67,113)] to-[rgb(125,0,99)] py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
            {t('solutions.compliance.cta.title', 'Need Fast, Reliable Certification for Your IPL Device?')}
          </h2>
          <p className="text-lg text-white mb-8">
            {t('solutions.compliance.cta.subtitle', 'Contact iShine for a free regulatory consultation and a clear roadmap to global compliance.')}
          </p>
          <button
            className="bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold px-8 py-3 rounded-full transition"
          >
            {t('solutions.compliance.cta.button', 'Get Compliance Support')}
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

export default Compliance;
