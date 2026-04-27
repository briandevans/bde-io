import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
  const wrapperRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const ctx = gsap.context(() => {
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word');
        gsap.fromTo(words, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.9, stagger: 0.06,
          ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
          scrollTrigger: {
            trigger: wrapper,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        });
      }

      gsap.fromTo(sublineRef.current, { opacity: 0 }, {
        opacity: 1, duration: 0.6, ease: 'power2.out',
        scrollTrigger: {
          trigger: wrapper,
          start: 'top 60%',
          toggleActions: 'play none none none',
        },
        delay: 0.8,
      });
    }, wrapper);

    return () => ctx.revert();
  }, []);

  const headlineText = 'Discipline over decades. Conviction over consensus.';
  const words = headlineText.split(' ').map((word, i) => {
    const isItalic = word === 'decades.' || word === 'consensus.';
    const clean = word.replace(/[.]/g, '');
    const hasPeriod = word.includes('.');
    return (
      <span key={i} className={`word inline-block mr-[0.25em] ${isItalic ? 'italic' : ''}`}>
        {clean}{hasPeriod ? '.' : ''}
      </span>
    );
  });

  return (
    <section
      id="manifesto"
      ref={wrapperRef}
      className="relative w-full flex items-center justify-center"
      style={{ minHeight: '80vh', backgroundColor: '#B85C3D' }}
    >
      <div className="max-w-[900px] mx-auto px-8 py-[clamp(80px,12vh,140px)] text-center">
        <h2
          ref={headlineRef}
          className="font-display font-light text-white leading-[0.95] tracking-[-0.02em] text-balance"
          style={{ fontSize: 'clamp(40px, 6vw, 96px)' }}
        >
          {words}
        </h2>
        <p
          ref={sublineRef}
          className="mt-10 font-body font-light text-[15px]"
          style={{ color: 'rgba(255,255,255,0.85)' }}
        >
          BDE Family Office · Private investment office since 1987
        </p>
      </div>
    </section>
  );
}
