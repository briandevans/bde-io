export default function Hero() {
  return (
    <section className="band hero">
      <div>
        <p className="label label--rust hero__label">BDE Ventures</p>
        <h1 className="display hero__title">
          Advisory for the architects of tomorrow.
        </h1>
        <p className="hero__lede">
          We provide cross-disciplinary, operator-led advisory for founders
          building at the intersection of AI, blockchain, and consumer brands.
        </p>
      </div>

      <aside className="index-card" aria-label="Founder index card">
        <div className="index-card__head">
          <img
            className="index-card__portrait"
            src="/images/brian-d-evans-portrait.webp"
            width="76"
            height="76"
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
          <span className="label">Index</span>
          <span className="seal" aria-hidden="true">
            BDE
          </span>
        </div>
      </aside>
    </section>
  );
}
