import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { businessConfig } from './config/business'
import {
  LocalBusinessSchema,
  OrganizationSchema,
  WebSiteSchema,
  PersonSchema,
  GoogleAnalytics,
} from './components/google'
import { CoreWebVitalsOptimizer } from './components/core-web-vitals'
import { SkipToContent } from './components/accessibility/skip-to-content'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${businessConfig.name} | ${businessConfig.serviceArea.city}, ${businessConfig.serviceArea.state}`,
    template: `%s | ${businessConfig.name}`,
  },
  description: businessConfig.description,
  keywords: businessConfig.keywords,
  authors: [{ name: businessConfig.owner }],
  // 2025: Enhanced metadata for AI/semantic search
  creator: businessConfig.owner,
  publisher: businessConfig.name,
  // Geo-location for local SEO
  other: {
    'geo.region': 'US-NV',
    'geo.placename': businessConfig.serviceArea.city,
    'geo.position': '36.1699;-115.1398', // Las Vegas coordinates (UPDATE with actual)
    'ICBM': '36.1699, -115.1398',
  },
  // Language and locale
  alternates: {
    canonical: baseUrl,
    languages: {
      'en-US': baseUrl,
    },
  },
  openGraph: {
    title: businessConfig.name,
    description: businessConfig.description,
    url: baseUrl,
    siteName: businessConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent(businessConfig.name)}`,
        width: 1200,
        height: 630,
        alt: businessConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: businessConfig.name,
    description: businessConfig.description,
    images: [`${baseUrl}/og?title=${encodeURIComponent(businessConfig.name)}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Google Search Console verification
  // Add your verification code to environment variable: NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      }
    : undefined,
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        {/* 2025 Enhanced Schema Markup for Google Search */}
        <LocalBusinessSchema />
        <OrganizationSchema />
        <WebSiteSchema />
        <PersonSchema />

        {/* Preconnect to external domains for faster loading (Core Web Vitals) */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* Preconnect to Google Maps */}
        <link rel="preconnect" href="https://maps.googleapis.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        
        {/* 2025: Theme color for mobile browsers */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="antialiased bg-white text-gray-900" style={{ color: '#111827', fontSize: '16px', lineHeight: '1.7' }}>
        <SkipToContent />
        <Navbar />
        <main id="main-content" className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics />
        <CoreWebVitalsOptimizer />
      </body>
    </html>
  )
}
