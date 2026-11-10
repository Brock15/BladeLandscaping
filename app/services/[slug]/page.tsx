import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services } from '@/lib/services';
import { pageMetadata } from '@/lib/site';
import ProjectProcess from '@/components/ProjectProcess';
import ContactCTA from '@/components/ContactCTA';

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return pageMetadata(`${service.title} in Bryan–College Station`, `${service.summary} Discuss your project with Blade Landscaping in Bryan, College Station, and surrounding communities.`, `/services/${slug}`);
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const commercial = slug === 'commercial-landscaping';
  const estimateURL = commercial ? '/contact?project=commercial' : `/contact?service=${slug}`;
  return <>
    <section className="relative pt-32 pb-20 bg-[var(--blade-charcoal)] overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-[var(--blade-green-dark)]/30 to-transparent" /><div className="container-custom relative z-10"><div className="max-w-4xl mx-auto text-center"><Link href="/services" className="inline-block text-[var(--blade-lime)] text-sm mb-6 hover:underline">← All Services</Link><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{service.title}</h1><p className="text-xl text-white/75 max-w-3xl mx-auto leading-relaxed">{service.summary}</p><p className="text-white/65 text-sm mt-5">Serving Bryan, College Station & surrounding communities</p><Link href={estimateURL} className="btn-primary mt-8">{commercial ? 'Request a Commercial Proposal' : 'Request a Project Estimate'} <span aria-hidden="true">→</span></Link></div></div></section>
    <section className="section-padding bg-white"><div className="container-custom"><div className={`grid ${service.image ? 'lg:grid-cols-2' : ''} gap-12 items-center`}><div><span className="text-[var(--blade-green)] font-semibold text-sm uppercase tracking-wider">Built Around Your Property</span><h2 className="text-3xl md:text-4xl font-bold text-[var(--blade-charcoal)] mt-4 mb-6">{service.introduction}</h2><p className="text-[var(--blade-gray)] text-lg leading-relaxed">{service.detail}</p><Link href={estimateURL} className="inline-flex items-center gap-2 text-[var(--blade-green)] font-semibold mt-7 hover:underline">Discuss your project <span aria-hidden="true">→</span></Link></div>{service.image && <figure><div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"><Image src={service.image} alt={service.imageAlt || ''} fill sizes="(max-width: 1024px) 90vw, 45vw" className="object-cover" /></div><figcaption className="text-sm text-[var(--blade-gray)] mt-3">{service.imageCaption}</figcaption></figure>}</div></div></section>
    <section className="section-padding bg-[var(--blade-off-white)]"><div className="container-custom"><h2 className="text-3xl md:text-4xl font-bold text-[var(--blade-charcoal)] mb-10">What We Can Discuss</h2><div className="grid md:grid-cols-3 gap-7">{service.offerings.map((offering) => <article className="rounded-2xl bg-white shadow-lg p-7" key={offering.title}><h3 className="text-xl font-bold text-[var(--blade-charcoal)] mb-4">{offering.title}</h3><p className="text-[var(--blade-gray)] leading-relaxed">{offering.description}</p></article>)}</div><p className="mt-9 p-5 rounded-xl border border-[var(--blade-green)]/15 text-[var(--blade-gray)] leading-relaxed">{service.considerations}</p></div></section>
    <ProjectProcess commercial={commercial} />
    <section className="section-padding bg-white"><div className="container-custom max-w-4xl"><span className="text-[var(--blade-green)] font-semibold text-sm uppercase tracking-wider">Before You Get Started</span><h2 className="text-3xl md:text-4xl font-bold text-[var(--blade-charcoal)] mt-4 mb-9">Your Questions, Answered</h2><div className="space-y-4">{service.questions.map((question) => <details key={question.question} className="bg-[var(--blade-off-white)] rounded-xl border border-[var(--blade-light)] p-6"><summary className="cursor-pointer text-lg font-semibold text-[var(--blade-charcoal)]">{question.question}</summary><p className="text-[var(--blade-gray)] leading-relaxed mt-4">{question.answer}</p></details>)}</div></div></section>
    {commercial && <section className="section-padding bg-[var(--blade-off-white)]"><div className="container-custom text-center max-w-3xl"><h2 className="text-3xl md:text-4xl font-bold text-[var(--blade-charcoal)] mb-5">Let’s Review Your Property Needs</h2><p className="text-[var(--blade-gray)] text-lg mb-8">Tell us about your property, recurring service needs, or upcoming improvements. Include any plans, requested scope, and bid requirements in your inquiry.</p><Link href={estimateURL} className="btn-primary">Request a Commercial Proposal <span aria-hidden="true">→</span></Link></div></section>}
    <ContactCTA commercial={commercial} />
  </>;
}
