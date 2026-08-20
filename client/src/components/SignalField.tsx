/** Soft Raster Editorial: sparse, non-semantic signal pixels frame content without becoming an illustration. */
type SignalFieldProps = { className?: string; density?: "low" | "medium" };
type SignalDot = readonly [number, number, "xs" | "sm"];

const lowDots: SignalDot[] = [[4, 36, "sm"], [18, 49, "xs"], [35, 14, "xs"], [59, 65, "sm"], [77, 28, "xs"], [92, 56, "sm"]];
const mediumDots: SignalDot[] = [...lowDots, [12, 71, "xs"], [26, 83, "sm"], [46, 34, "xs"], [67, 17, "sm"], [87, 78, "xs"], [98, 39, "sm"]];

export function SignalField({ className = "", density = "low" }: SignalFieldProps) {
  const dots = density === "medium" ? mediumDots : lowDots;
  return (
    <span className={`signal-field ${className}`} aria-hidden="true">
      {dots.map(([x, y, size], index) => <span className={`signal-field__dot signal-field__dot--${size}`} key={`${x}-${y}-${index}`} style={{ left: `${x}%`, top: `${y}%` }} />)}
    </span>
  );
}
