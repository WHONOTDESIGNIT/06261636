import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLanguage } from '../../context/LanguageContext';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  customItems?: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ customItems, className = '' }) => {
  const router = useRouter();
  const { t, currentLanguage } = useLanguage();
  const baseUrl = 'https://iplmanufacturer.com';
  
  // 路径名称映射
  const pathNameMap: { [key: string]: string } = {
    'home': t('nav.home', 'Home'),
    'solutions': t('nav.solutions', 'Solutions'),
    'ipl-hair-removal': t('nav.iplHairRemoval', 'IPL Hair Removal'),
    'ipl': t('nav.iplHairRemoval', 'IPL Hair Removal'),
    'accessories': t('nav.accessories', 'Accessories'),
    'service-support': t('nav.serviceSupport', 'Service & Support'),
    'service': t('nav.serviceSupport', 'Service & Support'),
    'blog': t('nav.blog', 'Blog'),
    'about': t('nav.about', 'About'),
    'how-to-use': t('nav.howToUse', 'How to Use'),
    'contact': t('nav.contact', 'Contact'),
    'smart-app': t('ipl.smartApp.title', 'Smart App IPL'),
    'ice-feeling': t('ipl.iceFeeling.title', 'Ice Feeling IPL'),
    'emerald': t('ipl.emerald.title', 'Emerald IPL'),
    'skin-sensor': t('ipl.skinSensor.title', 'Skin Sensor IPL'),
    'battery-powered': t('ipl.batteryPowered.title', 'Battery Powered IPL'),
    'handheld': t('ipl.handheld.title', 'Handheld IPL'),
    'ice-cooling': t('ipl.iceCooling.title', 'Ice Cooling IPL'),
    'dual-lamp': t('ipl.dualLamp.title', 'Dual Lamp IPL'),
    'ai-powered': t('ipl.aiPowered.title', 'AI-Powered IPL'),
    'logo-printing': t('solutions.logoPrinting.title', 'Logo Printing'),
    'packaging-solutions': t('solutions.packaging.title', 'Packaging Solutions'),
    'drop-shipping': t('solutions.dropShipping.title', 'Drop Shipping'),
    'global-shipping': t('solutions.globalShipping.title', 'Global Shipping'),
    'brand-customization': t('solutions.brandCustomization.title', 'Brand Customization'),
    'compliance': t('solutions.compliance.title', 'Compliance'),
    'design-prototyping': t('solutions.designPrototyping.title', 'Design & Prototyping'),
    'multi-head-ipl': t('solutions.multiHeadIPL.title', 'Multi Head IPL'),
    'dual-lamp-ipl': t('solutions.dualLampIPL.title', 'Dual Lamp IPL')
  };

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (customItems) return customItems;
    
    const pathnames = router.asPath
      .split('/')
      .filter(x => x && x !== currentLanguage); // 过滤掉语言前缀
    
    const breadcrumbs: BreadcrumbItem[] = [
      { name: t('nav.home', 'Home'), path: '/' }
    ];
    
    let currentPath = '';
    pathnames.forEach((pathname) => {
      currentPath += currentPath === '' ? pathname : `/${pathname}`;
      const displayName = pathNameMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1).replace(/-/g, ' ');
      breadcrumbs.push({
        name: displayName,
        path: `/${currentPath}`
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();
  
  // 生成结构化数据
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${baseUrl}${item.path}`
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <nav className={`flex items-center space-x-2 text-sm text-gray-600 mb-6 px-4 py-2 bg-gray-50 rounded-lg ${className}`} aria-label="Breadcrumb">
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1;
          
          return (
            <React.Fragment key={item.path}>
              {index === 0 ? (
                <Home className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400" />
              )}
              
              {isLast ? (
                <span className="text-gray-900 font-semibold" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link 
                  href={item.path} 
                  className="hover:text-ishine-blue-600 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
};

export default Breadcrumbs;