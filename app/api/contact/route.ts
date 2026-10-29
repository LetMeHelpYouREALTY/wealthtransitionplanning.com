import { NextRequest, NextResponse } from 'next/server'

/**
 * Contact Form API Route
 * Handles form submissions from the enhanced contact form
 * TODO: Integrate with your email service (SendGrid, Resend, etc.)
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // TODO: Send email using your email service
    // Example with placeholder:
    // await sendEmail({
    //   to: 'DrDuffy@WealthTransitionPlanning.com',
    //   from: 'noreply@wealthtransitionplanning.com',
    //   subject: `Contact Form: ${subject}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    //     <p><strong>Subject:</strong> ${subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `
    // })

    // For now, just log the submission (remove in production)
    console.log('Contact form submission:', { name, email, phone, subject, message })

    // Return success response
    return NextResponse.json(
      { 
        success: true,
        message: 'Thank you for your message. We will respond within 24-48 hours.'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or call us directly.' },
      { status: 500 }
    )
  }
}







