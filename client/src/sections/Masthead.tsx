const NAV = [
  { label: "Active Thesis", href: "#thesis" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Founder", href: "#founder" },
  { label: "Connect", href: "#connect" },
];

export default function Masthead() {
  return (
    <header className="band masthead">
      <a className="wordmark" href="#top" aria-label="BDE Ventures — home">
        BDE
      </a>
      <nav className="masthead__nav" aria-label="Primary">
        {NAV.map(({ label, href }) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
