import { baseUrl } from 'app/sitemap'

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

/**
 * BreadcrumbList Schema Component (2025 Enhanced)
 * Adds BreadcrumbList structured data for enhanced navigation in search results
 * 
 * @see https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
 * 
 * Usage:
 * <BreadcrumbSchema items={[
 *   { name: 'Home', url: '/' },
 *   { name: 'Services', url: '/services' },
 *   { name: 'Comprehensive Planning', url: '/services/comprehensive' }
 * ]} />
 */
export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  if (!items || items.length === 0) {
    return null
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
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

/**
 * Helper function to generate breadcrumb items from pathname
 */
export function generateBreadcrumbItems(pathname: string): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [{ name: 'Home', url: '/' }]
  
  if (pathname === '/') {
    return items
  }

  const segments = pathname.split('/').filter(Boolean)
  let currentPath = ''

  segments.forEach((segment) => {
    currentPath += `/${segment}`
    // Convert segment to readable name
    const name = segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    items.push({ name, url: currentPath })
  })

  return items
}
