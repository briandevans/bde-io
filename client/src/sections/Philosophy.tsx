import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  {
    title: 'OPERATOR DNA',
    body: 'We are built through work, not optics. We spend time where important companies are actually shaped: product reviews, launch plans, distribution strategy, and moments where the next decision matters more than the next deck.',
  },
  {
    title: 'ACTIVE STRATEGY',
    body: 'We are most useful when conviction needs sharpening and leverage needs creating. Founders call when a launch has to matter, a round has to clear, a hire has to close, or a narrative has to cut through noise.',
  },
  {
    title: 'ENDURING VALUE',
    body: 'We combine company building, institutional investing, and global-scale distribution into one cap-table partner, helping founders build what consensus misses.',
  },
];

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const eyebrow = section.querySelector('.ph-eyebrow');
      const headline = section.querySelector('.ph-headline');
      const body = section.querySelector('.ph-body');
      const pillars = section.querySelectorAll('.ph-pillar');

      if (eyebrow) {
        gsap.fromTo(eyebrow, { opacity: 0, y: 15 }, {
          opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none none' },
        });
      }

      if (headline) {
        const words = headline.querySelectorAll('.word');
        gsap.fromTo(words, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.9, stagger: 0.06,
          ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
          scrollTrigger: { trigger: section, start: 'top 75%', toggleActions: 'play none none none' },
        });
      }

      if (body) {
        gsap.fromTo(body, { opacity: 0, y: 20 }, {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 70%', toggleActions: 'play none none none' },
          delay: 0.4,
        });
      }

      if (pillars.length) {
        gsap.fromTo(pillars, { opacity: 0, y: 20 }, {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 60%', toggleActions: 'play none none none' },
          delay: 0.5,
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const headlineText = 'Capital with conviction.';
  const words = headlineText.split(' ').map((word, i) => (
    <span key={i} className="word inline-block mr-[0.25em]">{word}</span>
  ));

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative w-full bg-warm-parchment/90 backdrop-blur-md"
      style={{ padding: 'clamp(120px, 16vh, 200px) clamp(24px, 6vw, 120px)' }}
    >
      <div className="max-w-[900px] mx-auto">
        <p className="ph-eyebrow font-mono text-[10px] uppercase tracking-[0.15em] text-bronze mb-8">
          PHILOSOPHY
        </p>

        <h2
          className="ph-headline font-display font-normal text-[#1A1A1A] leading-[0.95] tracking-[-0.02em] text-balance mb-12"
          style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
        >
          {words}
        </h2>

        <p className="ph-body font-body font-light text-[16px] leading-[1.7] mb-16" style={{ color: '#3A3A3A' }}>
          BDE Ventures is focused exclusively on early-stage partnerships. We bring operating experience, technical fluency, and a firsthand understanding of how culture and narrative move markets. Viewing the world through a marketing lens is our bread and butter. Our partnership is unusual by design: we back founders with non-consensus insight and help them turn attention into durable advantage.
        </p>

        <div className="space-y-0">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="ph-pillar py-8" style={{ borderTop: '1px solid rgba(26,26,26,0.1)' }}>
              <p className="font-body text-[12px] uppercase tracking-[0.1em] font-medium text-[#1A1A1A] mb-3">
                {pillar.title}
              </p>
              <p className="font-body font-light text-[15px] leading-[1.7]" style={{ color: '#4A4A4A' }}>
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
