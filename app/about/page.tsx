import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import { LocalBusinessSchema } from 'app/components/google/local-business-schema'
import { PersonSchema, BreadcrumbSchema } from 'app/components/google'
import { FAQSchema } from 'app/components/faq-schema'
import { TargetFAQ, targetFAQQuestions } from 'app/components/faq-target-questions'
import { ContactButtons } from 'app/components/google/contact-buttons'
import { AboutHero } from 'app/components/about/about-hero'
import { BioSection } from 'app/components/about/bio-section'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Dr. Janet Duffy | Best Financial Advisors in Las Vegas | Fiduciary Real Estate Expert',
  description: 'Learn about Dr. Janet Duffy, one of the best financial advisors in Las Vegas specializing in fiduciary real estate services for CERTIFIED Financial Planners. Trust-based approach to empty nester transitions and 55+ community planning.',
  keywords: [
    'best financial advisors in Las Vegas',
    'fiduciary financial advisor Las Vegas',
    'CERTIFIED financial planner Las Vegas',
    'Dr. Janet Duffy Las Vegas',
    'financial planner Las Vegas',
    'real estate services for financial planners',
    'wealth transition planning expert',
    'estate planning advisor Nevada',
    'fiduciary real estate expert',
    'empty nester real estate expert',
    'Las vegas home financial planner reviews',
  ],
  openGraph: {
    title: 'About Dr. Janet Duffy | Best Financial Advisors in Las Vegas | Fiduciary Real Estate Expert',
    description: 'One of the best financial advisors in Las Vegas specializing in fiduciary real estate services for CERTIFIED Financial Planners.',
    url: `${baseUrl}/about`,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
  },
}

const faqs = [
  {
    question: 'What are Dr. Janet Duffy\'s credentials?',
    answer: 'Dr. Janet Duffy is a CERTIFIED Financial Planner and fiduciary financial advisor in Las Vegas with extensive experience in real estate services for financial planners, estate planning, retirement planning, and financial security strategies for clients throughout Nevada.',
  },
  {
    question: 'Is Dr. Janet Duffy a fiduciary financial advisor in Las Vegas?',
    answer: 'Yes, Dr. Janet Duffy is a fiduciary financial advisor in Las Vegas, meaning she is legally obligated to act in your best interests. As one of the best financial advisors in Las Vegas for real estate planning, she prioritizes your financial goals over any commissions or incentives.',
  },
  {
    question: 'What is Dr. Janet Duffy\'s approach to real estate services for financial planners?',
    answer: 'Dr. Duffy takes a comprehensive, collaborative, and fiduciary approach to real estate services, working closely with CERTIFIED Financial Planners to ensure real estate decisions align with their clients\' financial plans, tax strategies, and wealth transition goals.',
  },
  {
    question: 'What areas does Dr. Janet Duffy serve?',
    answer: `Dr. Janet Duffy serves clients throughout the Las Vegas metropolitan area, including Las Vegas, Henderson, Summerlin, and North Las Vegas, Nevada. She is available for in-person consultations and virtual meetings for financial planners and their clients.`,
  },
  {
    question: 'How does Dr. Duffy work with financial planners?',
    answer: 'Dr. Duffy collaborates closely with CERTIFIED Financial Planners to provide expert real estate services that complement financial planning strategies. She ensures all real estate recommendations align with clients\' financial plans, tax considerations, and wealth transition objectives, maintaining a fiduciary approach throughout.',
  },
  {
    question: 'Why should I choose Dr. Janet Duffy as my financial planner in Las Vegas?',
    answer: 'Dr. Janet Duffy is recognized as one of the best financial advisors in Las Vegas for real estate planning. Her fiduciary approach, expertise in coordinating real estate with financial planning, and deep knowledge of the Las Vegas market make her an ideal partner for CERTIFIED Financial Planners and their clients.',
  },
]

export default function AboutPage() {
  // 2025: Breadcrumb items for schema
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ]

  return (
    <>
      {/* 2025: Enhanced Schema Markup */}
      <LocalBusinessSchema />
      <PersonSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      
      {/* Breadcrumb - outside prose container */}
      <nav className="mb-8 text-sm text-gray-900" aria-label="Breadcrumb">
        <ol className="flex space-x-2 list-none">
          <li className="flex items-center"><Link href="/" className="hover:underline">Home</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center text-neutral-900 dark:text-neutral-100">About</li>
        </ol>
      </nav>
      <article className="prose prose-lg max-w-none">

        {/* Improved Hero Section */}
        <AboutHero />

        {/* Improved Bio Section */}
        <BioSection />

        {/* Our Office Section */}
        <section className="mb-12 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-100 shadow-lg">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Professional Office</h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Located in the heart of Las Vegas, our office provides a welcoming and professional environment 
                for consultations with financial planners and their clients.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="relative rounded-xl overflow-hidden shadow-lg h-64 md:h-80">
                <Image
                  src="/images/office-hallway.jpg"
                  alt="Professional office hallway and waiting area at Wealth Transition Planning"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-lg h-64 md:h-80">
                <Image
                  src="/images/office-space.jpg"
                  alt="Modern office workspace at Wealth Transition Planning"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="text-center text-gray-700">
              Our office is designed to provide a comfortable, professional atmosphere where financial planners 
              and their clients can discuss real estate needs in a relaxed yet focused environment.
            </p>
          </div>
        </section>

        {/* Additional Bio Content */}
        <section className="mb-12">
          <p className="mb-4 text-lg text-gray-900">
            Dr. Duffy is particularly skilled in working with empty nesters, retirees, and 
            individuals planning transitions to 55+ communities, helping them make informed 
            real estate decisions that support their financial goals, estate plans, and 
            retirement strategies. She understands that real estate is often the largest asset 
            in clients' portfolios and that strategic real estate decisions are essential for 
            successful wealth transitions.
          </p>
          <p className="mb-4 text-lg text-gray-900">
            Her collaborative approach with Certified Financial Planners ensures that every 
            real estate recommendation aligns with clients' comprehensive financial plans, 
            maximizing outcomes and supporting long-term financial success.
          </p>
          
          <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">Specialization in Real Estate Services for Financial Planners</h3>
          <p className="mb-4 text-gray-900">
            Dr. Duffy's practice is specifically designed to support Certified Financial 
            Planners who need expert real estate services for their clients. She understands 
            that CFPs require real estate partners who can provide specialized expertise while 
            maintaining alignment with financial planning strategies and client relationships.
          </p>
          <p className="mb-4 text-gray-900">
            Her services are structured to complement financial planning practices, ensuring 
            that real estate decisions support clients' financial goals, tax strategies, and 
            wealth transition objectives. This collaborative approach allows CFPs to offer 
            comprehensive real estate services without becoming real estate experts themselves, 
            enhancing their value proposition and client outcomes.
          </p>
          <p className="mb-4 text-gray-900">
            Dr. Duffy works closely with financial planners to understand their clients' 
            comprehensive financial situations, ensuring that every real estate recommendation 
            considers financial planning implications, tax considerations, and long-term 
            wealth objectives.
          </p>
        </section>

        {/* Credentials Section - Enhanced */}
        <section className="mb-12 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-100 shadow-lg">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Credentials & Certifications</h2>
            </div>
            <p className="mb-8 text-lg md:text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed font-medium">
              Dr. Janet Duffy maintains the highest professional standards and holds multiple 
              certifications and credentials that demonstrate her expertise in real estate 
              services, financial planning, and wealth transition strategies.
            </p>
            <Link
              href="/about/credentials"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-xl transition-all font-semibold text-lg transform hover:-translate-y-0.5"
            >
              View All Credentials & Certifications →
            </Link>
          </div>
        </section>

        {/* Philosophy Section - Enhanced */}
        <section className="mb-12 py-12 px-4 sm:px-6 lg:px-8 bg-white rounded-2xl border-2 border-gray-200 shadow-lg">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Professional Philosophy and Approach</h2>
            </div>
            <p className="mb-8 text-lg md:text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed font-medium">
              Dr. Duffy believes that successful real estate services for financial planners 
              require more than just property expertise—they demand a deep understanding of 
              financial planning principles, tax strategies, and wealth transition objectives. 
              As a fiduciary financial advisor in Las Vegas, her approach integrates real estate 
              expertise with financial planning knowledge to ensure optimal outcomes.
            </p>
            <Link
              href="/about/philosophy"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-xl transition-all font-semibold text-lg transform hover:-translate-y-0.5"
            >
              Learn More About Our Philosophy →
            </Link>
          </div>
        </section>

        {/* Real Estate Expertise */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">Real Estate Expertise for Financial Planners</h2>
          <p className="mb-4 text-lg text-gray-900">
            Dr. Duffy's real estate expertise is specifically tailored to support financial 
            planners and their clients. She understands the unique needs of CFPs who require 
            real estate services that complement their financial planning practice.
          </p>
          
          <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">Empty Nester Real Estate Services</h3>
          <p className="mb-4 text-gray-900">
            Dr. Duffy specializes in helping empty nesters navigate real estate transitions 
            that support their financial goals. She understands that downsizing decisions 
            impact retirement planning, tax strategies, and estate planning objectives. Her 
            services include market analysis, property recommendations, and transaction 
            coordination that align with financial planning strategies.
          </p>
          <p className="mb-4 text-gray-900">
            She works closely with financial planners to ensure that empty nester real estate 
            transitions are timed optimally, structured tax-efficiently, and support clients' 
            long-term financial objectives. This coordination ensures that property decisions 
            enhance rather than complicate financial planning outcomes.
          </p>
          
          <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">55+ Community Planning Expertise</h3>
          <p className="mb-4 text-gray-900">
            Las Vegas offers exceptional 55+ active adult communities, and Dr. Duffy helps 
            financial planners' clients find communities that align with their retirement 
            goals and financial situations. She provides comprehensive community analysis, 
            financial impact assessments, and property recommendations that support retirement 
            planning strategies.
          </p>
          <p className="mb-4 text-gray-900">
            Her 55+ community expertise includes understanding how community choices impact 
            retirement income planning, estate planning, and long-term financial security. 
            This knowledge ensures that community recommendations support clients' 
            comprehensive financial objectives.
          </p>
          
          <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">Wealth Transition Real Estate Planning</h3>
          <p className="mb-4 text-gray-900">
            Real estate is often the largest asset in clients' portfolios, and strategic real 
            estate planning is essential for successful wealth transitions. Dr. Duffy helps 
            financial planners ensure that their clients' real estate decisions support 
            estate planning, tax optimization, and wealth transfer goals.
          </p>
          <p className="mb-4 text-gray-900">
            Her wealth transition real estate services include property portfolio analysis, 
            estate planning integration, tax-efficient strategies, and multi-generational 
            planning support. This comprehensive approach ensures that real estate decisions 
            maximize wealth transition outcomes.
          </p>
        </section>

        {/* Service Area */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">Service Area and Market Expertise</h2>
          <p className="mb-4 text-lg text-gray-900">
            Dr. Janet Duffy serves clients throughout the Las Vegas metropolitan area, 
            providing expert real estate services that support financial planners and their 
            clients across the region.
          </p>
          <p className="mb-4 text-gray-900">
            Her deep knowledge of the Las Vegas real estate market includes understanding 
            neighborhood trends, property values, market timing factors, and community 
            characteristics that impact clients' financial decisions. This market expertise 
            ensures that real estate recommendations are informed, accurate, and support 
            clients' financial objectives.
          </p>
          <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">Primary Service Areas</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            {businessConfig.serviceArea.regions.map((region) => (
              <li key={region} className="text-lg text-gray-900">{region}, Nevada</li>
            ))}
          </ul>
          <p className="mb-4 text-gray-900">
            Each service area receives specialized attention, with Dr. Duffy maintaining 
            detailed knowledge of local market conditions, property trends, and community 
            characteristics that impact clients' real estate decisions and financial outcomes.
          </p>
        </section>

        {/* Professional Associations */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">Professional Associations and Community Involvement</h2>
          <p className="mb-4 text-lg text-gray-900">
            Dr. Duffy maintains active membership in professional organizations dedicated to 
            real estate excellence, financial planning, estate planning, and wealth management. 
            These associations provide ongoing education, networking opportunities, and access 
            to industry best practices that enhance her ability to serve financial planners 
            and their clients.
          </p>
          <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">Real Estate Associations</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className="text-gray-900">Nevada Association of Realtors</li>
            <li className="text-gray-900">Las Vegas Real Estate Professionals Association</li>
            <li className="text-gray-900">National Association of Realtors</li>
            <li className="text-gray-900">Real Estate Services for Financial Planners Network</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">Financial Planning Associations</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className="text-gray-900">Financial Planning Association (FPA)</li>
            <li className="text-gray-900">National Association of Personal Financial Advisors (NAPFA)</li>
            <li className="text-gray-900">Estate Planning Council</li>
            <li className="text-gray-900">Las Vegas Financial Planning Association</li>
          </ul>
          <p className="text-sm text-gray-900">
            * Specific associations to be updated
          </p>
        </section>

        {/* Who Are Our Clients */}
        <section className="mb-12 p-12 bg-neutral-50 rounded-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">Who Are Our Clients?</h2>
          </div>
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg mb-6 text-gray-900">
              We work with Certified Financial Planners and their clients who need expert real 
              estate services to support their financial planning goals. Our clients include:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-gray-900"><strong>Certified Financial Planners</strong> looking to offer comprehensive 
              real estate services to their clients</li>
              <li className="text-gray-900"><strong>CFP clients</strong> who are empty nesters planning real estate transitions</li>
              <li className="text-gray-900"><strong>Retirees</strong> considering 55+ communities in Las Vegas</li>
            </ul>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-gray-900"><strong>Wealth transition clients</strong> needing real estate planning support</li>
              <li className="text-gray-900"><strong>Estate planning clients</strong> with real estate assets to manage</li>
              <li className="text-gray-900"><strong>Financial planning practices</strong> seeking real estate partnership services</li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto">
            <TargetFAQ category="all" />
            <div className="space-y-6 mt-8">
              {[
                ...targetFAQQuestions.financialPlanner.slice(0, 2),
                ...targetFAQQuestions.emptyNester.slice(0, 1),
                ...targetFAQQuestions.communities.slice(0, 1),
              ].map((faq, index) => (
                <div key={index} className="p-6 bg-neutral-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-900">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced */}
        <section className="mb-12 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
              Ready to Partner with Dr. Janet Duffy?
            </h2>
            <p className="mb-8 text-lg md:text-xl text-blue-50 max-w-2xl mx-auto leading-relaxed font-medium">
              If you're a CERTIFIED Financial Planner looking to enhance your practice with 
              expert real estate services, or if you're a client seeking real estate guidance 
              that supports your financial planning goals, schedule a free consultation with Dr. 
              Janet Duffy, one of the best financial advisors in Las Vegas for real estate planning.
            </p>
            <div className="mb-6">
              <ContactButtons className="mb-4" />
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all font-semibold text-lg transform hover:-translate-y-0.5"
              >
                Free Consultation with Las Vegas Real Estate Expert
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Learn More</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="/cfp-partners" className="text-blue-600 hover:underline">
                Learn About CFP Partnership Program
              </Link>
            </li>
            <li>
              <Link href="/resources" className="text-blue-600 hover:underline">
                View Educational Resources
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-blue-600 hover:underline">
                Read Latest Articles
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-blue-600 hover:underline">
                Explore Our Services
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  )
}
