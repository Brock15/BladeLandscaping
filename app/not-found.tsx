import Link from 'next/link';

export default function NotFound() {
  return <section className="section-padding pt-36 bg-[var(--blade-charcoal)] text-white"><div className="container-custom"><span className="text-[var(--blade-lime)] font-semibold">PAGE NOT FOUND</span><h1 className="text-4xl font-bold mt-6">Let’s find your way back.</h1><p className="my-6">The page you are looking for is unavailable.</p><Link className="btn-primary" href="/">Back to Blade Landscaping ↗</Link></div></section>;
}
