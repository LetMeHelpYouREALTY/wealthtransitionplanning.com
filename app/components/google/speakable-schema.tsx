import { baseUrl } from 'app/sitemap'

interface SpeakableSchemaProps {
  /**
   * URL of the current page
   */
  pageUrl: string
  /**
   * CSS selectors for speakable content (e.g., '.article-summary', '#main-heading')
   * These identify the parts of the page that are most suitable for text-to-speech
   */
  cssSelectors: string[]
}

/**
 * Speakable Schema Component (2025 Voice Search Optimization)
 * Adds Speakable structured data for Google Assistant and voice search
 * 
 * Voice search is increasingly important in 2025 with AI assistants
 * This helps Google identify content suitable for text-to-speech
 * 
 * @see https://developers.google.com/search/docs/appearance/structured-data/speakable
 * 
 * Usage:
 * <SpeakableSchema 
 *   pageUrl="/services/comprehensive"
 *   cssSelectors={['h1', '.service-summary', '.key-benefits']}
 * />
 */
export function SpeakableSchema({ pageUrl, cssSelectors }: SpeakableSchemaProps) {
  if (!cssSelectors || cssSelectors.length === 0) {
    return null
  }

  const fullUrl = pageUrl.startsWith('http') ? pageUrl : `${baseUrl}${pageUrl}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${fullUrl}#webpage`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: cssSelectors,
    },
    url: fullUrl,
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
