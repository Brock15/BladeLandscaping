import type { ReactNode } from 'react';
export default function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <section className="relative pt-32 pb-16 sm:pb-20 bg-[var(--blade-charcoal)]"><div className="absolute inset-0 bg-gradient-to-br from-[var(--blade-green-dark)]/30 to-transparent" /><div className="container-custom relative z-10 text-center"><div className="max-w-3xl mx-auto"><span className="inline-block text-[var(--blade-lime)] font-semibold text-sm uppercase tracking-wider mb-4">{eyebrow}</span><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{title}</h1><div className="text-lg sm:text-xl text-[var(--blade-silver)] leading-relaxed">{children}</div></div></div></section>;
}
