import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Founder() {
  const sectionRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(portraitRef.current, { opacity: 0, x: -30 }, {
        opacity: 1, x: 0, duration: 1.0, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 75%', toggleActions: 'play none none none' },
      });

      const textEls = textRef.current?.querySelectorAll('.reveal');
      if (textEls) {
        gsap.fromTo(textEls, { opacity: 0, y: 25 }, {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 70%', toggleActions: 'play none none none' },
        });
      }

      ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          if (portraitRef.current) {
            gsap.set(portraitRef.current, { y: self.progress * -40 });
          }
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="founder"
      ref={sectionRef}
      className="relative w-full bg-transparent"
      style={{ padding: 'clamp(120px, 16vh, 200px) clamp(24px, 6vw, 120px)' }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-[5%]">
        {/* Portrait */}
        <div className="w-full lg:w-[42%]">
          <div
            ref={portraitRef}
            className="lg:sticky lg:top-[20vh] overflow-hidden"
            style={{ aspectRatio: '3/4' }}
          >
            <img
              src="/images/brian-d-evans-portrait.webp"
              alt="Brian D. Evans, Founder of BDE Ventures"
              className="w-full h-full object-cover"
              style={{ filter: 'sepia(4%) saturate(95%)' }}
            />
          </div>
        </div>

        {/* Bio */}
        <div ref={textRef} className="w-full lg:w-[53%] flex flex-col justify-center">
          <p className="reveal font-mono text-[10px] uppercase tracking-[0.15em] text-bronze mb-8">
            FOUNDER
          </p>
          <h2
            className="reveal font-display font-normal text-white leading-[1.0] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(36px, 4vw, 64px)' }}
          >
            Brian D. Evans
          </h2>
          <p className="reveal mt-3 font-body font-light text-[13px] text-faded">
            Founder & Managing Partner · BDE Ventures
          </p>

          <div className="mt-8 space-y-6">
            <p className="reveal font-body font-light text-[16px] leading-[1.8]" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Brian D. Evans is a marketer who consistently positions himself at the inception of major technological shifts. He founded one of the earliest influencer marketing agencies and scaled it into a top 25 Inc. 500 company.
            </p>
            <p className="reveal font-body font-light text-[16px] leading-[1.8]" style={{ color: 'rgba(255,255,255,0.7)' }}>
              His edge comes from viewing emerging markets through a distinct operator's lens, informed by decades of hands-on experience in building and scaling companies. He identifies how to craft the narrative and drive real adoption early. This approach guided his backing of foundational blockchain projects and his subsequent pioneering investments in AI privacy technology.
            </p>
            <p className="reveal font-body font-light text-[16px] leading-[1.8]" style={{ color: 'rgba(255,255,255,0.7)' }}>
              His marketing campaigns have reached more than 100 million people globally. He has helped raise more than $100 million in capital for emerging technology companies. He has appeared as a judge on a national television series evaluating high-growth startups.
            </p>
          </div>

          {/* As Seen In */}
          <div className="reveal mt-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-bronze mb-4">
              AS SEEN IN
            </p>
            <div className="flex gap-6 sm:gap-8 md:gap-16 flex-wrap items-center opacity-40">
              <img src="/images/forbes.svg" alt="Forbes" className="h-4 sm:h-5 md:h-8 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
              <img src="/images/inc.svg" alt="Inc." className="h-4 sm:h-5 md:h-8 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
              <img src="/images/entrepreneur.svg" alt="Entrepreneur" className="h-8 sm:h-12 md:h-16 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
              <img src="/images/rollingstone.png" alt="Rolling Stone" className="h-10 sm:h-16 md:h-24 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
            </div>
          </div>

          {/* Social */}
          <div className="reveal mt-8 flex gap-6">
            <a
              href="https://x.com/briandevans"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[11px] uppercase tracking-[0.12em] font-medium text-bronze hover:text-white transition-colors duration-300"
            >
              X / Twitter →
            </a>
            <a
              href="https://www.linkedin.com/in/briandevansla/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[11px] uppercase tracking-[0.12em] font-medium text-bronze hover:text-white transition-colors duration-300"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
