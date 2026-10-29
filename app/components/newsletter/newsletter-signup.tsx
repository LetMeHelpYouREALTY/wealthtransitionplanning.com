'use client'

import { useState } from 'react'

interface NewsletterSignupProps {
  className?: string
  variant?: 'default' | 'compact' | 'inline'
}

/**
 * Newsletter Signup Component
 * Professional email capture for financial planning tips and resources
 * Optimized for CFP audience
 */
export function NewsletterSignup({ className = '', variant = 'default' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    // TODO: Integrate with your email service (Mailchimp, ConvertKit, etc.)
    // For now, this is a placeholder
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus('success')
      setMessage('Thank you! Check your email to confirm your subscription.')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all text-gray-900"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    )
  }

  if (variant === 'compact') {
    return (
      <div className={`bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-6 ${className}`}>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Stay Updated</h3>
        <p className="text-sm text-gray-700 mb-4">
          Get financial planning insights and real estate market updates
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all text-gray-900"
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe to Newsletter'}
          </button>
          {message && (
            <p className={`text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    )
  }

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Informed with Financial Planning Insights
          </h2>
          <p className="text-lg md:text-xl text-blue-50 max-w-2xl mx-auto leading-relaxed">
            Subscribe to our newsletter for real estate market updates, financial planning tips, 
            and exclusive resources for CFP professionals.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:ring-4 focus:ring-white/50 transition-all border-0"
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
          {message && (
            <p className={`text-sm ${status === 'success' ? 'text-green-200' : 'text-red-200'}`}>
              {message}
            </p>
          )}
          <p className="text-sm text-blue-100">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>
  )
}







