export default function Footer() {
  const scrollTo = (target: string) => {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      className="w-full bg-deep-black border-t border-white/5"
      style={{ padding: '80px clamp(24px, 6vw, 120px) 40px' }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-0">
        <div className="flex flex-col gap-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display text-[24px] font-normal uppercase tracking-[0.08em] text-white text-left"
          >
            BDE
          </button>
          <p className="font-body text-[13px] text-faded max-w-[300px]">
            Operator-led advisory for founders building the next iteration of the internet.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
          <div className="flex flex-col gap-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-bronze">Navigation</p>
            <button onClick={() => scrollTo('#thesis')} className="font-body text-[12px] text-faded hover:text-white transition-colors text-left">Active Thesis</button>
            <button onClick={() => scrollTo('#philosophy')} className="font-body text-[12px] text-faded hover:text-white transition-colors text-left">Philosophy</button>
            <button onClick={() => scrollTo('#founder')} className="font-body text-[12px] text-faded hover:text-white transition-colors text-left">Founder</button>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-bronze">Social</p>
            <a href="https://x.com/briandevans" target="_blank" rel="noopener noreferrer" className="font-body text-[12px] text-faded hover:text-white transition-colors">X / Twitter</a>
            <a href="https://www.linkedin.com/in/briandevansla/" target="_blank" rel="noopener noreferrer" className="font-body text-[12px] text-faded hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] font-normal" style={{ color: '#4A4A4A' }}>
          © {new Date().getFullYear()} BDE VENTURES. ALL RIGHTS RESERVED.
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] font-normal" style={{ color: '#4A4A4A' }}>
          EST. 2006
        </p>
      </div>
    </footer>
  );
}
