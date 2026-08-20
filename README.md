# BDE Ventures

Public website source for [bde.io](https://bde.io), the BDE Ventures advisory site founded by Brian D. Evans.

## Overview

A single-page editorial composition — warm paper, Newsreader display type, a
lavender signal field, and the modular BDE raster mark. Built with React and
TypeScript on Vite. The production build is static and is published to GitHub
Pages by `.github/workflows/deploy.yml` on every push to `main`; `server/`
holds a small Express entrypoint for serving the same build elsewhere.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4 alongside the hand-written composition in `client/src/index.css`
- wouter for routing
- Self-hosted Newsreader + Manrope (see `client/public/fonts/README.md`)
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
client/src/components/    BdeMark, LedgerWordmark, SectionLabel, SignalField, SiteHeader
client/public/            Images, fonts, CNAME, robots.txt, sitemap.xml, llms.txt
server/                   Express entrypoint for production serving
patches/                  pnpm patch files for dependency overrides
```

## Editing content

Copy, navigation, focus areas, dispatch essays, and founder details all live in
`client/src/lib/site.ts`. Images referenced there sit in `client/public/images/`.
