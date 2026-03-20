# MergeMin — Marketing Page

Next.js 14 + Framer Motion marketing page for the MergeMin OSS maintainer AI.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Stack
- **Next.js 14** (App Router)
- **Framer Motion 11** for all animations
- **TypeScript**
- No Tailwind, no UI library — pure CSS variables for full design control

## Structure

```
app/
  layout.tsx        # Root layout + metadata
  page.tsx          # Page assembly — imports all sections
  globals.css       # Design tokens, base styles, noise overlay

components/
  Navbar.tsx        # Fixed nav, scroll detection, mobile hamburger menu
  Hero.tsx          # Hero with animated grid, glow, live issue ticker
  StatsBar.tsx      # Animated counters on scroll
  HowItWorks.tsx    # 4-step grid with hover line animations
  TerminalDemo.tsx  # Split layout: copy + animated terminal
  FeaturesGrid.tsx  # 6-feature card grid
  Testimonials.tsx  # 3 testimonial cards
  Pricing.tsx       # 3-tier pricing grid
  CtaSection.tsx    # Email capture with success state
  Footer.tsx        # Simple footer

lib/
  motion.ts         # Shared Framer Motion variants (fadeUp, staggerContainer, etc.)
```

## Animations used
- `whileInView` — all sections reveal on scroll
- `staggerChildren` — card grids appear sequentially
- `animate` (keyframes) — hero grid drift, glow pulse, logo dot, ticker scroll, cursor blink
- `whileHover` — card lifts, button glows, step accent line reveals
- `AnimatePresence` — mobile menu fade in/out
- Animated counter — numbers count up when scrolled into view
