import React from 'react';
import { motion } from 'framer-motion';
import {
  Headphones,
  ListChecks,
  Shield,
  RotateCcw,
  DollarSign,
  FileText,
  Info
} from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const scenarios: string[] = [
  'Not reviewing the user manual thoroughly before use',
  'Using the device without confirming skin/hair type suitability',
  'Selecting an energy level beyond personal skin tolerance',
  'Unstable local voltage affecting device performance',
  'Blade-induced scratches during pre-treatment',
  'Device not fully contacting skin or not held at a 90° angle',
  'Sensitive skin experiencing pronounced discomfort',
  'Product or packaging damaged during shipping',
  'Skipping pre-use shaving, leading to hair burns',
  'Not wearing protective goggles, resulting in eye discomfort or injury',
  'Other unforeseen causes'
];

const bestPractices: string[] = [
  'Read the User Manual: Review all guidelines and contraindications before first use.',
  'Check Suitability: Confirm your skin and hair type match device recommendations.',
  'Start Low, Go Slow: Always begin with the lowest energy setting; increase only if comfortable.',
  'Voltage Check: Ensure your local voltage matches device requirements.',
  'Pre-Shave Properly: Shave treatment areas to avoid hair burns.',
  'Wear Safety Goggles: Always use provided eye protection.',
  'Correct Device Angle: Maintain full contact and a 90° angle between device and skin.',
  'Gentle Handling: Avoid using blades or accessories that may cause injury.',
  'Unbox Carefully: Inspect for shipping damage before use.',
  'For Sensitive Skin: Test on a small area first; discontinue if discomfort occurs.'
];

const AfterSalesService: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 overflow-x-hidden">
      {/* ---------------------------- HERO ---------------------------- */}
      <section className="bg-gradient-to-r from-ishine-blue-500 to-ishine-teal-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Headphones className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Satisfaction, Guaranteed</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-100">
              Experience risk-free B2B partnership with iShine. Our commitment: comprehensive after-sales support, transparent policies, and industry-leading warranty coverage for all IPL hair removal devices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --------------- COMMON ISSUES & PREVENTION ---------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-ishine-blue-500"
          >
            Common After-Sales Issues & Prevention
          </motion.h2>

          {/* Typical scenarios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
                <ListChecks className="w-6 h-6 text-ishine-teal-500" /> Typical After-Sales Scenarios
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                {scenarios.map((item) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* How to avoid */}
            <div>
              <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
                <Shield className="w-6 h-6 text-ishine-teal-500" /> How to Avoid These Issues
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                {bestPractices.map((item) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/how-to-use-guide"
              className="inline-block bg-[rgb(222,117,16)] hover:bg-[rgb(198,104,14)] text-white font-semibold py-3 px-8 rounded-lg shadow transition-colors duration-300"
            >
              How to Use Guide
            </a>
          </div>
        </div>
      </section>

      {/* ------------ OUR RESPONSE & SERVICE COMMITMENTS ---------- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-ishine-blue-500"
          >
            Our Response & Service Commitments
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* 1-Year Warranty */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg shadow p-6 text-center"
            >
              <Shield className="w-10 h-10 mx-auto text-ishine-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">1-Year Limited Warranty</h3>
              <p className="text-gray-600 text-sm">
                If your device malfunctions due to manufacturing defects within one year, we will repair or replace it at no cost.
              </p>
            </motion.div>

            {/* 365-Day Return */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow p-6 text-center"
            >
              <RotateCcw className="w-10 h-10 mx-auto text-ishine-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Risk-Free 365-Day Return Policy</h3>
              <p className="text-gray-600 text-sm">
                Try iShine beauty tools risk-free. If dissatisfied, return the product within 365 days for a refund.
              </p>
            </motion.div>

            {/* 90-Day Money Back */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg shadow p-6 text-center"
            >
              <DollarSign className="w-10 h-10 mx-auto text-ishine-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">90-Day Money-Back Guarantee</h3>
              <p className="text-gray-600 text-sm">
                Not satisfied within the first 90 days? Contact us for a full refund. No questions asked.
              </p>
            </motion.div>
          </div>

          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto text-sm">
            Note: The 90-day money-back guarantee is for product dissatisfaction. The 1-year warranty covers manufacturing defects or malfunctions during normal use. Refunds are not available after 90 days, but warranty coverage continues for the remainder of the year.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="/warranty-claim"
              className="bg-[rgb(0,102,161)] hover:bg-[rgb(0,86,136)] text-white font-semibold py-3 px-8 rounded-lg shadow transition-colors duration-300"
            >
              Warranty Claim Form
            </a>
            <a
              href="/return-request"
              className="bg-[rgb(0,102,161)] hover:bg-[rgb(0,86,136)] text-white font-semibold py-3 px-8 rounded-lg shadow transition-colors duration-300"
            >
              Return Request Form
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- RETURNS & TERMS ---------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ishine-blue-500 mb-6 text-center">Returns & Terms</h2>
          <div className="space-y-6 text-gray-700">
            <p><strong>Return Window:</strong> 90 days from delivery for money-back guarantee.</p>
            <p><strong>Process:</strong> Contact us before returning any product. Unauthorized returns may be refused.</p>
            <p><strong>Exclusions:</strong> Orders via Tapjoy or in-game currency are final sale and not eligible for return.</p>
            <p><strong>Refunds:</strong> Processed to the original payment method upon receipt and inspection. Allow up to 30 days for credit processing.</p>
            <p><strong>Warranty Exclusions:</strong> Damage from misuse, unauthorized modifications, accidental damage, or failure to follow instructions is not covered. Issues arising from not following device suitability guidelines or improper operation are excluded from warranty coverage.</p>
          </div>
          <div className="text-center mt-10">
            <a
              href="/terms-and-conditions"
              className="inline-flex items-center gap-2 text-ishine-blue-500 hover:text-ishine-teal-500 font-semibold transition-colors duration-300"
            >
              <FileText className="w-5 h-5" /> Full Terms & Conditions
            </a>
          </div>
        </div>
      </section>

      {/* --------------- DATA-DRIVEN INSIGHTS ---------------- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ishine-blue-500 mb-8">Data-Driven Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow p-8"
            >
              <Info className="w-10 h-10 mx-auto text-ishine-teal-500 mb-4" />
              <p className="text-gray-700 text-lg">
                Over <span className="font-bold">80%</span> of reported device failures are linked to incorrect operation or ignoring suitability guidelines.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg shadow p-8"
            >
              <Info className="w-10 h-10 mx-auto text-ishine-teal-500 mb-4" />
              <p className="text-gray-700 text-lg">
                Customer satisfaction is highest when users follow the recommended start-low, go-slow approach and consult our support team before troubleshooting independently.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- NEED HELP ---------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ishine-blue-500 mb-6">Need Help? We're Here.</h2>
          <p className="text-gray-700 mb-8">
            Our technical support team responds within 24 hours. For immediate guidance, consult our Knowledge Base or reach out directly.
          </p>
          <a
            href="/contact-support"
            className="inline-block bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300"
          >
            Contact Support
          </a>
        </div>
      </section>

      {/* ---------------- CONTACT FORM ---------------- */}
      <ContactFormA />
    </div>
  );
};

export default AfterSalesService;