import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SECTION_COLORS: Record<string, string> = {
  cover: '#B8956A',
  manifesto: '#B8956A',
  thesis1: '#8B6B4E',
  thesis2: '#6B7B6E',
  thesis3: '#4A5C6B',
  thesis4: '#9A7B4F',
  portfolio: '#B8956A',
  contact: '#B8956A',
};

export default function PersistentSlash() {
  const svgRef = useRef<SVGSVGElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const currColor = useRef('#B8956A');
  const mouseTilt = useRef(0);
  const currTilt = useRef(0);
  const lineLength = useRef(0);

  useEffect(() => {
    const line = lineRef.current;
    const svg = svgRef.current;
    if (!line || !svg) return;

    const updateLineLength = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      lineLength.current = Math.sqrt(vw * vw + vh * vh);
      line.style.strokeDasharray = `${lineLength.current}`;
      // Start fully hidden
      line.style.strokeDashoffset = `${lineLength.current}`;
    };
    updateLineLength();

    // Initial draw animation
    gsap.to(line, {
      strokeDashoffset: 0,
      duration: 1.2,
      ease: 'power2.inOut',
      delay: 0.5,
    });

    // Color change triggers per section
    Object.entries(SECTION_COLORS).forEach(([id, color]) => {
      const section = document.getElementById(id);
      if (!section) return;
      ScrollTrigger.create({
        trigger: section,
        start: 'top 60%',
        end: 'bottom 40%',
        onEnter: () => {
          gsap.to(line, { stroke: color, duration: 0.6, ease: 'power2.out' });
          currColor.current = color;
        },
        onEnterBack: () => {
          gsap.to(line, { stroke: color, duration: 0.6, ease: 'power2.out' });
          currColor.current = color;
        },
      });
    });

    // Mouse tilt on cover only
    const onMouseMove = (e: MouseEvent) => {
      const balance = e.clientX / window.innerWidth - 0.5;
      mouseTilt.current = balance * 4; // ±2deg
    };
    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      currTilt.current += (mouseTilt.current - currTilt.current) * 0.08;
      // Only apply tilt when near cover section
      const cover = document.getElementById('cover');
      if (cover) {
        const rect = cover.getBoundingClientRect();
        const inCover = rect.bottom > 0 && rect.top < window.innerHeight;
        const tilt = inCover ? currTilt.current : 0;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        line.setAttribute('transform', `rotate(${tilt}, ${centerX}, ${centerY})`);
      }
      requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);

    const onResize = () => updateLineLength();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(raf);
      ScrollTrigger.getAll().forEach((st) => {
        if (Object.keys(SECTION_COLORS).some((k) => st.vars.trigger === document.getElementById(k))) {
          st.kill();
        }
      });
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none"
      style={{ zIndex: 50 }}
    >
      <line
        ref={lineRef}
        x1="0"
        y1="100%"
        x2="100%"
        y2="0"
        stroke="#B8956A"
        strokeWidth="1"
        style={{ willChange: 'stroke-dashoffset, transform' }}
      />
    </svg>
  );
}
