/**
 * Business Configuration
 * Update this file with your actual Google Business Profile information
 * All NAP (Name, Address, Phone) must match your GBP exactly
 */

export const businessConfig = {
  // Business Information - MUST match Google Business Profile exactly
  name: 'Wealth Transition Planning',
  legalName: 'Wealth Transition Planning', // Full legal business name if different
  owner: 'Dr. Jan Duffy',
  realtorTitle: 'Dr. Jan Duffy REALTOR®',
  
  // Contact Information - MUST match GBP exactly
  address: {
    street: '8925 W Post Rd',
    city: 'Las Vegas',
    state: 'NV',
    zipCode: '89148',
    country: 'United States',
    full: '8925 W Post Rd, Las Vegas, NV 89148',
  },
  
  phone: '(702) 555-1234', // UPDATE: Your actual phone number matching GBP
  phoneFormatted: '+17025551234', // E.164 format for schema
  email: 'DrDuffy@WealthTransitionPlanning.com',
  
  // Google Business Profile
  googleBusinessProfileUrl: '', // UPDATE: Your GBP URL (e.g., https://g.page/your-business)
  googleMapsPlaceId: '', // UPDATE: Your Google Maps Place ID (find in GBP settings)
  
  // Business Hours - MUST match GBP exactly
  hours: {
    monday: { open: '09:00', close: '17:00' },
    tuesday: { open: '09:00', close: '17:00' },
    wednesday: { open: '09:00', close: '17:00' },
    thursday: { open: '09:00', close: '17:00' },
    friday: { open: '09:00', close: '17:00' },
    saturday: 'closed',
    sunday: 'closed',
  },
  
  // Business Type and Services
  type: 'Real Estate Agency', // Primary business type
  services: [
    'Buyer Representation',
    'Seller Representation',
    'Investment Property Services',
    'Luxury Home Sales',
    'Empty Nester Real Estate Services',
    '55+ Community Planning',
    'Real Estate Market Analysis',
    'Property Valuations',
  ],
  
  // Service Area
  serviceArea: {
    city: 'Las Vegas',
    state: 'Nevada',
    regions: ['Las Vegas', 'Henderson', 'Summerlin', 'North Las Vegas'],
  },
  
  // Social Media & Reviews
  googleReviewsUrl: '', // UPDATE: Your Google Reviews URL
  socialMedia: {
    facebook: '',
    linkedIn: '',
    twitter: '',
    youtube: '',
  },
  
  // Real Estate License & Brokerage
  licenseNumber: 'S.0197614.LLC', // Real estate license number
  brokerage: 'Berkshire Hathaway HomeServices',
  bhhsLogoUrl: '/images/bhhs-logo.png', // Path to BHHS logo image in public/images/ directory
  
  // SEO
  description: 'Professional wealth transition planning services in Las Vegas, Nevada. Expert guidance for estate planning, retirement planning, and financial security.',
  keywords: ['wealth transition planning', 'estate planning', 'financial planning', 'Las Vegas', 'Nevada'],
}

/**
 * Format business hours for schema markup
 */
export function getBusinessHoursSchema() {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
  const dayMap: Record<string, string> = {
    monday: 'Mo',
    tuesday: 'Tu',
    wednesday: 'We',
    thursday: 'Th',
    friday: 'Fr',
    saturday: 'Sa',
    sunday: 'Su',
  }
  
  const hours: string[] = []
  
  days.forEach((day) => {
    const dayHours = businessConfig.hours[day as keyof typeof businessConfig.hours]
    if (dayHours !== 'closed' && typeof dayHours === 'object') {
      hours.push(`${dayMap[day]} ${dayHours.open}-${dayHours.close}`)
    }
  })
  
  return hours.join(' ')
}

/**
 * Get formatted address for display
 */
export function getFormattedAddress(): string {
  return businessConfig.address.full
}

/**
 * Get phone number as clickable tel: link
 */
export function getPhoneLink(): string {
  return `tel:${businessConfig.phoneFormatted}`
}

/**
 * Get Google Maps directions URL
 */
export function getGoogleMapsDirectionsUrl(): string {
  const address = encodeURIComponent(businessConfig.address.full)
  return `https://www.google.com/maps/dir/?api=1&destination=${address}`
}

/**
 * Get Google Maps embed URL
 */
export function getGoogleMapsEmbedUrl(): string {
  if (businessConfig.googleMapsPlaceId) {
    return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=place_id:${businessConfig.googleMapsPlaceId}`
  }
  const address = encodeURIComponent(businessConfig.address.full)
  return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${address}`
}


