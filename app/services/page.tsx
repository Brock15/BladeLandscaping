'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const services = [
  {
    id: 'lawn-care',
    title: 'Lawn Care',
    subtitle: 'Professional Lawn Maintenance',
    description:
      'Keep your lawn looking its best with our comprehensive lawn care services. We provide regular mowing, edging, blowing, and trimming to maintain a pristine appearance year-round.',
    features: [
      'Weekly or bi-weekly mowing',
      'Professional edging along walkways and beds',
      'Debris removal and cleanup',
      'Seasonal aeration and overseeding',
      'Weed control treatments',
      'Fertilization programs',
    ],
    gradient: 'from-emerald-500 to-green-700',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    id: 'mulching',
    title: 'Mulching',
    subtitle: 'Garden Bed Enhancement',
    description:
      'Quality mulch installation to enhance the beauty of your garden beds while providing essential benefits like moisture retention, weed prevention, and soil temperature regulation.',
    features: [
      'Premium hardwood and cedar mulch options',
      'Proper bed preparation and edging',
      'Old mulch removal if needed',
      'Consistent depth application',
      'Color-matched to your landscape',
      'Annual refresh programs available',
    ],
    gradient: 'from-amber-600 to-orange-800',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    id: 'planting',
    title: 'Planting',
    subtitle: 'Expert Plant Installation',
    description:
      'From colorful annuals to mature trees, our planting services bring your landscape vision to life. We carefully select plants suited to San Antonio\'s climate for long-lasting beauty.',
    features: [
      'Native and adapted plant selection',
      'Seasonal flower installations',
      'Shrub and tree planting',
      'Proper soil preparation',
      'Drip irrigation integration',
      'Plant care guidance',
    ],
    gradient: 'from-green-600 to-teal-700',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    id: 'weeding',
    title: 'Weeding',
    subtitle: 'Garden Bed Maintenance',
    description:
      'Keep your garden beds clean and healthy with our thorough weeding services. We remove unwanted vegetation and implement prevention strategies for lasting results.',
    features: [
      'Complete weed removal by hand',
      'Root extraction to prevent regrowth',
      'Pre-emergent herbicide application',
      'Bed cultivation and refreshing',
      'Ongoing maintenance programs',
      'Eco-friendly treatment options',
    ],
    gradient: 'from-lime-600 to-green-800',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: 'removal',
    title: 'Removal Services',
    subtitle: 'Clean Up & Hauling',
    description:
      'Safe and efficient removal of trees, shrubs, debris, and unwanted vegetation. We handle everything from small cleanups to large-scale lot clearing projects.',
    features: [
      'Tree and shrub removal',
      'Stump grinding',
      'Debris hauling and disposal',
      'Overgrown lot clearing',
      'Storm damage cleanup',
      'Construction site clearing',
    ],
    gradient: 'from-stone-600 to-stone-800',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    id: 'landscape-design',
    title: 'Landscape Design',
    subtitle: 'Custom Outdoor Solutions',
    description:
      'Transform your outdoor space with our professional landscape design services. We create custom plans that reflect your style while enhancing your property\'s value and functionality.',
    features: [
      'Custom design consultations',
      '3D landscape renderings',
      'Hardscape integration',
      'Irrigation system design',
      'Outdoor lighting plans',
      'Phased implementation options',
    ],
    gradient: 'from-cyan-600 to-blue-800',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
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
              What We Offer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-[var(--blade-silver)] leading-relaxed">
              Comprehensive landscaping solutions tailored to your needs. From routine maintenance
              to complete landscape transformations, we do it all.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section ref={sectionRef} className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Visual - alternating sides */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br ${service.gradient}`}>
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                          <pattern id={`service-pattern-${service.id}`} patternUnits="userSpaceOnUse" width="10" height="10">
                            <circle cx="5" cy="5" r="1" fill="white"/>
                          </pattern>
                        </defs>
                        <rect width="100" height="100" fill={`url(#service-pattern-${service.id})`}/>
                      </svg>
                    </div>
                    {/* Center icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {service.icon.props.children}
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Decorative element */}
                  <div
                    className={`absolute -z-10 w-full h-full bg-[var(--blade-green)]/10 rounded-2xl ${
                      index % 2 === 0 ? '-bottom-4 -right-4' : '-bottom-4 -left-4'
                    }`}
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="w-16 h-16 bg-[var(--blade-green)]/10 rounded-2xl flex items-center justify-center text-[var(--blade-green)] mb-6">
                    {service.icon}
                  </div>
                  <span className="text-[var(--blade-green)] font-semibold text-sm uppercase tracking-wider">
                    {service.subtitle}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-[var(--blade-charcoal)] mt-2 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-[var(--blade-gray)] text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <svg
                          className="w-5 h-5 text-[var(--blade-green)] flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-[var(--blade-gray)]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-primary">
                    Get a Quote
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[var(--blade-off-white)]">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-[var(--blade-green-dark)] via-[var(--blade-green)] to-[var(--blade-green-light)] rounded-3xl p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us for a free consultation. We&apos;ll assess your property and recommend
              the best services for your needs and budget.
            </p>
            <Link href="/contact" className="btn-white text-lg px-8 py-4">
              Schedule Free Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
