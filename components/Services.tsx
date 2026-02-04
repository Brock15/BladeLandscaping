'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    id: 'mulching',
    title: 'Mulching',
    description: 'Quality mulch installation to enhance garden beds, retain moisture, and improve curb appeal.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    gradient: 'from-amber-600 to-orange-800',
    videoUrl: '/media/homepage/videos/IMG_2526.mp4',
    posterUrl: '/media/gallery/photos/mulcharcher.png',
    loopStart: 0,
    loopEnd: 5,
  },
  {
    id: 'installations',
    title: 'Installations',
    description: 'Professional installation of pavers, stones, landscape fabric, borders, and more.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    gradient: 'from-slate-600 to-slate-800',
    videoUrl: '/media/homepage/videos/commercial-jobs.mp4',
    posterUrl: '/media/gallery/photos/image.png',
    loopStart: 5,
    loopEnd: 12,
  },
  {
    id: 'removal',
    title: 'Removal Services',
    description: 'Safe removal of trees, shrubs, debris, bamboo, and unwanted vegetation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    gradient: 'from-stone-600 to-stone-800',
    videoUrl: '/media/homepage/videos/IMG_3923.mp4',
    posterUrl: '/media/gallery/photos/mulchbackyard.jpg',
    loopStart: 2,
    loopEnd: 7,
  },
  {
    id: 'sodding',
    title: 'Sodding',
    description: 'Fresh sod installation for an instant, lush lawn with clean edges and a seamless finish.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    gradient: 'from-green-600 to-teal-700',
    videoUrl: '/media/homepage/videos/sodding.mp4',
    posterUrl: '/media/gallery/photos/mulchbackyard.jpg',
    loopStart: 0,
    loopEnd: 5,
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg card-hover transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background */}
              <div className="relative h-64 overflow-hidden">
                {service.videoUrl ? (
                  <video
                    className={`absolute inset-0 w-full h-full object-cover ${
                      service.id === 'removal' ? 'object-top' : ''
                    }`}
                    src={service.videoUrl}
                    poster={service.posterUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onLoadedMetadata={(event) => {
                      const video = event.currentTarget;
                      const startTime = service.loopStart ?? 0;
                      if (startTime > 0) {
                        video.currentTime = startTime;
                      }
                    }}
                    onTimeUpdate={(event) => {
                      const video = event.currentTarget;
                      const startTime = service.loopStart ?? 0;
                      const endTime = service.loopEnd ?? 5;
                      if (video.currentTime < startTime) {
                        video.currentTime = startTime;
                        return;
                      }
                      if (video.currentTime >= endTime) {
                        video.currentTime = startTime;
                      }
                    }}
                  />
                ) : (
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
                )}
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
