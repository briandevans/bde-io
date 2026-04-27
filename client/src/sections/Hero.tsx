import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const asSeenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(eyebrowRef.current, { opacity: 0 }, {
        opacity: 1, duration: 0.6, delay: 0.3, ease: 'power2.out',
      });

      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word');
        gsap.fromTo(words, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.9, stagger: 0.06,
          ease: 'cubic-bezier(0.16, 1, 0.3, 1)', delay: 0.5,
        });
      }

      gsap.fromTo(bodyRef.current, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.8, delay: 1.0, ease: 'power3.out',
      });

      gsap.fromTo(buttonsRef.current, { opacity: 0 }, {
        opacity: 1, duration: 0.6, delay: 1.2, ease: 'power2.out',
      });

      gsap.fromTo(asSeenRef.current, { opacity: 0 }, {
        opacity: 1, duration: 1.0, delay: 1.5, ease: 'power2.out',
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const headlineText = 'Guidance for the architects of tomorrow.';
  const words = headlineText.split(' ').map((word, i) => (
    <span key={i} className={`word inline-block mr-[0.25em] ${word === 'architects' ? 'italic' : ''}`}>
      {word}
    </span>
  ));

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full bg-transparent flex flex-col justify-center"
      style={{ minHeight: '100vh', padding: 'clamp(120px, 16vh, 200px) clamp(24px, 6vw, 120px)' }}
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <p
          ref={eyebrowRef}
          className="font-mono text-[10px] uppercase tracking-[0.15em] text-bronze mb-8"
        >
          BDE VENTURES
        </p>

        <h1
          ref={headlineRef}
          className="font-display font-light text-white leading-[1.1] md:leading-[0.88] tracking-[-0.03em] text-balance"
          style={{ fontSize: 'clamp(52px, 8vw, 140px)' }}
        >
          {words}
        </h1>

        <p
          ref={bodyRef}
          className="mt-12 font-body font-light text-[18px] leading-[1.6] max-w-[560px]"
          style={{ color: '#8A8A8A' }}
        >
          We provide operator-led advisory for founders and leadership teams building at the intersection of technology, blockchain, AI, and consumer brands.
        </p>

        <div ref={buttonsRef} className="mt-10 flex flex-col sm:flex-row gap-4 z-10 relative">
          <button
            onClick={() => scrollTo('#thesis')}
            className="font-body text-[12px] uppercase tracking-[0.1em] font-medium bg-white text-deep-black px-7 py-3.5 transition-all duration-300 hover:bg-bronze hover:text-white w-full sm:w-auto"
          >
            Explore Focus
          </button>
          <button
            onClick={() => scrollTo('#philosophy')}
            className="font-body text-[12px] uppercase tracking-[0.1em] font-medium text-white px-7 py-3.5 border transition-all duration-300 hover:border-bronze hover:text-bronze w-full sm:w-auto"
            style={{ borderColor: 'rgba(255,255,255,0.3)' }}
          >
            Our Approach
          </button>
        </div>
      </div>

      {/* As Seen In */}
      <div
        ref={asSeenRef}
        className="relative md:absolute bottom-0 left-0 right-0 w-full mt-12 md:mt-0 z-10"
        style={{ padding: '0 clamp(24px, 6vw, 120px) clamp(20px, 4vh, 80px)' }}
      >
        <div className="max-w-[1200px] mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-4 md:mb-6" style={{ color: 'rgba(138,138,138,0.5)' }}>
            AS SEEN IN
          </p>
          <div className="flex gap-8 md:gap-20 flex-wrap items-center opacity-40">
            <img src="/images/forbes.svg" alt="Forbes" className="h-6 md:h-10 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
            <img src="/images/inc.svg" alt="Inc." className="h-6 md:h-10 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
            <img src="/images/entrepreneur.svg" alt="Entrepreneur" className="h-12 md:h-16 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
            <img src="/images/rollingstone.png" alt="Rolling Stone" className="h-16 md:h-24 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
