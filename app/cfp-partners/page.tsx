import type { Metadata } from 'next'
import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import { FAQSchema } from 'app/components/faq-schema'
import { TargetFAQ, targetFAQQuestions } from 'app/components/faq-target-questions'
import { CFPHero } from 'app/components/cfp-partners/cfp-hero'
import { BenefitsGrid } from 'app/components/cfp-partners/benefits-grid'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Financial Advisor Partnership Program | Las Vegas Real Estate Planning | CFP Support',
  description: 'Partner with a Las Vegas real estate expert to support your CERTIFIED Financial Planner practice. Fiduciary financial advisor real estate support for empty nester transitions, 55+ community planning, and wealth transition strategies.',
  keywords: [
    'financial advisor partnership program Las Vegas',
    'CERTIFIED financial planner Las Vegas partnership',
    'fiduciary financial advisor Las Vegas',
    'CFP partnership program Las Vegas',
    'real estate services for financial planners',
    'CFP real estate support',
    'financial advisor partnerships',
    'best financial advisors in Las Vegas',
    'wealth transition planning for CFPs',
    'CFP referral program',
    'empty nester real estate for CFPs',
    '55+ communities for financial planners',
  ],
  openGraph: {
    title: 'Financial Advisor Partnership Program | Las Vegas Real Estate Planning',
    description: 'Partner with a Las Vegas real estate expert to support your CERTIFIED Financial Planner practice.',
    url: `${baseUrl}/cfp-partners`,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
  },
}

const faqs = [
  {
    question: 'What is the CFP Partnership Program?',
    answer: 'The CFP Partnership Program allows CERTIFIED Financial Planners and fiduciary financial advisors in Las Vegas to partner with Dr. Janet Duffy to offer comprehensive real estate services to their clients, including empty nester transitions, 55+ community planning, and wealth transition real estate strategies. This partnership expands your service offerings without requiring additional real estate certifications or expertise.',
  },
  {
    question: 'What real estate services are available through the partnership?',
    answer: 'CFP partners gain access to specialized real estate services including empty nester real estate transitions in Las Vegas, 55+ community planning and recommendations, wealth transition real estate strategies, property market analysis, and transaction coordination that aligns with financial planning goals. All services are provided by a fiduciary-minded real estate advisor.',
  },
  {
    question: 'How does the partnership benefit my financial planning practice?',
    answer: 'The partnership enhances your practice by allowing you to offer comprehensive real estate services that complement your financial planning. This increases client value, improves retention, and allows you to serve clients\' complete financial needs including real estate decisions that impact their financial plans. As one of the best financial advisors in Las Vegas for real estate planning, we help you stand out from competitors.',
  },
  {
    question: 'How does the partnership process work?',
    answer: 'The partnership process begins with a free consultation to discuss your practice needs and client base. We then establish partnership terms, provide access to resources and client education materials, and set up ongoing collaboration processes for client referrals and real estate consultations. The process is designed to be seamless and supportive of your financial planning practice.',
  },
  {
    question: 'What resources are available to CFP partners?',
    answer: 'CFP partners receive access to specialized real estate resources including client education materials on empty nester transitions and 55+ communities, real estate market analysis tools, partnership marketing materials, case study examples, and direct consultation support for complex real estate scenarios. All resources are designed to support your CERTIFIED Financial Planner practice.',
  },
  {
    question: 'Is this partnership suitable for fiduciary financial advisors?',
    answer: 'Yes, our partnership program is specifically designed for fiduciary financial advisors in Las Vegas. Dr. Janet Duffy maintains a fiduciary approach to all real estate services, ensuring that recommendations prioritize clients\' best interests and align with your fiduciary obligations as a CERTIFIED Financial Planner.',
  },
]

export default function CFPPartnersPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      
      {/* Breadcrumb - outside prose container */}
      <nav className="mb-8 text-sm text-gray-900" aria-label="Breadcrumb">
        <ol className="flex space-x-2 list-none">
          <li className="flex items-center"><Link href="/" className="hover:underline">Home</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center text-neutral-900 dark:text-neutral-100">CFP Partners</li>
        </ol>
      </nav>
      <article className="prose prose-lg max-w-none">

        {/* Improved Hero Section */}
        <CFPHero />

        {/* Overview Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Partner with a Real Estate Expert Who Understands Financial Planning</h2>
          <p className="mb-4 text-lg text-gray-900">
            As a Certified Financial Planner, you understand that real estate decisions are 
            integral to your clients' overall financial picture. Whether your clients are 
            empty nesters looking to downsize, retirees considering 55+ communities, or 
            families planning wealth transitions, real estate plays a crucial role in their 
            financial success. However, becoming a real estate expert yourself isn't necessary—or 
            practical—when you can partner with someone who specializes in real estate services 
            for financial planners.
          </p>
          <p className="mb-4 text-lg text-gray-900">
            The CFP Partnership Program allows you to offer your clients comprehensive real estate 
            services without investing in additional certifications or building internal real estate 
            expertise. Partner with Dr. Janet Duffy to provide your clients with expert real estate 
            guidance on empty nester transitions, 55+ community planning, and wealth transition 
            strategies—all while maintaining your role as their primary financial advisor.
          </p>
          <p className="mb-4 text-lg text-gray-900">
            Our partnership is specifically designed for financial planners who want to enhance 
            their service offerings with expert real estate services that complement financial 
            planning strategies. We understand the unique needs of CFPs and ensure that all real 
            estate services align with your financial planning recommendations, tax strategies, 
            and client goals.
          </p>
        </section>

        {/* Why Financial Planners Partner With Us */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Why Financial Planners Partner With Us</h2>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg mb-6 text-gray-900">
              When you partner with <strong>{businessConfig.name}</strong>, you're not just 
              adding real estate services to your practice—you're gaining a trusted collaborator 
              who understands the financial planning landscape and how real estate decisions impact 
              your clients' overall financial health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="p-8 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Seamless Integration with Your Practice</h3>
              <p className="mb-4 text-gray-900">
                We understand that real estate services must complement, not complicate, your 
                financial planning process. Our services are designed to integrate seamlessly 
                with your existing practice, providing your clients with expert real estate 
                guidance while maintaining your role as their primary financial advisor.
              </p>
              <p className="mb-4 text-gray-900">
                We communicate regularly with you, ensuring that all real estate recommendations 
                align with your financial planning strategies, tax considerations, and client goals. 
                You remain in control of the relationship while we provide specialized real estate 
                expertise that enhances your service offerings.
              </p>
              <h4 className="text-lg font-semibold mb-2">Key Integration Benefits:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Regular communication and collaboration on client cases</li>
                <li>Real estate recommendations that align with financial plans</li>
                <li>Coordinated timing for optimal financial outcomes</li>
                <li>Shared client portal for seamless information exchange</li>
              </ul>
            </div>

            <div className="p-8 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Expert Real Estate Knowledge</h3>
              <p className="mb-4 text-gray-900">
                Our team specializes in the Las Vegas real estate market, with deep expertise in 
                empty nester transitions, 55+ communities, and wealth transition properties. We 
                understand the unique characteristics of the Las Vegas market, including 
                neighborhood trends, property values, and market timing factors that impact your 
                clients' financial decisions.
              </p>
              <p className="mb-4 text-gray-900">
                This specialized knowledge allows us to provide your clients with accurate market 
                analysis, informed property recommendations, and strategic timing advice that 
                supports their financial goals and your planning recommendations.
              </p>
              <h4 className="text-lg font-semibold mb-2">Our Real Estate Expertise Includes:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Las Vegas market analysis and trends</li>
                <li>Empty nester property transitions</li>
                <li>55+ community market knowledge</li>
                <li>Wealth transition property strategies</li>
              </ul>
            </div>

            <div className="p-8 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Financial Planning Alignment</h3>
              <p className="mb-4 text-gray-900">
                Every real estate recommendation we make considers your clients' financial plans, 
                tax situations, estate planning goals, and retirement strategies. We don't just 
                help clients buy or sell properties—we ensure their real estate decisions support 
                their broader financial objectives.
              </p>
              <p className="mb-4 text-gray-900">
                This alignment is crucial for your clients' success and your practice's reputation. 
                When real estate decisions complement financial planning strategies, clients achieve 
                better outcomes, and your practice demonstrates comprehensive value that sets you 
                apart from competitors.
              </p>
              <h4 className="text-lg font-semibold mb-2">Financial Planning Considerations:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tax implications of real estate transactions</li>
                <li>Impact on retirement income planning</li>
                <li>Estate planning integration</li>
                <li>Wealth transfer optimization</li>
              </ul>
            </div>

            <div className="p-8 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Enhanced Client Value</h3>
              <p className="mb-4 text-gray-900">
                By partnering with us, you can offer your clients comprehensive real estate 
                services without the need to become a real estate expert yourself. This enhances 
                your value proposition, improves client retention, and allows you to serve your 
                clients' complete financial needs.
              </p>
              <p className="mb-4 text-gray-900">
                Your clients benefit from expert real estate guidance that's coordinated with 
                their financial plans, while you maintain your focus on financial planning 
                excellence. This collaborative approach delivers superior outcomes and strengthens 
                client relationships.
              </p>
              <h4 className="text-lg font-semibold mb-2">Value-Added Services:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Comprehensive real estate market analysis</li>
                <li>Property recommendations aligned with financial goals</li>
                <li>Transaction coordination and support</li>
                <li>Ongoing real estate portfolio management</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Section - Link to dedicated page */}
        <section className="mb-12 p-12 bg-blue-50 rounded-xl border border-blue-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">Benefits for Certified Financial Planners</h2>
            <p className="mb-6 text-lg style={{ color: '#111827' }} max-w-3xl mx-auto leading-relaxed">
              When you partner with <strong>{businessConfig.name}</strong>, you're not just 
              adding real estate services to your practice—you're gaining a trusted collaborator 
              who understands the financial planning landscape and how real estate decisions impact 
              your clients' overall financial health.
            </p>
            <Link
              href="/cfp-partners/benefits"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              View All Partnership Benefits →
            </Link>
          </div>
        </section>

        {/* Real Estate Services for CFPs */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Real Estate Services Designed for Financial Planners</h2>
          <p className="mb-4 text-lg text-gray-900">
            Our real estate services are specifically designed to support financial planners and 
            their clients. We understand that real estate decisions must align with financial 
            planning strategies, tax considerations, and wealth transition objectives. Every 
            service we offer is structured to complement your financial planning practice.
          </p>
          
          <div className="space-y-8">
            <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#111827' }}>Empty Nester Real Estate Services</h3>
              <p className="mb-4 text-lg" style={{ color: '#1f2937' }}>
                Empty nesters face unique real estate challenges that require specialized expertise. 
                When your clients' children have moved out, they often need to transition from 
                large family homes to properties that better suit their current lifestyle and 
                financial situation. This transition involves complex considerations that impact 
                their financial plans, tax situations, and retirement strategies.
              </p>
              <p className="mb-4" style={{ color: '#1f2937' }}>
                Our empty nester real estate services help your clients navigate this transition 
                successfully. We provide comprehensive market analysis to determine optimal timing 
                for selling their current property, identify suitable downsizing options that align 
                with their lifestyle goals, and coordinate the transaction to minimize tax 
                implications and maximize financial outcomes.
              </p>
              <p className="mb-4" style={{ color: '#1f2937' }}>
                We work closely with you to understand your clients' financial plans, retirement 
                goals, and estate planning objectives. This collaboration ensures that every real 
                estate recommendation supports their broader financial strategy and helps them 
                achieve their long-term goals.
              </p>
              <h4 className="text-xl font-semibold mb-3 style={{ color: '#111827' }}">Empty Nester Services Include:</h4>
              <ul className="list-disc pl-6 space-y-2 style={{ color: '#1f2937' }}">
                <li><strong>Market Timing Analysis:</strong> We analyze current Las Vegas market 
                conditions to help your clients sell at optimal times, maximizing their proceeds 
                and supporting their financial goals.</li>
                <li><strong>Property Valuation:</strong> Accurate property valuations ensure your 
                clients understand their home's true market value and can make informed financial 
                planning decisions.</li>
                <li><strong>Downsizing Recommendations:</strong> We identify properties that match 
                your clients' lifestyle needs while supporting their financial objectives and 
                retirement planning strategies.</li>
                <li><strong>Tax Strategy Coordination:</strong> We coordinate with you to ensure 
                real estate transactions are structured to minimize tax implications and maximize 
                after-tax proceeds for your clients.</li>
                <li><strong>Transaction Management:</strong> We handle all aspects of the real 
                estate transaction, allowing you to focus on financial planning while ensuring 
                smooth, efficient processes for your clients.</li>
              </ul>
            </div>

            <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#111827' }}>55+ Community Planning Services</h3>
              <p className="mb-4 text-lg" style={{ color: '#1f2937' }}>
                Las Vegas offers exceptional 55+ active adult communities that provide retirees 
                with vibrant lifestyles, excellent amenities, and maintenance-free living. However, 
                choosing the right 55+ community requires careful consideration of financial 
                implications, lifestyle factors, and long-term planning objectives.
              </p>
              <p className="mb-4" style={{ color: '#1f2937' }}>
                Our 55+ community planning services help your clients find communities that align 
                with their retirement goals, financial situation, and lifestyle preferences. We 
                provide comprehensive community analysis, including financial impact assessments, 
                amenity evaluations, and long-term value considerations that support your retirement 
                planning recommendations.
              </p>
              <p className="mb-4" style={{ color: '#1f2937' }}>
                We understand that 55+ community decisions impact your clients' retirement income 
                planning, estate planning, and overall financial security. Our services integrate 
                with your financial planning to ensure community choices support long-term financial 
                objectives and retirement success.
              </p>
              <h4 className="text-xl font-semibold mb-3 style={{ color: '#111827' }}">55+ Community Services Include:</h4>
              <ul className="list-disc pl-6 space-y-2 style={{ color: '#1f2937' }}">
                <li><strong>Community Market Analysis:</strong> Comprehensive analysis of Las Vegas 
                55+ communities, including pricing trends, availability, and value propositions 
                that support your clients' financial goals.</li>
                <li><strong>Financial Impact Assessment:</strong> Detailed analysis of how 55+ 
                community choices impact retirement income, estate planning, and long-term 
                financial security.</li>
                <li><strong>Lifestyle and Amenity Evaluation:</strong> Assessment of community 
                amenities, lifestyle offerings, and long-term value to ensure your clients find 
                communities that match their preferences and support their retirement goals.</li>
                <li><strong>Retirement Planning Integration:</strong> Coordination with your 
                retirement planning strategies to ensure community choices support income planning, 
                tax strategies, and estate planning objectives.</li>
                <li><strong>Transaction Support:</strong> Expert guidance through the 55+ community 
                purchase process, ensuring smooth transactions that align with your clients' 
                financial plans and timelines.</li>
              </ul>
            </div>

            <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#111827' }}>Wealth Transition Real Estate Planning</h3>
              <p className="mb-4 text-lg" style={{ color: '#1f2937' }}>
                Real estate is often the largest and most complex asset in your clients' portfolios, 
                and strategic real estate planning is essential for successful wealth transitions. 
                Whether your clients are planning estate transfers, optimizing tax strategies, or 
                managing multi-generational properties, real estate decisions significantly impact 
                their financial outcomes.
              </p>
              <p className="mb-4" style={{ color: '#1f2937' }}>
                Our wealth transition real estate planning services help your clients make strategic 
                real estate decisions that support their estate planning, tax optimization, and 
                wealth transfer goals. We work closely with you to understand your clients' 
                comprehensive financial situation and ensure real estate strategies align with their 
                broader wealth transition objectives.
              </p>
              <p className="mb-4" style={{ color: '#1f2937' }}>
                This integrated approach ensures that real estate decisions complement your financial 
                planning recommendations, maximize tax efficiency, and support successful wealth 
                transitions for your clients and their families.
              </p>
              <h4 className="text-xl font-semibold mb-3 style={{ color: '#111827' }}">Wealth Transition Services Include:</h4>
              <ul className="list-disc pl-6 space-y-2 style={{ color: '#1f2937' }}">
                <li><strong>Real Estate Portfolio Analysis:</strong> Comprehensive analysis of your 
                clients' real estate holdings to identify optimization opportunities, tax strategies, 
                and wealth transfer planning considerations.</li>
                <li><strong>Estate Planning Integration:</strong> Coordination with your estate 
                planning strategies to ensure real estate decisions support wealth transfer goals, 
                minimize estate taxes, and facilitate smooth transitions.</li>
                <li><strong>Tax-Efficient Strategies:</strong> Development of real estate strategies 
                that minimize tax implications, maximize after-tax value, and support your clients' 
                overall tax planning objectives.</li>
                <li><strong>Multi-Generational Planning:</strong> Assistance with real estate 
                decisions that support multi-generational wealth transfer, family legacy planning, 
                and long-term financial security for your clients' heirs.</li>
                <li><strong>Property Transition Management:</strong> Expert management of property 
                transitions, sales, and acquisitions to ensure optimal timing, pricing, and 
                financial outcomes that support your clients' wealth transition goals.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works - Link to dedicated page */}
        <section className="mb-12 p-12 bg-neutral-50 rounded-xl border border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-6 style={{ color: '#111827' }}">How the Partnership Works</h2>
            <p className="mb-6 text-lg style={{ color: '#111827' }} max-w-3xl mx-auto leading-relaxed">
              Our partnership process is designed to be straightforward and seamless, ensuring that 
              real estate services integrate smoothly with your financial planning practice. We work 
              with you to establish clear processes, communication protocols, and collaboration 
              methods that support your clients and enhance your practice.
            </p>
            <Link
              href="/cfp-partners/process"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              Learn About the Partnership Process →
            </Link>
          </div>
        </section>

        {/* Case Studies Preview */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 style={{ color: '#111827' }}">Partnership Success Stories</h2>
          <p className="mb-4 text-lg style={{ color: '#111827' }}">
            See how CFP partnerships have helped financial planners expand their services and 
            better serve their clients with expert real estate guidance:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Case Study: Empty Nester Transition</h3>
              <p className="text-sm style={{ color: '#111827' }} mb-4">
                How a CFP partnership helped clients navigate downsizing and wealth transition 
                with expert real estate guidance that aligned with their financial plans.
              </p>
              <Link
                href="/services/empty-nester"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                Learn More About Empty Nester Services →
              </Link>
            </div>
            <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Case Study: CFP Partnership Success</h3>
              <p className="text-sm style={{ color: '#111827' }} mb-4">
                A successful collaboration that expanded service offerings, improved client 
                satisfaction, and enhanced the financial planning practice's value proposition.
              </p>
              <Link
                href="/testimonials"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                Read Client Testimonials →
              </Link>
            </div>
            <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Case Study: 55+ Community Move</h3>
              <p className="text-sm style={{ color: '#111827' }} mb-4">
                Comprehensive real estate planning for clients transitioning to active adult 
                communities, coordinated with retirement planning strategies.
              </p>
              <Link
                href="/services/55-plus-communities"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                Learn More About 55+ Community Planning →
              </Link>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-900">
            * Case studies will be available in Phase 2
          </p>
        </section>

        {/* Resources for CFPs */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Resources for CFP Partners</h2>
          <p className="mb-4 text-lg text-gray-900">
            As a CFP partner, you'll have access to specialized real estate resources designed to 
            support your practice and your clients. These resources enhance your ability to serve 
            clients comprehensively while maintaining your focus on financial planning excellence.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Client Education Materials</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-900 dark:text-gray-200">
                <li>Empty nester real estate transition guides</li>
                <li>55+ community planning resources</li>
                <li>Wealth transition real estate materials</li>
                <li>Market analysis and trend reports</li>
                <li>Real estate decision-making frameworks</li>
              </ul>
            </div>
            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Partnership Marketing Materials</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-900 dark:text-gray-200">
                <li>Partnership program descriptions</li>
                <li>Service offering presentations</li>
                <li>Client communication templates</li>
                <li>Marketing collateral and materials</li>
                <li>Partnership success stories</li>
              </ul>
            </div>
            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Case Study Examples</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-900 dark:text-gray-200">
                <li>Empty nester transition case studies</li>
                <li>55+ community planning examples</li>
                <li>Wealth transition success stories</li>
                <li>Partnership collaboration examples</li>
                <li>Client outcome demonstrations</li>
              </ul>
            </div>
            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Direct Consultation Support</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-900 dark:text-gray-200">
                <li>Complex real estate scenario analysis</li>
                <li>Market timing consultations</li>
                <li>Property evaluation support</li>
                <li>Transaction coordination assistance</li>
                <li>Ongoing partnership support</li>
              </ul>
            </div>
          </div>
          <Link
            href="/resources"
            className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            View All Resources →
          </Link>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions About CFP Partnerships</h2>
          <div className="max-w-4xl mx-auto">
            <TargetFAQ category="financialPlanner" />
            <div className="space-y-6 mt-8">
              {targetFAQQuestions.financialPlanner.slice(0, 3).map((faq, index) => (
                <div key={index} className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">{faq.question}</h3>
                  <p className="text-gray-900 dark:text-gray-200">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Become a CFP Partner</h2>
          <p className="mb-6 text-lg text-gray-900">
            Ready to expand your service offerings and provide your clients with expert real 
            estate services that complement your financial planning? Let's discuss how a 
            partnership can benefit your practice, enhance your value proposition, and improve 
            your clients' outcomes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Connect with a Fiduciary-Minded Real Estate Advisor
            </Link>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/40 transition-colors font-medium"
            >
              Schedule Partnership Call
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Learn More</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="/resources" className="text-blue-600 dark:text-blue-400 hover:underline">
                View CFP Partner Resources
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-blue-600 dark:text-blue-400 hover:underline">
                Learn About Dr. Janet Duffy
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">
                Read Latest Articles
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-blue-600 dark:text-blue-400 hover:underline">
                Explore Our Real Estate Services
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  )
}
