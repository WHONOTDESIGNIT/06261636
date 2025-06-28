import React from 'react';
import { Layers3, Smartphone, Box, FileText, Shield, Glasses, Gift } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const customOptions = [
  {
    icon: <Smartphone className="w-8 h-8 text-[rgb(0,116,224)]" />,
    title: 'Custom App Interface',
    desc: `Personalize your IPL device's app UI—colors, icons, onboarding, and even treatment logic—aligned with your brand's digital DNA.`,
  },
  {
    icon: <Shield className="w-8 h-8 text-[rgb(0,116,224)]" />,
    title: 'Device UI & Digital Display',
    desc: `Customize the IPL device's digital screen, boot animation, and interactive interface. Your logo, your welcome message, your user experience.`,
  },
  {
    icon: <Box className="w-8 h-8 text-[rgb(0,116,224)]" />,
    title: 'Color Box & Packaging',
    desc: 'Choose from luxury magnetic boxes, eco-friendly cartons, or retail-ready packaging—all with custom graphics, inserts, and finishes.',
  },
  {
    icon: <FileText className="w-8 h-8 text-[rgb(0,116,224)]" />,
    title: 'Manuals & Thank You Cards',
    desc: 'We design and print branded user manuals, quick start guides, and thank you cards—every touchpoint reflects your brand.',
  },
  {
    icon: <Shield className="w-8 h-8 text-[rgb(0,116,224)]" />,
    title: 'Logo Printing',
    desc: 'High-precision UV or screen printing for your logo on the IPL device, accessories, and packaging. 1-2 color options, perfect for curved surfaces.',
  },
  {
    icon: <Glasses className="w-8 h-8 text-[rgb(0,116,224)]" />,
    title: 'Custom Accessories',
    desc: 'Branded goggles, molded trays, adapters, and more—every detail can be tailored for your cosmetic line.',
  },
  {
    icon: <Gift className="w-8 h-8 text-[rgb(0,116,224)]" />,
    title: 'Branded Merchandise',
    desc: 'Expand your brand: LED beauty masks, T-shirts, baseball caps, digital cameras, and more—turn your IPL project into a lifestyle ecosystem.',
  },
];

const BrandCustomization: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgb(30,157,139)] to-[rgb(36,151,144)] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Layers3 className="w-16 h-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Full-Chain Brand Customization</h1>
          <p className="text-xl mb-8 text-gray-100">
            iShine empowers cosmetics brands to own every detail—from app UI to packaging, device interface to accessories, and even lifestyle merchandise. Build a premium, and differentiated brand experience for your customers.
          </p>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          {customOptions.map((item) => (
            <div key={item.title} className="bg-[#f9f9f9] rounded-2xl shadow-sm p-8 flex flex-col items-center text-center hover:shadow-md transition">
              {item.icon}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why B2B Cosmetics Brands Choose iShine */}
      <section className="py-12 bg-[#f9f9f9]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl font-bold text-[rgb(0,116,224)] mb-4">Why Leading Cosmetics Brands Partner with iShine</h2>
          <ul className="space-y-2 text-gray-800 text-base text-left inline-block">
            <li>• Complete OEM/ODM solution: from concept to shelf, all in one place</li>
            <li>• Flexible MOQ: fast sampling, small batch launch, and scalable production</li>
            <li>• Fast turnaround: most customizations delivered in 3–7 business days</li>
            <li>• Regulatory support: packaging, manuals, and labeling compliant with global standards</li>
            <li>• Brand protection: every detail, from device UI to packaging, is exclusive to your brand</li>
            <li>• Lifestyle ecosystem: extend your influence beyond devices with branded merchandise</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[rgb(236,67,113)] to-[rgb(125,0,99)] py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
            Ready to Create Your Own Cosmetic Device Brand?
          </h2>
          <p className="text-lg text-white mb-8">
            Connect with our technical team to explore full-chain customization—make your next product launch truly your own.
          </p>
          <button
            className="bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Get a Customization Proposal
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

export default BrandCustomization;