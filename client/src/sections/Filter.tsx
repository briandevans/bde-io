import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Filter() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      const els = section.querySelectorAll('.filter-reveal');
      if (reduced) {
        gsap.set(els, { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(els, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
        scrollTrigger: { trigger: section, start: 'top 72%', toggleActions: 'play none none none' },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollTo = () => {
    const el = document.querySelector('#connect');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="filter"
      ref={sectionRef}
      className="relative w-full min-h-[70dvh] flex items-center bg-void overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <img
          src="/images/abstract-network.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-void/70" />
      </div>

      <div
        className="relative z-10 w-full max-w-[1400px] mx-auto"
        style={{ padding: 'clamp(96px, 14vh, 160px) clamp(20px, 5vw, 80px)' }}
      >
        <h2
          className="filter-reveal font-display font-semibold text-ink tracking-[-0.03em] leading-[0.95] max-w-[14ch]"
          style={{ fontSize: 'clamp(2.75rem, 8vw, 6rem)' }}
        >
          We do not back tourists.
        </h2>

        <p className="filter-reveal mt-8 font-body text-[17px] leading-[1.7] max-w-[48ch] text-ink-muted">
          We partner exclusively with operators building the next iteration of the internet. If you are solving a generational challenge in our areas of focus, we invite you to reach out.
        </p>

        <button
          onClick={scrollTo}
          className="filter-reveal btn-press mt-10 font-body text-[12px] uppercase tracking-[0.08em] font-medium bg-signal text-ink px-8 py-3.5"
        >
          Submit Proposal
        </button>
      </div>
    </section>
  );
}
