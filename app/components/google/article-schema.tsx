import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'

interface ArticleSchemaProps {
  headline: string
  description: string
  datePublished: string
  dateModified?: string
  authorName?: string
  slug: string
  image?: string
  keywords?: string[]
  wordCount?: number
}

/**
 * Article Schema Component (2025 Enhanced)
 * Adds comprehensive Article structured data for blog posts
 * Optimized for Google Discover and News
 * 
 * @see https://developers.google.com/search/docs/appearance/structured-data/article
 */
export function ArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  authorName = businessConfig.owner,
  slug,
  image,
  keywords = [],
  wordCount,
}: ArticleSchemaProps) {
  const articleUrl = `${baseUrl}/blog/${slug}`
  const articleImage = image
    ? image.startsWith('http')
      ? image
      : `${baseUrl}${image}`
    : `${baseUrl}/og?title=${encodeURIComponent(headline)}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${articleUrl}#article`,
    headline,
    description,
    image: {
      '@type': 'ImageObject',
      url: articleImage,
      width: 1200,
      height: 630,
    },
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
      url: `${baseUrl}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: businessConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/og?title=${encodeURIComponent(businessConfig.name)}`,
        width: 1200,
        height: 630,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    url: articleUrl,
    // 2025: Enhanced properties for better indexing
    articleSection: 'Wealth Transition Planning',
    articleBody: description, // Summary/description
    keywords: keywords.length > 0 ? keywords.join(', ') : businessConfig.keywords.join(', '),
    // Word count if provided
    ...(wordCount && { wordCount }),
    // In-language for internationalization
    inLanguage: 'en-US',
    // 2025: Speakable content for voice search
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.article-summary', '.article-intro'],
    },
    // Creative work properties
    creativeWorkStatus: 'Published',
    // Copyright
    copyrightHolder: {
      '@type': 'Organization',
      name: businessConfig.name,
    },
    copyrightYear: new Date(datePublished).getFullYear(),
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
