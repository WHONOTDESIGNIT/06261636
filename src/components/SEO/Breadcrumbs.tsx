import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../context/LanguageContext';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  customItems?: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ customItems, className = '' }) => {
  const location = useLocation();
  const { t, currentLanguage } = useLanguage();
  const baseUrl = 'https://iplmanufacturer.com';
  
  // 路径名称映射
  const pathNameMap: { [key: string]: string } = {
    'solutions': t('nav.solutions', 'Solutions'),
    'ipl-hair-removal': t('nav.iplHairRemoval', 'IPL Hair Removal'),
    'accessories': t('nav.accessories', 'Accessories'),
    'service-support': t('nav.serviceSupport', 'Service & Support'),
    'blog': t('nav.blog', 'Blog'),
    'about': t('nav.about', 'About'),
    'how-to-use': t('nav.howToUse', 'How to Use'),
    'contact': t('nav.contact', 'Contact')
  };

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (customItems) return customItems;
    
    const pathnames = location.pathname
      .split('/')
      .filter(x => x && x !== currentLanguage); // 过滤掉语言前缀
    
    const breadcrumbs: BreadcrumbItem[] = [
      { name: t('nav.home', 'Home'), path: '/' }
    ];
    
    let currentPath = '';
    pathnames.forEach((pathname) => {
      currentPath += `/${pathname}`;
      const displayName = pathNameMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1).replace(/-/g, ' ');
      breadcrumbs.push({
        name: displayName,
        path: currentPath
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
      
      <nav className={`flex items-center space-x-2 text-sm text-gray-600 mb-6 ${className}`} aria-label="Breadcrumb">
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1;
          
          return (
            <React.Fragment key={item.path}>
              {index === 0 ? (
                <Home className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400" />
              )}
              
              {isLast ? (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link 
                  to={item.path} 
                  className="hover:text-ishine-blue-600 transition-colors"
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