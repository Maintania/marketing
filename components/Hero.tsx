'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-4 pb-20 pt-28 text-center sm:px-6 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[#05060a]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_34%,rgba(56,189,248,0.18),transparent_22rem),radial-gradient(circle_at_50%_48%,rgba(139,92,246,0.20),transparent_28rem),linear-gradient(180deg,rgba(255,255,255,0.045),transparent_38%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-96 bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.14),transparent)] opacity-50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.055]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-200/[0.07]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:96px_96px] [mask-image:radial-gradient(ellipse_60%_44%_at_50%_42%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-[#05060a] to-transparent"
      />
      <HeroVercelAura />

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2 font-[var(--font-mono)] text-[0.68rem] font-medium uppercase tracking-[0.16em] text-sky-100/90 shadow-2xl shadow-black/20 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(125,211,252,0.75)]" />
          AI co-maintainer for open source
        </div>

        <h1 className="mx-auto flex max-w-5xl flex-col items-center gap-5 text-balance text-5xl font-black leading-[0.93] tracking-[-0.055em] text-white sm:gap-7 sm:text-7xl lg:text-8xl">
          <span>Stop drowning in</span>
          <span className="bg-gradient-to-r from-sky-200 via-white to-violet-200 bg-clip-text text-transparent drop-shadow-[0_0_38px_rgba(125,211,252,0.2)]">
            issues.
          </span>
        </h1>

        <p className="mx-auto mt-10 max-w-2xl text-pretty text-base font-medium leading-8 text-slate-200/90 sm:text-lg">
          Comainter labels issues, finds duplicates, assigns the right owners, and answers from your project knowledge so maintainers can stay focused on the core idea.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <motion.a
            href="#waitlist"
            whileHover={{ y: -2, boxShadow: '0 22px 70px rgba(56, 189, 248, 0.22)' }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex h-12 items-center justify-center rounded-md border border-sky-300/20 bg-gradient-to-b from-sky-300 to-violet-400 px-6 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-950/30"
          >
            Request Access
          </motion.a>
          <motion.a
            href="#how-it-works"
            whileHover={{ y: -2, borderColor: 'rgba(125, 211, 252, 0.36)', backgroundColor: 'rgba(125, 211, 252, 0.08)' }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex h-12 items-center justify-center rounded-md border border-white/10 bg-slate-950/55 px-6 text-sm font-semibold text-slate-100 backdrop-blur"
          >
            See how it works
          </motion.a>
        </div>
      </div>
    </section>
  )
}

function HeroVercelAura() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{ opacity: [0.28, 0.48, 0.28], scale: [0.96, 1.04, 0.96] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-[28%] h-[28rem] w-[min(58rem,92vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18),rgba(125,211,252,0.10)_34%,rgba(139,92,246,0.08)_48%,transparent_70%)] blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-[39%] h-px w-[min(54rem,82vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />
      <motion.div
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-[43%] h-40 w-[min(42rem,76vw)] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.10),rgba(167,139,250,0.12),transparent)] bg-[length:220%_100%] blur-2xl"
      />
    </div>
  )
}
