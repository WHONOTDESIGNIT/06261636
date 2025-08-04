import React, { useEffect, Suspense, lazy, useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useParams, useLocation, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
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
  const navigate = useNavigate();
  const location = useLocation();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    // 避免在服务器端重定向后再次重定向
    if (isRedirecting || typeof window === 'undefined') return;

    const currentLang = lang || 'en';
    const isValidLang = supportedLangs.includes(currentLang);
    
    // 只在客户端且语言无效时重定向
    if (!isValidLang && typeof window !== 'undefined') {
      setIsRedirecting(true);
      // 使用setTimeout避免与Netlify重定向冲突
      setTimeout(() => {
        const newPath = location.pathname.replace(/^\/[a-z]{2}/, '') || '/';
        navigate(newPath, { replace: true });
      }, 100);
    }
  }, [lang, navigate, location.pathname, isRedirecting]);

  if (isRedirecting) {
    return <LoadingSpinner />;
  }

  return <MainLayout />;
};

// Main App component
const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <LanguageProvider>
          <Routes>
            {/* Root redirect */}
            <Route path="/" element={<Home />} />
            
            {/* Language-specific routes */}
            <Route path="/:lang" element={<LanguageGuard />}>
              <Route index element={<Home />} />
              <Route path="solutions" element={<Solutions />} />
              <Route path="solutions/logo-printing" element={<LogoPrinting />} />
              <Route path="solutions/packaging-solutions" element={<PackagingSolutions />} />
              <Route path="solutions/drop-shipping" element={<DropShipping />} />
              <Route path="solutions/global-shipping" element={<GlobalShipping />} />
              <Route path="solutions/brand-customization" element={<BrandCustomization />} />
              <Route path="solutions/compliance" element={<Compliance />} />
              <Route path="solutions/design-prototyping" element={<DesignPrototyping />} />
              <Route path="solutions/multi-head-ipl" element={<MultiHeadIPL />} />
              <Route path="solutions/dual-lamp-ipl" element={<DualLampIPL />} />
              
              <Route path="ipl-hair-removal" element={<IPLHairRemoval />} />
              <Route path="ipl/smart-app-ipl" element={<SmartAppIPL />} />
              <Route path="ipl/ice-feeling-ipl" element={<IceFeelingIPL />} />
              <Route path="ipl/emerald-ipl" element={<EmeraldIPL />} />
              <Route path="ipl/skin-sensor-ipl" element={<SkinSensorIPL />} />
              <Route path="ipl/battery-powered-ipl" element={<BatteryPoweredIPL />} />
              <Route path="ipl/handheld-ipl" element={<HandheldIPL />} />
              <Route path="ipl/ice-cooling-ipl" element={<IceCoolingIPL />} />
              <Route path="ipl/dual-lamp-ipl-device" element={<DualLampIPLDevice />} />
              <Route path="ipl/ai-powered-ipl" element={<AIPoweredIPL />} />
              
              <Route path="accessories/sapphire-lens" element={<SapphireLens />} />
              <Route path="accessories/adapter" element={<Adapter />} />
              <Route path="accessories/protective-goggles" element={<ProtectiveGoggles />} />
              <Route path="accessories/filter" element={<Filter />} />
              
              <Route path="service-support" element={<ServiceSupport />} />
              <Route path="service/after-sales-service" element={<AfterSalesService />} />
              <Route path="service/win-fda-listing" element={<WinFDAListing />} />
              <Route path="service/ipl-manufacturing" element={<IPLManufacturing />} />
              <Route path="service/knowledge-base" element={<KnowledgeBase />} />
              <Route path="service/beauty-sourcing" element={<BeautySourcing />} />
              <Route path="service/pricing-guide" element={<PricingGuide />} />
              <Route path="service/help-center" element={<HelpCenter />} />
              <Route path="service/gallery" element={<Gallery />} />
              <Route path="service/videos" element={<Videos />} />
              
              <Route path="blog/news-insights" element={<NewsInsights />} />
              <Route path="blog/industries" element={<Industries />} />
              <Route path="blog/ipl-best-choice" element={<IPLBestChoice />} />
              <Route path="blog/future-home-hair-removal" element={<FutureHomeHairRemoval />} />
              <Route path="blog/fda-510k-pathway" element={<FDA510kPathway />} />
              <Route path="blog/multi-head-ipl-systems" element={<MultiHeadIPLSystems />} />
              <Route path="blog/ai-powered-skin-sensing" element={<AIPoweredSkinSensing />} />
              <Route path="blog/global-market-shifts" element={<GlobalMarketShifts />} />
              <Route path="blog/sustainable-manufacturing" element={<SustainableManufacturing />} />
              
              <Route path="how-to-use" element={<HowToUse />} />
              <Route path="about" element={<About />} />
              <Route path="about/founder-message" element={<FounderMessage />} />
              <Route path="about/technology" element={<Technology />} />
              <Route path="about/global-witness" element={<GlobalWitness />} />
              <Route path="about/core-principles" element={<CorePrinciples />} />
              <Route path="about/company-info" element={<CompanyInfo />} />
              <Route path="about/brand-story" element={<BrandStory />} />
              <Route path="about/quality" element={<Quality />} />
              <Route path="contact" element={<Contact />} />
              <Route path="country/:countryCode" element={<CountryPage />} />
              <Route path="sitemap" element={<Sitemap />} />
              <Route path="shipping-cost" element={<ShippingCostPage />} />
              <Route path="admin" element={<AdminPage />} />
            </Route>
            
            {/* Catch all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;