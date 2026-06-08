# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start development server
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check   # TypeScript type checking
```

## Architecture

This is a **Next.js App Router** website for a wealth transition planning business, deployed on Vercel.

### Tech Stack
- Next.js (canary) with App Router and Server Components
- TypeScript 5.3 (strict mode)
- Tailwind CSS 4.0-alpha
- MDX for blog content
- Vercel Analytics + Speed Insights

### Key Directories

```
app/
├── components/          # Shared components organized by feature
│   ├── google/         # Google Analytics, Local Business Schema
│   ├── home/           # Homepage-specific components
│   └── services/       # Service page components
├── config/business.ts  # Central business configuration (NAP, hours, services)
├── blog/
│   ├── posts/          # MDX blog posts with frontmatter
│   └── utils.ts        # MDX parsing and date formatting
├── services/[tier]/    # Dynamic service tier pages
└── og/                 # Dynamic OG image generation
```

### Business Configuration

All business information (name, address, phone, hours) is centralized in `app/config/business.ts`. This ensures NAP consistency for SEO and Google Business Profile. Update this file when business details change.

### Blog/MDX System

Blog posts live in `app/blog/posts/` as `.mdx` files with YAML frontmatter:
```yaml
---
title: Post Title
publishedAt: 2024-01-15
summary: Brief description
---
```

Posts are parsed at build time via `getBlogPosts()` in `app/blog/utils.ts`.

### SEO Setup

- Metadata defined in `app/layout.tsx` using `businessConfig`
- Dynamic sitemap in `app/sitemap.ts`
- JSON-LD Local Business schema in `components/google/local-business-schema.tsx`
- OG images generated dynamically via `app/og/`

### Styling Conventions

- Use Tailwind utility classes exclusively
- Mobile-first responsive design
- Dark mode via `dark:` prefix
- Geist font (sans + mono) loaded globally

### Environment Variables

- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` - Google Search Console verification
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics ID (if used)
