import ContactForm from '@/components/ContactForm';
import { business, pageMetadata } from '@/lib/site';
import { lawnPlanById } from '@/lib/lawn-care';
import './estimate.css';

export const metadata = pageMetadata('Request a Free Estimate', 'Tell Blade Landscaping about your project, share photos, and request a free estimate in Bryan–College Station.', '/contact');

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ project?: string; service?: string; plan?: string }> }) {
  const parameters = await searchParams;
  const commercial = parameters.project === 'commercial' || parameters.service === 'commercial-landscaping';
  return (
    <section className="estimate-page">
      <div className="container-custom estimate-layout">
        <div className="estimate-intro">
          <span className="estimate-eyebrow">LET’S MAKE IT HAPPEN</span>
          <h1>{commercial ? <>A better property.<br /><span>Starts here.</span></> : <>Your next outdoor<br /><span>improvement.</span></>}</h1>
          <p className="estimate-lede">Tell us what you have in mind. Add a few photos, and we’ll get in touch to talk through your project and arrange a free estimate.</p>
          <div className="estimate-promise"><span aria-hidden="true">✓</span> Free estimates. Clear scope. No pressure.</div>
          <dl className="estimate-contact">
            <div><dt>CALL OR TEXT</dt><dd><a href={business.phoneHref}>{business.phone}</a></dd></div>
            <div><dt>EMAIL US</dt><dd><a href={`mailto:${business.email}`}>{business.email}</a></dd></div>
            <div><dt>LOCAL TO YOUR PROPERTY</dt><dd>Bryan and College Station, Texas</dd></div>
          </dl>
          <p className="estimate-hours">Monday–Friday, 7 AM–6 PM<br />Saturday–Sunday, 8 AM–4 PM<br /><span>Send a request online anytime.</span></p>
        </div>
        <div className="estimate-card">
          <ContactForm commercial={commercial} initialService={parameters.service} initialPlan={parameters.service === 'lawn-maintenance' ? lawnPlanById(parameters.plan) : undefined} />
        </div>
      </div>
    </section>
  );
}
