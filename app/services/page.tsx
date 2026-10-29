import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import { serviceTiers } from 'app/config/services'
import { ServiceTierCard } from 'app/components/services/service-tier-card'
import { FinancialCheckupCTA } from 'app/components/services/financial-checkup-cta'
import { PhilosophySection } from 'app/components/philosophy-section'
import { Certifications } from 'app/components/certifications'
import {
  ProfessionalServiceSchema,
  BreadcrumbSchema,
  SpeakableSchema,
} from 'app/components/google'
import { ServicesHero } from 'app/components/services/services-hero'
import { ServiceOverviewCards } from 'app/components/services/service-overview-cards'
import { HowWeWorkSection } from 'app/components/services/how-we-work-section'
import { MarketExpertiseSection } from 'app/components/services/market-expertise-section'
import { ServicesCTA } from 'app/components/services/services-cta'
import { ServicesFAQ } from 'app/components/services/services-faq'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `Real Estate Services for Financial Planners | Realtor Services for CFA Clients | ${businessConfig.name}`,
  description: 'Professional realtor services for financial planners and their clients in Las Vegas: buyer representation, seller representation, investment properties, market analysis, empty nester transitions, and 55+ community planning.',
  keywords: [
    'realtor for financial planners',
    'real estate services for financial advisors',
    'real estate agent for CFA clients',
    'empty nester real estate Las Vegas',
    '55+ communities Las Vegas',
    'luxury home realtor Las Vegas',
    'investment property realtor',
    'buyer representation Las Vegas',
    'seller representation Las Vegas',
    'CFA real estate partner',
  ],
  openGraph: {
    title: `Real Estate Services for Financial Planners | Realtor Services for CFA Clients | ${businessConfig.name}`,
    description: 'Professional realtor services designed to support financial planners and their clients in Las Vegas, Nevada.',
    url: `${baseUrl}/services`,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
  },
}

export default function ServicesPage() {
  // 2025: Breadcrumb items for schema
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ]

  return (
    <>
      {/* 2025: Enhanced Schema Markup */}
      <ProfessionalServiceSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <SpeakableSchema
        pageUrl="/services"
        cssSelectors={['h1', '.services-summary', '.service-card h3']}
      />
      
      {/* Breadcrumb - outside prose container */}
      <nav className="mb-8 text-sm text-gray-900" aria-label="Breadcrumb">
        <ol className="flex space-x-2 list-none">
          <li className="flex items-center"><Link href="/" className="hover:underline">Home</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center text-neutral-900 dark:text-neutral-100">Services</li>
        </ol>
      </nav>
      <article className="prose prose-lg max-w-none">

        {/* Improved Hero Section */}
        <ServicesHero />

        {/* Financial Checkup CTA */}
        <FinancialCheckupCTA />

        {/* Improved Service Overview Cards */}
        <ServiceOverviewCards />

        {/* Service Tiers */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Choose Your Real Estate Service Package</h2>
            <p className="text-xl md:text-2xl text-gray-900 max-w-3xl mx-auto leading-relaxed font-medium">
              Professional realtor services designed specifically for financial planners and their clients. 
              Whether your clients need buyer representation, seller representation, investment property expertise, 
              or market analysis, we have the right real estate service package to support your financial planning practice.
            </p>
          </div>

          <div className="space-y-12">
            {serviceTiers.map((tier, index) => (
              <div key={tier.id}>
                <ServiceTierCard tier={tier} featured={index === 0} />
              </div>
            ))}
          </div>
        </section>

        {/* How We Work - Link to dedicated page */}
        <section className="mb-16 p-12 bg-blue-50 rounded-xl border border-blue-200">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#111827' }}>
              How We Work With Financial Planners
            </h2>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8" style={{ color: '#1f2937' }}>
              Our real estate services are designed to seamlessly integrate with your financial 
              planning practice. We understand that you need real estate partners who can provide 
              specialized expertise while maintaining alignment with your financial planning 
              strategies and client relationships.
            </p>
            <Link
              href="/services/how-we-work"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              Learn More About How We Work →
            </Link>
          </div>
        </section>

        {/* Market Expertise - Link to dedicated page */}
        <section className="mb-16 p-12 bg-neutral-50 rounded-xl border border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#111827' }}>
              Las Vegas Real Estate Market Expertise
            </h2>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8" style={{ color: '#111827' }}>
              Our team specializes in the Las Vegas real estate market, with deep expertise in 
              empty nester transitions, 55+ communities, and wealth transition properties. We 
              understand the unique characteristics of the Las Vegas market, including neighborhood 
              trends, property values, and market timing factors.
            </p>
            <Link
              href="/services/market-expertise"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              Explore Our Market Expertise →
            </Link>
          </div>
        </section>

        {/* Philosophy Section */}
        <PhilosophySection />

        {/* Certifications */}
        <Certifications />

        {/* Improved FAQ Section with Accordion */}
        <ServicesFAQ />

        {/* Improved CTA Section */}
        <ServicesCTA />
      </article>
    </>
  )
}
