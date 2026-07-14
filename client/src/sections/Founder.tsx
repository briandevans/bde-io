import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Founder() {
  const sectionRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set([portraitRef.current, textRef.current], { opacity: 1, x: 0, y: 0 });
        return;
      }

      gsap.fromTo(portraitRef.current, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.7, ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
        scrollTrigger: { trigger: section, start: 'top 75%', toggleActions: 'play none none none' },
      });

      const textEls = textRef.current?.querySelectorAll('.reveal');
      if (textEls) {
        gsap.fromTo(textEls, { opacity: 0, y: 16 }, {
          opacity: 1, y: 0, duration: 0.55, stagger: 0.07, ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
          scrollTrigger: { trigger: section, start: 'top 70%', toggleActions: 'play none none none' },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="founder"
      ref={sectionRef}
      className="relative w-full bg-void"
      style={{ padding: 'clamp(96px, 14vh, 160px) clamp(20px, 5vw, 80px)' }}
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <div
            ref={portraitRef}
            className="lg:sticky lg:top-[18vh] overflow-hidden aspect-[3/4] bg-surface"
          >
            <img
              src="/images/brian-d-evans-portrait.png"
              alt="Brian D. Evans, Founder of BDE Ventures"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div ref={textRef} className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
          <p className="reveal font-mono text-[11px] tracking-[0.08em] text-signal mb-5">
            Founder
          </p>
          <h2
            className="reveal font-display font-medium text-ink tracking-[-0.025em] leading-[1.05]"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3.25rem)' }}
          >
            Brian D. Evans
          </h2>
          <p className="reveal mt-3 font-body text-[14px] text-ink-muted">
            Founder & Managing Partner · BDE Ventures
          </p>
          <div className="reveal mt-5 flex flex-wrap gap-3">
            <span className="px-3 py-1.5 border border-rule font-mono text-[10px] uppercase tracking-[0.08em] text-ink-muted">
              Inc. 500
            </span>
            <span className="px-3 py-1.5 border border-rule font-mono text-[10px] uppercase tracking-[0.08em] text-ink-muted">
              40 Under 40
            </span>
          </div>

          <div className="mt-8 space-y-5">
            <p className="reveal font-body text-[16px] leading-[1.75] text-ink-muted max-w-[54ch]">
              Brian D. Evans identifies the inflection points of major technological shifts and helps founders build the narratives that drive early, massive adoption. His core advantage is an obsessive drive to deconstruct how things work on a profound level. He masters the edge cases and applies a refined human taste that algorithms simply cannot replicate.
            </p>
            <p className="reveal font-body text-[16px] leading-[1.75] text-ink-muted max-w-[54ch]">
              As an unconventional generalist, he connects dots others miss, viewing emerging markets through the distinct lens of an operator who has built, scaled, and exited companies to construct hard-to-replicate moats. Rather than relying on traditional, siloed playbooks, Brian leverages his broad expertise to fix broken growth engines and open strategic bottlenecks.
            </p>
          </div>

          <div className="reveal mt-8 flex gap-6">
            <a
              href="https://x.com/briandevans"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[12px] tracking-[0.06em] uppercase font-medium text-signal hover:text-ink transition-colors duration-200"
            >
              X / Twitter →
            </a>
            <a
              href="https://www.linkedin.com/in/briandevansla/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[12px] tracking-[0.06em] uppercase font-medium text-signal hover:text-ink transition-colors duration-200"
            >
              LinkedIn →
            </a>
          </div>

          <div className="reveal mt-12 pt-8 border-t border-rule">
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint mb-5">
              As seen in
            </p>
            <div className="flex gap-6 sm:gap-10 flex-wrap items-center opacity-45">
              <img src="/images/forbes.svg" alt="Forbes" className="h-4 sm:h-5 w-auto brightness-0 invert" />
              <img src="/images/inc.svg" alt="Inc." className="h-4 sm:h-5 w-auto brightness-0 invert" />
              <img src="/images/entrepreneur.svg" alt="Entrepreneur" className="h-7 sm:h-9 w-auto brightness-0 invert" />
              <img src="/images/rollingstone.png" alt="Rolling Stone" className="h-8 sm:h-10 w-auto brightness-0 invert" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
