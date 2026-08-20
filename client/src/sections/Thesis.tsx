const PILLARS = [
  {
    index: "01",
    name: "Blockchain",
    copy: "Navigating decentralized protocols and token economies for enduring value.",
  },
  {
    index: "02",
    name: "AI",
    copy: "Strategic application of large language models and generative intelligence.",
  },
  {
    index: "03",
    name: "Infrastructure",
    copy: "Building the foundational rails for next-generation systems.",
  },
  {
    index: "04",
    name: "Consumer Platforms & Brands",
    copy: "Merging community, culture, and commerce for market dominance.",
  },
];

export default function Thesis() {
  return (
    <section id="thesis" className="band thesis">
      <p className="label label--ink">01 / Active Thesis</p>
      <h2 className="display thesis__title">
        Judgment at the inflection point.
      </h2>

      <div className="thesis__grid">
        {PILLARS.map(({ index, name, copy }) => (
          <article key={index} className="pillar">
            <p className="pillar__index">{index}</p>
            <h3 className="pillar__name">{name}</h3>
            <p className="pillar__copy">{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
