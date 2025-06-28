import React from 'react';
import { Cpu, Shield, CheckCircle2 } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const designProcess = [
  {
    step: '01',
    title: 'Mechanical Design (MD) Structure',
    desc: 'Precision engineering transforms your concept into manufacturable 3D CAD models, optimizing for form, function, and production efficiency.',
  },
  {
    step: '02',
    title: '3D Printed Prototype Creation',
    desc: 'Advanced 3D printing technology creates fully functional demo units with all operational features—allowing comprehensive testing before tooling investment.',
  },
  {
    step: '03',
    title: 'Feasibility Assessment',
    desc: 'Rigorous evaluation of design integrity, manufacturing scalability, and technical performance to validate production readiness.',
  },
  {
    step: '04',
    title: 'Risk Mitigation Report',
    desc: 'Detailed analysis identifying potential production challenges and recommended design optimizations to minimize project risk.',
  },
];

const riskMetrics = [
  { metric: 'Production Investment Risk', reduction: '70%', desc: 'Early detection of design flaws before tooling' },
  { metric: 'Time-to-Market Acceleration', improvement: '40%', desc: 'Validated designs proceed directly to manufacturing' },
  { metric: 'Cost Overrun Prevention', savings: '$50K-$150K', desc: 'Avoid expensive design changes post-tooling' },
];

const DesignPrototyping: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgb(30,157,139)] to-[rgb(36,151,144)] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Cpu className="w-16 h-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Design & Prototyping</h1>
          <p className="text-xl mb-8 text-gray-100">
            iShine's T0 phase delivers precision MD structure design and fully functional prototypes—enabling comprehensive feasibility assessment and risk mitigation before you commit to production investment.
          </p>
        </div>
      </section>

      {/* Risk Context */}
      <section className="py-16 bg-[#f9f9f9]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Shield className="w-12 h-12 mx-auto mb-4 text-[rgb(0,116,224)]" />
          <h2 className="text-2xl font-bold mb-4 text-[rgb(0,116,224)]">Why Prototyping Matters: The Financial Reality</h2>
          <p className="text-lg text-gray-800 mb-6">
            A typical 5,000-unit IPL home device project requires **$100,000 to $250,000 USD** in production investment[11][14]. Without proper validation, design flaws discovered post-tooling can cost 50-80% more to correct[21][22].
          </p>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <span className="text-3xl font-bold text-[rgb(236,67,113)]">$100K - $250K</span>
            <p className="text-gray-700 mt-2">Typical production investment for 5,000-unit IPL project</p>
          </div>
        </div>
      </section>

      {/* T0 Process */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-[rgb(0,116,224)] text-center">T0 Phase: From Concept to Validated Prototype</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {designProcess.map((item) => (
              <div key={item.step} className="bg-[#f9f9f9] rounded-2xl shadow-sm p-8 flex flex-col items-start">
                <span className="text-[rgb(0,116,224)] font-bold text-2xl mb-2">{item.step}</span>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-12 bg-[#f9f9f9]">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-xl font-bold text-[rgb(0,116,224)] mb-6 text-center">Engineering Excellence in Every Prototype</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <CheckCircle2 className="w-8 h-8 text-[rgb(0,116,224)] mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Precision 3D CAD Modeling</h4>
              <p className="text-gray-700 text-sm">Advanced mechanical design software ensures manufacturable geometries and optimal material usage[2][5].</p>
            </div>
            <div className="text-center">
              <CheckCircle2 className="w-8 h-8 text-[rgb(0,116,224)] mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Functional 3D Printing</h4>
              <p className="text-gray-700 text-sm">High-resolution additive manufacturing creates demo units with full operational capabilities[16][32].</p>
            </div>
            <div className="text-center">
              <CheckCircle2 className="w-8 h-8 text-[rgb(0,116,224)] mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Design for Manufacturability</h4>
              <p className="text-gray-700 text-sm">Every prototype is optimized for injection molding, assembly efficiency, and quality control[6][8].</p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Mitigation Data */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-[rgb(0,116,224)] text-center">Quantified Risk Reduction</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow-sm text-left">
              <thead>
                <tr>
                  <th className="py-3 px-4 font-semibold text-gray-700">Risk Category</th>
                  <th className="py-3 px-4 font-semibold text-gray-700">Improvement</th>
                  <th className="py-3 px-4 font-semibold text-gray-700">Benefit</th>
                </tr>
              </thead>
              <tbody>
                {riskMetrics.map((item, idx) => (
                  <tr key={idx} className="border-b last:border-b-0">
                    <td className="py-3 px-4 text-gray-800">{item.metric}</td>
                    <td className="py-3 px-4 text-[rgb(0,116,224)] font-medium">{item.reduction || item.improvement ||
