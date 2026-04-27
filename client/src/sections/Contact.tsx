import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLParagraphElement>(null);

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

      gsap.fromTo(ruleRef.current, { scaleY: 0 }, {
        scaleY: 1, duration: 0.8, ease: 'power2.out', transformOrigin: 'top',
        scrollTrigger: { trigger: section, start: 'top 70%', toggleActions: 'play none none none' },
        delay: 0.3,
      });

      gsap.fromTo(centerRef.current, { opacity: 0, y: 15 }, {
        opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 65%', toggleActions: 'play none none none' },
        delay: 0.5,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full"
      style={{ padding: 'clamp(120px, 16vh, 200px) clamp(24px, 6vw, 120px) calc(clamp(120px, 16vh, 200px) + 60px)', backgroundColor: '#0F0F0F' }}
    >
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row gap-12 md:gap-0 relative">
        {/* New York */}
        <div ref={leftRef} className="md:w-1/2">
          <p className="font-body text-[11px] uppercase tracking-[0.12em] font-medium text-bronze mb-3">
            NEW YORK
          </p>
          <p className="font-body font-light text-[16px] text-parchment">
            +1 212 555 0147
          </p>
          <p className="mt-2 font-body font-light text-[16px] text-faded">
            hello@bde.io
          </p>
        </div>

        {/* Vertical rule */}
        <div
          ref={ruleRef}
          className="hidden md:block absolute left-1/2 top-0 w-[1px] h-20 bg-bronze"
          style={{ transform: 'translateX(-50%)' }}
        />

        {/* London */}
        <div ref={rightRef} className="md:w-1/2 md:text-right">
          <p className="font-body text-[11px] uppercase tracking-[0.12em] font-medium text-bronze mb-3">
            LONDON
          </p>
          <p className="font-body font-light text-[16px] text-parchment">
            +44 20 7946 0958
          </p>
          <p className="mt-2 font-body font-light text-[16px] text-faded">
            hello@bde.io
          </p>
        </div>
      </div>

      {/* Center text */}
      <p
        ref={centerRef}
        className="mt-20 font-display font-light italic text-parchment text-center"
        style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}
      >
        Begin a conversation.
      </p>
    </section>
  );
}
