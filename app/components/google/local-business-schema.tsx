import { businessConfig, getBusinessHoursSchema } from 'app/config/business'
import { baseUrl } from 'app/sitemap'

/**
 * LocalBusiness Schema Component
 * Adds JSON-LD structured data for Google Business Profile integration
 * Should be included on all pages
 */
export function LocalBusinessSchema() {
  const businessHours = getBusinessHoursSchema()
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}#organization`,
    name: businessConfig.name,
    legalName: businessConfig.legalName,
    image: `${baseUrl}/og?title=${encodeURIComponent(businessConfig.name)}`,
    url: baseUrl,
    telephone: businessConfig.phoneFormatted,
    email: businessConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessConfig.address.street,
      addressLocality: businessConfig.address.city,
      addressRegion: businessConfig.address.state,
      postalCode: businessConfig.address.zipCode,
      addressCountry: businessConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      // UPDATE: Add actual coordinates from your GBP
      latitude: 36.1699, // Las Vegas approximate - UPDATE with actual
      longitude: -115.1398, // Las Vegas approximate - UPDATE with actual
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: businessConfig.serviceArea.city,
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 36.1699, // UPDATE with actual
        longitude: -115.1398, // UPDATE with actual
      },
    },
    // Additional properties for realtor services
    knowsAbout: [
      'Real Estate Services for Financial Planners',
      'Buyer Representation',
      'Seller Representation',
      'Investment Property Services',
      'Empty Nester Real Estate Transitions',
      '55+ Community Planning',
      'Wealth Transition Real Estate',
      'Luxury Home Sales',
      'Las Vegas Real Estate Market',
      'CFA Client Real Estate Services',
    ],
    makesOffer: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Real Estate Services for Financial Planners',
        description: 'Professional realtor services designed to support CERTIFIED Financial Advisors (CFAs) and their clients in Las Vegas.',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Buyer Representation',
            provider: {
              '@type': 'LocalBusiness',
              name: businessConfig.name,
            },
          },
          position: 1,
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Seller Representation',
            provider: {
              '@type': 'LocalBusiness',
              name: businessConfig.name,
            },
          },
          position: 2,
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Investment Property Services',
            provider: {
              '@type': 'LocalBusiness',
              name: businessConfig.name,
            },
          },
          position: 3,
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Empty Nester Real Estate Services',
            provider: {
              '@type': 'LocalBusiness',
              name: businessConfig.name,
            },
          },
          position: 4,
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '55+ Community Planning',
            provider: {
              '@type': 'LocalBusiness',
              name: businessConfig.name,
            },
          },
          position: 5,
        },
      ],
    },
    sameAs: [
      businessConfig.googleBusinessProfileUrl,
      ...Object.values(businessConfig.socialMedia).filter(Boolean),
    ].filter(Boolean),
  }

  // Add Google Maps Place ID if available
  if (businessConfig.googleMapsPlaceId) {
    schema['@id'] = `https://www.google.com/maps/place/?q=place_id:${businessConfig.googleMapsPlaceId}`
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

