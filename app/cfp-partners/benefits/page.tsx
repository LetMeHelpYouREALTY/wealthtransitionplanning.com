import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import { BenefitsGrid } from 'app/components/cfp-partners/benefits-grid'
import { ContactButtons } from 'app/components/google/contact-buttons'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `CFP Partnership Benefits | ${businessConfig.name}`,
  description: 'Discover the benefits of partnering with a Las Vegas real estate expert for your CFP practice. Expand service offerings, deepen client relationships, increase revenue, and gain a competitive edge.',
  keywords: [
    'CFP partnership benefits',
    'financial planner partnership advantages',
    'real estate services for CFPs',
    'CFP practice expansion',
    'financial advisor partnership benefits',
    'real estate partnership for financial planners',
  ],
  openGraph: {
    title: `CFP Partnership Benefits | ${businessConfig.name}`,
    description: 'Discover the benefits of partnering with a Las Vegas real estate expert for your CFP practice.',
    url: `${baseUrl}/cfp-partners/benefits`,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
  },
}

export default function CFPBenefitsPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-900" aria-label="Breadcrumb">
        <ol className="flex space-x-2 list-none">
          <li className="flex items-center"><Link href="/" className="hover:underline">Home</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center"><Link href="/cfp-partners" className="hover:underline">CFP Partners</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center text-gray-900">Benefits</li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#111827' }}>
            Benefits for Certified Financial Planners
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#111827' }}>
            When you partner with <strong>{businessConfig.name}</strong>, you're not just 
            adding real estate services to your practice—you're gaining a trusted collaborator 
            who understands the financial planning landscape and how real estate decisions impact 
            your clients' overall financial health.
          </p>
        </div>

        <BenefitsGrid />

        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#111827' }}>Why Financial Planners Partner With Us</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="p-8 border-2 border-gray-200 dark:border-neutral-700 rounded-xl hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#111827' }}>Seamless Integration with Your Practice</h3>
              <p className="mb-4 leading-relaxed" style={{ color: '#111827' }}>
                We understand that real estate services must complement, not complicate, your 
                financial planning process. Our services are designed to integrate seamlessly 
                with your existing practice, providing your clients with expert real estate 
                guidance while maintaining your role as their primary financial advisor.
              </p>
              <h4 className="text-lg font-semibold mb-3" style={{ color: '#111827' }}>Key Integration Benefits:</h4>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#111827' }}>
                <li>Regular communication and collaboration on client cases</li>
                <li>Real estate recommendations that align with financial plans</li>
                <li>Coordinated timing for optimal financial outcomes</li>
                <li>Shared client portal for seamless information exchange</li>
              </ul>
            </div>

            <div className="p-8 border-2 border-gray-200 dark:border-neutral-700 rounded-xl hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#111827' }}>Expert Real Estate Knowledge</h3>
              <p className="mb-4 leading-relaxed" style={{ color: '#111827' }}>
                Our team specializes in the Las Vegas real estate market, with deep expertise in 
                downsizer transitions, 55+ communities, and wealth transition properties. We 
                understand the unique characteristics of the Las Vegas market, including 
                neighborhood trends, property values, and market timing factors.
              </p>
              <h4 className="text-lg font-semibold mb-3" style={{ color: '#111827' }}>Our Real Estate Expertise Includes:</h4>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#111827' }}>
                <li>Las Vegas market analysis and trends</li>
                <li>Downsizer property transitions</li>
                <li>55+ community market knowledge</li>
                <li>Wealth transition property strategies</li>
              </ul>
            </div>

            <div className="p-8 border-2 border-gray-200 dark:border-neutral-700 rounded-xl hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#111827' }}>Financial Planning Alignment</h3>
              <p className="mb-4 leading-relaxed" style={{ color: '#111827' }}>
                Every real estate recommendation we make considers your clients' financial plans, 
                tax situations, estate planning goals, and retirement strategies. We don't just 
                help clients buy or sell properties—we ensure their real estate decisions support 
                their broader financial objectives.
              </p>
              <h4 className="text-lg font-semibold mb-3" style={{ color: '#111827' }}>Financial Planning Considerations:</h4>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#111827' }}>
                <li>Tax implications of real estate transactions</li>
                <li>Impact on retirement income planning</li>
                <li>Estate planning integration</li>
                <li>Wealth transfer optimization</li>
              </ul>
            </div>

            <div className="p-8 border-2 border-gray-200 dark:border-neutral-700 rounded-xl hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#111827' }}>Enhanced Client Value</h3>
              <p className="mb-4 leading-relaxed" style={{ color: '#111827' }}>
                By partnering with us, you can offer your clients comprehensive real estate 
                services without the need to become a real estate expert yourself. This enhances 
                your value proposition, improves client retention, and allows you to serve your 
                clients' complete financial needs.
              </p>
              <h4 className="text-lg font-semibold mb-3" style={{ color: '#111827' }}>Value-Added Services:</h4>
              <ul className="list-disc pl-6 space-y-2" style={{ color: '#111827' }}>
                <li>Comprehensive real estate market analysis</li>
                <li>Property recommendations aligned with financial goals</li>
                <li>Transaction coordination and support</li>
                <li>Ongoing real estate portfolio management</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="mb-12">
          <ContactButtons />
        </div>
      </article>
    </>
  )
}

