import Image from 'next/image';
import Link from 'next/link';

const commitments = [
  ['A Clear Scope', 'Know the work, materials, and estimate before your project begins.'],
  ['Direct Communication', 'Stay in touch with Brock and Jackson from the first conversation to the final walkthrough.'],
  ['Care for Your Property', 'Thoughtful preparation, careful installation, and a tidy finish.'],
];
export default function WhyChooseUs() {
  return <section className="section-padding bg-[var(--blade-off-white)]"><div className="container-custom">
    <div className="text-center max-w-2xl mx-auto mb-9"><span className="section-eyebrow">The Blade Approach</span><h2 className="section-title">Good Work. Clear Expectations.</h2></div>
    <div className="grid md:grid-cols-3 gap-6">{commitments.map(([title, description], index) => <div key={title} className="bg-white rounded-2xl p-6 border border-[var(--blade-green)]/10"><span className="text-sm font-bold text-[var(--blade-green)]">0{index + 1}</span><h3 className="text-lg font-bold text-[var(--blade-charcoal)] mt-4 mb-3">{title}</h3><p className="text-sm text-[var(--blade-gray)] leading-relaxed">{description}</p></div>)}</div>
    <div className="mt-10 max-w-2xl mx-auto text-center"><div className="flex justify-center gap-3 mb-4"><Image src="/media/optimized/owner-brock.webp" alt="Brock Rose, co-owner" width={56} height={74} sizes="56px" className="w-14 h-[74px] object-cover object-top rounded-lg" /><Image src="/media/optimized/owner-jackson.webp" alt="Jackson Phillips, co-owner" width={56} height={74} sizes="56px" className="w-14 h-[74px] object-cover object-top rounded-lg" /></div><h3 className="text-lg font-bold text-[var(--blade-charcoal)]">Meet Brock &amp; Jackson</h3><p className="text-sm text-[var(--blade-gray)] leading-relaxed mt-3">We&apos;re Brock Rose and Jackson Phillips, the owners of Blade Landscaping. We help homeowners and commercial property owners in Bryan–College Station bring landscape installations, renovations, and outdoor improvements to life.</p><Link href="/about" className="inline-block mt-4 text-sm font-semibold text-[var(--blade-green)]">More About Blade <span aria-hidden="true">→</span></Link></div>
  </div></section>;
}
