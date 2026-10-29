import Link from 'next/link'

interface DownloadableResource {
  title: string
  description: string
  type: 'PDF' | 'Guide' | 'Checklist' | 'Whitepaper' | 'Template'
  downloadUrl?: string
  gated: boolean
  icon: React.ReactNode
}

interface DownloadableResourceProps {
  resource: DownloadableResource
}

/**
 * Downloadable Resource Card Component
 * For gated content (email capture) and free downloads
 * Professional design for CFP audience
 */
export function DownloadableResource({ resource }: DownloadableResourceProps) {
  return (
    <div className="card-professional p-6 h-full flex flex-col">
      {/* Icon */}
      <div className="mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
          {resource.icon}
        </div>
      </div>

      {/* Type Badge */}
      <div className="mb-3">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
          {resource.type}
        </span>
        {resource.gated && (
          <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
            Premium
          </span>
        )}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
      <p className="text-gray-700 mb-6 flex-1 leading-relaxed">{resource.description}</p>

      {/* CTA */}
      {resource.gated ? (
        <Link
          href={`/resources/download?resource=${encodeURIComponent(resource.title)}`}
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Download Free
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </Link>
      ) : (
        <a
          href={resource.downloadUrl}
          download
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Download Now
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
      )}
    </div>
  )
}







