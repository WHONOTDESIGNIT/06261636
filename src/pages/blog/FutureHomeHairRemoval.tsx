import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const FutureHomeHairRemoval: React.FC = () => {
  const { t } = useLanguage();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('blog.posts.futureHomeHairRemoval.title'),
    "description": t('blog.posts.futureHomeHairRemoval.intro'),
    "author": {
      "@type": "Organization",
      "name": "SHENZHEN ISHINE TECHNOLOGY COMPANY LIMITED"
    },
    "datePublished": "2024-07-03",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "/blog/future-home-hair-removal"
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ wordSpacing: '0.1em' }}>
      <Helmet>
        <title>{t('blog.posts.futureHomeHairRemoval.title')}</title>
        <meta name="description" content={t('blog.posts.futureHomeHairRemoval.intro')} />
        <meta name="keywords" content="future hair removal, home IPL devices, AI technology, sustainability, personalization, at-home beauty trends" />
        <link rel="canonical" href="/blog/future-home-hair-removal" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      
      {/* Hero 横幅区域 */}
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
          {/* 面包屑导航 */}
          <div className="mb-6 text-center">
            <span 
              style={{
                color: '#a0aec0',
                fontSize: '14px',
                fontWeight: '400'
              }}
            >
              🏠 Blog
            </span>
          </div>
          
          {/* 主标题 */}
          <h1 
            style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: '#ffffff',
              lineHeight: '1.1',
              marginBottom: '16px',
              letterSpacing: '-0.02em',
              textAlign: 'center',
              margin: '0 auto',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {t('blog.posts.futureHomeHairRemoval.title')}
          </h1>
          
          {/* 发布日期 */}
          <p 
            style={{
              color: '#a0aec0',
              fontSize: '16px',
              fontWeight: '400',
              marginTop: '20px',
              textAlign: 'left'
            }}
          >
            {t('futureHomeHairRemoval.publishDate')}
          </p>
        </div>
      </div>
      
      <article 
        className="max-w-4xl mx-auto px-5 py-16" 
        style={{ 
          maxWidth: '1400px',
          lineHeight: '1.7',
          wordSpacing: '0.1em'
        }}
      >
        {/* Introduction */}
        <section className="mb-12">
          <h2 
            style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              marginTop: '48px',
              marginBottom: '24px',
              color: '#212529',
              letterSpacing: '-0.02em'
            }}
          >
            {t('blog.posts.futureHomeHairRemoval.sections.introduction')}
          </h2>
          <p 
            style={{
              fontSize: '18px',
              lineHeight: '1.7',
              color: '#495057',
              marginBottom: '24px',
              textAlign: 'justify',
              wordSpacing: '0.1em'
            }}
          >
            {t('futureHomeHairRemoval.introduction.content')}
          </p>
        </section>

        {/* AI-Powered Precision */}
        <section className="mb-12">
          <h2 
            style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              marginTop: '48px',
              marginBottom: '24px',
              color: '#212529',
              letterSpacing: '-0.02em'
            }}
          >
            {t('futureHomeHairRemoval.aiPowered.title')}
          </h2>
          <p 
            style={{
              fontSize: '18px',
              lineHeight: '1.7',
              color: '#495057',
              marginBottom: '24px',
              textAlign: 'justify',
              wordSpacing: '0.1em'
            }}
          >
            {t('futureHomeHairRemoval.aiPowered.content')}
          </p>
          <h3 
            style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '16px',
              color: '#212529',
              letterSpacing: '-0.02em'
            }}
          >
            {t('futureHomeHairRemoval.aiFeatures.title')}
          </h3>
          <ul className="list-disc pl-6 space-y-3">
            <li style={{ fontSize: '18px', lineHeight: '1.7', color: '#495057' }}>
              <strong>{t('futureHomeHairRemoval.aiFeatures.smartSkinDetection.title')}:</strong> {t('futureHomeHairRemoval.aiFeatures.smartSkinDetection.desc')}
            </li>
            <li style={{ fontSize: '18px', lineHeight: '1.7', color: '#495057' }}>
              <strong>{t('futureHomeHairRemoval.aiFeatures.adaptiveIntensity.title')}:</strong> {t('futureHomeHairRemoval.aiFeatures.adaptiveIntensity.desc')}
            </li>
            <li style={{ fontSize: '18px', lineHeight: '1.7', color: '#495057' }}>
              <strong>{t('futureHomeHairRemoval.aiFeatures.predictiveAnalysis.title')}:</strong> {t('futureHomeHairRemoval.aiFeatures.predictiveAnalysis.desc')}
            </li>
          </ul>
        </section>

        {/* Next-Generation Cooling Technology */}
        <section className="mb-12">
          <h2 
            style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              marginTop: '48px',
              marginBottom: '24px',
              color: '#212529',
              letterSpacing: '-0.02em'
            }}
          >
            {t('futureHomeHairRemoval.coolingTech.title')}
          </h2>
          <p 
            style={{
              fontSize: '18px',
              lineHeight: '1.7',
              color: '#495057',
              marginBottom: '24px',
              textAlign: 'justify',
              wordSpacing: '0.1em'
            }}
          >
            {t('futureHomeHairRemoval.coolingTech.content')}
          </p>
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-3 text-blue-900">{t('futureHomeHairRemoval.coolingInnovations.title')}</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-blue-800">{t('futureHomeHairRemoval.coolingInnovations.cryogenicCooling')}</li>
              <li className="text-blue-800">{t('futureHomeHairRemoval.coolingInnovations.liquidNitrogen')}</li>
              <li className="text-blue-800">{t('futureHomeHairRemoval.coolingInnovations.thermoelectric')}</li>
            </ul>
          </div>
        </section>

        {/* Sustainability Focus */}
        <section className="mb-12">
          <h2 
            style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              marginTop: '48px',
              marginBottom: '24px',
              color: '#212529',
              letterSpacing: '-0.02em'
            }}
          >
            {t('futureHomeHairRemoval.sustainability.title')}
          </h2>
          <p 
            style={{
              fontSize: '18px',
              lineHeight: '1.7',
              color: '#495057',
              marginBottom: '24px',
              textAlign: 'justify',
              wordSpacing: '0.1em'
            }}
          >
            {t('futureHomeHairRemoval.sustainability.content')}
          </p>
          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-3 text-green-900">{t('futureHomeHairRemoval.ecoFeatures.title')}</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-green-800">{t('futureHomeHairRemoval.ecoFeatures.solarPowered')}</li>
              <li className="text-green-800">{t('futureHomeHairRemoval.ecoFeatures.recyclableComponents')}</li>
              <li className="text-green-800">{t('futureHomeHairRemoval.ecoFeatures.energyEfficient')}</li>
              <li className="text-green-800">{t('futureHomeHairRemoval.ecoFeatures.biodegradablePackaging')}</li>
            </ul>
          </div>
        </section>

        {/* Personalization and Connectivity */}
        <section className="mb-12">
          <h2 
            style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              marginTop: '48px',
              marginBottom: '24px',
              color: '#212529',
              letterSpacing: '-0.02em'
            }}
          >
            {t('futureHomeHairRemoval.personalization.title')}
          </h2>
          <p 
            style={{
              fontSize: '18px',
              lineHeight: '1.7',
              color: '#495057',
              marginBottom: '24px',
              textAlign: 'justify',
              wordSpacing: '0.1em'
            }}
          >
            {t('futureHomeHairRemoval.personalization.content')}
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-purple-900">{t('futureHomeHairRemoval.smartFeatures.title')}</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-purple-800">{t('futureHomeHairRemoval.smartFeatures.mobileApp')}</li>
                <li className="text-purple-800">{t('futureHomeHairRemoval.smartFeatures.cloudSync')}</li>
                <li className="text-purple-800">{t('futureHomeHairRemoval.smartFeatures.remoteMonitoring')}</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-orange-900">{t('futureHomeHairRemoval.userExperience.title')}</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-orange-800">{t('futureHomeHairRemoval.userExperience.voiceControl')}</li>
                <li className="text-orange-800">{t('futureHomeHairRemoval.userExperience.gestureRecognition')}</li>
                <li className="text-orange-800">{t('futureHomeHairRemoval.userExperience.hapticFeedback')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Industry Timeline */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('futureHomeHairRemoval.timeline.title')}</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-lg">{t('futureHomeHairRemoval.timeline.current.title')}</h3>
                <p className="text-gray-700">{t('futureHomeHairRemoval.timeline.current.desc')}</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-lg">{t('futureHomeHairRemoval.timeline.nextFiveYears.title')}</h3>
                <p className="text-gray-700">{t('futureHomeHairRemoval.timeline.nextFiveYears.desc')}</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-lg">{t('futureHomeHairRemoval.timeline.nextDecade.title')}</h3>
                <p className="text-gray-700">{t('futureHomeHairRemoval.timeline.nextDecade.desc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 
            style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              marginTop: '48px',
              marginBottom: '24px',
              color: '#212529',
              letterSpacing: '-0.02em'
            }}
          >
            {t('blog.posts.futureHomeHairRemoval.sections.conclusion')}
          </h2>
          <p 
            style={{
              fontSize: '18px',
              lineHeight: '1.7',
              color: '#495057',
              marginBottom: '24px',
              textAlign: 'justify',
              wordSpacing: '0.1em'
            }}
          >
            {t('futureHomeHairRemoval.conclusion.content')}
          </p>
        </section>

        {/* Related Articles */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl font-bold mb-4 text-gray-900">{t('common.relatedArticles')}</h2>
            <ul className="list-inside list-disc space-y-2">
              <li><Link to="/blog/ai-powered-skin-sensing" className="text-blue-600 underline">{t('blog.posts.aiPoweredSkinSensing.title')}</Link></li>
              <li><Link to="/blog/sustainable-manufacturing" className="text-blue-600 underline">{t('blog.posts.sustainableManufacturing.title')}</Link></li>
              <li><Link to="/blog/global-market-shifts" className="text-blue-600 underline">{t('blog.posts.globalMarketShifts.title')}</Link></li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
};

export default FutureHomeHairRemoval; 