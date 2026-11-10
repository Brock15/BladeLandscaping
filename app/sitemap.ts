import type { MetadataRoute } from 'next';
import { business } from '@/lib/site';
import { services } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/services', '/gallery', '/about', '/contact', '/reviews', ...services.map((service) => `/services/${service.slug}`)].map((pathname) => ({ url: `${business.url}${pathname}`, changeFrequency: 'monthly', priority: pathname === '/' ? 1 : pathname === '/contact' ? .9 : .8 }));
}
