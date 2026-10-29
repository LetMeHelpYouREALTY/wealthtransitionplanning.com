import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'

/**
 * Organization Schema Component (2025 Enhanced)
 * Adds comprehensive Organization structured data for Google Search
 * Supports E-E-A-T signals and rich results
 * 
 * @see https://developers.google.com/search/docs/appearance/structured-data/organization
 */
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}#organization`,
    name: businessConfig.name,
    legalName: businessConfig.legalName,
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/og?title=${encodeURIComponent(businessConfig.name)}`,
      width: 1200,
      height: 630,
    },
    image: `${baseUrl}/og?title=${encodeURIComponent(businessConfig.name)}`,
    description: businessConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessConfig.address.street,
      addressLocality: businessConfig.address.city,
      addressRegion: businessConfig.address.state,
      postalCode: businessConfig.address.zipCode,
      addressCountry: businessConfig.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: businessConfig.phoneFormatted,
      contactType: 'Customer Service',
      areaServed: businessConfig.serviceArea.state,
      availableLanguage: 'English',
    },
    sameAs: [
      businessConfig.googleBusinessProfileUrl,
      ...Object.values(businessConfig.socialMedia).filter(Boolean),
    ].filter(Boolean),
    // 2025: Enhanced for E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
    founder: {
      '@type': 'Person',
      name: businessConfig.owner,
      jobTitle: 'REALTOR® and Wealth Transition Specialist',
    },
    // Aggregate rating for trust signals
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '10',
      bestRating: '5',
      worstRating: '1',
    },
    // Professional credentials and certifications
    knowsAbout: [
      'CERTIFIED Financial Planner Support',
      'Fiduciary Financial Advisor Services',
      'Empty Nester Real Estate Transitions',
      '55+ Community Planning',
      'Wealth Transition Real Estate',
      'Las Vegas Real Estate Market',
      'Estate Planning',
      'Retirement Planning',
    ],
    // Service area for local SEO
    areaServed: {
      '@type': 'City',
      name: businessConfig.serviceArea.city,
    },
    // 2025: Additional properties for AI/semantic search
    keywords: businessConfig.keywords.join(', '),
    // Industry classification
    industry: 'Real Estate Services',
    // Legal structure
    legalStructure: 'LLC',
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
