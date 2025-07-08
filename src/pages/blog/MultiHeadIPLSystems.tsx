import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

const MultiHeadIPLSystems: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white pt-20 px-4 md:px-0">
      <section className="max-w-4xl mx-auto py-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">{t('MultiHeadIPLSystems.title')}</h1>
        <h2 className="text-2xl font-semibold mb-4">{t('MultiHeadIPLSystems.introduction.title')}</h2>
        <p className="mb-4">{t('MultiHeadIPLSystems.introduction.text')}</p>
        <h2 className="text-xl font-semibold mb-2">{t('MultiHeadIPLSystems.philipsLegacy.title')}</h2>
        <p className="mb-4">{t('MultiHeadIPLSystems.philipsLegacy.text')}</p>
        <h3 className="text-lg font-semibold mb-2">{t('MultiHeadIPLSystems.keyFeatures.title')}</h3>
        <ul className="list-disc pl-6 mb-4">
          <li><b>{t('MultiHeadIPLSystems.keyFeatures.interchangeableHeads')}</b> {t('MultiHeadIPLSystems.keyFeatures.interchangeableHeads.text')}</li>
          <li><b>{t('MultiHeadIPLSystems.keyFeatures.skinToneSensors')}</b> {t('MultiHeadIPLSystems.keyFeatures.skinToneSensors.text')}</li>
          <li><b>{t('MultiHeadIPLSystems.keyFeatures.cordedAndCordlessUse')}</b> {t('MultiHeadIPLSystems.keyFeatures.cordedAndCordlessUse.text')}</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">{t('MultiHeadIPLSystems.respondingToVIOHairRemovalNeeds.title')}</h2>
        <p className="mb-4">{t('MultiHeadIPLSystems.respondingToVIOHairRemovalNeeds.text')}</p>
        <h2 className="text-xl font-semibold mb-2">{t('MultiHeadIPLSystems.whyMultiHeadDesignMatters.title')}</h2>
        <h3 className="font-semibold mb-1">{t('MultiHeadIPLSystems.whyMultiHeadDesignMatters.precisionForEveryCurve.title')}</h3>
        <ul className="list-disc pl-6 mb-4">
          <li><b>{t('MultiHeadIPLSystems.whyMultiHeadDesignMatters.precisionForEveryCurve.largeAttachments')}</b> {t('MultiHeadIPLSystems.whyMultiHeadDesignMatters.precisionForEveryCurve.largeAttachments.text')}</li>
          <li><b>{t('MultiHeadIPLSystems.whyMultiHeadDesignMatters.precisionForEveryCurve.smallAttachments')}</b> {t('MultiHeadIPLSystems.whyMultiHeadDesignMatters.precisionForEveryCurve.smallAttachments.text')}</li>
        </ul>
        <h3 className="font-semibold mb-1">{t('MultiHeadIPLSystems.whyMultiHeadDesignMatters.enhancedUserExperience.title')}</h3>
        <ul className="list-disc pl-6 mb-4">
          <li><b>{t('MultiHeadIPLSystems.whyMultiHeadDesignMatters.enhancedUserExperience.personalization')}</b> {t('MultiHeadIPLSystems.whyMultiHeadDesignMatters.enhancedUserExperience.personalization.text')}</li>
          <li><b>{t('MultiHeadIPLSystems.whyMultiHeadDesignMatters.enhancedUserExperience.safety')}</b> {t('MultiHeadIPLSystems.whyMultiHeadDesignMatters.enhancedUserExperience.safety.text')}</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">{t('MultiHeadIPLSystems.painReduction.title')}</h2>
        <h3 className="font-semibold mb-1">{t('MultiHeadIPLSystems.painReduction.howTheseFiltersWork.title')}</h3>
        <ul className="list-disc pl-6 mb-4">
          <li><b>{t('MultiHeadIPLSystems.painReduction.howTheseFiltersWork.cutOffFilters')}</b> {t('MultiHeadIPLSystems.painReduction.howTheseFiltersWork.cutOffFilters.text')}</li>
          <li><b>{t('MultiHeadIPLSystems.painReduction.howTheseFiltersWork.bandPassAndNotchFilters')}</b> {t('MultiHeadIPLSystems.painReduction.howTheseFiltersWork.bandPassAndNotchFilters.text')}</li>
          <li><b>{t('MultiHeadIPLSystems.painReduction.howTheseFiltersWork.clinicalEvidence')}</b> {t('MultiHeadIPLSystems.painReduction.howTheseFiltersWork.clinicalEvidence.text')}</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">{t('MultiHeadIPLSystems.realUserFeedback.title')}</h2>
        <p className="mb-4">{t('MultiHeadIPLSystems.realUserFeedback.text')}</p>
        <blockquote className="border-l-4 border-blue-400 pl-4 italic mb-4">
          "{t('MultiHeadIPLSystems.realUserFeedback.quote')}"<br/>
          <span className="text-sm">— {t('MultiHeadIPLSystems.realUserFeedback.quoteAttribution')}</span>
        </blockquote>
        <h2 className="text-xl font-semibold mb-2">{t('MultiHeadIPLSystems.conclusion.title')}</h2>
        <p className="mb-4">{t('MultiHeadIPLSystems.conclusion.text')}</p>
        <h3 className="font-semibold mb-2">{t('MultiHeadIPLSystems.conclusion.E-E-A-TGuidance.title')}</h3>
        <ul className="list-disc pl-6 mb-4">
          <li><b>{t('MultiHeadIPLSystems.conclusion.E-E-A-TGuidance.experience')}</b> {t('MultiHeadIPLSystems.conclusion.E-E-A-TGuidance.experience.text')}</li>
          <li><b>{t('MultiHeadIPLSystems.conclusion.E-E-A-TGuidance.expertise')}</b> {t('MultiHeadIPLSystems.conclusion.E-E-A-TGuidance.expertise.text')}</li>
          <li><b>{t('MultiHeadIPLSystems.conclusion.E-E-A-TGuidance.authoritativeness')}</b> {t('MultiHeadIPLSystems.conclusion.E-E-A-TGuidance.authoritativeness.text')}</li>
          <li><b>{t('MultiHeadIPLSystems.conclusion.E-E-A-TGuidance.trust')}</b> {t('MultiHeadIPLSystems.conclusion.E-E-A-TGuidance.trust.text')}</li>
        </ul>
        <p className="text-xs text-gray-500 mb-4">{t('MultiHeadIPLSystems.conclusion.note')}</p>
        <h3 className="font-semibold mb-2">{t('MultiHeadIPLSystems.references.title')}</h3>
        <ol className="list-decimal pl-6 text-xs text-gray-600">
          <li>{t('MultiHeadIPLSystems.references.link1')}</li>
          <li>{t('MultiHeadIPLSystems.references.link2')}</li>
          <li>{t('MultiHeadIPLSystems.references.link3')}</li>
          <li>{t('MultiHeadIPLSystems.references.link4')}</li>
          <li>{t('MultiHeadIPLSystems.references.link5')}</li>
          <li>{t('MultiHeadIPLSystems.references.link6')}</li>
          <li>{t('MultiHeadIPLSystems.references.link7')}</li>
          <li>{t('MultiHeadIPLSystems.references.link8')}</li>
          <li>{t('MultiHeadIPLSystems.references.link9')}</li>
          <li>{t('MultiHeadIPLSystems.references.link10')}</li>
          <li>{t('MultiHeadIPLSystems.references.link11')}</li>
          <li>{t('MultiHeadIPLSystems.references.link12')}</li>
          <li>{t('MultiHeadIPLSystems.references.link13')}</li>
          <li>{t('MultiHeadIPLSystems.references.link14')}</li>
          <li>{t('MultiHeadIPLSystems.references.link15')}</li>
          <li>{t('MultiHeadIPLSystems.references.link16')}</li>
          <li>{t('MultiHeadIPLSystems.references.link17')}</li>
          <li>{t('MultiHeadIPLSystems.references.link18')}</li>
          <li>{t('MultiHeadIPLSystems.references.link19')}</li>
        </ol>
      </section>
    </div>
  );
};

export default MultiHeadIPLSystems; 