import { InquiryError, readInquiry } from '@/lib/inquiry-request';

export async function POST(request: Request) {
  if (process.env.NODE_ENV !== 'development') return new Response(null, { status: 404 });
  const headers = { 'Cache-Control': 'no-store' };
  if (request.headers.get('origin') !== new URL(request.url).origin) return Response.json({ error: 'Please use the form on this preview.' }, { status: 403, headers });
  try {
    const { photos } = await readInquiry(request);
    return Response.json({ accepted: true, simulated: true, requestId: 'preview-only', photoCount: photos.length }, { status: 200, headers });
  } catch (error) {
    return Response.json({ error: error instanceof InquiryError ? error.message : 'Please check your details and photos, then try again.' }, { status: error instanceof InquiryError ? error.status : 400, headers });
  }
}
