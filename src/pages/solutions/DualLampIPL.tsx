import React from 'react';
import { Zap, Battery, TrendingUp } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const technicalSpecs = [
  { parameter: 'Energy Output', value: '20-40 J/cm²', note: 'Breakthrough energy limits with dual-lamp architecture' },
  { parameter: 'Lamp Configuration', value: 'Dual Xenon Flash', note: 'Twin-lamp system for enhanced power delivery' },
  { parameter: 'Flash Count', value: '900,000+', note: 'Extended lifespan through load distribution' },
  { parameter: 'Treatment Speed', value: '50% faster', note: 'Dual-pulse capability reduces session time' },
  { parameter: 'Coverage Area', value: '4.1-12.0 cm²', note: 'Optimized for both precision and full-body use' },
];

const advantages = [
  {
    icon: <Zap className="w-8 h-8 text-[rgb(0,116,224)]" />,
    title: 'Breakthrough Energy Output',
    desc: 'Dual-lamp technology achieves 38-40 J/cm² under optimal conditions, surpassing traditional 20J limitations for enhanced efficacy.',
  },
  {
    icon: <Battery className="w-8 h-8 text-[rgb(0,116,224)]" />,
    title: 'Extended Device Lifespan',
    desc: 'Load distribution across two lamps reduces individual lamp stress, extending total flash count to 900,000+ cycles.',
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[rgb(0,116,224)]" />,
    title: 'Industry-Leading Technology',
    desc: 'Represents the cutting-edge evolution in home IPL devices, setting new benchmarks for power and reliability.',
  },
];

const DualLampIPL: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgb(30,157,139)] to-[rgb(36,151,144)] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Zap className="w-16 h-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Dual-Lamp IPL Technology</h1>
          <p className="text-xl mb-8 text-gray-100">
            iShine pioneers the future of home hair removal with custom dual-lamp IPL devices—delivering breakthrough energy output of 38-40 J/cm² and setting new industry standards for power and performance.
          </p>
        </div>
      </section>

      {/* Technology Breakthrough */}
      <section className="py-16 bg-[#f9f9f9]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 text-[rgb(0,116,224)]">The Next Evolution in IPL Technology</h2>
          <p className="text-lg text-gray-800 mb-6">
            Dual-lamp IPL represents the latest technological advancement in home hair removal devices. By implementing twin xenon flash lamps, we've shattered the traditional 20J energy barrier that has limited single-lamp systems for years.
          </p>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <span className="text-3xl font-bold text-[rgb(236,67,113)]">38-40 J/cm²</span>
                <p className="text-gray-700 mt-2">Peak energy output under optimal conditions</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-[rgb(236,67,113)]">+90%</span>
                <p className="text-gray-700 mt-2">Energy increase over traditional single-lamp systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-[rgb(0,116,224)] text-center">Technical Specifications</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow-sm text-left">
              <thead>
                <tr>
                  <th className="py-3 px-4 font-semibold text-gray-700">Parameter</th>
                  <th className="py-3 px-4 font-semibold text-gray-700">Performance</th>
                  <th className="py-3 px-4 font-semibold text-gray-700">Technical Advantage</th>
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

      {/* Key Advantages */}
      <section className="py-16 bg-[#f9f9f9]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-[rgb(0,116,224)] text-center">Why Dual-Lamp Technology Leads the Industry</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
                {item.icon}
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Engineering Process */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-[rgb(0,116,224)] text-center">Custom Dual-Lamp Engineering</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#f9f9f9] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-[rgb(0,116,224)]">Advanced Lamp Synchronization</h3>
              <ul className="space-y-2 text-gray-800 text-sm">
                <li>• Precision timing control for optimal dual-pulse delivery</li>
                <li>• Intelligent load balancing across both lamp systems</li>
                <li>• Real-time performance monitoring and adjustment</li>
                <li>• Thermal management for sustained high-energy output</li>
              </ul>
            </div>
            <div className="bg-[#f9f9f9] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-[rgb(0,116,224)]">Customization Capabilities</h3>
              <ul className="space-y-2 text-gray-800 text-sm">
                <li>• Energy output scaling: 20-40 J/cm² based on application</li>
                <li>• Custom wavelength combinations for different skin types</li>
                <li>• Adaptive pulse patterns for enhanced comfort</li>
                <li>• Integration with smart cooling and sensor systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Data */}
      <section className="py-12 bg-[#f9f9f9]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-[rgb(0,116,224)] mb-6">Proven Performance Metrics</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[rgb(236,67,113)] mb-2">65%</div>
              <p className="text-gray-700">Faster hair reduction compared to single-lamp systems</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[rgb(236,67,113)] mb-2">900K+</div>
              <p className="text-gray-700">Flash cycles before performance degradation</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[rgb(236,67,113)] mb-2">40 J/cm²</div>
              <p className="text-gray-700">Peak energy output in burst mode</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[rgb(236,67,113)] to-[rgb(125,0,99)] py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
            Ready to Lead with Dual-Lamp IPL Technology?
          </h2>
          <p className="text-lg text-white mb-8">
            Partner with iShine to bring cutting-edge dual-lamp IPL devices to market—setting new standards for power, performance, and customer satisfaction.
          </p>
          <button
            className="bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Get Custom Dual-Lamp Specifications
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

export default DualLampIPL;
