import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedWork() {
  return <section className="section-padding bg-white"><div className="container-custom">
    <div className="text-center max-w-3xl mx-auto mb-12"><span className="inline-block text-[var(--blade-green)] font-semibold text-sm uppercase tracking-wider mb-4">See the Difference</span><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--blade-charcoal)] mb-6">Our Work Speaks for Itself</h2><p className="text-[var(--blade-gray)] text-lg">A closer look at landscape improvements from our existing project portfolio.</p></div>
    <div className="grid md:grid-cols-2 gap-8">
      {[{ image: '/media/optimized/landscape-hero.webp', title: 'Rock Bed Installation', description: 'Decorative stone and defined bed edges around an existing residential landscape.', alt: 'Completed decorative rock beds around a tree beside a residential driveway' }, { image: '/media/optimized/commercial.webp', title: 'Commercial Landscape Improvements', description: 'A planted landscape area from our commercial installation footage.', alt: 'Planting and stone landscaping alongside a commercial property walkway' }].map((project) => <Link key={project.title} href="/gallery" className="group block rounded-2xl overflow-hidden bg-white shadow-lg card-hover"><div className="relative aspect-[4/3]"><Image src={project.image} alt={project.alt} fill sizes="(max-width: 768px) 90vw, 45vw" className="object-cover" /></div><div className="p-6 sm:p-8"><h3 className="text-xl font-bold text-[var(--blade-charcoal)] mb-3">{project.title}</h3><p className="text-[var(--blade-gray)] leading-relaxed mb-5">{project.description}</p><span className="font-semibold text-[var(--blade-green)]">View Our Work <span aria-hidden="true">→</span></span></div></Link>)}
    </div>
  </div></section>;
}
