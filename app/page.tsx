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
import { TrustBadges } from 'app/components/trust/trust-badges'
import { CaseStudiesSection } from 'app/components/case-studies/case-studies-section'
import { NewsletterSignup } from 'app/components/newsletter/newsletter-signup'
import { ResourcesSection } from 'app/components/resources/resources-section'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Realtor for Financial Planners Las Vegas | Real Estate Services for CFA Clients | Wealth Transition Planning',
  description: 'Professional realtor services for CERTIFIED Financial Advisors (CFAs) and their clients in Las Vegas. Buyer representation, seller representation, investment properties, empty nester transitions, and 55+ community planning. Free consultation available.',
  keywords: [
    'realtor for financial planners Las Vegas',
    'real estate agent for CFA clients',
    'realtor services for financial advisors',
    'buyer representation Las Vegas',
    'seller representation Las Vegas',
    'investment property realtor Las Vegas',
    'empty nester real estate Las Vegas',
    '55+ communities Las Vegas',
    'luxury home realtor Las Vegas',
    'CFA real estate partner',
    'real estate services for CFAs',
    'financial planner realtor Las Vegas',
  ],
  openGraph: {
    title: 'Realtor for Financial Planners Las Vegas | Real Estate Services for CFA Clients',
    description: 'Professional realtor services for CERTIFIED Financial Advisors and their clients. Buyer/seller representation, investment properties, and wealth transition support.',
    url: baseUrl,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent('Realtor Services for Financial Planners')}`,
        width: 1200,
        height: 630,
        alt: 'Wealth Transition Planning - Real Estate Services for Financial Planners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Realtor for Financial Planners Las Vegas | Real Estate Services for CFA Clients',
    description: 'Professional realtor services for CERTIFIED Financial Advisors and their clients. Free consultation.',
    images: [`${baseUrl}/og?title=${encodeURIComponent('Realtor Services for Financial Planners')}`],
  },
}

export default function HomePage() {
  return (
    <>
      {/* Enhanced Professional Hero Section */}
      <HomeHero />

      {/* Trust Badges Section */}
      <TrustBadges />

      {/* Improved Service Cards Section */}
      <ServiceCardsSection />

      {/* Why Partner With Us - Enhanced Preview */}
      <section className="mb-20 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Why Financial Planners Partner With Us</h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-900 font-medium max-w-4xl mx-auto leading-relaxed">
              When you partner with <strong className="font-bold">{businessConfig.name}</strong>, you're not just 
              adding real estate services to your practice—you're gaining a trusted collaborator 
              who understands the financial planning landscape and how real estate decisions impact 
              your clients' overall financial health.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="p-8 bg-white border-2 border-blue-100 rounded-xl section-shadow hover:border-blue-300 transition-all duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Seamless Integration</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our services integrate seamlessly with your existing practice, providing your clients 
                with expert real estate guidance while maintaining your role as their primary financial advisor.
              </p>
            </div>
            <div className="p-8 bg-white border-2 border-blue-100 rounded-xl section-shadow hover:border-blue-300 transition-all duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Financial Planning Alignment</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Every real estate recommendation considers your clients' financial plans, tax situations, 
                estate planning goals, and retirement strategies.
              </p>
            </div>
            <div className="p-8 bg-white border-2 border-blue-100 rounded-xl section-shadow hover:border-blue-300 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Fiduciary Approach</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We maintain a fiduciary standard, ensuring all recommendations prioritize your clients' 
                best interests and align with your professional obligations.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/cfp-partners"
              className="inline-block px-8 py-4 cta-gradient text-white rounded-lg hover:shadow-xl transition-all font-semibold text-lg transform hover:-translate-y-0.5"
            >
              Learn About CFP Partnerships →
            </Link>
          </div>
        </div>
      </section>

      {/* Serving Las Vegas Area - Enhanced with Aerial View */}
      <section className="mb-20 py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Serving the Las Vegas Area</h2>
            <p className="text-xl md:text-2xl text-gray-900 max-w-3xl mx-auto leading-relaxed font-medium">
              Our office at <strong>8925 W Post Rd</strong> serves financial planners and their clients throughout 
              the Las Vegas metropolitan area, including Henderson, Summerlin, and North Las Vegas.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl mb-8 relative h-64 md:h-96">
            <Image
              src="/images/las-vegas-area.jpg"
              alt="Aerial view of Las Vegas area showing diverse real estate opportunities including residential, commercial, and mixed-use developments"
              fill
              className="object-cover"
              sizes="100vw"
              loading="lazy"
              priority={false}
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white rounded-lg border-2 border-blue-100 section-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Market Knowledge</h3>
              <p className="text-gray-700">
                Deep understanding of Las Vegas real estate market trends, neighborhoods, and property values.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg border-2 border-blue-100 section-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Strategic Location</h3>
              <p className="text-gray-700">
                Conveniently located in a professional business complex, easily accessible from throughout the area.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg border-2 border-blue-100 section-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Comprehensive Coverage</h3>
              <p className="text-gray-700">
                Serving all major Las Vegas areas: Henderson, Summerlin, North Las Vegas, and the entire valley.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Our Solutions Preview - Enhanced */}
      <section className="mb-20 py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Solutions</h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium text-gray-900 leading-relaxed">
              First, we listen. Then we help you develop a realistic financial plan to get where 
              you want to go, whether that's planning your wealth transition, becoming a first-time 
              estate planner, or including comprehensive planning in your investment strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {serviceTiers.slice(0, 4).map((tier) => (
              <div key={tier.id} className="card-hover">
                <ServiceTierCard tier={tier} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-block px-8 py-4 cta-gradient text-white rounded-lg hover:shadow-xl transition-all font-semibold text-lg transform hover:-translate-y-0.5"
            >
              View All Solutions →
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <Certifications />

      {/* Media Features */}
      <MediaFeatures />

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* Latest Blog Posts */}
      <section className="mb-20 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Latest Articles</h2>
              <p className="text-lg text-gray-700">Insights and resources for financial planning professionals</p>
            </div>
            <Link
              href="/blog"
              className="hidden md:inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              View All Posts
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <BlogPosts />
          <div className="text-center mt-8 md:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All Posts
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup className="mb-20" />

      {/* Resources Section */}
      <ResourcesSection />

      {/* CFP Partnership Highlight - Enhanced */}
      <section className="mb-20 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">CFP Partnership Program</h2>
          <p className="mb-8 text-lg md:text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
            Are you a Certified Financial Planner looking to expand your service offerings with 
            expert real estate services? Partner with us to provide your clients with comprehensive 
            real estate guidance that complements your financial planning services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/cfp-partners"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Learn About CFP Partnerships
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all font-bold text-lg"
            >
              Schedule Partnership Call
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="mb-20 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Find answers to common questions about our real estate services for financial planners.
            </p>
          </div>
          <TargetFAQ category="financialPlanner" />
          <div className="space-y-6 mt-8">
            {targetFAQQuestions.financialPlanner.slice(0, 3).map((faq, index) => (
              <div key={index} className="p-6 md:p-8 bg-white border-2 border-gray-100 rounded-xl section-shadow hover:border-blue-200 transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/faq"
              className="inline-block px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all font-semibold text-lg"
            >
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA - Enhanced */}
      <section className="mb-20 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
            Ready to Enhance Your Financial Planning Practice?
          </h2>
          <p className="mb-8 text-lg md:text-xl text-blue-50 max-w-2xl mx-auto leading-relaxed font-medium">
            Schedule a free consultation with a Las Vegas real estate expert to learn how our 
            real estate services can support your CERTIFIED Financial Planner practice and help 
            your clients achieve their wealth transition goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all font-semibold text-lg transform hover:-translate-y-0.5"
            >
              Free Consultation with Las Vegas Real Estate Expert
            </Link>
            <Link
              href="/resources"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all font-semibold text-lg"
            >
              View Free Resources
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
