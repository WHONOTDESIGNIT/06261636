import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { languages } from '../../data/languages';

interface SEOTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  canonical?: string;
  noindex?: boolean;
}

const SEOTags: React.FC<SEOTagsProps> = ({
  title,
  description,
  keywords,
  image,
  canonical,
  noindex = false
}: SEOTagsProps) => {
  const { currentLanguage } = useLanguage();
  const location = useLocation();
  
  // Force HTTPS redirect on client side as backup
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.protocol === 'http:' && window.location.hostname !== 'localhost') {
      const httpsUrl = window.location.href.replace('http:', 'https:');
      window.location.replace(httpsUrl);
      return;
    }
  }, []);
  
  const baseUrl = 'https://iplmanufacturer.com';
  const currentPath = location.pathname;
  
  // 生成当前页面的规范URL
  const getCanonicalUrl = () => {
    if (canonical) return canonical;
    
    // Force canonical to HTTPS and non-www
    if (currentLanguage === 'en') {
      // 移除可能存在的语言前缀
      const cleanPath = currentPath.replace(/^\/en(\/|$)/, '/').replace(/\/$/, '') || '/';
      return `${baseUrl}${cleanPath === '/' ? '' : cleanPath}`;
    }
    
    return `${baseUrl}${currentPath}`;
  };

  // 生成所有语言版本的hreflang链接
  const generateHreflangLinks = () => {
    const hreflangLinks: Array<{ rel: string; hreflang: string; href: string }> = [];
    
    // 获取不带语言前缀的路径
    const pathWithoutLang = currentPath.replace(/^\/[a-z]{2}(\/|$)/, '/');
    const cleanPath = pathWithoutLang === '/' ? '' : pathWithoutLang.replace(/\/$/, '');
    
    // 为每种支持的语言生成hreflang链接
    const supportedLangs = languages.map(l => l.code.split('-')[0]);
    
    supportedLangs.forEach(langCode => {
      let href: string;
      
      if (langCode === 'en') {
        // 英文版本无前缀，避免重定向
        href = `${baseUrl}${cleanPath}`;
      } else {
        // 其他语言版本带前缀
        href = `${baseUrl}/${langCode}${cleanPath}`;
      }
      
      hreflangLinks.push({
        rel: 'alternate',
        hreflang: langCode,
        href: href
      });
    });
    
    // 添加x-default链接指向英文版本，无前缀
    hreflangLinks.push({
      rel: 'alternate',
      hreflang: 'x-default',
      href: `${baseUrl}${cleanPath}`
    });
    
    return hreflangLinks;
  };

  const hreflangLinks = generateHreflangLinks();
  const canonicalUrl = getCanonicalUrl();
  
  const finalTitle = title || 'iShine - IPL Device Manufacturing Solutions | From Idea to Market';
  const finalDescription = description || 'iShine - Leading IPL device manufacturer providing OEM/ODM solutions from idea to market. Custom IPL hair removal devices for global beauty brands.';
  const finalKeywords = keywords || 'IPL devices, OEM manufacturing, ODM solutions, hair removal, beauty devices, custom manufacturing';
  const finalImage = image || `${baseUrl}/og-image.jpg`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content="iShine Manufacturing Co., Ltd." />
      
      {/* Language and Canonical */}
      {/* Force HTTPS canonical URL */}
      <link rel="canonical" href={canonicalUrl.replace('http:', 'https:')} />
      
      {/* Prevent HTTP indexing */}
      {typeof window !== 'undefined' && window.location.protocol === 'http:' && (
        <meta name="robots" content="noindex, nofollow" />
      )}
      <html lang={currentLanguage} />
      
      {/* Hreflang Links */}
      {hreflangLinks.map((link, index) => (
        <link
          key={index}
          rel={link.rel}
          hrefLang={link.hreflang}
          href={link.href}
        />
      ))}
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl.replace('http:', 'https:')} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:locale" content={currentLanguage === 'zh' ? 'zh_CN' : `${currentLanguage}_${currentLanguage.toUpperCase()}`} />
      
      {/* Additional locale alternatives */}
      {hreflangLinks
        .filter(link => link.hreflang !== 'x-default' && link.hreflang !== currentLanguage)
        .map((link, index) => (
          <meta
            key={index}
            property="og:locale:alternate"
            content={link.hreflang === 'zh' ? 'zh_CN' : `${link.hreflang}_${link.hreflang.toUpperCase()}`}
          />
        ))}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      
      {/* Additional SEO Meta Tags */}
      {/* HTTPS enforcement */}
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="content-language" content={currentLanguage} />
      
      {/* Structured Data for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "iShine Manufacturing Co., Ltd.",
          "url": baseUrl,
          "logo": `${baseUrl}/logo.png`,
          "description": finalDescription,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+86-xxx-xxxx-xxxx",
            "contactType": "customer service"
          },
          "sameAs": [
            "https://www.linkedin.com/company/ishine-manufacturing"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOTags; 