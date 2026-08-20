const METHOD = [
  {
    name: "Operator DNA",
    copy: "Battle-tested insights from building and scaling ventures.",
  },
  {
    name: "Active Strategy",
    copy: "High-touch advisory for critical inflection points.",
  },
  {
    name: "Enduring Value",
    copy: "Long-term partnership for sustainable growth.",
  },
];

export default function Method() {
  return (
    <section id="philosophy" className="band method">
      <p className="label">How we work</p>

      <div className="method__grid">
        {METHOD.map(({ name, copy }) => (
          <article key={name} className="method__item">
            <h3 className="method__name">{name}</h3>
            <p className="method__copy">{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
