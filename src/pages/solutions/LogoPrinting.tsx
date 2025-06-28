import React from 'react';
import { Brush, PaintBucket } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

// 对比图可以用两张占位图片，实际可替换为真实工艺对比照片
const compareImages = [
  {
    label: 'UV Printing',
    img: '/images/logo-uv-printing.jpg', // 占位图片路径
    desc: 'Affordable, fast, suitable for simple logos and small batches. Color vibrancy is good, but detail and texture are less refined than screen printing. Best for 1-2 color designs on curved IPL device bodies.[2][3][9][10]',
  },
  {
    label: 'Screen Printing',
    img: '/images/logo-screen-printing.jpg', // 占位图片路径
    desc: 'Premium finish, crisp lines, and excellent durability—ideal for brands seeking the best tactile and visual effect. Slightly higher cost, but preferred for orders over 20 units. Supports 1-2 color logos on curved surfaces.[4][6][9]',
  },
];

const LogoPrinting: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgb(30,157,139)] to-[rgb(36,151,144)] text-white py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Brush className="w-16 h-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Custom Logo Printing</h1>
          <p className="text-xl mb-8 text-gray-100">
            iShine offers professional logo customization for IPL devices—choose UV printing for speed and value, or screen printing for premium, lasting results.
          </p>
        </div>
      </section>

      {/* Printing Methods Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {compareImages.map((item) => (
              <div key={item.label} className="bg-[#f9f9f9] rounded-2xl shadow-sm p-8 flex flex-col items-center text-center">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-[220px] h-[160px] object-contain mb-4 rounded-xl border"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
                  {item.label}
                  {item.label === 'UV Printing' ? (
                    <PaintBucket className="w-6 h-6 text-[rgb(0,116,224)]" />
                  ) : (
                    <Brush className="w-6 h-6 text-[rgb(0,116,224)]" />
                  )}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Info & FAQ */}
      <section className="py-10 bg-[#f9f9f9]">
        <div className="max-w-3xl mx-auto px-4 space-y-6 text-center">
          <div>
            <span className="font-bold text-[rgb(0,116,224)]">Supported Colors:</span> 1 or 2 colors per logo.
          </div>
          <div>
            <span className="font-bold text-[rgb(0,116,224)]">Surface Compatibility:</span> Both methods work on the slightly curved IPL device body.
          </div>
          <div>
            <span className="font-bold text-[rgb(0,116,224)]">Lead Time:</span> 1–3 business days for most orders.
          </div>
          <div>
            <span className="font-bold text-[rgb(0,116,224)]">MOQ for Screen Printing:</span> Best value for orders over 20 units.
          </div>
          <div>
            <span className="font-bold text-[rgb(0,116,224)]">Recommendation:</span> Choose UV printing for fast, affordable branding; choose screen printing for the most premium finish and tactile feel.
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[rgb(236,67,113)] to-[rgb(125,0,99)] py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
            Ready to Brand Your IPL Device?
          </h2>
          <p className="text-lg text-white mb-8">
            Our team will help you choose the best logo printing method for your project—ensuring your brand stands out.
          </p>
          <button
            className="bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Get a Quote
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

export default LogoPrinting;
