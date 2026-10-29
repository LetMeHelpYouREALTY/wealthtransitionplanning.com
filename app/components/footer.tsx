import Link from 'next/link'
import Image from 'next/image'
import { businessConfig, getPhoneLink } from 'app/config/business'
import { SecurityBadges } from './security/security-badges'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Contact Information */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">Contact</h4>
            <p className="text-sm text-gray-600 mb-3">
              <a
                href={`mailto:${businessConfig.email}`}
                className="hover:text-blue-700 transition-colors font-medium"
              >
                {businessConfig.email}
              </a>
            </p>
            <p className="text-sm text-gray-600 mb-4">
              <a
                href={getPhoneLink()}
                className="hover:text-blue-700 transition-colors font-medium"
              >
                {businessConfig.phone}
              </a>
            </p>
            <p className="text-xs text-gray-600">
              {businessConfig.address.city}, {businessConfig.address.state}
            </p>
          </div>

          {/* Services & Resources */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">Services & Resources</h4>
            <div className="space-y-2">
              <Link
                href="/services"
                className="block text-sm text-gray-600 hover:text-blue-700 transition-colors font-medium"
              >
                Our Services
              </Link>
              <Link
                href="/cfp-partners"
                className="block text-sm text-gray-600 hover:text-blue-700 transition-colors font-medium"
              >
                CFP Partnership Program
              </Link>
              <Link
                href="/resources"
                className="block text-sm text-gray-600 hover:text-blue-700 transition-colors font-medium"
              >
                Resources & Guides
              </Link>
              <Link
                href="/blog"
                className="block text-sm text-gray-600 hover:text-blue-700 transition-colors font-medium"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="block text-sm text-gray-600 hover:text-blue-700 transition-colors font-medium"
              >
                About Dr. Janet Duffy
              </Link>
            </div>
          </div>

          {/* For Financial Planners */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">For Financial Planners</h4>
            <div className="space-y-2">
              <Link
                href="/cfp-partners"
                className="block text-sm text-gray-600 hover:text-blue-700 transition-colors font-medium"
              >
                Partnership Program
              </Link>
              <Link
                href="/services"
                className="block text-sm text-gray-600 hover:text-blue-700 transition-colors font-medium"
              >
                Real Estate Services
              </Link>
              <Link
                href="/resources"
                className="block text-sm text-gray-600 hover:text-blue-700 transition-colors font-medium"
              >
                Client Resources
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-gray-600 hover:text-blue-700 transition-colors font-medium"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">Connect With Us</h4>
            <div className="flex space-x-3 mb-4">
              {businessConfig.socialMedia.facebook && (
                <a
                  href={businessConfig.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              )}
              {businessConfig.socialMedia.linkedIn && (
                <a
                  href={businessConfig.socialMedia.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
              {businessConfig.socialMedia.twitter && (
                <a
                  href={businessConfig.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-700 transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              )}
              {businessConfig.socialMedia.youtube && (
                <a
                  href={businessConfig.socialMedia.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-700 transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              )}
            </div>
            <p className="text-xs text-gray-600 mt-4">
              Supporting CERTIFIED Financial Planners with expert real estate services in Las Vegas, Nevada.
            </p>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
          <p className="text-xs text-gray-600 mb-3 leading-relaxed">
            Real estate services are provided by {businessConfig.name}, a licensed real estate professional in the State of Nevada. 
            All real estate transactions are subject to applicable state and federal laws, regulations, and licensing requirements. 
            {businessConfig.name} is committed to providing professional real estate services that comply with all fair housing laws 
            and real estate regulations.
          </p>
          <p className="text-xs text-gray-600 mb-3 leading-relaxed">
            Information presented on this site is for informational purposes only and does not constitute real estate, legal, 
            financial, or tax advice. Real estate transactions involve risk, and property values, market conditions, and 
            investment outcomes are not guaranteed. All property information is subject to verification and may change without notice. 
            Be sure to consult with qualified professionals including real estate agents, attorneys, financial advisors, and tax 
            professionals before making any real estate decisions.
          </p>
          <p className="text-xs text-gray-600 mb-3 leading-relaxed">
            The information being provided is strictly as a courtesy. When you link to any of the websites provided here, 
            you are leaving this website. We make no representation as to the completeness or accuracy of the information 
            provided at these websites.{' '}
            <Link href="/resources" className="text-blue-700 hover:underline">
              Read More
            </Link>
            {' '}|{' '}
            <Link href="/privacy" className="text-blue-700 hover:underline">
              Privacy Policy
            </Link>
            {' '}|{' '}
            <Link href="/terms" className="text-blue-700 hover:underline">
              Terms of Service
            </Link>
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-xs text-gray-600 leading-relaxed">
              {currentYear} © {businessConfig.realtorTitle || businessConfig.owner} License# {businessConfig.licenseNumber} | {businessConfig.brokerage} All Rights Reserved.
            </p>
            
            {/* BHHS Logo */}
            {businessConfig.bhhsLogoUrl && (
              <div className="flex items-center">
                <Image
                  src={businessConfig.bhhsLogoUrl}
                  alt="Berkshire Hathaway HomeServices"
                  width={120}
                  height={40}
                  className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  fetchPriority="low"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Security Badges */}
      <SecurityBadges />
    </footer>
  )
}
