import { businessConfig, getPhoneLink } from 'app/config/business'

/**
 * Improved Contact Information Section
 * Modern layout with better readability
 */
export function ContactInfoSection() {
  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Office Information and Contact Details
        </h2>
        <p className="text-lg text-gray-900 max-w-3xl mx-auto leading-relaxed">
          Our office is conveniently located in Las Vegas, Nevada, serving financial planners 
          and their clients throughout the Las Vegas metropolitan area. We're available to 
          discuss your real estate service needs, explore partnership opportunities, or provide 
          expert guidance on downsizer transitions, 55+ community planning, and wealth 
          transition strategies.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Details</h3>
          <address className="not-italic mb-4">
            <p className="font-bold mb-3 text-xl text-gray-900">{businessConfig.name}</p>
            <p className="mb-2 text-gray-900">{businessConfig.address.street}</p>
            <p className="mb-6 text-gray-900">
              {businessConfig.address.city}, {businessConfig.address.state}{' '}
              {businessConfig.address.zipCode}
            </p>
            <p className="mb-4">
              <strong className="text-gray-900">Phone:</strong>{' '}
              <a
                href={getPhoneLink()}
                className="text-blue-600 hover:text-blue-700 hover:underline text-lg font-semibold"
              >
                {businessConfig.phone}
              </a>
            </p>
            <p className="mb-4">
              <strong className="text-gray-900">Email:</strong>{' '}
              <a
                href={`mailto:${businessConfig.email}`}
                className="text-blue-600 hover:text-blue-700 hover:underline text-lg font-semibold"
              >
                {businessConfig.email}
              </a>
            </p>
          </address>
          <p className="text-sm text-gray-900 leading-relaxed">
            We're available to answer your questions about real estate services for financial 
            planners, CFP partnership opportunities, downsizer transitions, 55+ community 
            planning, and wealth transition strategies. Contact us today to learn how we can 
            support your practice or assist with your real estate needs.
          </p>
        </div>

        <div className="p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Business Hours</h3>
          <p className="mb-6 text-lg text-gray-900 leading-relaxed">
            Our office hours are designed to accommodate financial planners and their clients, 
            with availability during standard business hours and flexibility for consultations 
            that fit your schedule.
          </p>
          <dl className="space-y-3 mb-6">
            <div className="flex justify-between p-4 bg-blue-50 rounded-lg">
              <dt className="font-semibold text-gray-900">Monday - Friday:</dt>
              <dd className="text-gray-900 font-medium">9:00 AM - 5:00 PM</dd>
            </div>
            <div className="flex justify-between p-4 bg-blue-50 rounded-lg">
              <dt className="font-semibold text-gray-900">Saturday:</dt>
              <dd className="text-gray-900 font-medium">Closed</dd>
            </div>
            <div className="flex justify-between p-4 bg-blue-50 rounded-lg">
              <dt className="font-semibold text-gray-900">Sunday:</dt>
              <dd className="text-gray-900 font-medium">Closed</dd>
            </div>
          </dl>
          <p className="text-sm text-gray-900 leading-relaxed">
            * Extended hours available by appointment for financial planners and their clients. 
            Contact us to schedule consultations outside standard business hours.
          </p>
        </div>
      </div>
    </section>
  )
}

