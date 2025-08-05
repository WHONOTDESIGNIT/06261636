import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Solutions from './Solutions';
import IPLHairRemoval from './IPLHairRemoval';
import HowToUse from './HowToUse';
import ServiceSupport from './ServiceSupport';
import Sitemap from './Sitemap';
import CountryPage from './CountryPage';

// Import all other pages
import SmartAppIPL from './ipl/SmartAppIPL';
import IceFeelingIPL from './ipl/IceFeelingIPL';
import EmeraldIPL from './ipl/EmeraldIPL';
import SkinSensorIPL from './ipl/SkinSensorIPL';
import BatteryPoweredIPL from './ipl/BatteryPoweredIPL';
import HandheldIPL from './ipl/HandheldIPL';
import IceCoolingIPL from './ipl/IceCoolingIPL';
import DualLampIPLDevice from './ipl/DualLampIPLDevice';
import AIPoweredIPL from './ipl/AIPoweredIPL';

// Solutions pages
import LogoPrinting from './solutions/LogoPrinting';
import PackagingSolutions from './solutions/PackagingSolutions';
import DropShipping from './solutions/DropShipping';
import GlobalShipping from './solutions/GlobalShipping';
import BrandCustomization from './solutions/BrandCustomization';
import Compliance from './solutions/Compliance';
import DesignPrototyping from './solutions/DesignPrototyping';
import MultiHeadIPL from './solutions/MultiHeadIPL';
import DualLampIPL from './solutions/DualLampIPL';

// Service pages
import AfterSalesService from './service/AfterSalesService';
import WinFDAListing from './service/WinFDAListing';
import IPLManufacturing from './service/IPLManufacturing';
import KnowledgeBase from './service/KnowledgeBase';
import BeautySourcing from './service/BeautySourcing';
import PricingGuide from './service/PricingGuide';
import HelpCenter from './service/HelpCenter';
import Gallery from './service/Gallery';
import Videos from './service/Videos';

// Blog pages
import NewsInsights from './blog/NewsInsights';
import Industries from './blog/Industries';
import IPLBestChoice from './blog/IPLBestChoice';
import FutureHomeHairRemoval from './blog/FutureHomeHairRemoval';
import FDA510kPathway from './blog/FDA510kPathway';
import MultiHeadIPLSystems from './blog/MultiHeadIPLSystems';
import AIPoweredSkinSensing from './blog/AIPoweredSkinSensing';
import GlobalMarketShifts from './blog/GlobalMarketShifts';
import SustainableManufacturing from './blog/SustainableManufacturing';

// About pages
import FounderMessage from './about/FounderMessage';
import Technology from './about/Technology';
import GlobalWitness from './about/GlobalWitness';
import CorePrinciples from './about/CorePrinciples';
import CompanyInfo from './about/CompanyInfo';
import BrandStory from './about/BrandStory';
import Quality from './about/Quality';

// Accessories pages
import SapphireLens from './accessories/SapphireLens';
import Adapter from './accessories/Adapter';
import ProtectiveGoggles from './accessories/ProtectiveGoggles';
import Filter from './accessories/Filter';

// Other pages
import ShippingCost from './shipping-cost';

const DynamicPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  
  if (!slug || !Array.isArray(slug)) {
    return <Home />;
  }

  const path = slug.join('/');
  
  // Route mapping
  const routes: { [key: string]: React.ComponentType } = {
    // Main pages
    'about': About,
    'contact': Contact,
    'solutions': Solutions,
    'ipl-hair-removal': IPLHairRemoval,
    'how-to-use': HowToUse,
    'service-support': ServiceSupport,
    'sitemap': Sitemap,
    'shipping-cost': ShippingCost,
    
    // IPL devices
    'ipl-hair-removal/smart-app': SmartAppIPL,
    'ipl-hair-removal/ice-feeling': IceFeelingIPL,
    'ipl-hair-removal/emerald': EmeraldIPL,
    'ipl-hair-removal/skin-sensor': SkinSensorIPL,
    'ipl-hair-removal/battery-powered': BatteryPoweredIPL,
    'ipl-hair-removal/handheld': HandheldIPL,
    'ipl-hair-removal/ice-cooling': IceCoolingIPL,
    'ipl-hair-removal/dual-lamp': DualLampIPLDevice,
    'ipl-hair-removal/ai-powered': AIPoweredIPL,
    
    // Solutions
    'solutions/logo-printing': LogoPrinting,
    'solutions/packaging-solutions': PackagingSolutions,
    'solutions/drop-shipping': DropShipping,
    'solutions/global-shipping': GlobalShipping,
    'solutions/brand-customization': BrandCustomization,
    'solutions/compliance': Compliance,
    'solutions/design-prototyping': DesignPrototyping,
    'solutions/multi-head-ipl': MultiHeadIPL,
    'solutions/dual-lamp-ipl': DualLampIPL,
    
    // Service & Support
    'service-support/after-sales': AfterSalesService,
    'service-support/win-fda-listing': WinFDAListing,
    'service-support/manufacturing': IPLManufacturing,
    'service-support/knowledge-base': KnowledgeBase,
    'service-support/beauty-sourcing': BeautySourcing,
    'service-support/pricing-guide': PricingGuide,
    'service-support/help-center': HelpCenter,
    'service-support/gallery': Gallery,
    'service-support/videos': Videos,
    
    // Blog
    'blog/news-insights': NewsInsights,
    'blog/industries': Industries,
    'blog/ipl-best-choice': IPLBestChoice,
    'blog/future-home-hair-removal': FutureHomeHairRemoval,
    'blog/fda-510k-pathway': FDA510kPathway,
    'blog/multi-head-ipl-systems': MultiHeadIPLSystems,
    'blog/ai-powered-skin-sensing': AIPoweredSkinSensing,
    'blog/global-market-shifts': GlobalMarketShifts,
    'blog/sustainable-manufacturing': SustainableManufacturing,
    
    // About
    'about/founder-message': FounderMessage,
    'about/technology': Technology,
    'about/global-witness': GlobalWitness,
    'about/core-principles': CorePrinciples,
    'about/company': CompanyInfo,
    'about/brand-story': BrandStory,
    'about/quality': Quality,
    
    // Accessories
    'accessories/sapphire-lens': SapphireLens,
    'accessories/adapter': Adapter,
    'accessories/goggles': ProtectiveGoggles,
    'accessories/filter': Filter,
  };

  // Handle language-prefixed routes
  const supportedLanguages = ['en', 'de', 'es', 'ar', 'he', 'pt', 'nl', 'pl'];
  
  if (supportedLanguages.includes(slug[0])) {
    // Language-prefixed route
    const language = slug[0];
    const remainingPath = slug.slice(1).join('/');
    
    if (remainingPath === '') {
      // Language homepage
      return <Home />;
    }
    
    const Component = routes[remainingPath];
    return Component ? <Component /> : <Home />;
  }
  
  // Handle country pages
  if (slug[0] === 'iplmanufacturer' && slug[1]) {
    return <CountryPage />;
  }
  
  // Regular route
  const Component = routes[path];
  return Component ? <Component /> : <Home />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default DynamicPage;