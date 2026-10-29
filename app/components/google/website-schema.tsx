import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'

/**
 * WebSite Schema Component (2025 Enhanced)
 * Adds WebSite structured data with SearchAction for sitelinks search box
 * 
 * @see https://developers.google.com/search/docs/appearance/structured-data/sitelinks-searchbox
 */
export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}#website`,
    name: businessConfig.name,
    alternateName: 'WTP',
    url: baseUrl,
    description: businessConfig.description,
    publisher: {
      '@type': 'Organization',
      name: businessConfig.name,
    },
    // 2025: SearchAction for sitelinks search box (if search functionality exists)
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    // In-language property for internationalization
    inLanguage: 'en-US',
    // Copyright holder
    copyrightHolder: {
      '@type': 'Organization',
      name: businessConfig.name,
    },
    // Copyright year
    copyrightYear: new Date().getFullYear(),
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
