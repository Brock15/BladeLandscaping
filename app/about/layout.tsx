import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata('About Brock, Jackson & Blade Landscaping', 'Meet the owners of Blade Landscaping, a locally owned lawn care and landscaping company serving Bryan and College Station, Texas.', '/about');

export default function AboutLayout({ children }: { children: React.ReactNode }) { return children; }
