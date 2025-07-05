import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet, useParams, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import FloatingWidgets from './components/Layout/FloatingWidgets';
import { languages } from './data/languages';

// Main Pages
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import IPLHairRemoval from './pages/IPLHairRemoval';
import HowToUse from './pages/HowToUse';
import About from './pages/About';
import Contact from './pages/Contact';

// Solutions Pages
import LogoPrinting from './pages/solutions/LogoPrinting';
import PackagingSolutions from './pages/solutions/PackagingSolutions';
import DropShipping from './pages/solutions/DropShipping';
import GlobalShipping from './pages/solutions/GlobalShipping';
import BrandCustomization from './pages/solutions/BrandCustomization';
import Compliance from './pages/solutions/Compliance';
import DesignPrototyping from './pages/solutions/DesignPrototyping';
import MultiHeadIPL from './pages/solutions/MultiHeadIPL';
import DualLampIPL from './pages/solutions/DualLampIPL';

// IPL Device Pages
import SmartAppIPL from './pages/ipl/SmartAppIPL';
import IceFeelingIPL from './pages/ipl/IceFeelingIPL';
import EmeraldIPL from './pages/ipl/EmeraldIPL';
import SkinSensorIPL from './pages/ipl/SkinSensorIPL';
import BatteryPoweredIPL from './pages/ipl/BatteryPoweredIPL';
import HandheldIPL from './pages/ipl/HandheldIPL';
import IceCoolingIPL from './pages/ipl/IceCoolingIPL';
import DualLampIPLDevice from './pages/ipl/DualLampIPLDevice';
import AIPoweredIPL from './pages/ipl/AIPoweredIPL';

// Accessories Pages
import SapphireLens from './pages/accessories/SapphireLens';
import Adapter from './pages/accessories/Adapter';
import ProtectiveGoggles from './pages/accessories/ProtectiveGoggles';
import Filter from './pages/accessories/Filter';

// Service & Support Pages
import AfterSalesService from './pages/service/AfterSalesService';
import WinFDAListing from './pages/service/WinFDAListing';
import IPLManufacturing from './pages/service/IPLManufacturing';
import KnowledgeBase from './pages/service/KnowledgeBase';
import BeautySourcing from './pages/service/BeautySourcing';
import PricingGuide from './pages/service/PricingGuide';
import HelpCenter from './pages/service/HelpCenter';
import Gallery from './pages/service/Gallery';
import Videos from './pages/service/Videos';

// Blog Pages
import NewsInsights from './pages/blog/NewsInsights';
import Industries from './pages/blog/Industries';
import IPLBestChoice from './pages/blog/IPLBestChoice';
import FutureHomeHairRemoval from './pages/blog/FutureHomeHairRemoval';
import FDA510kPathway from './pages/blog/FDA510kPathway';

// About Pages
import FounderMessage from './pages/about/FounderMessage';
import Technology from './pages/about/Technology';
import GlobalWitness from './pages/about/GlobalWitness';
import CorePrinciples from './pages/about/CorePrinciples';
import CompanyInfo from './pages/about/CompanyInfo';
import BrandStory from './pages/about/BrandStory';
import Quality from './pages/about/Quality';

// Country-specific page
import CountryPage from './pages/CountryPage';

// 404 Not Found Page
const NotFound: React.FC = () => (
  <div style={{ padding: '4rem', textAlign: 'center' }}>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
);

// Supported language codes
const supportedLangs = languages.map((l: { code: string }) => l.code.split('-')[0]);
const defaultLang = 'en';

// Layout with header/footer/widgets
const MainLayout: React.FC = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
    <FloatingWidgets />
  </>
);

// Language validation and context sync wrapper
const LanguageGuard: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const location = useLocation();
  const { setLanguage, currentLanguage } = useLanguage();

  // Validate language param
  if (!lang || !supportedLangs.includes(lang)) {
    return <Navigate to={`/${defaultLang}${location.pathname.replace(/^\/[a-z]{2}/, '')}${location.search}`} replace />;
  }

  // Sync context with URL
  useEffect(() => {
    if (lang && lang !== currentLanguage) {
      setLanguage(lang);
    }
  }, [lang, currentLanguage, setLanguage]);

  return <Outlet />;
};

// 自动检测浏览器语言并初始跳转
const AutoRedirect: React.FC = () => {
  const { currentLanguage, setLanguage } = useLanguage();
  useEffect(() => {
    // 检查URL是否已带语言前缀
    const path = window.location.pathname;
    const match = path.match(/^\/([a-z]{2})(\/|$)/);
    if (match) return; // 已有前缀
    // 检测浏览器语言
    const browserLang = (navigator.language || 'en').split('-')[0];
    const lang = supportedLangs.includes(browserLang) ? browserLang : 'en';
    setLanguage(lang);
    if (lang === 'en') return; // 英文留在/
    window.location.replace(`/${lang}${window.location.pathname}${window.location.search}`);
  }, [currentLanguage, setLanguage]);
  return null;
};

const HomeWithRedirect: React.FC = () => (
  <>
    <AutoRedirect />
    <Home />
  </>
);

const App: React.FC = () => (
  <HelmetProvider>
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          {/* 自动检测语言并初始跳转 */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomeWithRedirect />} />
          </Route>

          {/* 英文无前缀路由 */}
          <Route element={<MainLayout />}>
            <Route path="solutions" element={<Solutions />} />
            <Route path="ipl-hair-removal" element={<IPLHairRemoval />} />
            <Route path="ipl-hair-removal/smart-app" element={<SmartAppIPL />} />
            <Route path="ipl-hair-removal/ice-feeling" element={<IceFeelingIPL />} />
            <Route path="ipl-hair-removal/emerald" element={<EmeraldIPL />} />
            <Route path="ipl-hair-removal/skin-sensor" element={<SkinSensorIPL />} />
            <Route path="ipl-hair-removal/battery-powered" element={<BatteryPoweredIPL />} />
            <Route path="ipl-hair-removal/handheld" element={<HandheldIPL />} />
            <Route path="ipl-hair-removal/ice-cooling" element={<IceCoolingIPL />} />
            <Route path="ipl-hair-removal/dual-lamp" element={<DualLampIPLDevice />} />
            <Route path="ipl-hair-removal/ai-powered" element={<AIPoweredIPL />} />
            <Route path="how-to-use" element={<HowToUse />} />
            <Route path="about" element={<About />} />
            <Route path="about/founder-message" element={<FounderMessage />} />
            <Route path="about/technology" element={<Technology />} />
            <Route path="about/global-witness" element={<GlobalWitness />} />
            <Route path="about/core-principles" element={<CorePrinciples />} />
            <Route path="about/company" element={<CompanyInfo />} />
            <Route path="about/brand-story" element={<BrandStory />} />
            <Route path="about/quality" element={<Quality />} />
            <Route path="contact" element={<Contact />} />
            <Route path="solutions/logo-printing" element={<LogoPrinting />} />
            <Route path="solutions/packaging" element={<PackagingSolutions />} />
            <Route path="solutions/drop-shipping" element={<DropShipping />} />
            <Route path="solutions/global-shipping" element={<GlobalShipping />} />
            <Route path="solutions/brand-customization" element={<BrandCustomization />} />
            <Route path="solutions/compliance" element={<Compliance />} />
            <Route path="solutions/design-prototyping" element={<DesignPrototyping />} />
            <Route path="solutions/multi-head-ipl" element={<MultiHeadIPL />} />
            <Route path="solutions/dual-lamp-ipl" element={<DualLampIPL />} />
            <Route path="accessories/sapphire-lens" element={<SapphireLens />} />
            <Route path="accessories/adapter" element={<Adapter />} />
            <Route path="accessories/goggles" element={<ProtectiveGoggles />} />
            <Route path="accessories/filter" element={<Filter />} />
            <Route path="service-support/after-sales" element={<AfterSalesService />} />
            <Route path="service-support/win-fda-listing" element={<WinFDAListing />} />
            <Route path="service-support/manufacturing" element={<IPLManufacturing />} />
            <Route path="service-support/knowledge-base" element={<KnowledgeBase />} />
            <Route path="service-support/beauty-sourcing" element={<BeautySourcing />} />
            <Route path="service-support/pricing-guide" element={<PricingGuide />} />
            <Route path="service-support/help-center" element={<HelpCenter />} />
            <Route path="service-support/gallery" element={<Gallery />} />
            <Route path="service-support/videos" element={<Videos />} />
            <Route path="blog/news-insights" element={<NewsInsights />} />
            <Route path="blog/industries" element={<Industries />} />
            <Route path="blog/ipl-best-choice" element={<IPLBestChoice />} />
            <Route path="blog/future-home-hair-removal-devices" element={<FutureHomeHairRemoval />} />
            <Route path="blog/fda-510k-pathway" element={<FDA510kPathway />} />
            <Route path="iplmanufacturer/:countryCode" element={<CountryPage />} />
          </Route>

          {/* 非英文带前缀路由 */}
          <Route path=":lang" element={<LanguageGuard />}>
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="solutions" element={<Solutions />} />
              <Route path="ipl-hair-removal" element={<IPLHairRemoval />} />
              <Route path="ipl-hair-removal/smart-app" element={<SmartAppIPL />} />
              <Route path="ipl-hair-removal/ice-feeling" element={<IceFeelingIPL />} />
              <Route path="ipl-hair-removal/emerald" element={<EmeraldIPL />} />
              <Route path="ipl-hair-removal/skin-sensor" element={<SkinSensorIPL />} />
              <Route path="ipl-hair-removal/battery-powered" element={<BatteryPoweredIPL />} />
              <Route path="ipl-hair-removal/handheld" element={<HandheldIPL />} />
              <Route path="ipl-hair-removal/ice-cooling" element={<IceCoolingIPL />} />
              <Route path="ipl-hair-removal/dual-lamp" element={<DualLampIPLDevice />} />
              <Route path="ipl-hair-removal/ai-powered" element={<AIPoweredIPL />} />
              <Route path="how-to-use" element={<HowToUse />} />
              <Route path="about" element={<About />} />
              <Route path="about/founder-message" element={<FounderMessage />} />
              <Route path="about/technology" element={<Technology />} />
              <Route path="about/global-witness" element={<GlobalWitness />} />
              <Route path="about/core-principles" element={<CorePrinciples />} />
              <Route path="about/company" element={<CompanyInfo />} />
              <Route path="about/brand-story" element={<BrandStory />} />
              <Route path="about/quality" element={<Quality />} />
              <Route path="contact" element={<Contact />} />
              <Route path="solutions/logo-printing" element={<LogoPrinting />} />
              <Route path="solutions/packaging" element={<PackagingSolutions />} />
              <Route path="solutions/drop-shipping" element={<DropShipping />} />
              <Route path="solutions/global-shipping" element={<GlobalShipping />} />
              <Route path="solutions/brand-customization" element={<BrandCustomization />} />
              <Route path="solutions/compliance" element={<Compliance />} />
              <Route path="solutions/design-prototyping" element={<DesignPrototyping />} />
              <Route path="solutions/multi-head-ipl" element={<MultiHeadIPL />} />
              <Route path="solutions/dual-lamp-ipl" element={<DualLampIPL />} />
              <Route path="accessories/sapphire-lens" element={<SapphireLens />} />
              <Route path="accessories/adapter" element={<Adapter />} />
              <Route path="accessories/goggles" element={<ProtectiveGoggles />} />
              <Route path="accessories/filter" element={<Filter />} />
              <Route path="service-support/after-sales" element={<AfterSalesService />} />
              <Route path="service-support/win-fda-listing" element={<WinFDAListing />} />
              <Route path="service-support/manufacturing" element={<IPLManufacturing />} />
              <Route path="service-support/knowledge-base" element={<KnowledgeBase />} />
              <Route path="service-support/beauty-sourcing" element={<BeautySourcing />} />
              <Route path="service-support/pricing-guide" element={<PricingGuide />} />
              <Route path="service-support/help-center" element={<HelpCenter />} />
              <Route path="service-support/gallery" element={<Gallery />} />
              <Route path="service-support/videos" element={<Videos />} />
              <Route path="blog/news-insights" element={<NewsInsights />} />
              <Route path="blog/industries" element={<Industries />} />
              <Route path="blog/ipl-best-choice" element={<IPLBestChoice />} />
              <Route path="blog/future-home-hair-removal-devices" element={<FutureHomeHairRemoval />} />
              <Route path="blog/fda-510k-pathway" element={<FDA510kPathway />} />
              <Route path="iplmanufacturer/:countryCode" element={<CountryPage />} />
            </Route>
          </Route>

          {/* /en/* 自动重定向到无前缀 */}
          <Route path="en/*" element={<Navigate to={window.location.pathname.replace(/^\/en/, '') || '/'} replace />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;