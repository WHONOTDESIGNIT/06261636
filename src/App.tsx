import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useParams, lazy, Suspense } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import FloatingWidgets from './components/Layout/FloatingWidgets';
import { languages } from './data/languages';

// Main Pages
import Home from './pages/Home';

// Lazy load main pages
const Solutions = lazy(() => import('./pages/Solutions'));
const IPLHairRemoval = lazy(() => import('./pages/IPLHairRemoval'));
const HowToUse = lazy(() => import('./pages/HowToUse'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

// Lazy load Solutions Pages
const LogoPrinting = lazy(() => import('./pages/solutions/LogoPrinting'));
const PackagingSolutions = lazy(() => import('./pages/solutions/PackagingSolutions'));
const DropShipping = lazy(() => import('./pages/solutions/DropShipping'));
const GlobalShipping = lazy(() => import('./pages/solutions/GlobalShipping'));
const BrandCustomization = lazy(() => import('./pages/solutions/BrandCustomization'));
const Compliance = lazy(() => import('./pages/solutions/Compliance'));
const DesignPrototyping = lazy(() => import('./pages/solutions/DesignPrototyping'));
const MultiHeadIPL = lazy(() => import('./pages/solutions/MultiHeadIPL'));
const DualLampIPL = lazy(() => import('./pages/solutions/DualLampIPL'));

// Lazy load IPL Device Pages
const SmartAppIPL = lazy(() => import('./pages/ipl/SmartAppIPL'));
const IceFeelingIPL = lazy(() => import('./pages/ipl/IceFeelingIPL'));
const EmeraldIPL = lazy(() => import('./pages/ipl/EmeraldIPL'));
const SkinSensorIPL = lazy(() => import('./pages/ipl/SkinSensorIPL'));
const BatteryPoweredIPL = lazy(() => import('./pages/ipl/BatteryPoweredIPL'));
const HandheldIPL = lazy(() => import('./pages/ipl/HandheldIPL'));
const IceCoolingIPL = lazy(() => import('./pages/ipl/IceCoolingIPL'));
const DualLampIPLDevice = lazy(() => import('./pages/ipl/DualLampIPLDevice'));
const AIPoweredIPL = lazy(() => import('./pages/ipl/AIPoweredIPL'));

// Lazy load Accessories Pages
const SapphireLens = lazy(() => import('./pages/accessories/SapphireLens'));
const Adapter = lazy(() => import('./pages/accessories/Adapter'));
const ProtectiveGoggles = lazy(() => import('./pages/accessories/ProtectiveGoggles'));
const Filter = lazy(() => import('./pages/accessories/Filter'));

// Lazy load Service & Support Pages
const AfterSalesService = lazy(() => import('./pages/service/AfterSalesService'));
const WinFDAListing = lazy(() => import('./pages/service/WinFDAListing'));
const IPLManufacturing = lazy(() => import('./pages/service/IPLManufacturing'));
const KnowledgeBase = lazy(() => import('./pages/service/KnowledgeBase'));
const BeautySourcing = lazy(() => import('./pages/service/BeautySourcing'));
const PricingGuide = lazy(() => import('./pages/service/PricingGuide'));
const HelpCenter = lazy(() => import('./pages/service/HelpCenter'));
const Gallery = lazy(() => import('./pages/service/Gallery'));
const Videos = lazy(() => import('./pages/service/Videos'));

// Service Support Main Page
const ServiceSupport = lazy(() => import('./pages/ServiceSupport'));

// Lazy load Blog Pages
const NewsInsights = lazy(() => import('./pages/blog/NewsInsights'));
const Industries = lazy(() => import('./pages/blog/Industries'));
const IPLBestChoice = lazy(() => import('./pages/blog/IPLBestChoice'));
const FutureHomeHairRemoval = lazy(() => import('./pages/blog/FutureHomeHairRemoval'));
const FDA510kPathway = lazy(() => import('./pages/blog/FDA510kPathway'));
const MultiHeadIPLSystems = lazy(() => import('./pages/blog/MultiHeadIPLSystems'));
const AIPoweredSkinSensing = lazy(() => import('./pages/blog/AIPoweredSkinSensing'));
const GlobalMarketShifts = lazy(() => import('./pages/blog/GlobalMarketShifts'));
const SustainableManufacturing = lazy(() => import('./pages/blog/SustainableManufacturing'));

// Lazy load About Pages
const FounderMessage = lazy(() => import('./pages/about/FounderMessage'));
const Technology = lazy(() => import('./pages/about/Technology'));
const GlobalWitness = lazy(() => import('./pages/about/GlobalWitness'));
const CorePrinciples = lazy(() => import('./pages/about/CorePrinciples'));
const CompanyInfo = lazy(() => import('./pages/about/CompanyInfo'));
const BrandStory = lazy(() => import('./pages/about/BrandStory'));
const Quality = lazy(() => import('./pages/about/Quality'));

// Country-specific page
const CountryPage = lazy(() => import('./pages/CountryPage'));

// Sitemap Page
const Sitemap = lazy(() => import('./pages/Sitemap'));

// Shipping Cost Page
const ShippingCostPage = lazy(() => import('./pages/shipping-cost'));
const AdminPage = lazy(() => import('./pages/Admin'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-ishine-blue-500"></div>
  </div>
);

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
const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
};

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
  { path: 'shipping-cost', element: <ShippingCostPage /> },
  { path: 'admin', element: <AdminPage /> }
];

const App: React.FC = () => (
  <HelmetProvider context={{}}>
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