# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **hooks-playground**, an educational Next.js application for learning React hooks through interactive demos and recreations. The project aims to implement 20 hooks (10 built-in, 10 custom) with explanations and interactive examples.

## Commands

```bash
npm run dev       # Start development server (localhost:3000)
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run Biome linter (biome check)
npm run format    # Format code with Biome (biome format --write)
```

## Tech Stack

- **Next.js 16** with App Router
- **React 19** with TypeScript
- **Tailwind CSS 4** via PostCSS
- **Biome** for linting and formatting (not ESLint/Prettier)

## Architecture

### Routing
- `/` - Home page with hooks overview
- `/hooks/[slug]` - Dynamic route for individual hook pages

### Source Structure
```
src/app/
  lib/data/hooks-list.ts  # Hook type definitions and data
  hooks/[slug]/page.tsx   # Hook detail pages
```

### Path Aliases
Use `@/*` to import from `./src/*` (configured in tsconfig.json).

### Planned Structure (from progress.md)
- `/components/ui/` - Reusable UI components (CodeBlock, Badge, Card, Button)
- `/components/layout/` - Layout components (Header, Footer)
- `/lib/hooks/built-in/` - Built-in hook recreations
- `/lib/hooks/custom/` - Custom hook implementations

## Code Style

- Biome handles linting and formatting
- 2-space indentation
- Recommended React/Next.js rules enabled
- Import organization via Biome assist
