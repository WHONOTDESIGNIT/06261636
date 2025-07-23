import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const Industries: React.FC = () => {
  const { t } = useLanguage();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('blog.posts.industries.title'),
    "description": t('blog.posts.industries.intro'),
    "author": {
      "@type": "Organization",
      "name": "SHENZHEN ISHINE TECHNOLOGY COMPANY LIMITED"
    },
    "datePublished": "2024-06-30",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "/blog/industries"
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ wordSpacing: '0.1em' }}>
      <Helmet>
        <title>{t('blog.posts.industries.title')}</title>
        <meta name="description" content={t('blog.posts.industries.intro')} />
        <meta name="keywords" content="beauty industry, IPL manufacturing, hair removal devices, beauty technology, medical devices" />
        <link rel="canonical" href="/blog/industries" />
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
            {t('blog.posts.industries.title')}
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
            {t('industries.publishDate')}
          </p>
        </div>
      </div>
      
      <article className="max-w-4xl mx-auto px-5 py-16" style={{ lineHeight: '1.7', wordSpacing: '0.1em' }}>
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('blog.posts.industries.sections.introduction')}</h2>
          <p className="text-lg text-gray-700 mb-6">{t('industries.introduction.content')}</p>
        </section>

        {/* Beauty Industry Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('industries.beautyOverview.title')}</h2>
          <p className="text-lg text-gray-700 mb-6">{t('industries.beautyOverview.content')}</p>
          
          <div className="bg-pink-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-3 text-pink-900">{t('industries.beautyStats.title')}</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <h4 className="text-xl font-bold text-pink-800">{t('industries.beautyStats.marketSize')}</h4>
                <p className="text-pink-700">{t('industries.beautyStats.globalValue')}</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-pink-800">{t('industries.beautyStats.growth')}</h4>
                <p className="text-pink-700">{t('industries.beautyStats.annualGrowth')}</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-pink-800">{t('industries.beautyStats.projection')}</h4>
                <p className="text-pink-700">{t('industries.beautyStats.futureValue')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* IPL Hair Removal Segment */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('industries.iplSegment.title')}</h2>
          <p className="text-lg text-gray-700 mb-6">{t('industries.iplSegment.content')}</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-blue-900">{t('industries.iplAdvantages.title')}</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-blue-800">{t('industries.iplAdvantages.convenience')}</li>
                <li className="text-blue-800">{t('industries.iplAdvantages.costEffective')}</li>
                <li className="text-blue-800">{t('industries.iplAdvantages.privacy')}</li>
                <li className="text-blue-800">{t('industries.iplAdvantages.safety')}</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-green-900">{t('industries.marketTrends.title')}</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-green-800">{t('industries.marketTrends.technology')}</li>
                <li className="text-green-800">{t('industries.marketTrends.portability')}</li>
                <li className="text-green-800">{t('industries.marketTrends.affordability')}</li>
                <li className="text-green-800">{t('industries.marketTrends.effectiveness')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Manufacturing Excellence */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('industries.manufacturing.title')}</h2>
          <p className="text-lg text-gray-700 mb-6">{t('industries.manufacturing.content')}</p>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg">{t('industries.qualityControl.title')}</h3>
              <p className="text-gray-700">{t('industries.qualityControl.desc')}</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg">{t('industries.innovation.title')}</h3>
              <p className="text-gray-700">{t('industries.innovation.desc')}</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg">{t('industries.compliance.title')}</h3>
              <p className="text-gray-700">{t('industries.compliance.desc')}</p>
            </div>
          </div>
        </section>

        {/* Technology Integration */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('industries.technology.title')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-purple-900">{t('industries.techFeatures.ai.title')}</h3>
              <p className="text-purple-800">{t('industries.techFeatures.ai.desc')}</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-orange-900">{t('industries.techFeatures.cooling.title')}</h3>
              <p className="text-orange-800">{t('industries.techFeatures.cooling.desc')}</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-teal-900">{t('industries.techFeatures.connectivity.title')}</h3>
              <p className="text-teal-800">{t('industries.techFeatures.connectivity.desc')}</p>
            </div>
          </div>
        </section>

        {/* Market Opportunities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('industries.opportunities.title')}</h2>
          <p className="text-lg text-gray-700 mb-6">{t('industries.opportunities.content')}</p>
          
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-3 text-yellow-900">{t('industries.growthAreas.title')}</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-yellow-800">{t('industries.growthAreas.emergingMarkets')}</li>
              <li className="text-yellow-800">{t('industries.growthAreas.maleGrooming')}</li>
              <li className="text-yellow-800">{t('industries.growthAreas.premiumDevices')}</li>
              <li className="text-yellow-800">{t('industries.growthAreas.subscription')}</li>
            </ul>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('blog.posts.industries.sections.conclusion')}</h2>
          <p className="text-lg text-gray-700 mb-6">{t('industries.conclusion.content')}</p>
        </section>

        {/* Related Articles */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl font-bold mb-4 text-gray-900">{t('common.relatedArticles')}</h2>
            <ul className="list-inside list-disc space-y-2">
              <li><Link to="/blog/global-market-shifts" className="text-blue-600 underline">{t('blog.posts.globalMarketShifts.title')}</Link></li>
              <li><Link to="/blog/sustainable-manufacturing" className="text-blue-600 underline">{t('blog.posts.sustainableManufacturing.title')}</Link></li>
              <li><Link to="/service/ipl-manufacturing" className="text-blue-600 underline">{t('nav.service.iplManufacturing')}</Link></li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Industries;
