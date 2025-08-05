import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const Sitemap: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          {t('sitemap.title')}
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Pages */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {t('sitemap.mainPages')}
            </h2>
            <ul className="space-y-2">
              <li><Link href="/" className="text-blue-600 hover:text-blue-800">{t('sitemap.home')}</Link></li>
              <li><Link href="/about" className="text-blue-600 hover:text-blue-800">{t('sitemap.about')}</Link></li>
              <li><Link href="/ipl-hair-removal" className="text-blue-600 hover:text-blue-800">{t('sitemap.iplHairRemoval')}</Link></li>
              <li><Link href="/solutions" className="text-blue-600 hover:text-blue-800">{t('sitemap.solutions')}</Link></li>
              <li><Link href="/contact" className="text-blue-600 hover:text-blue-800">{t('sitemap.contact')}</Link></li>
            </ul>
          </div>

          {/* IPL Products */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {t('sitemap.iplProducts')}
            </h2>
            <ul className="space-y-2">
              <li><Link href="/ipl/emerald-ipl" className="text-blue-600 hover:text-blue-800">{t('sitemap.emeraldIpl')}</Link></li>
              <li><Link href="/ipl/ice-cooling-ipl" className="text-blue-600 hover:text-blue-800">{t('sitemap.iceCoolingIpl')}</Link></li>
              <li><Link href="/ipl/ice-feeling-ipl" className="text-blue-600 hover:text-blue-800">{t('sitemap.iceFeelingIpl')}</Link></li>
              <li><Link href="/ipl/handheld-ipl" className="text-blue-600 hover:text-blue-800">{t('sitemap.handheldIpl')}</Link></li>
              <li><Link href="/ipl/battery-powered-ipl" className="text-blue-600 hover:text-blue-800">{t('sitemap.batteryPoweredIpl')}</Link></li>
              <li><Link href="/ipl/skin-sensor-ipl" className="text-blue-600 hover:text-blue-800">{t('sitemap.skinSensorIpl')}</Link></li>
              <li><Link href="/ipl/ai-powered-ipl" className="text-blue-600 hover:text-blue-800">{t('sitemap.aiPoweredIpl')}</Link></li>
              <li><Link href="/ipl/dual-lamp-ipl" className="text-blue-600 hover:text-blue-800">{t('sitemap.dualLampIpl')}</Link></li>
            </ul>
          </div>

          {/* About Pages */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {t('sitemap.aboutPages')}
            </h2>
            <ul className="space-y-2">
              <li><Link to="/about/brand-story" className="text-blue-600 hover:text-blue-800">{t('sitemap.brandStory')}</Link></li>
              <li><Link to="/about/company-info" className="text-blue-600 hover:text-blue-800">{t('sitemap.companyInfo')}</Link></li>
              <li><Link to="/about/core-principles" className="text-blue-600 hover:text-blue-800">{t('sitemap.corePrinciples')}</Link></li>
              <li><Link to="/about/founder-message" className="text-blue-600 hover:text-blue-800">{t('sitemap.founderMessage')}</Link></li>
              <li><Link to="/about/global-witness" className="text-blue-600 hover:text-blue-800">{t('sitemap.globalWitness')}</Link></li>
              <li><Link to="/about/quality" className="text-blue-600 hover:text-blue-800">{t('sitemap.quality')}</Link></li>
              <li><Link to="/about/technology" className="text-blue-600 hover:text-blue-800">{t('sitemap.technology')}</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {t('sitemap.solutions')}
            </h2>
            <ul className="space-y-2">
              <li><Link to="/solutions/brand-customization" className="text-blue-600 hover:text-blue-800">{t('sitemap.brandCustomization')}</Link></li>
              <li><Link to="/solutions/compliance" className="text-blue-600 hover:text-blue-800">{t('sitemap.compliance')}</Link></li>
              <li><Link to="/solutions/design-prototyping" className="text-blue-600 hover:text-blue-800">{t('sitemap.designPrototyping')}</Link></li>
              <li><Link to="/solutions/drop-shipping" className="text-blue-600 hover:text-blue-800">{t('sitemap.dropShipping')}</Link></li>
              <li><Link to="/solutions/dual-lamp-ipl" className="text-blue-600 hover:text-blue-800">{t('sitemap.dualLampIplSolution')}</Link></li>
              <li><Link to="/solutions/global-shipping" className="text-blue-600 hover:text-blue-800">{t('sitemap.globalShipping')}</Link></li>
              <li><Link to="/solutions/logo-printing" className="text-blue-600 hover:text-blue-800">{t('sitemap.logoPrinting')}</Link></li>
              <li><Link to="/solutions/multi-head-ipl" className="text-blue-600 hover:text-blue-800">{t('sitemap.multiHeadIpl')}</Link></li>
              <li><Link to="/solutions/packaging-solutions" className="text-blue-600 hover:text-blue-800">{t('sitemap.packagingSolutions')}</Link></li>
            </ul>
          </div>

          {/* Accessories */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {t('sitemap.accessories')}
            </h2>
            <ul className="space-y-2">
              <li><Link to="/accessories/adapter" className="text-blue-600 hover:text-blue-800">{t('sitemap.adapter')}</Link></li>
              <li><Link to="/accessories/filter" className="text-blue-600 hover:text-blue-800">{t('sitemap.filter')}</Link></li>
              <li><Link to="/accessories/protective-goggles" className="text-blue-600 hover:text-blue-800">{t('sitemap.protectiveGoggles')}</Link></li>
              <li><Link to="/accessories/sapphire-lens" className="text-blue-600 hover:text-blue-800">{t('sitemap.sapphireLens')}</Link></li>
            </ul>
          </div>

          {/* Service & Support */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {t('sitemap.serviceSupport')}
            </h2>
            <ul className="space-y-2">
              <li><Link to="/service-support" className="text-blue-600 hover:text-blue-800">{t('sitemap.serviceSupport')}</Link></li>
              <li><Link to="/service-support/after-sales-service" className="text-blue-600 hover:text-blue-800">{t('sitemap.afterSalesService')}</Link></li>
              <li><Link to="/service-support/help-center" className="text-blue-600 hover:text-blue-800">{t('sitemap.helpCenter')}</Link></li>
              <li><Link to="/service-support/knowledge-base" className="text-blue-600 hover:text-blue-800">{t('sitemap.knowledgeBase')}</Link></li>
              <li><Link to="/service-support/ipl-manufacturing" className="text-blue-600 hover:text-blue-800">{t('sitemap.iplManufacturing')}</Link></li>
              <li><Link to="/service-support/win-fda-listing" className="text-blue-600 hover:text-blue-800">{t('sitemap.winFdaListing')}</Link></li>
              <li><Link to="/service-support/beauty-sourcing" className="text-blue-600 hover:text-blue-800">{t('sitemap.beautySourcing')}</Link></li>
              <li><Link to="/service-support/pricing-guide" className="text-blue-600 hover:text-blue-800">{t('sitemap.pricingGuide')}</Link></li>
              <li><Link to="/service-support/gallery" className="text-blue-600 hover:text-blue-800">{t('sitemap.gallery')}</Link></li>
              <li><Link to="/service-support/videos" className="text-blue-600 hover:text-blue-800">{t('sitemap.videos')}</Link></li>
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {t('sitemap.blog')}
            </h2>
            <ul className="space-y-2">
              <li><Link to="/blog/ai-powered-skin-sensing" className="text-blue-600 hover:text-blue-800">{t('sitemap.aiPoweredSkinSensing')}</Link></li>
              <li><Link to="/blog/fda-510k-pathway" className="text-blue-600 hover:text-blue-800">{t('sitemap.fda510kPathway')}</Link></li>
              <li><Link to="/blog/future-home-hair-removal" className="text-blue-600 hover:text-blue-800">{t('sitemap.futureHomeHairRemoval')}</Link></li>
              <li><Link to="/blog/global-market-shifts" className="text-blue-600 hover:text-blue-800">{t('sitemap.globalMarketShifts')}</Link></li>
              <li><Link to="/blog/industries" className="text-blue-600 hover:text-blue-800">{t('sitemap.industries')}</Link></li>
              <li><Link to="/blog/ipl-best-choice" className="text-blue-600 hover:text-blue-800">{t('sitemap.iplBestChoice')}</Link></li>
              <li><Link to="/blog/multi-head-ipl-systems" className="text-blue-600 hover:text-blue-800">{t('sitemap.multiHeadIplSystems')}</Link></li>
              <li><Link to="/blog/news-insights" className="text-blue-600 hover:text-blue-800">{t('sitemap.newsInsights')}</Link></li>
              <li><Link to="/blog/sapphire-cooling" className="text-blue-600 hover:text-blue-800">{t('sitemap.sapphireCooling')}</Link></li>
              <li><Link to="/blog/sustainable-manufacturing" className="text-blue-600 hover:text-blue-800">{t('sitemap.sustainableManufacturing')}</Link></li>
            </ul>
          </div>

          {/* Other Pages */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {t('sitemap.otherPages')}
            </h2>
            <ul className="space-y-2">
              <li><Link to="/how-to-use" className="text-blue-600 hover:text-blue-800">{t('sitemap.howToUse')}</Link></li>
              <li><Link to="/shipping-cost" className="text-blue-600 hover:text-blue-800">{t('sitemap.shippingCost')}</Link></li>
              <li><Link to="/silk" className="text-blue-600 hover:text-blue-800">{t('sitemap.silk')}</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap; 