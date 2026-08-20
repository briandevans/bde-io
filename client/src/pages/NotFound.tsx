/** Soft Raster Editorial: a calm, branded route fallback with an immediate escape path. */
import { BdeMark } from "@/components/BdeMark";

export default function NotFound() {
  return (
    <main className="not-found">
      <BdeMark />
      <p className="section-label">404</p>
      <h1>This page is not part of the map.</h1>
      <p>The route you requested is not available. Return to BDE Ventures to continue.</p>
      <a className="text-link" href="/">Return to BDE Ventures ↗</a>
    </main>
  );
}
