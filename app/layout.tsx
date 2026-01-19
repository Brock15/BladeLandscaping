import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation, Footer } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blade Landscaping | Professional Landscaping Services in San Antonio, TX",
  description: "Transform your outdoor space with Blade Landscaping. Professional lawn care, mulching, planting, weeding, and removal services in San Antonio, TX. Call (210) 802-5469 for a free quote.",
  keywords: "landscaping, lawn care, mulching, planting, weeding, San Antonio, TX, landscaping services",
  icons: {
    icon: "/BladeAndLeaf.png",
    shortcut: "/BladeAndLeaf.png",
    apple: "/BladeAndLeaf.png",
  },
  openGraph: {
    title: "Blade Landscaping | San Antonio's Trusted Landscaping Partner",
    description: "Professional landscaping services including lawn care, mulching, planting, and more. Transform your outdoor space today!",
    type: "website",
    locale: "en_US",
    images: ["/BladeAndLeaf.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
