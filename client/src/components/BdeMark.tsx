/** Soft Raster Editorial: a modular BDE mark that stays legible before it becomes decorative. */
type BdeMarkProps = { className?: string; label?: string };

const glyphs = {
  B: [1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0],
  D: [1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0],
  E: [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0],
} as const;

export function BdeMark({ className = "", label = "BDE Ventures" }: BdeMarkProps) {
  return (
    <span className={`bde-mark ${className}`} role="img" aria-label={label}>
      {(Object.keys(glyphs) as Array<keyof typeof glyphs>).map((letter) => (
        <span className="bde-mark__glyph" key={letter} aria-hidden="true">
          {glyphs[letter].map((on, index) => (
            <span className={on ? "bde-mark__cell is-on" : "bde-mark__cell"} key={index} />
          ))}
        </span>
      ))}
      <span className="bde-mark__signal" aria-hidden="true" />
    </span>
  );
}
