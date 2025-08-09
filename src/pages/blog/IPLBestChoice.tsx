import React from 'react';
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import ContactFormA from '../../components/Forms/ContactFormA';
import { useLanguage } from '../../context/LanguageContext';

const IPLBestChoice: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white" style={{ wordSpacing: '0.1em' }}>
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
              🏠 {t('blog.breadcrumb', 'Blog')}
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
            {t('blog.iplBestChoice.title', 'Why IPL Home Hair Removal Devices Are the Best Choice Among All Hair Removal Tools')}
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
            {t('blog.iplBestChoice.date', 'July 10, 2025')}
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

      {/* Comparison Table */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('hairRemovalMethodsComparison.title')}</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded-lg shadow">
              <thead>
                <tr className="bg-blue-100 text-blue-900">
                  <th className="py-2 px-4">{t('hairRemovalMethodsComparison.method')}</th>
                  <th className="py-2 px-4">{t('hairRemovalMethodsComparison.pros')}</th>
                  <th className="py-2 px-4">{t('hairRemovalMethodsComparison.cons')}</th>
                  <th className="py-2 px-4">{t('hairRemovalMethodsComparison.bestFor')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 font-semibold">{t('hairRemovalMethodsComparison.IPLHomeDevice')}</td>
                  <td className="py-2 px-4">{t('hairRemovalMethodsComparison.IPLHomeDevicePros')}</td>
                  <td className="py-2 px-4">{t('hairRemovalMethodsComparison.IPLHomeDeviceCons')}</td>
                  <td className="py-2 px-4">{t('hairRemovalMethodsComparison.IPLHomeDeviceBestFor')}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">{t('hairRemovalMethodsComparison.waxing')}</td>
                  <td className="py-2 px-4">{t('hairRemovalMethodsComparison.waxingPros')}</td>
                  <td className="py-2 px-4">{t('hairRemovalMethodsComparison.waxingCons')}</td>
                  <td className="py-2 px-4">{t('hairRemovalMethodsComparison.waxingBestFor')}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">{t('hairRemovalMethodsComparison.hairRemovalCream')}</td>
                  <td className="py-2 px-4">{t('hairRemovalMethodsComparison.hairRemovalCreamPros')}</td>
                  <td className="py-2 px-4">{t('hairRemovalMethodsComparison.hairRemovalCreamCons')}</td>
                  <td className="py-2 px-4">{t('hairRemovalMethodsComparison.hairRemovalCreamBestFor')}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">{t('hairRemovalMethodsComparison.razor')}</td>
                  <td className="py-2 px-4">{t('hairRemovalMethodsComparison.razorPros')}</td>
                  <td className="py-2 px-4">{t('hairRemovalMethodsComparison.razorCons')}</td>
                  <td className="py-2 px-4">{t('hairRemovalMethodsComparison.razorBestFor')}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">{t('hairRemovalMethodsComparison.electricShaver')}</td>
                  <td className="py-2 px-4">{t('hairRemovalMethodsComparison.electricShaverPros')}</td>
                  <td className="py-2 px-4">{t('hairRemovalMethodsComparison.electricShaverCons')}</td>
                  <td className="py-2 px-4">{t('hairRemovalMethodsComparison.electricShaverBestFor')}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">{t('hairRemovalMethodsComparison.laserHairRemoval')}</td>
                  <td className="py-2 px-4">{t('hairRemovalMethodsComparison.laserHairRemovalPros')}</td>
                  <td className="py-2 px-4">{t('hairRemovalMethodsComparison.laserHairRemovalCons')}</td>
                  <td className="py-2 px-4">{t('hairRemovalMethodsComparison.laserHairRemovalBestFor')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why IPL Section */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('whyChooseIPLHomeHairRemoval.title')}</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li><strong>{t('whyChooseIPLHomeHairRemoval.longlastingResults')}</strong> {t('whyChooseIPLHomeHairRemoval.longlastingResultsDescription')} <a href="https://www.healthline.com/health/beauty-skin-care/hair-removal-methods" target="_blank" rel="noopener noreferrer\" className="text-blue-600 underline">{t('whyChooseIPLHomeHairRemoval.healthlineLink')}</a></li>
            <li><strong>{t('whyChooseIPLHomeHairRemoval.minimalPain')}</strong> {t('whyChooseIPLHomeHairRemoval.minimalPainDescription')}</li>
            <li><strong>{t('whyChooseIPLHomeHairRemoval.safeForHomeUse')}</strong> {t('whyChooseIPLHomeHairRemoval.safeForHomeUseDescription')}</li>
            <li><strong>{t('whyChooseIPLHomeHairRemoval.costEffective')}</strong> {t('whyChooseIPLHomeHairRemoval.costEffectiveDescription')}</li>
            <li><strong>{t('whyChooseIPLHomeHairRemoval.convenient')}</strong> {t('whyChooseIPLHomeHairRemoval.convenientDescription')}</li>
          </ul>
        </div>
      </section>

      {/* User Testimonials */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('realUserStories.title')}</h2>
          <div className="space-y-6">
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">{t('realUserStories.quote1')}
              <br />
              <span className="block mt-2 text-sm text-gray-500">{t('realUserStories.quote1Attribution')}</span>
            </blockquote>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">{t('realUserStories.quote2')}
              <br />
              <span className="block mt-2 text-sm text-gray-500">{t('realUserStories.quote2Attribution')}</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Internal Links & Resources */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-4 text-gray-900">{t('exploreMore.title')}</h2>
          <ul className="list-inside list-disc space-y-2">
            <li><Link href="/how-to-use" className="text-blue-600 underline">{t('exploreMore.howToUse')}</Link></li>
            <li><Link href="/ipl-hair-removal" className="text-blue-600 underline">{t('exploreMore.ourIPLProductRange')}</Link></li>
            <li><Link href="/service-support/knowledge-base" className="text-blue-600 underline">{t('exploreMore.hairRemovalFAQs')}</Link></li>
            <li><Link href="/blog/news-insights" className="text-blue-600 underline">{t('exploreMore.latestTechnologyInsights')}</Link></li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-4 text-gray-900">{t('frequentlyAskedQuestions.title')}</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">{t('frequentlyAskedQuestions.isIPLSafeForAllSkinTypes')}</h3>
              <p>{t('frequentlyAskedQuestions.isIPLSafeForAllSkinTypesDescription')}</p>
            </div>
            <div>
              <h3 className="font-semibold">{t('frequentlyAskedQuestions.howLongDoesItTakeToSeeResults')}</h3>
              <p>{t('frequentlyAskedQuestions.howLongDoesItTakeToSeeResultsDescription')}</p>
            </div>
            <div>
              <h3 className="font-semibold">{t('frequentlyAskedQuestions.doesIPLHurt')}</h3>
              <p>{t('frequentlyAskedQuestions.doesIPLHurtDescription')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div className="bg-[#f9f9f9] py-16">
        <ContactFormA />
      </div>

      {/* Recommended Blog Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('recommendedBlog.title')}</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <img src="/images/blog/ipl-best-choice.jpg" alt="IPL Best Choice" className="rounded-xl shadow-lg w-full max-w-xs" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-2">{t('recommendedBlog.title')}</h3>
              <p className="mb-4">{t('recommendedBlog.description')}</p>
              <Link href="/blog/ipl-best-choice" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition">{t('recommendedBlog.readFullArticle')}</Link>
            </div>
          </div>
        </div>
      </section>
      </article>

      {/* Contact Form */}
      <div className="bg-[#f9f9f9] py-16">
        <ContactFormA />
      </div>

      {/* Recommended Blog Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('recommendedBlog.title')}</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <img src="/images/blog/ipl-best-choice.jpg" alt="IPL Best Choice" className="rounded-xl shadow-lg w-full max-w-xs" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-2">{t('recommendedBlog.title')}</h3>
              <p className="mb-4">{t('recommendedBlog.description')}</p>
              <Link href="/blog/ipl-best-choice" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition">{t('recommendedBlog.readFullArticle')}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IPLBestChoice;