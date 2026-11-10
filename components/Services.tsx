import Image from 'next/image';
import Link from 'next/link';

const featuredServices = [
  { title: 'Patios & Outdoor Living', description: 'Explore paver and stone surfaces, garden paths, and more usable outdoor spaces.', slug: 'hardscaping-outdoor-living', image: '/media/inspiration/patio-concept.webp', alt: 'AI-generated inspiration for a limestone patio with outdoor seating and planted borders' },
  { title: 'Rock & Stone Landscaping', description: 'Bring natural texture and definition to your property with decorative rock, stone, and edging.', slug: 'rock-stone-landscaping', image: '/media/inspiration/stone-garden-concept.webp', alt: 'AI-generated garden concept with a limestone path, river stones, boulders, and planting' },
  { title: 'Landscape Installation', description: 'Bring planting beds, fresh sod, and landscape materials together around your property.', slug: 'landscape-installation', image: '/media/inspiration/landscape-installation-concept.webp', alt: 'AI-generated landscape inspiration showing a lawn, planting beds, and a limestone entrance walk' },
];

const additionalServices = [
  ['landscape-renovations', 'Landscape Renovations'],
  ['drainage-grading', 'Drainage & Grading'],
  ['commercial-landscaping', 'Commercial Landscaping'],
];

export default function Services() {
  return <section id="services" className="section-padding bg-[var(--blade-off-white)]">
    <div className="container-custom">
      <div className="text-center max-w-3xl mx-auto mb-12"><span className="inline-block text-[var(--blade-green)] font-semibold text-sm uppercase tracking-wider mb-4">Explore the Possibilities</span><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--blade-charcoal)] mb-6">Landscaping Built Around Your Property</h2><p className="text-[var(--blade-gray)] text-lg leading-relaxed">Landscape installations, renovations, and outdoor improvements for residential and commercial spaces in Bryan–College Station.</p></div>
      <div className="grid md:grid-cols-3 gap-7">{featuredServices.map((service) => <article key={service.slug} className="group bg-white rounded-2xl overflow-hidden shadow-lg card-hover"><Link href={`/services/${service.slug}`} className="block"><div className="relative aspect-[4/3] overflow-hidden"><Image src={service.image} alt={service.alt} fill sizes="(max-width: 768px) 90vw, 30vw" className="object-cover transition-transform duration-500 group-hover:scale-105" /></div><div className="p-6"><h3 className="text-xl font-bold text-[var(--blade-charcoal)] mb-3 group-hover:text-[var(--blade-green)] transition-colors">{service.title}</h3><p className="text-[var(--blade-gray)] leading-relaxed mb-5">{service.description}</p><span className="inline-flex items-center gap-2 text-[var(--blade-green)] font-semibold">Explore This Service <span aria-hidden="true">→</span></span></div></Link></article>)}</div>
      <div className="grid sm:grid-cols-3 gap-4 mt-8">{additionalServices.map(([slug, title]) => <Link key={slug} href={`/services/${slug}`} className="flex items-center justify-between gap-4 rounded-xl border border-[var(--blade-green)]/15 bg-white px-5 py-4 text-sm font-semibold text-[var(--blade-green-dark)] hover:shadow-md transition-shadow">{title}<span aria-hidden="true">→</span></Link>)}</div>
    </div>
  </section>;
}
