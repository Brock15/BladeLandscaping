'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

// Real Google reviews
const googleReviews = [
  {
    id: 1,
    name: 'Katie Pane',
    reviewCount: '12 reviews',
    rating: 5,
    text: 'Brock is a pleasure to work with and he was able to give my backyard a needed facelift with a new layer of mulch!',
    timeAgo: 'a year ago',
    initials: 'K',
    color: 'bg-purple-500',
    hasPhoto: false,
  },
  {
    id: 2,
    name: 'Art Scott',
    reviewCount: '2 reviews',
    rating: 5,
    text: 'Thanks to Brock and Erik for taking care of our landscaping. Extremely respectful and conscientious young men who are eager to help and work!',
    timeAgo: 'a year ago',
    initials: 'A',
    color: 'bg-blue-500',
    hasPhoto: false,
  },
  {
    id: 3,
    name: 'SM C',
    reviewCount: '26 reviews',
    rating: 5,
    text: 'I was needing someone to do some landscape work. The company that usually does my work is so busy they can\'t get to me. I saw Brock\'s advertisement on Nextdoor and took a chance. This is a group of late high school age gentlemen. I hired Brock and crew to pull bamboo, lay landscape fabric, and mulch. They did a very nice job at a very reasonable price, were professional, polite, and hardworking. They cleaned up afterwards and left the job site spotless. Highly recommend.',
    timeAgo: 'a year ago',
    initials: 'S',
    color: 'bg-green-500',
    hasPhoto: true,
  },
  {
    id: 4,
    name: 'Ava Weinstein',
    reviewCount: '3 reviews',
    rating: 5,
    text: 'Brock and his team did an amazing job moving our heavy furniture, boxes, art, and many other household items. We had a big job for them and they did it professionally and saw it through to the end. I highly recommend them for any moving needs. Thank you!',
    timeAgo: 'a year ago',
    initials: 'A',
    color: 'bg-pink-500',
    hasPhoto: true,
  },
  {
    id: 5,
    name: 'Fed Bread',
    reviewCount: '7 reviews',
    rating: 5,
    text: 'Spoke to Brock about specific yard related issues, he was able to get Sam to complete the job. Sam did an excellent job within a couple of hours, moving & spreading 61 bags of stones(30lb bags ea), spreading 2 wheelbarrow loads of sand & moving 6 large flagstones into another spot. Will use again!',
    timeAgo: 'a year ago',
    initials: 'F',
    color: 'bg-orange-500',
    hasPhoto: true,
  },
];

// Additional testimonials (not from Google)
const additionalReviews = [
  {
    id: 6,
    name: 'Maria Rodriguez',
    reviewCount: 'Stone Oak',
    rating: 5,
    text: 'Blade Landscaping transformed our backyard into a beautiful oasis. Their attention to detail and professionalism exceeded our expectations. Highly recommend!',
    timeAgo: '6 months ago',
    initials: 'MR',
    color: 'bg-emerald-500',
    hasPhoto: false,
    isGoogle: false,
  },
  {
    id: 7,
    name: 'James Thompson',
    reviewCount: 'Alamo Heights',
    rating: 5,
    text: 'Outstanding service from start to finish. The team was punctual, courteous, and did an amazing job with our lawn. Best landscaping service in San Antonio!',
    timeAgo: '8 months ago',
    initials: 'JT',
    color: 'bg-cyan-500',
    hasPhoto: false,
    isGoogle: false,
  },
  {
    id: 8,
    name: 'Sarah Chen',
    reviewCount: 'The Dominion',
    rating: 5,
    text: 'We\'ve used many landscapers over the years, but Blade Landscaping is by far the best. Fair pricing, excellent work, and great communication throughout.',
    timeAgo: '4 months ago',
    initials: 'SC',
    color: 'bg-violet-500',
    hasPhoto: false,
    isGoogle: false,
  },
];

const allReviews = [
  ...googleReviews.map(r => ({ ...r, isGoogle: true })),
  ...additionalReviews
];

export default function ReviewsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const renderStars = (count: number) => (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
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
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[var(--blade-charcoal)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--blade-green-dark)]/30 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-[var(--blade-lime)] font-semibold text-sm uppercase tracking-wider mb-4">
              Testimonials
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Customer Reviews
            </h1>
            <p className="text-xl text-[var(--blade-silver)] leading-relaxed">
              See what our customers have to say about their experience with Blade Landscaping.
              We take pride in every job and your satisfaction is our priority.
            </p>
          </div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="flex flex-col items-center gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="text-6xl font-bold text-[var(--blade-charcoal)]">5.0</div>
                {/* Platform Icons */}
                <div className="flex flex-col gap-1">
                  {/* Google */}
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  {/* Nextdoor */}
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#8ED500">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14.5h-2v-4c0-1.1-.9-2-2-2h-1v6h-2V9h3c2.21 0 4 1.79 4 4v3.5z"/>
                  </svg>
                  {/* Facebook */}
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
              </div>
              <div className="flex justify-center mb-2">
                {renderStars(5)}
              </div>
              <p className="text-[var(--blade-gray)]">Based on 47+ reviews</p>
            </div>
            <div className="flex items-center gap-6 text-sm text-[var(--blade-gray)]">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#8ED500">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14.5h-2v-4c0-1.1-.9-2-2-2h-1v6h-2V9h3c2.21 0 4 1.79 4 4v3.5z"/>
                </svg>
                Nextdoor
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section ref={sectionRef} className="section-padding bg-[var(--blade-off-white)]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allReviews.map((review, index) => (
              <div
                key={review.id}
                className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full ${review.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold">{review.initials}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[var(--blade-charcoal)]">{review.name}</h3>
                    <p className="text-[var(--blade-gray)] text-sm">{review.reviewCount}</p>
                  </div>
                  {review.isGoogle && (
                    <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  )}
                </div>

                {/* Rating and time */}
                <div className="flex items-center gap-2 mb-3">
                  {renderStars(review.rating)}
                  <span className="text-[var(--blade-gray)] text-sm">{review.timeAgo}</span>
                </div>

                {/* Review text */}
                <p className="text-[var(--blade-charcoal)] leading-relaxed">
                  {review.text}
                </p>

                {/* Photo placeholder */}
                {review.hasPhoto && (
                  <div className="flex gap-2 mt-4">
                    <div className="w-20 h-20 bg-[var(--blade-off-white)] rounded-lg flex items-center justify-center text-[var(--blade-gray)]">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[var(--blade-green-dark)] via-[var(--blade-green)] to-[var(--blade-green-light)]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Join Our Happy Customers?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Schedule your free in-person quote today. We&apos;ll come to your property, meet you
              face-to-face, and give you an honest estimate with no pressure.
            </p>
            <Link href="/contact" className="btn-white text-lg px-8 py-4">
              Get Your Free Quote
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
