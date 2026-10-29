/**
 * Google Schema Components Index (2025 Enhanced)
 * Central export file for all structured data components
 * 
 * These components implement Google's latest 2025 guidelines for:
 * - Rich Results
 * - E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
 * - Voice Search (Speakable)
 * - AI/Semantic Search optimization
 */

// Core Schema Components
export { LocalBusinessSchema } from './local-business-schema'
export { OrganizationSchema } from './organization-schema'
export { WebSiteSchema } from './website-schema'
export { PersonSchema } from './person-schema'
export { ProfessionalServiceSchema } from './professional-service-schema'

// Navigation & Structure
export { BreadcrumbSchema, generateBreadcrumbItems } from './breadcrumb-schema'

// Content Types
export { ArticleSchema } from './article-schema'
export { FAQSchema } from '../faq-schema'

// Enhanced Features (2025)
export { SpeakableSchema } from './speakable-schema'
export { ReviewSchema } from './review-schema'
export { HowToSchema } from './how-to-schema'

// Other Components
export { GoogleAnalytics } from './google-analytics'
export { GoogleMaps } from './google-maps'
export { ContactButtons } from './contact-buttons'
