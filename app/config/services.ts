/**
 * Service Tiers Configuration
 * Real Estate Services for CFA Clients
 * These are realtor service packages designed to support Certified Financial Advisors and their clients
 */

export interface ServiceTier {
  id: string
  name: string
  tagline: string
  description: string
  bestFor: string
  features: string[]
  whyChoose: string[]
  whatToExpect: string[]
  fees: string
  cta: {
    primary: string
    secondary: string
  }
  freeGuide?: string
}

export const serviceTiers: ServiceTier[] = [
  {
    id: 'comprehensive',
    name: 'COMPREHENSIVE REAL ESTATE SERVICES',
    tagline: 'Full-Service Real Estate Partner',
    description: 'COMPREHENSIVE full-service real estate representation for buying and selling, designed to support your CFA clients\' wealth transition goals. From initial consultation through closing and beyond.',
    bestFor: 'CFA clients who need full-service real estate representation for major life transitions, including empty nesters, retirees, and wealth transfer scenarios.',
    whyChoose: [
      'Full-service buyer and seller representation with expertise in wealth transition scenarios',
      'Coordinated approach that considers your clients\' financial plans, tax strategies, and estate planning goals',
      'Dedicated real estate agent who understands how property decisions impact financial planning outcomes',
      'Market expertise in Las Vegas luxury, 55+ communities, and investment properties',
    ],
    features: [
      'Complete Buy/Sell Representation',
      'Market Analysis & Property Valuations',
      'Tax-Efficient Transaction Coordination',
      'Estate Planning Integration',
      'Ongoing Support Throughout Transaction',
      'Luxury Home & Investment Property Expertise',
    ],
    whatToExpect: [
      'Initial consultation to understand financial planning context',
      'Customized property search or marketing strategy aligned with financial goals',
      'Regular coordination with you (the CFA) on transaction timing and structure',
      'Professional negotiations considering tax implications and financial planning objectives',
      'Smooth closing process with attention to wealth transfer considerations',
    ],
    fees: 'Standard real estate commission structure - transparent and discussed upfront',
    cta: {
      primary: 'Schedule Your Consultation',
      secondary: 'Download Free Guide',
    },
    freeGuide: 'Real Estate Services for Financial Planners Guide',
  },
  {
    id: 'launch',
    name: 'BUYER REPRESENTATION',
    tagline: 'Expert Buyer Services',
    description: 'LAUNCH your clients\' next property purchase with dedicated buyer representation. We help your clients find the perfect property that aligns with their financial goals and lifestyle needs.',
    bestFor: 'CFA clients who are ready to purchase property, whether it\'s a primary residence, downsizing property, 55+ community home, or investment property.',
    whyChoose: [
      'Dedicated buyer representation with deep Las Vegas market knowledge',
      'Property search aligned with your clients\' financial planning objectives',
      'Expert negotiation to maximize value and minimize tax implications',
      'Coordination with you to ensure timing supports financial planning strategies',
    ],
    features: [
      'Custom Property Search Strategy',
      'Market Analysis & Property Evaluation',
      'Professional Negotiation Services',
      'Transaction Management & Closing Coordination',
      'Post-Purchase Support',
      '55+ Community & Luxury Home Expertise',
    ],
    whatToExpect: [
      'Initial consultation to understand purchase goals and financial planning context',
      'Customized property search based on budget, location, and lifestyle needs',
      'Property tours and detailed evaluations',
      'Market analysis and offer strategy development',
      'Smooth transaction process through closing',
    ],
    fees: 'Buyer representation typically paid by seller - no upfront fees',
    cta: {
      primary: 'Schedule Your Consultation',
      secondary: 'Download Free Guide',
    },
    freeGuide: 'Buyer Representation for Financial Planners Guide',
  },
  {
    id: 'aim',
    name: 'SELLER REPRESENTATION',
    tagline: 'Expert Listing Services',
    description: 'AIM for maximum value with professional seller representation. We help your clients sell their property at the optimal time and price, considering tax implications and financial planning objectives.',
    bestFor: 'CFA clients who need to sell property as part of wealth transition, downsizing, estate planning, or investment portfolio rebalancing.',
    whyChoose: [
      'Expert pricing strategy that maximizes value while considering tax timing',
      'Professional marketing and staging to showcase property value',
      'Skilled negotiation to protect your clients\' interests',
      'Coordination with you on optimal sale timing for financial planning benefits',
    ],
    features: [
      'Market Analysis & Pricing Strategy',
      'Professional Property Marketing',
      'Listing Management & Showings',
      'Negotiation & Contract Management',
      'Transaction Coordination Through Closing',
      'Tax-Timing Consultation with Your CFA',
    ],
    whatToExpect: [
      'Initial property evaluation and market analysis',
      'Customized marketing strategy for maximum exposure',
      'Professional photography, staging recommendations, and listing optimization',
      'Regular communication throughout the sales process',
      'Expert negotiation and closing coordination',
    ],
    fees: 'Standard listing commission - competitive and transparent',
    cta: {
      primary: 'Schedule Your Consultation',
      secondary: 'Download Free Guide',
    },
    freeGuide: 'Seller Representation for Financial Planners Guide',
  },
  {
    id: 'live',
    name: 'INVESTMENT PROPERTY SERVICES',
    tagline: 'Real Estate Investment Expertise',
    description: 'LIVE your investment goals with expert real estate investment services. We help your clients evaluate, acquire, and manage investment properties that align with their portfolio strategy.',
    bestFor: 'CFA clients who want to add real estate to their investment portfolio, diversify holdings, or optimize existing real estate investments.',
    whyChoose: [
      'Investment property expertise in Las Vegas market',
      'ROI analysis and cash flow projections aligned with portfolio goals',
      'Tax-advantaged acquisition and exit strategies',
      'Coordination with your investment management approach',
    ],
    features: [
      'Investment Property Market Analysis',
      'ROI & Cash Flow Projections',
      'Investment Property Acquisition',
      'Property Portfolio Optimization',
      '1031 Exchange Coordination',
      'Exit Strategy Planning',
    ],
    whatToExpect: [
      'Investment property market analysis and opportunity identification',
      'ROI calculations and financial projections',
      'Property evaluation and due diligence support',
      'Acquisition negotiation and transaction management',
      'Coordination with tax strategies (1031 exchanges, etc.)',
    ],
    fees: 'Standard real estate commission structure - contact for investment property pricing',
    cta: {
      primary: 'Schedule Your Consultation',
      secondary: 'Download Free Guide',
    },
    freeGuide: 'Investment Property Guide for Financial Planners',
  },
  {
    id: 'learn',
    name: 'MARKET ANALYSIS & CONSULTING',
    tagline: 'Real Estate Intelligence',
    description: 'LEARN about your clients\' real estate options with professional market analysis and consulting services. Perfect for CFAs who need real estate insights to support financial planning recommendations.',
    bestFor: 'CFAs who need real estate market data, property valuations, or strategic real estate consulting for their clients\' financial plans.',
    whyChoose: [
      'Expert market analysis and property valuations',
      'Strategic real estate consulting aligned with financial planning goals',
      'Timing analysis for optimal transaction timing',
      'Educational resources for CFAs on real estate considerations',
    ],
    features: [
      'Property Valuations & Market Analysis',
      'Neighborhood Market Reports',
      'Transaction Timing Analysis',
      'Real Estate Strategy Consulting',
      'Educational Resources for CFAs',
      'Market Trend Reports',
    ],
    whatToExpect: [
      'Comprehensive property or market analysis reports',
      'Strategic recommendations on timing and approach',
      'Educational insights on real estate factors affecting financial planning',
      'Ongoing market intelligence and updates',
      'Support for financial planning recommendations',
    ],
    fees: 'Consulting fees vary by scope - contact for pricing',
    cta: {
      primary: 'Schedule Your Consultation',
      secondary: 'Download Free Guide',
    },
    freeGuide: 'Real Estate Market Analysis Guide for Financial Planners',
  },
]

export function getServiceTier(id: string): ServiceTier | undefined {
  return serviceTiers.find((tier) => tier.id === id)
}

