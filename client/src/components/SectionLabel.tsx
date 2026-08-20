/** Soft Raster Editorial: small scarlet labels establish the reading rhythm across the long page. */
import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="section-label">{children}</p>;
}
