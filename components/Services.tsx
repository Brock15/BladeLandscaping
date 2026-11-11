import Image from 'next/image';
import Link from 'next/link';
import { serviceCards } from '@/lib/projects';

export default function Services() {
  return <section id="services" className="section-padding bg-[var(--blade-off-white)]"><div className="container-custom">
    <div className="text-center max-w-3xl mx-auto mb-12"><span className="section-eyebrow">What We Do</span><h2 className="section-title">Make More of Your Outdoors</h2><p className="section-description">Landscape installations, natural stone, and outdoor improvements for homes and commercial properties.</p></div>
    <div className="grid md:grid-cols-3 gap-7">{serviceCards.map((service) => <article key={service.slug} className="group bg-white rounded-2xl overflow-hidden shadow-lg card-hover"><Link href={`/services/${service.slug}`} className="block h-full"><div className="relative aspect-[4/3] overflow-hidden"><Image src={service.image} alt={service.alt} fill sizes="(max-width: 767px) 90vw, 30vw" className="object-cover" /></div><div className="p-6"><h3 className="text-xl font-bold text-[var(--blade-charcoal)] mb-3">{service.title}</h3><p className="text-[var(--blade-gray)] leading-relaxed mb-5">{service.description}</p><span className="text-[var(--blade-green)] font-semibold">Explore Service <span aria-hidden="true">→</span></span></div></Link></article>)}</div>
    <div className="text-center mt-9"><Link href="/services" className="btn-secondary">View All Services <span aria-hidden="true">→</span></Link></div>
  </div></section>;
}
