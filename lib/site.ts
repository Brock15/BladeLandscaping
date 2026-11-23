import type { Metadata } from 'next';

export const business = {
  name: 'Blade Landscaping',
  url: 'https://www.bladelandscaping.com',
  phone: '(210) 802-5469',
  phoneHref: 'tel:+12108025469',
  email: 'bladelandscapingtx@gmail.com',
  area: 'Bryan–College Station',
  instagram: 'https://www.instagram.com/blade_landscaping/',
  nextdoor: 'https://nextdoor.com/pages/blade_landscaping-san-antonio-tx/',
};

export function pageMetadata(title: string, description: string, pathname: string, image = '/media/ready/lawn-maintenance.webp'): Metadata {
  const socialImage = { url: image, alt: `${title} — Blade Landscaping` };
  return {
    title,
    description,
    alternates: { canonical: pathname },
    openGraph: {
      title: `${title} | ${business.name}`,
      description,
      url: pathname,
      type: 'website',
      locale: 'en_US',
      siteName: business.name,
      images: [socialImage],
    },
    twitter: { card: 'summary_large_image', title: `${title} | ${business.name}`, description, images: [socialImage] },
  };
}

export const serviceAreas = ['Bryan', 'College Station'].map(name => ({
  '@type': 'City', name, containedInPlace: { '@type': 'State', name: 'Texas' },
}));
