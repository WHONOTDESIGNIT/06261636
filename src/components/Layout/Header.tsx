import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Youtube, Linkedin, Menu, X, ChevronDown } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { iplDevices, accessories } from '../../data/products'; // 导入产品数据

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigation = [
    {
      name: 'Solutions',
      href: '/solutions',
      hasDropdown: true,
      items: [
        { name: 'Logo Printing', href: '/solutions/logo-printing', icon: '🖨️' },
        { name: 'Packaging Solutions', href: '/solutions/packaging', icon: '📦' },
        { name: 'Drop Shipping', href: '/solutions/drop-shipping', icon: '🚚' },
        { name: 'Global Shipping', href: '/solutions/global-shipping', icon: '🌍' },
        { name: 'Brand Customization', href: '/solutions/brand-customization', icon: '🎨' },
        { name: 'Compliance & Certifications', href: '/solutions/compliance', icon: '✅' },
        { name: 'Design & Prototyping', href: '/solutions/design-prototyping', icon: '⚙️' },
        { name: 'Multi-head IPL Custom', href: '/solutions/multi-head-ipl', icon: '🔬' },
        { name: 'Dual-lamp IPL Custom', href: '/solutions/dual-lamp-ipl', icon: '💡' }
      ]
    },
    {
      name: 'IPL Hair Removal',
      href: '/ipl-hair-removal',
      hasDropdown: true,
      items: [
        {
          name: 'IPL Devices',
          isCategory: true,
          items: [
            { name: 'Smart App-Controlled IPL Device', href: '/ipl-hair-removal/smart-app', thumbnail: true },
            { name: 'Ice Feeling IPL Device', href: '/ipl-hair-removal/ice-feeling', thumbnail: true },
            { name: 'Emerald IPL Device', href: '/ipl-hair-removal/emerald', thumbnail: true },
            { name: 'Skin Sensor IPL Device', href: '/ipl-hair-removal/skin-sensor', thumbnail: true },
            { name: 'Battery Powered IPL Device', href: '/ipl-hair-removal/battery-powered', thumbnail: true },
            { name: 'Handheld IPL Device', href: '/ipl-hair-removal/handheld', thumbnail: true },
            { name: 'Ice Cooling IPL Device', href: '/ipl-hair-removal/ice-cooling', thumbnail: true },
            { name: 'Dual-Lamp IPL Device', href: '/ipl-hair-removal/dual-lamp', thumbnail: true },
            { name: 'AI-POWERED IPL Device', href: '/ipl-hair-removal/ai-powered', thumbnail: true }
          ]
        },
        {
          name: 'Accessories',
          isCategory: true,
          items: [
            { name: 'Sapphire Lens', href: '/accessories/sapphire-lens', icon: '💎' },
            { name: 'Optical Filter', href: '/accessories/filter', icon: '🔍' },
            { name: 'Power Adapter', href: '/accessories/adapter', icon: '🔌' },
            { name: 'Safety Goggles', href: '/accessories/goggles', icon: '🥽' }
          ]
        }
      ]
    },
    {
      name: 'How to Use',
      href: '/how-to-use'
    },
    {
      name: 'Service & Support',
      href: '/service-support',
      hasDropdown: true,
      items: [
        {
          name: 'Service',
          isCategory: true,
          items: [
            { name: 'After-Sales Service', href: '/service-support/after-sales' },
            { name: 'Win FDA Listing', href: '/service-support/win-fda-listing' },
            { name: 'IPL Devices Manufacturing', href: '/service-support/manufacturing' },
            { name: 'Knowledge Base', href: '/service-support/knowledge-base' }
          ]
        },
        {
          name: 'Support > Buying Guide',
          isCategory: true,
          items: [
            { name: 'Beauty Niche Sourcing & Accessories', href: '/service-support/beauty-sourcing' },
            { name: 'Pricing Guide', href: '/service-support/pricing-guide' },
            { name: 'Help Center', href: '/service-support/help-center' },
            { name: 'Gallery', href: '/service-support/gallery' },
            { name: 'Videos', href: '/service-support/videos' }
          ]
        },
        {
          name: 'Blog',
          isCategory: true,
          items: [
            { name: 'News & Insights', href: '/blog/news-insights' },
            { name: 'Industries We Serve', href: '/blog/industries' }
          ]
        }
      ]
    },
    {
      name: 'About',
      href: '/about',
      hasDropdown: true,
      items: [
        { name: 'Founder Message', href: '/about/founder-message' },
        { name: 'Our Technology', href: '/about/technology' },
        { name: 'Global Witness', href: '/about/global-witness' },
        { name: 'Core Principles', href: '/about/core-principles' },
        { name: 'About iShine', href: '/about/company' },
        { name: 'Brand Story', href: '/about/brand-story' },
        { name: 'Quality', href: '/about/quality' }
      ]
    },
    { name: 'Contact', href: '/contact' }
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-ishine-blue-500 to-ishine-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">iS</span>
            </div>
            <span className="text-xl font-bold text-gray-900">iShine</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <div className="flex items-center">
                  <Link
                    to={item.href}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-ishine-blue-500 ${
                      isActive(item.href) ? 'text-ishine-blue-500' : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <ChevronDown className="ml-1 w-4 h-4 text-gray-500 group-hover:text-ishine-blue-500 transition-colors" />
                  )}
                </div>

                {/* Dropdown Menu - IPL Hair Removal 菜单宽度调整为150% */}
                {item.hasDropdown && (
                  <div className={`absolute top-full left-0 mt-2 ${
                    item.name === 'IPL Hair Removal' ? 'w-120' : 'w-80'
                  } bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50`}>
                    <div className="p-4">
                      {item.items?.map((subItem: any, index) => (
                        <div key={index}>
                          {subItem.isCategory ? (
                            <div className="mb-4">
                              <h4 className="font-semibold text-gray-900 mb-2 text-sm border-b border-gray-200 pb-1">
                                {subItem.name}
                              </h4>
                              <div className="space-y-1">
                                {subItem.items?.map((categoryItem: any, catIndex: number) => (
                                  <Link
                                    key={catIndex}
                                    to={categoryItem.href}
                                    className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-ishine-blue-500 hover:bg-gray-50 rounded-md transition-colors"
                                  >
                                    {categoryItem.thumbnail ? (
                                      <img
                                        src={getThumbnailUrl(categoryItem.name)}
                                        alt={categoryItem.name}
                                        className="w-8 h-8 rounded object-cover mr-3"
                                        onError={(e) => {
                                          // 如果图片加载失败，隐藏图片元素
                                          e.currentTarget.style.display = 'none';
                                        }}
                                      />
                                    ) : categoryItem.icon ? (
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
                              className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-ishine-blue-500 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              {subItem.thumbnail ? (
                                <img
                                  src={getThumbnailUrl(subItem.name)}
                                  alt={subItem.name}
                                  className="w-8 h-8 rounded object-cover mr-3"
                                  onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                  }}
                                />
                              ) : subItem.icon ? (
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

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <button className="p-2 text-gray-600 hover:text-ishine-blue-500 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-red-500 transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 max-h-96 overflow-y-auto">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-sm font-medium transition-colors duration-200 hover:text-ishine-blue-500 ${
                        isActive(item.href) ? 'text-ishine-blue-500' : 'text-gray-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="p-1"
                      >
                        <ChevronDown
                          className={`w-4 h-4 text-gray-500 transition-transform ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Dropdown */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="mt-2 ml-4 space-y-2">
                      {item.items?.map((subItem: any, index) => (
                        <div key={index}>
                          {subItem.isCategory ? (
                            <div className="mb-3">
                              <h4 className="font-semibold text-gray-900 mb-1 text-xs">
                                {subItem.name}
                              </h4>
                              <div className="space-y-1 ml-2">
                                {subItem.items?.map((categoryItem: any, catIndex: number) => (
                                  <Link
                                    key={catIndex}
                                    to={categoryItem.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block text-xs text-gray-600 hover:text-ishine-blue-500 py-1"
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
                              className="flex items-center text-sm text-gray-600 hover:text-ishine-blue-500 py-1"
                            >
                              {subItem.thumbnail ? (
                                <img
                                  src={getThumbnailUrl(subItem.name)}
                                  alt={subItem.name}
                                  className="w-6 h-6 rounded object-cover mr-2"
                                  onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                  }}
                                />
                              ) : subItem.icon ? (
                                <span className="text-sm mr-2">{subItem.icon}</span>
                              ) : null}
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
      </nav>
    </header>
  );
};

export default Header;