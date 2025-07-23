import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getLanguageFromCountryCode } from '../utils/languageUtils';
import Home from './Home';
import { Helmet } from 'react-helmet';

const CountryPage: React.FC = () => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const { setLanguage, t } = useLanguage();

  // 用t()国际化title和description
  const title = t('countryPage.title', 'iShine - IPL Device Manufacturing Solutions | Global');
  const description = t('countryPage.description', 'Leading IPL device manufacturer providing OEM/ODM solutions from idea to market worldwide.');

  useEffect(() => {
    if (countryCode) {
      // 静态确定语言，不触发页面重定向
      const detectedLanguage = getLanguageFromCountryCode(countryCode);
      setLanguage(detectedLanguage);
      // 更新SEO标签但不触发重定向
      updateMetaTags(countryCode);
    } else {
      // 设置默认title和description
      document.title = title;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
  }, [countryCode, setLanguage, title, description]);

  const updateMetaTags = (countryCode: string) => {
    // 国家特定的页面元数据
    const countryMetadata: Record<string, { title: string; description: string; }> = {
      us: {
        title: "iShine IPL Devices Manufacturing USA | FDA Approved Solutions | Custom OEM/ODM",
        description: "Leading IPL device manufacturer for USA market. FDA approved manufacturing solutions from idea to market. Custom OEM/ODM services.",
      },
      gb: {
        title: "iShine IPL Device Manufacturing UK | Professional Beauty Equipment | CE Certified",
        description: "Professional IPL device manufacturing for UK market. Quality beauty equipment solutions with CE certification and compliance.",
      },
      de: {
        title: "iShine IPL Geräte Herstellung Deutschland | Professionelle Beauty Ausrüstung | CE Zertifiziert",
        description: "Professionelle IPL Geräte Herstellung für den deutschen Markt. Qualitäts Beauty Equipment Lösungen mit CE Zertifizierung.",
      },
      fr: {
        title: "iShine Fabrication d'Appareils IPL France | Équipement de Beauté Professionnel | CE Certifié",
        description: "Fabrication professionnelle d'appareils IPL pour le marché français. Solutions d'équipement de beauté de qualité avec certification CE.",
      },
      es: {
        title: "iShine Fabricación de Dispositivos IPL España | Equipos de Belleza Profesionales | CE Certificado",
        description: "Fabricación profesional de dispositivos IPL para el mercado español. Soluciones de equipos de belleza de calidad con certificación CE.",
      },
      it: {
        title: "iShine Produzione Dispositivi IPL Italia | Attrezzature per la Bellezza Professionali | CE Certificato",
        description: "Produzione professionale di dispositivi IPL per il mercato italiano. Soluzioni di attrezzature per la bellezza di qualità con certificazione CE.",
      },
      pt: {
        title: "iShine Fabricação de Dispositivos IPL Portugal | Equipamentos de Beleza Profissionais | CE Certificado",
        description: "Fabricação profissional de dispositivos IPL para o mercado português. Soluções de equipamentos de beleza de qualidade com certificação CE.",
      },
      nl: {
        title: "iShine IPL Apparaten Productie Nederland | Professionele Beauty Apparatuur | CE Gecertificeerd",
        description: "Professionele IPL apparaten productie voor de Nederlandse markt. Kwaliteits beauty apparatuur oplossingen met CE certificering.",
      },
      mx: {
        title: "iShine Fabricación de Dispositivos IPL México | Equipos de Belleza Profesionales | NOM Certificado",
        description: "Fabricación profesional de dispositivos IPL para el mercado mexicano. Soluciones de equipos de belleza de calidad con certificación NOM.",
      },
      br: {
        title: "iShine Fabricação de Dispositivos IPL Brasil | Equipamentos de Beleza Profissionais | ANVISA Aprovado",
        description: "Fabricação profissional de dispositivos IPL para o mercado brasileiro. Soluções de equipamentos de beleza de qualidade com aprovação ANVISA.",
      },
      jp: {
        title: "iShine IPLデバイス製造 日本 | プロフェッショナル美容機器 | PMDA承認済み",
        description: "日本市場向けプロフェッショナルIPLデバイス製造。品質美容機器ソリューション。PMDA承認済み製品。",
      },
      kr: {
        title: "iShine IPL 기기 제조 한국 | 전문 미용 장비 | MFDS 승인",
        description: "한국 시장을 위한 전문 IPL 기기 제조. 고품질 미용 장비 솔루션. MFDS 승인 제품.",
      },
      cn: {
        title: "iShine IPL设备制造 中国 | 专业美容设备 | NMPA认证",
        description: "面向中国市场的专业IPL设备制造。优质美容设备解决方案。NMPA认证产品。",
      },
      tw: {
        title: "iShine IPL設備製造 台灣 | 專業美容設備 | TFDA認證",
        description: "面向台灣市場的專業IPL設備製造。優質美容設備解決方案。TFDA認證產品。",
      },
      th: {
        title: "iShine การผลิตอุปกรณ์ IPL ประเทศไทย | อุปกรณ์ความงามมืออาชีพ | อย. อนุมัติ",
        description: "การผลิตอุปกรณ์ IPL มืออาชีพสำหรับตลาดไทย โซลูชันอุปกรณ์ความงามคุณภาพสูง ผลิตภัณฑ์ที่ได้รับอนุมัติจาก อย.",
      },
      vn: {
        title: "iShine Sản xuất Thiết bị IPL Việt Nam | Thiết bị Làm đẹp Chuyên nghiệp | Bộ Y tế Phê duyệt",
        description: "Sản xuất thiết bị IPL chuyên nghiệp cho thị trường Việt Nam. Giải pháp thiết bị làm đẹp chất lượng cao. Sản phẩm được Bộ Y tế phê duyệt.",
      },
      id: {
        title: "iShine Manufaktur Perangkat IPL Indonesia | Peralatan Kecantikan Profesional | BPOM Disetujui",
        description: "Manufaktur perangkat IPL profesional untuk pasar Indonesia. Solusi peralatan kecantikan berkualitas tinggi. Produk disetujui BPOM.",
      },
      my: {
        title: "iShine Pembuatan Peranti IPL Malaysia | Peralatan Kecantikan Profesional | MDA Diluluskan",
        description: "Pembuatan peranti IPL profesional untuk pasaran Malaysia. Penyelesaian peralatan kecantikan berkualiti tinggi. Produk diluluskan MDA.",
      },
      ae: {
        title: "iShine تصنيع أجهزة IPL الإمارات | معدات تجميل احترافية | وزارة الصحة معتمدة",
        description: "تصنيع أجهزة IPL احترافية للسوق الإماراتي. حلول معدات التجميل عالية الجودة. منتجات معتمدة من وزارة الصحة.",
      },
      sa: {
        title: "iShine تصنيع أجهزة IPL السعودية | معدات تجميل احترافية | SFDA معتمدة",
        description: "تصنيع أجهزة IPL احترافية للسوق السعودي. حلول معدات التجميل عالية الجودة. منتجات معتمدة من الهيئة السعودية للغذاء والدواء.",
      },
      il: {
        title: "iShine ייצור מכשירי IPL ישראל | ציוד יופי מקצועי | משרד הבריאות מאושר",
        description: "ייצור מכשירי IPL מקצועי לשוק הישראלי. פתרונות ציוד יופי איכותיים. מוצרים מאושרים על ידי משרד הבריאות.",
      },
      tr: {
        title: "iShine IPL Cihaz Üretimi Türkiye | Profesyonel Güzellik Ekipmanları | TİTCK Onaylı",
        description: "Türkiye pazarı için profesyonel IPL cihaz üretimi. Kaliteli güzellik ekipmanı çözümleri. TİTCK onaylı ürünler.",
      },
      in: {
        title: "iShine IPL उपकरण निर्माण भारत | पेशेवर सौंदर्य उपकरण | CDSCO अनुमोदित",
        description: "भारतीय बाजार के लिए पेशेवर IPL उपकरण निर्माण। गुणवत्तापूर्ण सौंदर्य उपकरण समाधान। CDSCO अनुमोदित उत्पाद।",
      },
      cz: {
        title: "iShine Výroba IPL zařízení Česká republika | Profesionální kosmetické vybavení | SÚKL Schváleno",
        description: "Profesionální výroba IPL zařízení pro český trh. Kvalitní řešení kosmetického vybavení. SÚKL schválené produkty.",
      },
      dk: {
        title: "iShine IPL Udstyr Produktion Danmark | Professionelt Skønhedsudstyr | Lægemiddelstyrelsen Godkendt",
        description: "Professionel IPL udstyr produktion for det danske marked. Kvalitets skønhedsudstyr løsninger. Lægemiddelstyrelsen godkendte produkter.",
      },
      ee: {
        title: "iShine IPL Seadmete Tootmine Eesti | Professionaalne Iluseadmed | Ravimiamet Kinnitatud",
        description: "Professionaalne IPL seadmete tootmine Eesti turule. Kvaliteetsed iluseadmete lahendused. Ravimiameti kinnitatud tooted.",
      },
      hr: {
        title: "iShine Proizvodnja IPL uređaja Hrvatska | Profesionalna oprema za ljepotu | HALMED Odobreno",
        description: "Profesionalna proizvodnja IPL uređaja za hrvatsko tržište. Kvalitetna rješenja opreme za ljepotu. HALMED odobreni proizvodi.",
      },
      be: {
        title: "iShine IPL Apparaten Productie België | Professionele Beauty Apparatuur | FAGG Goedgekeurd",
        description: "Professionele IPL apparaten productie voor de Belgische markt. Kwaliteits beauty apparatuur oplossingen. FAGG goedgekeurde producten.",
      }
    };

    const metadata = countryMetadata[countryCode] || {
      title: title,
      description: description
    };

    document.title = metadata.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', metadata.description);
    }

    // 添加地理定位元标签
    const addOrUpdateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    addOrUpdateMeta('geo.region', countryCode.toUpperCase());
    addOrUpdateMeta('geo.position', getCountryPosition(countryCode));
    addOrUpdateMeta('ICBM', getCountryPosition(countryCode));

    // 更新hreflang标签 - 静态更新，不触发重定向
    updateHreflangTags();
  };

  const getCountryPosition = (countryCode: string): string => {
    const positions: Record<string, string> = {
      us: "39.8283, -98.5795",
      gb: "55.3781, -3.4360",
      de: "51.1657, 10.4515",
      fr: "46.2276, 2.2137",
      es: "40.4637, -3.7492",
      it: "41.8719, 12.5674",
      pt: "39.3999, -8.2245",
      nl: "52.1326, 5.2913",
      mx: "23.6345, -102.5528",
      br: "-14.2350, -51.9253",
      jp: "36.2048, 138.2529",
      kr: "35.9078, 127.7669",
      cn: "35.8617, 104.1954",
      tw: "23.6978, 120.9605",
      th: "15.8700, 100.9925",
      vn: "14.0583, 108.2772",
      id: "-0.7893, 113.9213",
      my: "4.2105, 101.9758",
      ae: "23.4241, 53.8478",
      sa: "23.8859, 45.0792",
      il: "31.0461, 34.8516",
      tr: "38.9637, 35.2433",
      in: "20.5937, 78.9629",
      cz: "49.8175, 15.4730",
      dk: "56.2639, 9.5018",
      ee: "58.5953, 25.0136",
      hr: "45.1000, 15.2000",
      be: "50.5039, 4.4699"
    };
    return positions[countryCode] || "0, 0";
  };

  const updateHreflangTags = () => {
    // 移除现有的hreflang标签
    const existingHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflangs.forEach(tag => tag.remove());

    // 为主要市场添加新的hreflang标签 - 静态URL，无重定向
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
      // 使用静态URL，不会触发重定向
      hreflang.href = `https://iplmanufacturer.com/iplmanufacturer/${country}`;
      document.head.appendChild(hreflang);
    });
  };

  // 直接渲染Home组件，不进行任何重定向
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Home />
    </>
  );
};

export default CountryPage;