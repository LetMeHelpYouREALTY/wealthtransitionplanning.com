'use client'

import { useEffect } from 'react'

/**
 * Core Web Vitals Optimization Component (2025)
 * Implements client-side optimizations for LCP, FID/INP, and CLS
 * 
 * Key 2025 Metrics:
 * - LCP (Largest Contentful Paint): < 2.5s
 * - INP (Interaction to Next Paint): < 200ms (replaced FID in 2024)
 * - CLS (Cumulative Layout Shift): < 0.1
 */

/**
 * Lazy load images that are below the fold
 * Improves LCP by prioritizing above-the-fold content
 */
export function useLazyImages() {
  useEffect(() => {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            if (img.dataset.src) {
              img.src = img.dataset.src
              img.removeAttribute('data-src')
              observer.unobserve(img)
            }
          }
        })
      })

      const lazyImages = document.querySelectorAll('img[data-src]')
      lazyImages.forEach((img) => imageObserver.observe(img))

      return () => {
        imageObserver.disconnect()
      }
    }
  }, [])
}

/**
 * Prefetch links on hover for faster navigation
 * Improves INP by reducing time to interactive
 */
export function useLinkPrefetch() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="/"]')
    
    const handleMouseEnter = (e: Event) => {
      const link = e.target as HTMLAnchorElement
      const href = link.getAttribute('href')
      if (href && !link.dataset.prefetched) {
        // Prefetch the page
        const linkElement = document.createElement('link')
        linkElement.rel = 'prefetch'
        linkElement.href = href
        linkElement.as = 'document'
        document.head.appendChild(linkElement)
        link.dataset.prefetched = 'true'
      }
    }

    links.forEach((link) => {
      link.addEventListener('mouseenter', handleMouseEnter, { passive: true })
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleMouseEnter)
      })
    }
  }, [])
}

/**
 * Prevent layout shift by reserving space for images
 * Improves CLS score
 */
export function useImageDimensions() {
  useEffect(() => {
    const images = document.querySelectorAll('img:not([width]):not([height])')
    
    images.forEach((img) => {
      const image = img as HTMLImageElement
      if (image.complete) {
        // Image already loaded, set dimensions
        if (!image.width || !image.height) {
          image.width = image.naturalWidth || 1200
          image.height = image.naturalHeight || 630
        }
      } else {
        // Wait for image to load
        image.addEventListener('load', () => {
          if (!image.width || !image.height) {
            image.width = image.naturalWidth || 1200
            image.height = image.naturalHeight || 630
          }
        }, { once: true })
      }
    })
  }, [])
}

/**
 * Core Web Vitals Optimizer Component
 * Combines all optimizations
 */
export function CoreWebVitalsOptimizer() {
  useLazyImages()
  useLinkPrefetch()
  useImageDimensions()
  
  return null
}
