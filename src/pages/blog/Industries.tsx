import React from 'react';
import { TrendingUp, Users, Globe } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';
import { useTranslation } from '../../hooks/useTranslation';

const Industries: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgb(30,157,139)] to-[rgb(36,151,144)] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Users className="w-16 h-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Industries We Serve</h1>
          <p className="text-xl mb-8 text-gray-100">
            iShine empowers diverse industries with IPL and beauty electronics manufacturing—from cosmetics brands expanding product lines to DTC innovators revolutionizing at-home beauty technology.
          </p>
        </div>
      </section>

      {/* Primary Market: Cosmetics Brands */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-[rgb(0,116,224)] text-center">Cosmetics Brands: Our Core Partnership</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Rapid Category Expansion Strategy</h3>
              <p className="text-gray-700 mb-4">
                Leading cosmetics brands partner with iShine to diversify into beauty electronics without deep technical expertise. The global beauty tech market, valued at $79.87 billion in 2025, presents massive expansion opportunities for established brands.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Fast-Track Development: Sampling → Prototyping → Mass Production → Brand Customization in weeks, not months</li>
                <li>• Zero Technical Learning Curve: Complete OEM/ODM support eliminates need for in-house IPL expertise</li>
                <li>• Revenue & Profit Acceleration: Beauty devices market growing at 16.2% CAGR, reaching $111.29 billion by 2029</li>
                <li>• Brand Influence Expansion: Premium beauty electronics enhance brand positioning in lucrative tech-beauty convergence</li>
              </ul>
            </div>
            <div className="bg-[#f9f9f9] rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-3 text-[rgb(0,116,224)]">Market Intelligence</h4>
              <div className="space-y-3">
                <div>
                  <span className="text-2xl font-bold text-[rgb(236,67,113)]">$79.87B</span>
                  <p className="text-sm text-gray-600">Global Beauty Tech Market 2025 [2]</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-[rgb(236,67,113)]">16.2%</span>
                  <p className="text-sm text-gray-600">Beauty Devices CAGR 2025-2029 [6]</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-[rgb(236,67,113)]">$3,756</span>
                  <p className="text-sm text-gray-600">Annual US Beauty Spending per Woman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IPL Industry Veterans */}
      <section className="py-16 bg-[#f9f9f9]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6 text-[rgb(0,116,224)]">IPL Industry Specialists</h2>
          <p className="text-lg text-gray-800 mb-8">
            Established IPL manufacturers trust iShine for advanced technology integration and scale-up solutions. The IPL hair removal market, valued at $1.5 billion in 2024, is projected to reach $3.2 billion by 2033 at 8.7% CAGR [7].
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <span className="text-3xl font-bold text-[rgb(236,67,113)] block mb-2">$3.2B</span>
              <p className="text-gray-700">IPL Market Size by 2033</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <span className="text-3xl font-bold text-[rgb(236,67,113)] block mb-2">8.7%</span>
              <p className="text-gray-700">Annual Growth Rate</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <span className="text-3xl font-bold text-[rgb(236,67,113)] block mb-2">113%</span>
              <p className="text-gray-700">Market Growth 2024-2033</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Industry Client Portfolio */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-[rgb(0,116,224)] text-center">Cross-Industry Innovation Partners</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Dropshipping & E-commerce */}
            <div className="bg-[#f9f9f9] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-[rgb(0,116,224)]">Dropshipping & E-commerce</h3>
              <p className="text-gray-700 text-sm mb-4">
                Beauty dropshipping represents a $673 billion market with endless product variety and massive audience reach. IPL devices offer high-margin opportunities for dropshipping entrepreneurs.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Low startup costs, high profit margins [10][14]</li>
                <li>• Global beauty industry reaching $463 billion by 2027</li>
                <li>• Custom packaging for brand differentiation</li>
              </ul>
            </div>

            {/* Swimwear & Lifestyle Brands */}
            <div className="bg-[#f9f9f9] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-[rgb(0,116,224)]">Swimwear & Lifestyle Brands</h3>
              <p className="text-gray-700 text-sm mb-4">
                Global swimwear market valued at $22.04 billion in 2025, growing to $30.59 billion by 2032. Swimwear brands leverage IPL devices for complementary product lines.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Natural product category extension</li>
                <li>• 4.79% CAGR market expansion</li>
                <li>• Cross-selling opportunities with existing customers</li>
              </ul>
            </div>

            {/* Retail & Pharmacy Chains */}
            <div className="bg-[#f9f9f9] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-[rgb(0,116,224)]">Retail & Pharmacy Chains</h3>
              <p className="text-gray-700 text-sm mb-4">
                Major retailers like Costco and pharmacy chains prioritize beauty business expansion. Beauty devices offer high-value, space-efficient inventory solutions.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Premium product placement at competitive prices</li>
                <li>• Pharmacy retailers investing in beauty digital experiences</li>
                <li>• Trusted retail partnerships drive consumer confidence</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Beauty Electronics Ecosystem */}
      <section className="py-16 bg-[#f9f9f9]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-[rgb(0,116,224)] text-center">Beauty Electronics Ecosystem</h2>
          <div className="grid md:grid-cols-2 gap-10">
            
            {/* RF & Advanced Devices */}
            <div>
              <h3 className="text-xl font-semibold mb-4">RF Radiofrequency Devices</h3>
              <p className="text-gray-700 mb-4">
                RF beauty equipment market projected to reach $1,488.3 million by 2035 at 10.4% CAGR. DTC brands capitalize on non-invasive aesthetic treatment demand.
              </p>
              <div className="bg-white rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <span className="text-lg font-bold text-[rgb(236,67,113)]">$553.2M</span>
                    <p className="text-xs text-gray-600">2025 Market Value [26]</p>
                  </div>
                  <div>
                    <span className="text-lg font-bold text-[rgb(236,67,113)]">169%</span>
                    <p className="text-xs text-gray-600">Growth by 2035 [26]</p>
                  </div>
                </div>
              </div>
            </div>

            {/* LED & Facial Devices */}
            <div>
              <h3 className="text-xl font-semibold mb-4">LED Masks & Facial Devices</h3>
              <p className="text-gray-700 mb-4">
                LED mask market growing from $334.33 million in 2023 to $933.85 million by 2032. Facial cleansing devices valued at $2,103.4 million in 2025.
              </p>
              <div className="bg-white rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <span className="text-lg font-bold text-[rgb(236,67,113)]">12.09%</span>
                    <p className="text-xs text-gray-600">LED Mask CAGR</p>
                  </div>
                  <div>
                    <span className="text-lg font-bold text-[rgb(236,67,113)]">$2.1B</span>
                    <p className="text-xs text-gray-600">Facial Device Market</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DTC Beauty Electronics Leaders */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6 text-[rgb(0,116,224)]">DTC Beauty Electronics Pioneers</h2>
          <p className="text-lg text-gray-800 mb-8">
            Direct-to-consumer beauty brands embrace technology-driven solutions. DTC beauty market thrives on AI-powered personalization, clean formulations, and innovative device integration.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-[rgb(0,116,224)] mx-auto mb-2" />
              <h4 className="font-semibold mb-1">AI Personalization</h4>
              <p className="text-gray-600 text-sm">Hyper-personalized beauty experiences</p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 text-[rgb(0,116,224)] mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Social Commerce</h4>
              <p className="text-gray-600 text-sm">TikTok and Instagram sales integration</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-[rgb(0,116,224)] mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Influencer Evolution</h4>
              <p className="text-gray-600 text-sm">Micro and nano influencer partnerships</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-[rgb(0,116,224)] mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Subscription Models</h4>
              <p className="text-gray-600 text-sm">Recurring revenue through device-service bundles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain & Procurement Partners */}
      <section className="py-12 bg-[#f9f9f9]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-[rgb(0,116,224)] mb-4">Supply Chain & Procurement Excellence</h3>
          <p className="text-base text-gray-800 mb-6">
            iShine serves buyers and supply chain management companies supporting leading brands [8]. Our streamlined OEM/ODM process eliminates complexity for procurement teams managing multi-category beauty electronics portfolios.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <span className="text-lg font-bold text-[rgb(236,67,113)] block mb-1">1-3 Days</span>
              <p className="text-sm text-gray-600">Sampling Turnaround</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <span className="text-lg font-bold text-[rgb(236,67,113)] block mb-1">2-4 Weeks</span>
              <p className="text-sm text-gray-600">Prototype to Production</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <span className="text-lg font-bold text-[rgb(236,67,113)] block mb-1">100%</span>
              <p className="text-sm text-gray-600">Customization Capability</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[rgb(236,67,113)] to-[rgb(125,0,99)] py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
            Ready to Accelerate Your Beauty Electronics Strategy?
          </h2>
          <p className="text-lg text-white mb-8">
            Join industry leaders leveraging iShine's technical expertise for rapid market entry and category expansion in the $79.87 billion beauty tech ecosystem.
          </p>
          <button
            className="bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Partner with iShine
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

export default Industries;
