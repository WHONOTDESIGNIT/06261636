import React, { useEffect, Suspense, lazy, useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useParams, useLocation, useNavigate } from 'react-router-dom';
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

// Language validation wrapper
const LanguageGuard: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    // 如果路径以 /en 开头，重定向到无语言前缀的版本
    if (location.pathname.startsWith('/en') && !hasRedirected) {
      const newPath = location.pathname.replace(/^\/en/, '') || '/';
      setHasRedirected(true);
      
      requestAnimationFrame(() => {
        navigate(newPath + location.search + location.hash, { replace: true });
      });
      return;
    }

    // 如果有语言参数但不在支持列表中，重定向到首页
    if (lang && !supportedLangs.includes(lang) && !hasRedirected) {
      setHasRedirected(true);
      requestAnimationFrame(() => {
        navigate('/', { replace: true });
      });
      return;
    }
  }, [lang, location.pathname, navigate, hasRedirected]);

  return <Outlet />;
};

// Home page with language setup
const HomeWithLanguageSetup: React.FC = () => {
  const { setLanguage } = useLanguage();
  const { lang } = useParams<{ lang: string }>();

  useEffect(() => {
    if (lang && supportedLangs.includes(lang)) {
      setLanguage(lang);
    } else {
      setLanguage('en');
    }
  }, [lang, setLanguage]);

  return <Home />;
};

// Unified routes array
const routes = [
  // Main pages
  { path: '/', element: <HomeWithLanguageSetup /> },
  { path: '/solutions', element: <Solutions /> },
  { path: '/ipl-hair-removal', element: <IPLHairRemoval /> },
  { path: '/how-to-use', element: <HowToUse /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  
  // Solutions pages
  { path: '/solutions/logo-printing', element: <LogoPrinting /> },
  { path: '/solutions/packaging-solutions', element: <PackagingSolutions /> },
  { path: '/solutions/drop-shipping', element: <DropShipping /> },
  { path: '/solutions/global-shipping', element: <GlobalShipping /> },
  { path: '/solutions/brand-customization', element: <BrandCustomization /> },
  { path: '/solutions/compliance', element: <Compliance /> },
  { path: '/solutions/design-prototyping', element: <DesignPrototyping /> },
  { path: '/solutions/multi-head-ipl', element: <MultiHeadIPL /> },
  { path: '/solutions/dual-lamp-ipl', element: <DualLampIPL /> },
  
  // IPL Device pages
  { path: '/ipl/smart-app-ipl', element: <SmartAppIPL /> },
  { path: '/ipl/ice-feeling-ipl', element: <IceFeelingIPL /> },
  { path: '/ipl/emerald-ipl', element: <EmeraldIPL /> },
  { path: '/ipl/skin-sensor-ipl', element: <SkinSensorIPL /> },
  { path: '/ipl/battery-powered-ipl', element: <BatteryPoweredIPL /> },
  { path: '/ipl/handheld-ipl', element: <HandheldIPL /> },
  { path: '/ipl/ice-cooling-ipl', element: <IceCoolingIPL /> },
  { path: '/ipl/dual-lamp-ipl-device', element: <DualLampIPLDevice /> },
  { path: '/ipl/ai-powered-ipl', element: <AIPoweredIPL /> },
  
  // Accessories pages
  { path: '/accessories/sapphire-lens', element: <SapphireLens /> },
  { path: '/accessories/adapter', element: <Adapter /> },
  { path: '/accessories/protective-goggles', element: <ProtectiveGoggles /> },
  { path: '/accessories/filter', element: <Filter /> },
  
  // Service & Support pages
  { path: '/service-support', element: <ServiceSupport /> },
  { path: '/service/after-sales-service', element: <AfterSalesService /> },
  { path: '/service/win-fda-listing', element: <WinFDAListing /> },
  { path: '/service/ipl-manufacturing', element: <IPLManufacturing /> },
  { path: '/service/knowledge-base', element: <KnowledgeBase /> },
  { path: '/service/beauty-sourcing', element: <BeautySourcing /> },
  { path: '/service/pricing-guide', element: <PricingGuide /> },
  { path: '/service/help-center', element: <HelpCenter /> },
  { path: '/service/gallery', element: <Gallery /> },
  { path: '/service/videos', element: <Videos /> },
  
  // Blog pages
  { path: '/blog/news-insights', element: <NewsInsights /> },
  { path: '/blog/industries', element: <Industries /> },
  { path: '/blog/ipl-best-choice', element: <IPLBestChoice /> },
  { path: '/blog/future-home-hair-removal', element: <FutureHomeHairRemoval /> },
  { path: '/blog/fda-510k-pathway', element: <FDA510kPathway /> },
  { path: '/blog/multi-head-ipl-systems', element: <MultiHeadIPLSystems /> },
  { path: '/blog/ai-powered-skin-sensing', element: <AIPoweredSkinSensing /> },
  { path: '/blog/global-market-shifts', element: <GlobalMarketShifts /> },
  { path: '/blog/sustainable-manufacturing', element: <SustainableManufacturing /> },
  
  // About pages
  { path: '/about/founder-message', element: <FounderMessage /> },
  { path: '/about/technology', element: <Technology /> },
  { path: '/about/global-witness', element: <GlobalWitness /> },
  { path: '/about/core-principles', element: <CorePrinciples /> },
  { path: '/about/company-info', element: <CompanyInfo /> },
  { path: '/about/brand-story', element: <BrandStory /> },
  { path: '/about/quality', element: <Quality /> },
  
  // Country pages
  { path: '/country/:countryCode', element: <CountryPage /> },
  
  // Other pages
  { path: '/sitemap', element: <Sitemap /> },
  { path: '/shipping-cost', element: <ShippingCostPage /> },
  { path: '/admin', element: <AdminPage /> },
];

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route element={<LanguageGuard />}>
                {routes.map((route, index) => (
                  <Route key={index} path={route.path} element={route.element} />
                ))}
                
                {/* Language-prefixed routes */}
                <Route path="/:lang" element={<LanguageGuard />}>
                  {routes.map((route, index) => (
                    <Route key={`lang-${index}`} path={route.path} element={route.element} />
                  ))}
                </Route>
              </Route>
              
              {/* 404 fallback */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  );
};

export default App;