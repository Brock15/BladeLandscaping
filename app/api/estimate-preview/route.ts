import { validateInquiry } from '@/lib/leads';

export async function POST(request: Request) {
  if (process.env.NODE_ENV !== 'development') return new Response(null, { status: 404 });
  const headers = { 'Cache-Control': 'no-store' };
  if (request.headers.get('origin') !== new URL(request.url).origin) return Response.json({ error: 'Please use the form on this preview.' }, { status: 403, headers });
  try {
    const form = await request.formData();
    if (form.get('companyWebsite')) return Response.json({ error: 'This request could not be accepted.' }, { status: 422, headers });
    const validationError = validateInquiry(Object.fromEntries(form.entries()));
    if (validationError) return Response.json({ error: validationError }, { status: 400, headers });
    return Response.json({ accepted: true, simulated: true, requestId: 'preview-only' }, { status: 200, headers });
  } catch {
    return Response.json({ error: 'Please check your details and try again.' }, { status: 400, headers });
  }
}
