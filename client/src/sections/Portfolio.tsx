import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const COMPANIES = [
  'Meridian Holdings',
  'Thorne & Co',
  'Atlas Infrastructure',
  'Veridian Capital',
  'Northwind Partners',
  'Sable Point Group',
  'Ember Ventures',
  'Crestline Real Assets',
  'Ironwood Equity',
  'Summit Peak Holdings',
  'Whitmore Advisory',
  'Foundry Select',
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(eyebrowRef.current, { opacity: 0, y: 15 }, {
        opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      const names = listRef.current?.querySelectorAll('.company-item');
      if (names) {
        gsap.fromTo(names, { opacity: 0, y: 10 }, {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.04, ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative w-full bg-parchment"
      style={{ padding: 'clamp(120px, 16vh, 200px) clamp(24px, 6vw, 120px)' }}
    >
      <div className="max-w-[1280px] mx-auto">
        <p
          ref={eyebrowRef}
          className="font-body text-[11px] uppercase tracking-[0.12em] font-medium text-bronze mb-12"
        >
          PORTFOLIO
        </p>

        <div ref={listRef} className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-5">
          {COMPANIES.map((name) => (
            <div
              key={name}
              className="company-item flex items-center gap-3 group/company"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-bronze flex-shrink-0 transition-transform duration-300 group-hover/company:scale-150" />
              <span 
                className="font-body font-light text-dark-ink relative inline-block transition-colors duration-300 group-hover/company:text-bronze"
                style={{ fontSize: 'clamp(18px, 2vw, 28px)' }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
