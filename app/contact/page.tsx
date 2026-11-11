import ContactForm from '@/components/ContactForm';
import PageIntro from '@/components/PageIntro';
import { business } from '@/lib/site';

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ project?: string; service?: string }> }) {
  const parameters = await searchParams;
  const commercial = parameters.project === 'commercial' || parameters.service === 'commercial-landscaping';
  return <><PageIntro eyebrow="Get In Touch" title={commercial ? 'Request a Commercial Proposal' : 'Let’s Talk About Your Project'}><p>Share a few details and we&apos;ll discuss the next step for your property.</p></PageIntro>
    <section className="section-padding bg-white contact-section"><div className="container-custom"><div className="contact-layout">
      <div className="min-w-0"><h2 className="text-2xl md:text-3xl font-bold mb-6">{commercial ? 'Your Property & Project' : 'Request a Project Estimate'}</h2><ContactForm commercial={commercial} initialService={parameters.service} /></div>
      <aside className="min-w-0"><h2 className="text-2xl font-bold mb-6">Prefer to Reach Out Directly?</h2><div className="space-y-5">
        <div className="contact-info-card"><h3>Call or Text</h3><a href={business.phoneHref}>{business.phone}</a><p>Discuss your project or arrange an estimate.</p></div>
        <div className="contact-info-card"><h3>Email</h3><a href={`mailto:${business.email}`}>{business.email}</a><p>Send your project details or questions.</p></div>
        <div className="contact-info-card"><h3>Service Area</h3><p className="font-semibold">Bryan, College Station &amp; surrounding areas</p></div>
        <div className="contact-info-card"><h3>Business Hours</h3><p>Monday–Friday: 7 AM–6 PM<br />Saturday–Sunday: 8 AM–4 PM</p></div>
      </div><div className="flex flex-wrap gap-5 mt-7 text-[var(--blade-green)] font-semibold"><a href={business.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href={business.nextdoor} target="_blank" rel="noopener noreferrer">Nextdoor ↗</a></div></aside>
    </div></div></section></>;
}
