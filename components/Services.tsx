'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    id: 'lawn-care',
    title: 'Lawn Care',
    description: 'Professional mowing, edging, and blowing to keep your lawn pristine and healthy.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    gradient: 'from-emerald-500 to-green-700',
  },
  {
    id: 'mulching',
    title: 'Mulching',
    description: 'Quality mulch installation to enhance garden beds and retain moisture.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    gradient: 'from-amber-600 to-orange-800',
  },
  {
    id: 'planting',
    title: 'Planting',
    description: 'Expert plant selection and installation for beautiful, thriving landscapes.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    gradient: 'from-green-600 to-teal-700',
  },
  {
    id: 'weeding',
    title: 'Weeding',
    description: 'Thorough weed removal and prevention to maintain pristine garden beds.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    gradient: 'from-lime-600 to-green-800',
  },
  {
    id: 'removal',
    title: 'Removal Services',
    description: 'Safe removal of trees, shrubs, debris, and unwanted vegetation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    gradient: 'from-stone-600 to-stone-800',
  },
  {
    id: 'landscape-design',
    title: 'Landscape Design',
    description: 'Custom landscape design to transform your outdoor vision into reality.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    gradient: 'from-cyan-600 to-blue-800',
  },
];

export default function Services() {
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
    <section ref={sectionRef} id="services" className="section-padding bg-[var(--blade-off-white)]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[var(--blade-green)] font-semibold text-sm uppercase tracking-wider mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--blade-charcoal)] mb-6">
            Our Professional Services
          </h2>
          <p className="text-[var(--blade-gray)] text-lg leading-relaxed">
            From routine lawn maintenance to complete landscape transformations, we provide
            comprehensive services to meet all your outdoor needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg card-hover transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}>
                  {/* Decorative pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <pattern id={`pattern-${service.id}`} patternUnits="userSpaceOnUse" width="20" height="20">
                          <circle cx="10" cy="10" r="1" fill="white"/>
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill={`url(#pattern-${service.id})`}/>
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[var(--blade-green)] shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--blade-charcoal)] mb-3 group-hover:text-[var(--blade-green)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[var(--blade-gray)] mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center gap-2 text-[var(--blade-green)] font-semibold hover:gap-4 transition-all"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
