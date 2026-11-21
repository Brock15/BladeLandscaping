import Image from 'next/image';
import Link from 'next/link';
import { estimateHref } from '@/lib/estimate-links';
import { processSteps, type Service } from '@/lib/services';
import type { InstallationPageDetails } from '@/lib/service-page-details';
import './lawn-maintenance.css';
import './installation-service.css';

export default function InstallationService({ service, details }: { service: Service; details: InstallationPageDetails }) {
  const estimateURL = estimateHref(service.slug);
  return (
    <div className="installation-service">
      <section className="lawn-hero">
        <div className="container-custom lawn-hero-grid">
          <div className="lawn-hero-copy">
            <Link href="/services" className="lawn-back">All services</Link>
            <span className="lawn-eyebrow">{details.eyebrow} · BRYAN–COLLEGE STATION</span>
            <h1>{details.title}<br /><span>{details.accent}</span></h1>
            <p>{details.summary}</p>
            <div className="lawn-hero-actions">
              <Link href={estimateURL} className="btn-primary">Request a free estimate <span aria-hidden="true">→</span></Link>
              <Link href={`/gallery#${details.galleryProject}`} className="lawn-text-link">See our work</Link>
            </div>
            <div className="lawn-hero-notes"><span>Residential &amp; commercial</span><span>Free estimates</span></div>
          </div>
          <figure className="lawn-hero-photo">
            <div><Image src={details.image} alt={details.imageAlt} fill priority sizes="(max-width: 767px) 90vw, 42vw" className="object-cover" style={{ objectPosition: details.imagePosition }} /></div>
            <figcaption>{details.imageCaption}</figcaption>
          </figure>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom lawn-overview">
          <div>
            <span className="section-eyebrow">What We Do</span>
            <h2 className="section-title">{details.overviewTitle}</h2>
            <p className="lawn-copy">{details.overview}</p>
            <p className="lawn-copy">{service.detail}</p>
            <ul className="lawn-included">{details.included.map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
          </div>
          <aside className="lawn-price-card installation-estimate-card">
            <span>YOUR PROJECT ESTIMATE</span>
            <h3>Built around<br />your property.</h3>
            <p>Every space is different. We’ll review your property and confirm the work, materials, and price in your estimate.</p>
            <ul>{details.estimateFactors.map(factor => <li key={factor}>{factor}</li>)}</ul>
            <Link href={estimateURL} className="btn-primary">Get my estimate <span aria-hidden="true">→</span></Link>
          </aside>
        </div>
      </section>

      <section className="section-padding lawn-plan-section">
        <div className="container-custom">
          <div className="lawn-plan-heading">
            <span className="section-eyebrow">Explore the Possibilities</span>
            <h2 className="section-title">{details.optionsTitle}</h2>
            <p>{details.optionsIntro}</p>
          </div>
          <div className="lawn-plan-grid installation-options">
            {service.offerings.map((offering, index) => (
              <article key={offering.title} className="installation-option">
                <span className="installation-option-number" aria-hidden="true">0{index + 1}</span>
                <h3>{offering.title}</h3>
                <p>{offering.description}</p>
                <Link href={estimateURL}>Discuss this work <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
          <p className="installation-preparation">{details.preparation}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom installation-process">
          <div className="installation-process-heading">
            <span className="section-eyebrow">How It Works</span>
            <h2 className="section-title">A clear plan.<br />From the start.</h2>
            <p>Know what comes next and who to talk to along the way.</p>
          </div>
          <ol>{processSteps.map((step, index) => (
            <li key={step.title}>
              <span className="installation-process-number" aria-hidden="true">0{index + 1}</span>
              <div><h3>{step.title}</h3><p>{step.description}</p></div>
            </li>
          ))}</ol>
        </div>
      </section>

      <section className="section-padding installation-faq-section">
        <div className="container-custom lawn-faq">
          <div><span className="section-eyebrow">Before We Begin</span><h2 className="section-title">A few things to know.</h2></div>
          <div>{service.questions.map(question => (
            <details key={question.question}><summary>{question.question}</summary><p>{question.answer}</p></details>
          ))}</div>
        </div>
      </section>

      <section className="lawn-final-cta">
        <div className="container-custom">
          <span className="section-eyebrow">Let’s Take It From Here</span>
          <h2>{details.closingTitle}</h2>
          <p>{details.closingCopy}</p>
          <Link href={estimateURL} className="btn-primary">Request a free estimate <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </div>
  );
}
