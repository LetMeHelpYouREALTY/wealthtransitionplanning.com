import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import { ContactButtons } from 'app/components/google/contact-buttons'
import { FinancialCheckupCTA } from 'app/components/services/financial-checkup-cta'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `Areas We Serve | ${businessConfig.serviceArea.city}, ${businessConfig.serviceArea.state} | ${businessConfig.name}`,
  description: `${businessConfig.name} serves clients throughout the Las Vegas metropolitan area, including Henderson, Summerlin, North Las Vegas, and surrounding communities. Expert wealth transition planning and real estate services.`,
  keywords: [
    'wealth transition planning Las Vegas',
    'financial planner Henderson',
    'real estate services Summerlin',
    '55+ communities North Las Vegas',
    'downsizer real estate Las Vegas area',
    'financial planning services Las Vegas metro',
  ],
  openGraph: {
    title: `Areas We Serve | ${businessConfig.serviceArea.city}, ${businessConfig.serviceArea.state}`,
    description: `${businessConfig.name} serves clients throughout the Las Vegas metropolitan area with expert wealth transition planning services.`,
    url: `${baseUrl}/areas-served`,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
  },
}

const areas = [
  {
    name: 'Las Vegas',
    description: 'Serving clients throughout Las Vegas with comprehensive wealth transition planning and real estate services.',
    highlights: ['Downtown Las Vegas', 'Las Vegas Strip Area', 'Residential Communities'],
  },
  {
    name: 'Henderson',
    description: 'Expert services for Henderson residents navigating downsizer transitions and 55+ community planning.',
    highlights: ['Green Valley', 'Anthem', 'MacDonald Ranch'],
  },
  {
    name: 'Summerlin',
    description: 'Supporting Summerlin families with wealth transition planning and luxury real estate services.',
    highlights: ['The Lakes', 'Summerlin South', 'Red Rock Country Club'],
  },
  {
    name: 'North Las Vegas',
    description: 'Comprehensive real estate and financial planning services for North Las Vegas residents.',
    highlights: ['Aliante', 'Centennial Hills', 'Skye Canyon'],
  },
]

export default function AreasServedPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#111827' }}>
          Areas We Serve
        </h1>
        <p className="text-xl max-w-3xl mx-auto" style={{ color: '#111827' }}>
          {businessConfig.name} proudly serves clients throughout the {businessConfig.serviceArea.city} metropolitan area and surrounding communities
        </p>
      </div>

      {/* Primary Service Area */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#111827' }}>
            Primary Service Area
          </h2>
          <p className="text-lg mb-2" style={{ color: '#1f2937' }}>
            <strong>{businessConfig.address.city}, {businessConfig.address.state}</strong>
          </p>
          <p style={{ color: '#1f2937' }}>
            {businessConfig.address.full}
          </p>
        </div>
      </div>

      {/* Areas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {areas.map((area, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#111827' }}>
              {area.name}
            </h3>
            <p className="mb-4 leading-relaxed" style={{ color: '#111827' }}>
              {area.description}
            </p>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: '#111827' }}>Key Areas:</h4>
              <ul className="list-disc pl-6 space-y-1" style={{ color: '#111827' }}>
                {area.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Services by Area */}
      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
          Services Available Throughout Our Service Area
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#2563eb] text-white flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Downsizer Services</h3>
            <p className="text-gray-900 dark:text-gray-100">
              Help downsizing from family homes to more manageable properties
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#2563eb] text-white flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">55+ Community Planning</h3>
            <p className="text-gray-900 dark:text-gray-100">
              Expert guidance for active adult community transitions
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#2563eb] text-white flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Wealth Transition</h3>
            <p className="text-gray-900 dark:text-gray-100">
              Strategic real estate planning aligned with financial goals
            </p>
          </div>
        </div>
      </div>

      {/* CFP Partnership Note */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
          Working with Financial Planners
        </h2>
        <p className="text-gray-800 dark:text-gray-200 mb-6 text-center leading-relaxed">
          We work closely with CERTIFIED Financial Planners throughout our service area to provide integrated wealth transition planning. 
          If you're a CFP serving clients in the Las Vegas area, learn more about our partnership program.
        </p>
        <div className="text-center">
          <Link
            href="/cfp-partners"
            className="inline-block bg-[#2563eb] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors"
          >
            Learn About CFP Partnerships
          </Link>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-gray-900 dark:text-gray-100 mb-6">
          Whether you're in Las Vegas, Henderson, Summerlin, or another area in our service region, 
          we're here to help with your wealth transition planning needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <FinancialCheckupCTA />
          <ContactButtons />
        </div>
      </div>
    </div>
  )
}

