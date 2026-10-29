import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import { BlogPosts } from 'app/components/posts'
import { ContactButtons } from 'app/components/google/contact-buttons'
import { FinancialCheckupCTA } from 'app/components/services/financial-checkup-cta'
import { PhilosophySection } from 'app/components/philosophy-section'
import { MediaFeatures } from 'app/components/media-features'
import { Certifications } from 'app/components/certifications'
import { serviceTiers } from 'app/config/services'
import { ServiceTierCard } from 'app/components/services/service-tier-card'
import { TargetFAQ, targetFAQQuestions } from 'app/components/faq-target-questions'
import { HomeHero } from 'app/components/home/home-hero'
import { ServiceCardsSection } from 'app/components/home/service-cards-section'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wealth Transition Planning Las Vegas | Real Estate & Financial Planning | Supporting CFP Clients',
  description: 'Supporting CERTIFIED Financial Planner clients and fiduciary advisors with strategic real estate planning in Las Vegas. Free consultation available. Best financial advisors in Las Vegas for real estate transitions.',
  keywords: [
    'financial planner Las Vegas',
    'CERTIFIED financial planner Las Vegas',
    'fiduciary financial advisor Las Vegas',
    'best financial advisors in Las Vegas',
    'financial advisor Las Vegas free consultation',
    'real estate services for financial planners',
    'CFP real estate support Las Vegas',
    'downsizer real estate Las Vegas',
    '55+ communities Las Vegas',
    'wealth transition planning',
    'Las vegas home financial planner reviews',
    'Las vegas home financial planner near me',
  ],
  openGraph: {
    title: 'Wealth Transition Planning Las Vegas | Real Estate & Financial Planning',
    description: 'Supporting CFP clients & fiduciary advisors with strategic real estate planning in Las Vegas. Free consultation.',
    url: baseUrl,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent('Wealth Transition Planning Las Vegas')}`,
        width: 1200,
        height: 630,
        alt: 'Wealth Transition Planning - Real Estate Services for Financial Planners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wealth Transition Planning Las Vegas | Real Estate & Financial Planning',
    description: 'Supporting CFP clients & fiduciary advisors with strategic real estate planning in Las Vegas. Free consultation.',
    images: [`${baseUrl}/og?title=${encodeURIComponent('Wealth Transition Planning Las Vegas')}`],
  },
}

export default function HomePage() {
  return (
    <>
      {/* Improved Hero Section */}
      <HomeHero />

      {/* Improved Service Cards Section */}
      <ServiceCardsSection />

      {/* Why Partner With Us - Brief Preview */}
      <section className="mb-20 p-12 bg-neutral-50 rounded-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Financial Planners Partner With Us</h2>
          <p className="text-xl mb-8 text-gray-900 font-medium">
            When you partner with <strong className="font-bold">{businessConfig.name}</strong>, you're not just 
            adding real estate services to your practice—you're gaining a trusted collaborator 
            who understands the financial planning landscape and how real estate decisions impact 
            your clients' overall financial health.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-white rounded-lg section-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Seamless Integration</h3>
              <p className="text-gray-900">
                Our services integrate seamlessly with your existing practice, providing your clients 
                with expert real estate guidance while maintaining your role as their primary financial advisor.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg section-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Financial Planning Alignment</h3>
              <p className="text-gray-900">
                Every real estate recommendation considers your clients' financial plans, tax situations, 
                estate planning goals, and retirement strategies.
              </p>
            </div>
          </div>
          <Link
            href="/cfp-partners"
            className="inline-block px-8 py-4 cta-gradient text-white rounded-lg hover:shadow-lg transition-all font-semibold text-lg"
          >
            Learn About CFP Partnerships
          </Link>
        </div>
      </section>

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Our Solutions Preview */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#111827' }}>OUR SOLUTIONS</h2>
          <p className="text-xl max-w-3xl mx-auto font-medium" style={{ color: '#111827' }}>
            First, we listen. Then we help you develop a realistic financial plan to get where 
            you want to go, whether that's planning your wealth transition, becoming a first-time 
            estate planner, or including comprehensive planning in your investment strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {serviceTiers.slice(0, 4).map((tier) => (
            <div key={tier.id} className="card-hover">
              <ServiceTierCard tier={tier} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-block px-8 py-4 cta-gradient text-white rounded-lg hover:shadow-lg transition-all font-semibold text-lg"
          >
            View All Solutions
          </Link>
        </div>
      </section>

      {/* Certifications */}
      <Certifications />

      {/* Media Features */}
      <MediaFeatures />

      {/* Latest Blog Posts */}
      <section className="mb-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold" style={{ color: '#111827' }}>Latest Articles</h2>
          <Link
            href="/blog"
            className="text-blue-600 hover:underline font-medium"
          >
            View All Posts →
          </Link>
        </div>
        <BlogPosts />
      </section>

      {/* CFP Partnership Highlight */}
      <section className="mb-20 p-8 bg-blue-50 rounded-xl">
        <h2 className="text-3xl font-semibold mb-4" style={{ color: '#111827' }}>CFP Partnership Program</h2>
        <p className="mb-6 text-lg" style={{ color: '#111827' }}>
          Are you a Certified Financial Planner looking to expand your service offerings with 
          expert real estate services? Partner with us to provide your clients with comprehensive 
          real estate guidance that complements your financial planning services.
        </p>
        <Link
          href="/cfp-partners"
          className="inline-block px-6 py-3 cta-gradient text-white rounded-lg hover:shadow-lg transition-all font-medium"
        >
          Learn About CFP Partnerships
        </Link>
      </section>

      {/* FAQ Section */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: '#111827' }}>Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto">
          <TargetFAQ category="financialPlanner" />
          <div className="space-y-6 mt-8">
            {targetFAQQuestions.financialPlanner.slice(0, 3).map((faq, index) => (
              <div key={index} className="p-6 bg-neutral-50 rounded-lg section-shadow">
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#111827' }}>{faq.question}</h3>
                <p style={{ color: '#111827' }}>{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 text-blue-600 hover:underline font-medium"
            >
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mb-20 p-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl text-center">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">Ready to Enhance Your Financial Planning Practice?</h2>
        <p className="mb-6 text-lg text-gray-900 max-w-2xl mx-auto font-medium">
          Schedule a free consultation with a Las Vegas real estate expert to learn how our 
          real estate services can support your CERTIFIED Financial Planner practice and help 
          your clients achieve their wealth transition goals.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 cta-gradient text-white rounded-lg hover:shadow-lg transition-all font-semibold text-lg"
          >
            Free Consultation with Las Vegas Real Estate Expert
          </Link>
          <Link
            href="/resources"
            className="inline-block px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg"
          >
            View Free Resources
          </Link>
        </div>
      </section>
    </>
  )
}
