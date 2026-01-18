'use client';

import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured for your peace of mind on every project.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Same-Day Response',
    description: 'We respond to all inquiries within the same business day.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Experienced Team',
    description: 'Our skilled professionals bring years of landscaping expertise.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Fair Pricing',
    description: 'Competitive rates with no hidden fees or surprise charges.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Customer Focused',
    description: 'Your satisfaction is our priority from start to finish.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Eco-Friendly',
    description: 'Sustainable practices that are better for your yard and the environment.',
  },
];

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <span className="inline-block text-[var(--blade-green)] font-semibold text-sm uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--blade-charcoal)] mb-6">
              San Antonio&apos;s Trusted
              <span className="text-[var(--blade-green)]"> Landscaping</span> Experts
            </h2>
            <p className="text-[var(--blade-gray)] text-lg leading-relaxed mb-8">
              At Blade Landscaping, we&apos;re committed to transforming your outdoor spaces with
              professional care and attention to detail. Our team brings expertise, reliability,
              and a passion for creating beautiful landscapes.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex items-start gap-4 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--blade-green)]/10 rounded-xl flex items-center justify-center text-[var(--blade-green)]">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--blade-charcoal)] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[var(--blade-gray)]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div
            className={`relative transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Main Visual - Gradient with icon */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[var(--blade-green-dark)] via-[var(--blade-green)] to-[var(--blade-green-light)]">
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="about-pattern" patternUnits="userSpaceOnUse" width="10" height="10">
                        <circle cx="5" cy="5" r="1" fill="white"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#about-pattern)"/>
                  </svg>
                </div>
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 max-w-[200px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-[var(--blade-green)] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[var(--blade-charcoal)]">500+</div>
                    <div className="text-sm text-[var(--blade-gray)]">Projects Done</div>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[var(--blade-lime)]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 right-8 w-32 h-32 bg-[var(--blade-green)]/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
