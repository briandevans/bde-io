const NOTES = [
  {
    index: "01",
    title: "Chips Across the Felt",
    image: "/images/cat-operator.jpg",
    variant: "felt",
    alt: "Hands working a brass instrument on a craftsman’s bench",
  },
  {
    index: "02",
    title: "AI Agents Need Crypto Rails",
    image: "/images/beam-accent.jpg",
    variant: "rails",
    alt: "Light tracing the circuitry of a processor board",
  },
  {
    index: "03",
    title: "The Generalist Era Is Here",
    image: "/images/hero-architecture.jpg",
    variant: "street",
    alt: "Brutalist tower seen from the street",
  },
];

export default function Dispatch() {
  return (
    <section className="band dispatch" aria-label="BDE Dispatch">
      <p className="label label--dark">BDE Dispatch</p>
      <h2 className="display dispatch__title">Notes from the edge.</h2>

      <div className="dispatch__grid">
        {NOTES.map(({ index, title, image, variant, alt }) => (
          <article key={index} className="note">
            <div className={`note__frame note__frame--${variant}`}>
              <img src={image} alt={alt} loading="lazy" />
            </div>
            <p className="label note__kicker">Field Note / {index}</p>
            <h3 className="note__title">{title}</h3>
          </article>
        ))}
      </div>

      <p className="dispatch__stamp">Clarity before consensus.</p>
    </section>
  );
}
