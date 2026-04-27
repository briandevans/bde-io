import { useEffect, useRef, useState } from 'react';

const FOLIOS = ['cover', 'manifesto', 'thesis1', 'thesis2', 'thesis3', 'thesis4', 'portfolio', 'contact'];
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

export default function FolioIndicator() {
  const [active, setActive] = useState(0);
  const raf = useRef(0);

  useEffect(() => {
    const check = () => {
      const vh = window.innerHeight;
      let best = 0;
      let bestScore = -Infinity;

      FOLIOS.forEach((id, i) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const viewportCenter = vh / 2;
        const score = -Math.abs(center - viewportCenter);
        if (score > bestScore) {
          bestScore = score;
          best = i;
        }
      });

      setActive(best);
    };

    const loop = () => {
      check();
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(raf.current);
  }, []);

  return (
    <div
      className="fixed top-0 right-0 z-[1000] font-mono text-[10px] uppercase tracking-[0.12em]"
      style={{ padding: 'clamp(32px, 6vw, 120px)', color: active < 2 || active === 6 ? '#111111' : '#ffffff' }}
    >
      <span className="transition-opacity duration-300">
        {ROMAN[active]} / VIII
      </span>
    </div>
  );
}
