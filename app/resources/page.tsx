import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import Link from 'next/link'
import { BlogPosts } from 'app/components/posts'

export const metadata: Metadata = {
  title: `Real Estate Resources for Financial Planners | Resources & Guides | ${businessConfig.name}`,
  description: 'Free and premium real estate resources for financial planners: downsizer guides, 55+ community planning resources, wealth transition checklists, and educational materials for CFPs and their clients in Las Vegas, Nevada.',
  keywords: [
    'real estate resources for financial planners',
    'downsizer real estate guides',
    '55+ communities Las Vegas resources',
    'wealth transition planning resources',
    'estate planning guides Las Vegas',
    'retirement planning tools',
    'financial planning resources',
    'CFP real estate resources',
  ],
  openGraph: {
    title: `Real Estate Resources for Financial Planners | ${businessConfig.name}`,
    description: 'Free and premium real estate resources designed to support financial planners and their clients.',
    url: `${baseUrl}/resources`,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
  },
}

export default function ResourcesPage() {
  return (
    <>
      {/* Breadcrumb - outside prose container */}
      <nav className="mb-8 text-sm text-gray-900" aria-label="Breadcrumb">
        <ol className="flex space-x-2 list-none">
          <li className="flex items-center"><Link href="/" className="hover:underline">Home</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center text-gray-900">Resources</li>
        </ol>
      </nav>
      <article className="prose prose-lg max-w-none">

      <h1 className="text-4xl font-bold mb-4 text-gray-900">Real Estate Resources for Financial Planners</h1>
      
      <p className="text-xl text-gray-900 mb-8">
        Educational resources to support financial planners and their clients in real estate 
        decision-making, downsizer transitions, 55+ community planning, and wealth transition 
        strategies in Las Vegas, Nevada.
      </p>

      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">Comprehensive Real Estate Resources for Financial Planning Success</h2>
        <p className="mb-4 text-lg text-gray-900">
          As a Certified Financial Planner, you understand that real estate decisions are 
          integral to your clients' overall financial picture. Whether your clients are empty 
          nesters looking to downsize, retirees considering 55+ communities, or families planning 
          wealth transitions, real estate plays a crucial role in their financial success.
        </p>
        <p className="mb-4 text-lg text-gray-900">
          Our comprehensive resource library provides you and your clients with expert guidance, 
          educational materials, and practical tools to support real estate decision-making that 
          aligns with financial planning goals. These resources are specifically designed to 
          complement your financial planning practice and enhance your ability to serve clients 
          comprehensively.
        </p>
        <p className="mb-4 text-lg text-gray-900">
          From free educational content to premium guides and checklists, our resources cover 
          downsizer real estate transitions, 55+ community planning, wealth transition 
          strategies, and Las Vegas market insights that support your financial planning 
          recommendations and client outcomes.
        </p>
      </section>

      {/* Free Resources Section - Link to dedicated page */}
      <section className="mb-12 p-12 bg-blue-50 rounded-xl border border-blue-200">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">Free Resources for Financial Planners and Clients</h2>
          <p className="mb-6 text-lg text-gray-900 max-w-3xl mx-auto leading-relaxed">
            Access our free educational content including blog articles, calculators, and guides 
            to help you and your clients understand real estate decision-making, downsizer 
            transitions, 55+ community planning, and how real estate decisions impact financial 
            planning strategies.
          </p>
          <Link
            href="/resources/free"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
          >
            Explore Free Resources →
          </Link>
        </div>
      </section>

      {/* Premium Resources Section - Link to dedicated page */}
      <section className="mb-12 p-12 bg-neutral-50 rounded-xl border border-gray-200">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">Premium Real Estate Resources for Financial Planners</h2>
          <p className="mb-6 text-lg text-gray-900 max-w-3xl mx-auto leading-relaxed">
            Download comprehensive guides, checklists, and templates to support your real estate 
            services and enhance your financial planning practice. These premium resources require 
            email registration to access and provide in-depth guidance on downsizer transitions, 
            55+ community planning, and wealth transition strategies.
          </p>
          <Link
            href="/resources/premium"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
          >
            View Premium Resources →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-12 p-8 bg-blue-50 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">Need Personalized Real Estate Guidance?</h2>
        <p className="mb-6 text-lg text-gray-900">
          While these resources provide valuable information, every client situation is unique. 
          Schedule a consultation to discuss how our real estate services can support your 
          financial planning practice and help your clients achieve their real estate and 
          financial goals.
        </p>
        <p className="mb-6 text-gray-900">
          Our real estate services are specifically designed to complement financial planning, 
          ensuring that every property recommendation aligns with your clients' financial plans, 
          tax strategies, and wealth transition objectives. Let's discuss how we can support 
          your practice and enhance your clients' outcomes.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Schedule Your Free Consultation
          </Link>
          <Link
            href="/cfp-partners"
              className="inline-block px-6 py-3 border border-blue-600 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors font-medium"
          >
            Learn About CFP Partnerships
          </Link>
        </div>
      </section>

      {/* Internal Links */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Explore More</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/blog" className="text-blue-600 hover:underline">
              Read Latest Real Estate Articles
            </Link>
          </li>
          <li>
            <Link href="/cfp-partners" className="text-blue-600 hover:underline">
              View CFP Partner Resources
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-blue-600 hover:underline">
              Learn About Dr. Janet Duffy
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-blue-600 hover:underline">
              Explore Our Real Estate Services
            </Link>
          </li>
        </ul>
      </section>
    </article>
    </>
  )
}
