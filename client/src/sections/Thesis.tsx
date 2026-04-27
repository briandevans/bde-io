import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const THESIS_CARDS = [
  {
    num: '01',
    title: 'Blockchain',
    body: 'We back founders building the decentralized infrastructure and token-based economies that will define the next iteration of the internet. We look for technical edge and the ability to drive real adoption.',
  },
  {
    num: '02',
    title: 'AI',
    body: 'We invest behind founders leveraging artificial intelligence to create new technological paradigms, with a specific focus on privacy-preserving models and foundational capabilities.',
  },
  {
    num: '03',
    title: 'Infrastructure',
    body: 'We partner with teams building the core technological layers and engineering innovations required to solve generational challenges and support global-scale applications.',
  },
  {
    num: '04',
    title: 'Consumer Platforms & Brands',
    body: 'We help founders turn attention into durable advantage. We back consumer platforms, brands, and the advertising technologies that scale them, bringing our global distribution expertise to the cap table.',
  },
];

export default function Thesis() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = section.querySelectorAll('.thesis-card');
      gsap.fromTo(cards, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="thesis"
      ref={sectionRef}
      className="relative w-full bg-deep-black"
      style={{ padding: 'clamp(120px, 16vh, 200px) clamp(24px, 6vw, 120px)' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {THESIS_CARDS.map((card) => (
            <div
              key={card.num}
              className="thesis-card group p-10 md:p-12 transition-all duration-400 backdrop-blur-md"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'rgba(184,149,106,0.4)';
                el.style.background = 'rgba(255,255,255,0.05)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'rgba(255,255,255,0.06)';
                el.style.background = 'rgba(255,255,255,0.03)';
              }}
              data-cursor="expand"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-bronze mb-6">
                {card.num}
              </p>
              <h3
                className="font-display font-normal text-white leading-[1.05] mb-5"
                style={{ fontSize: 'clamp(24px, 2.5vw, 40px)' }}
              >
                {card.title}
              </h3>
              <p className="font-body font-light text-[15px] leading-[1.7]" style={{ color: '#8A8A8A' }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
