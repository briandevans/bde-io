import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Cover() {
  const wrapperRef = useRef<HTMLElement>(null);
  const leftZoneRef = useRef<HTMLDivElement>(null);
  const rightZoneRef = useRef<HTMLDivElement>(null);
  const leftOverlayRef = useRef<HTMLDivElement>(null);
  const rightOverlayRef = useRef<HTMLDivElement>(null);
  const heritageRef = useRef<HTMLDivElement>(null);
  const horizonRef = useRef<HTMLDivElement>(null);
  const bdeRef = useRef<HTMLDivElement>(null);
  const estRef = useRef<HTMLSpanElement>(null);
  const perpRef = useRef<HTMLSpanElement>(null);

  const mouseX = useRef(0.5);
  const currBalance = useRef(0.5);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const ctx = gsap.context(() => {
      // Entrance timeline
      const tl = gsap.timeline();

      gsap.set(leftZoneRef.current, { opacity: 0 });
      gsap.set(rightZoneRef.current, { opacity: 0 });
      gsap.set(heritageRef.current, { opacity: 0, x: -40 });
      gsap.set(horizonRef.current, { opacity: 0, x: 40 });
      gsap.set(bdeRef.current, { opacity: 0, y: 20 });
      gsap.set([estRef.current, perpRef.current], { opacity: 0 });

      tl.to(leftZoneRef.current, { opacity: 1, duration: 0.8, ease: 'power2.out' }, 0.3)
        .to(rightZoneRef.current, { opacity: 1, duration: 0.8, ease: 'power2.out' }, 0.5)
        .to(bdeRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 1.2)
        .to(heritageRef.current, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }, 1.5)
        .to(horizonRef.current, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }, 1.65)
        .to([estRef.current, perpRef.current], { opacity: 1, duration: 0.6, ease: 'power2.out' }, 2.0);

      // Scroll-driven exit
      ScrollTrigger.create({
        trigger: wrapper,
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress;
          // Exit animation in last 40%
          if (p > 0.5) {
            const exitP = (p - 0.5) / 0.5;
            gsap.set(wrapper, {
              scale: 1 - exitP * 0.06,
              opacity: 1 - exitP * 0.7,
            });
          }
        },
      });
    }, wrapper);

    // Mouse reactive balance
    const onMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX / window.innerWidth;
    };
    window.addEventListener('mousemove', onMouseMove);

    const animateBalance = () => {
      currBalance.current += (mouseX.current - currBalance.current) * 0.08;
      const leftOp = 1 - currBalance.current; // darker when mouse is left
      const rightOp = currBalance.current;    // brighter when mouse is right
      if (leftOverlayRef.current) {
        leftOverlayRef.current.style.opacity = String(Math.max(0, leftOp * 0.4));
      }
      if (rightOverlayRef.current) {
        rightOverlayRef.current.style.opacity = String(Math.max(0, rightOp * 0.3));
      }
      requestAnimationFrame(animateBalance);
    };
    const raf = requestAnimationFrame(animateBalance);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="cover"
      ref={wrapperRef}
      className="relative w-screen h-screen overflow-hidden"
      style={{ zIndex: 10 }}
    >
      {/* Left Zone — Heritage */}
      <div
        ref={leftZoneRef}
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: 'polygon(0 0, 55% 0, 45% 100%, 0 100%)' }}
      >
        <img
          src="/images/cover-texture.jpg"
          alt="Embossed leather texture"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.5)' }}
        />
        <div
          ref={leftOverlayRef}
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(8,8,8,0.6), transparent)',
            opacity: 0,
          }}
        />
        <div className="absolute bottom-0 left-0" style={{ padding: 'clamp(32px, 6vw, 120px)' }}>
          <div ref={heritageRef}>
            <h2
              className="font-display font-light text-white leading-[0.85] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(48px, 7vw, 120px)' }}
            >
              HERITAGE
            </h2>
            <span
              ref={estRef}
              className="block mt-4 font-mono text-[10px] uppercase tracking-[0.1em] text-faded-ink"
            >
              EST. 1987
            </span>
          </div>
        </div>
      </div>

      {/* Right Zone — Horizon */}
      <div
        ref={rightZoneRef}
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 45% 100%)' }}
      >
        <div
          className="absolute inset-0 w-full h-full"
          style={{ backgroundColor: '#EDE8DF' }}
        />
        <div
          ref={rightOverlayRef}
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to left, rgba(237,232,223,0.5), transparent)',
            opacity: 0,
          }}
        />
        <div className="absolute top-0 right-0 text-right" style={{ padding: 'clamp(32px, 6vw, 120px)' }}>
          <div ref={horizonRef}>
            <span
              ref={perpRef}
              className="block mb-4 font-mono text-[10px] uppercase tracking-[0.1em] text-faded-ink"
            >
              IN PERPETUUM
            </span>
            <h2
              className="font-display font-light italic text-deep-ink leading-[0.85] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(48px, 7vw, 120px)' }}
            >
              HORIZON
            </h2>
          </div>
        </div>
      </div>

      {/* Center — BDE Mark */}
      <div
        ref={bdeRef}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
      >
        <h1
          className="font-display font-light text-bronze-rule leading-[0.85] tracking-[-0.03em]"
          style={{ fontSize: 'clamp(64px, 10vw, 140px)' }}
        >
          BDE
        </h1>
        <span className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-faded-ink">
          FAMILY OFFICE
        </span>
      </div>
    </section>
  );
}
