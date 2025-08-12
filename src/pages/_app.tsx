import React from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider, useLanguage, LanguageProviderProps } from '../context/LanguageContext';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import FloatingWidgets from '../components/Layout/FloatingWidgets';
import '../index.css';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const initialLanguage: string | undefined = (pageProps as any)?.slug?.[0];
  const supportedLanguages = ['en', 'de', 'es', 'ar', 'he', 'pt', 'nl', 'pl'];
  const normalizedInitialLanguage = supportedLanguages.includes(initialLanguage || '')
    ? initialLanguage
    : undefined;
  return (
    <HelmetProvider>
      <LanguageProvider initialLanguage={normalizedInitialLanguage}>
        <AppContent Component={Component} pageProps={pageProps} router={router} />
      </LanguageProvider>
    </HelmetProvider>
  );
}

// Separate component to access language context
function AppContent({ Component, pageProps, router }: AppProps & { router: any }) {
  const { isReady } = useLanguage();
  
  // Show loading until language context is ready
  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-ishine-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
}

export default App;