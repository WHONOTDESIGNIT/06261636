import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Youtube, Linkedin, Menu, X, ChevronDown } from 'lucide-react';
import LanguageSelector from './LanguageSelector.tsx';
import { iplDevices, accessories } from '../../data/products'; // 导入产品数据
import { useLanguage } from '../../context/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { currentLanguage, t } = useLanguage();

  const navigation = [
    {
      name: t('header.nav.solutions', 'Solutions'),
      href: currentLanguage === 'en' ? '/solutions' : `/${currentLanguage}/solutions`,
      hasDropdown: true,
      items: [
        { name: t('header.nav.logoPrinting', 'Logo Printing'), href: currentLanguage === 'en' ? '/solutions/logo-printing' : `/${currentLanguage}/solutions/logo-printing`, icon: '🖨️' },
        { name: t('header.nav.packaging', 'Packaging Solutions'), href: currentLanguage === 'en' ? '/solutions/packaging' : `/${currentLanguage}/solutions/packaging`, icon: '📦' },
        { name: t('header.nav.dropShipping', 'Drop Shipping'), href: currentLanguage === 'en' ? '/solutions/drop-shipping' : `/${currentLanguage}/solutions/drop-shipping`, icon: '🚚' },
        { name: t('header.nav.globalShipping', 'Global Shipping'), href: currentLanguage === 'en' ? '/solutions/global-shipping' : `/${currentLanguage}/solutions/global-shipping`, icon: '🌍' },
        { name: t('header.nav.brandCustomization', 'Brand Customization'), href: currentLanguage === 'en' ? '/solutions/brand-customization' : `/${currentLanguage}/solutions/brand-customization`, icon: '🎨' },
        { name: t('header.nav.compliance', 'Compliance & Certifications'), href: currentLanguage === 'en' ? '/solutions/compliance' : `/${currentLanguage}/solutions/compliance`, icon: '✅' },
        { name: t('header.nav.designPrototyping', 'Design & Prototyping'), href: currentLanguage === 'en' ? '/solutions/design-prototyping' : `/${currentLanguage}/solutions/design-prototyping`, icon: '⚙️' },
        { name: t('header.nav.multiHeadIPL', 'Multi-head IPL Custom'), href: currentLanguage === 'en' ? '/solutions/multi-head-ipl' : `/${currentLanguage}/solutions/multi-head-ipl`, icon: '🔬' },
        { name: t('header.nav.dualLampIPL', 'Dual-lamp IPL Custom'), href: currentLanguage === 'en' ? '/solutions/dual-lamp-ipl' : `/${currentLanguage}/solutions/dual-lamp-ipl`, icon: '💡' }
      ]
    },
    {
      name: t('header.nav.iplHairRemoval', 'IPL Hair Removal'),
      href: currentLanguage === 'en' ? '/ipl-hair-removal' : `/${currentLanguage}/ipl-hair-removal`,
      hasDropdown: true,
      items: [
        {
          name: t('header.nav.iplDevices', 'IPL Devices'),
          isCategory: true,
          items: [
            { name: t('header.nav.smartAppIPL', 'Smart App-Controlled IPL Device'), href: currentLanguage === 'en' ? '/ipl-hair-removal/smart-app' : `/${currentLanguage}/ipl-hair-removal/smart-app`, thumbnail: true },
            { name: t('header.nav.iceFeelingIPL', 'Ice Feeling IPL Device'), href: currentLanguage === 'en' ? '/ipl-hair-removal/ice-feeling' : `/${currentLanguage}/ipl-hair-removal/ice-feeling`, thumbnail: true },
            { name: t('header.nav.emeraldIPL', 'Emerald IPL Device'), href: currentLanguage === 'en' ? '/ipl-hair-removal/emerald' : `/${currentLanguage}/ipl-hair-removal/emerald`, thumbnail: true },
            { name: t('header.nav.skinSensorIPL', 'Skin Sensor IPL Device'), href: currentLanguage === 'en' ? '/ipl-hair-removal/skin-sensor' : `/${currentLanguage}/ipl-hair-removal/skin-sensor`, thumbnail: true },
            { name: t('header.nav.batteryPoweredIPL', 'Battery Powered IPL Device'), href: currentLanguage === 'en' ? '/ipl-hair-removal/battery-powered' : `/${currentLanguage}/ipl-hair-removal/battery-powered`, thumbnail: true },
            { name: t('header.nav.handheldIPL', 'Handheld IPL Device'), href: currentLanguage === 'en' ? '/ipl-hair-removal/handheld' : `/${currentLanguage}/ipl-hair-removal/handheld`, thumbnail: true },
            { name: t('header.nav.iceCoolingIPL', 'Ice Cooling IPL Device'), href: currentLanguage === 'en' ? '/ipl-hair-removal/ice-cooling' : `/${currentLanguage}/ipl-hair-removal/ice-cooling`, thumbnail: true },
            { name: t('header.nav.dualLampIPLDevice', 'Dual-Lamp IPL Device'), href: currentLanguage === 'en' ? '/ipl-hair-removal/dual-lamp' : `/${currentLanguage}/ipl-hair-removal/dual-lamp`, thumbnail: true },
            { name: t('header.nav.aiPoweredIPL', 'AI-POWERED IPL Device'), href: currentLanguage === 'en' ? '/ipl-hair-removal/ai-powered' : `/${currentLanguage}/ipl-hair-removal/ai-powered`, thumbnail: true }
          ]
        },
        {
          name: t('header.nav.accessories', 'Accessories'),
          isCategory: true,
          items: [
            { name: t('header.nav.sapphireLens', 'Sapphire Lens'), href: currentLanguage === 'en' ? '/accessories/sapphire-lens' : `/${currentLanguage}/accessories/sapphire-lens`, icon: '💎' },
            { name: t('header.nav.opticalFilter', 'Optical Filter'), href: currentLanguage === 'en' ? '/accessories/filter' : `/${currentLanguage}/accessories/filter`, icon: '🔍' },
            { name: t('header.nav.powerAdapter', 'Power Adapter'), href: currentLanguage === 'en' ? '/accessories/adapter' : `/${currentLanguage}/accessories/adapter`, icon: '🔌' },
            { name: t('header.nav.safetyGoggles', 'Safety Goggles'), href: currentLanguage === 'en' ? '/accessories/goggles' : `/${currentLanguage}/accessories/goggles`, icon: '🥽' }
          ]
        }
      ]
    },
    {
      name: t('header.nav.howToUse', 'How to Use'),
      href: currentLanguage === 'en' ? '/how-to-use' : `/${currentLanguage}/how-to-use`
    },
    {
      name: t('header.nav.serviceSupport', 'Service & Support'),
      href: currentLanguage === 'en' ? '/service-support' : `/${currentLanguage}/service-support`,
      hasDropdown: true,
      items: [
        {
          name: t('header.nav.service', 'Service'),
          isCategory: true,
          items: [
            { name: t('header.nav.afterSales', 'After-Sales Service'), href: currentLanguage === 'en' ? '/service-support/after-sales' : `/${currentLanguage}/service-support/after-sales` },
            { name: t('header.nav.winFDAListing', 'Win FDA Listing'), href: currentLanguage === 'en' ? '/service-support/win-fda-listing' : `/${currentLanguage}/service-support/win-fda-listing` },
            { name: t('header.nav.iplManufacturing', 'IPL Devices Manufacturing'), href: currentLanguage === 'en' ? '/service-support/manufacturing' : `/${currentLanguage}/service-support/manufacturing` },
            { name: t('header.nav.knowledgeBase', 'Knowledge Base'), href: currentLanguage === 'en' ? '/service-support/knowledge-base' : `/${currentLanguage}/service-support/knowledge-base` }
          ]
        },
        {
          name: t('header.nav.supportGuide', 'Support > Buying Guide'),
          isCategory: true,
          items: [
            { name: t('header.nav.beautySourcing', 'Beauty Niche Sourcing & Accessories'), href: currentLanguage === 'en' ? '/service-support/beauty-sourcing' : `/${currentLanguage}/service-support/beauty-sourcing` },
            { name: t('header.nav.pricingGuide', 'Pricing Guide'), href: currentLanguage === 'en' ? '/service-support/pricing-guide' : `/${currentLanguage}/service-support/pricing-guide` },
            { name: t('header.nav.helpCenter', 'Help Center'), href: currentLanguage === 'en' ? '/service-support/help-center' : `/${currentLanguage}/service-support/help-center` },
            { name: t('header.nav.gallery', 'Gallery'), href: currentLanguage === 'en' ? '/service-support/gallery' : `/${currentLanguage}/service-support/gallery` },
            { name: t('header.nav.videos', 'Videos'), href: currentLanguage === 'en' ? '/service-support/videos' : `/${currentLanguage}/service-support/videos` }
          ]
        },
        {
          name: t('header.nav.blog', 'Blog'),
          isCategory: true,
          items: [
            { name: t('header.nav.newsInsights', 'News & Insights'), href: currentLanguage === 'en' ? '/blog/news-insights' : `/${currentLanguage}/blog/news-insights` },
            { name: t('header.nav.industries', 'Industries We Serve'), href: currentLanguage === 'en' ? '/blog/industries' : `/${currentLanguage}/blog/industries` }
          ]
        }
      ]
    },
    {
      name: t('header.nav.about', 'About'),
      href: currentLanguage === 'en' ? '/about' : `/${currentLanguage}/about`,
      hasDropdown: true,
      items: [
        { name: t('header.nav.founderMessage', 'Founder Message'), href: currentLanguage === 'en' ? '/about/founder-message' : `/${currentLanguage}/about/founder-message` },
        { name: t('header.nav.technology', 'Our Technology'), href: currentLanguage === 'en' ? '/about/technology' : `/${currentLanguage}/about/technology` },
        { name: t('header.nav.globalWitness', 'Global Witness'), href: currentLanguage === 'en' ? '/about/global-witness' : `/${currentLanguage}/about/global-witness` },
        { name: t('header.nav.corePrinciples', 'Core Principles'), href: currentLanguage === 'en' ? '/about/core-principles' : `/${currentLanguage}/about/core-principles` },
        { name: t('header.nav.company', 'About iShine'), href: currentLanguage === 'en' ? '/about/company' : `/${currentLanguage}/about/company` },
        { name: t('header.nav.brandStory', 'Brand Story'), href: currentLanguage === 'en' ? '/about/brand-story' : `/${currentLanguage}/about/brand-story` },
        { name: t('header.nav.quality', 'Quality'), href: currentLanguage === 'en' ? '/about/quality' : `/${currentLanguage}/about/quality` }
      ]
    },
    { name: t('header.nav.contact', 'Contact'), href: currentLanguage === 'en' ? '/contact' : `/${currentLanguage}/contact` }
  ];

  const isActive = (href: string) => location.pathname === href;

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // 从产品数据中获取缩略图URL的函数
  const getThumbnailUrl = (itemName: string) => {
    // 首先在IPL设备中查找
    const iplDevice = iplDevices.find(device => device.name === itemName);
    if (iplDevice && iplDevice.thumbnail) {
      return iplDevice.thumbnail;
    }
    
    // 然后在配件中查找
    const accessory = accessories.find(acc => acc.name === itemName);
    if (accessory && accessory.thumbnail) {
      return accessory.thumbnail;
    }
    
    // 如果没有找到，返回空字符串
    return '';
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center px-8 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center mr-12">
          <span className="text-xl font-bold text-[#18181B] tracking-tight">/rareblocks</span>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <div className="flex items-center">
                <Link
                  to={item.href}
                  className={`text-base font-semibold px-2 py-1 rounded-lg transition-colors duration-200 hover:bg-[#F1F5F9] hover:text-blue-700 ${isActive(item.href) ? 'text-blue-700' : 'text-[#18181B]'}`}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <ChevronDown className="ml-1 w-4 h-4 text-gray-400 group-hover:text-blue-700 transition-colors" />
                )}
              </div>
              {/* Dropdown Menu */}
              {item.hasDropdown && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4">
                    {item.items?.map((subItem: any, index) => (
                      <div key={index}>
                        {subItem.isCategory ? (
                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 mb-2 text-sm border-b border-gray-100 pb-1">{subItem.name}</h4>
                            <div className="space-y-1">
                              {subItem.items?.map((categoryItem: any, catIndex: number) => (
                                <Link
                                  key={catIndex}
                                  to={categoryItem.href}
                                  className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-blue-700 hover:bg-[#F1F5F9] rounded-md transition-colors"
                                >
                                  {categoryItem.icon ? (
                                    <span className="text-lg mr-3">{categoryItem.icon}</span>
                                  ) : null}
                                  {categoryItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            to={subItem.href}
                            className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-blue-700 hover:bg-[#F1F5F9] rounded-md transition-colors"
                          >
                            {subItem.icon ? (
                              <span className="text-lg mr-3">{subItem.icon}</span>
                            ) : null}
                            {subItem.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* 右侧按钮组 */}
        <div className="flex gap-4 items-center ml-auto">
          <LanguageSelector />
          <Link to="/login" className="text-base font-medium text-[#18181B] hover:text-blue-700 transition">Sign in</Link>
          <Link to="/register" className="px-6 py-2 bg-[#18181B] text-white rounded-lg font-semibold shadow hover:bg-[#333] transition">Create free account</Link>
        </div>
        {/* 移动端菜单按钮 */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden ml-4 p-2 rounded hover:bg-[#F1F5F9] text-gray-600 hover:text-[#18181B]"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      {/* 移动端导航 */}
      {isMenuOpen && (
        <div className="lg:hidden py-4 border-t border-gray-100 max-h-96 overflow-y-auto bg-white px-8">
          <div className="mb-4">
            <LanguageSelector />
          </div>
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <div className="flex items-center justify-between">
                  <Link
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-base font-semibold px-2 py-1 rounded-lg transition-colors duration-200 hover:bg-[#F1F5F9] hover:text-blue-700 ${isActive(item.href) ? 'text-blue-700' : 'text-[#18181B]'}`}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="p-1"
                    >
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                      />
                    </button>
                  )}
                </div>
                {/* Mobile Dropdown */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    {item.items?.map((subItem: any, index) => (
                      <div key={index}>
                        {subItem.isCategory ? (
                          <div className="mb-3">
                            <h4 className="font-semibold text-gray-900 mb-1 text-xs">{subItem.name}</h4>
                            <div className="flex flex-col gap-1 ml-2">
                              {subItem.items?.map((categoryItem: any, catIndex: number) => (
                                <Link
                                  key={catIndex}
                                  to={categoryItem.href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="block text-xs text-gray-600 hover:text-blue-700 py-1 rounded hover:bg-[#F1F5F9]"
                                >
                                  {categoryItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            to={subItem.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center text-sm text-gray-600 hover:text-blue-700 py-1 rounded hover:bg-[#F1F5F9]"
                          >
                            {subItem.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;