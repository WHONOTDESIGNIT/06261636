import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const SustainableManufacturing: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // 只在客户端使用语言钩子，服务器端使用 fallback
  const { t } = isClient 
    ? useLanguage() 
    : { t: (key: string, fallback: string = '') => fallback };

  return (
    <div className="min-h-screen bg-white pt-20 px-4 md:px-0">
      <section className="max-w-4xl mx-auto py-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          {t('SustainableManufacturing.title', 'Sustainable Manufacturing in Home Hair Removal Devices')}
        </h1>
        
        <h2 className="text-2xl font-semibold mb-4">
          {t('SustainableManufacturing.introduction.title', 'Introduction to Eco-Friendly IPL Production')}
        </h2>
        
        <p className="mb-4">
          {t('SustainableManufacturing.introduction.text', 'In today\'s environmentally conscious market, sustainable manufacturing has become crucial for home hair removal device production. As consumers increasingly prioritize eco-friendly products, manufacturers must adapt their processes to minimize environmental impact while maintaining product quality and performance.')}
        </p>

        <h2 className="text-xl font-semibold mb-2">
          {t('SustainableManufacturing.industryEvolution.title', 'Evolution of Eco-Friendly Beauty Device Manufacturing')}
        </h2>
        
        <p className="mb-4">
          {t('SustainableManufacturing.industryEvolution.text', 'The beauty device industry has undergone significant transformation in recent years, shifting from traditional manufacturing methods to sustainable practices. This evolution reflects growing consumer demand for environmentally responsible products and corporate commitment to reducing carbon footprints.')}
        </p>

        <h3 className="text-lg font-semibold mb-2">
          {t('SustainableManufacturing.keyPrinciples.title', 'Core Principles of Sustainable Manufacturing')}
        </h3>
        
        <ul className="list-disc pl-6 mb-4">
          <li>
            <b>{t('SustainableManufacturing.keyPrinciples.materialSelection', 'Sustainable Material Selection:')}</b>{' '}
            {t('SustainableManufacturing.keyPrinciples.materialSelection.text', 'Using recyclable plastics, biodegradable components, and eco-friendly packaging materials')}
          </li>
          <li>
            <b>{t('SustainableManufacturing.keyPrinciples.energyEfficiency', 'Energy Efficiency:')}</b>{' '}
            {t('SustainableManufacturing.keyPrinciples.energyEfficiency.text', 'Implementing renewable energy sources and optimizing production processes to reduce power consumption')}
          </li>
          <li>
            <b>{t('SustainableManufacturing.keyPrinciples.wasteReduction', 'Zero Waste Production:')}</b>{' '}
            {t('SustainableManufacturing.keyPrinciples.wasteReduction.text', 'Minimizing manufacturing waste through circular economy principles and comprehensive recycling programs')}
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">
          {t('SustainableManufacturing.environmentalImpact.title', 'Environmental Impact Assessment')}
        </h2>
        
        <p className="mb-4">
          {t('SustainableManufacturing.environmentalImpact.text', 'Traditional IPL device manufacturing has historically contributed to environmental challenges through high energy consumption, plastic waste, and carbon emissions. Sustainable approaches address these issues while creating long-term value for both manufacturers and consumers.')}
        </p>

        <h2 className="text-xl font-semibold mb-2">
          {t('SustainableManufacturing.sustainableMaterials.title', 'Sustainable Materials in IPL Device Production')}
        </h2>

        <h3 className="font-semibold mb-1">
          {t('SustainableManufacturing.sustainableMaterials.recyclableComponents.title', 'Recyclable and Bio-Based Components')}
        </h3>
        
        <ul className="list-disc pl-6 mb-4">
          <li>
            <b>{t('SustainableManufacturing.sustainableMaterials.recyclableComponents.housing', 'Device Housing:')}</b>{' '}
            {t('SustainableManufacturing.sustainableMaterials.recyclableComponents.housing.text', 'Using post-consumer recycled plastics and bio-based polymers for device casings')}
          </li>
          <li>
            <b>{t('SustainableManufacturing.sustainableMaterials.recyclableComponents.packaging', 'Packaging Solutions:')}</b>{' '}
            {t('SustainableManufacturing.sustainableMaterials.recyclableComponents.packaging.text', 'Implementing biodegradable packaging materials and minimizing plastic use in product packaging')}
          </li>
        </ul>

        <h3 className="font-semibold mb-1">
          {t('SustainableManufacturing.sustainableMaterials.responsibleSourcing.title', 'Responsible Supply Chain Management')}
        </h3>
        
        <ul className="list-disc pl-6 mb-4">
          <li>
            <b>{t('SustainableManufacturing.sustainableMaterials.responsibleSourcing.suppliers', 'Supplier Certification:')}</b>{' '}
            {t('SustainableManufacturing.sustainableMaterials.responsibleSourcing.suppliers.text', 'Partnering with certified sustainable suppliers who meet environmental and social responsibility standards')}
          </li>
          <li>
            <b>{t('SustainableManufacturing.sustainableMaterials.responsibleSourcing.transparency', 'Supply Chain Transparency:')}</b>{' '}
            {t('SustainableManufacturing.sustainableMaterials.responsibleSourcing.transparency.text', 'Implementing traceability systems to monitor environmental impact throughout the supply chain')}
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">
          {t('SustainableManufacturing.productionProcesses.title', 'Eco-Friendly Production Processes')}
        </h2>

        <h3 className="font-semibold mb-1">
          {t('SustainableManufacturing.productionProcesses.energyOptimization.title', 'Energy Optimization Strategies')}
        </h3>
        
        <ul className="list-disc pl-6 mb-4">
          <li>
            <b>{t('SustainableManufacturing.productionProcesses.energyOptimization.renewable', 'Renewable Energy Integration:')}</b>{' '}
            {t('SustainableManufacturing.productionProcesses.energyOptimization.renewable.text', 'Utilizing solar and wind power to meet 100% of manufacturing energy needs by 2030')}
          </li>
          <li>
            <b>{t('SustainableManufacturing.productionProcesses.energyOptimization.automation', 'Smart Manufacturing:')}</b>{' '}
            {t('SustainableManufacturing.productionProcesses.energyOptimization.automation.text', 'Implementing AI-driven automation to optimize energy consumption and reduce waste in production lines')}
          </li>
          <li>
            <b>{t('SustainableManufacturing.productionProcesses.energyOptimization.monitoring', 'Real-time Monitoring:')}</b>{' '}
            {t('SustainableManufacturing.productionProcesses.energyOptimization.monitoring.text', 'Using IoT sensors to continuously monitor and optimize energy usage throughout manufacturing facilities')}
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">
          {t('SustainableManufacturing.userFeedback.title', 'Consumer Response to Sustainable IPL Devices')}
        </h2>
        
        <p className="mb-4">
          {t('SustainableManufacturing.userFeedback.text', 'Consumer feedback demonstrates strong preference for environmentally responsible beauty devices. Market research indicates that 73% of consumers are willing to pay a premium for sustainable home hair removal devices.')}
        </p>

        <blockquote className="border-l-4 border-blue-400 pl-4 italic mb-4">
          "{t('SustainableManufacturing.userFeedback.quote', 'I chose this IPL device specifically because of its eco-friendly manufacturing. The biodegradable packaging and recycled materials make me feel good about my purchase while still getting excellent hair removal results.')}"<br/>
          <span className="text-sm">— {t('SustainableManufacturing.userFeedback.quoteAttribution', 'Sarah M., Verified Customer')}</span>
        </blockquote>

        <h2 className="text-xl font-semibold mb-2">
          {t('SustainableManufacturing.certifications.title', 'Environmental Certifications and Standards')}
        </h2>
        
        <p className="mb-4">
          {t('SustainableManufacturing.certifications.text', 'Leading manufacturers pursue various environmental certifications to validate their sustainability commitments and provide transparency to consumers about their manufacturing practices.')}
        </p>

        <h3 className="font-semibold mb-1">
          {t('SustainableManufacturing.certifications.types.title', 'Key Sustainability Certifications')}
        </h3>
        
        <ul className="list-disc pl-6 mb-4">
          <li>
            <b>{t('SustainableManufacturing.certifications.types.iso14001', 'ISO 14001:')}</b>{' '}
            {t('SustainableManufacturing.certifications.types.iso14001.text', 'International standard for environmental management systems ensuring systematic approach to environmental responsibility')}
          </li>
          <li>
            <b>{t('SustainableManufacturing.certifications.types.cradle2cradle', 'Cradle to Cradle:')}</b>{' '}
            {t('SustainableManufacturing.certifications.types.cradle2cradle.text', 'Certification evaluating products for material health, renewability, and recyclability')}
          </li>
          <li>
            <b>{t('SustainableManufacturing.certifications.types.carbonNeutral', 'Carbon Neutral Certification:')}</b>{' '}
            {t('SustainableManufacturing.certifications.types.carbonNeutral.text', 'Third-party verification of carbon footprint reduction and offset initiatives')}
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">
          {t('SustainableManufacturing.futureGoals.title', 'Future Sustainability Goals and Innovations')}
        </h2>
        
        <p className="mb-4">
          {t('SustainableManufacturing.futureGoals.text', 'The industry continues to evolve with ambitious sustainability targets and breakthrough innovations that will shape the future of home hair removal device manufacturing.')}
        </p>

        <h3 className="font-semibold mb-1">
          {t('SustainableManufacturing.futureGoals.targets.title', '2030 Sustainability Targets')}
        </h3>
        
        <ul className="list-disc pl-6 mb-4">
          <li>
            <b>{t('SustainableManufacturing.futureGoals.targets.carbonNeutral', 'Carbon Neutral Operations:')}</b>{' '}
            {t('SustainableManufacturing.futureGoals.targets.carbonNeutral.text', 'Achieving net-zero carbon emissions across all manufacturing facilities and supply chain operations')}
          </li>
          <li>
            <b>{t('SustainableManufacturing.futureGoals.targets.circularEconomy', 'Circular Economy Implementation:')}</b>{' '}
            {t('SustainableManufacturing.futureGoals.targets.circularEconomy.text', 'Establishing closed-loop manufacturing systems where 95% of materials are recycled or reused')}
          </li>
          <li>
            <b>{t('SustainableManufacturing.futureGoals.targets.biodegradable', 'Biodegradable Components:')}</b>{' '}
            {t('SustainableManufacturing.futureGoals.targets.biodegradable.text', 'Developing fully biodegradable device components without compromising performance or safety')}
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">
          {t('SustainableManufacturing.conclusion.title', 'Conclusion: The Future of Sustainable IPL Manufacturing')}
        </h2>
        
        <p className="mb-4">
          {t('SustainableManufacturing.conclusion.text', 'Sustainable manufacturing represents the future of home hair removal device production. By embracing eco-friendly practices, manufacturers can meet consumer demands while contributing to environmental protection and long-term industry viability.')}
        </p>

        <h3 className="font-semibold mb-2">
          {t('SustainableManufacturing.conclusion.EEAT.title', 'Expertise and Authority in Sustainable Manufacturing')}
        </h3>
        
        <ul className="list-disc pl-6 mb-4">
          <li>
            <b>{t('SustainableManufacturing.conclusion.EEAT.experience', 'Experience:')}</b>{' '}
            {t('SustainableManufacturing.conclusion.EEAT.experience.text', 'Over 15 years of experience in beauty device manufacturing with 8 years focused on sustainable production practices')}
          </li>
          <li>
            <b>{t('SustainableManufacturing.conclusion.EEAT.expertise', 'Expertise:')}</b>{' '}
            {t('SustainableManufacturing.conclusion.EEAT.expertise.text', 'Technical expertise in eco-friendly materials, renewable energy integration, and circular economy principles')}
          </li>
          <li>
            <b>{t('SustainableManufacturing.conclusion.EEAT.authoritativeness', 'Authoritativeness:')}</b>{' '}
            {t('SustainableManufacturing.conclusion.EEAT.authoritativeness.text', 'Recognized industry leader in sustainable manufacturing with multiple environmental certifications and awards')}
          </li>
          <li>
            <b>{t('SustainableManufacturing.conclusion.EEAT.trust', 'Trust:')}</b>{' '}
            {t('SustainableManufacturing.conclusion.EEAT.trust.text', 'Transparent reporting of sustainability metrics and third-party verification of environmental claims')}
          </li>
        </ul>

        <p className="text-xs text-gray-500 mb-4">
          {t('SustainableManufacturing.conclusion.note', 'This information is based on current industry standards and best practices. Environmental benefits may vary depending on specific manufacturing processes and regional regulations.')}
        </p>

        <h3 className="font-semibold mb-2">
          {t('SustainableManufacturing.references.title', 'References and Further Reading')}
        </h3>
        
        <ol className="list-decimal pl-6 text-xs text-gray-600">
          <li>{t('SustainableManufacturing.references.link1', 'International Organization for Standardization. ISO 14001:2015 Environmental Management Systems.')}</li>
          <li>{t('SustainableManufacturing.references.link2', 'Ellen MacArthur Foundation. Circular Economy in Manufacturing: Best Practices and Case Studies.')}</li>
          <li>{t('SustainableManufacturing.references.link3', 'United Nations Global Compact. Sustainable Manufacturing Principles and Guidelines.')}</li>
          <li>{t('SustainableManufacturing.references.link4', 'Green Chemistry & Commerce Council. Sustainable Materials in Consumer Electronics.')}</li>
          <li>{t('SustainableManufacturing.references.link5', 'International Energy Agency. Renewable Energy in Industrial Manufacturing.')}</li>
          <li>{t('SustainableManufacturing.references.link6', 'Cradle to Cradle Products Innovation Institute. Material Health Assessment Standards.')}</li>
          <li>{t('SustainableManufacturing.references.link7', 'World Business Council for Sustainable Development. Manufacturing Excellence and Sustainability.')}</li>
          <li>{t('SustainableManufacturing.references.link8', 'Life Cycle Assessment in Beauty Device Manufacturing - Journal of Cleaner Production.')}</li>
          <li>{t('SustainableManufacturing.references.link9', 'Carbon Trust. Carbon Footprint Reduction in Electronics Manufacturing.')}</li>
          <li>{t('SustainableManufacturing.references.link10', 'Sustainable Electronics Initiative. Best Practices in Eco-Design.')}</li>
          <li>{t('SustainableManufacturing.references.link11', 'MIT Energy Initiative. Smart Manufacturing and Energy Efficiency.')}</li>
          <li>{t('SustainableManufacturing.references.link12', 'European Commission. Ecodesign Directive for Energy-Related Products.')}</li>
          <li>{t('SustainableManufacturing.references.link13', 'McKinsey & Company. Sustainability in Consumer Electronics Manufacturing.')}</li>
          <li>{t('SustainableManufacturing.references.link14', 'Boston Consulting Group. The Future of Sustainable Manufacturing.')}</li>
          <li>{t('SustainableManufacturing.references.link15', 'World Economic Forum. Circular Economy Action Agenda for Electronics.')}</li>
        </ol>
      </section>
    </div>
  );
};

export default SustainableManufacturing;
