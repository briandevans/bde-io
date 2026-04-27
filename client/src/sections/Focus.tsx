import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
  {
    eyebrow: 'PERMANENT CAPITAL',
    headline: 'Capital without an expiration date.',
    body: 'We do not raise funds. We do not face redemption pressure. Our capital is family balance sheet — deployed with the patience that only true permanence allows. A typical holding period is measured in decades, not years.',
    image: '/images/cat-permanent.jpg',
    imagePosition: 'left' as const,
  },
  {
    eyebrow: 'CONCENTRATED CONVICTION',
    headline: 'Eight positions. One hundred percent attention.',
    body: 'Our portfolios hold between eight and fifteen core positions. We believe deeply in the power of focus: knowing a few exceptional things well beats knowing many things superficially.',
    image: '/images/cat-concentration.jpg',
    imagePosition: 'right' as const,
  },
  {
    eyebrow: 'OPERATOR MINDSET',
    headline: 'We do not trade paper. We build.',
    body: 'When we acquire a business, we bring operating expertise, governance discipline, and a network built over forty years. We are owners, not allocators.',
    image: '/images/cat-operator.jpg',
    imagePosition: 'left' as const,
  },
  {
    eyebrow: 'LONG HORIZON',
    headline: 'Time is the only edge that cannot be replicated.',
    body: 'The market rewards patience disproportionately. Our longest-held position has compounded for thirty-one years. Our newest is already six. We measure success in generations, not quarters.',
    image: '/images/cat-horizon.jpg',
    imagePosition: 'right' as const,
  },
];

export default function Focus() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      rowRefs.current.forEach((row, i) => {
        if (!row) return;
        const line = row.querySelector('.row-line');
        const textEls = row.querySelectorAll('.reveal');
        const img = row.querySelector('.row-img');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          delay: i * 0.12,
        });

        if (line) {
          gsap.set(line, { scaleX: 0, transformOrigin: 'left' });
          tl.to(line, { scaleX: 1, duration: 0.8, ease: 'power2.inOut' }, 0);
        }

        gsap.set(textEls, { opacity: 0, y: 20 });
        tl.to(textEls, { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out' }, 0.2);

        if (img) {
          const imgDir = CATEGORIES[i].imagePosition === 'left' ? -20 : 20;
          gsap.set(img, { opacity: 0, x: imgDir });
          tl.to(img, { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out' }, 0.3);
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="focus"
      ref={sectionRef}
      className="relative w-full bg-parchment"
      style={{ padding: 'clamp(120px, 16vh, 200px) clamp(24px, 6vw, 120px)' }}
    >
      <div className="max-w-[1280px] mx-auto">
        {CATEGORIES.map((cat, i) => (
          <div
            key={cat.eyebrow}
            ref={(el) => { rowRefs.current[i] = el; }}
            className="group/row relative"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            data-cursor="expand"
          >
            {/* Separator line */}
            <div
              className="row-line h-[1px] w-full"
              style={{ backgroundColor: 'rgba(184, 149, 106, 0.3)' }}
            />

            <div
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14 py-[clamp(60px,8vh,100px)] transition-opacity duration-400"
              style={{
                opacity: hoveredIndex !== null && hoveredIndex !== i ? 0.35 : 1,
                flexDirection: cat.imagePosition === 'left' ? 'row' : 'row-reverse',
              }}
            >
              {/* Image */}
              <div className="w-full lg:w-[48%]">
                <div className="row-img overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={cat.image}
                    alt={cat.eyebrow}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/row:scale-[1.03]"
                    style={{ filter: 'sepia(6%) saturate(92%)' }}
                  />
                </div>
              </div>

              {/* Text */}
              <div className="w-full lg:w-[52%]">
                <p className="reveal font-body text-[11px] uppercase tracking-[0.12em] font-medium text-bronze mb-5">
                  {cat.eyebrow}
                </p>
                <h3
                  className="reveal font-display font-normal text-dark-ink leading-[1.05] tracking-[-0.02em] text-balance transition-colors duration-400 group-hover/row:text-bronze"
                  style={{ fontSize: 'clamp(32px, 3.5vw, 56px)' }}
                >
                  {cat.headline}
                </h3>
                <p
                  className="reveal mt-5 font-body font-light text-[16px] leading-[1.8] max-w-[460px]"
                  style={{ color: '#3A3A3A' }}
                >
                  {cat.body}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Bottom line */}
        <div className="h-[1px] w-full" style={{ backgroundColor: 'rgba(184, 149, 106, 0.3)' }} />
      </div>
    </section>
  );
}
