import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import { FAQSchema } from 'app/components/faq-schema'
import { TargetFAQ } from 'app/components/faq-target-questions'
import { FinancialCheckupCTA } from 'app/components/services/financial-checkup-cta'
import { FAQAccordion } from 'app/components/faq/faq-accordion'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `Frequently Asked Questions | ${businessConfig.name}`,
  description: `Frequently asked questions about ${businessConfig.name}'s wealth transition planning, downsizer real estate services, 55+ community planning, and CFP partnership program in Las Vegas, Nevada.`,
  keywords: [
    'wealth transition planning FAQ',
    'downsizer real estate questions',
    '55+ community planning FAQ',
    'financial planner FAQ Las Vegas',
    'CFP partnership questions',
    'real estate planning FAQ',
  ],
  openGraph: {
    title: `Frequently Asked Questions | ${businessConfig.name}`,
    description: `Frequently asked questions about ${businessConfig.name}'s wealth transition planning services.`,
    url: `${baseUrl}/faq`,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
  },
}

// Flatten target FAQ questions from all categories
const targetFAQQuestions = [
  {
    question: 'Should I work with a financial planner before selling my home?',
    answer: 'Yes, working with a CERTIFIED Financial Planner before selling your home is highly recommended. A financial planner can help you understand the tax implications, timing considerations, and how the sale impacts your overall financial plan, retirement income, and estate planning goals. This coordination ensures optimal financial outcomes.',
  },
  {
    question: 'What\'s the difference between a financial advisor and real estate agent?',
    answer: 'A financial advisor (especially a CERTIFIED Financial Planner or fiduciary advisor) focuses on your comprehensive financial picture, including how real estate decisions impact your financial plans, tax strategies, and wealth transition goals. A real estate agent specializes in property transactions, market analysis, and property sales. Working with both ensures that real estate decisions align with your financial objectives.',
  },
  {
    question: 'How do fiduciary advisors approach real estate decisions?',
    answer: 'Fiduciary financial advisors in Las Vegas approach real estate decisions by prioritizing your best interests, analyzing how property choices impact your financial plans, tax situations, and wealth transition objectives. They ensure real estate recommendations align with your comprehensive financial goals and support long-term financial success, rather than focusing solely on property transactions.',
  },
  {
    question: 'What should I look for in a financial planner Las Vegas?',
    answer: 'When looking for a financial planner in Las Vegas, seek a CERTIFIED Financial Planner (CFP®) who is a fiduciary, has expertise in real estate planning, understands the Las Vegas market, and can coordinate real estate decisions with your financial plans. Look for advisors who specialize in downsizer transitions, 55+ community planning, and wealth transition strategies.',
  },
  {
    question: 'Do financial advisors in Las Vegas help with real estate planning?',
    answer: 'Yes, many financial advisors in Las Vegas, especially those specializing in wealth transition planning, help with real estate planning. They coordinate property decisions with financial plans, analyze tax implications, assess market timing, and ensure real estate choices support retirement planning, estate planning, and wealth transfer goals.',
  },
  {
    question: 'How can a financial planner help with downsizer real estate transitions?',
    answer: 'A CERTIFIED Financial Planner can help with downsizer real estate transitions by analyzing the financial implications of downsizing, coordinating property sales with tax strategies, assessing timing for optimal financial outcomes, and ensuring that downsizing decisions support retirement planning and estate planning goals.',
  },
  {
    question: 'What are the tax implications of selling my home as a downsizer?',
    answer: 'Tax implications of selling your home as a downsizer depend on factors including capital gains exclusions, length of ownership, and how proceeds are used. A fiduciary financial advisor in Las Vegas can help you understand these implications and structure the transaction to minimize taxes while supporting your financial planning goals.',
  },
  {
    question: 'Should I consult a financial planner before moving to a 55+ community?',
    answer: 'Yes, consulting a CERTIFIED Financial Planner before moving to a 55+ community is essential. They can analyze how community choices impact retirement income, estate planning, tax strategies, and long-term financial security, ensuring that your 55+ community decision supports your comprehensive financial objectives.',
  },
  {
    question: 'How do 55+ communities in Las Vegas impact financial planning?',
    answer: '55+ communities in Las Vegas impact financial planning through monthly fees, purchase prices, potential resale values, and how they affect retirement income planning. A fiduciary financial advisor can help you assess these impacts and ensure community choices align with your financial plans and retirement goals.',
  },
]

const additionalFAQs = [
  {
    question: 'What makes your services different from a traditional real estate agent?',
    answer: 'We specialize in coordinating real estate transitions with financial planning goals. Unlike traditional agents, we work directly with CERTIFIED Financial Planners to ensure real estate decisions align with your overall wealth strategy. Our fiduciary approach means we always act in your best interest, and we understand the complexities of downsizer transitions, 55+ communities, and wealth transfer planning.',
  },
  {
    question: 'How long does the typical wealth transition process take?',
    answer: 'The timeline varies based on your specific situation, but most transitions take 3-6 months from initial consultation to completion. Factors include property preparation, market conditions, finding the right new property (if applicable), and coordinating with your financial planner. We\'ll provide a detailed timeline during your initial consultation.',
  },
  {
    question: 'Do you work with clients outside of Las Vegas?',
    answer: `While we primarily serve the Las Vegas metropolitan area, including Henderson, Summerlin, and North Las Vegas, we can work with clients in surrounding areas. Our focus is on providing the best service to clients who can benefit from our local market expertise and CFP partnership network.`,
  },
  {
    question: 'What are the costs associated with your services?',
    answer: 'Our service structure is transparent and varies based on the level of service you need. We offer different service tiers from consultation-only to comprehensive planning. During your free initial consultation, we\'ll discuss pricing and service options that align with your needs and budget.',
  },
  {
    question: 'Can you help if I\'m not working with a financial planner?',
    answer: 'Yes! While we specialize in supporting clients who work with CFPs, we can also work directly with individuals and families. We can help you understand how real estate decisions impact your financial planning and may recommend working with a financial planner if it would benefit your situation.',
  },
  {
    question: 'What types of properties do you specialize in?',
    answer: 'We specialize in residential real estate transitions, particularly single-family homes, condominiums, and 55+ community properties. Our expertise includes helping downsizers downsize, finding appropriate 55+ communities, and managing property transitions as part of wealth transfer strategies.',
  },
]

const allFAQs = [...targetFAQQuestions, ...additionalFAQs]

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <FAQSchema faqs={allFAQs} />

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#111827' }}>
          Frequently Asked Questions
        </h1>
        <p className="text-xl" style={{ color: '#111827' }}>
          Find answers to common questions about our wealth transition planning services
        </p>
      </div>

      {/* Improved FAQ Sections with Accordion */}
      <FAQAccordion faqs={targetFAQQuestions} title="General Questions" />
      <FAQAccordion faqs={additionalFAQs} title="Service-Specific Questions" />

      {/* Contact CTA */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#111827' }}>
          Still Have Questions?
        </h2>
        <p className="mb-6" style={{ color: '#1f2937' }}>
          We're here to help! Schedule a free consultation to discuss your specific situation and get personalized answers.
        </p>
        <FinancialCheckupCTA />
      </div>

      {/* Related Links */}
      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/services"
            className="text-[#2563eb] hover:underline font-medium"
          >
            → Our Services
          </Link>
          <Link
            href="/process"
            className="text-[#2563eb] hover:underline font-medium"
          >
            → Our Process
          </Link>
          <Link
            href="/cfp-partners"
            className="text-[#2563eb] hover:underline font-medium"
          >
            → CFP Partnership Program
          </Link>
          <Link
            href="/contact"
            className="text-[#2563eb] hover:underline font-medium"
          >
            → Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

