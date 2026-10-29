import { businessConfig } from 'app/config/business'
import { FinancialCheckupCTA } from 'app/components/services/financial-checkup-cta'
import Link from 'next/link'

/**
 * Enhanced Professional Homepage Hero Section
 * Sophisticated design targeting CFP professionals
 * Navy/gold color scheme for trust and premium positioning
 */
export function HomeHero() {
  return (
    <section className="relative mb-20 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full mb-6 shadow-sm">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm font-semibold text-gray-900">Trusted by CFP Professionals</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight tracking-tight">
            Real Estate Expertise for{' '}
            <span className="text-gradient">Financial Planning Professionals</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
            Supporting CERTIFIED Financial Planners and fiduciary advisors in Las Vegas with 
            comprehensive real estate services that complement your financial planning practice.
          </p>

          {/* Key Value Propositions */}
          <div className="grid md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-blue-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Fiduciary Approach</h3>
              <p className="text-sm text-gray-600">Client-first real estate services aligned with your financial planning values</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-blue-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">CFP Partnership</h3>
              <p className="text-sm text-gray-600">Seamless integration with your existing financial planning practice</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-blue-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-sm text-gray-600">Las Vegas market expertise for empty nesters and 55+ communities</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <FinancialCheckupCTA />
            <Link
              href="/cfp-partners"
              className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all font-bold text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Learn About CFP Partnerships
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4">Trusted by financial planning professionals</p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400">
              <span className="text-xs font-semibold">Licensed REALTOR®</span>
              <span className="text-xs">•</span>
              <span className="text-xs font-semibold">Berkshire Hathaway HomeServices</span>
              <span className="text-xs">•</span>
              <span className="text-xs font-semibold">Las Vegas Market Expert</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

