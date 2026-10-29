import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'

interface Review {
  author: string
  reviewBody: string
  reviewRating: number
  datePublished?: string
}

interface ReviewSchemaProps {
  reviews: Review[]
}

/**
 * Review Schema Component (2025 Enhanced)
 * Adds Review structured data for testimonials page
 * Important for E-E-A-T and trust signals
 * 
 * @see https://developers.google.com/search/docs/appearance/structured-data/review-snippet
 */
export function ReviewSchema({ reviews }: ReviewSchemaProps) {
  if (!reviews || reviews.length === 0) {
    return null
  }

  // Calculate aggregate rating
  const totalRating = reviews.reduce((sum, review) => sum + review.reviewRating, 0)
  const averageRating = totalRating / reviews.length
  const reviewCount = reviews.length

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}#localbusiness`,
    name: businessConfig.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating.toFixed(1),
      reviewCount: reviewCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      reviewBody: review.reviewBody,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.reviewRating.toString(),
        bestRating: '5',
        worstRating: '1',
      },
      ...(review.datePublished && { datePublished: review.datePublished }),
    })),
  }

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
