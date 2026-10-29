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
import { LocalBusinessSchema } from './components/google/local-business-schema'
import { GoogleAnalytics } from './components/google/google-analytics'

import Script from "next/script";
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${businessConfig.name} | ${businessConfig.serviceArea.city}, ${businessConfig.serviceArea.state}`,
    template: `%s | ${businessConfig.name}`,
  },
  description: businessConfig.description,
  keywords: businessConfig.keywords,
  authors: [{ name: businessConfig.owner }],
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
        <LocalBusinessSchema />
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* Preconnect to Google Maps */}
        <link rel="preconnect" href="https://maps.googleapis.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
      </head>
      <body className="antialiased bg-white text-gray-900" style={{ color: '#111827', fontSize: '16px', lineHeight: '1.7' }}>
        <Navbar />
        <main className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics />
      
        {/* Follow Up Boss pixel (Widget Tracker) */}
        <Script id="fub-widget-tracker" strategy="afterInteractive">{`
if(location.hostname.slice(-11)!==".vercel.app"&&location.hostname!=="localhost"){(function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
{(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
(t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
e.parentNode.insertBefore(t,e);})
(window,"https://widgetbe.com/agent",document,"widgetTracker");
window.widgetTracker("create", "WT-XQHVYQWW");
window.widgetTracker("send", "pageview");}
        `}</Script>
</body>
    </html>
  )
}
