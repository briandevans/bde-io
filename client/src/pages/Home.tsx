/** Soft Raster Editorial: bright operator-led advisory page, anchored by BDE’s modular identity and source-faithful content. */
import { ArrowUpRight, Linkedin } from "lucide-react";
import { BdeMark } from "@/components/BdeMark";
import { LedgerWordmark } from "@/components/LedgerWordmark";
import { SectionLabel } from "@/components/SectionLabel";
import { SignalField } from "@/components/SignalField";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE } from "@/lib/site";

function ExternalArrow() {
  return <ArrowUpRight size={15} strokeWidth={1.7} aria-hidden="true" />;
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M18.9 2.8h3.7l-8.1 9.3L24 21.2h-7.4l-5.8-7.5-6.6 7.5H.5l8.6-9.8L0 2.8h7.6l5.3 6.9 6-6.9Zm-1.3 16.2h2L6.5 4.8H4.3L17.6 19Z" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="bde-page">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader navigation={SITE.navigation} />
      <main id="main-content">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <SignalField className="hero__signals" density="medium" />
          <div className="hero__copy">
            <SectionLabel>{SITE.hero.eyebrow}</SectionLabel>
            <h1 id="hero-title">Advisory for the<br />architects of tomorrow.</h1>
            <p>{SITE.hero.description}</p>
          </div>
          <aside className="hero__founder-signal" aria-label="About Brian D. Evans">
            <img src={SITE.founder.portrait} alt="Brian D. Evans" width="88" height="88" />
            <div>
              <BdeMark className="hero__seal" label="BDE document seal" />
              <strong>Brian D. Evans</strong>
              <span>Founder &amp; Managing Partner</span>
              <b>1M+ followers across platforms</b>
              <small>Inc. 500&nbsp;&nbsp;·&nbsp;&nbsp;40 Under 40</small>
            </div>
            <nav className="hero__social-links" aria-label="Brian D. Evans social profiles">
              <a href="https://x.com/briandevans" target="_blank" rel="noreferrer" aria-label="Brian D. Evans on X"><XIcon /></a>
              <a href="https://www.linkedin.com/in/briandevansla/" target="_blank" rel="noreferrer" aria-label="Brian D. Evans on LinkedIn"><Linkedin size={12} strokeWidth={1.8} aria-hidden="true" /></a>
            </nav>
          </aside>
          <div className="press-row" aria-label="BDE Ventures has been featured in Forbes, Inc., Entrepreneur, and Rolling Stone">
            <span>As seen in</span>
            {SITE.publications.map((publication) => <strong key={publication}>{publication}</strong>)}
          </div>
        </section>

        <section className="thesis section-shell" id="thesis" aria-labelledby="thesis-title">
          <SignalField className="thesis__signals" density="low" />
          <div className="thesis-panel">
            <SectionLabel>01 / Active Thesis</SectionLabel>
            <h2 id="thesis-title">Judgment at the inflection point.</h2>
            <div className="focus-grid">
              {SITE.focusAreas.map((area, index) => (
                <article className="focus-item" key={area.name}>
                  <span className="focus-item__index">0{index + 1}</span>
                  <h3>{area.name}</h3>
                  <p>{area.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="philosophy section-shell" id="philosophy" aria-label="Philosophy and operating model">
          <p className="sr-only">{SITE.philosophy.description}</p>
          <div className="operating-model" aria-label="How BDE works with founders">
            <SectionLabel>How we work</SectionLabel>
            <div className="operating-model__grid">
              {SITE.operatingModel.map((item) => (
                <article key={item.name}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dispatch section-shell" id="dispatch" aria-labelledby="dispatch-title">
          <SignalField className="dispatch__signals" density="low" />
          <SectionLabel>BDE Dispatch</SectionLabel>
          <h2 id="dispatch-title">Notes from the edge.</h2>
          <div className="dispatch-grid">
            {SITE.dispatch.map((essay, index) => (
              <article className="dispatch-card" key={essay.title}>
                <a href={essay.href} target="_blank" rel="noreferrer" aria-label={`Read ${essay.title} on BDE Dispatch`}>
                  <span className="dispatch-card__field-note">Field note / 0{index + 1}</span>
                  {essay.image ? <img src={essay.image} alt="" loading="lazy" width="640" height="400" /> : <div className="dispatch-card__paper" aria-hidden="true"><span /><span /><span /><b>III</b></div>}
                  <h3>{essay.title}</h3>
                  <p>{essay.descriptor}</p>
                  <span className="dispatch-card__read">Read <ExternalArrow /></span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="founder section-shell" id="founder" aria-labelledby="founder-title">
          <SignalField className="founder__signals" density="low" />
          <div className="founder__portrait-wrap"><img src={SITE.founder.portrait} alt="Brian D. Evans, Founder and Managing Partner of BDE Ventures" width="880" height="1100" loading="lazy" /></div>
          <div className="founder__primary">
            <SectionLabel>Founder</SectionLabel>
            <p className="founder__dossier-index">Principal dossier / 01 <BdeMark className="founder__seal" label="BDE document seal" /></p>
            <h2 id="founder-title">{SITE.founder.name}</h2>
            <p className="founder__role">{SITE.founder.role}</p>
            <p>{SITE.founder.bio[0]}</p>
            <div className="credential-row" aria-label="Founder credentials">{SITE.founder.credentials.map((credential) => <strong key={credential}>{credential}</strong>)}</div>
          </div>
          <div className="founder__detail">
            <p>{SITE.founder.bio[1]}</p>
            <div>
              <div className="inline-links">{SITE.social.map((item) => <a href={item.href} target="_blank" rel="noreferrer" key={item.href}>{item.label} <ExternalArrow /></a>)}</div>
              <div className="founder__press">
                <SectionLabel>As seen in</SectionLabel>
                <div>{SITE.publications.map((publication) => <strong key={publication}>{publication}</strong>)}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="connect" id="connect" aria-labelledby="connect-title">
          <SignalField className="connect__signals" density="medium" />
          <div className="connect__inner">
            <h2 id="connect-title">We do not back tourists.</h2>
            <p className="connect__annotation">Clarity before consensus.</p>
            <p>We partner exclusively with operators building the next iteration of the internet. If you are solving a generational challenge in our areas of focus, we invite you to reach out.</p>
            <a className="connect__email" href="mailto:hello@bde.io">hello@bde.io</a>
            <div className="follow-block">
              <p className="follow-block__title">Follow the journey.</p>
              <p>1M+ across platforms. Real-time insights on emerging technology, capital formation, and digital culture.</p>
              <div className="inline-links inline-links--light">{SITE.social.map((item) => <a href={item.href} target="_blank" rel="noreferrer" key={item.href}>{item.label} <ExternalArrow /></a>)}</div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <span className="site-footer__identity"><LedgerWordmark label="BDE" /><BdeMark label="BDE document seal" /></span>
        <p>Operator-led advisory for founders building the next iteration of the internet.</p>
        <span>Est. 2006</span>
        <span>© 2026 BDE Ventures. All rights reserved.</span>
      </footer>
    </div>
  );
}
