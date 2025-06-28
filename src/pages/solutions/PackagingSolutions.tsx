import React from 'react';
import { PackageSearch } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

// 八种主流包装盒型
const boxTypes = [
  { label: 'Magnetic Box', desc: 'Premium, elegant, fully customizable. Supports hot stamping, embossing, soft touch, eco-paper, and foam/cardboard inserts for secure display.[3][9]' },
  { label: 'Two-Piece Box (Heaven & Earth Box)', desc: 'Classic rigid box, sturdy and protective, ideal for luxury and retail packaging. Can be customized with branding and inserts.[4]' },
  { label: 'Drawer Box', desc: 'Slide-out structure, adds unboxing experience and extra protection.' },
  { label: 'Folding Carton', desc: 'Lightweight, cost-effective, suitable for retail and e-commerce, easy to print and assemble.[11]' },
  { label: 'Gable Box', desc: 'Unique shape, portable, ideal for gifting and limited editions.[10]' },
  { label: 'Book Style Box', desc: 'Opens like a book, offers premium feel and ample branding space.' },
  { label: 'Collapsible/Foldable Box', desc: 'Space-saving for shipping, easy to assemble, suitable for dropshipping.' },
  { label: 'Pillow Box', desc: 'Compact, stylish, best for accessories, samples or travel kits.' },
];

const PackagingSolutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgb(30,157,139)] to-[rgb(36,151,144)] text-white py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <PackageSearch className="w-16 h-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Custom Packaging Solutions</h1>
          <p className="text-xl mb-8 text-gray-100">
            iShine delivers branded packaging for IPL devices—magnetic boxes, two-piece boxes, and eight+ styles. We tailor packaging for dropshipping, retail, eco, and luxury needs.
          </p>
        </div>
      </section>

      {/* Box Types */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-4 gap-10">
          {boxTypes.map((box) => (
            <div key={box.label} className="bg-[#f9f9f9] rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
              <div className="w-16 h-16 mb-4 bg-[rgb(0,116,224)] rounded-full flex items-center justify-center text-white font-bold text-xl">{box.label[0]}</div>
              <h3 className="text-lg font-semibold mb-2">{box.label}</h3>
              <p className="text-gray-700 text-sm">{box.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions for Different Scenarios */}
      <section className="py-12 bg-[#f9f9f9]">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-10 text-center">
          <div>
            <h4 className="text-xl font-bold text-[rgb(0,116,224)] mb-2">Dropshipping & E-commerce</h4>
            <p className="text-gray-800">
              We design volume-efficient, protective packaging to minimize international shipping costs and prevent damage in transit. Collapsible, folding, and compact boxes available.[5][6][7]
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-[rgb(0,116,224)] mb-2">Retail & Supermarket</h4>
            <p className="text-gray-800">
              For retail shelves, we create eye-catching, brand-driven packaging that turns “on shelf” into “off shelf.” Bold colors, unique structures, and premium finishes drive impulse purchases.[7][8]
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-[rgb(0,116,224)] mb-2">Eco-Friendly & Skin-Friendly</h4>
            <p className="text-gray-800">
              FSC-certified, recyclable, and skin-friendly materials available for brands focused on sustainability and consumer safety.[3][9]
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-[rgb(0,116,224)] mb-2">Luxury & Gift Packaging</h4>
            <p className="text-gray-800">
              Hot stamping, embossing, and premium textures for a luxury unboxing experience. Ideal for high-end brands and gifting campaigns.[3][9]
            </p>
          </div>
        </div>
      </section>

      {/* Key Info & FAQ */}
      <section className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-4 space-y-6 text-center">
          <div>
            <span className="font-bold text-[rgb(0,116,224)]">Lead Time:</span> 3–7 business days for most custom packaging orders.
          </div>
          <div>
            <span className="font-bold text-[rgb(0,116,224)]">Design Principle:</span> Packaging is a purchase command—our retail boxes are made to “sell at first sight.”
          </div>
          <div>
            <span className="font-bold text-[rgb(0,116,224)]">Customization:</span> All box types support custom logo, color, insert, and finish.
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[rgb(236,67,113)] to-[rgb(125,0,99)] py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
            Ready to Elevate Your Brand Packaging?
          </h2>
          <p className="text-lg text-white mb-8">
            Our team will help you create packaging that protects, impresses, and sells—tailored for your business model.
          </p>
          <button
            className="bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Get a Packaging Proposal
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

export default PackagingSolutions;
