import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import { MarketExpertiseSection } from 'app/components/services/market-expertise-section'
import { ServicesCTA } from 'app/components/services/services-cta'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `Las Vegas Real Estate Market Expertise | ${businessConfig.name}`,
  description: 'Expert knowledge of the Las Vegas real estate market: downsizer transitions, 55+ communities, wealth transition properties. Comprehensive market analysis and service area coverage.',
  keywords: [
    'Las Vegas real estate market',
    'downsizer real estate Las Vegas',
    '55+ communities Las Vegas',
    'Las Vegas neighborhood trends',
    'Henderson real estate',
    'Summerlin real estate',
    'North Las Vegas real estate',
    'Las Vegas property values',
  ],
  openGraph: {
    title: `Las Vegas Real Estate Market Expertise | ${businessConfig.name}`,
    description: 'Expert knowledge of the Las Vegas real estate market for downsizer transitions, 55+ communities, and wealth transition properties.',
    url: `${baseUrl}/services/market-expertise`,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
  },
}

export default function MarketExpertisePage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-900" aria-label="Breadcrumb">
        <ol className="flex space-x-2 list-none">
          <li className="flex items-center"><Link href="/" className="hover:underline">Home</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center"><Link href="/services" className="hover:underline">Services</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center text-gray-900">Market Expertise</li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none">
        <MarketExpertiseSection />
        <ServicesCTA />
      </article>
    </>
  )
}

