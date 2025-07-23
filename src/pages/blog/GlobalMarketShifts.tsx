import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const GlobalMarketShifts: React.FC = () => {
  const { t } = useLanguage();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('blog.posts.globalMarketShifts.title'),
    "description": t('blog.posts.globalMarketShifts.intro'),
    "author": {
      "@type": "Organization",
      "name": "SHENZHEN ISHINE TECHNOLOGY COMPANY LIMITED"
    },
    "datePublished": "2024-07-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "/blog/global-market-shifts"
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ wordSpacing: '0.1em' }}>
      <Helmet>
        <title>{t('blog.posts.globalMarketShifts.title')}</title>
        <meta name="description" content={t('blog.posts.globalMarketShifts.intro')} />
        <meta name="keywords" content="global beauty market, IPL hair removal trends, market analysis, beauty technology, consumer behavior" />
        <link rel="canonical" href="/blog/global-market-shifts" />
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
            {t('blog.posts.globalMarketShifts.title')}
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
            {t('globalMarketShifts.publishDate')}
          </p>
        </div>
      </div>
      
      <article className="max-w-4xl mx-auto px-5 py-16" style={{ lineHeight: '1.7', wordSpacing: '0.1em' }}>
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('blog.posts.globalMarketShifts.sections.introduction')}</h2>
          <p className="text-lg text-gray-700 mb-6">{t('globalMarketShifts.introduction.content')}</p>
        </section>

        {/* Market Size and Growth */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('globalMarketShifts.marketSize.title')}</h2>
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-900">{t('globalMarketShifts.stats.marketValue')}</h3>
                <p className="text-blue-800">{t('globalMarketShifts.stats.currentMarket')}</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-900">{t('globalMarketShifts.stats.cagr')}</h3>
                <p className="text-blue-800">{t('globalMarketShifts.stats.growthRate')}</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-900">{t('globalMarketShifts.stats.projection')}</h3>
                <p className="text-blue-800">{t('globalMarketShifts.stats.futureValue')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('globalMarketShifts.regionalAnalysis.title')}</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg">{t('globalMarketShifts.regions.northAmerica.title')}</h3>
              <p className="text-gray-700">{t('globalMarketShifts.regions.northAmerica.desc')}</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg">{t('globalMarketShifts.regions.europe.title')}</h3>
              <p className="text-gray-700">{t('globalMarketShifts.regions.europe.desc')}</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg">{t('globalMarketShifts.regions.asiaPacific.title')}</h3>
              <p className="text-gray-700">{t('globalMarketShifts.regions.asiaPacific.desc')}</p>
            </div>
          </div>
        </section>

        {/* Key Trends */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('globalMarketShifts.keyTrends.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-green-900">{t('globalMarketShifts.trends.athomeDevices.title')}</h3>
              <p className="text-green-800">{t('globalMarketShifts.trends.athomeDevices.desc')}</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-blue-900">{t('globalMarketShifts.trends.aiIntegration.title')}</h3>
              <p className="text-blue-800">{t('globalMarketShifts.trends.aiIntegration.desc')}</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-purple-900">{t('globalMarketShifts.trends.sustainability.title')}</h3>
              <p className="text-purple-800">{t('globalMarketShifts.trends.sustainability.desc')}</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-orange-900">{t('globalMarketShifts.trends.personalization.title')}</h3>
              <p className="text-orange-800">{t('globalMarketShifts.trends.personalization.desc')}</p>
            </div>
          </div>
        </section>

        {/* Future Outlook */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('globalMarketShifts.futureOutlook.title')}</h2>
          <p className="text-lg text-gray-700 mb-6">{t('globalMarketShifts.futureOutlook.content')}</p>
          
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-3 text-yellow-900">{t('globalMarketShifts.predictions.title')}</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-yellow-800">{t('globalMarketShifts.predictions.growth')}</li>
              <li className="text-yellow-800">{t('globalMarketShifts.predictions.technology')}</li>
              <li className="text-yellow-800">{t('globalMarketShifts.predictions.accessibility')}</li>
            </ul>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('blog.posts.globalMarketShifts.sections.conclusion')}</h2>
          <p className="text-lg text-gray-700 mb-6">{t('globalMarketShifts.conclusion.content')}</p>
        </section>

        {/* Related Articles */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl font-bold mb-4 text-gray-900">{t('common.relatedArticles')}</h2>
            <ul className="list-inside list-disc space-y-2">
              <li><Link to="/blog/future-home-hair-removal" className="text-blue-600 underline">{t('blog.posts.futureHomeHairRemoval.title')}</Link></li>
              <li><Link to="/blog/industries" className="text-blue-600 underline">{t('blog.posts.industries.title')}</Link></li>
              <li><Link to="/blog/sustainable-manufacturing" className="text-blue-600 underline">{t('blog.posts.sustainableManufacturing.title')}</Link></li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
};

export default GlobalMarketShifts;
