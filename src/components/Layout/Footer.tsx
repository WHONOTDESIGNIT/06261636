import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-ishine-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-ishine-blue-700 font-bold text-sm">iS</span>
              </div>
              <span className="text-xl font-bold">iShine</span>
            </div>
            <p className="text-gray-300 mb-4">
              {t('footer.companyInfo')}
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
            <h3 className="font-semibold mb-4">{t('footer.products')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/ipl-hair-removal" className="hover:text-white transition-colors">{t('footer.iplHairRemoval')}</Link></li>
              <li><Link to="/accessories" className="hover:text-white transition-colors">{t('footer.accessories')}</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">{t('footer.gallery')}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/service-support/after-sales" className="hover:text-white transition-colors">{t('footer.afterSalesService')}</Link></li>
              <li><Link to="/service-support/manufacturing" className="hover:text-white transition-colors">{t('footer.iplManufacturing')}</Link></li>
              <li><Link to="/service-support/pricing-guide" className="hover:text-white transition-colors">{t('footer.buyingGuide')}</Link></li>
              <li><Link to="/service-support/help-center" className="hover:text-white transition-colors">{t('footer.helpCenter')}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about/company" className="hover:text-white transition-colors">{t('footer.aboutiShine')}</Link></li>
              <li><Link to="/about/brand-story" className="hover:text-white transition-colors">{t('footer.brandStory')}</Link></li>
              <li><Link to="/about/quality" className="hover:text-white transition-colors">{t('footer.quality')}</Link></li>
              <li><Link to="/about/blog" className="hover:text-white transition-colors">{t('footer.blog')}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            {t('footer.allRightsReserved')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-300 hover:text-white text-sm transition-colors">
              {t('footer.privacyPolicy')}
            </Link>
            <Link to="/terms-of-service" className="text-gray-300 hover:text-white text-sm transition-colors">
              {t('footer.termsOfService')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;