import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import { FinancialCheckupCTA } from 'app/components/services/financial-checkup-cta'
import { ProcessTimeline } from 'app/components/process/process-timeline'
import { HowToSchema, BreadcrumbSchema } from 'app/components/google'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `Our Process | How We Work | ${businessConfig.name}`,
  description: `Learn about ${businessConfig.name}'s comprehensive process for wealth transition planning, empty nester real estate services, and 55+ community planning in Las Vegas, Nevada.`,
  keywords: [
    'wealth transition planning process',
    'empty nester real estate process',
    '55+ community planning process',
    'financial planning process Las Vegas',
    'real estate planning workflow',
    'CFP partnership process',
  ],
  openGraph: {
    title: `Our Process | How We Work | ${businessConfig.name}`,
    description: `Learn about ${businessConfig.name}'s comprehensive process for wealth transition planning services.`,
    url: `${baseUrl}/process`,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
  },
}

const processSteps = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'We begin with a comprehensive consultation to understand your financial goals, lifestyle preferences, and real estate needs. This free consultation helps us determine how we can best support your wealth transition planning.',
    details: [
      'Review your current financial situation',
      'Discuss your goals and timeline',
      'Identify key decision factors',
      'Answer your questions',
    ],
  },
  {
    step: 2,
    title: 'Assessment & Planning',
    description: 'We conduct a thorough assessment of your situation and develop a customized plan that aligns with your financial planning goals and real estate objectives.',
    details: [
      'Analyze your current property portfolio',
      'Evaluate market conditions',
      'Coordinate with your financial planner',
      'Develop transition strategy',
    ],
  },
  {
    step: 3,
    title: 'Strategy Development',
    description: 'We create a detailed strategy that addresses your specific needs, whether you\'re an empty nester looking to downsize, planning for a 55+ community, or managing a wealth transition.',
    details: [
      'Property evaluation and recommendations',
      'Timeline development',
      'Financial impact analysis',
      'Risk assessment and mitigation',
    ],
  },
  {
    step: 4,
    title: 'Implementation',
    description: 'We guide you through the implementation of your plan, coordinating with all parties involved to ensure a smooth transition.',
    details: [
      'Property preparation and staging',
      'Market positioning and marketing',
      'Negotiation and transaction management',
      'Ongoing communication and updates',
    ],
  },
  {
    step: 5,
    title: 'Transition Support',
    description: 'We provide ongoing support throughout your transition, helping you navigate any challenges and ensuring your goals are met.',
    details: [
      'Move coordination assistance',
      'New property search and selection',
      'Post-transition follow-up',
      'Ongoing relationship management',
    ],
  },
  {
    step: 6,
    title: 'Long-Term Partnership',
    description: 'We maintain a long-term relationship with you and your financial planner, providing ongoing support and expertise as your needs evolve.',
    details: [
      'Regular check-ins and updates',
      'Market insights and opportunities',
      'Continued strategic guidance',
      'Partnership with your CFP',
    ],
  },
]

export default function ProcessPage() {
  // 2025: Format steps for HowTo schema
  const howToSteps = processSteps.map((step) => ({
    name: step.title,
    text: step.description,
    url: `/process#step-${step.step}`,
  }))

  // 2025: Breadcrumb items for schema
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Our Process', url: '/process' },
  ]

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* 2025: Enhanced Schema Markup */}
      <HowToSchema
        name="How to Plan Your Wealth Transition"
        description="A comprehensive step-by-step guide to wealth transition planning with Dr. Jan Duffy"
        steps={howToSteps}
        totalTime="PT2H" // Estimated 2 hours for consultation
        pageUrl="/process"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Process
        </h1>
        <p className="text-xl text-gray-900 max-w-3xl mx-auto">
          A comprehensive, client-centered approach to wealth transition planning and real estate services
        </p>
      </div>

      {/* Improved Process Timeline */}
      <div className="mb-16">
        <ProcessTimeline steps={processSteps} />
      </div>

      {/* Key Principles */}
      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Our Core Principles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#2563eb] text-white flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fiduciary Approach</h3>
            <p className="text-gray-900">
              We always act in your best interest, providing transparent, unbiased advice.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#2563eb] text-white flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">CFP Coordination</h3>
            <p className="text-gray-900">
              We work seamlessly with your financial planner to ensure integrated planning.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#2563eb] text-white flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Results-Driven</h3>
            <p className="text-gray-900">
              We focus on achieving your goals with measurable outcomes and clear communication.
            </p>
          </div>
        </div>
      </div>

      {/* Services Link */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Explore Our Services
        </h2>
        <p className="text-gray-900 mb-6">
          Learn more about our specific services for empty nesters, 55+ communities, and wealth transition planning.
        </p>
        <Link
          href="/services"
          className="inline-block bg-[#2563eb] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors"
        >
          View Our Services
        </Link>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Begin?
        </h2>
        <p className="text-gray-900 mb-6">
          Schedule a free consultation to discuss your wealth transition planning needs and learn how our process can work for you.
        </p>
        <FinancialCheckupCTA />
      </div>
    </div>
  )
}

