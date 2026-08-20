export const PRESS = [
  {
    name: "Forbes",
    src: "/images/forbes.svg",
    className: "press__logo press__logo--forbes",
  },
  {
    name: "Inc.",
    src: "/images/inc.svg",
    className: "press__logo press__logo--inc",
  },
  {
    name: "Entrepreneur",
    src: "/images/entrepreneur.svg",
    className: "press__logo press__logo--entrepreneur",
  },
];

/** Rolling Stone ships as a red mark on white, so it is cropped and inked. */
export function RollingStone({ lazy = false }: { lazy?: boolean }) {
  return (
    <span className="press__logo-crop">
      <img
        src="/images/rollingstone.png"
        alt="Rolling Stone"
        loading={lazy ? "lazy" : undefined}
      />
    </span>
  );
}

export default function Press() {
  return (
    <section className="band press" aria-label="Press coverage">
      <p className="label">As seen in</p>
      <div className="press__logos">
        {PRESS.map(({ name, src, className }) => (
          <span key={name} className="press__item">
            <img className={className} src={src} alt={name} />
          </span>
        ))}
        <span className="press__item">
          <RollingStone />
        </span>
      </div>
    </section>
  );
}
