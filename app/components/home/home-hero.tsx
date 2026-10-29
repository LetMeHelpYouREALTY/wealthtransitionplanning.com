import { businessConfig } from 'app/config/business'
import { FinancialCheckupCTA } from 'app/components/services/financial-checkup-cta'

/**
 * Improved Homepage Hero Section
 * Modern, professional design with excellent readability
 */
export function HomeHero() {
  return (
    <section className="mb-20 text-center bg-white py-16 px-4 rounded-2xl shadow-lg border border-gray-200">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
          Real Estate Services That Support Financial Planners and Their Clients in Las Vegas
        </h1>
        <p className="text-2xl md:text-3xl text-gray-900 mb-8 max-w-4xl mx-auto leading-relaxed font-semibold">
          <strong className="font-bold">{businessConfig.name}</strong> provides comprehensive real estate services 
          specifically designed to support CERTIFIED Financial Planners (CFPs) and fiduciary 
          financial advisors in Las Vegas, Nevada. We specialize in downsizer real estate 
          transitions, 55+ community planning, and wealth transition strategies that complement 
          your financial planning services.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <FinancialCheckupCTA />
        </div>
      </div>
    </section>
  )
}

