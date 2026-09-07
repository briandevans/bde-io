import { BdeMark } from "@/components/BdeMark";
import {
  ContactDialog,
  ContactDialogTrigger,
} from "@/components/ContactDialog";
import { SITE } from "@/lib/site";
import "./evergreen.css";

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
const operatingModelSummaries = SITE.operatingModel
  .map(item => item.summary)
  .join(" ");
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
    <ContactDialog>
      <div className="page page--evergreen">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>

        <header className="shell masthead">
          <a
            className="wordmark"
            href="#main-content"
            aria-label="BDE Ventures"
          >
            <BdeMark className="wordmark__mark" label="BDE" />
            <span className="wordmark__descriptor">Ventures</span>
          </a>
          <nav className="masthead__nav" aria-label="Primary">
            {SITE.navigation.map(item =>
              item.href === "#connect" ? (
                <ContactDialogTrigger
                  className="masthead__contact"
                  key={item.href}
                >
                  {item.label}
                </ContactDialogTrigger>
              ) : (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              )
            )}
          </nav>
        </header>

        <main id="main-content" tabIndex={-1}>
          <section className="cover" aria-labelledby="hero-title">
            <div className="shell cover__inner">
              <div className="cover__layout">
                <div className="cover__copy">
                  <h1 className="cover__title" id="hero-title">
                    <span className="sr-only">{SITE.hero.title}</span>
                    <span
                      aria-hidden="true"
                      className="cover__title-visual cover__title-visual--evergreen"
                    >
                      <span>Advisory for the</span>
                      <span>architects of</span>
                      <span>tomorrow.</span>
                    </span>
                  </h1>
                  <p className="cover__intro">{SITE.hero.lede}</p>
                  <ContactDialogTrigger className="evergreen__contact">
                    <span>Contact</span>
                    <PixelExternalArrow />
                  </ContactDialogTrigger>
                </div>
                <div className="evergreen__portrait">
                  <img
                    src="/images/brian-d-evans-studio-v1.png"
                    width="1122"
                    height="1402"
                    alt="Brian D. Evans, Founder and Managing Partner of BDE Ventures"
                  />
                </div>
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
                    <h2 className="thesis__title" id="thesis-title">
                      <span className="thesis__title-phrase">
                        Judgment at the
                      </span>{" "}
                      <span>inflection point.</span>
                    </h2>
                  </div>
                  <div className="thesis__focus">
                    <h3 className="sr-only" id="focus-title">
                      Areas of focus
                    </h3>
                    <ul
                      className="thesis__focus-list"
                      aria-labelledby="focus-title"
                    >
                      {SITE.focusAreas.map(area => (
                        <li className="thesis__focus-item" key={area.name}>
                          <h4 className="thesis__focus-name">{area.name}</h4>
                          <p className="thesis__focus-summary">
                            {area.summary}
                          </p>
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
                  <h2 className="practice__title sr-only" id="method-title">
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
                <p className="practice__principles">
                  {operatingModelSummaries}
                </p>
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
                <h2 className="dispatch__title" id="dispatch-title">
                  Notes from the edge.
                </h2>
              </div>
              <div className="dispatch__list">
                {SITE.dispatch.map((essay, index) => (
                  <article
                    className={
                      index === 0
                        ? "dispatch__item dispatch__item--featured"
                        : "dispatch__item"
                    }
                    key={essay.title}
                  >
                    <a
                      className="dispatch__item-link"
                      href={essay.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3>{essay.title}</h3>
                      <p className="dispatch__row-meta">{essay.descriptor}</p>
                      <PixelExternalArrow />
                    </a>
                  </article>
                ))}
              </div>
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
              <p className="connect__description">
                We partner exclusively with operators building the next
                iteration of the internet. If you are solving a generational
                challenge in our areas of focus, we invite you to reach out.
              </p>
              <ContactDialogTrigger className="connect__mail">
                <span>Contact</span>
                <PixelExternalArrow />
              </ContactDialogTrigger>
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
    </ContactDialog>
  );
}
