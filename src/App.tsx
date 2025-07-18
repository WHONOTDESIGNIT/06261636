import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useParams } from 'react-router-dom';
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

// Service Support Main Page
import ServiceSupport from './pages/ServiceSupport';

// Blog Pages
import NewsInsights from './pages/blog/NewsInsights';
import Industries from './pages/blog/Industries';
import IPLBestChoice from './pages/blog/IPLBestChoice';
import FutureHomeHairRemoval from './pages/blog/FutureHomeHairRemoval';
import FDA510kPathway from './pages/blog/FDA510kPathway';
import MultiHeadIPLSystems from './pages/blog/MultiHeadIPLSystems';
import AIPoweredSkinSensing from './pages/blog/AIPoweredSkinSensing';
import GlobalMarketShifts from './pages/blog/GlobalMarketShifts';
import SustainableManufacturing from './pages/blog/SustainableManufacturing';

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

// Sitemap Page
import Sitemap from './pages/Sitemap';

// Shipping Cost Page
import ShippingCostPage from './pages/shipping-cost';

// 404 Not Found Page
const NotFound: React.FC = () => (
  <div style={{ padding: '4rem', textAlign: 'center' }}>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
);

// Supported language codes
const supportedLangs = languages.map((l: { code: string }) => l.code.split('-')[0]);

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

// Language validation wrapper (updated to handle optional lang)
const LanguageGuard: React.FC = () => {
  const { lang } = useParams<{ lang?: string }>();
  const { setLanguage, currentLanguage } = useLanguage();

  // Normalize lang: treat undefined or 'en' as English (no prefix)
  const effectiveLang = lang && lang !== 'en' ? lang : 'en';

  // Validate language param
  if (lang && !supportedLangs.includes(lang)) {
    return <NotFound />;
  }

  // Sync context with URL
  useEffect(() => {
    if (effectiveLang !== currentLanguage) {
      setLanguage(effectiveLang);
    }
  }, [effectiveLang, currentLanguage, setLanguage]);

  return <Outlet />;
};

// Home page with language setup
const HomeWithLanguageSetup: React.FC = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return <Home />;
};

// Unified routes array (no duplication)
const routes = [
  { path: '', element: <HomeWithLanguageSetup /> },
  { path: 'solutions', element: <Solutions /> },
  { path: 'service-support', element: <ServiceSupport /> },
  { path: 'ipl-hair-removal', element: <IPLHairRemoval /> },
  { path: 'ipl-hair-removal/smart-app', element: <SmartAppIPL /> },
  { path: 'ipl-hair-removal/ice-feeling', element: <IceFeelingIPL /> },
  { path: 'ipl-hair-removal/emerald', element: <EmeraldIPL /> },
  { path: 'ipl-hair-removal/skin-sensor', element: <SkinSensorIPL /> },
  { path: 'ipl-hair-removal/battery-powered', element: <BatteryPoweredIPL /> },
  { path: 'ipl-hair-removal/handheld', element: <HandheldIPL /> },
  { path: 'ipl-hair-removal/ice-cooling', element: <IceCoolingIPL /> },
  { path: 'ipl-hair-removal/dual-lamp', element: <DualLampIPLDevice /> },
  { path: 'ipl-hair-removal/ai-powered', element: <AIPoweredIPL /> },
  { path: 'how-to-use', element: <HowToUse /> },
  { path: 'about', element: <About /> },
  { path: 'about/founder-message', element: <FounderMessage /> },
  { path: 'about/technology', element: <Technology /> },
  { path: 'about/global-witness', element: <GlobalWitness /> },
  { path: 'about/core-principles', element: <CorePrinciples /> },
  { path: 'about/company', element: <CompanyInfo /> },
  { path: 'about/brand-story', element: <BrandStory /> },
  { path: 'about/quality', element: <Quality /> },
  { path: 'contact', element: <Contact /> },
  { path: 'solutions/logo-printing', element: <LogoPrinting /> },
  { path: 'solutions/packaging', element: <PackagingSolutions /> },
  { path: 'solutions/drop-shipping', element: <DropShipping /> },
  { path: 'solutions/global-shipping', element: <GlobalShipping /> },
  { path: 'solutions/brand-customization', element: <BrandCustomization /> },
  { path: 'solutions/compliance', element: <Compliance /> },
  { path: 'solutions/design-prototyping', element: <DesignPrototyping /> },
  { path: 'solutions/multi-head-ipl', element: <MultiHeadIPL /> },
  { path: 'solutions/dual-lamp-ipl', element: <DualLampIPL /> },
  { path: 'accessories/sapphire-lens', element: <SapphireLens /> },
  { path: 'accessories/adapter', element: <Adapter /> },
  { path: 'accessories/goggles', element: <ProtectiveGoggles /> },
  { path: 'accessories/filter', element: <Filter /> },
  { path: 'service-support/after-sales', element: <AfterSalesService /> },
  { path: 'service-support/win-fda-listing', element: <WinFDAListing /> },
  { path: 'service-support/manufacturing', element: <IPLManufacturing /> },
  { path: 'service-support/knowledge-base', element: <KnowledgeBase /> },
  { path: 'service-support/beauty-sourcing', element: <BeautySourcing /> },
  { path: 'service-support/pricing-guide', element: <PricingGuide /> },
  { path: 'service-support/help-center', element: <HelpCenter /> },
  { path: 'service-support/gallery', element: <Gallery /> },
  { path: 'service-support/videos', element: <Videos /> },
  { path: 'blog/news-insights', element: <NewsInsights /> },
  { path: 'blog/industries', element: <Industries /> },
  { path: 'blog/ipl-best-choice', element: <IPLBestChoice /> },
  { path: 'blog/future-home-hair-removal-devices', element: <FutureHomeHairRemoval /> },
  { path: 'blog/fda-510k-pathway', element: <FDA510kPathway /> },
  { path: 'blog/multi-head-ipl-systems', element: <MultiHeadIPLSystems /> },
  { path: 'blog/ai-powered-skin-sensing', element: <AIPoweredSkinSensing /> },
  { path: 'blog/global-market-shifts', element: <GlobalMarketShifts /> },
  { path: 'blog/sustainable-manufacturing', element: <SustainableManufacturing /> },
  { path: 'iplmanufacturer/:countryCode', element: <CountryPage /> },
  { path: 'sitemap', element: <Sitemap /> },
  { path: 'shipping-cost', element: <ShippingCostPage /> }
];

const App: React.FC = () => (
  <HelmetProvider>
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          {/* 统一动态路由：:lang? 表示 lang 可选 (英文无前缀) */}
          <Route path='/:lang?' element={<LanguageGuard />}>
            <Route element={<MainLayout />}>
              {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
              <Route path='*' element={<NotFound />} />
            </Route>
          </Route>
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;