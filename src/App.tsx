import React, { useEffect, Suspense, lazy, useState } from 'react';
import { BrowserRouter, Routes, Route, useParams, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import NotFound from './pages/NotFound';

// Lazy load components for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const ServiceSupport = lazy(() => import('./pages/ServiceSupport'));
const IplHairRemoval = lazy(() => import('./pages/IplHairRemoval'));

// Supported languages configuration
const supportedLangs = ['en', 'zh', 'es', 'fr', 'de', 'ja', 'ko', 'pt', 'ru', 'ar'];

// Language validation wrapper (修复重定向循环)
const LanguageGuard: React.FC = () => {
  const { lang } = useParams<{ lang?: string }>();
  const { setLanguage, currentLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [hasRedirected, setHasRedirected] = useState(false);

  // 确保英文不使用 /en 前缀
  const effectiveLang = lang && lang !== 'en' ? lang : 'en';

  // 只处理 /en 路径的重定向，避免其他路径的干扰
  useEffect(() => {
    if (lang === 'en' && !hasRedirected) {
      setHasRedirected(true);
      const newPath = location.pathname.replace('/en', '') || '/';
      const fullPath = newPath + location.search + location.hash;
      
      // 使用 requestAnimationFrame 确保在下一个渲染周期执行
      requestAnimationFrame(() => {
        navigate(fullPath, { replace: true });
      });
    }
  }, [lang, navigate, location.pathname, location.search, location.hash, hasRedirected]);

  // Validate language param
  if (lang && !supportedLangs.includes(lang)) {
    return <NotFound />;
  }

  // 如果是 /en 路径且还没重定向，显示加载状态
  if (lang === 'en' && !hasRedirected) {
    return <LoadingSpinner />;
  }

  // Sync context with URL
  useEffect(() => {
    if (effectiveLang !== currentLanguage) {
      setLanguage(effectiveLang);
    }
  }, [effectiveLang, currentLanguage, setLanguage]);

  return <Outlet />;
};

// Main App component
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <LanguageProvider>
          <BrowserRouter>
            <div className="App">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  {/* English routes (no prefix) */}
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/solutions" element={<Solutions />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/service-support" element={<ServiceSupport />} />
                  <Route path="/ipl-hair-removal" element={<IplHairRemoval />} />

                  {/* Multi-language routes with LanguageGuard */}
                  <Route path="/:lang" element={<LanguageGuard />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="solutions" element={<Solutions />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="blog/:slug" element={<BlogPost />} />
                    <Route path="service-support" element={<ServiceSupport />} />
                    <Route path="ipl-hair-removal" element={<IplHairRemoval />} />
                  </Route>

                  {/* Catch all route for 404 */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </div>
          </BrowserRouter>
        </LanguageProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
