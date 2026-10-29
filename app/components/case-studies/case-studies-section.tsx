import { CaseStudyCard } from './case-study-card'

const caseStudies = [
  {
    title: 'Empty Nester Transition for High-Net-Worth Client',
    clientType: 'CFP Client Success',
    challenge:
      'A CFP client needed to downsize from a 4,500 sq ft family home while maximizing equity for retirement planning. The client had emotional attachment and needed guidance on timing and tax implications.',
    solution:
      'We coordinated with the CFP to analyze the client\'s financial plan, identified optimal timing to align with tax strategies, and provided comprehensive market analysis. We staged the property professionally and positioned it for maximum value.',
    result:
      'Sold 15% above market average, completed transaction within 60 days, and client successfully transitioned to a 55+ community with $200K additional equity for retirement portfolio.',
    slug: 'empty-nester-high-net-worth',
  },
  {
    title: 'Investment Property Portfolio Optimization',
    clientType: 'CFP Partnership',
    challenge:
      'A CFP needed to help their client optimize a 3-property rental portfolio. The properties were underperforming and the client wanted to consolidate for better cash flow and estate planning.',
    solution:
      'We conducted comprehensive property analysis, identified the best property to retain, and developed a strategic sales plan for the other two. Coordinated with the CFP on 1031 exchange opportunities and tax-efficient timing.',
    result:
      'Client reduced portfolio from 3 to 1 high-performing property, increased monthly cash flow by 40%, and freed up $350K for diversified investments recommended by their CFP.',
    slug: 'investment-portfolio-optimization',
  },
  {
    title: '55+ Community Planning for Retiring Couple',
    clientType: 'CFP Client Success',
    challenge:
      'A retiring couple working with a CFP needed to find the right 55+ community that aligned with their retirement income plan, healthcare needs, and lifestyle goals. They were overwhelmed by options.',
    solution:
      'We analyzed their financial plan with their CFP, identified communities that fit their budget and lifestyle, and provided detailed financial impact analysis for each option including HOA fees, amenities, and long-term costs.',
    result:
      'Found perfect community match, negotiated favorable terms, and client moved in 90 days. The transition aligned perfectly with their retirement income strategy and provided peace of mind.',
    slug: '55-plus-community-retirement',
  },
]

/**
 * Case Studies Section Component
 * Showcases real-world success stories for CFP audience
 * Builds credibility and demonstrates value
 */
export function CaseStudiesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Results for CFP Clients
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            See how we've helped financial planners and their clients achieve successful real estate 
            transitions that support their comprehensive financial plans.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={study.slug}
              caseStudy={study}
              featured={index === 0}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">
            Want to see how we can support your clients?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  )
}







