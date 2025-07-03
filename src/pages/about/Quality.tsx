import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';
import { useLanguage } from '../../context/LanguageContext';

const qualityPoints = [
  'Medical-grade components and strict ISO 13485 biocompatibility testing',
  'Fully compliant with FDA, CE, IEC 60601, and IEC 62471 safety standards',
  'Integrated skin sensor: safe, precise, and prevents accidental flashes',
  'Advanced optical technology for effective, gentle hair removal',
  'Highly precise assembly and rigorous multi-stage QC',
  'Long-life flash lamps and wear-resistant accessories',
  'User-friendly design for maximum reliability and ease of use',
  'Trusted by global brands in Europe, North America, and Asia',
];

const Quality: React.FC = () => {
  const { currentLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgb(30,157,139)] to-[rgb(36,151,144)] text-white py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Quality You Can Trust</h1>
          <p className="text-xl mb-8 text-gray-100">
            Every iShine IPL device is engineered for safety, reliability, and consistent results—meeting the world's most demanding B2B standards.
          </p>
        </div>
      </section>

      {/* Quality Points */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <ul className="space-y-6">
            {qualityPoints.map((point, idx) => (
              <li key={idx} className="flex items-start">
                <ShieldCheck className="w-6 h-6 text-[rgb(0,116,224)] flex-shrink-0 mt-1 mr-3" />
                <span className="text-lg text-gray-800">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

{/* CTA Section */}
<section className="bg-gradient-to-r from-[rgb(236,67,113)] to-[rgb(125,0,99)] py-16">
  <div className="max-w-2xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
      Want to Know More About iShine Quality?
    </h2>
    <p className="text-lg text-white mb-8">
      Our technical team is ready to answer your questions and provide detailed compliance documentation.
    </p>
    <Link to={`/${currentLanguage}/contact`}>
      <button
        className="bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold px-8 py-3 rounded-full transition"
      >
        Get in Touch
      </button>
    </Link>
  </div>
</section>

      {/* Footer Contact Form */}
      <div className="bg-[#f9f9f9] py-16">
        <ContactFormA />
      </div>
    </div>
  );
};

export default Quality;