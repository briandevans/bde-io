import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const THESIS_ROWS = [
  {
    num: '01',
    title: 'Blockchain',
    body: 'We back founders building the decentralized infrastructure and token-based economies that will define the next iteration of the internet. We look for technical edge and the ability to drive real adoption.',
  },
  {
    num: '02',
    title: 'AI',
    body: 'We invest aggressively in the AI space, backing founders who leverage artificial intelligence to create new technological paradigms. Beyond capital, we deploy our extensive network and fundraising strategies to ensure these foundational models scale without friction.',
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

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      const rows = section.querySelectorAll('.thesis-row');
      if (reduced) {
        gsap.set(rows, { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(rows, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.55, stagger: 0.08, ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
        scrollTrigger: {
          trigger: section,
          start: 'top 78%',
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
      className="relative w-full bg-void"
      style={{ padding: 'clamp(96px, 14vh, 160px) clamp(20px, 5vw, 80px)' }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14 lg:mb-20">
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] tracking-[0.08em] text-signal mb-4">
              Active thesis
            </p>
            <h2
              className="font-display font-medium text-ink tracking-[-0.025em] leading-[1.05]"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Where we put weight.
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 font-body text-[16px] leading-[1.7] text-ink-muted max-w-[52ch] self-end">
            Four arenas. One filter: operators building hard-to-replicate advantage at the edge of technology and culture.
          </p>
        </div>

        <div className="border-t border-rule">
          {THESIS_ROWS.map((row) => (
            <article
              key={row.num}
              className="thesis-row group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-b border-rule"
              data-cursor="expand"
            >
              <p className="md:col-span-1 font-mono text-[12px] text-signal pt-1">{row.num}</p>
              <h3
                className="md:col-span-4 font-display font-medium text-ink tracking-[-0.02em] leading-[1.1] transition-colors duration-200 group-hover:text-signal"
                style={{ fontSize: 'clamp(1.35rem, 2vw, 1.85rem)' }}
              >
                {row.title}
              </h3>
              <p className="md:col-span-7 font-body text-[15px] leading-[1.7] text-ink-muted max-w-[60ch]">
                {row.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
