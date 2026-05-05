'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/AnimatedCounter'
import { fadeUp, staggerContainer, staggerItem } from '@/lib/motion'

const pipeline = ['Webhook', 'Parse', 'Embed', 'Match', 'Label', 'Answer']

export default function PerformanceSection() {
  return (
    <section id="performance" className="relative overflow-hidden border-y border-white/10 bg-slate-950/35 px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        aria-hidden="true"
        animate={{ x: ['-15%', '15%', '-15%'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-y-0 left-1/3 w-1/2 bg-[radial-gradient(ellipse,rgba(56,189,248,0.16),transparent_62%)] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }}>
          <motion.p variants={fadeUp} className="font-[var(--font-mono)] text-xs font-medium uppercase tracking-[0.18em] text-sky-300">
            Performance
          </motion.p>
          <motion.h2 variants={fadeUp} custom={0.08} className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-white sm:text-6xl">
            <span className="block text-slate-500">From issue to triaged in</span>
            <span className="mt-2 block bg-gradient-to-r from-white via-sky-100 to-violet-200 bg-clip-text text-transparent">
              <AnimatedCounter target={800} suffix="ms" />
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={0.16} className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Comainter keeps the hot path lean: webhook-first ingestion, fast semantic retrieval, and answers grounded in project knowledge.
          </motion.p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="rounded-lg border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl sm:p-6">
          <div className="grid gap-3 sm:grid-cols-6">
            {pipeline.map((item, index) => (
              <motion.div key={item} variants={staggerItem} className="relative">
                <motion.div
                  animate={{ opacity: [0.55, 1, 0.55] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.2, ease: 'easeInOut' }}
                  className="rounded-md border border-white/10 bg-slate-950/80 p-4 text-center"
                >
                  <div className="mx-auto mb-3 h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_22px_rgba(56,189,248,0.7)]" />
                  <p className="font-[var(--font-mono)] text-[0.68rem] uppercase tracking-[0.14em] text-slate-400">{item}</p>
                </motion.div>
                {index < pipeline.length - 1 ? <div className="absolute left-full top-1/2 hidden h-px w-3 bg-white/20 sm:block" /> : null}
              </motion.div>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-md border border-white/10 bg-slate-950/80 p-4">
            <motion.div animate={{ x: ['-100%', '220%'] }} transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }} className="mb-4 h-px w-1/2 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ['190ms', 'embedding'],
                ['34ms', 'semantic match'],
                ['0 extra', 'manual triage'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-md bg-white/[0.035] p-4">
                  <p className="text-2xl font-semibold tracking-[-0.03em] text-white">{value}</p>
                  <p className="mt-1 font-[var(--font-mono)] text-[0.68rem] uppercase tracking-[0.14em] text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
