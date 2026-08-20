import { PRESS, RollingStone } from "./Press";

export default function Dossier() {
  return (
    <section id="founder" className="band dossier">
      <p className="label">Founder dossier</p>

      <div className="dossier__grid">
        <img
          className="dossier__portrait"
          src="/images/brian-d-evans-portrait.webp"
          width="156"
          height="134"
          alt="Brian D. Evans, Founder and Managing Partner of BDE Ventures"
          loading="lazy"
        />

        <div className="dossier__main">
          <div className="dossier__body">
            <p className="dossier__copy">
              Brian D. Evans is a serial entrepreneur, investor, and advisor who
              finds the inflection points of major technological shifts, then
              helps founders build the narratives that drive early, massive
              adoption. His edge is an obsessive drive to deconstruct how things
              work — and a refined human taste algorithms cannot replicate.
            </p>

            <div className="dossier__aside">
              <p className="dossier__copy">
                An unconventional generalist, he reads emerging markets as an
                operator who has built, scaled, and exited companies — fixing
                broken growth engines, opening strategic bottlenecks, and
                building moats that are hard to replicate.
              </p>

              <p className="dossier__links">
                <a
                  href="https://x.com/briandevans"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X / Twitter
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    fill="currentColor"
                  >
                    <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.3 22H3.2l7.3-8.3L2.4 2h6.4l4.4 5.9L18.9 2Zm-1.1 18h1.7L8.3 3.8H6.5L17.8 20Z" />
                  </svg>
                </a>
                <span className="divider" aria-hidden="true" />
                <a
                  href="https://www.linkedin.com/in/briandevansla/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.6 8.65 23 10.9 23 14.1V21h-4v-6.1c0-1.45-.03-3.3-2.02-3.3-2.02 0-2.33 1.57-2.33 3.2V21h-4V9Z" />
                  </svg>
                </a>
              </p>
            </div>
          </div>

          <div className="dossier__footer">
            <div className="accolades">
              <span className="accolade-inc">
                <img src="/images/inc.svg" alt="Inc." />
                <span>500</span>
              </span>
              <span className="accolade-40">40 Under 40</span>
            </div>

            <div className="dossier__press">
              {PRESS.map(({ name, src, className }) => (
                <img
                  key={name}
                  className={className}
                  src={src}
                  alt={name}
                  loading="lazy"
                />
              ))}
              <RollingStone lazy />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
