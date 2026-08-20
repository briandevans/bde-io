/** Operator's Ledger: primary Roman signature, while the raster mark is retained as a secondary seal. */
type LedgerWordmarkProps = {
  className?: string;
  descriptor?: boolean;
  label?: string;
};

export function LedgerWordmark({ className = "", descriptor = false, label = "BDE Ventures" }: LedgerWordmarkProps) {
  return (
    <span className={`ledger-wordmark ${className}`} role="img" aria-label={label}>
      <span className="ledger-wordmark__letters" aria-hidden="true">BDE</span>
      {descriptor ? <span className="ledger-wordmark__descriptor" aria-hidden="true">Ventures</span> : null}
    </span>
  );
}
