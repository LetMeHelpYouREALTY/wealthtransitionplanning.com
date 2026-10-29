import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'

/**
 * Person Schema Component (2025 Enhanced for E-E-A-T)
 * Adds Person structured data for Dr. Jan Duffy
 * Critical for E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
 * 
 * @see https://developers.google.com/search/docs/appearance/structured-data/profile-page
 */
export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}#person-dr-jan-duffy`,
    name: businessConfig.owner,
    givenName: 'Jan',
    familyName: 'Duffy',
    honorificPrefix: 'Dr.',
    jobTitle: 'REALTOR® and Wealth Transition Specialist',
    description: `${businessConfig.owner} is a REALTOR® specializing in wealth transition planning, empty nester real estate services, and 55+ community planning in Las Vegas, Nevada.`,
    url: `${baseUrl}/about`,
    image: `${baseUrl}/og?title=${encodeURIComponent(businessConfig.owner)}`,
    email: businessConfig.email,
    telephone: businessConfig.phoneFormatted,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessConfig.address.street,
      addressLocality: businessConfig.address.city,
      addressRegion: businessConfig.address.state,
      postalCode: businessConfig.address.zipCode,
      addressCountry: businessConfig.address.country,
    },
    // 2025: Professional credentials for E-E-A-T
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Real Estate Education',
    },
    // Professional licenses
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional License',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Nevada Real Estate Division',
      },
      credentialID: businessConfig.licenseNumber,
    },
    // Professional affiliations
    memberOf: {
      '@type': 'Organization',
      name: businessConfig.brokerage,
    },
    // Areas of expertise
    knowsAbout: [
      'Wealth Transition Planning',
      'Empty Nester Real Estate',
      '55+ Community Planning',
      'Real Estate for Financial Planners',
      'Estate Planning',
      'Retirement Planning',
      'Las Vegas Real Estate Market',
      'Fiduciary Real Estate Services',
    ],
    // Professional services
    offers: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Wealth Transition Planning Services',
        description: 'Comprehensive real estate services for wealth transition planning in Las Vegas, Nevada.',
      },
    },
    // Same as organization for consistency
    sameAs: [
      businessConfig.googleBusinessProfileUrl,
      ...Object.values(businessConfig.socialMedia).filter(Boolean),
    ].filter(Boolean),
    // 2025: Aggregate rating for trust
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
