'use client'

import { useState } from 'react'
import { businessConfig, getPhoneLink } from 'app/config/business'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

/**
 * Enhanced Contact Form Component
 * Professional form with validation, error handling, and accessibility
 * Optimized for CFP and advisor inquiries
 */
export function EnhancedContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (formData.phone && !/^[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setStatus('submitting')

    try {
      // TODO: Replace with actual form submission endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        // Redirect to thank you page after 2 seconds
        setTimeout(() => {
          window.location.href = '/thank-you'
        }, 2000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-lg text-gray-700">
          Your message has been sent successfully. We'll respond within 24-48 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
          Full Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          required
          aria-required="true"
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={`w-full px-4 py-3 border-2 rounded-lg transition-all text-gray-900 ${
            errors.name
              ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200'
              : 'border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200'
          }`}
          placeholder="Your full name"
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
          Email Address <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          required
          aria-required="true"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`w-full px-4 py-3 border-2 rounded-lg transition-all text-gray-900 ${
            errors.email
              ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200'
              : 'border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200'
          }`}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
          Phone Number <span className="text-gray-500 text-xs font-normal">(Optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          aria-invalid={errors.phone ? 'true' : 'false'}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          className={`w-full px-4 py-3 border-2 rounded-lg transition-all text-gray-900 ${
            errors.phone
              ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200'
              : 'border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200'
          }`}
          placeholder="(702) 555-1234"
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
          Subject <span className="text-red-600">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={(e) => handleChange('subject', e.target.value)}
          required
          aria-required="true"
          aria-invalid={errors.subject ? 'true' : 'false'}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          className={`w-full px-4 py-3 border-2 rounded-lg transition-all text-gray-900 bg-white ${
            errors.subject
              ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200'
              : 'border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200'
          }`}
        >
          <option value="">Select a subject...</option>
          <option value="cfp-partnership">CFP Partnership Inquiry</option>
          <option value="buyer-representation">Buyer Representation Services</option>
          <option value="seller-representation">Seller Representation Services</option>
          <option value="investment-property">Investment Property Services</option>
          <option value="market-analysis">Market Analysis & Consulting</option>
          <option value="empty-nester">Empty Nester Real Estate Services</option>
          <option value="55-communities">55+ Community Planning</option>
          <option value="luxury-homes">Luxury Home Services</option>
          <option value="consultation">Schedule Free Consultation</option>
          <option value="resources">Resource Request</option>
          <option value="general">General Inquiry</option>
        </select>
        {errors.subject && (
          <p id="subject-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          required
          aria-required="true"
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`w-full px-4 py-3 border-2 rounded-lg transition-all text-gray-900 resize-y ${
            errors.message
              ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200'
              : 'border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200'
          }`}
          placeholder="Tell us about your real estate service needs, partnership interests, or questions about how we can support your financial planning practice..."
        />
        <div className="mt-1 flex justify-between">
          {errors.message && (
            <p id="message-error" className="text-sm text-red-600" role="alert">
              {errors.message}
            </p>
          )}
          <p className="text-sm text-gray-500 ml-auto">
            {formData.message.length} characters
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {status === 'submitting' ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>
      </div>

      {/* Help Text */}
      <p className="text-sm text-gray-600 text-center">
        <span className="text-red-600">*</span> Required fields. We'll respond within 24-48 hours. 
        For urgent matters, please call us directly at{' '}
        <a href={getPhoneLink()} className="text-blue-600 hover:underline font-semibold">
          {businessConfig.phone}
        </a>.
      </p>

      {status === 'error' && (
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4" role="alert">
          <p className="text-sm text-red-800">
            There was an error sending your message. Please try again or call us directly.
          </p>
        </div>
      )}
    </form>
  )
}







