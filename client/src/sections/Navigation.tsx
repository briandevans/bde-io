import { useEffect, useRef, useState } from 'react';

const NAV_LINKS = [
  { label: 'Active Thesis', target: '#thesis' },
  { label: 'Philosophy', target: '#philosophy' },
  { label: 'Founder', target: '#founder' },
  { label: 'Connect', target: '#connect' },
];

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);
  const [onLight, setOnLight] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(!entry.isIntersecting || entry.intersectionRatio > 0.5);
        });
      },
      { threshold: [0, 0.5, 1] }
    );
    observer.observe(hero);

    const lightSections = ['philosophy'];
    const darkSections = ['hero', 'thesis', 'filter', 'founder', 'connect', 'footer'];

    const lightObs = lightSections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setOnLight(true);
          });
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });

    const darkObs = darkSections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setOnLight(false);
          });
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });

    return () => {
      observer.disconnect();
      lightObs.forEach((o) => o?.disconnect());
      darkObs.forEach((o) => o?.disconnect());
    };
  }, []);

  const scrollTo = (target: string) => {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const textColor = onLight ? 'text-[#1A1A1A]' : 'text-white';

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{ padding: 'clamp(16px, 3vw, 40px) clamp(20px, 6vw, 120px)' }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`font-display text-[18px] font-normal uppercase tracking-[0.08em] transition-colors duration-400 ${textColor}`}
        >
          BDE
        </button>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.target)}
              className={`relative font-body text-[11px] uppercase tracking-[0.12em] font-medium transition-colors duration-400 hover:text-bronze ${textColor} group`}
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-bronze transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo('#connect')}
          className="md:hidden font-body text-[11px] uppercase tracking-[0.12em] font-medium bg-bronze text-white px-5 py-2.5 rounded-full"
        >
          Connect
        </button>
      </div>
    </nav>
  );
}
