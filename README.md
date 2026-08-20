# BDE Ventures

Public website source for [bde.io](https://bde.io), the BDE Ventures advisory site founded by Brian D. Evans.

## Overview

A single-page editorial site — a printed-dossier layout of cream sheet, crop marks and
serif display type — built with React and TypeScript on Vite. The production build is
static and is published to GitHub Pages by `.github/workflows/deploy.yml` on every push
to `main`; `server/` holds a small Express entrypoint for serving the same build
elsewhere.

## Stack

- React 19
- TypeScript
- Vite
- Plain CSS design system (`client/src/index.css`)
- Self-hosted Playfair Display + Inter (see `client/public/fonts/README.md`)
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
pnpm build     # emits dist/public (plus the 404.html fallback)
pnpm preview   # serve that build locally
```

## Project Layout

```text
client/src/index.css     Design tokens and every section's styles
client/src/sections/     Masthead, Hero, Press, Thesis, Method, Dispatch, Dossier, Connect
client/public/           Images, fonts, CNAME, robots.txt, sitemap.xml
server/                  Express entrypoint for production serving
patches/                 pnpm patch files for dependency overrides
```
