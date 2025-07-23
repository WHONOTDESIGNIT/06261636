import React, { useState } from 'react';
import { Users, Building2, Sparkles, Truck, ArrowRight, CheckCircle, DollarSign, Globe, Shield } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';
import { useLanguage } from '../../context/LanguageContext';

const PricingGuide: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('distributors');

  const pricingTiers = [
    {
      id: 'distributors',
      title: 'Distributor Partners',
      icon: <Users className="w-8 h-8 text-[rgb(0,116,224)]" />,
      subtitle: 'Regional Partnership Program',
      description: 'Become our authorized partner and receive qualified leads in your territory',
      keyBenefits: [
        'Lead allocation based on proximity principle',
        'Competitive wholesale pricing (40-60% margin potential)',
        'Exclusive territorial rights in your region',
        'Marketing support and co-branding opportunities',
        'Priority access to new product launches',
        'Dedicated account management support'
      ],
      pricing: 'Volume-based wholesale pricing starting from $89-$299 per unit',
      minOrder: 'Minimum initial order: 50 units mixed SKUs',
      paymentTerms: 'Net 30 days with approved credit',
      support: 'Full training program and marketing materials provided'
    },
    {
      id: 'retail',
      title: 'Retail & Supermarket',
      icon: <Building2 className="w-8 h-8 text-[rgb(0,116,224)]" />,
      subtitle: 'Enterprise Retail Solutions',
      description: 'Complete compliance and supplier audit support for major retail chains',
      keyBenefits: [
        'Full regulatory compliance assistance (FDA, CE, TGA, Health Canada)',
        'Supplier audit preparation and documentation',
        'Custom packaging for retail requirements',
        'EDI integration and supply chain optimization',
        'Private label and co-branding options',
        'Dedicated retail account management'
      ],
      pricing: 'Retail pricing from $119-$399 per unit depending on volume',
      minOrder: 'Minimum order: 500 units per SKU for retail programs',
      paymentTerms: 'Flexible payment terms based on retail partnership agreement',
      support: 'Complete regulatory documentation and audit support included'
    },
    {
      id: 'brands',
      title: 'Beauty Brands',
      icon: <Sparkles className="w-8 h-8 text-[rgb(0,116,224)]" />,
      subtitle: 'Custom Manufacturing Solutions',
      description: 'Extensive model selection with comprehensive customization services',
      keyBenefits: [
        'Access to 12+ IPL device models and technologies',
        'Full OEM/ODM customization (design, packaging, branding)',
        'Advanced features: App integration, skin sensors, dual-lamp technology',
        'Custom packaging design and manufacturing',
        'FDA 510(k) and regulatory pathway support',
        'End-to-end manufacturing from prototype to mass production'
      ],
      pricing: 'Custom manufacturing from $149-$599 per unit based on specifications',
      minOrder: 'Prototype: 1-5 units | Production: 100+ units per model',
      paymentTerms: '50% deposit, 50% before shipment for custom orders',
      support: 'Complete design-to-market support with dedicated project management'
    }
  ];

  const comparisonData = [
    { feature: 'Minimum Order Quantity', distributors: '50 units', retail: '500 units', brands: '100+ units' },
    { feature: 'Pricing Range', distributors: '$89-$299', retail: '$119-$399', brands: '$149-$599' },
    { feature: 'Customization Level', distributors: 'Standard + Logo', retail: 'Packaging + Private Label', brands: 'Full OEM/ODM' },
    { feature: 'Lead Time', distributors: '7-14 days', retail: '14-30 days', brands: '30-90 days' },
    { feature: 'Payment Terms', distributors: 'Net 30', retail: 'Flexible', brands: '50/50 Split' },
    { feature: 'Support Level', distributors: 'Training + Marketing', retail: 'Compliance + Audit', brands: 'Full Engineering' }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgb(30,157,139)] to-[rgb(36,151,144)] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <DollarSign className="w-16 h-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{t('pricingGuide.hero.title')}</h1>
          <p className="text-xl mb-8 text-gray-100">
            {t('pricingGuide.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Quick ROI Calculator */}
      <section className="py-12 bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-[rgb(0,116,224)]">IPL Business ROI Potential</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-[rgb(236,67,113)] mb-2">430+</div>
              <p className="text-gray-700">Basis points margin improvement potential for B2B technology companies[6]</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-[rgb(236,67,113)] mb-2">$200+</div>
              <p className="text-gray-700">Average IPL treatment price for professional-grade results[2]</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-[rgb(236,67,113)] mb-2">85%</div>
              <p className="text-gray-700">Of companies recognize significant room for pricing improvement[9]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[rgb(0,116,224)]">Choose Your Partnership Model</h2>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-[#f9f9f9] rounded-lg p-1 flex">
              {pricingTiers.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setActiveTab(tier.id)}
                  className={`px-6 py-3 rounded-md font-medium transition-colors ${
                    activeTab === tier.id
                      ? 'bg-[rgb(0,116,224)] text-white'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tier.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tier Content */}
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`${activeTab === tier.id ? 'block' : 'hidden'}`}
            >
              <div className="bg-[#f9f9f9] rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center mb-4">
                      {tier.icon}
                      <div className="ml-4">
                        <h3 className="text-2xl font-bold">{tier.title}</h3>
                        <p className="text-[rgb(0,116,224)] font-medium">{tier.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6">{tier.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {tier.keyBenefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white rounded-xl p-6">
                      <h4 className="font-semibold mb-4 text-[rgb(0,116,224)]">Pricing Structure</h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="font-medium">Unit Pricing: </span>
                          <span className="text-gray-700">{tier.pricing}</span>
                        </div>
                        <div>
                          <span className="font-medium">Minimum Order: </span>
                          <span className="text-gray-700">{tier.minOrder}</span>
                        </div>
                        <div>
                          <span className="font-medium">Payment Terms: </span>
                          <span className="text-gray-700">{tier.paymentTerms}</span>
                        </div>
                        <div>
                          <span className="font-medium">Support Included: </span>
                          <span className="text-gray-700">{tier.support}</span>
                        </div>
                      </div>
                    </div>

                    <button className="w-full bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center">
                      Get Detailed Pricing
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-[rgb(0,116,224)]">Partnership Comparison</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 text-left font-semibold text-gray-700">Feature</th>
                  <th className="py-4 px-6 text-center font-semibold text-gray-700">Distributors</th>
                  <th className="py-4 px-6 text-center font-semibold text-gray-700">Retail/Supermarket</th>
                  <th className="py-4 px-6 text-center font-semibold text-gray-700">Beauty Brands</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium text-gray-800">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-gray-700">{row.distributors}</td>
                    <td className="py-4 px-6 text-center text-gray-700">{row.retail}</td>
                    <td className="py-4 px-6 text-center text-gray-700">{row.brands}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Compliance & Regulatory Support */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-[rgb(0,116,224)]">Regulatory Compliance Support</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f9f9f9] rounded-xl p-6 text-center">
              <Globe className="w-12 h-12 text-[rgb(0,116,224)] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Global Certifications</h3>
              <p className="text-gray-700 text-sm mb-4">FDA 510(k), CE Mark, TGA Australia, Health Canada MDL, and other regional approvals[8]</p>
              <p className="text-xs text-gray-600">Essential for retail partnerships and international market entry</p>
            </div>
            <div className="bg-[#f9f9f9] rounded-xl p-6 text-center">
              <Shield className="w-12 h-12 text-[rgb(0,116,224)] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Supplier Audits</h3>
              <p className="text-gray-700 text-sm mb-4">Complete documentation packages for major retail chain supplier qualification processes[7]</p>
              <p className="text-xs text-gray-600">Streamlined approval for Costco, Target, CVS, and other major retailers</p>
            </div>
            <div className="bg-[#f9f9f9] rounded-xl p-6 text-center">
              <CheckCircle className="w-12 h-12 text-[rgb(0,116,224)] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Quality Systems</h3>
              <p className="text-gray-700 text-sm mb-4">ISO 13485 certified manufacturing with GMP compliance for medical device standards[4]</p>
              <p className="text-xs text-gray-600">Ensures consistent quality and regulatory compliance across all markets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dropshipping CTA */}
      <section className="py-12 bg-gradient-to-r from-[rgb(236,67,113)] to-[rgb(125,0,99)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Truck className="w-12 h-12 text-white mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Need Dropshipping Services?</h2>
          <p className="text-lg text-white mb-6">
            Start selling IPL devices without inventory investment. Our dropshipping program offers automated fulfillment, 
            branded packaging, and direct-to-consumer shipping for e-commerce entrepreneurs[3].
          </p>
          <button className="bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold px-8 py-3 rounded-full transition">
            Explore Dropshipping Options
          </button>
        </div>
      </section>

      {/* Market Intelligence */}
      <section className="py-16 bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-[rgb(0,116,224)]">Market Intelligence & ROI Analysis</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">IPL Market Growth Trajectory</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Global IPL market size: $1.5B in 2024, projected $3.2B by 2033 (8.7% CAGR)[3]</li>
                <li>• Home-use IPL segment growing faster than professional markets[3]</li>
                <li>• Price ranges: $100-$500+ for consumer devices, creating diverse market opportunities[3]</li>
                <li>• North America leads with 35% market share, Asia-Pacific fastest growing at 25%[3]</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Partnership Success Factors</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Competitive margins essential for distributor commitment (40-60% typical)[7]</li>
                <li>• Training and marketing support increases sales performance[7]</li>
                <li>• Transparent pricing and volume incentives build long-term partnerships[7]</li>
                <li>• Professional-grade IPL devices ($30K-$80K) offer higher margin opportunities[5]</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[rgb(30,157,139)] to-[rgb(36,151,144)] py-16">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
            Ready to Start Your IPL Partnership?
          </h2>
          <p className="text-lg text-white mb-8">
            Connect with our B2B team to discuss pricing, volume discounts, and partnership opportunities. 
            We'll help you choose the optimal model for your market and business objectives.
          </p>
          <button
            className="bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Get Custom Pricing Quote
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

export default PricingGuide;
