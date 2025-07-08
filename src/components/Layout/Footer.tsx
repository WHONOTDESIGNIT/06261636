import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ishine-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-ishine-blue-700 font-bold text-sm">iS</span>
              </div>
              <span className="text-xl font-bold">iShine</span>
            </div>
            <p className="text-gray-300 mb-4">
              Company Info
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/ipl-hair-removal" className="hover:text-white transition-colors">IPL Hair Removal</Link></li>
              <li><Link to="/accessories" className="hover:text-white transition-colors">Accessories</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/service-support/after-sales" className="hover:text-white transition-colors">After-Sales Service</Link></li>
              <li><Link to="/service-support/manufacturing" className="hover:text-white transition-colors">IPL Manufacturing</Link></li>
              <li><Link to="/service-support/pricing-guide" className="hover:text-white transition-colors">Buying Guide</Link></li>
              <li><Link to="/service-support/help-center" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about/company" className="hover:text-white transition-colors">About iShine</Link></li>
              <li><Link to="/about/brand-story" className="hover:text-white transition-colors">Brand Story</Link></li>
              <li><Link to="/about/quality" className="hover:text-white transition-colors">Quality</Link></li>
              <li><Link to="/blog/news-insights" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Tel: <a href="tel:+8615900283962" className="hover:text-white transition-colors">+86-15900283962</a></li>
              <li>WhatsApp: <a href="https://wa.me/8615012891148" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+86-15012891148</a></li>
              <li>Email: <a href="mailto:service@ishineco.com" className="hover:text-white transition-colors">service@ishineco.com</a></li>
              <li>ADDRESS: 208 Room, 4 Building, No.45, Makan Road, Xi'li Street, Shenzhen, Guangdong, China, 518071</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-300 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-300 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 