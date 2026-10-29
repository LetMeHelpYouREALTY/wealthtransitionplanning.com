/**
 * Trust Badges Component
 * Displays professional certifications, credentials, and trust indicators
 * Critical for financial services websites targeting CFPs
 */

interface TrustBadge {
  icon: React.ReactNode
  text: string
  description?: string
}

const trustBadges: TrustBadge[] = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    text: 'Licensed REALTOR®',
    description: 'Nevada Real Estate License',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    text: 'CFP Partner',
    description: 'Trusted by Financial Planners',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: 'Fiduciary Approach',
    description: 'Client-First Service',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    text: 'Berkshire Hathaway',
    description: 'HomeServices Network',
  },
]

export function TrustBadges() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white border-t border-b border-blue-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Trusted by Financial Planning Professionals
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our credentials and commitment to excellence make us the preferred real estate partner for CFPs
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="card-professional p-6 text-center group"
            >
              <div className="flex justify-center mb-3 text-blue-600 group-hover:text-blue-700 transition-colors">
                {badge.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">
                {badge.text}
              </h3>
              {badge.description && (
                <p className="text-sm text-gray-600">
                  {badge.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}







