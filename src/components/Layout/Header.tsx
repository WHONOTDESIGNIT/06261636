import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Youtube, Linkedin, Menu, X, ChevronDown } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { HeaderProps, ThumbnailData } from '../../types';

const Header: React.FC<HeaderProps> = ({ thumbnailData }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showThumbnails, setShowThumbnails] = useState(false);
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
      hasThumbnails: true, // 标记此菜单项有缩略图
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
            { name: 'Filter', href: '/accessories/filter', icon: '🔍' },
            { name: 'Adapter', href: '/accessories/adapter', icon: '🔌' },
            { name: 'Protective Goggles', href: '/accessories/goggles', icon: '🥽' }
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
            { name: 'FDA GMP Clean Room Design', href: '/service-support/fda-gmp' },
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

  // 根据缩略图名称获取对应的缩略图数据
  const getThumbnailByName = (itemName: string): ThumbnailData | undefined => {
    return thumbnailData.find(thumb => thumb.title === itemName);
  };

  // 渲染缩略图组件
  const renderThumbnail = (thumbnail: ThumbnailData) => (
    <img
      src={thumbnail.imageUrl}
      alt={thumbnail.title}
      className="w-8 h-8 rounded object-cover"
      onError={(e) => {
        // 图片加载失败时的备用处理
        e.currentTarget.style.display = 'none';
      }}
    />
  );

  // 渲染缩略图列表（用于展示所有缩略图）
  const renderThumbnailList = () => (
    <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
      <div className="p-4">
        <h4 className="font-semibold text-gray-900 mb-4 text-sm border-b border-gray-200 pb-2">
          All IPL Devices & Accessories
        </h4>
        <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto">
          {thumbnailData.map((thumbnail) => (
            <div
              key={thumbnail.id}
              className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-colors cursor-pointer"
            >
              {renderThumbnail(thumbnail)}
              <div className="ml-3 flex-1">
                <h5 className="text-sm font-medium text-gray-900 line-clamp-1">
                  {thumbnail.title}
                </h5>
                {thumbnail.description && (
                  <p className="text-xs text-gray-500 line-clamp-1">
                    {thumbnail.description}
                  </p>
                )}
                {thumbnail.category && (
                  <span className="inline-block mt-1 px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded">
                    {thumbnail.category}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

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

                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-4">
                      {item.items?.map((subItem: any, index) => (
                        <div key={index}>
                          {subItem.isCategory ? (
                            <div className="mb-4">
                              <h4 className="font-semibold text-gray-900 mb-2 text-sm border-b border-gray-200 pb-1">
                                {subItem.name}
                              </h4>
                              <div className="space-y-1">
                                {subItem.items?.map((categoryItem: any, catIndex: number) => {
                                  const thumbnail = categoryItem.thumbnail ? getThumbnailByName(categoryItem.name) : null;
                                  
                                  return (
                                    <Link
                                      key={catIndex}
                                      to={categoryItem.href}
                                      className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-ishine-blue-500 hover:bg-gray-50 rounded-md transition-colors"
                                    >
                                      {thumbnail ? (
                                        renderThumbnail(thumbnail)
                                      ) : categoryItem.icon ? (
                                        <span className="text-lg mr-3">{categoryItem.icon}</span>
                                      ) : null}
                                      <span className="ml-3">{categoryItem.name}</span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          ) : (
                            <Link
                              to={subItem.href}
                              className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-ishine-blue-500 hover:bg-gray-50 rounded-md transition-colors"
                            >
                              {subItem.icon && (
                                <span className="text-lg mr-3">{subItem.icon}</span>
                              )}
                              {subItem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 特殊的缩略图展示区域 */}
                {item.hasThumbnails && renderThumbnailList()}
              </div>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <button 
              className="p-2 text-gray-600 hover:text-ishine-blue-500 transition-colors"
              onClick={() => setShowThumbnails(!showThumbnails)}
              title="Toggle Thumbnails"
            >
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

        {/* 缩略图展示区域（可切换显示） */}
        {showThumbnails && (
          <div className="py-4 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {thumbnailData.map((thumbnail) => (
                <div
                  key={thumbnail.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <img
                    src={thumbnail.imageUrl}
                    alt={thumbnail.title}
                    className="w-full h-20 object-cover rounded-md mb-2"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/150x80?text=No+Image';
                    }}
                  />
                  <h4 className="text-xs font-medium text-gray-900 line-clamp-2">
                    {thumbnail.title}
                  </h4>
                  {thumbnail.category && (
                    <span className="inline-block mt-1 px-1.5 py-0.5 bg-blue-100 text-blue-800 text-xs rounded">
                      {thumbnail.category}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

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
                                {subItem.items?.map((categoryItem: any, catIndex: number) => {
                                  const thumbnail = categoryItem.thumbnail ? getThumbnailByName(categoryItem.name) : null;
                                  
                                  return (
                                    <Link
                                      key={catIndex}
                                      to={categoryItem.href}
                                      onClick={() => setIsMenuOpen(false)}
                                      className="flex items-center text-xs text-gray-600 hover:text-ishine-blue-500 py-1"
                                    >
                                      {thumbnail ? (
                                        <img
                                          src={thumbnail.imageUrl}
                                          alt={thumbnail.title}
                                          className="w-4 h-4 rounded object-cover mr-2"
                                        />
                                      ) : categoryItem.icon ? (
                                        <span className="text-sm mr-2">{categoryItem.icon}</span>
                                      ) : null}
                                      {categoryItem.name}
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          ) : (
                            <Link
                              to={subItem.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="flex items-center text-sm text-gray-600 hover:text-ishine-blue-500 py-1"
                            >
                              {subItem.icon && (
                                <span className="text-sm mr-2">{subItem.icon}</span>
                              )}
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