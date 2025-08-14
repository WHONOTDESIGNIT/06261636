// src/pages/_app.tsx 或 pages/_app.tsx
import React from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import FloatingWidgets from '../components/Layout/FloatingWidgets';
import '../index.css';

// 自定义子组件的 Props（不使用含 router 的旧式 AppProps）
type AppContentProps = {
  Component: AppProps['Component'];
  pageProps: AppProps['pageProps'];
};

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
        <AppContent Component={Component} pageProps={pageProps} />
      </LanguageProvider>
    </HelmetProvider>
  );
}

function AppContent({ Component, pageProps }: AppContentProps) {
  const { isReady } = useLanguage();

  // 语言环境尚未准备好时
  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-ishine-blue-500"></div>
      </div>
    );
  }

  // 语言环境准备好后渲染页面
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
