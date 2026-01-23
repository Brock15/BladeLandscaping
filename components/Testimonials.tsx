'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const testimonials = [
  {
    id: 1,
    name: 'Maria Rodriguez',
    location: 'Stone Oak, San Antonio',
    rating: 5,
    text: 'Blade Landscaping transformed our backyard into a beautiful oasis. Their attention to detail and professionalism exceeded our expectations. Highly recommend!',
    initials: 'MR',
    color: 'bg-emerald-500',
  },
  {
    id: 2,
    name: 'James Thompson',
    location: 'Alamo Heights, San Antonio',
    rating: 5,
    text: 'Outstanding service from start to finish. The team was punctual, courteous, and did an amazing job with our lawn. Best landscaping service in San Antonio!',
    initials: 'JT',
    color: 'bg-blue-500',
  },
  {
    id: 3,
    name: 'Sarah Chen',
    location: 'The Dominion, San Antonio',
    rating: 5,
    text: 'We\'ve used many landscapers over the years, but Blade Landscaping is by far the best. Fair pricing, excellent work, and great communication throughout.',
    initials: 'SC',
    color: 'bg-purple-500',
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-[var(--blade-charcoal)] relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--blade-green)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--blade-lime)]/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-[var(--blade-lime)] font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-[var(--blade-silver)] text-lg leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say
            about their experience with Blade Landscaping.
          </p>
        </div>

        {/* Rating Badge */}
        <div
          className={`flex flex-col items-center gap-4 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white font-semibold">5.0</span>
            <span className="text-[var(--blade-silver)]">from 47+ reviews</span>
          </div>
          <Link
            href="/reviews"
            className="text-[var(--blade-lime)] hover:text-white font-medium text-sm transition-colors flex items-center gap-1"
          >
            See More Reviews
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  index === activeIndex
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 absolute inset-0 translate-x-10'
                }`}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12">
                  {/* Quote icon */}
                  <div className="w-12 h-12 bg-[var(--blade-green)] rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Testimonial text */}
                  <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                    &quot;{testimonial.text}&quot;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-full ${testimonial.color} flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-[var(--blade-silver)] text-sm">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="ml-auto flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? 'bg-[var(--blade-green)] w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Used by */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">
            Used By
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl">
            {[
              { name: 'Ferguson Plastic Surgery', sub: 'Plastic Surgery' },
              { name: "Women's Health", sub: 'Wellness Clinic' },
              { name: 'Makeup Studio', sub: 'Beauty & Makeup' },
            ].map((biz) => (
              <div
                key={biz.name}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
              >
                <div className="text-sm font-semibold text-white">{biz.name}</div>
                <div className="text-xs text-white/60">{biz.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
