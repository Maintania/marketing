'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ApprovalIcon, DuplicateIcon, LabelIcon, ReplyIcon } from '@/components/Icons'
import { fadeUp, staggerContainer, staggerItem } from '@/lib/motion'

const states = [
  {
    status: 'Labeled',
    title: 'App crashes after update',
    label: 'bug, regression',
    severity: 'high',
    duplicate: 'Similar to #4381',
    reply: 'Assigned to runtime-team with the related issue attached and a regression answer generated from past fixes.',
  },
  {
    status: 'Assigned',
    title: 'OAuth refresh loop after laptop sleep',
    label: 'bug, auth',
    severity: 'high',
    duplicate: 'Possible duplicate #4772',
    reply: 'Assigned to auth-maintainers with the related tracking issue and a project-aware answer ready.',
  },
  {
    status: 'Deduped',
    title: 'Memory grows during incremental build',
    label: 'duplicate, performance',
    severity: 'medium',
    duplicate: 'Duplicate of #3104',
    reply: 'Linked to the existing performance issue with the current workaround from project history.',
  },
]

export default function DashboardPreview() {
  const [active, setActive] = useState(0)
  const item = states[active]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % states.length)
    }, 3600)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section id="dashboard" className="relative overflow-hidden border-y border-white/10 bg-white/[0.015] px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.12, 0.28, 0.12], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-1/2 h-[48rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.24),rgba(56,189,248,0.09)_45%,transparent_70%)] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }}>
          <motion.p variants={fadeUp} className="font-[var(--font-mono)] text-xs font-medium uppercase tracking-[0.18em] text-sky-300">
            Dashboard Preview
          </motion.p>
          <motion.h2 variants={fadeUp} custom={0.08} className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-white sm:text-6xl">
            Answers from your project knowledge.
          </motion.h2>
          <motion.p variants={fadeUp} custom={0.16} className="mt-5 max-w-xl text-lg leading-8 text-slate-400">
            Comainter turns each issue into labels, severity, owner, duplicate links, and an answer grounded in the project history.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="overflow-hidden rounded-lg border border-white/10 bg-slate-950/65 shadow-2xl shadow-black/50 backdrop-blur-2xl"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div>
              <p className="text-sm font-semibold text-white">Triage Queue</p>
              <p className="mt-1 font-[var(--font-mono)] text-xs text-slate-500">knowledge answer ready</p>
            </div>
            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 font-[var(--font-mono)] text-xs text-emerald-200">
              live
            </span>
          </div>

          <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div variants={staggerItem} className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r">
              {states.map((state, index) => (
                <button
                  key={state.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`mb-2 block w-full rounded-md border p-3 text-left transition-colors ${
                    active === index ? 'border-violet-300/40 bg-violet-400/10' : 'border-white/10 bg-white/[0.025] hover:bg-white/[0.055]'
                  }`}
                >
                  <p className="truncate text-sm font-medium text-white">{state.title}</p>
                  <p className="mt-2 font-[var(--font-mono)] text-[0.68rem] uppercase tracking-[0.14em] text-slate-500">{state.status}</p>
                </button>
              ))}
            </motion.div>

            <div className="p-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.16em] text-slate-500">{item.status}</p>
                      <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-white">{item.title}</h3>
                    </div>
                    <motion.button
                      whileHover={{ y: -1, boxShadow: '0 16px 44px rgba(16,185,129,0.2)' }}
                      whileTap={{ scale: 0.98 }}
                      className="shrink-0 rounded-md bg-emerald-300 px-4 py-2 text-sm font-semibold text-emerald-950"
                    >
                      Answered
                    </motion.button>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <InfoCard icon={<LabelIcon className="h-5 w-5" />} label="Label" value={item.label} />
                    <InfoCard icon={<ApprovalIcon className="h-5 w-5" />} label="Severity" value={item.severity} />
                    <InfoCard icon={<DuplicateIcon className="h-5 w-5" />} label="Duplicate check" value={item.duplicate} wide />
                    <InfoCard icon={<ReplyIcon className="h-5 w-5" />} label="Answer" value={item.reply} wide />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function InfoCard({ icon, label, value, wide = false }: { icon: ReactNode; label: string; value: string; wide?: boolean }) {
  return (
    <motion.div whileHover={{ y: -3 }} className={`rounded-md border border-white/10 bg-white/[0.035] p-4 ${wide ? 'sm:col-span-2' : ''}`}>
      <div className="flex items-center gap-2 text-sky-200">
        {icon}
        <span className="font-[var(--font-mono)] text-[0.68rem] uppercase tracking-[0.14em] text-slate-500">{label}</span>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-200">{value}</p>
    </motion.div>
  )
}
