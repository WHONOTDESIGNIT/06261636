import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';

const SapphireCooling: React.FC = () => {
  const { t } = useTranslation();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('blog.posts.sapphireCooling.title'),
    "description": t('blog.posts.sapphireCooling.intro'),
    "author": {
      "@type": "Organization",
      "name": "SHENZHEN ISHINE TECHNOLOGY COMPANY LIMITED"
    },
    "datePublished": "2024-07-04",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "/blog/sapphire-cooling"
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ wordSpacing: '0.1em' }}>
      <Helmet>
        <title>{t('blog.posts.sapphireCooling.title')}</title>
        <meta name="description" content={t('blog.posts.sapphireCooling.intro')} />
        <meta name="keywords" content="sapphire cooling, IPL hair removal, dark skin, pain reduction, Fitzpatrick skin types, clinical data, at-home IPL, safety, E-E-A-T" />
        <link rel="canonical" href="/blog/sapphire-cooling" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      
      {/* Hero 横幅区域 - 统一YBS Packaging样式 */}
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
            {t('blog.posts.sapphireCooling.title')}
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
            {t('sapphireCooling.publishDate')}
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
            {t('blog.posts.sapphireCooling.sections.introduction')}
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
            {t('sapphireCooling.introduction.content')}
          </p>
        </section>

        {/* What Is Sapphire Cooling? */}
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
            {t('sapphireCooling.whatIs.title')}
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
            {t('sapphireCooling.whatIs.content')}
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
            {t('sapphireCooling.keyBenefits.title')}
          </h3>
          <ul 
            className="list-disc pl-6"
            style={{ marginBottom: '24px' }}
          >
            <li style={{ marginBottom: '8px', fontSize: '18px', lineHeight: '1.7', color: '#495057' }}>
              <strong>{t('sapphireCooling.keyBenefits.rapidHeat.title')}</strong> {t('sapphireCooling.keyBenefits.rapidHeat.desc')}
            </li>
            <li style={{ marginBottom: '8px', fontSize: '18px', lineHeight: '1.7', color: '#495057' }}>
              <strong>{t('sapphireCooling.keyBenefits.continuousCooling.title')}</strong> {t('sapphireCooling.keyBenefits.continuousCooling.desc')}
            </li>
            <li style={{ marginBottom: '8px', fontSize: '18px', lineHeight: '1.7', color: '#495057' }}>
              <strong>{t('sapphireCooling.keyBenefits.enhancedComfort.title')}</strong> {t('sapphireCooling.keyBenefits.enhancedComfort.desc')}
            </li>
            <li style={{ marginBottom: '8px', fontSize: '18px', lineHeight: '1.7', color: '#495057' }}>
              <strong>{t('sapphireCooling.keyBenefits.improvedSafety.title')}</strong> {t('sapphireCooling.keyBenefits.improvedSafety.desc')}
            </li>
          </ul>
        </section>

        {/* Updated Clinical Data: Comfort and Safety for Dark Skin */}
        <section className="py-10 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('sapphireCooling.clinicalData.title')}</h2>
            <h3 className="text-xl font-semibold mb-2">{t('sapphireCooling.clinicalData.fitzpatrickTitle')}</h3>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full bg-white border rounded-lg shadow">
                <thead>
                  <tr className="bg-blue-100 text-blue-900">
                    <th className="py-2 px-4">{t('sapphireCooling.table.fitzpatrickType')}</th>
                    <th className="py-2 px-4">{t('sapphireCooling.table.skinToneDescription')}</th>
                    <th className="py-2 px-4">{t('sapphireCooling.table.suitability')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="py-2 px-4">I</td><td className="py-2 px-4">{t('sapphireCooling.table.type1')}</td><td className="py-2 px-4">{t('common.yes')}</td></tr>
                  <tr><td className="py-2 px-4">II</td><td className="py-2 px-4">{t('sapphireCooling.table.type2')}</td><td className="py-2 px-4">{t('common.yes')}</td></tr>
                  <tr><td className="py-2 px-4">III</td><td className="py-2 px-4">{t('sapphireCooling.table.type3')}</td><td className="py-2 px-4">{t('common.yes')}</td></tr>
                  <tr><td className="py-2 px-4">IV</td><td className="py-2 px-4">{t('sapphireCooling.table.type4')}</td><td className="py-2 px-4">{t('sapphireCooling.table.withCaution')}</td></tr>
                  <tr><td className="py-2 px-4">V</td><td className="py-2 px-4">{t('sapphireCooling.table.type5')}</td><td className="py-2 px-4">{t('sapphireCooling.table.withCaution')}</td></tr>
                  <tr><td className="py-2 px-4">VI</td><td className="py-2 px-4">{t('sapphireCooling.table.type6')}</td><td className="py-2 px-4">{t('sapphireCooling.table.notRecommended')}</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              <strong>{t('common.note')}:</strong> {t('sapphireCooling.clinicalData.note')}
            </p>
            <h3 className="text-xl font-semibold mb-2">{t('sapphireCooling.clinicalEvidence.title')}</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>{t('sapphireCooling.clinicalEvidence.painReduction.title')}:</strong> {t('sapphireCooling.clinicalEvidence.painReduction.desc')}</li>
              <li><strong>{t('sapphireCooling.clinicalEvidence.safetyProfile.title')}:</strong> {t('sapphireCooling.clinicalEvidence.safetyProfile.desc')}</li>
            </ul>
          </div>
        </section>

        {/* Best Practices */}
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
            {t('sapphireCooling.bestPractices.title')}
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li style={{ fontSize: '18px', lineHeight: '1.7', color: '#495057' }}>
              <strong>{t('sapphireCooling.bestPractices.startLow.title')}:</strong> {t('sapphireCooling.bestPractices.startLow.desc')}
            </li>
            <li style={{ fontSize: '18px', lineHeight: '1.7', color: '#495057' }}>
              <strong>{t('sapphireCooling.bestPractices.testPatch.title')}:</strong> {t('sapphireCooling.bestPractices.testPatch.desc')}
            </li>
            <li style={{ fontSize: '18px', lineHeight: '1.7', color: '#495057' }}>
              <strong>{t('sapphireCooling.bestPractices.properPrep.title')}:</strong> {t('sapphireCooling.bestPractices.properPrep.desc')}
            </li>
          </ul>
        </section>

        {/* User Testimonials */}
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
            {t('sapphireCooling.userTestimonials.title')}
          </h2>
          <div className="space-y-6">
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
              {t('sapphireCooling.userTestimonials.testimonial1.quote')}
              <br />
              <span className="block mt-2 text-sm text-gray-500">
                {t('sapphireCooling.userTestimonials.testimonial1.attribution')}
              </span>
            </blockquote>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
              {t('sapphireCooling.userTestimonials.testimonial2.quote')}
              <br />
              <span className="block mt-2 text-sm text-gray-500">
                {t('sapphireCooling.userTestimonials.testimonial2.attribution')}
              </span>
            </blockquote>
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
            {t('blog.posts.sapphireCooling.sections.conclusion')}
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
            {t('sapphireCooling.conclusion.content')}
          </p>
        </section>

        {/* Related Articles */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl font-bold mb-4 text-gray-900">{t('common.relatedArticles')}</h2>
            <ul className="list-inside list-disc space-y-2">
              <li><Link to="/blog/ai-powered-skin-sensing" className="text-blue-600 underline">{t('blog.posts.aiPoweredSkinSensing.title')}</Link></li>
              <li><Link to="/blog/multi-head-ipl-systems" className="text-blue-600 underline">{t('blog.posts.multiHeadIPLSystems.title')}</Link></li>
              <li><Link to="/blog/ipl-best-choice" className="text-blue-600 underline">{t('blog.posts.iplBestChoice.title')}</Link></li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
};

export default SapphireCooling; 