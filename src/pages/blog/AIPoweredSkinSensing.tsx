import React from 'react';
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

const AIPoweredSkinSensing: React.FC = () => {
  const { t } = useLanguage();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('blog.posts.aiPoweredSkinSensing.title'),
    "description": t('blog.posts.aiPoweredSkinSensing.intro'),
    "author": {
      "@type": "Organization",
      "name": "SHENZHEN ISHINE TECHNOLOGY COMPANY LIMITED"
    },
    "datePublished": "2024-06-28",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "/blog/ai-powered-skin-sensing"
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ wordSpacing: '0.1em' }}>
      <Helmet>
        <title>{t('blog.posts.aiPoweredSkinSensing.title')}</title>
        <meta name="description" content={t('blog.posts.aiPoweredSkinSensing.intro')} />
        <meta name="keywords" content="AI skin sensing, smart IPL devices, skin tone detection, personalized beauty treatment, artificial intelligence" />
        <link rel="canonical" href="/blog/ai-powered-skin-sensing" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      
      {/* Hero Banner */}
      <div 
        className="w-full py-16 px-4"
        style={{
          background: 'linear-gradient(135deg, #1a365d 0%, #2c5282 50%, #1a365d 100%)',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-6 text-center">
            <span style={{ color: '#a0aec0', fontSize: '14px', fontWeight: '400' }}>
              🏠 Blog
            </span>
          </div>
          
          <h1 
            style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: '#ffffff',
              lineHeight: '1.1',
              marginBottom: '16px',
              letterSpacing: '-0.02em',
              textAlign: 'center'
            }}
          >
            {t('blog.posts.aiPoweredSkinSensing.title')}
          </h1>
          
          <p 
            style={{
              color: '#a0aec0',
              fontSize: '16px',
              fontWeight: '400',
              marginTop: '20px',
              textAlign: 'left'
            }}
          >
            {t('aiPoweredSkinSensing.publishDate')}
          </p>
        </div>
      </div>
      
      <article className="max-w-4xl mx-auto px-5 py-16" style={{ lineHeight: '1.7', wordSpacing: '0.1em' }}>
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('blog.posts.aiPoweredSkinSensing.sections.introduction')}</h2>
          <p className="text-lg text-gray-700 mb-6">{t('aiPoweredSkinSensing.introduction.content')}</p>
        </section>

        {/* How AI Skin Sensing Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('aiPoweredSkinSensing.howItWorks.title')}</h2>
          <p className="text-lg text-gray-700 mb-6">{t('aiPoweredSkinSensing.howItWorks.content')}</p>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg">{t('aiPoweredSkinSensing.steps.detection.title')}</h3>
              <p className="text-gray-700">{t('aiPoweredSkinSensing.steps.detection.desc')}</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg">{t('aiPoweredSkinSensing.steps.analysis.title')}</h3>
              <p className="text-gray-700">{t('aiPoweredSkinSensing.steps.analysis.desc')}</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg">{t('aiPoweredSkinSensing.steps.adaptation.title')}</h3>
              <p className="text-gray-700">{t('aiPoweredSkinSensing.steps.adaptation.desc')}</p>
            </div>
          </div>
        </section>

        {/* Benefits of AI Skin Sensing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('aiPoweredSkinSensing.benefits.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-blue-900">{t('aiPoweredSkinSensing.benefits.safety.title')}</h3>
              <p className="text-blue-800">{t('aiPoweredSkinSensing.benefits.safety.desc')}</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-green-900">{t('aiPoweredSkinSensing.benefits.effectiveness.title')}</h3>
              <p className="text-green-800">{t('aiPoweredSkinSensing.benefits.effectiveness.desc')}</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-purple-900">{t('aiPoweredSkinSensing.benefits.personalization.title')}</h3>
              <p className="text-purple-800">{t('aiPoweredSkinSensing.benefits.personalization.desc')}</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-orange-900">{t('aiPoweredSkinSensing.benefits.convenience.title')}</h3>
              <p className="text-orange-800">{t('aiPoweredSkinSensing.benefits.convenience.desc')}</p>
            </div>
          </div>
        </section>

        {/* Technical Implementation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('aiPoweredSkinSensing.technical.title')}</h2>
          <p className="text-lg text-gray-700 mb-6">{t('aiPoweredSkinSensing.technical.content')}</p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-3 text-gray-900">{t('aiPoweredSkinSensing.technical.components.title')}</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-gray-700">{t('aiPoweredSkinSensing.technical.components.sensors')}</li>
              <li className="text-gray-700">{t('aiPoweredSkinSensing.technical.components.algorithms')}</li>
              <li className="text-gray-700">{t('aiPoweredSkinSensing.technical.components.processing')}</li>
              <li className="text-gray-700">{t('aiPoweredSkinSensing.technical.components.feedback')}</li>
            </ul>
          </div>
        </section>

        {/* Future Applications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('aiPoweredSkinSensing.future.title')}</h2>
          <p className="text-lg text-gray-700 mb-6">{t('aiPoweredSkinSensing.future.content')}</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h3 className="font-semibold mb-3 text-blue-900">{t('aiPoweredSkinSensing.future.applications.skincare.title')}</h3>
              <p className="text-blue-800">{t('aiPoweredSkinSensing.future.applications.skincare.desc')}</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <h3 className="font-semibold mb-3 text-green-900">{t('aiPoweredSkinSensing.future.applications.medical.title')}</h3>
              <p className="text-green-800">{t('aiPoweredSkinSensing.future.applications.medical.desc')}</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <h3 className="font-semibold mb-3 text-purple-900">{t('aiPoweredSkinSensing.future.applications.wellness.title')}</h3>
              <p className="text-purple-800">{t('aiPoweredSkinSensing.future.applications.wellness.desc')}</p>
            </div>
          </div>
        </section>

        {/* Market Impact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('aiPoweredSkinSensing.market.title')}</h2>
          <p className="text-lg text-gray-700 mb-6">{t('aiPoweredSkinSensing.market.content')}</p>
          
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-3 text-yellow-900">{t('aiPoweredSkinSensing.market.trends.title')}</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-yellow-800">{t('aiPoweredSkinSensing.market.trends.growth')}</li>
              <li className="text-yellow-800">{t('aiPoweredSkinSensing.market.trends.adoption')}</li>
              <li className="text-yellow-800">{t('aiPoweredSkinSensing.market.trends.innovation')}</li>
              <li className="text-yellow-800">{t('aiPoweredSkinSensing.market.trends.investment')}</li>
            </ul>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('blog.posts.aiPoweredSkinSensing.sections.conclusion')}</h2>
          <p className="text-lg text-gray-700 mb-6">{t('aiPoweredSkinSensing.conclusion.content')}</p>
        </section>

        {/* Related Articles */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl font-bold mb-4 text-gray-900">{t('common.relatedArticles')}</h2>
            <ul className="list-inside list-disc space-y-2">
              <li><Link href="/blog/future-home-hair-removal" className="text-blue-600 underline">{t('blog.posts.futureHomeHairRemoval.title')}</Link></li>
              <li><Link href="/blog/sapphire-cooling" className="text-blue-600 underline">{t('blog.posts.sapphireCooling.title')}</Link></li>
              <li><Link href="/blog/multi-head-ipl-systems" className="text-blue-600 underline">{t('blog.posts.multiHeadIPLSystems.title')}</Link></li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
};

export default AIPoweredSkinSensing;
