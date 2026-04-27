import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  { src: '/images/presence-01.jpg', alt: 'Industrial warehouse gallery space', label: 'Cultural Assets' },
  { src: '/images/presence-02.jpg', alt: 'Boutique hotel entrance at night', label: 'Hospitality' },
  { src: '/images/presence-03.jpg', alt: 'Vineyard aerial view in autumn', label: 'Agriculture' },
  { src: '/images/presence-04.jpg', alt: 'Modern laboratory interior', label: 'Life Sciences' },
  { src: '/images/presence-05.jpg', alt: 'Classical library reading room', label: 'Knowledge' },
  { src: '/images/presence-06.jpg', alt: 'Marble staircase in historic building', label: 'Heritage' },
];

export default function Presence() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      imageRefs.current.forEach((cell, i) => {
        if (!cell) return;
        const img = cell.querySelector('.presence-img');
        if (!img) return;

        gsap.fromTo(
          img,
          { clipPath: 'polygon(0% 0%, 0% 0%, 0% 0%)' },
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 1.2,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: cell,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            delay: (i % 3) * 0.1,
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="presence"
      ref={sectionRef}
      data-theme="dark"
      className="bg-near-black"
      style={{ padding: 'clamp(120px, 16vh, 200px) clamp(24px, 5vw, 80px)' }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Masonry grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {IMAGES.map((img, i) => {
            // Vary heights for masonry effect
            const heights = ['aspect-[3/4]', 'aspect-[4/3]', 'aspect-[3/4]', 'aspect-[4/3]', 'aspect-[3/4]', 'aspect-[3/4]'];
            return (
              <div
                key={i}
                ref={(el) => { imageRefs.current[i] = el; }}
                className={`group relative overflow-hidden mb-6 ${heights[i]}`}
                data-cursor="expand"
              >
                <div className="presence-img absolute inset-0 w-full h-full">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-all duration-600 group-hover:scale-[1.03] group-hover:brightness-110"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                  />
                </div>

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 60%)',
                  }}
                />

                {/* Company label */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400">
                  <span className="w-1 h-1 rounded-full bg-muted-bronze" />
                  <span className="font-body font-medium text-[12px] uppercase tracking-[0.08em] text-warm-cream">
                    {img.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
