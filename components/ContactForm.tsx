'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { budgetOptions, timelineOptions, projectOptions, validateInquiry, validatePhotos } from '@/lib/leads';
import { prepareInquiryPhoto } from '@/lib/inquiry-photos';
import { business } from '@/lib/site';

const isLocalPreview = process.env.NODE_ENV === 'development';
const FORM_ENDPOINT = isLocalPreview ? '/api/estimate-preview' : '/api/estimate';
const steps = ['Your project', 'Your property', 'Your details'];
const choiceLabels: Record<string, string> = {
  'landscape-installation': 'Sod & planting',
  'landscape-renovations': 'Beds & mulch',
  'hardscaping-outdoor-living': 'Patios & hardscaping',
  'drainage-grading': 'Drainage & grading',
  'rock-stone-landscaping': 'Rock & stone',
  'commercial-landscaping': 'Commercial landscaping',
  'lawn-maintenance': 'Lawn maintenance',
  'cleanup-removal': 'Property cleanup',
  other: 'Something else',
};
type Photo = { id: string; file: File; preview: string };
type Fields = { name: string; propertyLocation: string; phone: string; email: string; propertyType: string; budget: string; timeline: string; message: string };

export default function ContactForm({ commercial = false, initialService = '', initialPlan }: { commercial?: boolean; initialService?: string; initialPlan?: { name: string; price: number } }) {
  const initialSelection = projectOptions.some(([value]) => value === initialService) ? initialService : commercial ? 'commercial-landscaping' : '';
  const [step, setStep] = useState(0);
  const initialMessage = initialPlan ? `I'd like an estimate for ${initialPlan.name}, starting at $${initialPlan.price}/month on a 12-month maintenance agreement.` : '';
  const [fields, setFields] = useState<Fields>({ name: '', propertyLocation: '', phone: '', email: '', propertyType: commercial ? 'Commercial' : 'Residential', budget: '', timeline: '', message: initialMessage });
  const [selected, setSelected] = useState<string[]>(initialSelection ? [initialSelection] : []);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [preparing, setPreparing] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [error, setError] = useState('');
  const headingRef = useRef<HTMLHeadingElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const uploadRef = useRef<HTMLInputElement>(null);
  const submissionId = useRef('');
  const previews = useRef(new Set<string>());
  const sending = useRef(false);
  const preparingRef = useRef(false);

  useEffect(() => {
    const urls = previews.current;
    return () => { urls.forEach(url => URL.revokeObjectURL(url)); };
  }, []);

  function update(field: keyof Fields, value: string) {
    setFields(current => ({ ...current, [field]: value }));
  }
  function showError(message: string) {
    setError(message);
    requestAnimationFrame(() => errorRef.current?.focus());
  }
  function goTo(next: number) {
    setError('');
    setStep(next);
    requestAnimationFrame(() => headingRef.current?.focus());
  }
  function toggleService(value: string) {
    setSelected(current => current.includes(value) ? current.filter(item => item !== value) : [...current, value]);
    setError('');
  }
  async function addPhotos(files: File[]) {
    if (!files.length || preparingRef.current) return;
    const issue = validatePhotos([...photos.map(photo => photo.file), ...files]);
    if (issue) { showError(issue); return; }
    preparingRef.current = true;
    setPreparing(true);
    setError('');
    const prepared: Photo[] = [];
    try {
      for (const file of files) {
        const resized = await prepareInquiryPhoto(file);
        const preview = URL.createObjectURL(resized);
        previews.current.add(preview);
        prepared.push({ id: crypto.randomUUID(), file: resized, preview });
      }
      setPhotos(current => [...current, ...prepared]);
    } catch (issue) {
      prepared.forEach(photo => { URL.revokeObjectURL(photo.preview); previews.current.delete(photo.preview); });
      showError(issue instanceof Error ? issue.message : 'The photos could not be added. Please try again.');
    } finally {
      preparingRef.current = false;
      setPreparing(false);
      if (uploadRef.current) uploadRef.current.value = '';
    }
  }
  function removePhoto(id: string) {
    setPhotos(current => current.filter(photo => {
      if (photo.id !== id) return true;
      URL.revokeObjectURL(photo.preview);
      previews.current.delete(photo.preview);
      return false;
    }));
  }
  function leadFields() {
    const requested = selected.map(value => choiceLabels[value]).join(', ');
    return { ...fields, service: selected[0] || '', message: selected.length > 1 ? `Requested services: ${requested}\n\n${fields.message}` : fields.message };
  }
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current || preparingRef.current) return;
    setError('');
    if (step === 0) {
      if (!selected.length) { showError('Choose at least one service, or select “Something else”.'); return; }
      if (!fields.message.trim()) { showError('Tell us a little about the work you have in mind.'); return; }
      goTo(1);
      return;
    }
    if (step === 1) {
      if (!fields.propertyLocation.trim()) { showError('Add the property address, or a city and ZIP code.'); return; }
      goTo(2);
      return;
    }
    const lead = leadFields();
    const validationError = validateInquiry(lead);
    if (validationError) { showError(validationError); return; }
    const data = new FormData(event.currentTarget);
    Object.entries(lead).forEach(([key, value]) => data.set(key, value.trim()));
    const parameters = new URLSearchParams(window.location.search);
    data.set('leadSource', parameters.get('utm_source') || 'website');
    data.set('sourcePage', window.location.pathname);
    if (!submissionId.current) submissionId.current = crypto.randomUUID();
    data.set('submissionId', submissionId.current);
    photos.forEach(photo => data.append('photos', photo.file));
    sending.current = true;
    setStatus('sending');
    try {
      const response = await fetch(FORM_ENDPOINT, { method: 'POST', body: data });
      const result = await response.json();
      if (!response.ok || !result.accepted) throw new Error(result.error || 'Your request was not accepted. Please try again or call us.');
      setStatus('sent');
      requestAnimationFrame(() => resultRef.current?.focus());
    } catch (issue) {
      showError(issue instanceof Error ? issue.message : 'Unable to send your request. Please try again or call us.');
      setStatus('idle');
    } finally { sending.current = false; }
  }
  function reset() {
    photos.forEach(photo => { URL.revokeObjectURL(photo.preview); previews.current.delete(photo.preview); });
    setPhotos([]);
    setFields({ name: '', propertyLocation: '', phone: '', email: '', propertyType: commercial ? 'Commercial' : 'Residential', budget: '', timeline: '', message: initialMessage });
    setSelected(initialSelection ? [initialSelection] : []);
    submissionId.current = '';
    setStatus('idle');
    goTo(0);
  }

  if (status === 'sent') return (
    <div className="quote-result" role="status" tabIndex={-1} ref={resultRef}>
      <div className="quote-result-icon" aria-hidden="true">✓</div>
      <span className="quote-kicker">{isLocalPreview ? 'PREVIEW COMPLETE' : 'REQUEST RECEIVED'}</span>
      <h2>{isLocalPreview ? 'Your preview worked.' : 'Thanks. Let’s bring it to life.'}</h2>
      <p>{isLocalPreview ? 'Your details and photos passed the preview checks. Nothing was saved or sent to the team.' : 'Your project details and photos have reached Blade Landscaping. We’ll be in touch to discuss your property and the next step.'}</p>
      <button type="button" className="quote-primary" onClick={reset}>Start another request</button>
    </div>
  );

  return (
    <form className="quote-form" onSubmit={handleSubmit} noValidate aria-label="Project estimate request" aria-busy={status === 'sending'}>
      <ol className="quote-progress" aria-label="Estimate request progress">{steps.map((label, index) => <li key={label} className={index <= step ? 'is-active' : ''} aria-current={index === step ? 'step' : undefined}><span>{index + 1}</span>{label}</li>)}</ol>
      <div className="quote-heading"><span className="quote-kicker">STEP {step + 1} OF 3</span><h2 ref={headingRef} tabIndex={-1}>{step === 0 ? 'What do you have in mind?' : step === 1 ? 'A little about the property.' : 'How can we reach you?'}</h2><p>{step === 0 ? 'Choose all that apply. We’ll work out the details together.' : step === 1 ? 'Help us understand where the work will take place.' : 'Share a phone number or email so we can follow up.'}</p></div>
      {isLocalPreview && <p className="quote-preview"><strong>Local preview.</strong> Trying this form won’t send or save a real request.</p>}
      <div className="quote-honeypot" aria-hidden="true"><label>Company website<input name="companyWebsite" type="text" tabIndex={-1} autoComplete="off" /></label></div>
      <fieldset disabled={status === 'sending'} className="quote-fields">
        <legend className="sr-only">{steps[step]}</legend>
        {step === 0 && <>
          <fieldset className="quote-services"><legend>What can we help with? <span aria-hidden="true">*</span></legend><div className="quote-service-options">{projectOptions.map(([value]) => <label key={value}><input type="checkbox" checked={selected.includes(value)} onChange={() => toggleService(value)} /><span>{choiceLabels[value]}</span></label>)}</div></fieldset>
          <label className="quote-field">Tell us about the work <span aria-hidden="true">*</span><textarea value={fields.message} onChange={event => update('message', event.target.value)} rows={4} maxLength={4500} required placeholder={commercial ? 'Which areas need work? Include the property name, scope, and any bid requirements.' : 'What would you like to change? Tell us about the space, the problem, or the finished look you have in mind.'} /></label>
          <div className="quote-photo-field">
            <div className="quote-photo-title"><span id="photo-label">Photos <span className="quote-optional">(optional)</span></span><span aria-live="polite">{photos.length}/6 added</span></div>
            <p id="photo-help">Show us the space, problem areas, or a look you like.</p>
            <input className="sr-only" type="file" id="estimate-photos" ref={uploadRef} accept="image/jpeg,image/png,image/webp" multiple aria-labelledby="photo-label" aria-describedby="photo-help photo-limits" disabled={preparing || photos.length >= 6} onChange={event => { void addPhotos(Array.from(event.target.files || [])); }} />
            <label htmlFor="estimate-photos" className={`quote-dropzone ${dragging ? 'is-dragging' : ''} ${preparing || photos.length >= 6 ? 'is-disabled' : ''}`} onDragOver={event => { event.preventDefault(); setDragging(true); }} onDragLeave={() => setDragging(false)} onDrop={event => { event.preventDefault(); setDragging(false); void addPhotos(Array.from(event.dataTransfer.files)); }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M12 16V4m-4 4 4-4 4 4M4 15v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4" /></svg>
              <strong>{preparing ? 'Preparing your photos…' : photos.length >= 6 ? 'All 6 photos added' : photos.length ? 'Add more photos' : 'Click to add photos'}</strong><span>or drag and drop them here</span>
            </label>
            <p className="quote-help" id="photo-limits">Up to 6 photos · JPG, PNG or WebP · 10 MB each, 30 MB total</p>
            {photos.length > 0 && <ul className="quote-photo-list">{photos.map(photo => <li key={photo.id}><Image src={photo.preview} alt={photo.file.name} width={160} height={120} unoptimized /><span>{photo.file.name}</span><button type="button" onClick={() => removePhoto(photo.id)} aria-label={`Remove ${photo.file.name}`}>×</button></li>)}</ul>}
          </div>
        </>}
        {step === 1 && <>
          <label className="quote-field">Property address or city / ZIP <span aria-hidden="true">*</span><input value={fields.propertyLocation} onChange={event => update('propertyLocation', event.target.value)} autoComplete="street-address" required maxLength={250} placeholder="Where will the work take place?" /><span className="quote-help">A city and ZIP are fine if you’re still planning.</span></label>
          <fieldset className="quote-services"><legend>Property type <span aria-hidden="true">*</span></legend><div className="quote-service-options">{['Residential', 'Commercial'].map(value => <label key={value}><input type="radio" name="propertyTypeChoice" value={value} checked={fields.propertyType === value} onChange={() => update('propertyType', value)} /><span>{value}</span></label>)}</div></fieldset>
          <div className="quote-grid">
            <label className="quote-field">Budget <span className="quote-optional">(optional)</span><select value={fields.budget} onChange={event => update('budget', event.target.value)}><option value="">Choose a range</option>{budgetOptions.map(value => <option key={value}>{value}</option>)}</select></label>
            <label className="quote-field">Timing <span className="quote-optional">(optional)</span><select value={fields.timeline} onChange={event => update('timeline', event.target.value)}><option value="">When are you thinking?</option>{timelineOptions.map(value => <option key={value}>{value}</option>)}</select></label>
          </div>
          <p className="quote-reassurance">Not sure about the budget or timing? Leave them blank and we’ll talk it through.</p>
        </>}
        {step === 2 && <>
          <label className="quote-field">Your name <span aria-hidden="true">*</span><input value={fields.name} onChange={event => update('name', event.target.value)} autoComplete="name" required maxLength={160} placeholder="Full name" /></label>
          <div className="quote-grid">
            <label className="quote-field">Phone<input value={fields.phone} onChange={event => update('phone', event.target.value)} type="tel" autoComplete="tel" maxLength={40} placeholder="Your phone number" aria-describedby="quote-contact-help" /></label>
            <label className="quote-field">Email<input value={fields.email} onChange={event => update('email', event.target.value)} type="email" autoComplete="email" maxLength={250} placeholder="you@example.com" aria-describedby="quote-contact-help" /></label>
          </div>
          <p className="quote-help" id="quote-contact-help">Only one is needed. We’ll use your details to respond to this request.</p>
          <div className="quote-summary"><div><strong>Your request</strong><button type="button" onClick={() => goTo(0)}>Edit project</button></div><p>{selected.map(value => choiceLabels[value]).join(' · ')}</p><span>{fields.propertyType} · {fields.propertyLocation}</span>{photos.length > 0 && <span>{photos.length} photo{photos.length === 1 ? '' : 's'} attached</span>}</div>
        </>}
      </fieldset>
      {error && <p className="quote-error" role="alert" tabIndex={-1} ref={errorRef}>{error}</p>}
      <div className="quote-actions">{step > 0 && <button className="quote-back" type="button" disabled={status === 'sending'} onClick={() => goTo(step - 1)}>Back</button>}<button className="quote-primary" type="submit" disabled={status === 'sending' || preparing}>{status === 'sending' ? 'Sending your request…' : step < 2 ? 'Continue' : 'Request my free estimate'}<span aria-hidden="true">→</span></button></div>
      <p className="quote-footnote">{step < 2 ? 'A few details now. A better plan for your property.' : <>Prefer to talk? <a href={business.phoneHref}>Call {business.phone}</a></>}</p>
    </form>
  );
}
