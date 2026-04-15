# BDE Ventures

Public website source for [bde.io](https://bde.io), the BDE Ventures advisory site founded by Brian D. Evans.

## Overview

This project is a React and TypeScript site built with Vite on the frontend and a small Express server for production delivery.

## Stack

- React 19
- TypeScript
- Vite
- Express
- Tailwind CSS
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
pnpm build
pnpm start
```

## Project Layout

```text
client/   Frontend app and route components
server/   Express entrypoint for production serving
patches/  pnpm patch files for dependency overrides
```
