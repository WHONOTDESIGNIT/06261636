import React from 'react';
import { Truck, LayoutDashboard } from 'lucide-react';
import ContactFormA from '../../components/Forms/ContactFormA';

const Dropshipping: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgb(30,157,139)] to-[rgb(36,151,144)] text-white py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Truck className="w-16 h-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Dropshipping Service</h1>
          <p className="text-xl mb-8 text-gray-100">
            Sell IPL devices worldwide—without inventory, warehousing, or shipping. iShine’s dropshipping lets you focus on sales while we handle fulfillment.
          </p>
        </div>
      </section>

      {/* What is Dropshipping */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-[rgb(0,116,224)] text-center">What is Dropshipping?</h2>
          <p className="text-lg text-gray-800 mb-4">
            Dropshipping is a retail fulfillment model where you sell products online without holding any inventory. When a customer places an order, you forward it to your supplier—who ships the product directly to your customer. You act as the seller of record, manage your store and customer experience, while your supplier handles storage, packing, and delivery.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="bg-[#f9f9f9] rounded-xl p-6 text-center">
              <span className="text-[rgb(0,116,224)] font-bold text-xl">1</span>
              <h3 className="font-semibold mt-2 mb-1">Set Up Your Store</h3>
              <p className="text-gray-700 text-sm">List iShine IPL devices in your online store. Set your prices and start selling—no inventory needed.</p>
            </div>
            <div className="bg-[#f9f9f9] rounded-xl p-6 text-center">
              <span className="text-[rgb(0,116,224)] font-bold text-xl">2</span>
              <h3 className="font-semibold mt-2 mb-1">Customer Orders</h3>
              <p className="text-gray-700 text-sm">Customers place orders and pay you directly. You forward the order details to iShine for fulfillment.</p>
            </div>
            <div className="bg-[#f9f9f9] rounded-xl p-6 text-center">
              <span className="text-[rgb(0,116,224)] font-bold text-xl">3</span>
              <h3 className="font-semibold mt-2 mb-1">We Ship for You</h3>
              <p className="text-gray-700 text-sm">iShine packs and ships the product directly to your customer, using your branding and packing slip.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Considerations */}
      <section className="py-12 bg-[#f9f9f9]">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h4 className="text-xl font-bold text-[rgb(0,116,224)] mb-2">Why Choose Dropshipping?</h4>
            <ul className="text-gray-800 space-y-2 list-disc list-inside text-base">
              <li>Low startup costs—no inventory investment or warehousing fees[2][3][4][7][8]</li>
              <li>Easy to launch and scale—just add products and start selling[2][3][4][7][8]</li>
              <li>Location independent—run your business from anywhere[2][3][4][7][8]</li>
              <li>Wide product selection—test and add new items with no risk[2][3][4][7][8]</li>
              <li>Automated fulfillment—iShine handles packing, shipping, and tracking[5][6]</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-[rgb(0,116,224)] mb-2">What to Consider</h4>
            <ul className="text-gray-800 space-y-2 list-disc list-inside text-base">
              <li>Lower profit margins due to competition[2][3][4][7][8]</li>
              <li>Less control over product quality and shipping speed[2][3][4][7][8]</li>
              <li>Inventory and availability depend on supplier[2][3][4][7][8]</li>
              <li>Branding and customization options may be limited[2][3][4][7][8]</li>
            </ul>
          </div>
        </div>
      </section>

      {/* iShine Dashboard Automation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <LayoutDashboard className="w-12 h-12 mx-auto mb-4 text-[rgb(0,116,224)]" />
          <h2 className="text-2xl font-bold mb-4 text-[rgb(0,116,224)]">Automate Dropshipping with iShine Dashboard</h2>
          <p className="text-lg text-gray-800 mb-4">
            With iShine, you can manage your dropshipping business in one place. Our dashboard lets you:
          </p>
          <ul className="text-gray-800 mb-6 space-y-2 text-base text-left inline-block">
            <li>• Sync orders from your Shopify store or other platforms</li>
            <li>• Place and track orders with one click</li>
            <li>• Automatically forward orders to iShine for fulfillment</li>
            <li>• Receive tracking numbers and shipping updates instantly</li>
            <li>• Manage after-sales service and returns</li>
          </ul>
          <p className="text-base text-gray-700">
            Just log in to your dashboard, select the products, and let iShine handle the rest—from order to delivery.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[rgb(236,67,113)] to-[rgb(125,0,99)] py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
            Ready to Start Dropshipping IPL Devices?
          </h2>
          <p className="text-lg text-white mb-8">
            Get in touch to activate your iShine dashboard and unlock seamless, automated fulfillment for your business.
          </p>
          <button
            className="bg-[rgb(0,116,224)] hover:bg-[rgb(0,89,179)] text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Get Started
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

export default Dropshipping;
