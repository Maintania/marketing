'use client'

import { motion } from 'framer-motion'

type LogoProps = {
  href?: string
  size?: 'sm' | 'md'
}

const sizes = {
  sm: 'h-8 w-8 rounded-[10px] text-sm',
  md: 'h-10 w-10 rounded-lg text-base',
}

export default function Logo({ href = '/', size = 'md' }: LogoProps) {
  return (
    <motion.a
      href={href}
      aria-label="Comainter home"
      whileHover={{ y: -1 }}
      className="inline-flex items-center gap-3 text-white"
    >
      <motion.span
        aria-hidden="true"
        animate={{
          boxShadow: [
            '0 0 0 rgba(56,189,248,0)',
            '0 0 32px rgba(56,189,248,0.22)',
            '0 0 0 rgba(56,189,248,0)',
          ],
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden border border-white/15 bg-slate-950 ${sizes[size]}`}
      >
        <svg viewBox="0 0 40 40" className="h-full w-full" role="img" aria-label="">
          <defs>
            <linearGradient id="comainter-logo-a" x1="8" x2="32" y1="7" y2="33" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7dd3fc" />
              <stop offset="0.52" stopColor="#a78bfa" />
              <stop offset="1" stopColor="#34d399" />
            </linearGradient>
            <radialGradient id="comainter-logo-b" cx="0" cy="0" r="1" gradientTransform="matrix(17 19 -19 17 13 10)" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.55" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="40" height="40" rx="8" fill="#05060A" />
          <path
            d="M20 6.5 31.7 13.25v13.5L20 33.5 8.3 26.75v-13.5L20 6.5Z"
            fill="url(#comainter-logo-a)"
            fillOpacity="0.12"
            stroke="url(#comainter-logo-a)"
            strokeWidth="1.6"
          />
          <path
            d="M13.2 16.1 20 12.2l6.8 3.9v7.8L20 27.8l-6.8-3.9v-7.8Z"
            fill="#05060A"
            stroke="url(#comainter-logo-a)"
            strokeOpacity="0.82"
            strokeWidth="1.4"
          />
          <path d="M13.8 16.4 20 20l6.2-3.6M20 20v7.1" stroke="url(#comainter-logo-a)" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="20" cy="20" r="2.55" fill="url(#comainter-logo-a)" />
          <circle cx="20" cy="20" r="7.4" stroke="#7dd3fc" strokeDasharray="1.5 4" strokeOpacity="0.34" />
          <rect width="40" height="40" rx="8" fill="url(#comainter-logo-b)" />
        </svg>
      </motion.span>
      <span className="font-[var(--font-mono)] text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-white">
        Comainter
      </span>
    </motion.a>
  )
}
