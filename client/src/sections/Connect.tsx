import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Connect() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set([leftRef.current, rightRef.current], { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo([leftRef.current, rightRef.current], { opacity: 0, y: 16 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
        scrollTrigger: { trigger: section, start: 'top 75%', toggleActions: 'play none none none' },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="connect"
      ref={sectionRef}
      className="relative w-full bg-surface"
      style={{ padding: 'clamp(96px, 14vh, 160px) clamp(20px, 5vw, 80px)' }}
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
        <div ref={leftRef}>
          <h3
            className="font-display font-medium text-ink tracking-[-0.025em] leading-[1.1]"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Let&apos;s build the next iteration.
          </h3>
          <p className="mt-5 font-body text-[15px] leading-[1.7] text-ink-muted max-w-[42ch]">
            If you are solving a generational challenge in blockchain, AI, infrastructure, or consumer platforms, we invite you to reach out.
          </p>
          <a
            href="mailto:hello@bde.io"
            className="inline-block mt-8 font-display text-[22px] tracking-[-0.02em] text-ink hover:text-signal transition-colors duration-200"
          >
            hello@bde.io
          </a>
        </div>

        <div ref={rightRef} className="md:border-l md:border-rule md:pl-16">
          <h3
            className="font-display font-medium text-ink tracking-[-0.025em] leading-[1.1]"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Follow the journey.
          </h3>
          <p className="mt-5 font-body text-[15px] leading-[1.7] text-ink-muted max-w-[42ch]">
            1M+ across platforms. Real-time insights on emerging technology, capital formation, and digital culture.
          </p>
          <div className="mt-7 flex gap-6">
            <a
              href="https://x.com/briandevans"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[12px] uppercase tracking-[0.08em] font-medium text-signal hover:text-ink transition-colors duration-200"
            >
              X / Twitter →
            </a>
            <a
              href="https://www.linkedin.com/in/briandevansla/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[12px] uppercase tracking-[0.08em] font-medium text-signal hover:text-ink transition-colors duration-200"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
