import { BrowserRouter as Router, Routes, Route, Navigate, useParams, useLocation, useNavigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { HelmetProvider } from 'react-helmet-async';
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
import SmartAppIPL from './pages/ipl/SmartAppIPL.tsx';
import IceFeelingIPL from './pages/ipl/IceFeelingIPL.tsx';
import EmeraldIPL from './pages/ipl/EmeraldIPL.tsx';
import SkinSensorIPL from './pages/ipl/SkinSensorIPL.tsx';
import BatteryPoweredIPL from './pages/ipl/BatteryPoweredIPL.tsx';
import HandheldIPL from './pages/ipl/HandheldIPL.tsx';
import IceCoolingIPL from './pages/ipl/IceCoolingIPL.tsx';
import DualLampIPLDevice from './pages/ipl/DualLampIPLDevice.tsx';
import AIPoweredIPL from './pages/ipl/AIPoweredIPL.tsx';

// Accessories Pages
import SapphireLens from './pages/accessories/SapphireLens.tsx';
import Adapter from './pages/accessories/Adapter.tsx';
import ProtectiveGoggles from './pages/accessories/ProtectiveGoggles.tsx';
import Filter from './pages/accessories/Filter.tsx';

// Service & Support Pages
import AfterSalesService from './pages/service/AfterSalesService.tsx';
import WinFDAListing from './pages/service/WinFDAListing.tsx';
import IPLManufacturing from './pages/service/IPLManufacturing.tsx';
import KnowledgeBase from './pages/service/KnowledgeBase.tsx';
import BeautySourcing from './pages/service/BeautySourcing.tsx';
import PricingGuide from './pages/service/PricingGuide.tsx';
import HelpCenter from './pages/service/HelpCenter.tsx';
import Gallery from './pages/service/Gallery.tsx';
import Videos from './pages/service/Videos.tsx';
import NewsInsights from './pages/blog/NewsInsights.tsx';
import Industries from './pages/blog/Industries.tsx';

// About Pages
import FounderMessage from './pages/about/FounderMessage.tsx';
import Technology from './pages/about/Technology.tsx';
import GlobalWitness from './pages/about/GlobalWitness.tsx';
import CorePrinciples from './pages/about/CorePrinciples.tsx';
import CompanyInfo from './pages/about/CompanyInfo.tsx';
import BrandStory from './pages/about/BrandStory.tsx';
import Quality from './pages/about/Quality.tsx';

// Country-specific page component
import CountryPage from './pages/CountryPage.tsx';

// 获取所有支持的语言前缀
const supportedLangs = languages.map(l => l.code.split('-')[0]);
const defaultLang = 'en'; // 你可以根据需要改为 'en-global' 或其他

// 多语言路由包装器
function MultilangRoutes() {
  const { lang } = useParams<{ lang: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  // 如果 lang 不在支持列表，重定向到默认语言
  if (!lang || !supportedLangs.includes(lang)) {
    return <Navigate to={`/${defaultLang}${location.pathname}`} replace />;
  }

  // 这里可以根据 lang 设置 context/i18n 语言
  // 你可以在 LanguageContext 或 i18n 实现自动切换

  return (
    <>
      <Header />
      <main>
        <Routes>
          {/* Main Pages */}
          <Route path="" element={<Home />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="ipl-hair-removal" element={<IPLHairRemoval />} />
          <Route path="how-to-use" element={<HowToUse />} />
          <Route path="accessories" element={<div className="pt-20 p-8"><h1>Accessories - Coming Soon</h1></div>} />
          <Route path="service-support" element={<div className="pt-20 p-8"><h1>Service & Support - Coming Soon</h1></div>} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* Country-specific routes */}
          <Route path="iplmanufacturer/:countryCode" element={<CountryPage />} />

          {/* Solutions Pages */}
          <Route path="solutions/logo-printing" element={<LogoPrinting />} />
          <Route path="solutions/packaging" element={<PackagingSolutions />} />
          <Route path="solutions/drop-shipping" element={<DropShipping />} />
          <Route path="solutions/global-shipping" element={<GlobalShipping />} />
          <Route path="solutions/brand-customization" element={<BrandCustomization />} />
          <Route path="solutions/compliance" element={<Compliance />} />
          <Route path="solutions/design-prototyping" element={<DesignPrototyping />} />
          <Route path="solutions/multi-head-ipl" element={<MultiHeadIPL />} />
          <Route path="solutions/dual-lamp-ipl" element={<DualLampIPL />} />

          {/* IPL Device Pages */}
          <Route path="ipl-hair-removal/smart-app" element={<SmartAppIPL />} />
          <Route path="ipl-hair-removal/ice-feeling" element={<IceFeelingIPL />} />
          <Route path="ipl-hair-removal/emerald" element={<EmeraldIPL />} />
          <Route path="ipl-hair-removal/skin-sensor" element={<SkinSensorIPL />} />
          <Route path="ipl-hair-removal/battery-powered" element={<BatteryPoweredIPL />} />
          <Route path="ipl-hair-removal/handheld" element={<HandheldIPL />} />
          <Route path="ipl-hair-removal/ice-cooling" element={<IceCoolingIPL />} />
          <Route path="ipl-hair-removal/dual-lamp" element={<DualLampIPLDevice />} />
          <Route path="ipl-hair-removal/ai-powered" element={<AIPoweredIPL />} />

          {/* Accessories Pages */}
          <Route path="accessories/sapphire-lens" element={<SapphireLens />} />
          <Route path="accessories/adapter" element={<Adapter />} />
          <Route path="accessories/goggles" element={<ProtectiveGoggles />} />
          <Route path="accessories/filter" element={<Filter />} />

          {/* Service & Support Pages */}
          <Route path="service-support/after-sales" element={<AfterSalesService />} />
          <Route path="service-support/win-fda-listing" element={<WinFDAListing />} />
          <Route path="service-support/manufacturing" element={<IPLManufacturing />} />
          <Route path="service-support/knowledge-base" element={<KnowledgeBase />} />
          <Route path="service-support/beauty-sourcing" element={<BeautySourcing />} />
          <Route path="service-support/pricing-guide" element={<PricingGuide />} />
          <Route path="service-support/help-center" element={<HelpCenter />} />
          <Route path="service-support/gallery" element={<Gallery />} />
          <Route path="service-support/videos" element={<Videos />} />

          {/* Blog Pages */}
          <Route path="blog/news-insights" element={<NewsInsights />} />
          <Route path="blog/industries" element={<Industries />} />

          {/* About Pages */}
          <Route path="about/founder-message" element={<FounderMessage />} />
          <Route path="about/technology" element={<Technology />} />
          <Route path="about/global-witness" element={<GlobalWitness />} />
          <Route path="about/core-principles" element={<CorePrinciples />} />
          <Route path="about/company" element={<CompanyInfo />} />
          <Route path="about/brand-story" element={<BrandStory />} />
          <Route path="about/quality" element={<Quality />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            {/* 首次访问无前缀时自动重定向到默认语言 */}
            <Route path="/" element={<Navigate to={`/${defaultLang}`} replace />} />
            {/* 多语言前缀路由 */}
            <Route path="/:lang/*" element={<MultilangRoutes />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;