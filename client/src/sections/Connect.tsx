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

    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current, { opacity: 0, x: -20 }, {
        opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 75%', toggleActions: 'play none none none' },
        delay: 0.2,
      });

      gsap.fromTo(rightRef.current, { opacity: 0, x: 20 }, {
        opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 75%', toggleActions: 'play none none none' },
        delay: 0.35,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="connect"
      ref={sectionRef}
      className="relative w-full bg-deep-black"
      style={{ padding: 'clamp(120px, 16vh, 200px) clamp(24px, 6vw, 120px) calc(clamp(120px, 16vh, 200px) + 60px)' }}
    >
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row gap-16 md:gap-20">
        {/* Get in Touch */}
        <div ref={leftRef} className="md:w-1/2">
          <h3
            className="font-display font-light italic text-white leading-[1.1]"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            Let's build the next iteration.
          </h3>
          <p className="mt-5 font-body font-light text-[15px] leading-[1.7]" style={{ color: '#8A8A8A' }}>
            If you are solving a generational challenge in blockchain, AI, infrastructure, or consumer platforms, we invite you to reach out.
          </p>
          <a
            href="mailto:hello@bde.io"
            className="inline-block mt-8 font-body font-light text-[18px] text-white hover:text-bronze transition-colors duration-300"
          >
            hello@bde.io
          </a>
        </div>

        {/* Follow */}
        <div ref={rightRef} className="md:w-1/2">
          <h3
            className="font-display font-light italic text-white leading-[1.1]"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            Follow the journey.
          </h3>
          <p className="mt-5 font-body font-light text-[15px] leading-[1.7]" style={{ color: '#8A8A8A' }}>
            1M+ across platforms. Real-time insights on emerging technology, capital formation, and digital culture.
          </p>
          <div className="mt-6 flex gap-6">
            <a
              href="https://x.com/briandevans"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[12px] uppercase tracking-[0.1em] font-medium text-bronze hover:text-white transition-colors duration-300"
            >
              X / Twitter →
            </a>
            <a
              href="https://www.linkedin.com/in/briandevansla/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[12px] uppercase tracking-[0.1em] font-medium text-bronze hover:text-white transition-colors duration-300"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
