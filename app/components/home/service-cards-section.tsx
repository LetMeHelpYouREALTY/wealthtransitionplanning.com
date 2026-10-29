import Link from 'next/link'

/**
 * Improved Homepage Service Cards Section
 * Modern 3-column grid with icons and hover effects
 */
export function ServiceCardsSection() {
  const services = [
    {
      title: 'Downsizer Real Estate Services',
      description: 'Help your clients navigate the transition from family homes to more suitable properties. We specialize in downsizer real estate in Las Vegas, understanding the financial implications, tax considerations, and lifestyle factors that impact your clients\' decisions.',
      features: [
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
      features: [
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
      features: [
        'Real estate portfolio analysis for wealth transfer',
        'Estate planning integration',
        'Tax-efficient property transition strategies',
        'Multi-generational property planning',
      ],
      link: '/services/wealth-transition',
      icon: '💼',
    },
  ]

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          How We Support Financial Planners and Their Clients
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-gray-900 mb-6 leading-relaxed">
            As a Certified Financial Planner, you understand that real estate decisions are 
            integral to your clients' overall financial picture. Whether your clients are 
            downsizers looking to downsize, retirees considering 55+ communities, or 
            families planning wealth transitions, real estate plays a crucial role in their 
            financial success. That's where we come in.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="group p-8 bg-blue-50 rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-700 transition-colors">
              {service.title}
            </h3>
            <p className="mb-6 text-gray-900 leading-relaxed">
              {service.description}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-900 mb-6">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <Link
              href={service.link}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:underline transition-all"
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

      <div className="text-center">
        <Link
          href="/services"
          className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          View All Real Estate Services
        </Link>
      </div>
    </section>
  )
}

