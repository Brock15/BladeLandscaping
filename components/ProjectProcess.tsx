import Link from 'next/link';
import { processSteps } from '@/lib/services';
import { estimateHref } from '@/lib/estimate-links';

export default function ProjectProcess({ commercial = false, service }: { commercial?: boolean; service?: string }) {
  return <section className="section-padding bg-gradient-to-br from-[var(--blade-charcoal)] via-[var(--blade-slate)] to-[var(--blade-green-dark)]" id="our-process">
    <div className="container-custom">
      <div className="max-w-3xl mx-auto text-center mb-12"><span className="inline-block text-[var(--blade-lime)] font-semibold text-sm uppercase tracking-wider mb-4">How It Works</span><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">A Clear Plan From Start to Finish</h2><p className="text-white/75 text-lg leading-relaxed">Know what comes next, what&apos;s included, and who to talk to along the way.</p></div>
      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{processSteps.map((step, index) => <li key={step.title} className="bg-white/5 border border-white/10 rounded-2xl p-6"><span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[var(--blade-green)] text-white font-bold mb-5">0{index + 1}</span><h3 className="text-lg font-bold text-white mb-3">{step.title}</h3><p className="text-white/75 text-sm leading-relaxed">{step.description}</p></li>)}</ol>
      <div className="text-center mt-10"><Link className="btn-white" href={estimateHref(service, commercial)}>Discuss Your Project <span aria-hidden="true">→</span></Link></div>
    </div>
  </section>;
}
