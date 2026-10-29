import { businessConfig } from 'app/config/business'
import { baseUrl } from 'app/sitemap'

interface HowToStep {
  name: string
  text: string
  url?: string
  image?: string
}

interface HowToSchemaProps {
  name: string
  description: string
  steps: HowToStep[]
  totalTime?: string // ISO 8601 duration format, e.g., 'PT30M' for 30 minutes
  estimatedCost?: {
    currency: string
    value: string
  }
  pageUrl: string
}

/**
 * HowTo Schema Component (2025 Enhanced)
 * Adds HowTo structured data for step-by-step processes
 * Enables rich snippets in search results
 * 
 * @see https://developers.google.com/search/docs/appearance/structured-data/how-to
 * 
 * Usage:
 * <HowToSchema
 *   name="How to Plan Your Wealth Transition"
 *   description="A comprehensive guide to wealth transition planning"
 *   steps={[
 *     { name: "Step 1", text: "Initial consultation", url: "/process#step-1" },
 *     { name: "Step 2", text: "Assessment & Planning", url: "/process#step-2" }
 *   ]}
 *   totalTime="PT2H"
 *   pageUrl="/process"
 * />
 */
export function HowToSchema({
  name,
  description,
  steps,
  totalTime,
  estimatedCost,
  pageUrl,
}: HowToSchemaProps) {
  if (!steps || steps.length === 0) {
    return null
  }

  const fullUrl = pageUrl.startsWith('http') ? pageUrl : `${baseUrl}${pageUrl}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${fullUrl}#howto`,
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url && {
        url: step.url.startsWith('http') ? step.url : `${baseUrl}${step.url}`,
      }),
      ...(step.image && {
        image: step.image.startsWith('http') ? step.image : `${baseUrl}${step.image}`,
      }),
    })),
    ...(totalTime && { totalTime }),
    ...(estimatedCost && {
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: estimatedCost.currency,
        value: estimatedCost.value,
      },
    }),
    // Publisher information
    publisher: {
      '@type': 'Organization',
      name: businessConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/og?title=${encodeURIComponent(businessConfig.name)}`,
      },
    },
    // 2025: Additional properties
    inLanguage: 'en-US',
    mainEntity: {
      '@type': 'WebPage',
      '@id': fullUrl,
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
