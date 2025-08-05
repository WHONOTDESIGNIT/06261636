import React from 'react';
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

const NewsInsights: React.FC = () => {
  const { t } = useLanguage();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('blog.posts.newsInsights.title'),
    "description": t('blog.posts.newsInsights.intro'),
    "author": {
      "@type": "Organization",
      "name": "SHENZHEN ISHINE TECHNOLOGY COMPANY LIMITED"
    },
    "datePublished": "2024-06-27",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "/blog/news-insights"
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ wordSpacing: '0.1em' }}>
      <Helmet>
        <title>{t('blog.posts.newsInsights.title')}</title>
        <meta name="description" content={t('blog.posts.newsInsights.intro')} />
        <meta name="keywords" content="beauty technology news, IPL industry insights, market trends, innovation updates, beauty devices" />
        <link rel="canonical" href="/blog/news-insights" />
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
            {t('blog.posts.newsInsights.title')}
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
            {t('newsInsights.publishDate')}
          </p>
        </div>
      </div>
      
      <article className="max-w-4xl mx-auto px-5 py-16" style={{ lineHeight: '1.7', wordSpacing: '0.1em' }}>
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('blog.posts.newsInsights.sections.introduction')}</h2>
          <p className="text-lg text-gray-700 mb-6">{t('newsInsights.introduction.content')}</p>
        </section>

        {/* Latest Technology Trends */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('newsInsights.technologyTrends.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-blue-900">{t('newsInsights.trends.aiIntegration.title')}</h3>
              <p className="text-blue-800">{t('newsInsights.trends.aiIntegration.desc')}</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-green-900">{t('newsInsights.trends.smartDevices.title')}</h3>
              <p className="text-green-800">{t('newsInsights.trends.smartDevices.desc')}</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-purple-900">{t('newsInsights.trends.portability.title')}</h3>
              <p className="text-purple-800">{t('newsInsights.trends.portability.desc')}</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-orange-900">{t('newsInsights.trends.sustainability.title')}</h3>
              <p className="text-orange-800">{t('newsInsights.trends.sustainability.desc')}</p>
            </div>
          </div>
        </section>

        {/* Market Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('newsInsights.marketAnalysis.title')}</h2>
          <p className="text-lg text-gray-700 mb-6">{t('newsInsights.marketAnalysis.content')}</p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-semibold mb-3 text-gray-900">{t('newsInsights.marketStats.title')}</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <h4 className="text-2xl font-bold text-blue-600">{t('newsInsights.marketStats.globalValue')}</h4>
                <p className="text-gray-700">{t('newsInsights.marketStats.currentMarket')}</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-green-600">{t('newsInsights.marketStats.growth')}</h4>
                <p className="text-gray-700">{t('newsInsights.marketStats.annualGrowth')}</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-purple-600">{t('newsInsights.marketStats.projection')}</h4>
                <p className="text-gray-700">{t('newsInsights.marketStats.futureMarket')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry News Highlights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('newsInsights.newsHighlights.title')}</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg">{t('newsInsights.news.regulatory.title')}</h3>
              <p className="text-gray-700">{t('newsInsights.news.regulatory.desc')}</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg">{t('newsInsights.news.innovation.title')}</h3>
              <p className="text-gray-700">{t('newsInsights.news.innovation.desc')}</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg">{t('newsInsights.news.partnerships.title')}</h3>
              <p className="text-gray-700">{t('newsInsights.news.partnerships.desc')}</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-lg">{t('newsInsights.news.consumer.title')}</h3>
              <p className="text-gray-700">{t('newsInsights.news.consumer.desc')}</p>
            </div>
          </div>
        </section>

        {/* Future Predictions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('newsInsights.predictions.title')}</h2>
          <p className="text-lg text-gray-700 mb-6">{t('newsInsights.predictions.content')}</p>
          
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-3 text-yellow-900">{t('newsInsights.predictions.forecast.title')}</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-yellow-800">{t('newsInsights.predictions.forecast.technology')}</li>
              <li className="text-yellow-800">{t('newsInsights.predictions.forecast.market')}</li>
              <li className="text-yellow-800">{t('newsInsights.predictions.forecast.consumer')}</li>
              <li className="text-yellow-800">{t('newsInsights.predictions.forecast.regulation')}</li>
            </ul>
          </div>
        </section>

        {/* Expert Opinions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('newsInsights.expertOpinions.title')}</h2>
          <div className="space-y-6">
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
              {t('newsInsights.quotes.expert1.quote')}
              <br />
              <span className="block mt-2 text-sm text-gray-500">
                {t('newsInsights.quotes.expert1.attribution')}
              </span>
            </blockquote>
            <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700">
              {t('newsInsights.quotes.expert2.quote')}
              <br />
              <span className="block mt-2 text-sm text-gray-500">
                {t('newsInsights.quotes.expert2.attribution')}
              </span>
            </blockquote>
          </div>
        </section>

        {/* Industry Events */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('newsInsights.events.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-blue-900">{t('newsInsights.events.conferences.title')}</h3>
              <p className="text-blue-800">{t('newsInsights.events.conferences.desc')}</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-green-900">{t('newsInsights.events.exhibitions.title')}</h3>
              <p className="text-green-800">{t('newsInsights.events.exhibitions.desc')}</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('blog.posts.newsInsights.sections.conclusion')}</h2>
          <p className="text-lg text-gray-700 mb-6">{t('newsInsights.conclusion.content')}</p>
        </section>

        {/* Related Articles */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl font-bold mb-4 text-gray-900">{t('common.relatedArticles')}</h2>
            <ul className="list-inside list-disc space-y-2">
              <li><Link href="/blog/global-market-shifts" className="text-blue-600 underline">{t('blog.posts.globalMarketShifts.title')}</Link></li>
              <li><Link href="/blog/ai-powered-skin-sensing" className="text-blue-600 underline">{t('blog.posts.aiPoweredSkinSensing.title')}</Link></li>
              <li><Link href="/blog/future-home-hair-removal" className="text-blue-600 underline">{t('blog.posts.futureHomeHairRemoval.title')}</Link></li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
};

export default NewsInsights;