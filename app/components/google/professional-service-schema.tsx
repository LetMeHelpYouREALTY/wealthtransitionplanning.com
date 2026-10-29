import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'

/**
 * ProfessionalService Schema Component
 * Adds ProfessionalService structured data for financial planning and real estate services
 * Should be included on service-related pages
 */
export function ProfessionalServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}#service`,
    name: `${businessConfig.name} - Real Estate Services for Financial Planners`,
    provider: {
      '@type': 'LocalBusiness',
      name: businessConfig.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: businessConfig.address.street,
        addressLocality: businessConfig.address.city,
        addressRegion: businessConfig.address.state,
        postalCode: businessConfig.address.zipCode,
        addressCountry: businessConfig.address.country,
      },
      telephone: businessConfig.phoneFormatted,
      email: businessConfig.email,
    },
    areaServed: {
      '@type': 'City',
      name: businessConfig.serviceArea.city,
    },
    serviceType: [
      'Real Estate Services for Financial Planners',
      'Downsizer Real Estate Transitions',
      '55+ Community Planning',
      'Wealth Transition Real Estate Planning',
      'CERTIFIED Financial Planner Support',
      'Fiduciary Real Estate Services',
    ],
    description: 'Professional real estate services specifically designed to support CERTIFIED Financial Planners and fiduciary advisors in Las Vegas, Nevada. Services include downsizer transitions, 55+ community planning, and wealth transition real estate strategies.',
    url: baseUrl,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '10',
      bestRating: '5',
      worstRating: '1',
    },
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

