import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import { serviceTiers, getServiceTier } from 'app/config/services'
import { ServiceTierCard } from 'app/components/services/service-tier-card'
import { FinancialCheckupCTA } from 'app/components/services/financial-checkup-cta'
import Link from 'next/link'

export async function generateStaticParams() {
  return serviceTiers.map((tier) => ({
    tier: tier.id,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { tier: string }
}): Promise<Metadata> {
  const tier = getServiceTier(params.tier)
  
  if (!tier) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: `${tier.name} - Real Estate Services for Financial Planners | ${businessConfig.name}`,
    description: `${tier.description} Real estate services designed to support financial planners and their clients in Las Vegas, Nevada.`,
    openGraph: {
      title: `${tier.name} - Real Estate Services for Financial Planners | ${businessConfig.name}`,
      description: tier.description,
      url: `${baseUrl}/services/${tier.id}`,
      siteName: businessConfig.name,
      locale: 'en_US',
      type: 'website',
    },
  }
}

export default function ServiceTierPage({ params }: { params: { tier: string } }) {
  const tier = getServiceTier(params.tier)

  if (!tier) {
    notFound()
  }

  return (
    <>
      {/* Breadcrumb - outside prose container */}
      <nav className="mb-8 text-sm text-gray-900" aria-label="Breadcrumb">
        <ol className="flex space-x-2 list-none">
          <li className="flex items-center"><Link href="/" className="hover:underline">Home</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center"><Link href="/services" className="hover:underline">Services</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center text-neutral-900 dark:text-neutral-100">{tier.name}</li>
        </ol>
      </nav>
      <article className="prose prose-lg max-w-none">

        {/* Hero Section */}
        <section className="mb-12 text-center">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
            {tier.tagline}
          </span>
          <h1 className="text-5xl font-bold mt-4 mb-6">{tier.name}: Real Estate Services for Financial Planners</h1>
          <p className="text-2xl text-gray-900 dark:text-gray-100 max-w-3xl mx-auto">
            {tier.description} Our {tier.name} service level provides comprehensive real estate 
            services specifically designed to support Certified Financial Planners and their 
            clients in Las Vegas, Nevada.
          </p>
          <p className="text-lg mt-4 italic text-gray-900 dark:text-gray-100">
            <strong>Best for:</strong> {tier.bestFor}
          </p>
        </section>

        {/* Service Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Comprehensive Real Estate Services for Financial Planning</h2>
          <p className="mb-4 text-lg text-gray-900 dark:text-gray-100">
            Our {tier.name} service level provides comprehensive real estate services that are 
            specifically designed to support financial planners and their clients. We understand 
            that real estate decisions significantly impact financial plans, tax strategies, and 
            wealth transition objectives, and our services ensure that every property recommendation 
            aligns with your financial planning recommendations.
          </p>
          <p className="mb-4 text-lg text-gray-900 dark:text-gray-100">
            Whether you're a Certified Financial Planner looking to offer real estate services to 
            your clients, or you're working with a financial planner and need expert real estate 
            guidance, our {tier.name} service level provides the comprehensive support you need to 
            achieve optimal outcomes.
          </p>
          <p className="mb-4 text-lg text-gray-900 dark:text-gray-100">
            Our real estate services include downsizer transitions, 55+ community planning, 
            wealth transition strategies, and comprehensive property analysis—all coordinated with 
            financial planning goals to ensure that real estate decisions support rather than 
            complicate financial success.
          </p>
        </section>

        {/* Why Choose Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Why Choose {tier.name} Real Estate Services?</h2>
          <p className="mb-6 text-lg text-gray-900 dark:text-gray-100">
            Our {tier.name} service level provides comprehensive real estate services that are 
            specifically designed to support financial planners and their clients. Every service 
            we offer is structured to complement financial planning strategies and ensure optimal 
            outcomes for your clients.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {tier.whyChoose.map((item, index) => (
              <div key={index} className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
                <div className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 text-2xl font-bold">{index + 1}.</span>
                  <p className="text-lg">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Real Estate Services Detail */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Real Estate Services Included in {tier.name}</h2>
          <p className="mb-6 text-lg text-gray-900 dark:text-gray-100">
            Our {tier.name} service level includes comprehensive real estate services designed 
            to support financial planners and their clients. These services ensure that real estate 
            decisions align with financial planning goals, tax strategies, and wealth transition 
            objectives.
          </p>
          
          <div className="space-y-8">
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Downsizer Real Estate Services</h3>
              <p className="mb-4 text-gray-800 dark:text-gray-200">
                Comprehensive support for downsizer real estate transitions in Las Vegas, 
                including market analysis, property recommendations, downsizing strategies, and 
                coordination with financial planning goals. We help your clients navigate the 
                transition from family homes to properties that better suit their current lifestyle 
                and financial situation.
              </p>
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Services Include:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
                <li>Market timing analysis for optimal sale prices</li>
                <li>Property valuation and market assessment</li>
                <li>Downsizing property recommendations</li>
                <li>Tax-efficient real estate transition strategies</li>
                <li>Coordination with estate planning goals</li>
                <li>Transaction management and support</li>
              </ul>
            </div>

            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">55+ Community Planning Services</h3>
              <p className="mb-4 text-gray-800 dark:text-gray-200">
                Expert guidance for clients considering 55+ active adult communities in Las Vegas, 
                including community analysis, financial impact assessments, and integration with 
                retirement planning strategies. We help your clients find communities that align 
                with their retirement goals and financial situation.
              </p>
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Services Include:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
                <li>55+ community market analysis in Las Vegas</li>
                <li>Financial impact assessment for retirement planning</li>
                <li>Community amenities and lifestyle evaluation</li>
                <li>Integration with retirement income strategies</li>
                <li>Long-term value and financial security analysis</li>
                <li>Transaction support and guidance</li>
              </ul>
            </div>

            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Wealth Transition Real Estate Planning</h3>
              <p className="mb-4 text-gray-800 dark:text-gray-200">
                Strategic real estate planning for wealth transitions, including property portfolio 
                analysis, estate planning integration, tax-efficient strategies, and 
                multi-generational planning support. We ensure that real estate decisions support 
                your clients' wealth transfer goals and financial objectives.
              </p>
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Services Include:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
                <li>Real estate portfolio analysis for wealth transfer</li>
                <li>Estate planning integration and coordination</li>
                <li>Tax-efficient property transition strategies</li>
                <li>Multi-generational property planning</li>
                <li>Wealth transfer optimization strategies</li>
                <li>Property transition management</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">What's Included in {tier.name}</h2>
          <p className="mb-6 text-lg text-gray-900 dark:text-gray-100">
            Our {tier.name} service level includes comprehensive real estate services and support 
            designed to meet the needs of financial planners and their clients. Every feature is 
            structured to complement financial planning strategies and ensure optimal outcomes.
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            {tier.features.map((feature, index) => (
              <li key={index} className="flex items-start p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg">
                <span className="text-blue-600 dark:text-blue-400 mr-3 font-bold">✓</span>
                <span className="text-lg text-gray-900 dark:text-gray-100">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* What to Expect */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">What to Expect with {tier.name}</h2>
          <p className="mb-6 text-lg text-gray-900 dark:text-gray-100">
            When you choose our {tier.name} service level, you can expect comprehensive real estate 
            services that are specifically designed to support financial planners and their clients. 
            Our process ensures that every real estate recommendation aligns with financial planning 
            goals and supports optimal client outcomes.
          </p>
          <div className="space-y-4">
            {tier.whatToExpect.map((item, index) => (
              <div key={index} className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-start">
                  <span className="font-bold text-blue-600 dark:text-blue-400 mr-4 text-xl">
                    {index + 1}.
                  </span>
                  <p className="text-lg">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Financial Planning Integration */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Financial Planning Integration</h2>
          <p className="mb-4 text-lg text-gray-900 dark:text-gray-100">
            Our {tier.name} service level is specifically designed to integrate seamlessly with 
            financial planning practices. We understand that real estate decisions must align 
            with financial plans, tax strategies, and wealth transition objectives, and our 
            services ensure that every recommendation supports your comprehensive planning goals.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">For Certified Financial Planners</h3>
              <p className="mb-4 text-gray-900 dark:text-gray-100">
                Our {tier.name} service level provides comprehensive real estate services that 
                seamlessly integrate with your financial planning practice. We work closely with 
                you to ensure that all real estate recommendations align with your financial 
                planning strategies, tax considerations, and client goals.
              </p>
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Integration Benefits:</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm text-gray-900 dark:text-gray-100">
                <li>Regular communication and collaboration</li>
                <li>Real estate recommendations aligned with financial plans</li>
                <li>Coordinated timing for optimal outcomes</li>
                <li>Shared client information portals</li>
                <li>Maintained client relationship with you as primary advisor</li>
              </ul>
            </div>
            <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">For Financial Planning Clients</h3>
              <p className="mb-4 text-gray-900 dark:text-gray-100">
                If you're working with a financial planner, our {tier.name} service level ensures 
                that all real estate recommendations are coordinated with your financial planner's 
                recommendations. This coordination ensures that property decisions support your 
                financial goals and maximize outcomes.
              </p>
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Client Benefits:</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm text-gray-900 dark:text-gray-100">
                <li>Real estate guidance aligned with financial plans</li>
                <li>Coordination with your financial planner</li>
                <li>Expert Las Vegas market knowledge</li>
                <li>Tax-efficient strategies</li>
                <li>Comprehensive property support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Fees Section */}
        <section className="mb-12 p-8 bg-neutral-50 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4" style={{ color: '#111827' }}>Transparent Fees and Pricing</h2>
          <p className="mb-4 text-lg" style={{ color: '#111827' }}>{tier.fees}</p>
          <p className="mb-4" style={{ color: '#111827' }}>
            All fees are transparent and discussed upfront. No hidden costs, no commissions. 
            Our {tier.name} service level provides comprehensive real estate services at a 
            transparent fee that fits your practice needs and client situations.
          </p>
          <p className="mb-4 text-gray-900 dark:text-gray-100">
            We understand that financial planners need predictable, transparent pricing that 
            allows them to provide comprehensive real estate services to their clients without 
            unexpected costs or complications. Our fee structure is designed to support your 
            practice while ensuring that your clients receive expert real estate guidance.
          </p>
          <h3 className="text-xl font-semibold mb-3">What's Included in the Fee:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Comprehensive real estate services as outlined</li>
            <li>Regular communication and collaboration</li>
            <li>Access to educational resources and materials</li>
            <li>Ongoing support and consultation</li>
            <li>Coordination with financial planning strategies</li>
          </ul>
        </section>

        {/* Financial Checkup CTA */}
        <FinancialCheckupCTA />

        {/* Service Tier Card */}
        <div className="mb-12">
          <ServiceTierCard tier={tier} featured={true} />
        </div>

        {/* Other Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Explore Other Service Levels</h2>
          <p className="mb-6 text-lg">
            If {tier.name} isn't the right fit for your needs, explore our other service levels 
            designed to support financial planners and their clients with real estate services.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {serviceTiers
              .filter((t) => t.id !== tier.id)
              .slice(0, 2)
              .map((otherTier) => (
                <Link
                  key={otherTier.id}
                  href={`/services/${otherTier.id}`}
                  className="p-6 border-2 border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2">{otherTier.name}</h3>
                  <p className="text-gray-900 mb-4">
                    {otherTier.description}
                  </p>
                  <span className="text-blue-600 dark:text-blue-400 hover:underline">
                    Learn More →
                  </span>
                </Link>
              ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Ready to Get Started with {tier.name}?</h2>
          <p className="mb-6 text-lg text-gray-800 dark:text-gray-200">
            Contact us today to learn more about our {tier.name} service level and how our 
            comprehensive real estate services can support your financial planning practice or 
            assist with your real estate goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              Schedule Your Consultation
            </Link>
            <Link
              href="/cfp-partners"
              className="inline-block px-8 py-4 border-2 border-blue-600 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/40 transition-colors font-semibold text-lg"
            >
              Learn About CFP Partnerships
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}
