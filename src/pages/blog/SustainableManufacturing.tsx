import React from 'react';
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

const SustainableManufacturing: React.FC = () => {
  const { t } = useLanguage();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('blog.posts.sustainableManufacturing.title'),
    "description": t('blog.posts.sustainableManufacturing.intro'),
    "author": {
      "@type": "Organization",
      "name": "SHENZHEN ISHINE TECHNOLOGY COMPANY LIMITED"
    },
    "datePublished": "2024-06-29",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "/blog/sustainable-manufacturing"
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ wordSpacing: '0.1em' }}>
      <Helmet>
        <title>{t('blog.posts.sustainableManufacturing.title')}</title>
        <meta name="description" content={t('blog.posts.sustainableManufacturing.intro')} />
        <meta name="keywords" content="sustainable manufacturing, eco-friendly production, green technology, environmental responsibility, sustainable beauty" />
        <link rel="canonical" href="/blog/sustainable-manufacturing" />
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
            {t('blog.posts.sustainableManufacturing.title')}
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
            {t('sustainableManufacturing.publishDate')}
          </p>
        </div>
      </div>
      
      <article className="max-w-4xl mx-auto px-5 py-16" style={{ lineHeight: '1.7', wordSpacing: '0.1em' }}>
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('blog.posts.sustainableManufacturing.sections.introduction')}</h2>
          <p className="text-lg text-gray-700 mb-6">{t('sustainableManufacturing.introduction.content')}</p>
        </section>

        {/* Environmental Impact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('sustainableManufacturing.environmental.title')}</h2>
          <p className="text-lg text-gray-700 mb-6">{t('sustainableManufacturing.environmental.content')}</p>
          
          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-3 text-green-900">{t('sustainableManufacturing.initiatives.title')}</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-green-800">{t('sustainableManufacturing.initiatives.renewableEnergy')}</li>
              <li className="text-green-800">{t('sustainableManufacturing.initiatives.wasteReduction')}</li>
              <li className="text-green-800">{t('sustainableManufacturing.initiatives.sustainableMaterials')}</li>
              <li className="text-green-800">{t('sustainableManufacturing.initiatives.carbonFootprint')}</li>
            </ul>
          </div>
        </section>

        {/* Sustainable Materials */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('sustainableManufacturing.materials.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-blue-900">{t('sustainableManufacturing.materials.recyclable.title')}</h3>
              <p className="text-blue-800">{t('sustainableManufacturing.materials.recyclable.desc')}</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-purple-900">{t('sustainableManufacturing.materials.biodegradable.title')}</h3>
              <p className="text-purple-800">{t('sustainableManufacturing.materials.biodegradable.desc')}</p>
            </div>
          </div>
        </section>

        {/* Manufacturing Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('sustainableManufacturing.process.title')}</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg">{t('sustainableManufacturing.process.efficiency.title')}</h3>
              <p className="text-gray-700">{t('sustainableManufacturing.process.efficiency.desc')}</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg">{t('sustainableManufacturing.process.automation.title')}</h3>
              <p className="text-gray-700">{t('sustainableManufacturing.process.automation.desc')}</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg">{t('sustainableManufacturing.process.quality.title')}</h3>
              <p className="text-gray-700">{t('sustainableManufacturing.process.quality.desc')}</p>
            </div>
          </div>
        </section>

        {/* Industry Impact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('sustainableManufacturing.impact.title')}</h2>
          <p className="text-lg text-gray-700 mb-6">{t('sustainableManufacturing.impact.content')}</p>
          
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-3 text-yellow-900">{t('sustainableManufacturing.benefits.title')}</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-yellow-800">{t('sustainableManufacturing.benefits.costReduction')}</li>
              <li className="text-yellow-800">{t('sustainableManufacturing.benefits.brandImage')}</li>
              <li className="text-yellow-800">{t('sustainableManufacturing.benefits.compliance')}</li>
              <li className="text-yellow-800">{t('sustainableManufacturing.benefits.innovation')}</li>
            </ul>
          </div>
        </section>

        {/* Future Goals */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('sustainableManufacturing.future.title')}</h2>
          <p className="text-lg text-gray-700 mb-6">{t('sustainableManufacturing.future.content')}</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-green-900 mb-2">{t('sustainableManufacturing.goals.carbonNeutral.target')}</h3>
              <p className="text-green-800">{t('sustainableManufacturing.goals.carbonNeutral.desc')}</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">{t('sustainableManufacturing.goals.renewable.target')}</h3>
              <p className="text-blue-800">{t('sustainableManufacturing.goals.renewable.desc')}</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-purple-900 mb-2">{t('sustainableManufacturing.goals.waste.target')}</h3>
              <p className="text-purple-800">{t('sustainableManufacturing.goals.waste.desc')}</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('blog.posts.sustainableManufacturing.sections.conclusion')}</h2>
          <p className="text-lg text-gray-700 mb-6">{t('sustainableManufacturing.conclusion.content')}</p>
        </section>

        {/* Related Articles */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl font-bold mb-4 text-gray-900">{t('common.relatedArticles')}</h2>
            <ul className="list-inside list-disc space-y-2">
              <li><Link href="/blog/global-market-shifts" className="text-blue-600 underline">{t('blog.posts.globalMarketShifts.title')}</Link></li>
              <li><Link href="/blog/industries" className="text-blue-600 underline">{t('blog.posts.industries.title')}</Link></li>
              <li><Link href="/blog/future-home-hair-removal" className="text-blue-600 underline">{t('blog.posts.futureHomeHairRemoval.title')}</Link></li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
};

export default SustainableManufacturing; 