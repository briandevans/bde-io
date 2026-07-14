export default function Footer() {
  const scrollTo = (target: string) => {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      className="w-full bg-void border-t border-rule"
      style={{ padding: '64px clamp(20px, 5vw, 80px) 32px' }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-4 max-w-[320px]">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display text-[28px] font-semibold tracking-[-0.03em] text-ink text-left leading-none"
          >
            BDE
          </button>
          <p className="font-body text-[13px] leading-[1.6] text-ink-faint">
            Operator-led advisory for founders building the next iteration of the internet.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-12 sm:gap-20">
          <div className="flex flex-col gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint mb-1">Navigate</p>
            <button onClick={() => scrollTo('#thesis')} className="font-body text-[13px] text-ink-muted hover:text-ink transition-colors text-left">Active Thesis</button>
            <button onClick={() => scrollTo('#philosophy')} className="font-body text-[13px] text-ink-muted hover:text-ink transition-colors text-left">Philosophy</button>
            <button onClick={() => scrollTo('#founder')} className="font-body text-[13px] text-ink-muted hover:text-ink transition-colors text-left">Founder</button>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint mb-1">Social</p>
            <a href="https://x.com/briandevans" target="_blank" rel="noopener noreferrer" className="font-body text-[13px] text-ink-muted hover:text-ink transition-colors">X / Twitter</a>
            <a href="https://www.linkedin.com/in/briandevansla/" target="_blank" rel="noopener noreferrer" className="font-body text-[13px] text-ink-muted hover:text-ink transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-16 pt-6 border-t border-rule flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint">
          © {new Date().getFullYear()} BDE Ventures. All rights reserved.
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint">
          Est. 2006
        </p>
      </div>
    </footer>
  );
}
