import { useEffect, useRef, useState } from 'react';

export default function BDEMark() {
  const [onLight, setOnLight] = useState(false);
  const raf = useRef(0);

  useEffect(() => {
    const check = () => {
      const lightSections = ['manifesto', 'portfolio'];
      let isLight = false;
      for (const id of lightSections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < 60 && rect.bottom > 60) {
            isLight = true;
            break;
          }
        }
      }
      setOnLight(isLight);
    };

    const loop = () => {
      check();
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(raf.current);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed top-0 left-0 z-[1000] font-mono text-[10px] uppercase tracking-[0.12em] transition-colors duration-500"
      style={{ padding: 'clamp(32px, 6vw, 120px)', color: onLight ? '#111111' : '#ffffff' }}
    >
      BDE
    </button>
  );
}
