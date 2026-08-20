/** Soft Raster Editorial: a quiet glass header keeps the navigation readable over every light section. */
import { Menu } from "lucide-react";
import { LedgerWordmark } from "./LedgerWordmark";

type SiteHeaderProps = { navigation: ReadonlyArray<{ label: string; href: string }> };

export function SiteHeader({ navigation }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <a className="site-header__brand" href="#main-content" aria-label="BDE Ventures, skip to main content"><LedgerWordmark descriptor /></a>
      <nav className="site-header__nav" aria-label="Primary navigation">
        {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
      </nav>
      <details className="site-header__mobile-menu">
        <summary aria-label="Open site navigation"><Menu size={18} aria-hidden="true" /></summary>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </nav>
      </details>
    </header>
  );
}
