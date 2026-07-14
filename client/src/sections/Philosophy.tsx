import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  {
    title: 'Operator DNA',
    body: 'We are built through work, not optics. We spend time where important companies are actually shaped: product reviews, launch plans, distribution strategy, and moments where the next decision matters more than the next deck.',
  },
  {
    title: 'Active strategy',
    body: 'We are most useful when conviction needs sharpening and leverage needs creating. We deploy our deep network and bespoke fundraising strategies to ensure founders have the capital and connections to dominate. Founders call when a launch has to matter, a round has to clear, a hire has to close, or a narrative has to cut through noise.',
  },
  {
    title: 'Enduring value',
    body: 'We combine company building, institutional investing, and global-scale distribution into one cap-table partner, helping founders build what consensus misses.',
  },
];

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      const els = section.querySelectorAll('.ph-reveal');
      if (reduced) {
        gsap.set(els, { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(els, { opacity: 0, y: 18 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
        scrollTrigger: { trigger: section, start: 'top 75%', toggleActions: 'play none none none' },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative w-full bg-paper text-void"
      style={{ padding: 'clamp(96px, 14vh, 160px) clamp(20px, 5vw, 80px)' }}
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="ph-reveal font-mono text-[11px] tracking-[0.08em] text-signal mb-5">
            Philosophy
          </p>
          <h2
            className="ph-reveal font-display font-medium tracking-[-0.025em] leading-[1.05] text-void mb-8"
            style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}
          >
            Capital with conviction.
          </h2>
          <p className="ph-reveal font-body text-[16px] leading-[1.7] text-muted-ink max-w-[42ch]">
            BDE Ventures is focused exclusively on early-stage partnerships. We bring operating experience, technical fluency, and a firsthand understanding of how culture and narrative move markets. Viewing the world through a marketing lens is our bread and butter. Our partnership is unusual by design: we back founders with non-consensus insight and help them turn attention into durable advantage.
          </p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 space-y-0">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="ph-reveal py-7 border-t border-void/10 first:border-t-0 first:pt-0">
              <p className="font-display text-[18px] font-medium tracking-[-0.02em] text-void mb-3">
                {pillar.title}
              </p>
              <p className="font-body text-[15px] leading-[1.7] text-muted-ink max-w-[50ch]">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
