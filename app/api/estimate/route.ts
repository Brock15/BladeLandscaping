import { NextResponse } from 'next/server';
import { validateInquiry, validatePhotos, type ProjectLead } from '@/lib/leads';

export async function POST(request: Request) {
  if (process.env.NODE_ENV !== 'development') return NextResponse.json({ error: 'Not found' }, { status: 404 });
  if (Number(request.headers.get('content-length')) > 22 * 1024 * 1024) return NextResponse.json({ error: 'Please keep your submission under 22 MB.' }, { status: 413 });
  try {
    const data = await request.formData();
    const fieldNames = ['name', 'email', 'phone', 'propertyLocation', 'propertyType', 'service', 'budget', 'timeline', 'message', 'leadSource', 'sourcePage'];
    const fields = Object.fromEntries(fieldNames.map((name) => [name, String(data.get(name) ?? '').trim()]));
    const photos = data.getAll('photos').filter((entry): entry is File => entry instanceof File && entry.size > 0);
    const error = validateInquiry(fields) || validatePhotos(photos);
    if (error) return NextResponse.json({ error }, { status: 400 });
    const lead: ProjectLead = {
      id: `preview-${crypto.randomUUID()}`,
      name: fields.name, email: fields.email, phone: fields.phone,
      propertyLocation: fields.propertyLocation, propertyType: fields.propertyType,
      service: fields.service, budget: fields.budget, timeline: fields.timeline, message: fields.message,
      leadSource: fields.leadSource.slice(0, 250) || 'website', sourcePage: fields.sourcePage.slice(0, 500),
      submittedAt: new Date().toISOString(),
      photoReferences: photos.map((photo) => ({ name: photo.name, size: photo.size, type: photo.type, storage: 'local-preview-only' })),
    };
    return NextResponse.json({ accepted: true, simulated: true, requestId: lead.id, photoCount: lead.photoReferences.length }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'We could not read that submission. Please try again.' }, { status: 400 });
  }
}
