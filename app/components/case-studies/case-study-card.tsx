import Link from 'next/link'

interface CaseStudy {
  title: string
  clientType: string
  challenge: string
  solution: string
  result: string
  slug: string
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy
  featured?: boolean
}

/**
 * Case Study Card Component
 * Displays anonymized case studies for CFP audience
 * Builds trust through real-world examples
 */
export function CaseStudyCard({ caseStudy, featured = false }: CaseStudyCardProps) {
  return (
    <div
      className={`card-professional p-8 h-full flex flex-col ${
        featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-3">
          {caseStudy.clientType}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{caseStudy.title}</h3>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-1 uppercase tracking-wide">
            Challenge
          </h4>
          <p className="text-gray-900 leading-relaxed">{caseStudy.challenge}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-1 uppercase tracking-wide">
            Solution
          </h4>
          <p className="text-gray-900 leading-relaxed">{caseStudy.solution}</p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
          <h4 className="text-sm font-semibold text-green-800 mb-1 uppercase tracking-wide">
            Result
          </h4>
          <p className="text-green-900 font-medium">{caseStudy.result}</p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <Link
          href={`/case-studies/${caseStudy.slug}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm group"
        >
          Read Full Case Study
          <svg
            className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}







