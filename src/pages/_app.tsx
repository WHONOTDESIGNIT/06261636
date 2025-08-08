import React, { Suspense } from 'react';
import type { AppProps } from 'next/app';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from '../context/LanguageContext';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import FloatingWidgets from '../components/Layout/FloatingWidgets';
import '../index.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-ishine-blue-500"></div>
              </div>
            }>
              <Component {...pageProps} />
            </Suspense>
          </main>
          <Footer />
          <FloatingWidgets />
        </div>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;