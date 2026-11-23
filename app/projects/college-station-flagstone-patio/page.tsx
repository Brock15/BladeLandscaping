import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { breadcrumbs } from '@/lib/seo';
import { business, pageMetadata } from '@/lib/site';

const path = '/projects/college-station-flagstone-patio';
export const metadata = pageMetadata('College Station Flagstone Patio & Fire-Pit Project', 'See a completed Blade Landscaping project in College Station: a natural flagstone patio around a circular fire-pit ring beside a covered porch.', path, '/media/ready/flagstone-patio.webp');

export default function PatioProject() {
  return <>
    <JsonLd data={breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Gallery', path: '/gallery' }, { name: 'College Station flagstone patio', path }])} />
    <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${business.url}${path}#page`, url: `${business.url}${path}`, name: 'College Station flagstone patio & fire-pit project', description: 'A completed Blade Landscaping patio project in College Station, Texas.', about: { '@type': 'CreativeWork', name: 'Flagstone patio around a fire-pit ring', creator: { '@id': `${business.url}/#business` }, contentLocation: { '@type': 'City', name: 'College Station', containedInPlace: { '@type': 'State', name: 'Texas' } }, image: `${business.url}/media/ready/flagstone-patio.webp` } }} />
    <section className="pt-36 pb-16 bg-[var(--blade-charcoal)] text-white"><div className="container-custom max-w-4xl"><Link className="text-[var(--blade-lime)] hover:underline" href="/gallery">← Project gallery</Link><p className="text-sm tracking-wider uppercase text-[var(--blade-lime)] mt-8 mb-4">Completed Blade project · College Station, Texas</p><h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Flagstone patio &amp; a place to gather.</h1><p className="text-lg text-white/80 leading-relaxed max-w-3xl">A natural-stone patio around a circular fire-pit ring, connecting a covered porch to an outdoor gathering area.</p></div></section>
    <section className="section-padding bg-white"><div className="container-custom max-w-5xl grid md:grid-cols-2 gap-10 items-start">
      <figure><Image src="/media/ready/flagstone-patio.webp" alt="Completed College Station Blade project with a flagstone patio surrounding a circular fire-pit ring beside a covered porch" width={768} height={1024} priority sizes="(max-width: 767px) 90vw, 45vw" className="w-full h-auto rounded-2xl" /><figcaption className="text-sm text-[var(--blade-gray)] mt-3">Completed project photograph · College Station</figcaption></figure>
      <div><span className="section-eyebrow">The Project</span><h2 className="section-title">Stone that connects the space.</h2><p className="text-[var(--blade-gray)] text-lg leading-relaxed mb-6">This College Station project brings a flagstone surface out from the covered porch and around the fire-pit ring. The irregular stone pattern gives the seating area a natural finish beside the home.</p><h2 className="text-2xl font-bold mb-4">Details in the finished space</h2><ul className="space-y-3 text-[var(--blade-gray)] mb-7"><li>Natural flagstone with an irregular layout</li><li>A patio surface around the circular fire-pit ring</li><li>A connection between the covered porch and open yard</li></ul><p className="text-[var(--blade-gray)] leading-relaxed mb-7">Planning a similar outdoor area? Share your photos, approximate dimensions, and how you want to use the space. We’ll review materials, site preparation, access, and the scope before preparing your estimate.</p><Link href="/services/hardscaping-outdoor-living" className="font-semibold text-[var(--blade-green)] hover:underline">Explore patios &amp; hardscaping →</Link><div className="mt-7"><Link href="/contact?service=hardscaping-outdoor-living" className="btn-primary">Request a free estimate <span aria-hidden="true">→</span></Link></div></div>
    </div></section>
  </>;
}
