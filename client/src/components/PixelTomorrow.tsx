type PixelTomorrowProps = {
  className?: string;
};

/** The fixed, flat geometry for the hero's typographic wordmark. */
export function TomorrowGlyphGeometry() {
  return (
    <g fill="currentColor" shapeRendering="crispEdges">
      {/* t */}
      <path d="M3 1h1v2h2v1H4v5h2v1H3V4H1V3h2z" />

      {/* o */}
      <path
        d="M9 3h5v1h1v5h-1v1H9V9H8V4h1zM9 4v5h5V4z"
        fillRule="evenodd"
      />

      {/* m */}
      <rect height="7" width="1" x="16" y="3" />
      <rect height="1" width="4" x="17" y="3" />
      <rect height="6" width="1" x="21" y="4" />
      <rect height="1" width="4" x="22" y="3" />
      <rect height="6" width="1" x="26" y="4" />

      {/* o */}
      <path
        d="M29 3h5v1h1v5h-1v1h-5V9h-1V4h1zM29 4v5h5V4z"
        fillRule="evenodd"
      />

      {/* r */}
      <rect height="7" width="1" x="36" y="3" />
      <rect height="1" width="4" x="37" y="3" />
      <rect height="2" width="1" x="41" y="4" />

      <rect height="7" width="1" x="43" y="3" />
      <rect height="1" width="4" x="44" y="3" />
      <rect height="2" width="1" x="48" y="4" />

      {/* o */}
      <path
        d="M51 3h5v1h1v5h-1v1h-5V9h-1V4h1zM51 4v5h5V4z"
        fillRule="evenodd"
      />

      {/* w */}
      <path
        d="M58.5 3.5v6H61v-3h3v3h2.5v-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeWidth="1"
      />

      {/* period */}
      <rect height="1" width="1" x="68" y="9" />
    </g>
  );
}

/** The SVG is decorative; the heading carries the accessible word text. */
export function PixelTomorrow({ className }: PixelTomorrowProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 70 11"
      xmlns="http://www.w3.org/2000/svg"
    >
      <TomorrowGlyphGeometry />
    </svg>
  );
}
