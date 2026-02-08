'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const stats = [
  { number: '100%', label: 'Student-Run' },
  { number: 'Free', label: 'In-Person Quotes' },
  { number: '5.0', label: 'Google Rating' },
  { number: 'Local', label: 'SA Students' },
];

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Quality First',
    description: 'We never compromise on the quality of our work. Every project receives our full attention and expertise.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Fair & Transparent Pricing',
    description: 'No hidden fees or surprise charges. We provide detailed quotes upfront so you know exactly what to expect.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Customer Focused',
    description: 'Your satisfaction is our priority. We listen to your needs and work closely with you throughout every project.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Eco-Friendly Practices',
    description: 'We use sustainable methods and eco-friendly products that are better for your lawn and the environment.',
  },
];

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[var(--blade-charcoal)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--blade-green-dark)]/30 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-[var(--blade-lime)] font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl text-[var(--blade-silver)] leading-relaxed">
              We&apos;re a team of hardworking college and high school students bringing fresh energy
              and dedication to landscaping in San Antonio.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={sectionRef} className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/media/homepage/photos/image%20copy.png"
                  alt="Our story"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[var(--blade-green)]/10 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <span className="inline-block text-[var(--blade-green)] font-semibold text-sm uppercase tracking-wider mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--blade-charcoal)] mb-6">
                Students Working Hard for Your Yard
              </h2>
              <div className="space-y-4 text-[var(--blade-gray)] text-lg leading-relaxed">
                <p>
                  Blade Landscaping is proudly owned and operated by local students. We&apos;re college
                  and high school students who started this business to earn money, build real-world
                  skills, and serve our San Antonio community.
                </p>
                <p>
                  What sets us apart? <strong>Every quote is given in person.</strong> We believe in
                  meeting you face-to-face, walking your property together, and understanding exactly
                  what you need. No guessing, no surprises—just honest, professional service with a
                  personal touch.
                </p>
                <p>
                  We may be young, but we work hard and take pride in every job. When you hire Blade
                  Landscaping, you&apos;re supporting local students while getting quality results at fair prices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[var(--blade-off-white)]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-[var(--blade-green)] mb-2">
                  {stat.number}
                </div>
                <div className="text-[var(--blade-gray)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-[var(--blade-green)] font-semibold text-sm uppercase tracking-wider mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--blade-charcoal)] mb-6">
              What We Stand For
            </h2>
            <p className="text-[var(--blade-gray)] text-lg leading-relaxed">
              These core values guide everything we do at Blade Landscaping.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`bg-[var(--blade-off-white)] rounded-2xl p-6 text-center transition-all duration-500 card-hover ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-[var(--blade-green)] rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--blade-charcoal)] mb-3">
                  {value.title}
                </h3>
                <p className="text-[var(--blade-gray)]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-[var(--blade-off-white)]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-[var(--blade-green)] font-semibold text-sm uppercase tracking-wider mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--blade-charcoal)] mb-6">
              Meet the Students
            </h2>
            <p className="text-[var(--blade-gray)] text-lg leading-relaxed">
              We&apos;re a crew of motivated college and high school students who love working outdoors
              and take pride in making your property look amazing.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-80 md:h-96">
                <img
                  src="/media/homepage/photos/image%20copy%204.png"
                  alt="Blade Landscaping crew"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-[var(--blade-charcoal)] mb-2">
                  Blade Landscaping Crew
                </h3>
                <p className="text-[var(--blade-green)] font-semibold mb-4">Local Student Workers</p>
                <p className="text-[var(--blade-gray)]">
                  College and high school students working hard to earn money and build skills while making
                  San Antonio yards look their best. Support local students!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[var(--blade-green-dark)] via-[var(--blade-green)] to-[var(--blade-green-light)]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Schedule your free in-person quote today. We&apos;ll come to your property, meet you
              face-to-face, and give you an honest estimate with no pressure.
            </p>
            <Link href="/contact" className="btn-white text-lg px-8 py-4">
              Contact Us Today
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
