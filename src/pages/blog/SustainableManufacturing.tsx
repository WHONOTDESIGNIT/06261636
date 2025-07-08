import React from 'react';
import { t } from '../../hooks/useTranslation';

const SustainableManufacturing: React.FC = () => (
  <div className="min-h-screen bg-white pt-20 px-4 md:px-0">
    <section className="max-w-4xl mx-auto py-12">
      <h1>{t('blog.posts.sustainableManufacturing.title')}</h1>
      <h2>{t('blog.posts.sustainableManufacturing.sections.environmentalImpact')}</h2>
      <p>{t('blog.posts.sustainableManufacturing.intro')}</p>
      <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
      <p className="mb-4">As the demand for at-home IPL (Intense Pulsed Light) hair removal devices surges, so does the responsibility to produce these electronics with minimal environmental impact. Sustainable manufacturing is no longer a trend but a necessity—encompassing every stage from raw material sourcing to end-of-life recycling. This article assesses the environmental footprint of IPL device production and explores innovative, practical strategies for achieving a truly green supply chain, with a focus on electronics, optics, eco-friendly ABS housings, sustainable packaging, and waste reutilization.</p>
      <h2 className="text-xl font-semibold mb-2">Environmental Impact Assessment of IPL Device Manufacturing</h2>
      <h3 className="font-semibold mb-1">1. Electronic Components</h3>
      <ul className="list-disc pl-6 mb-4">
        <li><b>Resource Extraction:</b> The manufacturing of semiconductors, circuit boards, and sensors requires rare earth metals and significant energy, contributing to habitat destruction, water pollution, and high carbon emissions[1].</li>
        <li><b>Production Energy Use:</b> Electronics fabrication is energy-intensive, especially during semiconductor and PCB manufacturing, which also involves hazardous chemicals and generates material waste.</li>
        <li><b>Sustainable Solutions:</b>
          <ul className="list-disc pl-6">
            <li><b>Responsible Sourcing:</b> Partnering with suppliers that adhere to environmental and ethical standards, including conflict-free minerals and renewable energy use[2][3][4].</li>
            <li><b>Recycled Content:</b> Incorporating recycled metals and plastics in electronic components reduces the need for virgin resources and lowers emissions[3].</li>
          </ul>
        </li>
      </ul>
      <h3 className="font-semibold mb-1">2. Optical Components (Lenses and Filters)</h3>
      <ul className="list-disc pl-6 mb-4">
        <li><b>Materials:</b> Glass and specialty plastics used for IPL lenses and filters can be energy-intensive to produce.</li>
        <li><b>Green Innovations:</b>
          <ul className="list-disc pl-6">
            <li><b>Eco-friendly Glass:</b> Sourcing from manufacturers that use renewable energy and recycled glass in lens production.</li>
            <li><b>Design for Disassembly:</b> Creating components that are easy to separate and recycle at end-of-life.</li>
          </ul>
        </li>
      </ul>
      <h3 className="font-semibold mb-1">3. ABS Eco-Friendly Housings</h3>
      <ul className="list-disc pl-6 mb-4">
        <li><b>Recyclability:</b> ABS (Acrylonitrile Butadiene Styrene) is widely used for its durability and aesthetics. Modern recycling programs allow ABS to be collected, melted, and reformed into new products, significantly reducing landfill waste[5][6][7].</li>
        <li><b>Recycled ABS:</b> Using post-consumer or post-industrial recycled ABS offers nearly identical performance to virgin material, while cutting down on resource extraction and emissions[7].</li>
        <li><b>Lightweighting:</b> Designing thinner, lighter housings reduces material use and transportation emissions[5].</li>
      </ul>
      <h3 className="font-semibold mb-1">4. Sustainable Paper Packaging</h3>
      <ul className="list-disc pl-6 mb-4">
        <li><b>Raw Material Sourcing:</b> Sustainable packaging starts with responsibly managed forests, certified by organizations like FSC or PEFC, ensuring biodiversity and ecosystem health[8][9][10].</li>
        <li><b>Alternative Materials:</b> Incorporating bamboo, recycled paper, or agricultural waste as fiber sources conserves resources and reduces environmental impact[9][10].</li>
        <li><b>Eco-Friendly Manufacturing:</b> Adopting water- and energy-efficient papermaking processes, chlorine-free bleaching, and closed-loop recycling systems[9].</li>
        <li><b>Circular Design:</b> Packaging is designed for recyclability and compostability, supporting a circular economy[8][9].</li>
      </ul>
      <h3 className="font-semibold mb-1">5. Waste Reduction and Reuse</h3>
      <ul className="list-disc pl-6 mb-4">
        <li><b>E-Waste Recycling:</b> End-of-life IPL devices can be collected, dismantled, and shredded to recover valuable metals, plastics, and components, minimizing landfill waste and pollution[11][12][13].</li>
        <li><b>Refurbishing and Repurposing:</b> Defective or outdated devices can be repaired for resale or have usable parts repurposed in new products, extending material lifecycles and reducing demand for new resources[12].</li>
        <li><b>Manufacturing Waste Management:</b> Implementing lean manufacturing and just-in-time production minimizes excess inventory and scrap, while robust waste management ensures responsible handling of hazardous materials[3].</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Sustainable Supply Chain Innovations</h2>
      <table className="w-full text-sm mb-4 border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Aspect</th>
            <th className="p-2 border">Sustainable Practice</th>
            <th className="p-2 border">Environmental Benefit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">Electronics</td>
            <td className="p-2 border">Recycled metals/plastics, renewable energy, transparency</td>
            <td className="p-2 border">Reduced emissions, resource conservation</td>
          </tr>
          <tr>
            <td className="p-2 border">Lenses/Optics</td>
            <td className="p-2 border">Recycled glass, eco-design</td>
            <td className="p-2 border">Lower energy use, easier recycling</td>
          </tr>
          <tr>
            <td className="p-2 border">ABS Housings</td>
            <td className="p-2 border">Recycled ABS, lightweight design</td>
            <td className="p-2 border">Less waste, lower carbon footprint</td>
          </tr>
          <tr>
            <td className="p-2 border">Paper Packaging</td>
            <td className="p-2 border">FSC-certified, recycled/bamboo fiber, eco-manufacturing</td>
            <td className="p-2 border">Forest protection, waste reduction</td>
          </tr>
          <tr>
            <td className="p-2 border">Waste Management</td>
            <td className="p-2 border">E-waste recycling, refurbishing, lean production</td>
            <td className="p-2 border">Landfill diversion, resource efficiency</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-xl font-semibold mb-2">The Feasibility of a Green IPL Supply Chain</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><b>Technological Readiness:</b> Advances in materials science and recycling have made it feasible to use recycled ABS, eco-friendly optics, and sustainable packaging at scale[5][6][9][7].</li>
        <li><b>Economic Incentives:</b> Sustainable practices often reduce costs in the long run through material savings, energy efficiency, and improved brand loyalty[2][12][4].</li>
        <li><b>Regulatory and Consumer Pressure:</b> Growing regulations and consumer demand for eco-friendly products are pushing manufacturers to innovate and adopt green practices throughout the supply chain[14][2][3].</li>
        <li><b>Industry Collaboration:</b> Partnerships across the value chain—from raw material suppliers to recyclers—are essential for transparency, traceability, and maximum impact[2][4].</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">iShine's Commitment to Sustainability</h2>
      <p className="mb-4">At iShine, environmental stewardship is at the heart of our mission. We prioritize:</p>
      <ul className="list-disc pl-6 mb-4">
        <li><b>Eco-friendly Materials:</b> Use of recycled ABS, responsibly sourced optics, and FSC-certified packaging.</li>
        <li><b>Green Manufacturing:</b> Adoption of energy-efficient and waste-minimizing processes.</li>
        <li><b>Circular Economy:</b> Designing products for longevity, repairability, and recyclability.</li>
        <li><b>Transparency:</b> Clear communication of our supply chain practices and environmental impact.</li>
        <li><b>Continuous Improvement:</b> Ongoing assessment and innovation to further reduce our ecological footprint.</li>
      </ul>
      <p className="mb-4">By integrating sustainability into every step—from design to disposal—iShine ensures that beauty and self-care go hand-in-hand with environmental responsibility.</p>
      <p className="mb-4 font-semibold">Choosing iShine means choosing a future where technology and nature thrive together.</p>
      <h3 className="font-semibold mb-2">References</h3>
      <ul className="list-disc pl-6 text-xs text-gray-600">
        <li>https://www.nature.com/articles/s41598-025-95682-8</li>
        <li>https://incit.org/en_us/thought-leadership/3-essential-strategies-to-boost-electronics-supply-chain-sustainability/</li>
        <li>https://techbullion.com/sustainable-value-chain-in-electronics-from-design-to-disposal/</li>
        <li>https://techbullion.com/green-electronics-navigating-the-sustainable-horizon-in-the-tech-industry/</li>
        <li>https://www.beeplastic.com/blogs/plastic-insights/the-strength-versatility-and-sustainability-of-abs-plastic</li>
        <li>https://www.beeplastic.com/blogs/plastic-insights/revolutionizing-the-electronics-industry-with-abs-plastic-sheets-1</li>
        <li>https://www.mondaymerch.com/us/resources/fabrics-and-materials/recycled-abs</li>
        <li>https://xetgo.com/journey-of-sustainable-paper-packaging-from-forest-to-shelf/</li>
        <li>https://genedge.org/resources-tools/green-and-sustainable-papermaking-manufacturing-strategies/</li>
        <li>http://genedge.org/resources-tools/green-and-sustainable-papermaking-manufacturing-strategies/</li>
        <li>https://www.rts.com/blog/the-complete-e-waste-recycling-process/</li>
        <li>https://reboottechrecycling.com/dont-use/benefits-of-e-waste-recycling-in-the-manufacturing-industry/</li>
        <li>https://earth.org/what-is-e-waste-recycling/</li>
        <li>https://www.skinloft.com/how-will-hair-removal-ipl-services-evolve-in-2025/</li>
        <li>https://www.iplglobal.com/docs/default-source/sustainability-library/ipl-sustainability-report-2022.pdf?sfvrsn=82255430_2</li>
        <li>https://www.pulselightclinic.co.uk/blog/how-laser-hair-removal-is-eco-friendly</li>
        <li>https://prism.sustainability-directory.com/term/intelligent-product-lifecycles/</li>
        <li>https://www.ipl.dk/en/quality-assurance</li>
        <li>https://www.linkedin.com/pulse/ipl-hair-removal-device-machines-market-size-mjdbf/</li>
        <li>https://www.iplglobal.com/docs/default-source/sustainability-library/ipl-esg-report-2023.pdf?sfvrsn=bfbe63e5_2</li>
      </ul>
    </section>
  </div>
);

export default SustainableManufacturing; 