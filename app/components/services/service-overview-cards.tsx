import Link from 'next/link'

interface ServiceCard {
  title: string
  description: string
  services: string[]
  link: string
  icon: string
}

const services: ServiceCard[] = [
  {
    title: 'Downsizer Real Estate Services',
    description: 'Help your clients navigate the transition from family homes to more suitable properties. We specialize in downsizer real estate in Las Vegas, understanding the financial implications, tax considerations, and lifestyle factors that impact your clients\' decisions.',
    services: [
      'Market timing analysis for optimal sale prices',
      'Downsizing property recommendations',
      'Tax-efficient real estate transition strategies',
      'Coordination with estate planning goals',
    ],
    link: '/services/empty-nester',
    icon: '🏠',
  },
  {
    title: '55+ Community Planning',
    description: 'Las Vegas offers exceptional 55+ active adult communities, and we help your clients find the perfect fit for their retirement lifestyle and financial situation. We understand the unique considerations of 55+ community living and how it impacts your clients\' financial plans.',
    services: [
      '55+ community market analysis in Las Vegas',
      'Financial impact assessment for retirement planning',
      'Community amenities and lifestyle evaluation',
      'Integration with retirement income strategies',
    ],
    link: '/services/55-plus-communities',
    icon: '👥',
  },
  {
    title: 'Wealth Transition Real Estate',
    description: 'Real estate is often the largest asset in your clients\' portfolios, and strategic real estate decisions are essential for successful wealth transitions. We work with you to ensure your clients\' real estate decisions support their estate planning, tax strategies, and wealth transfer goals.',
    services: [
      'Real estate portfolio analysis for wealth transfer',
      'Estate planning integration',
      'Tax-efficient property transition strategies',
      'Multi-generational property planning',
    ],
    link: '/services/wealth-transition',
    icon: '💼',
  },
]

/**
 * Improved Service Overview Cards
 * Modern 3-column grid with icons and better visual design
 */
export function ServiceOverviewCards() {
  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#111827' }}>
          Real Estate Services That Support Financial Planning
        </h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: '#111827' }}>
          Our real estate services are specifically designed to complement financial planning 
          practices. We understand that real estate decisions significantly impact your clients' 
          financial plans, tax situations, and wealth transition strategies. Every service we 
          offer is structured to align with financial planning objectives and support your 
          clients' comprehensive financial success.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="group p-8 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-700 transition-colors" style={{ color: '#111827' }}>
              {service.title}
            </h3>
            <p className="mb-6 leading-relaxed" style={{ color: '#1f2937' }}>
              {service.description}
            </p>
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3" style={{ color: '#111827' }}>Key Services:</h4>
              <ul className="list-disc pl-6 space-y-2 text-sm" style={{ color: '#1f2937' }}>
                {service.services.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <Link
              href={service.link}
              className="inline-flex items-center text-blue-700 hover:text-blue-800 font-semibold group-hover:underline transition-all"
            >
              Learn More
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

