import type { Metadata } from 'next';

export const business = {
  name: 'Blade Landscaping',
  url: 'https://bladelandscaping.com',
  phone: '(210) 802-5469',
  phoneHref: 'tel:+12108025469',
  email: 'bladelandscapingtx@gmail.com',
  area: 'Bryan–College Station',
  instagram: 'https://www.instagram.com/blade_landscaping/',
  nextdoor: 'https://nextdoor.com/pages/blade_landscaping-san-antonio-tx/',
};

export function pageMetadata(title: string, description: string, pathname: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: pathname },
    openGraph: {
      title: `${title} | ${business.name}`,
      description,
      url: pathname,
      images: [{ url: '/BladeAndLeafDark.png', width: 819, height: 819, alt: 'Blade Landscaping' }],
    },
  };
}
