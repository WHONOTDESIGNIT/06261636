import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "FDA 510(k) Pathway: Navigating Medical Device Classification for IPL",
  "description": "A comprehensive guide to the FDA 510(k) pathway for home-use IPL hair removal devices. Learn about regulatory requirements, marketing claims, and how iShine helps brands achieve compliance.",
  "author": {
    "@type": "Organization",
    "name": "SHENZHEN ISHINE TECHNOLOGY COMPANY LIMITED"
  },
  "datePublished": "2024-07-04",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "/blog/fda-510k-pathway"
  }
};

const FDA510kPathway: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white" style={{ wordSpacing: '0.1em' }}>
      <Helmet>
        <title>FDA 510(k) Pathway for IPL Devices: US Medical Device Compliance Guide</title>
        <meta name="description" content="A comprehensive guide to the FDA 510(k) pathway for home-use IPL hair removal devices. Learn about regulatory requirements, marketing claims, and how iShine helps brands achieve compliance." />
        <meta name="keywords" content="FDA 510k, IPL hair removal, medical device compliance, home IPL device, FDA clearance, regulatory pathway, 510k submission, US market access, iShine" />
        <link rel="canonical" href="/blog/fda-510k-pathway" />
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
            FDA 510(k) Pathway: Navigating Medical Device Classification for IPL
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
            July 4, 2024
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
            Introduction
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
            {t('fda510kPathway.introduction.content')}
          </p>
        </section>
      {/* 1. FDA 510(k) Pathway for Home IPL Devices */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('fda510kPathway.section1.title')}</h2>
          <h3 className="text-xl font-semibold mb-2">{t('fda510kPathway.section1.subTitle1')}</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>{t('fda510kPathway.section1.item1')}</li>
            <li>{t('fda510kPathway.section1.item2')}</li>
            <li>{t('fda510kPathway.section1.item3')}</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">{t('fda510kPathway.section1.subTitle2')}</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>{t('fda510kPathway.section1.item4')}</li>
            <li>{t('fda510kPathway.section1.item5')}</li>
            <li>{t('fda510kPathway.section1.item6')}</li>
          </ul>
        </div>
      </section>
      {/* 2. How Marketing Claims Affect Regulatory Classification */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('fda510kPathway.section2.title')}</h2>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>{t('fda510kPathway.section2.item1.title')}</strong>: {t('fda510kPathway.section2.item1.content')}</li>
            <li><strong>{t('fda510kPathway.section2.item2.title')}</strong>: {t('fda510kPathway.section2.item2.content')}</li>
            <li>{t('fda510kPathway.section2.item3')}</li>
          </ul>
          <p className="mt-4"><strong>{t('fda510kPathway.section2.keyPoint.title')}</strong>: {t('fda510kPathway.section2.keyPoint.content')}</p>
        </div>
      </section>
      {/* 3. iShine's Expertise in Securing Your Brand's FDA 510(k) Listing */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('fda510kPathway.section3.title')}</h2>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>{t('fda510kPathway.section3.item1.title')}</strong>: {t('fda510kPathway.section3.item1.content')}</li>
            <li><strong>{t('fda510kPathway.section3.item2.title')}</strong>: {t('fda510kPathway.section3.item2.content')}</li>
            <li><strong>{t('fda510kPathway.section3.item3.title')}</strong>: {t('fda510kPathway.section3.item3.content')}</li>
            <li><strong>{t('fda510kPathway.section3.item4.title')}</strong>: {t('fda510kPathway.section3.item4.content')}</li>
          </ul>
        </div>
      </section>
      {/* 4. Benefits of Obtaining a Brand-Specific FDA 510(k) Listing */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('fda510kPathway.section4.title')}</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded-lg shadow">
              <thead>
                <tr className="bg-blue-100 text-blue-900">
                  <th className="py-2 px-4">{t('fda510kPathway.section4.table.header1')}</th>
                  <th className="py-2 px-4">{t('fda510kPathway.section4.table.header2')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 font-semibold">{t('fda510kPathway.section4.table.row1.benefit')}</td>
                  <td className="py-2 px-4 font-semibold">{t('fda510kPathway.section4.table.row1.description')}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-semibold">{t('fda510kPathway.section4.table.row2.benefit')}</td>
                  <td className="py-2 px-4 font-semibold">{t('fda510kPathway.section4.table.row2.description')}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-semibold">{t('fda510kPathway.section4.table.row3.benefit')}</td>
                  <td className="py-2 px-4 font-semibold">{t('fda510kPathway.section4.table.row3.description')}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-semibold">{t('fda510kPathway.section4.table.row4.benefit')}</td>
                  <td className="py-2 px-4 font-semibold">{t('fda510kPathway.section4.table.row4.description')}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-semibold">{t('fda510kPathway.section4.table.row5.benefit')}</td>
                  <td className="py-2 px-4 font-semibold">{t('fda510kPathway.section4.table.row5.description')}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-semibold">{t('fda510kPathway.section4.table.row6.benefit')}</td>
                  <td className="py-2 px-4 font-semibold">{t('fda510kPathway.section4.table.row6.description')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* 5. Practical Guidance for Brands */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('fda510kPathway.section5.title')}</h2>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>{t('fda510kPathway.section5.item1.title')}</strong>: {t('fda510kPathway.section5.item1.content')}</li>
            <li><strong>{t('fda510kPathway.section5.item2.title')}</strong>: {t('fda510kPathway.section5.item2.content')}</li>
            <li><strong>{t('fda510kPathway.section5.item3.title')}</strong>: {t('fda510kPathway.section5.item3.content')}</li>
            <li><strong>{t('fda510kPathway.section5.item4.title')}</strong>: {t('fda510kPathway.section5.item4.content')}</li>
          </ul>
        </div>
      </section>
      {/* Conclusion */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('fda510kPathway.conclusion.title')}</h2>
          <p>{t('fda510kPathway.conclusion.content')}</p>
          <p className="mt-4 text-sm text-gray-500"><strong>{t('fda510kPathway.conclusion.note.title')}</strong>: {t('fda510kPathway.conclusion.note.content')}</p>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-4 text-gray-900">{t('fda510kPathway.faq.title')}</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">{t('fda510kPathway.faq.item1.question')}</h3>
              <p>{t('fda510kPathway.faq.item1.answer')}</p>
            </div>
            <div>
              <h3 className="font-semibold">{t('fda510kPathway.faq.item2.question')}</h3>
              <p>{t('fda510kPathway.faq.item2.answer')}</p>
            </div>
            <div>
              <h3 className="font-semibold">{t('fda510kPathway.faq.item3.question')}</h3>
              <p>{t('fda510kPathway.faq.item3.answer')}</p>
            </div>
          </div>
        </div>
      </section>
      {/* Internal & External Links */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-4 text-gray-900">{t('fda510kPathway.exploreMore.title')}</h2>
          <ul className="list-inside list-disc space-y-2">
            <li><Link to="/blog/news-insights" className="text-blue-600 underline">{t('fda510kPathway.exploreMore.item1')}</Link></li>
            <li><a href="https://www.fda.gov/medical-devices/premarket-notification-510k" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{t('fda510kPathway.exploreMore.item2')}</a></li>
            <li><a href="https://www.ulike.com/blogs/hair-removal/is-the-ulike-air-10-fda-approved-or-fda-cleared" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{t('fda510kPathway.exploreMore.item3')}</a></li>
            <li><a href="https://www.projectebeauty.com/blogs/news/does-fda-approval-matter-when-choosing-an-led-light-therapy-mask" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{t('fda510kPathway.exploreMore.item4')}</a></li>
          </ul>
        </div>
      </section>
      {/* Author & Company Info */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-4 text-gray-900">{t('fda510kPathway.author.title')}</h2>
          <p>{t('fda510kPathway.author.content')}</p>
        </div>
      </section>
      </article>
    </div>
  );
};

export default FDA510kPathway; 