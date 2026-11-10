import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { business } from "@/lib/site";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: { default: "Blade Landscaping | Landscape Installation & Renovation in Bryan–College Station", template: "%s | Blade Landscaping" },
  description: "Landscape installations, property renovations, and outdoor improvements for residential and commercial properties in Bryan, College Station, and surrounding Texas communities.",
  alternates: { canonical: '/' },
  icons: {
    icon: "/BladeAndLeafDark.png",
    shortcut: "/BladeAndLeafDark.png",
    apple: "/BladeAndLeafDark.png",
  },
  openGraph: {
    title: "Blade Landscaping | Landscape Installation & Renovation",
    description: "Make more of your property with landscape installation, renovation, and outdoor improvements in Bryan–College Station.",
    url: business.url,
    type: "website",
    locale: "en_US",
    siteName: business.name,
    images: [{ url: "/BladeAndLeafDark.png", width: 819, height: 819, alt: "Blade Landscaping" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === 'production' && <><Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=AW-17941320563" />
        <Script id="blade-analytics" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'AW-17941320563');`,
          }}
        /></>}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'HomeAndConstructionBusiness',
          '@id': `${business.url}/#business`, name: business.name, url: business.url,
          telephone: '+1-210-802-5469', email: business.email, logo: `${business.url}/BladeAndLeafDark.png`,
          description: 'Landscape installation, renovation, and outdoor improvements.',
          areaServed: [{ '@type': 'City', name: 'Bryan', containedInPlace: { '@type': 'State', name: 'Texas' } }, { '@type': 'City', name: 'College Station', containedInPlace: { '@type': 'State', name: 'Texas' } }],
          sameAs: [business.instagram, business.nextdoor],
        }).replace(/</g, '\\u003c') }} />
      </head>
      <body
        className={geistSans.variable}
      >
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
