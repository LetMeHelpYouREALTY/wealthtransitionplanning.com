import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import { serviceTiers } from 'app/config/services'
import { FinancialCheckupCTA } from 'app/components/services/financial-checkup-cta'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `Pricing & Service Tiers | ${businessConfig.name}`,
  description: `Transparent pricing and service tier information for ${businessConfig.name}'s wealth transition planning services. Learn about our different service levels and what's included.`,
  keywords: [
    'wealth transition planning pricing',
    'real estate planning fees',
    'financial planner services cost',
    'downsizer real estate pricing',
    '55+ community planning fees',
  ],
  openGraph: {
    title: `Pricing & Service Tiers | ${businessConfig.name}`,
    description: `Transparent pricing and service tier information for ${businessConfig.name}'s wealth transition planning services.`,
    url: `${baseUrl}/pricing`,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
  },
}

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#111827' }}>
          Pricing & Service Tiers
        </h1>
        <p className="text-xl max-w-3xl mx-auto" style={{ color: '#111827' }}>
          Transparent, tiered service options designed to meet your specific wealth transition planning needs
        </p>
      </div>

      {/* Pricing Philosophy */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: '#111827' }}>
          Our Pricing Philosophy
        </h2>
        <p className="mb-4 leading-relaxed text-center max-w-3xl mx-auto" style={{ color: '#1f2937' }}>
          We believe in transparent, value-based pricing. Our service tiers are designed to provide options 
          that align with your specific needs and budget. All pricing is discussed during your free initial consultation, 
          and we'll work with you to determine the best service level for your situation.
        </p>
        <div className="mt-6 text-center">
          <FinancialCheckupCTA />
        </div>
      </div>

      {/* Service Tiers */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#111827' }}>
          Service Tiers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceTiers.map((tier, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#111827' }}>
                {tier.name}
              </h3>
              <p className="mb-4 leading-relaxed" style={{ color: '#111827' }}>
                {tier.description}
              </p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2" style={{ color: '#111827' }}>Includes:</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm" style={{ color: '#111827' }}>
                  {tier.features?.slice(0, 5).map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                  {tier.features && tier.features.length > 5 && (
                    <li className="italic" style={{ color: '#111827' }}>...and more</li>
                  )}
                </ul>
              </div>
              <Link
                href={`/services/${tier.id}`}
                className="inline-block w-full text-center bg-[#2563eb] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* What's Included */}
      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#111827' }}>
          What's Typically Included
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#111827' }}>Core Services</h3>
            <ul className="list-disc pl-6 space-y-2" style={{ color: '#111827' }}>
              <li>Initial consultation and assessment</li>
              <li>Customized transition strategy</li>
              <li>Property evaluation and recommendations</li>
              <li>Market analysis and timing guidance</li>
              <li>Coordination with your financial planner</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#111827' }}>Additional Support</h3>
            <ul className="list-disc pl-6 space-y-2" style={{ color: '#111827' }}>
              <li>Ongoing communication and updates</li>
              <li>Transaction management and coordination</li>
              <li>Post-transition follow-up</li>
              <li>Access to resources and guides</li>
              <li>Long-term relationship management</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Pricing Transparency */}
      <div className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: '#111827' }}>
          Transparent Pricing
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="mb-4 leading-relaxed" style={{ color: '#111827' }}>
            We believe in transparent, upfront pricing. During your free initial consultation, we'll:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6" style={{ color: '#111827' }}>
            <li>Discuss your specific needs and goals</li>
            <li>Review our service tier options</li>
            <li>Provide clear pricing information</li>
            <li>Answer any questions about fees and services</li>
            <li>Help you choose the best service level for your situation</li>
          </ul>
          <p className="leading-relaxed" style={{ color: '#111827' }}>
            <strong>No hidden fees. No surprises.</strong> We're committed to providing value and transparency 
            in everything we do.
          </p>
        </div>
      </div>

      {/* CFP Partnership Note */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: '#111827' }}>
          For Financial Planners
        </h2>
        <p className="mb-6 text-center leading-relaxed" style={{ color: '#1f2937' }}>
          Our CFP Partnership Program offers special pricing and service arrangements for CERTIFIED Financial Planners. 
          Learn how partnering with us can benefit your practice and your clients.
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

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#111827' }}>
          Ready to Discuss Your Options?
        </h2>
        <p className="mb-6" style={{ color: '#111827' }}>
          Schedule a free consultation to learn more about our service tiers and pricing options.
        </p>
        <FinancialCheckupCTA />
      </div>
    </div>
  )
}

