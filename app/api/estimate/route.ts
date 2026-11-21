import { createHmac } from 'node:crypto';
import { InquiryError, readInquiry } from '@/lib/inquiry-request';
import { projectOptions } from '@/lib/leads';

export const runtime = 'nodejs';
const reply = (value: unknown, status: number) => Response.json(value, { status, headers: { 'Cache-Control': 'no-store' } });

function intakeConnection() {
  const endpoint = process.env.BLADE_HQ_INTAKE_URL || '';
  const secret = process.env.BLADE_HQ_INTAKE_SECRET || '';
  if (process.env.BLADE_HQ_INTAKE_ENABLED !== 'true' || !endpoint || secret.length < 32) throw new Error('Estimate intake is not connected yet. Please call Blade Landscaping.');
  const target = new URL(endpoint);
  const local = target.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(target.hostname);
  if ((!local && target.protocol !== 'https:') || target.pathname !== '/api/website/estimate-requests' || target.username || target.password || target.search || target.hash) throw new Error('Estimate intake is not configured.');
  return { target, secret };
}
async function sendToHQ(connection: ReturnType<typeof intakeConnection>, payload: unknown) {
  const raw = JSON.stringify(payload);
  const timestamp = String(Date.now());
  const signature = createHmac('sha256', connection.secret).update(`${timestamp}.${raw}`).digest('hex');
  return fetch(connection.target, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Blade-Timestamp': timestamp, 'X-Blade-Signature': signature }, body: raw, signal: AbortSignal.timeout(30000), redirect: 'error', cache: 'no-store' });
}
async function photoIntakeReady(connection: ReturnType<typeof intakeConnection>) {
  const response = await sendToHQ(connection, { check: 'estimate-intake' });
  if (!response.ok) return false;
  const result = await response.json();
  return result.ready === true && result.photoUploads === true;
}

// A signed, read-only check verifies the live connection without creating a lead.
export async function GET() {
  try {
    const ready = await photoIntakeReady(intakeConnection());
    return reply({ ready, photoUploads: ready }, ready ? 200 : 503);
  } catch { return reply({ ready: false, photoUploads: false }, 503); }
}

export async function POST(request: Request) {
  const origin = request.headers.get('origin'), site = request.headers.get('sec-fetch-site');
  const host = request.headers.get('host') || new URL(request.url).host;
  const loopback = /^(localhost|127\.0\.0\.1)(:\d+)?$/.test(host);
  const expectedOrigin = `${loopback ? 'http' : 'https'}://${host}`;
  if (origin && origin !== expectedOrigin || site && !['same-origin', 'none'].includes(site)) return reply({ error: 'Submit this request from the Blade Landscaping website.' }, 403);
  let connection: ReturnType<typeof intakeConnection>;
  try { connection = intakeConnection(); } catch { return reply({ error: 'Estimate intake is not connected yet. Please call Blade Landscaping.' }, 503); }
  try {
    const { fields, photos } = await readInquiry(request);
    if (photos.length && !await photoIntakeReady(connection)) return reply({ error: 'Photo uploads are temporarily unavailable. Please try again or call Blade Landscaping.' }, 503);
    const visitor = request.headers.get('x-real-ip') || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const rateKey = createHmac('sha256', connection.secret).update(`visitor:${visitor}`).digest('hex');
    const service = projectOptions.find(([value]) => value === fields.service)?.[1] || fields.service;
    const saved = await sendToHQ(connection, { ...fields, service, photos, rateKey });
    if (!saved.ok) return reply({ error: saved.status === 429 ? 'Too many requests. Please call Blade Landscaping.' : 'Your details and photos could not be saved. Please retry or call Blade Landscaping.' }, saved.status === 429 ? 429 : 502);
    const result = await saved.json();
    if (result.accepted !== true || typeof result.requestId !== 'string' || photos.length > 0 && result.photosAccepted !== true) return reply({ error: 'Your full request was not confirmed. Please retry or call Blade Landscaping.' }, 502);
    return reply({ accepted: true, requestId: result.requestId }, result.duplicate ? 200 : 201);
  } catch (error) {
    if (error instanceof InquiryError) return reply({ error: error.message }, error.status);
    return reply({ error: 'Your request could not be saved. Please retry or call Blade Landscaping.' }, 502);
  }
}
