import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ThesisCardProps {
  id: string;
  number: string;
  eyebrow: string;
  headline: string;
  body: string;
  imageSrc: string;
  imagePosition: 'left' | 'right';
  accentColor: string;
  zIndex: number;
}

export default function ThesisCard({
  id,
  number,
  eyebrow,
  headline,
  body,
  imageSrc,
  imagePosition,
  accentColor,
  zIndex,
}: ThesisCardProps) {
  const wrapperRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const ctx = gsap.context(() => {
      // Image diagonal wipe
      if (imageRef.current) {
        const fromPolygon =
          imagePosition === 'left'
            ? 'polygon(0 0, 0 0, 0 100%, 0 100%)'
            : 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)';
        const toPolygon =
          imagePosition === 'left'
            ? 'polygon(0 0, 100% 0, 55% 100%, 0 100%)'
            : 'polygon(45% 0, 100% 0, 100% 100%, 0 100%)';

        gsap.fromTo(
          imageRef.current,
          { clipPath: fromPolygon },
          {
            clipPath: toPolygon,
            duration: 1.2,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: wrapper,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Text reveal
      if (textRef.current) {
        const els = textRef.current.querySelectorAll('.reveal');
        gsap.fromTo(
          els,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: wrapper,
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
            delay: 0.3,
          }
        );
      }

      // Watermark fade
      if (watermarkRef.current) {
        gsap.fromTo(
          watermarkRef.current,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 0.15,
            scale: 1,
            duration: 1.0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: wrapper,
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Pin and exit
      const exitX = imagePosition === 'left' ? -8 : 8;
      ScrollTrigger.create({
        trigger: wrapper,
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress;
          if (p > 0.5) {
            const exitP = (p - 0.5) / 0.5;
            gsap.set(wrapper, {
              x: `${exitX * exitP}vw`,
              scale: 1 - exitP * 0.06,
              opacity: 1 - exitP * 0.7,
            });
          }
        },
      });
    }, wrapper);

    return () => ctx.revert();
  }, [imagePosition]);

  const imageClip =
    imagePosition === 'left'
      ? 'polygon(0 0, 100% 0, 55% 100%, 0 100%)'
      : 'polygon(45% 0, 100% 0, 100% 100%, 0 100%)';

  const imageStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: imagePosition === 'left' ? 0 : undefined,
    right: imagePosition === 'right' ? 0 : undefined,
    width: '60%',
    clipPath: imageClip,
    overflow: 'hidden',
  };

  const textStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: imagePosition === 'right' ? 'clamp(32px, 6vw, 120px)' : undefined,
    right: imagePosition === 'left' ? 'clamp(32px, 6vw, 120px)' : undefined,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '35%',
    maxWidth: '480px',
  };

  return (
    <section
      id={id}
      ref={wrapperRef}
      className="relative w-screen h-screen overflow-hidden"
      style={{ zIndex, backgroundColor: '#080808' }}
    >
      {/* Image Zone */}
      <div ref={imageRef} style={imageStyle}>
        <img
          src={imageSrc}
          alt={eyebrow}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Watermark Number */}
      <span
        ref={watermarkRef}
        className="absolute font-display font-light italic pointer-events-none select-none"
        style={{
          fontSize: 'clamp(80px, 12vw, 200px)',
          color: accentColor,
          opacity: 0.15,
          [imagePosition === 'left' ? 'right' : 'left']: '10%',
          bottom: '10%',
          lineHeight: 1,
        }}
      >
        {number}
      </span>

      {/* Text Zone */}
      <div ref={textRef} style={textStyle}>
        <p className="reveal font-mono text-[10px] uppercase tracking-[0.12em] mb-6" style={{ color: accentColor }}>
          {eyebrow}
        </p>
        <h3
          className="reveal font-display font-normal text-white leading-[1.1] tracking-[-0.02em] text-balance"
          style={{ fontSize: 'clamp(28px, 3.5vw, 56px)' }}
        >
          {headline}
        </h3>
        <p className="reveal mt-8 font-body font-light text-[15px] text-faded-ink leading-[1.8] max-w-[420px]">
          {body}
        </p>
      </div>
    </section>
  );
}
