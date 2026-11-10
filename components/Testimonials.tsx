'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { featuredReviews, reviewSourceLabel, reviewSummary } from '@/lib/reviews';
import ReviewStars from './ReviewStars';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const interval = setInterval(() => setActiveIndex((previous) => (previous + 1) % featuredReviews.length), 7000);
    return () => clearInterval(interval);
  }, [paused]);

  return <section className="section-padding bg-[var(--blade-charcoal)] relative overflow-hidden" id="customer-reviews" aria-labelledby="customer-reviews-heading">
    <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--blade-green)]/5 rounded-full blur-3xl" aria-hidden="true" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--blade-lime)]/5 rounded-full blur-3xl" aria-hidden="true" />
    <div className="container-custom relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-10"><span className="inline-block text-[var(--blade-lime)] font-semibold text-sm uppercase tracking-wider mb-4">Testimonials</span><h2 id="customer-reviews-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">What Our Clients Say</h2><p className="text-[var(--blade-silver)] text-lg leading-relaxed">Customer feedback on the work, communication, and care behind each project.</p></div>
      <div className="text-center mb-9"><div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-6 py-3"><span className="text-2xl font-bold text-[var(--blade-lime)]">{reviewSummary.displayCount}</span><span className="text-sm font-medium text-white">{reviewSummary.label}</span></div><p className="text-xs text-white/65 mt-3">{reviewSummary.googleRating} on Google · Google &amp; Nextdoor feedback</p></div>
      <div className="max-w-4xl mx-auto"><div className="grid">{featuredReviews.map((review, index) => <figure key={review.id} aria-hidden={index !== activeIndex} className={`col-start-1 row-start-1 bg-white/5 backdrop-blur-sm rounded-3xl p-7 sm:p-10 md:p-12 transition-opacity duration-500 ${index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="w-11 h-11 bg-[var(--blade-green)] rounded-full flex items-center justify-center text-white text-3xl font-bold mb-5" aria-hidden="true">“</div>
        <blockquote className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed mb-7">“{review.text}{review.excerpt ? ' …' : ''}”</blockquote>
        <figcaption className="flex items-center gap-3 sm:gap-4 flex-wrap"><span className={`w-11 h-11 sm:w-14 sm:h-14 rounded-full ${review.color} flex items-center justify-center shrink-0 text-white font-bold`} aria-hidden="true">{review.initials}</span><span><span className="block text-white font-semibold">{review.name}</span><span className="text-[var(--blade-silver)] text-sm">{reviewSourceLabel(review)}{review.excerpt ? ' · Excerpt' : ''}</span></span><span className="sm:ml-auto"><ReviewStars rating={review.rating} /></span></figcaption>
      </figure>)}</div>
      <div className="flex justify-center items-center flex-wrap gap-4 mt-7"><div className="flex items-center gap-1">{featuredReviews.map((review, index) => <button key={review.id} onClick={() => { setActiveIndex(index); setPaused(true); }} className="min-w-10 min-h-11 flex items-center justify-center" aria-label={`Read review by ${review.name}`} aria-pressed={index === activeIndex}><span className={`block h-3 rounded-full transition-all ${index === activeIndex ? 'bg-[var(--blade-green-light)] w-7' : 'bg-white/30 w-3'}`} /></button>)}</div><button className="text-xs text-white/75 hover:text-white min-h-11 px-3" onClick={() => setPaused(!paused)} aria-label={paused ? 'Resume review slideshow' : 'Pause review slideshow'}>{paused ? 'Play reviews' : 'Pause reviews'}</button></div>
      <div className="text-center mt-4"><Link href="/reviews" className="inline-flex gap-2 items-center text-[var(--blade-lime)] font-semibold hover:text-white transition-colors">Read More Reviews <span aria-hidden="true">→</span></Link></div>
      </div>
    </div>
  </section>;
}
