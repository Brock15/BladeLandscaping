import Image from 'next/image';

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10l9-7 9 7M5 9v11h14V9M9 20v-7h6v7" />
      </svg>
    ),
    title: 'Project Planning',
    description: 'Work directly with Brock and Jackson to discuss your property and project.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'On-Site Consultations',
    description: 'We walk your property with you to understand the space, scope, and priorities.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Clear Communication',
    description: 'A direct point of contact for your questions, project details, and next steps.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Detailed Proposals',
    description: 'Review the work included, material choices, and estimate before moving forward.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Organized Scheduling',
    description: 'Plan the work around your project scope, property access, and material needs.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Attention to Detail',
    description: 'Thoughtful preparation, careful installation, and a clean finish for your property.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-[var(--blade-green)] font-semibold text-sm uppercase tracking-wider mb-4">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--blade-charcoal)] mb-6">Built Around <span className="text-[var(--blade-green)]">Your Property.</span></h2>
          <p className="text-[var(--blade-gray)] text-lg leading-relaxed">From a landscape installation to a complete property refresh, we bring a personal, organized approach to your project. Clear scopes, on-site consultations, and direct communication help you move forward with confidence.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4 rounded-xl border border-[var(--blade-green)]/10 p-5">
              <div className="shrink-0 w-11 h-11 bg-[var(--blade-green)]/10 rounded-xl flex items-center justify-center text-[var(--blade-green)]">{feature.icon}</div>
              <div><h3 className="font-semibold text-[var(--blade-charcoal)] mb-2">{feature.title}</h3><p className="text-sm text-[var(--blade-gray)] leading-relaxed">{feature.description}</p></div>
            </div>
          ))}
        </div>
        <div className="mt-10 max-w-2xl mx-auto rounded-2xl bg-[var(--blade-off-white)] border border-[var(--blade-green)]/10 p-5 sm:p-6 text-center">
          <h3 className="text-lg font-bold text-[var(--blade-charcoal)] mb-4">Meet the Owners</h3>
          <div className="flex justify-center gap-3 mb-3">
            <Image src="/media/optimized/owner-brock.webp" alt="Brock Rose, Blade Landscaping co-owner" width={56} height={74} sizes="56px" className="w-12 sm:w-14 aspect-[3/4] object-cover object-top rounded-lg" />
            <div className="w-12 sm:w-14 aspect-[3/4] overflow-hidden rounded-lg shrink-0"><Image src="/media/optimized/owner-jackson.webp" alt="Jackson Phillips, Blade Landscaping co-owner" width={56} height={74} sizes="56px" className="w-full h-full object-cover object-top scale-[1.3] origin-[50%_20%]" /></div>
          </div>
          <p className="text-xs text-[var(--blade-green)] font-semibold mb-3">Brock Rose &amp; Jackson Phillips</p>
          <p className="text-xs sm:text-sm text-[var(--blade-gray)] leading-relaxed max-w-xl mx-auto">
            We&apos;re Brock Rose and Jackson Phillips, the owners of Blade Landscaping.
            We work with homeowners and commercial property owners throughout
            Bryan–College Station to plan landscape installations, renovations, and
            outdoor improvements. When you contact Blade, you can speak directly with us
            about your ideas, your property, and the next step for your project.
          </p>
        </div>
      </div>
    </section>
  );
}
