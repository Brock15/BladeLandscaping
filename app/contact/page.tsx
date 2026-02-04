import { ContactForm } from '@/components';

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[var(--blade-charcoal)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--blade-green-dark)]/30 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-[var(--blade-lime)] font-semibold text-sm uppercase tracking-wider mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-[var(--blade-silver)] leading-relaxed">
              Ready to transform your outdoor space? We provide free in-person quotes—we&apos;ll
              come to you, meet face-to-face, and give you an honest estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--blade-charcoal)] mb-2">
                Schedule Your Free In-Person Quote
              </h2>
              <p className="text-[var(--blade-gray)] mb-8">
                Fill out the form below and we&apos;ll reach out to schedule a time to visit your property
                and give you a professional, personalized estimate.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--blade-charcoal)] mb-2">
                Contact Information
              </h2>
              <p className="text-[var(--blade-gray)] mb-8">
                Prefer to reach out directly? Here&apos;s how you can contact us.
              </p>

              <div className="space-y-6 mb-10">
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 bg-[var(--blade-off-white)] rounded-xl">
                  <div className="w-12 h-12 bg-[var(--blade-green)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--blade-charcoal)] mb-1">Phone / Text</h3>
                    <a href="tel:+12108025469" className="text-[var(--blade-green)] font-semibold text-lg hover:underline">
                      (210) 802-5469
                    </a>
                    <p className="text-sm text-[var(--blade-gray)] mt-1">
                      Call or text to schedule your in-person quote
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-[var(--blade-off-white)] rounded-xl">
                  <div className="w-12 h-12 bg-[var(--blade-green)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--blade-charcoal)] mb-1">Email</h3>
                    <a href="mailto:info@bladelandscaping.com" className="text-[var(--blade-green)] font-semibold text-lg hover:underline">
                      info@bladelandscaping.com
                    </a>
                    <p className="text-sm text-[var(--blade-gray)] mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 bg-[var(--blade-off-white)] rounded-xl">
                  <div className="w-12 h-12 bg-[var(--blade-green)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--blade-charcoal)] mb-1">Service Area</h3>
                    <p className="text-[var(--blade-green)] font-semibold text-lg">
                      San Antonio, TX
                    </p>
                    <p className="text-sm text-[var(--blade-gray)] mt-1">
                      And surrounding areas
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-4 bg-[var(--blade-off-white)] rounded-xl">
                  <div className="w-12 h-12 bg-[var(--blade-green)] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--blade-charcoal)] mb-1">Business Hours</h3>
                    <p className="text-[var(--blade-charcoal)]">
                      Monday - Friday: 7:00 AM - 6:00 PM
                    </p>
                    <p className="text-[var(--blade-charcoal)]">
                      Saturday: 8:00 AM - 4:00 PM
                    </p>
                    <p className="text-[var(--blade-charcoal)]">
                      Sunday: 8:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-[var(--blade-charcoal)] mb-4">Follow us on Insta and Nextdoor!</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/blade_landscaping/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[var(--blade-off-white)] rounded-xl flex items-center justify-center text-[var(--blade-gray)] hover:bg-[var(--blade-green)] hover:text-white transition-all"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://nextdoor.com/pages/blade_landscaping-san-antonio-tx/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[var(--blade-off-white)] rounded-xl flex items-center justify-center hover:bg-[var(--blade-green)] transition-all"
                    aria-label="Nextdoor"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#8ED500">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14.5h-2v-4c0-1.1-.9-2-2-2h-1v6h-2V9h3c2.21 0 4 1.79 4 4v3.5z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gradient-to-br from-[var(--blade-green-dark)]/10 via-[var(--blade-green)]/5 to-[var(--blade-light)] relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <div className="w-16 h-16 bg-[var(--blade-green)] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[var(--blade-charcoal)] mb-2">
              Serving San Antonio & Surrounding Areas
            </h3>
            <p className="text-[var(--blade-gray)] max-w-md mx-auto">
              We provide landscaping services throughout the greater San Antonio metropolitan area including Stone Oak, Alamo Heights, The Dominion, and more.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
