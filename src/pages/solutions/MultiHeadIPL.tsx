import React from 'react';
import { Settings, Zap, Target } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const headTypes = [
  {
    name: 'Precision Face Head',
    spotSize: '2.0 cm²',
    application: 'Upper lip, chin, jawline precision treatment',
    features: 'Extra UV filter, flat design for facial contours',
    icon: <Target className="w-8 h-8 text-[rgb(0,116,224)]" />,
  },
  {
    name: 'Curved Underarm Head',
    spotSize: '3.0 cm²', 
    application: 'Optimized for underarm area curvature',
    features: 'Curved-out design for hard-to-reach areas',
    icon: <Target className="w-8 h-8 text-[rgb(0,116,224)]" />,
  },
  {
    name: 'Bikini Area Head',
    spotSize: '3.0 cm²',
    application: 'Precise bikini line and intimate area treatment',
    features: 'Extra transparent filter, curved design[4][16]',
    icon: <Target className="w-8 h-8 text-[rgb(0,116,224)]" />,
  },
  {
    name: 'Large Body Head',
    spotSize: '4.1 cm²',
    application: 'Fast treatment on legs, arms, stomach',
    features: 'Curved-in design for maximum skin contact',
    icon: <Target className="w-8 h-8 text-[rgb(0,116,224)]" />,
  },
  {
    name: 'Sapphire Cooling Head',
    spotSize: '2.5-4.0 cm²',
    application: 'Pain reduction for sensitive/dark skin',
    features: '90% pain reduction, continuous cooling',
    icon: <Zap className="w-8 h-8 text-[rgb(0,116,224)]" />,
  },
  {
    name: 'Extra-Large Professional Head',
    spotSize: '12.0 cm²',
    application: 'Commercial-grade full body treatment',
    features: 'Maximum coverage, professional clinic efficiency',
    icon: <Target className="w-8 h-8 text-[rgb(0,116,224)]" />,
  },
];

const technicalSpecs = [
  { parameter: 'Spot Size Range', value: '2.0 - 12.0 cm²', note: 'Customizable based on application' },
  { parameter: 'Wavelength Options', value: '530-1200nm', note: 'Multi-spectrum customization available' },
  { parameter: 'Cooling Technology', value: 'Sapphire Contact Cooling', note: 'Up to 90% pain reduction' },
  { parameter: 'Energy Density', value: '10-35 J/cm²', note: 'Adjustable per head type' },
  { parameter: 'Treatment Coverage', value: '1×4mm to 15×40mm', note: 'Precision to full-body options' },
];

const MultiHeadIPL: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgb(30,157,139)] to-[rgb(36,151,144)] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Settings className="w-16 h-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Multi-Head IPL Systems</h1>
          <p className="text-xl mb-8 text-gray-100">
            iShine engineers custom IPL attachment heads for every treatment scenario—from precision facial work to full-body coverage, with specialized solutions for dark skin comfort and professional efficiency.
          </p>
        </div>
      </section>

      {/* Attachment Head Portfolio */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-[rgb(0,116,224)] text-center">Custom IPL Head Portfolio</h2>
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
          <h2 className="text-2xl font-bold mb-8 text-[rgb(0,116,224)] text-center">Technical Customization Range</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow-sm text-left">
              <thead>
                <tr>
                  <th className="py-3 px-4 font-semibold text-gray-700">Parameter</th>
                  <th className="py-3 px-4 font-semibold text-gray-700">Range/Options</th>
                  <th className="py-3 px-4 font-semibold text-gray-700">Application Notes</th>
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
          <h2 className="text-2xl font-bold mb-8 text-[rgb(0,116,224)] text-center">Advanced Attachment Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#f9f9f9] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-[rgb(0,116,224)]">Sapphire Cooling Technology</h3>
              <ul className="space-y-2 text-gray-800 text-sm">
                <li>• **90% pain reduction** for sensitive and dark skin types</li>
                <li>• Continuous contact cooling during treatment</li>
                <li>• Safe for Fitzpatrick skin types I-IV</li>
                <li>• Temperature control: 50°F-104°F vs standard 158°F-212°F</li>
              </ul>
            </div>
            <div className="bg-[#f9f9f9] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-[rgb(0,116,224)]">Intelligent Attachment Recognition</h3>
              <ul className="space-y-2 text-gray-800 text-sm">
                <li>• Automatic treatment program adaptation per body area</li>
                <li>• Smart head recognition for optimal energy settings</li>
                <li>• Real-time coverage feedback and guidance</li>
                <li>• Built-in safety protocols for each attachment type</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Engineering Process */}
      <section className="py-12 bg-[#f9f9f9]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-[rgb(0,116,224)] mb-4">Custom Head Engineering Process</h3>
          <div className="grid md:grid-cols-4 gap-6 text-sm">
            <div>
              <span className="text-[rgb(0,116,224)] font-bold text-lg">01</span>
              <p className="text-gray-800 mt-1">Application Analysis</p>
            </div>
            <div>
              <span className="text-[rgb(0,116,224)] font-bold text-lg">02</span>
              <p className="text-gray-800 mt-1">Spot Size Optimization</p>
            </div>
            <div>
              <span className="text-[rgb(0,116,224)] font-bold text-lg">03</span>
              <p className="text-gray-800 mt-1">Filter & Lens Integration</p>
            </div>
            <div>
              <span className="text-[rgb(0,116,224)] font-bold text-lg">04</span>
              <p className="text-gray-800 mt-1">Ergonomic Validation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data-Driven Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-[rgb(0,116,224)] mb-6">Proven Multi-Head Advantages</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[rgb(236,67,113)] mb-2">40%</div>
              <p className="text-gray-700">Faster full-body treatment with large spot heads</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[rgb(236,67,113)] mb-2">90%</div>
              <p className="text-gray-700">Pain reduction with sapphire cooling attachments</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[rgb(236,67,113)] mb-2">85%</div>
              <p className="text-gray-700">User satisfaction with precision attachments</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[rgb(236,67,113)] to-[rgb(125,0,99)] py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
            Ready to Engineer Your Custom Multi-Head IPL System?
          </h2>
          <p className="text-lg text-white mb-8">
            Our technical team will design attachment heads optimized for your target markets, treatment protocols, and user demographics.
          </p>
          <button
            className="bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Get Custom Head Specifications
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
