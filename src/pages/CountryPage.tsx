import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getLanguageFromCountryCode } from '../utils/languageUtils';
import Home from './Home';

const CountryPage: React.FC = () => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const { setLanguage, currentCountry } = useLanguage();

  useEffect(() => {
    if (countryCode && countryCode !== currentCountry) {
      // Determine language based on country code
      const detectedLanguage = getLanguageFromCountryCode(countryCode);
      setLanguage(detectedLanguage, countryCode);
      
      // Update document title and meta tags based on country/language
      updateMetaTags(countryCode);
    }
  }, [countryCode, setLanguage, currentCountry]);

  const updateMetaTags = (country: string) => {
    // Update document title
    const titleMap: Record<string, string> = {
      'us': 'iShine - IPL Device Manufacturing Solutions | USA',
      'mx': 'iShine - Soluciones de Fabricación de Dispositivos IPL | México',
      'de': 'iShine - IPL-Geräte Herstellungslösungen | Deutschland',
      'fr': 'iShine - Solutions de Fabrication d\'Appareils IPL | France',
      'es': 'iShine - Soluciones de Fabricación de Dispositivos IPL | España',
      'br': 'iShine - Soluções de Fabricação de Dispositivos IPL | Brasil',
      'jp': 'iShine - IPLデバイス製造ソリューション | 日本',
      'cn': 'iShine - IPL设备制造解决方案 | 中国',
      'th': 'iShine - โซลูชันการผลิตอุปกรณ์ IPL | ประเทศไทย',
      'vn': 'iShine - Giải Pháp Sản Xuất Thiết Bị IPL | Việt Nam',
      'id': 'iShine - Solusi Manufaktur Perangkat IPL | Indonesia',
      'my': 'iShine - Penyelesaian Pembuatan Peranti IPL | Malaysia',
      'ae': 'iShine - حلول تصنيع أجهزة IPL | الإمارات العربية المتحدة',
      'sa': 'iShine - حلول تصنيع أجهزة IPL | المملكة العربية السعودية',
      'il': 'iShine - פתרונות ייצור מכשירי IPL | ישראל',
      'tr': 'iShine - IPL Cihaz Üretim Çözümleri | Türkiye',
      'in': 'iShine - IPL डिवाइस निर्माण समाधान | भारत',
      'kr': 'iShine - IPL 기기 제조 솔루션 | 대한민국',
      'global': 'iShine - IPL Device Manufacturing Solutions | Global'
    };

    const title = titleMap[country] || titleMap['global'];
    document.title = title;

    // Update meta description
    const descriptionMap: Record<string, string> = {
      'us': 'Leading IPL device manufacturer in the USA providing OEM/ODM solutions from idea to market.',
      'mx': 'Fabricante líder de dispositivos IPL en México que ofrece soluciones OEM/ODM desde la idea hasta el mercado.',
      'de': 'Führender IPL-Gerätehersteller in Deutschland mit OEM/ODM-Lösungen von der Idee bis zum Markt.',
      'fr': 'Fabricant leader d\'appareils IPL en France fournissant des solutions OEM/ODM de l\'idée au marché.',
      'es': 'Fabricante líder de dispositivos IPL en España que ofrece soluciones OEM/ODM desde la idea hasta el mercado.',
      'br': 'Fabricante líder de dispositivos IPL no Brasil fornecendo soluções OEM/ODM da ideia ao mercado.',
      'jp': '日本でアイデアから市場まで完全なOEM/ODMソリューションを提供する大手IPLデバイスメーカー。',
      'cn': '中国领先的IPL设备制造商，提供从创意到市场的完整OEM/ODM解决方案。',
      'th': 'ผู้ผลิตอุปกรณ์ IPL ชั้นนำในประเทศไทยที่ให้บริการโซลูชัน OEM/ODM ครบวงจรจากไอเดียสู่ตลาด',
      'vn': 'Nhà sản xuất thiết bị IPL hàng đầu tại Việt Nam cung cấp giải pháp OEM/ODM hoàn chỉnh từ ý tưởng đến thị trường.',
      'id': 'Produsen perangkat IPL terkemuka di Indonesia yang menyediakan solusi OEM/ODM lengkap dari ide ke pasar.',
      'my': 'Pengilang peranti IPL terkemuka di Malaysia yang menyediakan penyelesaian OEM/ODM lengkap dari idea ke pasaran.',
      'global': 'Leading IPL device manufacturer providing OEM/ODM solutions from idea to market worldwide.'
    };

    const description = descriptionMap[country] || descriptionMap['global'];
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://ishine-ipl.com/iplmanufacturer/${country}`);
    } else {
      // Create canonical link if it doesn't exist
      const newCanonical = document.createElement('link');
      newCanonical.rel = 'canonical';
      newCanonical.href = `https://ishine-ipl.com/iplmanufacturer/${country}`;
      document.head.appendChild(newCanonical);
    }

    // Update hreflang tags for SEO
    updateHreflangTags(country);
  };

  const updateHreflangTags = (currentCountry: string) => {
    // Remove existing hreflang tags
    const existingHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflangs.forEach(tag => tag.remove());

    // Add new hreflang tags for major markets
    const hreflangMap = [
      { lang: 'en-US', country: 'us' },
      { lang: 'en-GB', country: 'gb' },
      { lang: 'de-DE', country: 'de' },
      { lang: 'fr-FR', country: 'fr' },
      { lang: 'es-ES', country: 'es' },
      { lang: 'es-MX', country: 'mx' },
      { lang: 'pt-BR', country: 'br' },
      { lang: 'ja-JP', country: 'jp' },
      { lang: 'zh-CN', country: 'cn' },
      { lang: 'th-TH', country: 'th' },
      { lang: 'vi-VN', country: 'vn' },
      { lang: 'id-ID', country: 'id' },
      { lang: 'ms-MY', country: 'my' },
      { lang: 'ar-AE', country: 'ae' },
      { lang: 'ar-SA', country: 'sa' },
      { lang: 'he-IL', country: 'il' },
      { lang: 'tr-TR', country: 'tr' },
      { lang: 'hi-IN', country: 'in' },
      { lang: 'ko-KR', country: 'kr' },
      { lang: 'x-default', country: 'global' }
    ];

    hreflangMap.forEach(({ lang, country }) => {
      const hreflang = document.createElement('link');
      hreflang.rel = 'alternate';
      hreflang.hreflang = lang;
      hreflang.href = `https://ishine-ipl.com/iplmanufacturer/${country}`;
      document.head.appendChild(hreflang);
    });
  };

  // Render the Home component with country-specific context
  return <Home />;
};

export default CountryPage;