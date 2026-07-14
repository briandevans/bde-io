import { useEffect, useRef } from 'react';

const NAV_LINKS = [
  { label: 'Active Thesis', target: '#thesis' },
  { label: 'Philosophy', target: '#philosophy' },
  { label: 'Founder', target: '#founder' },
  { label: 'Connect', target: '#connect' },
];

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const onScroll = () => {
      const scrolled = window.scrollY > 24;
      nav.dataset.scrolled = scrolled ? 'true' : 'false';
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (target: string) => {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      ref={navRef}
      data-scrolled="false"
      className="fixed top-0 left-0 right-0 z-[1000] transition-[background-color,border-color] duration-300 ease-out-expo data-[scrolled=true]:bg-void/90 data-[scrolled=true]:border-b data-[scrolled=true]:border-rule/60 data-[scrolled=true]:backdrop-blur-md"
    >
      <div
        className="mx-auto flex items-end justify-between gap-6"
        style={{ padding: 'clamp(16px, 2.5vw, 28px) clamp(20px, 5vw, 80px)' }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-[22px] font-semibold tracking-[-0.03em] text-ink leading-none"
          aria-label="BDE Ventures home"
        >
          BDE
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.target)}
              className="font-body text-[12px] tracking-[0.04em] text-ink-muted transition-colors duration-200 ease-out-expo hover:text-ink"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo('#connect')}
          className="btn-press font-body text-[11px] tracking-[0.08em] uppercase font-medium bg-signal text-ink px-4 py-2.5"
        >
          Connect
        </button>
      </div>
    </nav>
  );
}
