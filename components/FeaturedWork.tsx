import Image from 'next/image';
import Link from 'next/link';
import { featuredProjects } from '@/lib/projects';

export default function FeaturedWork() {
  return <section className="section-padding bg-white" aria-labelledby="our-work-heading"><div className="container-custom">
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10"><div><span className="section-eyebrow">A Closer Look</span><h2 id="our-work-heading" className="section-title mb-0">Our Work</h2></div><Link href="/gallery" className="text-[var(--blade-green)] font-semibold">Explore the Gallery <span aria-hidden="true">→</span></Link></div>
    <div className="work-showcase">{featuredProjects.map((project, index) => <Link href={`/gallery#${project.id}`} key={project.id} className={`work-tile group ${index === 0 ? 'work-tile-lead' : ''}`}><div className="relative h-full min-h-64"><Image src={project.images[0].src} alt={project.images[0].alt} fill sizes={index === 0 ? '(max-width: 767px) 90vw, 45vw' : '(max-width: 767px) 90vw, 40vw'} className="object-cover" /></div><div className="work-caption"><h3 className="text-lg font-bold">{project.title}</h3><p className="text-sm text-white/85 mt-1">{project.caption}</p><span className="block text-sm font-semibold mt-3">View Project Photos <span aria-hidden="true">→</span></span></div></Link>)}</div>
  </div></section>;
}
