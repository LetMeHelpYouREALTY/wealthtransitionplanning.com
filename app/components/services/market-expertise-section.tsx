/**
 * Improved Market Expertise Section
 * Enhanced 2-column cards with better visual design
 */
export function MarketExpertiseSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#111827' }}>
          Las Vegas Real Estate Market Expertise
        </h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: '#111827' }}>
          Our team specializes in the Las Vegas real estate market, with deep expertise in 
          downsizer transitions, 55+ communities, and wealth transition properties. We 
          understand the unique characteristics of the Las Vegas market, including neighborhood 
          trends, property values, and market timing factors that impact your clients' financial 
          decisions.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 bg-gradient-to-br from-neutral-50 to-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold style={{ color: '#111827' }}">Market Knowledge</h3>
          </div>
          <p className="mb-6 style={{ color: '#111827' }} leading-relaxed">
            Our specialized knowledge of the Las Vegas real estate market allows us to provide 
            your clients with accurate market analysis, informed property recommendations, and 
            strategic timing advice that supports their financial goals and your planning 
            recommendations.
          </p>
          <div>
            <h4 className="text-lg font-semibold mb-3 style={{ color: '#111827' }}">Market Expertise Includes:</h4>
            <ul className="list-disc pl-6 space-y-2 style={{ color: '#111827' }}">
              <li>Las Vegas neighborhood trends and values</li>
              <li>Downsizer property market analysis</li>
              <li>55+ community market knowledge</li>
              <li>Wealth transition property strategies</li>
              <li>Market timing for optimal financial outcomes</li>
            </ul>
          </div>
        </div>

        <div className="p-8 bg-gradient-to-br from-neutral-50 to-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold style={{ color: '#111827' }}">Service Area Coverage</h3>
          </div>
          <p className="mb-6 style={{ color: '#111827' }} leading-relaxed">
            We serve clients throughout the Las Vegas metropolitan area, including Las Vegas, 
            Henderson, Summerlin, and North Las Vegas. Our comprehensive market knowledge 
            across these areas ensures that your clients receive expert guidance regardless 
            of their location preferences.
          </p>
          <div>
            <h4 className="text-lg font-semibold mb-3 style={{ color: '#111827' }}">Primary Service Areas:</h4>
            <ul className="list-disc pl-6 space-y-2 style={{ color: '#111827' }}">
              <li>Las Vegas - Comprehensive market coverage</li>
              <li>Henderson - 55+ community expertise</li>
              <li>Summerlin - Luxury property knowledge</li>
              <li>North Las Vegas - Value property options</li>
              <li>Surrounding areas - Extended service coverage</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

