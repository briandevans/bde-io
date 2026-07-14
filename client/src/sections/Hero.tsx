import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set([brandRef.current, headlineRef.current, bodyRef.current, buttonsRef.current], { opacity: 1, y: 0 });
        return;
      }

      const ease = 'cubic-bezier(0.23, 1, 0.32, 1)';
      gsap.fromTo(brandRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.55, delay: 0.15, ease });
      gsap.fromTo(headlineRef.current, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.28, ease });
      gsap.fromTo(bodyRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.48, ease });
      gsap.fromTo(buttonsRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.62, ease });
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full min-h-[100dvh] flex flex-col justify-end overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-architecture.jpg"
          alt="Architectural interior with strong geometry and light"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, oklch(0.12 0.005 250 / 0.92) 0%, oklch(0.12 0.005 250 / 0.78) 42%, oklch(0.12 0.005 250 / 0.45) 100%)',
          }}
        />
      </div>

      <div
        className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col justify-end min-h-[100dvh]"
        style={{ padding: 'clamp(120px, 16vh, 160px) clamp(20px, 5vw, 80px) clamp(48px, 8vh, 96px)' }}
      >
        <p
          ref={brandRef}
          className="font-display text-[clamp(3rem,10vw,6.5rem)] font-semibold tracking-[-0.03em] leading-[0.9] text-ink mb-6"
        >
          BDE
        </p>

        <h1
          ref={headlineRef}
          className="font-display font-medium text-ink tracking-[-0.025em] leading-[1.05] max-w-[18ch]"
          style={{ fontSize: 'clamp(1.75rem, 4.2vw, 3.25rem)' }}
        >
          Guidance for the architects of tomorrow.
        </h1>

        <p
          ref={bodyRef}
          className="mt-7 font-body font-normal text-[17px] leading-[1.65] max-w-[54ch] text-ink-muted"
        >
          Operator-led advisory for founders building at the intersection of AI, blockchain, and consumer brands.
        </p>

        <div ref={buttonsRef} className="mt-9 flex flex-col sm:flex-row gap-3 relative z-10">
          <button
            onClick={() => scrollTo('#thesis')}
            className="btn-press font-body text-[12px] uppercase tracking-[0.08em] font-medium bg-ink text-void px-7 py-3.5 w-full sm:w-auto"
          >
            Explore Focus
          </button>
          <button
            onClick={() => scrollTo('#philosophy')}
            className="btn-press font-body text-[12px] uppercase tracking-[0.08em] font-medium text-ink px-7 py-3.5 border border-ink/30 hover:border-signal hover:text-signal w-full sm:w-auto"
          >
            Our Approach
          </button>
        </div>
      </div>
    </section>
  );
}
