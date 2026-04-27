import { useEffect, useRef } from 'react';

export default function GrainOverlay() {
  const darkRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dark = darkRef.current;
    const light = lightRef.current;
    if (!dark || !light) return;

    // Simple noise texture via SVG data URI
    const noiseSvg = (opacity: number) =>
      `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='${opacity}'/%3E%3C/svg%3E")`;

    dark.style.backgroundImage = noiseSvg(0.5);
    light.style.backgroundImage = noiseSvg(0.3);

    // Toggle based on which section is active
    const sections = ['cover', 'thesis1', 'thesis2', 'thesis3', 'thesis4', 'contact'];
    const lightSections = ['manifesto', 'portfolio'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (lightSections.includes(id)) {
              dark.style.opacity = '0';
              light.style.opacity = '1';
            } else {
              dark.style.opacity = '1';
              light.style.opacity = '0';
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    [...sections, ...lightSections].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={darkRef}
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 999,
          opacity: 1,
          mixBlendMode: 'overlay',
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
          transition: 'opacity 0.6s ease',
        }}
      />
      <div
        ref={lightRef}
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 999,
          opacity: 0,
          mixBlendMode: 'multiply',
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
          transition: 'opacity 0.6s ease',
        }}
      />
    </>
  );
}
