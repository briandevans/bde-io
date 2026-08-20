/** Operator's Ledger: the coded composition of the approved BDE Ventures concept. */
import { SITE } from "@/lib/site";

const PRESS_LOGOS = [
  { name: "Forbes", slug: "forbes", src: "/images/forbes.svg" },
  { name: "Inc.", slug: "inc", src: "/images/inc.svg" },
  { name: "Entrepreneur", slug: "entrepreneur", src: "/images/entrepreneur.svg" },
  { name: "Rolling Stone", slug: "rollingstone", src: "/images/rollingstone.png", crop: true },
];

const NOTE_VARIANTS = ["felt", "rails", "street"] as const;

function PressMark({ logo }: { logo: (typeof PRESS_LOGOS)[number] }) {
  if (logo.crop) {
    // Rolling Stone ships as a red mark on a white plate: crop the padding away
    // and print it as ink so the row reads as one typographic line.
    return (
      <span className="press__crop press__logo--rollingstone">
        <img src={logo.src} alt={logo.name} loading="lazy" />
      </span>
    );
  }
  return (
    <img
      className={`press__logo press__logo--${logo.slug}`}
      src={logo.src}
      alt={logo.name}
      loading="lazy"
    />
  );
}

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2.8h3.7l-8.1 9.3L24 21.2h-7.4l-5.8-7.5-6.6 7.5H.5l8.6-9.8L0 2.8h7.6l5.3 6.9 6-6.9Zm-1.3 16.2h2L6.5 4.8H4.3L17.6 19Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.6 8.65 23 10.9 23 14.1V21h-4v-6.1c0-1.45-.03-3.3-2.02-3.3-2.02 0-2.33 1.57-2.33 3.2V21h-4V9Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="page">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <span className="trim trim--v trim--v-tl" aria-hidden="true" />
      <span className="trim trim--v trim--v-tr" aria-hidden="true" />
      <span className="trim trim--v trim--v-bl" aria-hidden="true" />
      <span className="trim trim--v trim--v-br" aria-hidden="true" />
      <span className="trim trim--h trim--h-tl" aria-hidden="true" />
      <span className="trim trim--h trim--h-tr" aria-hidden="true" />
      <span className="trim trim--h trim--h-bl" aria-hidden="true" />
      <span className="trim trim--h trim--h-br" aria-hidden="true" />
      <span className="bracket bracket--tl" aria-hidden="true" />
      <span className="bracket bracket--tr" aria-hidden="true" />
      <span className="bracket bracket--bl" aria-hidden="true" />
      <span className="bracket bracket--br" aria-hidden="true" />

      <header className="shell">
        <div className="masthead">
        <a className="wordmark" href="#main-content" aria-label="BDE Ventures">
          BDE
        </a>
        <nav className="masthead__nav" aria-label="Primary">
          {SITE.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="shell hero" aria-labelledby="hero-title">
          <p className="label label--red hero__eyebrow">BDE Ventures</p>
          <h1 className="display hero__title" id="hero-title">
            Advisory for the
            <br />
            architects of tomorrow.
          </h1>
          <p className="hero__lede">
            We provide cross-disciplinary, operator-led advisory for founders building at the
            intersection of AI, blockchain, and consumer brands.
          </p>

          <aside className="index-card" aria-label="Brian D. Evans">
            <div className="index-card__head">
              <img
                className="index-card__portrait"
                src={SITE.founder.portrait}
                width="128"
                height="128"
                alt="Brian D. Evans"
              />
              <div>
                <p className="index-card__name">Brian D. Evans</p>
                <p className="index-card__role">Founder &amp; Managing Partner</p>
                <p className="index-card__facts">
                  1M+ followers across platforms
                  <br />
                  Inc. 500 · 40 Under 40
                </p>
              </div>
            </div>
            <div className="index-card__foot">
              <span className="index-card__index">Index</span>
            </div>
            <span className="seal" aria-hidden="true">
              BDE
            </span>
          </aside>
        </section>

        <section className="shell" aria-label="Press coverage">
          <div className="press">
            <p className="label press__label">As seen in</p>
            <div className="press__logos">
              {PRESS_LOGOS.map((logo) => (
                <span className={`press__item press__item--${logo.slug}`} key={logo.name}>
                  <PressMark logo={logo} />
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="shell thesis" id="thesis" aria-labelledby="thesis-title">
          <p className="label">01 / Active Thesis</p>
          <h2 className="display thesis__title" id="thesis-title">
            Judgment at the inflection point.
          </h2>
          <div className="thesis__grid">
            {SITE.focusAreas.map((area, index) => (
              <article className="pillar" key={area.name}>
                <p className="pillar__index">0{index + 1}</p>
                <h3 className="pillar__name">{area.name}</h3>
                <p className="pillar__copy">{area.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="shell method" id="philosophy" aria-label="How we work">
          <p className="label">How we work</p>
          <div className="method__grid">
            {SITE.operatingModel.map((item) => (
              <article className="method__item" key={item.name}>
                <h3 className="method__name">{item.name}</h3>
                <p className="method__copy">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="shell dispatch" id="dispatch" aria-labelledby="dispatch-title">
          <p className="label label--dark">BDE Dispatch</p>
          <h2 className="display dispatch__title" id="dispatch-title">
            Notes from the edge.
          </h2>
          <div className="dispatch__grid">
            {SITE.dispatch.map((essay, index) => (
              <article className="note" key={essay.title}>
                <a href={essay.href} target="_blank" rel="noopener noreferrer">
                  <div className={`note__frame note__frame--${NOTE_VARIANTS[index]}`}>
                    <img src={essay.image} alt="" loading="lazy" />
                  </div>
                  <p className="note__kicker">Field note / 0{index + 1}</p>
                  <h3 className="note__title">{essay.title}</h3>
                </a>
              </article>
            ))}
          </div>
          <p className="dispatch__stamp">Clarity before consensus.</p>
        </section>

        <section className="shell dossier" id="founder" aria-label="Founder dossier">
          <p className="label">Founder dossier</p>

          <div className="dossier__grid">
            <img
              className="dossier__portrait"
              src={SITE.founder.portrait}
              width="202"
              height="210"
              alt="Brian D. Evans, Founder and Managing Partner of BDE Ventures"
              loading="lazy"
            />
            <div className="dossier__col">
              <p className="copy">{SITE.founder.bio[0]}</p>
            </div>
            <div className="dossier__col">
              <p className="copy">{SITE.founder.bio[1]}</p>
              <p className="dossier__links">
                <a href={SITE.social[0].href} target="_blank" rel="noopener noreferrer">
                  X / Twitter
                  <XIcon />
                </a>
                <span className="divider" aria-hidden="true" />
                <a href={SITE.social[1].href} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                  <LinkedInIcon />
                </a>
              </p>
            </div>
          </div>

          <div className="dossier__foot">
            <div className="accolades">
              <span className="accolade-inc">
                <img src="/images/inc.svg" alt="Inc." loading="lazy" />
                <span>500</span>
              </span>
              <span className="accolade-40">40 Under 40</span>
            </div>
            <div className="dossier__press">
              {PRESS_LOGOS.map((logo) => (
                <PressMark key={logo.name} logo={logo} />
              ))}
            </div>
          </div>
        </section>

        <section className="shell connect" id="connect" aria-labelledby="connect-title">
          <h2 className="display connect__line" id="connect-title">
            We do not back tourists.
          </h2>
          <a className="connect__mail" href="mailto:hello@bde.io">
            hello@bde.io
          </a>
        </section>
      </main>

      <footer className="shell colophon">Clarity before consensus.</footer>
    </div>
  );
}
