import React from 'react';
import { PackageSearch } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

// 八种主流包装盒型
const boxTypes = [
  { label: 'Magnetic Box', img: 'magnetic.jpg', desc: 'Premium, elegant, fully customizable. Supports hot stamping, embossing, soft touch, eco-paper, and foam/cardboard inserts for secure display.' },
  { label: 'Two-Piece Box', img: '/homeimages/home-ipl-hair-removal-device-packaging-process.webp', desc: 'Classic rigid box, sturdy and protective, ideal for luxury and retail packaging. Can be branded with inserts.' },
  { label: 'Drawer Box', img: 'drawer.jpg', desc: 'Slide-out structure that elevates unboxing and adds protection.' },
  { label: 'Folding Carton', img: 'folding.jpg', desc: 'Lightweight & cost-effective for retail and e-commerce; easy to print & assemble.' },
  { label: 'Gable Box', img: 'gable.jpg', desc: 'Unique portable shape—perfect for gifting and limited editions.' },
  { label: 'Book Style Box', img: 'book.jpg', desc: 'Opens like a book, delivering premium feel and ample branding space.' },
  { label: 'Collapsible Box', img: 'collapsible.jpg', desc: 'Space-saving for shipping, easy to assemble—ideal for dropshipping.' },
  { label: 'Pillow Box', img: 'pillow.jpg', desc: 'Compact & stylish—great for accessories, samples, or travel kits.' },
];

const scenarios = [
  { title: 'Dropshipping & E-commerce', img: 'dropshipping.jpg', desc: 'Volume-efficient, protective packaging that minimises shipping cost and prevents transit damage. Collapsible & folding boxes ready for global fulfilment.' },
  { title: 'Retail & Supermarket', img: 'retail.jpg', desc: 'Eye-catching shelf presence that turns "on shelf" into "off shelf". Bold colours, unique structures, and premium finishes drive impulse purchase.' },
  { title: 'Eco-Friendly & Skin-Friendly', img: 'eco.jpg', desc: 'FSC-certified, recyclable, and skin-safe materials for brands focused on sustainability and consumer safety.' },
  { title: 'Luxury & Gift Packaging', img: 'luxury.jpg', desc: 'Hot stamping, embossing, and premium textures deliver a luxury unboxing experience—perfect for high-end brands & gifting campaigns.' },
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
            <div key={box.label} className="bg-[#f9f9f9] rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition flex flex-col">
              <img src={box.img} alt={box.label} className="w-full h-40 object-cover" />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">{box.label}</h3>
                <p className="text-gray-700 text-sm flex-1">{box.desc}</p>
                <a href="#" className="mt-4 inline-block text-[rgb(0,116,224)] font-semibold hover:text-[rgb(0,89,179)]">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions for Different Scenarios */}
      <section className="py-12 bg-[#f9f9f9]">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          {scenarios.map((sc) => (
            <div key={sc.title} className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col hover:shadow-md transition">
              <img src={sc.img} alt={sc.title} className="w-full h-40 object-cover" />
              <div className="p-6 flex-1 flex flex-col text-center">
                <h4 className="text-xl font-bold text-[rgb(0,116,224)] mb-2">{sc.title}</h4>
                <p className="text-gray-800 flex-1">{sc.desc}</p>
                <a href="#" className="mt-4 inline-block text-[rgb(0,116,224)] font-semibold hover:text-[rgb(0,89,179)]">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Info & FAQ */}
      <section className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-4 space-y-6 text-center">
          <div>
            <span className="font-bold text-[rgb(0,116,224)]">Lead Time:</span> 3–7 business days for most custom packaging orders.
          </div>
          <div>
            <span className="font-bold text-[rgb(0,116,224)]">Design Principle:</span> Packaging is a purchase command—our retail boxes are made to "sell at first sight."
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
