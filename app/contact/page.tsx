import type { Metadata } from 'next'
import { businessConfig, getPhoneLink, getGoogleMapsDirectionsUrl } from 'app/config/business'
import { baseUrl } from 'app/sitemap'
import { LocalBusinessSchema } from 'app/components/google/local-business-schema'
import { GoogleMaps } from 'app/components/google/google-maps'
import { ContactButtons } from 'app/components/google/contact-buttons'
import { TargetFAQ, targetFAQQuestions } from 'app/components/faq-target-questions'
import { ContactHero } from 'app/components/contact/contact-hero'
import { ContactInfoSection } from 'app/components/contact/contact-info-section'
import { EnhancedContactForm } from 'app/components/forms/enhanced-contact-form'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `Contact Us | Real Estate Services for Financial Planners | ${businessConfig.name}`,
  description: `Contact Dr. Janet Duffy for real estate services that support financial planners in Las Vegas, Nevada. Schedule a consultation, learn about CFP partnerships, or get directions to our office.`,
  keywords: [
    'real estate services Las Vegas contact',
    'CFP real estate support contact',
    'empty nester real estate contact',
    '55+ communities Las Vegas contact',
    'wealth transition planning Las Vegas contact',
    'estate planning advisor contact',
    'financial planner Las Vegas',
    'schedule consultation Las Vegas',
  ],
  openGraph: {
    title: `Contact Us | Real Estate Services for Financial Planners | ${businessConfig.name}`,
    description: `Contact Dr. Janet Duffy for real estate services that support financial planners in Las Vegas, Nevada.`,
    url: `${baseUrl}/contact`,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <>
      <LocalBusinessSchema />
      
      {/* Breadcrumb - outside prose container */}
      <nav className="mb-8 text-sm text-gray-900" aria-label="Breadcrumb">
        <ol className="flex space-x-2 list-none">
          <li className="flex items-center"><Link href="/" className="hover:underline">Home</Link></li>
          <li className="flex items-center">/</li>
          <li className="flex items-center text-neutral-900 dark:text-neutral-100">Contact</li>
        </ol>
      </nav>
      <article className="prose prose-lg max-w-none">

        {/* Improved Hero Section */}
        <ContactHero />

        {/* Contact Buttons */}
        <div className="mb-12">
          <ContactButtons className="mb-8" showReviews={true} />
        </div>

        {/* Why Contact Us */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Why Contact Us for Real Estate Services</h2>
          <p className="mb-4 text-lg text-gray-900">
            If you're a Certified Financial Planner looking to enhance your practice with expert 
            real estate services, or if you're a client seeking real estate guidance that 
            complements your financial planning, we're here to help. Our real estate services are 
            specifically designed to support financial planners and their clients, ensuring that 
            every property decision aligns with financial planning goals, tax strategies, and 
            wealth transition objectives.
          </p>
          <p className="mb-4 text-lg text-gray-900">
            Whether you need support with empty nester real estate transitions, 55+ community 
            planning, wealth transition strategies, or comprehensive real estate services for your 
            financial planning practice, we provide expert guidance that complements your 
            financial planning recommendations and supports optimal client outcomes.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#111827' }}>For Certified Financial Planners</h3>
              <p className="mb-4" style={{ color: '#1f2937' }}>
                If you're a CFP looking to offer comprehensive real estate services to your 
                clients, we can help. Our partnership program provides expert real estate 
                guidance that seamlessly integrates with your financial planning practice, 
                enhancing your value proposition and improving client outcomes.
              </p>
              <h4 className="text-lg font-semibold mb-2" style={{ color: '#111827' }}>Partnership Benefits:</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm" style={{ color: '#1f2937' }}>
                <li>Expert real estate services for your clients</li>
                <li>Seamless integration with financial planning</li>
                <li>Enhanced value proposition</li>
                <li>Improved client retention</li>
                <li>Comprehensive service offerings</li>
              </ul>
            </div>
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#111827' }}>For Financial Planning Clients</h3>
              <p className="mb-4" style={{ color: '#1f2937' }}>
                If you're working with a financial planner and need expert real estate guidance, 
                we can help. Our services ensure that your real estate decisions support your 
                financial plans, tax strategies, and wealth transition goals, coordinated with 
                your financial planner's recommendations.
              </p>
              <h4 className="text-lg font-semibold mb-2" style={{ color: '#111827' }}>Client Benefits:</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm" style={{ color: '#1f2937' }}>
                <li>Real estate guidance aligned with financial plans</li>
                <li>Coordination with your financial planner</li>
                <li>Expert Las Vegas market knowledge</li>
                <li>Tax-efficient strategies</li>
                <li>Comprehensive property support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Improved Contact Information Section */}
        <ContactInfoSection />

        {/* Contact Form - Enhanced */}
        <section className="mb-12 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50 border-2 border-blue-100 rounded-2xl shadow-xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Send Us a Message</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                Use the form below to contact us about real estate services for financial planners, 
                CFP partnership opportunities, empty nester transitions, 55+ community planning, or 
                any questions about how we can support your financial planning practice with expert 
                real estate services.
              </p>
            </div>
            <EnhancedContactForm />
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100"
                placeholder="(702) 555-1234"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-900">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              >
                <option value="">Select a subject...</option>
              <option value="cfp-partnership">CFA/CFP Partnership Inquiry</option>
              <option value="buyer-representation">Buyer Representation Services</option>
              <option value="seller-representation">Seller Representation Services</option>
              <option value="investment-property">Investment Property Services</option>
              <option value="market-analysis">Market Analysis & Consulting</option>
              <option value="empty-nester">Empty Nester Real Estate Services</option>
              <option value="55-communities">55+ Community Planning</option>
              <option value="luxury-homes">Luxury Home Services</option>
              <option value="consultation">Schedule Free Consultation</option>
              <option value="resources">Resource Request</option>
              <option value="general">General Inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100"
                placeholder="Tell us about your real estate service needs, partnership interests, or questions about how we can support your financial planning practice..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-xl transition-all font-semibold text-lg transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
          <p className="mt-6 text-sm text-gray-700 text-center leading-relaxed">
            * Required fields. We'll respond to your inquiry within 24-48 hours. For urgent 
            matters related to real estate transactions or financial planning coordination, 
            please call us directly at <a href={getPhoneLink()} className="text-blue-600 hover:underline font-semibold">{businessConfig.phone}</a>.
          </p>
          </div>
        </section>

        {/* What to Expect */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">What to Expect When You Contact Us</h2>
          <p className="mb-6 text-lg">
            When you contact us about real estate services for financial planners, you can 
            expect a professional, collaborative approach that focuses on understanding your 
            needs and how we can support your financial planning practice or assist with your 
            real estate goals.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Initial Consultation Process</h3>
              <p className="mb-4 text-gray-900 dark:text-gray-200">
                Our initial consultation is designed to understand your specific needs, whether 
                you're a financial planner exploring partnership opportunities or a client 
                seeking real estate guidance. We'll discuss your situation, goals, and how our 
                real estate services can support your objectives.
              </p>
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Consultation Includes:</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm text-gray-900 dark:text-gray-200">
                <li>Discussion of your real estate service needs</li>
                <li>Review of your financial planning context</li>
                <li>Assessment of how we can support your goals</li>
                <li>Overview of our services and partnership options</li>
                <li>Next steps and recommended approach</li>
              </ul>
            </div>

            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Response Time and Communication</h3>
              <p className="mb-4 text-gray-900 dark:text-gray-200">
                We understand that real estate decisions often have timing considerations that 
                impact financial planning strategies. We respond to all inquiries within 24-48 
                hours and prioritize urgent matters related to active transactions or time-sensitive 
                financial planning coordination.
              </p>
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Communication Methods:</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm text-gray-900 dark:text-gray-200">
                <li>Email responses within 24-48 hours</li>
                <li>Phone consultations by appointment</li>
                <li>In-person meetings at our Las Vegas office</li>
                <li>Virtual consultations for remote clients</li>
                <li>Regular updates on active projects</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Office Location - Enhanced */}
        <section className="mb-12">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Find Us: Las Vegas Office Location</h2>
            <p className="mb-6 text-lg md:text-xl text-gray-900 max-w-3xl leading-relaxed font-medium">
              Our office is conveniently located at <strong>8925 W Post Rd</strong> in Las Vegas, Nevada, serving financial planners 
              and their clients throughout the Las Vegas metropolitan area. Visit us to discuss 
              real estate services, explore partnership opportunities, or learn more about how we 
              can support your financial planning practice.
            </p>
          </div>
          
          {/* Office Complex Aerial View */}
          <div className="mb-6 rounded-xl overflow-hidden shadow-xl relative h-64 md:h-96">
            <Image
              src="/images/office-complex-aerial.jpg"
              alt="Aerial view of office complex at 8925 W Post Rd, Las Vegas - showing our professional business location"
              fill
              className="object-cover"
              sizes="100vw"
              loading="lazy"
              priority={false}
            />
          </div>
          
          <div className="mb-6">
            <GoogleMaps width="100%" height="450px" />
          </div>
          <p className="text-sm text-gray-900 mb-4">
            <a
              href={getGoogleMapsDirectionsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Get Directions →
            </a>
          </p>
          <p className="text-lg">
            Our office is easily accessible from throughout the Las Vegas area, with convenient 
            parking and meeting facilities designed to accommodate financial planners and their 
            clients. We welcome in-person consultations and are happy to discuss how our real 
            estate services can support your practice.
          </p>
        </section>

        {/* Service Area */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Service Area: Las Vegas Metropolitan Region</h2>
          <p className="mb-4 text-lg">
            We serve financial planners and their clients throughout the Las Vegas metropolitan 
            area, providing expert real estate services including empty nester transitions, 55+ 
            community planning, and wealth transition strategies across the region.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Primary Service Areas</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            {businessConfig.serviceArea.regions.map((region) => (
              <li key={region} className="text-lg">{region}, Nevada</li>
            ))}
          </ul>
          <p className="mb-4 text-lg">
            Each service area receives specialized attention, with our team maintaining detailed 
            knowledge of local market conditions, property trends, and community characteristics 
            that impact real estate decisions and financial planning outcomes. Whether your clients 
            are in Las Vegas, Henderson, Summerlin, or North Las Vegas, we provide expert real 
            estate guidance that supports their financial goals.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Extended Service Coverage</h3>
          <p className="mb-4">
            While our primary focus is the Las Vegas metropolitan area, we also provide real 
            estate services to financial planners and clients in surrounding regions. Contact us 
            to discuss how we can support your practice or assist with real estate needs in your 
            specific area.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto">
            <TargetFAQ category="financialPlanner" />
            <div className="space-y-6 mt-8">
              {targetFAQQuestions.financialPlanner.map((faq, index) => (
                <div key={index} className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">{faq.question}</h3>
                  <p className="text-gray-900 dark:text-gray-200">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced */}
        <section className="mb-12 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-lg md:text-xl text-blue-50 max-w-2xl mx-auto leading-relaxed font-medium">
              Whether you're a CERTIFIED Financial Advisor exploring realtor service partnerships 
              or a client seeking expert real estate guidance that complements your financial planning, 
              we're here to help. Contact us today to schedule a free consultation and learn how our 
              real estate services can support your practice or assist with your property goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all font-semibold text-lg transform hover:-translate-y-0.5"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/cfp-partners"
                className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all font-semibold text-lg"
              >
                Learn About CFA Partnerships
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Before You Contact</h2>
          <p className="mb-4 text-lg">
            Learn more about our real estate services, partnership opportunities, and how we can 
            support your financial planning practice:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="/cfp-partners" className="text-blue-600 dark:text-blue-400 hover:underline">
                Learn About CFP Partnership Program
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-blue-600 dark:text-blue-400 hover:underline">
                Explore Our Real Estate Services
              </Link>
            </li>
            <li>
              <Link href="/resources" className="text-blue-600 dark:text-blue-400 hover:underline">
                View Free Real Estate Resources
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-blue-600 dark:text-blue-400 hover:underline">
                Learn About Dr. Janet Duffy
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">
                Read Latest Real Estate Articles
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  )
}
