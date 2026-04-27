import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    num: 'I.',
    title: 'PERMANENT CAPITAL',
    body: 'We do not raise funds. We do not face redemption pressure. Our capital is family balance sheet—deployed with the patience that only true permanence allows. A typical holding period is measured in decades, not years.',
  },
  {
    num: 'II.',
    title: 'CONCENTRATED CONVICTION',
    body: 'Our portfolios hold between eight and fifteen core positions. We believe deeply in the power of focus: knowing a few exceptional things well beats knowing many things superficially.',
  },
  {
    num: 'III.',
    title: 'OPERATOR MINDSET',
    body: 'We do not trade paper. We build. When we acquire a business, we bring operating expertise, governance discipline, and a network built over forty years. We are owners, not allocators.',
  },
];

export default function Approach() {
  const sectionRef = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Watermark fade in
      gsap.fromTo(
        watermarkRef.current,
        { opacity: 0 },
        {
          opacity: 0.12,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Eyebrow fade in
      gsap.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Cards stagger reveal
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const num = card.querySelector('.card-num');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });

        gsap.set(card, { opacity: 0, y: 40 });
        tl.to(card, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, i * 0.2);

        if (num) {
          gsap.set(num, { opacity: 0, scale: 0.8 });
          tl.to(num, { opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out' }, i * 0.2 - 0.1);
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="approach"
      ref={sectionRef}
      data-theme="light"
      className="bg-warm-cream overflow-hidden"
      style={{ padding: 'clamp(120px, 16vh, 200px) clamp(24px, 5vw, 80px)' }}
    >
      <div className="max-w-[1200px] mx-auto flex gap-10 lg:gap-20">
        {/* Left column - vertical watermark */}
        <div className="hidden lg:block w-[45%] relative">
          <div
            ref={watermarkRef}
            className="sticky top-[30vh] font-display font-light text-muted-bronze whitespace-nowrap"
            style={{
              fontSize: '72px',
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              opacity: 0.12,
              letterSpacing: '-0.01em',
            }}
          >
            TIME · PATIENCE · DISCIPLINE
          </div>
        </div>

        {/* Right column - content */}
        <div className="w-full lg:w-[55%]">
          <p
            ref={eyebrowRef}
            className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-bronze mb-12"
          >
            HOW WE OPERATE
          </p>

          <div className="flex flex-col gap-16">
            {CARDS.map((card, i) => (
              <div
                key={card.num}
                ref={(el) => { cardRefs.current[i] = el; }}
              >
                <span className="card-num block font-display font-light italic text-[24px] text-muted-bronze mb-4">
                  {card.num}
                </span>
                <h4 className="font-body font-medium text-[14px] uppercase tracking-[0.08em] text-ink-black mb-4">
                  {card.title}
                </h4>
                <p className="font-body font-light text-[15px] text-charcoal leading-[1.7]">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
