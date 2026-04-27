import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Filter() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const headline = section.querySelector('.filter-headline');
      const body = section.querySelector('.filter-body');
      const btn = section.querySelector('.filter-btn');

      if (headline) {
        const words = headline.querySelectorAll('.word');
        gsap.fromTo(words, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.9, stagger: 0.06,
          ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
          scrollTrigger: { trigger: section, start: 'top 75%', toggleActions: 'play none none none' },
        });
      }

      if (body) {
        gsap.fromTo(body, { opacity: 0, y: 15 }, {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 70%', toggleActions: 'play none none none' },
          delay: 0.6,
        });
      }

      if (btn) {
        gsap.fromTo(btn, { opacity: 0, y: 15 }, {
          opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 65%', toggleActions: 'play none none none' },
          delay: 0.9,
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const headlineText = 'We do not back tourists.';
  const words = headlineText.split(' ').map((word, i) => (
    <span key={i} className="word inline-block mr-[0.25em]">{word}</span>
  ));

  const scrollTo = () => {
    const el = document.querySelector('#connect');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="filter"
      ref={sectionRef}
      className="relative w-full flex items-center justify-center bg-transparent"
      style={{ minHeight: '80vh' }}
    >
      <div className="max-w-[1000px] mx-auto px-8 py-[clamp(100px,14vh,160px)] text-center backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl shadow-2xl m-4 md:m-8">
        <h2
          className="filter-headline font-display font-light text-white leading-[0.9] tracking-[-0.03em] text-balance"
          style={{ fontSize: 'clamp(48px, 7vw, 120px)' }}
        >
          {words}
        </h2>

        <p className="filter-body mt-8 font-body font-light text-[17px] leading-[1.7] max-w-[600px] mx-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
          We partner exclusively with operators building the next iteration of the internet. If you are solving a generational challenge in our areas of focus, we invite you to reach out.
        </p>

        <button
          onClick={scrollTo}
          className="filter-btn mt-10 font-body text-[12px] uppercase tracking-[0.1em] font-medium bg-white px-8 py-3.5 transition-all duration-300 hover:bg-deep-black hover:text-white"
          style={{ color: '#C4704A' }}
        >
          Establish Connection
        </button>
      </div>
    </section>
  );
}
