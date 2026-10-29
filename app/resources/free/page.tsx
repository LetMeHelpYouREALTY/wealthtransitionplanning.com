import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `Free Real Estate Resources for Financial Planners | ${businessConfig.name}`,
  description: 'Free educational resources for financial planners: blog articles, calculators, guides, and tools for downsizer transitions, 55+ communities, and wealth transition planning.',
  keywords: [
    'free real estate resources',
    'financial planner resources',
    'downsizer guides',
    '55+ community resources',
    'real estate calculators',
    'CFP resources',
  ],
  openGraph: {
    title: `Free Real Estate Resources for Financial Planners | ${businessConfig.name}`,
    description: 'Free educational resources designed to support financial planners and their clients.',
    url: `${baseUrl}/resources/free`,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
  },
}

export default function FreeResourcesPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-900" aria-label="Breadcrumb">
        <ol className="flex space-x-2 list-none">
          <li className="flex items-center"><Link href="/" className="hover:underline">Home</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center"><Link href="/resources" className="hover:underline">Resources</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center text-gray-900">Free Resources</li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#111827' }}>
            Free Resources for Financial Planners and Clients
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#111827' }}>
            Access our free educational content to help you and your clients understand real estate 
            decision-making, downsizer transitions, 55+ community planning, and how real estate 
            decisions impact financial planning strategies.
          </p>
        </div>

        {/* Latest Blog Posts */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#111827' }}>Latest Real Estate Articles for Financial Planners</h2>
            <p className="mb-6 text-lg leading-relaxed" style={{ color: '#111827' }}>
              Stay informed with our latest blog posts on real estate topics relevant to financial 
              planners, including downsizer transitions, 55+ community planning, wealth transition 
              strategies, and Las Vegas market insights. These articles provide expert analysis, 
              market trends, and practical guidance that supports your financial planning practice.
            </p>
            <div className="my-8">
              <BlogPosts />
            </div>
            <div className="text-center">
              <Link
                href="/blog"
                className="inline-block mt-4 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
              >
                View All Blog Posts →
              </Link>
            </div>
          </div>
        </section>

        {/* Free Calculators */}
        <section className="mb-16 p-8 bg-blue-50 rounded-xl border border-blue-200">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#111827' }}>Free Real Estate Planning Calculators</h2>
          <p className="mb-6 text-lg leading-relaxed" style={{ color: '#1f2937' }}>
            Our free calculators help you and your clients assess real estate decisions, analyze 
            financial implications, and understand how property choices impact financial planning 
            strategies. These tools provide valuable insights that support informed decision-making 
            and complement your financial planning recommendations.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#111827' }}>Downsizer Real Estate Transition Calculator</h3>
              <p className="mb-4" style={{ color: '#111827' }}>
                Analyze the financial implications of downsizing, including sale proceeds, purchase 
                costs, and impact on retirement planning.
              </p>
              <p className="text-sm italic" style={{ color: '#111827' }}>Coming soon</p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#111827' }}>55+ Community Financial Impact Calculator</h3>
              <p className="mb-4" style={{ color: '#111827' }}>
                Assess how 55+ community choices impact retirement income, estate planning, and 
                long-term financial security.
              </p>
              <p className="text-sm italic" style={{ color: '#111827' }}>Coming soon</p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#111827' }}>Wealth Transition Real Estate Calculator</h3>
              <p className="mb-4" style={{ color: '#111827' }}>
                Evaluate real estate portfolio strategies for wealth transfer, tax optimization, 
                and estate planning objectives.
              </p>
              <p className="text-sm italic" style={{ color: '#111827' }}>Coming soon</p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#111827' }}>Real Estate Tax Impact Calculator</h3>
              <p className="mb-4" style={{ color: '#111827' }}>
                Understand tax implications of real estate transactions and how they affect overall 
                tax planning strategies.
              </p>
              <p className="text-sm italic" style={{ color: '#111827' }}>Coming soon</p>
            </div>
          </div>
        </section>

        <section className="mb-16 p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#111827' }}>Need More Comprehensive Resources?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: '#1f2937' }}>
              Explore our premium resources including comprehensive guides, detailed checklists, 
              and in-depth workbooks designed specifically for financial planners.
            </p>
            <Link
              href="/resources/premium"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              View Premium Resources →
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}

