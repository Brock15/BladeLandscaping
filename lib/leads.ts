export const budgetOptions = ['Under $2,500', '$2,500–$5,000', '$5,000–$10,000', '$10,000–$20,000', '$20,000+', 'Not sure yet'];
export const timelineOptions = ['As soon as possible', 'Within 30 days', '1–3 months', 'Planning for the future'];
export const projectOptions = [
  ['landscape-installation', 'Landscape installation'],
  ['landscape-renovations', 'Landscape renovation'],
  ['hardscaping-outdoor-living', 'Patios & hardscaping'],
  ['drainage-grading', 'Drainage & grading'],
  ['rock-stone-landscaping', 'Rock & stone landscaping'],
  ['commercial-landscaping', 'Commercial landscaping'],
  ['cleanup-removal', 'Property cleanup & removal'],
  ['other', 'Other / help planning my project'],
] as const;

export type ProjectLead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  propertyLocation: string;
  propertyType: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  leadSource: string;
  sourcePage: string;
  submittedAt: string;
  photoReferences: { name: string; size: number; type: string; storage: 'local-preview-only' }[];
};

export function validateInquiry(fields: Record<string, unknown>): string | null {
  const required = ['name', 'propertyLocation', 'propertyType', 'service', 'message'];
  if (required.some((field) => typeof fields[field] !== 'string' || !(fields[field] as string).trim())) return 'Please complete the required project details.';
  if (Object.entries(fields).some(([field, value]) => typeof value === 'string' && value.length > (field === 'message' ? 5000 : field === 'name' ? 160 : 250))) return 'One of the fields is too long. Please shorten it and try again.';
  const email = typeof fields.email === 'string' ? fields.email.trim() : '';
  const phone = typeof fields.phone === 'string' ? fields.phone.trim() : '';
  if (!email && !phone) return 'Please provide a phone number or email so we can respond.';
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email address.';
  if (phone && phone.replace(/\D/g, '').length < 10) return 'Please include a phone number with an area code.';
  if (!['Residential', 'Commercial'].includes(fields.propertyType as string)) return 'Please select the property type.';
  if (!projectOptions.some(([value]) => value === fields.service)) return 'Please select a project type.';
  if (fields.budget && !budgetOptions.includes(fields.budget as string)) return 'Please select a valid budget range or leave it blank.';
  if (fields.timeline && !timelineOptions.includes(fields.timeline as string)) return 'Please select a valid timeline or leave it blank.';
  return null;
}

export function validatePhotos(photos: File[]): string | null {
  if (photos.length > 5) return 'Please select up to five photos.';
  if (photos.some((photo) => !['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif'].includes(photo.type))) return 'Use JPG, PNG, WebP, or HEIC photos.';
  if (photos.some((photo) => photo.size > 5 * 1024 * 1024)) return 'Each photo must be 5 MB or smaller.';
  if (photos.reduce((total, photo) => total + photo.size, 0) > 20 * 1024 * 1024) return 'Please keep the combined photo size under 20 MB.';
  return null;
}
