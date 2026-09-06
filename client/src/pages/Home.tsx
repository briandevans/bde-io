import { BdeMark } from "@/components/BdeMark";
import { PixelTomorrow } from "@/components/PixelTomorrow";
import { SITE } from "@/lib/site";

const publicationLogos = {
  Forbes: "/images/forbes.svg",
  "Inc.": "/images/inc.svg",
  Entrepreneur: "/images/entrepreneur.svg",
  "Rolling Stone": "/images/rollingstone.png",
} satisfies Record<(typeof SITE.publications)[number], string>;

const philosophyLead =
  "BDE Ventures is focused exclusively on early-stage partnerships.";
const philosophyRemainder = SITE.philosophy.description.slice(
  philosophyLead.length + 1
);
const [founderLead, founderBody] = SITE.founder.bio;

function PixelExternalArrow() {
  return (
    <svg
      aria-hidden="true"
      className="dispatch__link-arrow"
      focusable="false"
      shapeRendering="crispEdges"
      viewBox="0 0 8 8"
    >
      <g fill="currentColor">
        <rect height="1" width="1" x="1" y="6" />
        <rect height="1" width="1" x="2" y="5" />
        <rect height="1" width="1" x="3" y="4" />
        <rect height="1" width="1" x="4" y="3" />
        <rect height="1" width="1" x="5" y="2" />
        <rect height="1" width="3" x="5" y="1" />
        <rect height="3" width="1" x="7" y="1" />
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <div className="page">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="shell masthead">
        <a className="wordmark" href="#main-content" aria-label="BDE Ventures">
          <BdeMark className="wordmark__mark" label="BDE" />
          <span className="wordmark__descriptor">Ventures</span>
        </a>
        <nav className="masthead__nav" aria-label="Primary">
          {SITE.navigation.map(item => (
            <a
              className={
                item.href === "#connect" ? "masthead__connect" : undefined
              }
              key={item.href}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="cover" aria-labelledby="hero-title">
          <div className="shell cover__inner">
            <p className="cover__folio">BDE Ventures</p>
            <h1 className="cover__title" id="hero-title">
              <span className="sr-only">{SITE.hero.title}</span>
              <span
                aria-hidden="true"
                className="cover__title-visual cover__title-visual--wide"
              >
                <span>Advisory for the architects</span>
                <span className="cover__tomorrow-line">
                  <span className="cover__of">of</span>
                  <PixelTomorrow className="cover__tomorrow-signature" />
                </span>
              </span>
              <span
                aria-hidden="true"
                className="cover__title-visual cover__title-visual--narrow"
              >
                <span>Advisory for</span>
                <span>the architects</span>
                <span className="cover__tomorrow-line">
                  <span className="cover__of">of</span>
                  <PixelTomorrow className="cover__tomorrow-signature" />
                </span>
              </span>
            </h1>
            <div className="cover__secondary">
              <p className="cover__intro">{SITE.hero.lede}</p>
              <div className="cover__credentials">
                <div
                  className="cover__proof-rail"
                  role="group"
                  aria-label="Press coverage"
                >
                  <span className="cover__proof-label">As seen in</span>
                  <div className="cover__proof-list">
                    {SITE.publications.map(publication => (
                      <span
                        className={`cover__publication cover__publication--${publication
                          .toLowerCase()
                          .replace(/[^a-z]+/g, "-")
                          .replace(/^-|-$/g, "")}`}
                        key={publication}
                      >
                        <img
                          src={publicationLogos[publication]}
                          alt={publication}
                        />
                      </span>
                    ))}
                  </div>
                </div>
                <nav
                  className="cover__social"
                  aria-label="Brian D. Evans on social"
                >
                  {SITE.social.map(social => (
                    <a
                      href={social.href}
                      key={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </section>

        <section className="thesis-shell">
          <div className="shell thesis-shell__inner">
            <section
              className="thesis"
              id="thesis"
              aria-labelledby="thesis-title"
            >
              <div className="thesis__layout">
                <div className="thesis__intro">
                  <p className="thesis__label">01 / Active Thesis</p>
                  <h2 className="thesis__title" id="thesis-title">
                    <span className="thesis__title-phrase">
                      Judgment at the
                    </span>{" "}
                    <span>inflection point.</span>
                  </h2>
                </div>
                <div className="thesis__focus">
                  <h3 className="thesis__focus-label" id="focus-title">
                    Areas of focus
                  </h3>
                  <ul
                    className="thesis__focus-list"
                    aria-labelledby="focus-title"
                  >
                    {SITE.focusAreas.map(area => (
                      <li className="thesis__focus-item" key={area.name}>
                        <h4 className="thesis__focus-name">{area.name}</h4>
                        <p className="thesis__focus-summary">{area.summary}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="field" aria-label="Practice and dispatch">
          <div className="shell field__inner">
            <section
              className="practice"
              id="philosophy"
              aria-labelledby="method-title"
            >
              <div className="section-header">
                <p className="practice__eyebrow">How we work</p>
                <h2 className="practice__title" id="method-title">
                  Philosophy
                </h2>
              </div>
              <div className="practice__reading">
                <p className="practice__lead-sentence">
                  BDE Ventures is focused exclusively on{" "}
                  <span className="practice__compound">early-stage</span>{" "}
                  partnerships.{" "}
                </p>
                <p className="practice__supporting-copy">
                  {philosophyRemainder}
                </p>
              </div>
              <div className="practice__model">
                {SITE.operatingModel.map(item => (
                  <article className="practice__model-item" key={item.name}>
                    <h3>{item.name}</h3>
                    <p>{item.summary}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section
          className="dispatch"
          id="dispatch"
          aria-labelledby="dispatch-title"
        >
          <div className="shell dispatch__inner">
            <div className="section-header">
              <p className="dispatch__label">BDE Dispatch</p>
              <h2 className="dispatch__title" id="dispatch-title">
                Notes from the edge.
              </h2>
            </div>
            <div className="dispatch__list">
              {SITE.dispatch.map((essay, index) => (
                <article className="dispatch__item" key={essay.title}>
                  <a
                    className="dispatch__item-link"
                    href={essay.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="dispatch__kicker">
                      Field note / 0{index + 1}
                    </p>
                    <h3>{essay.title}</h3>
                    <p className="dispatch__row-meta">{essay.descriptor}</p>
                    <PixelExternalArrow />
                  </a>
                </article>
              ))}
            </div>
            <p className="dispatch__stamp">Clarity before consensus.</p>
          </div>
        </section>

        <section
          className="founder"
          id="founder"
          aria-labelledby="founder-title"
        >
          <div className="shell founder__layout">
            <div className="founder__grid">
              <div className="founder__content">
                <div className="founder__identity">
                  <p className="founder__kicker">Founder dossier</p>
                  <h2 className="founder__name" id="founder-title">
                    {SITE.founder.name}
                  </h2>
                  <div className="founder__metadata">
                    <p className="founder__role">{SITE.founder.role}</p>
                    <div className="founder__facts">
                      <p className="founder__followers">
                        1M+ followers across platforms
                      </p>
                      <p className="founder__credentials">
                        {SITE.founder.credentials.join(" · ")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="founder__bio">
                  <p className="founder__bio-lead">{founderLead}</p>
                  <p className="founder__bio-body">{founderBody}</p>
                </div>
              </div>
              <div className="founder__portrait-wrap">
                <img
                  className="founder__portrait"
                  src="/images/brian-d-evans-studio-v1.png"
                  width="1122"
                  height="1402"
                  alt="Brian D. Evans, Founder and Managing Partner of BDE Ventures"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className="connect"
          id="connect"
          aria-labelledby="connect-title"
        >
          <div className="shell connect__inner">
            <h2 className="connect__title" id="connect-title">
              We do not back tourists.
            </h2>
            <div className="connect__details">
              <p className="connect__description">
                We partner exclusively with operators building the next
                iteration of the internet. If you are solving a generational
                challenge in our areas of focus, we invite you to reach out.
              </p>
              <a className="connect__mail" href="mailto:hello@bde.io">
                hello@bde.io
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="colophon">
        <div className="shell colophon__inner">
          <div className="colophon__identity">
            <BdeMark className="colophon__wordmark" label="BDE" />
            <span className="colophon__brand">Ventures</span>
          </div>
          <div className="colophon__utility">
            <p className="colophon__statement">Clarity before consensus.</p>
            <nav
              className="colophon__social"
              aria-label="BDE Ventures social links"
            >
              <a
                href={SITE.social[0].href}
                target="_blank"
                rel="noopener noreferrer"
              >
                X / Twitter
              </a>
              <a
                href={SITE.social[1].href}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
