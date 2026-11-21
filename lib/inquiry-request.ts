import { validateInquiry, validatePhotos } from './leads';

export const MAX_INQUIRY_BODY = 3_500_000;
export class InquiryError extends Error {
  constructor(message: string, public status = 400) { super(message); }
}
export async function readInquiry(request: Request) {
  if (Number(request.headers.get('content-length') || 0) > MAX_INQUIRY_BODY) throw new InquiryError('This request is too large. Please use fewer photos.', 413);
  const reader = request.body?.getReader();
  if (!reader) throw new InquiryError('Please include your project details.');
  const chunks: Uint8Array[] = [];
  let size = 0;
  for (;;) {
    const part = await reader.read();
    if (part.done) break;
    size += part.value.length;
    if (size > MAX_INQUIRY_BODY) { await reader.cancel(); throw new InquiryError('This request is too large. Please use fewer photos.', 413); }
    chunks.push(part.value);
  }
  const limited = new Request(request.url, { method: 'POST', headers: request.headers, body: Buffer.concat(chunks) });
  let data: Record<string, unknown>;
  let files: File[] = [];
  if (request.headers.get('content-type')?.includes('application/json')) {
    data = await limited.json();
    if (data.photos) throw new InquiryError('Please add photos using the estimate form.');
  } else {
    const form = await limited.formData();
    data = Object.fromEntries(form);
    const attachments = form.getAll('photos');
    if (attachments.some(item => typeof item === 'string')) throw new InquiryError('A photo could not be read. Please add it again.');
    files = attachments.filter((item): item is File => typeof item !== 'string' && item.size > 0);
  }
  const field = (name: string) => typeof data[name] === 'string' ? (data[name] as string).trim() : '';
  if (field('companyWebsite')) throw new InquiryError('This request could not be accepted. Please call Blade Landscaping.', 422);
  const fields = Object.fromEntries(['submissionId', 'name', 'email', 'phone', 'propertyLocation', 'propertyType', 'service', 'budget', 'timeline', 'message'].map(name => [name, field(name)]));
  const issue = validateInquiry(fields);
  if (issue) throw new InquiryError(issue);
  if (!/^[a-zA-Z0-9-]{8,120}$/.test(fields.submissionId)) throw new InquiryError('Please refresh the page and try again.');
  const photoIssue = validatePhotos(files);
  if (photoIssue) throw new InquiryError(photoIssue);
  const photos: { name: string; dataUrl: string }[] = [];
  for (const file of files) {
    if (file.size > 400_000) throw new InquiryError('A photo is too large. Please remove it and add it again.', 413);
    const bytes = Buffer.from(await file.arrayBuffer());
    const valid = file.type === 'image/jpeg' ? bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255
      : file.type === 'image/png' ? bytes.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]))
      : file.type === 'image/webp' && bytes.toString('ascii', 0, 4) === 'RIFF' && bytes.toString('ascii', 8, 12) === 'WEBP';
    if (!valid || bytes.length < 12) throw new InquiryError('A photo does not match its file type. Please use JPG, PNG, or WebP.');
    photos.push({ name: file.name.replace(/[\\/\u0000-\u001f]/g, '').slice(0, 120) || 'Property photo', dataUrl: `data:${file.type};base64,${bytes.toString('base64')}` });
  }
  return { fields, photos };
}
