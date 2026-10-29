import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `Premium Real Estate Resources for Financial Planners | ${businessConfig.name}`,
  description: 'Premium guides, checklists, and workbooks for financial planners: empty nester transitions, 55+ community planning, wealth transition strategies, and CFP partnership resources.',
  keywords: [
    'premium real estate resources',
    'financial planner guides',
    'empty nester checklists',
    '55+ community guides',
    'wealth transition workbooks',
    'CFP resources',
  ],
  openGraph: {
    title: `Premium Real Estate Resources for Financial Planners | ${businessConfig.name}`,
    description: 'Premium guides, checklists, and workbooks designed to support financial planners and their clients.',
    url: `${baseUrl}/resources/premium`,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
  },
}

export default function PremiumResourcesPage() {
  const premiumResources = [
    {
      title: 'Complete Real Estate Planning Guide for Financial Planners',
      description: '30+ page comprehensive guide covering empty nester transitions, 55+ community planning, wealth transition real estate strategies, and Las Vegas market insights.',
      details: 'Topics include market analysis, property recommendations, tax strategies, timing considerations, and integration with financial planning goals.',
      cta: 'Download Free Guide',
      href: '/contact',
    },
    {
      title: 'Empty Nester Real Estate Checklist for Financial Planners',
      description: 'Comprehensive step-by-step checklist for empty nesters considering downsizing, including financial considerations, timing factors, tax implications, and decision frameworks.',
      details: 'Includes market timing analysis, property valuation considerations, downsizing recommendations, and coordination with financial planning strategies.',
      cta: 'Download Checklist',
      href: '/contact',
    },
    {
      title: '55+ Communities Las Vegas Guide for Financial Planners',
      description: 'Comprehensive guide to active adult communities in Las Vegas, including community profiles, financial impact assessments, amenity evaluations, and planning strategies.',
      details: 'Covers community market analysis, financial planning integration, retirement income considerations, and long-term value assessments.',
      cta: 'Download Guide',
      href: '/contact',
    },
    {
      title: 'Wealth Transition Real Estate Workbook',
      description: 'Interactive workbook to help financial planners and their clients organize real estate portfolio analysis, assess wealth transition opportunities, and prepare for strategic real estate planning.',
      details: 'Includes property analysis frameworks, tax strategy templates, estate planning integration tools, and multi-generational planning considerations.',
      cta: 'Download Workbook',
      href: '/contact',
    },
    {
      title: 'CFP Partnership Real Estate Services Kit',
      description: 'Comprehensive information kit for certified financial planners interested in partnership opportunities for real estate services.',
      details: 'Includes partnership program details, service descriptions, collaboration frameworks, client education materials, and marketing support resources.',
      cta: 'Learn More',
      href: '/cfp-partners',
    },
    {
      title: 'Real Estate Planning Timeline for Financial Planners',
      description: 'Detailed timeline for real estate planning in the context of financial planning, including key milestones, decision points, and action items for each stage.',
      details: 'Covers empty nester transitions, 55+ community planning, wealth transition strategies, and integration with retirement planning, estate planning, and tax strategies.',
      cta: 'Download Timeline',
      href: '/contact',
    },
  ]

  return (
    <>
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-900" aria-label="Breadcrumb">
        <ol className="flex space-x-2 list-none">
          <li className="flex items-center"><Link href="/" className="hover:underline">Home</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center"><Link href="/resources" className="hover:underline">Resources</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center text-gray-900">Premium Resources</li>
        </ol>
      </nav>

      <article className="prose prose-lg max-w-none">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#111827' }}>
            Premium Real Estate Resources for Financial Planners
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#111827' }}>
            Download comprehensive guides, checklists, and templates to support your real estate 
            services and enhance your financial planning practice. These premium resources require 
            email registration to access and provide in-depth guidance on empty nester transitions, 
            55+ community planning, and wealth transition strategies.
          </p>
        </div>

        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {premiumResources.map((resource, index) => (
              <div key={index} className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#111827' }}>{resource.title}</h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#111827' }}>{resource.description}</p>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#111827' }}>{resource.details}</p>
                <Link
                  href={resource.href}
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                >
                  {resource.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 p-8 bg-blue-50 rounded-xl border border-blue-200">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#111827' }}>Resource Categories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-neutral-900 rounded-lg border border-gray-200 dark:border-neutral-700">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Empty Nester Real Estate Resources</h3>
              <p className="text-sm mb-4 text-gray-900 dark:text-gray-200">
                Comprehensive guides, checklists, and resources for empty nester real estate 
                transitions. These resources help financial planners guide clients through 
                downsizing decisions that support financial goals and retirement planning.
              </p>
              <h4 className="text-lg font-semibold mb-2" style={{ color: '#111827' }}>Resources Include:</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm" style={{ color: '#111827' }}>
                <li>Empty nester transition guides</li>
                <li>Downsizing decision frameworks</li>
                <li>Market timing analysis tools</li>
                <li>Tax strategy considerations</li>
                <li>Financial planning integration</li>
              </ul>
            </div>

            <div className="p-6 bg-white dark:bg-neutral-900 rounded-lg border border-gray-200 dark:border-neutral-700">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">55+ Community Planning Resources</h3>
              <p className="text-sm mb-4 text-gray-900 dark:text-gray-200">
                Resources for retirement transitions and 55+ community planning strategies. These 
                materials help financial planners assist clients in finding communities that align 
                with retirement goals and financial situations.
              </p>
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Resources Include:</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm text-gray-900 dark:text-gray-200">
                <li>55+ community market guides</li>
                <li>Financial impact assessments</li>
                <li>Community evaluation tools</li>
                <li>Retirement planning integration</li>
                <li>Lifestyle and amenity analysis</li>
              </ul>
            </div>

            <div className="p-6 bg-white dark:bg-neutral-900 rounded-lg border border-gray-200 dark:border-neutral-700">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Wealth Transition Real Estate Resources</h3>
              <p className="text-sm mb-4 text-gray-900 dark:text-gray-200">
                Guides for wealth transition real estate planning, estate integration, and 
                multi-generational property strategies. These resources support financial planners 
                in managing clients' real estate assets for optimal wealth transfer outcomes.
              </p>
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Resources Include:</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm text-gray-900 dark:text-gray-200">
                <li>Real estate portfolio analysis</li>
                <li>Estate planning integration guides</li>
                <li>Tax-efficient strategies</li>
                <li>Multi-generational planning tools</li>
                <li>Wealth transfer optimization</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#111827' }}>Also Check Out Our Free Resources</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: '#1f2937' }}>
              Access free blog articles, calculators, and educational content designed to support 
              your financial planning practice.
            </p>
            <Link
              href="/resources/free"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              View Free Resources →
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}

