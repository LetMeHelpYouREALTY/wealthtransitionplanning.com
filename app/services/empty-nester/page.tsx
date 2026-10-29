import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import { TargetFAQ, targetFAQQuestions } from 'app/components/faq-target-questions'
import { FinancialCheckupCTA } from 'app/components/services/financial-checkup-cta'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Empty Nester Real Estate Services Las Vegas | Financial Planner Support | Wealth Transition Planning',
  description: 'Expert empty nester real estate services in Las Vegas for CERTIFIED Financial Planner clients. Specialized downsizing, market timing, and tax-efficient transitions coordinated with financial planning goals.',
  keywords: [
    'empty nester real estate Las Vegas',
    'downsizing real estate Las Vegas',
    'empty nester real estate services',
    'financial planner empty nester support',
    'CFP empty nester transitions',
    'Las Vegas downsizing services',
    'empty nester property transitions',
    'real estate for empty nesters',
    'downsizing strategies Las Vegas',
    'empty nester financial planning',
  ],
  openGraph: {
    title: 'Empty Nester Real Estate Services Las Vegas | Financial Planner Support',
    description: 'Expert empty nester real estate services in Las Vegas coordinated with financial planning goals.',
    url: `${baseUrl}/services/empty-nester`,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
  },
}

export default function EmptyNesterServicesPage() {
  return (
    <>
      {/* Breadcrumb - outside prose container */}
      <nav className="mb-8 text-sm text-gray-900" aria-label="Breadcrumb">
        <ol className="flex space-x-2 list-none">
          <li className="flex items-center"><Link href="/" className="hover:underline">Home</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center"><Link href="/services" className="hover:underline">Services</Link></li>
          <li className="flex items-center">/</li>
            <li className="text-neutral-900 dark:text-neutral-100">Empty Nester Services</li>
          </ol>
        </nav>
      <article className="prose prose-lg max-w-none">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-6">Empty Nester Real Estate Services in Las Vegas</h1>
          <p className="text-2xl text-gray-900 mb-8 max-w-3xl mx-auto">
            Expert real estate guidance for empty nesters transitioning from family homes to properties 
            that better suit their current lifestyle and financial situation. Coordinated with your 
            financial planning goals.
          </p>
        </section>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Comprehensive Empty Nester Real Estate Services</h2>
          <p className="text-lg mb-6" style={{ color: '#111827' }}>
            Empty nesters face unique real estate challenges that require specialized expertise. When 
            your clients' children have moved out, they often need to transition from large family 
            homes to properties that better suit their current lifestyle and financial situation. 
            This transition involves complex considerations that impact their financial plans, tax 
            situations, and retirement strategies.
          </p>
          <p className="text-lg mb-6" style={{ color: '#111827' }}>
            Our empty nester real estate services in Las Vegas help your clients navigate this 
            transition successfully. We provide comprehensive market analysis to determine optimal 
            timing for selling their current property, identify suitable downsizing options that 
            align with their lifestyle goals, and coordinate the transaction to minimize tax 
            implications and maximize financial outcomes.
          </p>
          <p className="text-lg mb-6" style={{ color: '#111827' }}>
            We work closely with you to understand your clients' financial plans, retirement 
            goals, and estate planning objectives. This collaboration ensures that every real 
            estate recommendation supports their broader financial strategy and helps them 
            achieve their long-term goals.
          </p>
        </section>

        {/* Services Detail */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Empty Nester Services Include</h2>
          
          <div className="space-y-8">
            <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <h3 className="text-3xl font-semibold mb-4" style={{ color: '#111827' }}>Market Timing Analysis</h3>
              <p className="text-lg mb-4 style={{ color: '#1f2937' }}">
                We analyze current Las Vegas market conditions to help your clients sell at optimal 
                times, maximizing their proceeds and supporting their financial goals. Our market 
                timing analysis considers seasonal trends, inventory levels, interest rates, and 
                local economic factors that impact property values.
              </p>
              <p className="mb-4 style={{ color: '#1f2937' }}">
                This analysis helps your clients understand when to list their property for maximum 
                return, how market conditions affect their sale timeline, and what to expect during 
                the selling process. We coordinate this timing with your financial planning 
                recommendations to ensure optimal financial outcomes.
              </p>
              <h4 className="text-xl font-semibold mb-3 style={{ color: '#111827' }}">Market Analysis Includes:</h4>
              <ul className="list-disc pl-6 space-y-2 style={{ color: '#1f2937' }}">
                <li>Current Las Vegas market conditions and trends</li>
                <li>Neighborhood-specific property value analysis</li>
                <li>Optimal listing timing recommendations</li>
                <li>Competitive market analysis</li>
                <li>Price strategy development</li>
                <li>Market timing coordination with financial plans</li>
              </ul>
            </div>

            <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <h3 className="text-3xl font-semibold mb-4" style={{ color: '#111827' }}>Property Valuation</h3>
              <p className="text-lg mb-4 style={{ color: '#1f2937' }}">
                Accurate property valuations ensure your clients understand their home's true market 
                value and can make informed financial planning decisions. We provide comprehensive 
                property valuations that consider current market conditions, comparable sales, 
                property condition, and neighborhood trends.
              </p>
              <p className="mb-4 style={{ color: '#1f2937' }}">
                This valuation process helps your clients understand their home equity, potential 
                sale proceeds, and how these proceeds fit into their financial planning strategies. 
                We coordinate valuations with your financial planning to ensure accurate projections 
                for retirement planning, tax strategies, and wealth transition goals.
              </p>
              <h4 className="text-xl font-semibold mb-3">Valuation Services Include:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Comprehensive property market analysis</li>
                <li>Comparative market analysis (CMA)</li>
                <li>Property condition assessment</li>
                <li>Neighborhood trend analysis</li>
                <li>Equity and proceeds projections</li>
                <li>Financial planning integration</li>
              </ul>
            </div>

            <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <h3 className="text-3xl font-semibold mb-4" style={{ color: '#111827' }}>Downsizing Recommendations</h3>
              <p className="text-lg mb-4 style={{ color: '#1f2937' }}">
                We identify properties that match your clients' lifestyle needs while supporting 
                their financial objectives and retirement planning strategies. Our downsizing 
                recommendations consider property size, maintenance requirements, location 
                preferences, and financial implications.
              </p>
              <p className="mb-4 style={{ color: '#1f2937' }}">
                This process helps your clients find properties that reduce maintenance burdens, 
                lower ongoing costs, and better match their current lifestyle while supporting 
                their financial goals. We coordinate property recommendations with your financial 
                planning to ensure that downsizing decisions align with retirement income, tax 
                strategies, and estate planning objectives.
              </p>
              <h4 className="text-xl font-semibold mb-3">Downsizing Services Include:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Lifestyle needs assessment</li>
                <li>Property size and feature recommendations</li>
                <li>Location and neighborhood analysis</li>
                <li>Maintenance and cost considerations</li>
                <li>Financial impact assessment</li>
                <li>Retirement planning coordination</li>
              </ul>
            </div>

            <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <h3 className="text-3xl font-semibold mb-4" style={{ color: '#111827' }}>Tax Strategy Coordination</h3>
              <p className="text-lg mb-4 style={{ color: '#1f2937' }}">
                We coordinate with you to ensure real estate transactions are structured to minimize 
                tax implications and maximize after-tax proceeds for your clients. Our tax strategy 
                coordination considers capital gains exclusions, timing strategies, and transaction 
                structuring that supports your tax planning recommendations.
              </p>
              <p className="mb-4 style={{ color: '#1f2937' }}">
                This coordination ensures that your clients take advantage of available tax benefits, 
                structure transactions optimally, and maximize after-tax proceeds that support their 
                financial planning goals. We work closely with you to understand tax implications and 
                ensure that real estate decisions complement your tax strategies.
              </p>
              <h4 className="text-xl font-semibold mb-3">Tax Coordination Includes:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Capital gains exclusion analysis</li>
                <li>Transaction timing for tax optimization</li>
                <li>Tax-efficient transaction structuring</li>
                <li>Coordination with tax planning strategies</li>
                <li>After-tax proceeds maximization</li>
                <li>Estate planning tax considerations</li>
              </ul>
            </div>

            <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <h3 className="text-3xl font-semibold mb-4" style={{ color: '#111827' }}>Transaction Management</h3>
              <p className="text-lg mb-4 style={{ color: '#1f2937' }}">
                We handle all aspects of the real estate transaction, allowing you to focus on financial 
                planning while ensuring smooth, efficient processes for your clients. Our transaction 
                management includes listing coordination, buyer negotiations, inspection management, 
                and closing coordination.
              </p>
              <p className="mb-4 style={{ color: '#1f2937' }}">
                This comprehensive management ensures that your clients' transactions proceed smoothly, 
                deadlines are met, and all parties are coordinated effectively. We keep you informed 
                throughout the process, ensuring that transaction details align with your financial 
                planning recommendations and client goals.
              </p>
              <h4 className="text-xl font-semibold mb-3 style={{ color: '#111827' }}">Transaction Services Include:</h4>
              <ul className="list-disc pl-6 space-y-2 style={{ color: '#1f2937' }}">
                <li>Listing preparation and coordination</li>
                <li>Buyer negotiation and communication</li>
                <li>Inspection and repair coordination</li>
                <li>Closing process management</li>
                <li>Documentation and compliance</li>
                <li>Financial planning coordination</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Financial Planning Integration */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Financial Planning Integration</h2>
          <p className="text-lg mb-6" style={{ color: '#111827' }}>
            Our empty nester real estate services are specifically designed to integrate seamlessly 
            with financial planning practices. We understand that empty nester transitions impact 
            retirement planning, tax strategies, estate planning, and overall financial security, 
            and our services ensure that every recommendation supports your comprehensive planning goals.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">For Certified Financial Planners</h3>
              <p className="mb-4">
                We work closely with you to understand your clients' financial plans, retirement 
                goals, and estate planning objectives. This collaboration ensures that every real 
                estate recommendation supports their broader financial strategy and helps them 
                achieve their long-term goals.
              </p>
              <h4 className="text-lg font-semibold mb-2">Integration Benefits:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Regular communication on client cases</li>
                <li>Real estate recommendations aligned with financial plans</li>
                <li>Coordinated timing for optimal outcomes</li>
                <li>Tax strategy coordination</li>
                <li>Estate planning integration</li>
              </ul>
            </div>
            <div className="p-8 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 style={{ color: '#111827' }}">For Empty Nester Clients</h3>
              <p className="mb-4 style={{ color: '#111827' }}">
                If you're an empty nester working with a financial planner, our services ensure 
                that all real estate recommendations are coordinated with your financial planner's 
                recommendations. This coordination ensures that your property transition supports 
                your financial goals and maximizes outcomes.
              </p>
              <h4 className="text-lg font-semibold mb-2 style={{ color: '#111827' }}">Client Benefits:</h4>
              <ul className="list-disc pl-6 space-y-2 style={{ color: '#111827' }}">
                <li>Real estate guidance aligned with financial plans</li>
                <li>Coordination with your financial planner</li>
                <li>Expert Las Vegas market knowledge</li>
                <li>Tax-efficient transition strategies</li>
                <li>Comprehensive transaction support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions About Empty Nester Real Estate</h2>
          <div className="max-w-4xl mx-auto">
            <TargetFAQ category="emptyNester" />
            <div className="space-y-6 mt-8">
              {targetFAQQuestions.emptyNester.map((faq, index) => (
                <div key={index} className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">{faq.question}</h3>
                  <p className="text-gray-900 dark:text-gray-200">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Checkup CTA */}
        <FinancialCheckupCTA />

        {/* CTA Section */}
        <section className="mb-16 p-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl text-center">
          <h2 className="text-3xl font-semibold mb-4" style={{ color: '#111827' }}>Ready to Help Your Empty Nester Clients?</h2>
          <p className="mb-6 text-lg max-w-2xl mx-auto style={{ color: '#1f2937' }}">
            Contact us today to learn how our empty nester real estate services can support your 
            financial planning practice and help your clients achieve successful property transitions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              Free Consultation
            </Link>
            <Link
              href="/services"
              className="inline-block px-8 py-4 border-2 border-blue-600 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/40 transition-colors font-semibold text-lg"
            >
              View All Services
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}

