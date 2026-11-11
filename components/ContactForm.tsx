'use client';

import { useRef, useState, type FormEvent } from 'react';
import { budgetOptions, timelineOptions, projectOptions, validateInquiry } from '@/lib/leads';

const isLocalPreview = process.env.NODE_ENV === 'development';
const FORM_ENDPOINT = isLocalPreview ? '/api/estimate-preview' : 'https://formspree.io/f/xkovgggz';

export default function ContactForm({ commercial = false, initialService = '' }: { commercial?: boolean; initialService?: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [error, setError] = useState('');
  const resultRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);
  const submissionId = useRef('');
  const selectedService = projectOptions.some(([value]) => value === initialService) ? initialService : '';
  function showError(message: string) {
    setError(message);
    requestAnimationFrame(() => errorRef.current?.focus());
  }
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    const data = new FormData(event.currentTarget);
    const validationError = validateInquiry(Object.fromEntries(data.entries()));
    if (validationError) { showError(validationError); return; }
    const parameters = new URLSearchParams(window.location.search);
    data.set('leadSource', parameters.get('utm_source') || 'website');
    data.set('sourcePage', window.location.pathname);
    if (!submissionId.current) submissionId.current = crypto.randomUUID();
    data.set('submissionId', submissionId.current);
    setStatus('sending');
    try {
      const response = await fetch(FORM_ENDPOINT, isLocalPreview ? { method: 'POST', body: data } : {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...Object.fromEntries(data.entries()), submittedAt: new Date().toISOString(), photoReferences: [] }),
      });
      const result = await response.json();
      if (!response.ok || (isLocalPreview && !result.accepted)) throw new Error(result.error || 'Your request was not accepted. Please try again or call us.');
      setStatus('sent');
      requestAnimationFrame(() => resultRef.current?.focus());
    } catch (submissionError) {
      showError(submissionError instanceof Error ? submissionError.message : 'Unable to send your request. Please try again or call us.');
      setStatus('idle');
    }
  }
  if (status === 'sent') return <div className="form-result" role="status" tabIndex={-1} ref={resultRef}><span className="eyebrow">{isLocalPreview ? 'PREVIEW COMPLETE' : 'REQUEST RECEIVED'}</span><h2>{isLocalPreview ? 'Your preview request worked.' : 'Thank you for sharing your project.'}</h2><p>{isLocalPreview ? 'This was a preview only. Nothing was saved or sent to the team.' : 'The Blade Landscaping team has received your details and will contact you to discuss the next step.'}</p><button type="button" onClick={() => { setStatus('idle'); submissionId.current = ''; }}>Start Another Request <span aria-hidden="true">→</span></button></div>;
  return <form className="estimate-form" onSubmit={handleSubmit} aria-label={commercial ? 'Commercial project inquiry' : 'Project estimate request'}>
    {isLocalPreview && <p className="preview-note"><strong>Local preview.</strong> You can try this form without sending or saving a real request.</p>}
    <p className="text-sm text-[var(--blade-gray)] mb-6" id="contact-method-help">Fields marked * are required. Please provide a phone number or email so we can respond.</p>
    <div className="form-honeypot" aria-hidden="true"><label>Company website<input name="companyWebsite" type="text" tabIndex={-1} autoComplete="off" /></label></div>
    <div className="form-grid">
      <label>Full name *<input name="name" autoComplete="name" required maxLength={160} placeholder="Your name" /></label>
      <label>Property location *<input name="propertyLocation" autoComplete="street-address" required maxLength={250} placeholder="Street address or city / ZIP" /></label>
      <label>Phone<input name="phone" type="tel" autoComplete="tel" maxLength={40} placeholder="(210) 555-0123" aria-describedby="contact-method-help" /></label>
      <label>Email<input name="email" type="email" autoComplete="email" maxLength={250} placeholder="you@example.com" aria-describedby="contact-method-help" /></label>
      <label>Property type *<select name="propertyType" defaultValue={commercial ? 'Commercial' : 'Residential'} required><option>Residential</option><option>Commercial</option></select></label>
      <label>Project type *<select name="service" defaultValue={commercial ? 'commercial-landscaping' : selectedService} required><option value="" disabled>Select your project</option>{projectOptions.map(([value, title]) => <option value={value} key={value}>{title}</option>)}</select></label>
      <label>Estimated budget <span className="optional">(optional)</span><select name="budget" defaultValue=""><option value="">Select a range</option>{budgetOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
      <label>Preferred timeline <span className="optional">(optional)</span><select name="timeline" defaultValue=""><option value="">Select your timeline</option>{timelineOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
    </div>
    <label>Project description *<textarea name="message" required rows={4} maxLength={5000} placeholder={commercial ? 'Property name, areas to improve, scope, and any bid requirements…' : 'Tell us about the space, your priorities, and the improvements you have in mind…'} /></label>
    <p className="field-help">Have photos or plans? Mention them here and we&apos;ll arrange a way to share them.</p>
    {error && <p className="form-error" role="alert" tabIndex={-1} ref={errorRef}>{error}</p>}
    <div className="form-submit"><button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Submitting…' : commercial ? 'Request a Commercial Proposal' : 'Request My Project Estimate'}<span aria-hidden="true">→</span></button><p>Your information is used to respond to your project inquiry.</p></div>
  </form>;
}
