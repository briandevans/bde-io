# BDE Ventures

Public website source for [bde.io](https://bde.io), the BDE Ventures advisory site founded by Brian D. Evans.

## Overview

A single-page, native-minimalist site for BDE Ventures. It uses browser system
font stacks, a compact pixel BDE mark, and a semantic HTML baseline. Built with
React and TypeScript on Vite, the production build is static and published to
GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.
`server/` contains an optional Express entrypoint for serving the same build
elsewhere.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4 alongside the hand-written composition in `client/src/index.css`
- wouter for routing
- Native system sans font stack
- pnpm

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10+

### Install

```bash
pnpm install
```

### Run locally

```bash
pnpm dev
```

### Type-check

```bash
pnpm check
```

### Production build

```bash
pnpm build     # emits dist/public (plus the 404.html SPA fallback)
pnpm preview   # serve that build locally
```

## Project Layout

```text
client/src/index.css      Design tokens and the full page composition
client/src/pages/Home.tsx The single page: hero, thesis, philosophy, dispatch, founder, connect
client/src/lib/site.ts    All site copy, links, and asset paths in one place
client/src/components/    Reusable page primitives, including the BDE mark
client/public/            Published assets, CNAME, favicon, robots.txt, sitemap.xml, llms.txt
client/public/fonts/      Retained historical font files; not used by the current UI
server/                   Express entrypoint for production serving
patches/                  pnpm patch files for dependency overrides
```

## Editing content

Copy, navigation, focus areas, dispatch essays, and founder details all live in
`client/src/lib/site.ts`. Images referenced there sit in `client/public/images/`.
Keep `client/index.html` metadata and semantic fallback aligned with material
content changes.
