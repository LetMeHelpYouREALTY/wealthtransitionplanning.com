import { baseUrl } from 'app/sitemap'
import type { MetadataRoute } from 'next'

/**
 * Robots.txt Configuration (2025 Enhanced)
 * Optimized for Google Search, AI crawlers, and modern SEO best practices
 * 
 * @see https://developers.google.com/search/docs/crawling-indexing/robots/intro
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default rules for all search engines
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',           // API routes
          '/private/',       // Private pages
          '/*.json$',        // JSON files
          '/admin/',         // Admin pages (if any)
        ],
      },
      // 2025: AI Crawler Rules
      // Google's AI crawlers (for AI training)
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
        ],
      },
      // OpenAI GPTBot
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
        ],
      },
      // ChatGPT User
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
        ],
      },
      // Claude Web
      {
        userAgent: 'Claude-Web',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
        ],
      },
      // Anthropic AI
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
        ],
      },
      // CCBot (Common Crawl)
      {
        userAgent: 'CCBot',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
        ],
      },
      // Facebook crawler (for social sharing)
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
      },
      // Twitter crawler
      {
        userAgent: 'Twitterbot',
        allow: '/',
      },
      // LinkedIn crawler
      {
        userAgent: 'LinkedInBot',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
