import Image from 'next/image';
import Link from 'next/link';
import { estimateHref } from '@/lib/estimate-links';
import { lawnCarePlans, completePropertyPlan } from '@/lib/lawn-care';
import './lawn-maintenance.css';

const estimateURL = estimateHref('lawn-maintenance');
const planURL = (id: string) => `${estimateURL}&plan=${id}`;
const included = ['Mowing suited to your lawn and its condition', 'String trimming around fences, trees, and obstacles', 'Edging along sidewalks and driveways', 'Walks, drives, and patios blown clean'];

export default function LawnMaintenance() {
  return <div className="lawn-page">
    <section className="lawn-hero"><div className="container-custom lawn-hero-grid">
      <div className="lawn-hero-copy"><Link href="/services" className="lawn-back">All services</Link><span className="lawn-eyebrow">LAWN MAINTENANCE · BRYAN–COLLEGE STATION</span><h1>Lawn care &amp; mowing.<br /><span>A cleaner finish.</span></h1><p>Regular mowing, crisp edges, and the finishing details that keep your property looking cared for. Lawn care starts at <strong>$60 per visit.</strong></p><div className="lawn-hero-actions"><Link href={estimateURL} className="btn-primary">Request a free estimate <span aria-hidden="true">→</span></Link><a href="#lawn-plans" className="lawn-text-link">Explore care plans</a></div><div className="lawn-hero-notes"><span>Weekly &amp; biweekly options</span><span>Free estimates</span></div></div>
      <figure className="lawn-hero-photo"><div><Image src="/media/ready/lawn-maintenance.webp" alt="Blade Landscaping team member mowing a residential lawn with a stand-on mower" fill priority sizes="(max-width: 767px) 90vw, 42vw" className="object-cover" style={{objectPosition:'50% 45%'}} /></div><figcaption>Real care for your lawn, from the Blade team.</figcaption></figure>
    </div></section>
    <section className="section-padding bg-white"><div className="container-custom lawn-overview">
      <div><span className="section-eyebrow">What We Do</span><h2 className="section-title">The basics. Done with care.</h2><p className="lawn-copy">A good-looking lawn comes down to consistent work. We mow, trim where the mower can’t reach, define the edges, and clear the hard surfaces before we leave.</p><p className="lawn-copy">Choose routine lawn care or a plan that gives your beds, shrubs, and wider landscape regular attention too. We’ll review your property and confirm the scope, schedule, and price before your service begins.</p><ul className="lawn-included">{included.map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul></div>
      <aside className="lawn-price-card"><span>LAWN CARE STARTS AT</span><p className="lawn-visit-price">$60<span> / visit</span></p><p>A $60 minimum applies to lawn care. Your exact price depends on the property and the work involved.</p><ul><li>Lawn size and current condition</li><li>Weekly or biweekly service</li><li>Trimming, edging, and landscape detail</li><li>Gate and equipment access</li></ul><Link href={estimateURL} className="btn-primary">Get my estimate <span aria-hidden="true">→</span></Link></aside>
    </div></section>
    <section id="lawn-plans" className="section-padding lawn-plan-section"><div className="container-custom">
      <div className="lawn-plan-heading"><span className="section-eyebrow">Tiers of Lawn Care</span><h2 className="section-title">A plan for the way you live.</h2><p>From regular mowing to care for the whole property. Choose the level of help you need, and we’ll tailor the details to your yard.</p></div>
      <p className="lawn-price-note"><strong>Starting monthly prices · 12-month maintenance agreement.</strong> Each price is a minimum and may increase based on yard size, condition, and the agreed scope of care.</p>
      <div className="lawn-plan-grid">{lawnCarePlans.map(plan => <article key={plan.id} className={`lawn-plan-card ${plan.id === 'premium' ? 'lawn-plan-featured' : ''}`}>
        {plan.id === 'premium' && <span className="lawn-plan-badge">Lawn + landscape care</span>}
        <h3>{plan.name}</h3><p className="lawn-plan-description">{plan.description}</p><p className="lawn-monthly-price"><span>From</span><strong>${plan.price}</strong><span>/ month</span></p><ul>{plan.features.map(feature => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul><Link href={planURL(plan.id)} className={plan.id === 'premium' ? 'btn-primary' : 'btn-secondary'}>Request an estimate <span aria-hidden="true">→</span></Link>
      </article>)}</div>
      <div className="lawn-complete"><div><span className="section-eyebrow">For More Involved Properties</span><h3>Complete Property Management</h3><p>Ongoing attention for properties that need a broader maintenance plan.</p><p className="lawn-complete-price">From <strong>$450</strong> / month</p></div><div><ul>{completePropertyPlan.features.map(feature => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul><Link href={planURL(completePropertyPlan.id)} className="lawn-text-link">Discuss complete property care <span aria-hidden="true">→</span></Link></div></div>
      <p className="lawn-plan-terms">All monthly plans are based on a 12-month maintenance agreement. Visit frequency, seasonal work, and any material allowance will be confirmed in your estimate and agreement. Additional landscaping work is quoted separately.</p>
    </div></section>
    <section className="section-padding bg-white"><div className="container-custom lawn-faq"><div><span className="section-eyebrow">Before We Begin</span><h2 className="section-title">A few things to know.</h2></div><div>
      <details><summary>How much will my lawn care cost?</summary><p>Lawn care has a $60 minimum per visit. The monthly packages start at the prices listed above. We review yard size, access, condition, and the level of care before giving you a property-specific estimate.</p></details>
      <details><summary>Do monthly packages require an agreement?</summary><p>Yes. The monthly packages are based on a 12-month maintenance agreement. We’ll confirm what is included and how visits and seasonal services are scheduled before you commit.</p></details>
      <details><summary>Can I request a one-time mow?</summary><p>Yes. Tell us about the property and the timing you need. We’ll confirm availability, the work included, and a price starting at the $60 lawn care minimum.</p></details>
      <details><summary>What does the mulch allowance include?</summary><p>Complete Property Management includes seasonal mulch touch-ups within a material allowance specified in your individual agreement. Full bed remulching or materials beyond that allowance are quoted separately.</p></details>
    </div></div></section>
    <section className="lawn-final-cta"><div className="container-custom"><span className="section-eyebrow">Let’s Take It From Here</span><h2>A better-kept property starts here.</h2><p>Tell us about your lawn. We’ll help you find the right level of care.</p><Link href={estimateURL} className="btn-primary">Request a free estimate <span aria-hidden="true">→</span></Link></div></section>
  </div>;
}
