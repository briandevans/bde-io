import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, Cpu, Network, ShoppingBag } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const THESIS_CARDS = [
  {
    num: '01',
    title: 'Blockchain',
    icon: Link,
    body: 'We back founders building the decentralized infrastructure and token-based economies that will define the next iteration of the internet. We look for technical edge and the ability to drive real adoption.',
  },
  {
    num: '02',
    title: 'AI',
    icon: Cpu,
    body: 'We invest behind founders leveraging artificial intelligence to create new technological paradigms, with a specific focus on privacy-preserving models and foundational capabilities.',
  },
  {
    num: '03',
    title: 'Infrastructure',
    icon: Network,
    body: 'We partner with teams building the core technological layers and engineering innovations required to solve generational challenges and support global-scale applications.',
  },
  {
    num: '04',
    title: 'Consumer Platforms & Brands',
    icon: ShoppingBag,
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
      className="relative w-full bg-transparent"
      style={{ padding: 'clamp(120px, 16vh, 200px) clamp(24px, 6vw, 120px)' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {THESIS_CARDS.map((card) => (
            <div
              key={card.num}
              className="thesis-card group relative p-10 md:p-12 transition-all duration-500 backdrop-blur-xl rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
                transform: 'translateY(0)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'rgba(184,149,106,0.5)';
                el.style.background = 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)';
                el.style.transform = 'translateY(-8px)';
                el.style.boxShadow = '0 20px 40px 0 rgba(0, 0, 0, 0.4), 0 0 20px rgba(184,149,106,0.2)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'rgba(255,255,255,0.08)';
                el.style.background = 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.3)';
              }}
              data-cursor="expand"
            >
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                   style={{ background: 'radial-gradient(circle at 50% 0%, rgba(184,149,106,0.15) 0%, transparent 70%)' }} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-bronze/10 group-hover:border-bronze/30 transition-colors duration-500">
                    <card.icon className="w-6 h-6 text-bronze opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-bronze/60 group-hover:text-bronze transition-colors duration-500">
                    {card.num}
                  </p>
                </div>
                <h3
                  className="font-display font-normal text-white leading-[1.05] mb-5 group-hover:text-bronze transition-colors duration-500"
                  style={{ fontSize: 'clamp(24px, 2.5vw, 40px)' }}
                >
                  {card.title}
                </h3>
                <p className="font-body font-light text-[15px] leading-[1.7] text-white/60 group-hover:text-white/80 transition-colors duration-500">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
