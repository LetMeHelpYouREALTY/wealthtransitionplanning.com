import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import { TargetFAQ, targetFAQQuestions } from 'app/components/faq-target-questions'
import { FinancialCheckupCTA } from 'app/components/services/financial-checkup-cta'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '55+ Community Planning Las Vegas | Active Adult Communities | Financial Planner Support',
  description: 'Expert 55+ community planning services in Las Vegas for CERTIFIED Financial Planner clients. Comprehensive community analysis, financial impact assessment, and retirement planning integration.',
  keywords: [
    '55+ communities Las Vegas',
    'active adult communities Las Vegas',
    '55+ community planning',
    'retirement communities Las Vegas',
    'financial planner 55+ communities',
    'CFP 55+ community support',
    'Las Vegas 55+ communities',
    'active adult living Las Vegas',
    'retirement community planning',
    '55+ community financial planning',
  ],
  openGraph: {
    title: '55+ Community Planning Las Vegas | Active Adult Communities | Financial Planner Support',
    description: 'Expert 55+ community planning services in Las Vegas coordinated with financial planning goals.',
    url: `${baseUrl}/services/55-plus-communities`,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
  },
}

export default function FiftyFivePlusCommunitiesPage() {
  return (
    <>
      {/* Breadcrumb - outside prose container */}
      <nav className="mb-8 text-sm text-gray-900" aria-label="Breadcrumb">
        <ol className="flex space-x-2 list-none">
          <li className="flex items-center"><Link href="/" className="hover:underline">Home</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center"><Link href="/services" className="hover:underline">Services</Link></li>
          <li className="flex items-center">/</li>
            <li className="text-neutral-900 dark:text-neutral-100">55+ Communities</li>
          </ol>
        </nav>
      <article className="prose prose-lg max-w-none">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-6">55+ Community Planning in Las Vegas</h1>
          <p className="text-2xl text-gray-900 mb-8 max-w-3xl mx-auto">
            Expert guidance for clients considering 55+ active adult communities in Las Vegas. 
            Comprehensive community analysis, financial impact assessment, and integration with 
            retirement planning strategies.
          </p>
        </section>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Comprehensive 55+ Community Planning Services</h2>
          <p className="text-lg mb-6" style={{ color: '#111827' }}>
            Las Vegas offers exceptional 55+ active adult communities that provide retirees with 
            vibrant lifestyles, excellent amenities, and maintenance-free living. However, choosing 
            the right 55+ community requires careful consideration of financial implications, 
            lifestyle factors, and long-term planning objectives.
          </p>
          <p className="text-lg mb-6" style={{ color: '#111827' }}>
            Our 55+ community planning services help your clients find communities that align 
            with their retirement goals, financial situation, and lifestyle preferences. We 
            provide comprehensive community analysis, including financial impact assessments, 
            amenity evaluations, and long-term value considerations that support your retirement 
            planning recommendations.
          </p>
          <p className="text-lg mb-6" style={{ color: '#111827' }}>
            We understand that 55+ community decisions impact your clients' retirement income 
            planning, estate planning, and overall financial security. Our services integrate 
            with your financial planning to ensure community choices support long-term financial 
            objectives and retirement success.
          </p>
        </section>

        {/* Services Detail */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">55+ Community Services Include</h2>
          
          <div className="space-y-8">
            <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <h3 className="text-3xl font-semibold mb-4" style={{ color: '#111827' }}>Community Market Analysis</h3>
              <p className="text-lg mb-4 style={{ color: '#1f2937' }}">
                Comprehensive analysis of Las Vegas 55+ communities, including pricing trends, 
                availability, and value propositions that support your clients' financial goals. 
                Our market analysis considers community pricing, resale values, and long-term 
                investment potential.
              </p>
              <p className="mb-4 style={{ color: '#1f2937' }}">
                This analysis helps your clients understand the 55+ community market in Las Vegas, 
                identify communities that offer the best value for their financial situation, and 
                make informed decisions that support their retirement planning goals. We coordinate 
                this analysis with your financial planning to ensure community choices align with 
                retirement income strategies and long-term financial security.
              </p>
              <h4 className="text-xl font-semibold mb-3 style={{ color: '#111827' }}">Market Analysis Includes:</h4>
              <ul className="list-disc pl-6 space-y-2 style={{ color: '#1f2937' }}">
                <li>Las Vegas 55+ community inventory analysis</li>
                <li>Pricing trends and value assessments</li>
                <li>Community availability and waitlist information</li>
                <li>Resale value and investment potential</li>
                <li>Community financial health assessment</li>
                <li>Retirement planning integration</li>
              </ul>
            </div>

            <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <h3 className="text-3xl font-semibold mb-4" style={{ color: '#111827' }}>Financial Impact Assessment</h3>
              <p className="text-lg mb-4">
                Detailed analysis of how 55+ community choices impact retirement income, estate 
                planning, and long-term financial security. Our financial impact assessment 
                considers purchase prices, monthly fees, ongoing costs, and how these expenses 
                affect retirement income planning.
              </p>
              <p className="mb-4 style={{ color: '#1f2937' }}">
                This assessment helps your clients understand the financial implications of 55+ 
                community living, how community choices affect their retirement income, and what 
                to expect in terms of ongoing costs. We coordinate this assessment with your 
                financial planning to ensure community choices support retirement income strategies, 
                tax planning, and estate planning objectives.
              </p>
              <h4 className="text-xl font-semibold mb-3 style={{ color: '#111827' }}">Financial Assessment Includes:</h4>
              <ul className="list-disc pl-6 space-y-2 style={{ color: '#1f2937' }}">
                <li>Purchase price and financing analysis</li>
                <li>Monthly fee and cost projections</li>
                <li>Retirement income impact assessment</li>
                <li>Tax implications and strategies</li>
                <li>Estate planning considerations</li>
                <li>Long-term financial security analysis</li>
              </ul>
            </div>

            <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <h3 className="text-3xl font-semibold mb-4" style={{ color: '#111827' }}>Lifestyle and Amenity Evaluation</h3>
              <p className="text-lg mb-4">
                Assessment of community amenities, lifestyle offerings, and long-term value to ensure 
                your clients find communities that match their preferences and support their 
                retirement goals. Our evaluation considers recreational facilities, social activities, 
                healthcare access, and maintenance services.
              </p>
              <p className="mb-4 style={{ color: '#1f2937' }}">
                This evaluation helps your clients understand what to expect from 55+ community 
                living, identify communities that match their lifestyle preferences, and make 
                informed decisions that support their retirement happiness and financial goals. 
                We coordinate this evaluation with your financial planning to ensure community 
                choices align with lifestyle goals and retirement planning strategies.
              </p>
              <h4 className="text-xl font-semibold mb-3 style={{ color: '#111827' }}">Lifestyle Evaluation Includes:</h4>
              <ul className="list-disc pl-6 space-y-2 style={{ color: '#1f2937' }}">
                <li>Recreational facilities and amenities</li>
                <li>Social activities and community culture</li>
                <li>Healthcare access and services</li>
                <li>Maintenance and service offerings</li>
                <li>Location and accessibility</li>
                <li>Long-term lifestyle value</li>
              </ul>
            </div>

            <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <h3 className="text-3xl font-semibold mb-4" style={{ color: '#111827' }}>Retirement Planning Integration</h3>
              <p className="text-lg mb-4">
                Coordination with your retirement planning strategies to ensure community choices 
                support income planning, tax strategies, and estate planning objectives. Our 
                integration ensures that 55+ community decisions complement your comprehensive 
                retirement planning recommendations.
              </p>
              <p className="mb-4 style={{ color: '#1f2937' }}">
                This integration ensures that your clients' 55+ community choices support their 
                retirement income strategies, tax planning goals, and estate planning objectives. 
                We work closely with you to understand retirement planning recommendations and 
                ensure that community decisions align with comprehensive financial goals.
              </p>
              <h4 className="text-xl font-semibold mb-3 style={{ color: '#111827' }}">Planning Integration Includes:</h4>
              <ul className="list-disc pl-6 space-y-2 style={{ color: '#1f2937' }}">
                <li>Retirement income strategy coordination</li>
                <li>Tax planning integration</li>
                <li>Estate planning alignment</li>
                <li>Long-term financial security planning</li>
                <li>Healthcare cost considerations</li>
                <li>Comprehensive retirement planning support</li>
              </ul>
            </div>

            <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <h3 className="text-3xl font-semibold mb-4" style={{ color: '#111827' }}>Transaction Support</h3>
              <p className="text-lg mb-4">
                Expert guidance through the 55+ community purchase process, ensuring smooth 
                transactions that align with your clients' financial plans and timelines. Our 
                transaction support includes purchase negotiations, contract review, and closing 
                coordination.
              </p>
              <p className="mb-4 style={{ color: '#1f2937' }}">
                This support ensures that your clients' 55+ community purchases proceed smoothly, 
                contracts are structured optimally, and all parties are coordinated effectively. 
                We keep you informed throughout the process, ensuring that transaction details align 
                with your financial planning recommendations and client goals.
              </p>
              <h4 className="text-xl font-semibold mb-3 style={{ color: '#111827' }}">Transaction Services Include:</h4>
              <ul className="list-disc pl-6 space-y-2 style={{ color: '#1f2937' }}">
                <li>Purchase negotiation and coordination</li>
                <li>Contract review and structuring</li>
                <li>Financing coordination</li>
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
            Our 55+ community planning services are specifically designed to integrate seamlessly 
            with financial planning practices. We understand that 55+ community decisions impact 
            retirement income, tax strategies, estate planning, and overall financial security, 
            and our services ensure that every recommendation supports your comprehensive planning goals.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">For Certified Financial Planners</h3>
              <p className="mb-4 style={{ color: '#1f2937' }}">
                We work closely with you to understand your clients' retirement goals, income 
                strategies, and estate planning objectives. This collaboration ensures that every 
                55+ community recommendation supports their broader financial strategy and helps 
                them achieve their long-term retirement goals.
              </p>
              <h4 className="text-lg font-semibold mb-2">Integration Benefits:</h4>
              <ul className="list-disc pl-6 space-y-2 style={{ color: '#1f2937' }}">
                <li>Regular communication on client cases</li>
                <li>Community recommendations aligned with retirement plans</li>
                <li>Financial impact coordination</li>
                <li>Tax strategy integration</li>
                <li>Estate planning alignment</li>
              </ul>
            </div>
            <div className="p-8 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">For 55+ Community Clients</h3>
              <p className="mb-4 style={{ color: '#1f2937' }}">
                If you're considering a 55+ community and working with a financial planner, our 
                services ensure that all community recommendations are coordinated with your 
                financial planner's recommendations. This coordination ensures that your community 
                choice supports your retirement goals and maximizes outcomes.
              </p>
              <h4 className="text-lg font-semibold mb-2">Client Benefits:</h4>
              <ul className="list-disc pl-6 space-y-2 style={{ color: '#1f2937' }}">
                <li>Community guidance aligned with retirement plans</li>
                <li>Coordination with your financial planner</li>
                <li>Expert Las Vegas 55+ community knowledge</li>
                <li>Financial impact assessment</li>
                <li>Comprehensive community support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions About 55+ Communities</h2>
          <div className="max-w-4xl mx-auto">
            <TargetFAQ category="communities" />
            <div className="space-y-6 mt-8">
              {targetFAQQuestions.communities.map((faq, index) => (
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
          <h2 className="text-3xl font-semibold mb-4" style={{ color: '#111827' }}>Ready to Help Your Clients with 55+ Community Planning?</h2>
          <p className="mb-6 text-lg max-w-2xl mx-auto style={{ color: '#1f2937' }}">
            Contact us today to learn how our 55+ community planning services can support your 
            financial planning practice and help your clients find the perfect active adult community.
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

