import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { business, pageMetadata, serviceAreas } from '@/lib/site';
import Script from 'next/script';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  ...pageMetadata('Landscaping & Lawn Care in College Station & Bryan', 'Landscape installations, patios, sod and lawn maintenance in College Station and Bryan. Plan a larger project or arrange recurring care. Request a free estimate.', '/'),
  title: { default: 'Landscaping & Lawn Care in College Station & Bryan | Blade Landscaping', template: '%s | Blade Landscaping' },
  verification: { google: '05mOSF0LDQ4nfNV26qTiCidmnj8SghXj5ARHVkPUryo' },
  icons: { icon: '/BladeAndLeafDark.png', shortcut: '/BladeAndLeafDark.png', apple: '/BladeAndLeafDark.png' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en">
    <head>
      {process.env.NODE_ENV === 'production' && <><Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=AW-17941320563" />
        <Script id="blade-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-17941320563');` }} />
      </>}
      <JsonLd data={{ '@context': 'https://schema.org', '@graph': [{
        '@type': 'HomeAndConstructionBusiness', '@id': `${business.url}/#business`,
        name: business.name, url: business.url, telephone: '+1-210-802-5469', email: business.email,
        logo: `${business.url}/BladeAndLeafDark.png`, image: `${business.url}/media/ready/lawn-maintenance.webp`,
        description: 'Lawn maintenance, mowing, landscape installation, sod, planting, and patios in Bryan and College Station, Texas.',
        areaServed: serviceAreas, sameAs: [business.instagram, business.nextdoor],
      }, { '@type': 'WebSite', '@id': `${business.url}/#website`, url: business.url, name: business.name,
        inLanguage: 'en-US', publisher: { '@id': `${business.url}/#business` },
      }] }} />
    </head>
    <body className={geistSans.variable}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navigation /><main id="main-content">{children}</main><Footer />
    </body>
  </html>;
}
