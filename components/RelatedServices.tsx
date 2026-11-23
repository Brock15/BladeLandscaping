import Link from 'next/link';
import { services } from '@/lib/services';

const mainServices = ['lawn-maintenance', 'sod-installation', 'landscape-installation', 'hardscaping-outdoor-living'];

export default function RelatedServices({ current }: { current: string }) {
  return <section className="py-12 bg-[var(--blade-off-white)]" aria-labelledby="related-services-heading"><div className="container-custom">
    <h2 id="related-services-heading" className="text-xl font-bold mb-3">More ways to care for your property</h2>
    <p className="text-[var(--blade-gray)] mb-5">Serving homes and commercial properties in Bryan and College Station, Texas.</p>
    <ul className="flex flex-wrap gap-x-7 gap-y-4">{mainServices.filter(slug => slug !== current).map(slug => {
      const service = services.find(item => item.slug === slug)!;
      return <li key={slug}><Link className="font-semibold text-[var(--blade-green)] hover:underline" href={`/services/${slug}`}>{service.title} <span aria-hidden="true">→</span></Link></li>;
    })}</ul>
  </div></section>;
}
