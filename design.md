# Design — BDE Ventures

A locked design system for this site. Every page redesign reads this file before
emitting code. Do not regenerate per page — extend or amend this file when the
system needs to grow.

## Genre
modern-minimal · institutional atmospheric

## Macrostructure family
- Marketing pages: Asymmetric Split Hero → Numbered Thesis Rows → Cool Surface Philosophy → Full-bleed Type Filter → Founder Split → Connect Dual Column → Edge Footer

## Theme
- `--color-void`     oklch(0.12 0.005 250)
- `--color-surface`  oklch(0.16 0.008 250)
- `--color-paper`    oklch(0.96 0.004 250)
- `--color-ink`      oklch(0.98 0.002 250)
- `--color-ink-muted` oklch(0.68 0.01 250)
- `--color-ink-faint` oklch(0.48 0.01 250)
- `--color-rule`     oklch(0.28 0.01 250)
- `--color-accent`   oklch(0.58 0.19 260)
- `--color-focus`    oklch(0.58 0.19 260)

## Typography
- Display: Bricolage Grotesque, weight 500–700, style normal
- Body: Public Sans, weight 300–500
- Mono: JetBrains Mono, weight 400–500 (labels only, sparingly)
- Display tracking: -0.02em to -0.03em (floor ≥ -0.04em)
- Type scale anchor: text-display = clamp(2.75rem, 7vw, 5.5rem)

## Spacing
4-point named scale. Prefer clamp fluid section padding.
`--space-xs` 4 · `--space-sm` 8 · `--space-md` 16 · `--space-lg` 32 · `--space-xl` 64 · `--space-2xl` 96 · `--space-3xl` 160

## Motion
- Easings: `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`; `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1)`
- Reveal pattern: fade + slight Y (12–24px), ease-out, ≤ 700ms; stagger ≤ 80ms
- Reduced-motion fallback: opacity-only, ≤ 150 ms
- Button active: scale(0.97) 120ms

## Microinteractions stance
- silent success
- hover delay none on primary actions
- custom cursor retained on fine pointers; system cursor on touch

## CTA voice
- Primary CTA: solid fill ink-on-paper or accent fill, sharp corners (0 radius), uppercase tracked 0.08em
- Secondary CTA: 1px outline, no fill, same type treatment

## Anti-patterns (banned)
- Warm parchment / cream / terracotta / bronze palettes
- Cormorant, Inter, Space Grotesk, Fraunces as display/body
- Identical icon-tile glass cards
- Centered-everything sections
- Tiny uppercase tracked eyebrow on every section
- Italic display headlines
- Gradient text, purple gradients, glow-heavy shadows
- rounded-full pill CTAs as default
- Fabricated metrics

## Brand voice
Operator conviction. Institutional, not costume-tech. Specific, not SaaS-neutral.
