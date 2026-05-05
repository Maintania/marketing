'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem } from '@/lib/motion'

const issues = [
  { id: '#5128', title: 'Crash when extension loads in monorepo', type: 'bug', signal: 'severity: high', color: 'text-rose-300 bg-rose-400/10 border-rose-400/20' },
  { id: '#5129', title: 'Crash after latest release', type: 'bug', signal: 'owner: runtime', color: 'text-amber-200 bg-amber-400/10 border-amber-400/20' },
  { id: '#5130', title: 'Add guide for pnpm workspace setup', type: 'docs', signal: 'owner: docs', color: 'text-sky-200 bg-sky-400/10 border-sky-400/20' },
  { id: '#5131', title: 'Request webhook replay controls', type: 'feature', signal: 'priority: normal', color: 'text-emerald-200 bg-emerald-400/10 border-emerald-400/20' },
  { id: '#5132', title: 'Memory grows during incremental build', type: 'bug', signal: 'severity: critical', color: 'text-rose-300 bg-rose-400/10 border-rose-400/20' },
  { id: '#5133', title: 'Windows path casing issue repeats', type: 'duplicate', signal: 'matches #4920', color: 'text-violet-200 bg-violet-400/10 border-violet-400/20' },
]

const doubled = [...issues, ...issues]

export default function IssueStream() {
  return (
    <section id="stream" className="relative border-y border-white/10 bg-white/[0.015] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mb-8 grid gap-4 md:grid-cols-[0.8fr_1.2fr] md:items-end"
        >
          <div>
            <motion.p variants={staggerItem} className="font-[var(--font-mono)] text-xs font-medium uppercase tracking-[0.18em] text-sky-300">
              Live Issue Stream
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Every new issue arrives pre-sorted.
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} custom={0.1} className="max-w-2xl text-base leading-7 text-slate-400 md:justify-self-end">
            Bugs, features, duplicates, severity, likely owners, and project-aware answers are generated as the stream moves.
          </motion.p>
        </motion.div>

        <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} className="flex w-max gap-3 py-2">
            {doubled.map((issue, index) => (
              <motion.article
                key={`${issue.id}-${index}`}
                whileHover={{ y: -6, scale: 1.02 }}
                className="w-[20rem] rounded-lg border border-white/10 bg-slate-950/70 p-4 shadow-xl shadow-black/20 backdrop-blur transition-colors hover:border-white/20 hover:bg-white/[0.055]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-[var(--font-mono)] text-xs text-slate-500">{issue.id}</span>
                  <span className={`rounded-full border px-2 py-1 font-[var(--font-mono)] text-[0.65rem] uppercase tracking-[0.14em] ${issue.color}`}>
                    {issue.type}
                  </span>
                </div>
                <h3 className="mt-4 truncate text-sm font-semibold text-white">{issue.title}</h3>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {issue.signal}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
