import { business, serviceAreas } from './site';
import type { Service } from './services';

export function breadcrumbs(items: { name: string; path: string }[]) {
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((item, index) => ({
    '@type': 'ListItem', position: index + 1, name: item.name, item: `${business.url}${item.path}`,
  })) };
}

export function serviceSchema(service: Service) {
  return { '@context': 'https://schema.org', '@type': 'Service',
    '@id': `${business.url}/services/${service.slug}#service`,
    name: service.title, serviceType: service.title, description: service.summary,
    url: `${business.url}/services/${service.slug}`, image: service.image ? `${business.url}${service.image}` : undefined,
    provider: { '@id': `${business.url}/#business` }, areaServed: serviceAreas,
  };
}

export const serviceSearchCopy: Record<string, { title: string; description: string }> = {
  'lawn-maintenance': { title: 'Lawn Care & Mowing in College Station & Bryan', description: 'Weekly and biweekly lawn mowing, trimming, edging and cleanup in College Station and Bryan. From $60 per visit. Explore care plans and request a free estimate.' },
  'sod-installation': { title: 'Sod Installation in College Station & Bryan', description: 'New sod and lawn replacement in College Station and Bryan. Discuss ground preparation, lawn layout and watering needs with Blade. Request a free estimate.' },
  'hardscaping-outdoor-living': { title: 'Patios & Hardscaping in College Station & Bryan', description: 'Flagstone patios, paver seating areas, garden paths and stone borders in College Station and Bryan. View real Blade work and request a free project estimate.' },
  'landscape-installation': { title: 'Landscape Installation in College Station & Bryan', description: 'Planting, flower beds, mulch, sod and landscape installation in College Station and Bryan. Plan your residential or commercial project with a free estimate.' },
};
