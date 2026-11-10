'use client';

import { useRef, useState, type FormEvent } from 'react';
import { budgetOptions, timelineOptions, projectOptions, validateInquiry, validatePhotos } from '@/lib/leads';

const FORM_ENDPOINT = 'https://formspree.io/f/xkovgggz';
const isLocalPreview = process.env.NODE_ENV === 'development';

export default function ContactForm({ commercial = false, initialService = '' }: { commercial?: boolean; initialService?: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [error, setError] = useState('');
  const [photoNames, setPhotoNames] = useState<string[]>([]);
  const resultRef = useRef<HTMLDivElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    const data = new FormData(event.currentTarget);
    const fields = Object.fromEntries(Array.from(data.entries()).filter(([name]) => name !== 'photos'));
    const photos = data.getAll('photos').filter((entry): entry is File => entry instanceof File && entry.size > 0);
    const validationError = validateInquiry(fields) || validatePhotos(photos);
    if (validationError) { setError(validationError); return; }
    const parameters = new URLSearchParams(window.location.search);
    data.set('leadSource', parameters.get('utm_source') || 'website');
    data.set('sourcePage', window.location.pathname);
    setStatus('sending');
    try {
      let response: Response;
      if (isLocalPreview) {
        response = await fetch('/api/estimate', { method: 'POST', body: data });
      } else {
        const payload = Object.fromEntries(Array.from(data.entries()).filter(([name]) => name !== 'photos'));
        response = await fetch(FORM_ENDPOINT, {
          method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...payload, submittedAt: new Date().toISOString(), photoReferences: [] }),
        });
      }
      const result = await response.json();
      if (!response.ok || (isLocalPreview && (!result.accepted || !result.simulated))) throw new Error(result.error || 'Your request was not accepted. Please try again or call us.');
      setStatus('sent');
      requestAnimationFrame(() => resultRef.current?.focus());
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Unable to send your request. Please try again.');
      setStatus('idle');
    }
  }

  if (status === 'sent') return (
    <div className="form-result" role="status" tabIndex={-1} ref={resultRef}>
      <span className="eyebrow">{isLocalPreview ? 'LOCAL PREVIEW' : 'REQUEST RECEIVED'}</span>
      <h2>{isLocalPreview ? 'Your test request was accepted.' : 'Thank you for sharing your project.'}</h2>
      <p>{isLocalPreview ? 'This was a simulated submission. No request, photos, emails, or messages were sent to Blade, Formspree, MowProHQ, or Google Voice. Your details have not been saved.' : 'Your estimate request was accepted by our form provider. We will review the details and contact you to discuss the next step.'}</p>
      <button className="button button-dark" onClick={() => { setStatus('idle'); setPhotoNames([]); }}>Start another request <span aria-hidden="true">↗</span></button>
    </div>
  );

  return (
    <form className="estimate-form" onSubmit={handleSubmit} aria-label={commercial ? 'Commercial project inquiry' : 'Project estimate request'}>
      {isLocalPreview && <p className="preview-note"><strong>Local preview.</strong> Submissions are simulated. Nothing is sent to the business or its systems.</p>}
      <div className="form-heading"><span className="eyebrow">YOUR NEXT STEP</span><h2>{commercial ? 'Tell us about your property.' : 'Tell us what you have in mind.'}</h2><p>A few details will help us prepare for the conversation. Fields marked * are required.</p></div>
      <div className="form-grid">
        <label>Full name *<input name="name" autoComplete="name" required maxLength={250} placeholder="Your name" /></label>
        <label>Phone *<input name="phone" type="tel" autoComplete="tel" required maxLength={40} placeholder="(210) 555-0123" /></label>
        <label>Email *<input name="email" type="email" autoComplete="email" required maxLength={250} placeholder="you@example.com" /></label>
        <label>Property location *<input name="propertyLocation" autoComplete="street-address" required maxLength={250} placeholder="Street address or city / ZIP" /></label>
        <label>Property type *<select name="propertyType" defaultValue={commercial ? 'Commercial' : 'Residential'} required><option>Residential</option><option>Commercial</option></select></label>
        <label>Project type *<select name="service" defaultValue={commercial ? 'commercial-landscaping' : initialService} required><option value="" disabled>Select your project</option>{projectOptions.map(([value, title]) => <option value={value} key={value}>{title}</option>)}</select></label>
        <label>Estimated budget *<select name="budget" defaultValue="" required><option value="" disabled>Select a range</option>{budgetOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
        <label>Preferred timeline *<select name="timeline" defaultValue="" required><option value="" disabled>Select your timeline</option>{timelineOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
      </div>
      <label>Project description *<textarea name="message" required rows={4} maxLength={5000} placeholder={commercial ? 'Property name, areas to improve or maintain, scope, and any bid requirements…' : 'What would you like to change? Tell us about the space, your priorities, and any ideas you have…'} /></label>
      {isLocalPreview ? <label className="photo-field">Photos <span className="optional">(optional)</span><input name="photos" type="file" accept="image/jpeg,image/png,image/webp,image/heic,image/heif" multiple aria-describedby="photo-help" onChange={(event) => {
        const photos = Array.from(event.target.files || []);
        const photoError = validatePhotos(photos);
        setError(photoError || '');
        setPhotoNames(photoError ? [] : photos.map((photo) => photo.name));
        if (photoError) event.target.value = '';
      }} /><span id="photo-help" className="field-help">Up to 5 photos, 5 MB each (20 MB total). In this preview, photos are checked locally and discarded.</span>{photoNames.length > 0 && <span className="field-help">Selected: {photoNames.join(', ')}</span>}</label> : <p className="field-help">Have project photos or plans? Mention them above and we can arrange how to share them.</p>}
      {error && <p className="form-error" role="alert">{error}</p>}
      <div className="form-submit"><button className="button button-dark" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Submitting…' : isLocalPreview ? 'Test Estimate Request' : commercial ? 'Request a Commercial Proposal' : 'Request My Project Estimate'}<span aria-hidden="true">↗</span></button><p>Your information is used to respond to your project inquiry.</p></div>
    </form>
  );
}
