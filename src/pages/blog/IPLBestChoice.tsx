import React from 'react';
import { Link } from 'react-router-dom';
import ContactFormA from '../../components/Forms/ContactFormA';

const IPLBestChoice: React.FC = () => (
  <div className="min-h-screen bg-white pt-20">
    {/* Hero Section */}
    <section className="bg-blue-900 text-white py-10 border-b-4 border-blue-500">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Why IPL Home Hair Removal Devices Are the Best Choice Among All Hair Removal Tools</h1>
          <p className="text-lg text-blue-100 mb-6">Discover why IPL is the most effective, comfortable, and convenient solution for long-term hair removal at home—backed by science and real user experience.</p>
          <a href="https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition">Learn More from AAD</a>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="https://pplx-res.cloudinary.com/image/upload/v1751621231/gpt4o_images/me9zrddzskxi8xsvr1tj.png" alt="IPL Home Device" className="rounded-xl shadow-lg w-full max-w-xs" />
        </div>
      </div>
    </section>

    {/* Comparison Table */}
    <section className="py-10 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Hair Removal Methods Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg shadow">
            <thead>
              <tr className="bg-blue-100 text-blue-900">
                <th className="py-2 px-4">Method</th>
                <th className="py-2 px-4">Pros</th>
                <th className="py-2 px-4">Cons</th>
                <th className="py-2 px-4">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 font-semibold">IPL Home Device</td>
                <td className="py-2 px-4">Long-lasting, low pain, convenient, safe</td>
                <td className="py-2 px-4">Requires multiple sessions, higher initial cost</td>
                <td className="py-2 px-4">Long-term, pain-sensitive users</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Waxing</td>
                <td className="py-2 px-4">Immediate results, removes short hair</td>
                <td className="py-2 px-4">Painful, risk of irritation, needs salon or skill</td>
                <td className="py-2 px-4">High pain tolerance</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Hair Removal Cream</td>
                <td className="py-2 px-4">Gentle, easy to use</td>
                <td className="py-2 px-4">Temporary, may cause allergies</td>
                <td className="py-2 px-4">Sensitive skin, quick fix</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Razor</td>
                <td className="py-2 px-4">Cheap, fast, accessible</td>
                <td className="py-2 px-4">Cuts, frequent use, hair grows back thicker</td>
                <td className="py-2 px-4">Emergency, travel</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Electric Shaver</td>
                <td className="py-2 px-4">Painless, easy</td>
                <td className="py-2 px-4">Only surface hair, may leave stubble</td>
                <td className="py-2 px-4">Busy, pain-averse users</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Laser Hair Removal</td>
                <td className="py-2 px-4">Medical-grade, long-lasting</td>
                <td className="py-2 px-4">Expensive, needs clinic, can be painful</td>
                <td className="py-2 px-4">Budget, professional results</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* Why IPL Section */}
    <section className="py-10 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Why Choose IPL Home Hair Removal?</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li><strong>Long-lasting Results:</strong> IPL targets the hair follicle, reducing regrowth for months after a full course. <a href="https://www.healthline.com/health/beauty-skin-care/hair-removal-methods" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">[Healthline]</a></li>
          <li><strong>Minimal Pain:</strong> Unlike waxing, IPL is gentle and most users report only a mild tingling sensation.</li>
          <li><strong>Safe for Home Use:</strong> Modern IPL devices include skin sensors and adjustable energy levels for maximum safety.</li>
          <li><strong>Cost-Effective:</strong> While the initial investment is higher, IPL saves money over time compared to repeated salon visits.</li>
          <li><strong>Convenient:</strong> Use anytime at home, no appointments needed.</li>
        </ul>
      </div>
    </section>

    {/* User Testimonials */}
    <section className="py-10 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Real User Stories</h2>
        <div className="space-y-6">
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">“After three months with my IPL device, my underarm and leg hair is much finer and sparser. The process is almost painless. Highly recommended!”<br /><span className="block mt-2 text-sm text-gray-500">— Beauty Lab, Social Media Review</span></blockquote>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">“IPL is a game changer for sensitive skin. The cooling mode makes it super comfortable, and the results are better than razors or creams.”<br /><span className="block mt-2 text-sm text-gray-500">— Dr. Wang, Dermatologist</span></blockquote>
        </div>
      </div>
    </section>

    {/* Internal Links & Resources */}
    <section className="py-10 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl font-bold mb-4 text-gray-900">Explore More</h2>
        <ul className="list-inside list-disc space-y-2">
          <li><Link to="/how-to-use" className="text-blue-600 underline">How to Use IPL Devices</Link></li>
          <li><Link to="/ipl-hair-removal" className="text-blue-600 underline">Our IPL Product Range</Link></li>
          <li><Link to="/service-support/knowledge-base" className="text-blue-600 underline">Hair Removal FAQs</Link></li>
          <li><Link to="/blog/news-insights" className="text-blue-600 underline">Latest Technology Insights</Link></li>
        </ul>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-10 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Is IPL safe for all skin types?</h3>
            <p>Most IPL devices are safe for light to medium skin tones and dark hair. Always check your device's guidelines and consult a dermatologist if unsure.</p>
          </div>
          <div>
            <h3 className="font-semibold">How long does it take to see results?</h3>
            <p>Noticeable reduction is usually seen after 3-4 sessions, with optimal results after a full course (6-12 sessions).</p>
          </div>
          <div>
            <h3 className="font-semibold">Does IPL hurt?</h3>
            <p>Most users describe IPL as mildly tingling or warm, much less painful than waxing.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Form */}
    <div className="bg-[#f9f9f9] py-16">
      <ContactFormA />
    </div>

    {/* Recommended Blog Section */}
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Recommended Blog</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <img src="/images/blog/ipl-best-choice.jpg" alt="IPL Best Choice" className="rounded-xl shadow-lg w-full max-w-xs" />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-2">Why IPL Home Hair Removal Devices Are the Best Choice Among All Hair Removal Tools</h3>
            <p className="mb-4">Discover why IPL is the most effective, comfortable, and convenient solution for long-term hair removal at home—backed by science and real user experience.</p>
            <Link to="/blog/ipl-best-choice" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition">Read the Full Article</Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default IPLBestChoice; 