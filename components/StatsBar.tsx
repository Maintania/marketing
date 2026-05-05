'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/AnimatedCounter'
import { fadeUp, staggerContainer, staggerItem } from '@/lib/motion'

const stats = [
  { value: 4200, suffix: '+', label: 'issues triaged per day' },
  { value: 91, suffix: '%', label: 'triage answer accuracy' },
  { value: 73, suffix: '%', label: 'less maintainer triage time' },
  { value: 12, suffix: '', label: 'projects in private beta' },
]

export default function StatsBar() {
  return (
    <section id="stats" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className="mb-12 max-w-3xl">
          <motion.p variants={fadeUp} className="font-[var(--font-mono)] text-xs font-medium uppercase tracking-[0.18em] text-violet-300">
            Social Proof
          </motion.p>
          <motion.h2 variants={fadeUp} custom={0.08} className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-white sm:text-6xl">
            Designed for projects where issue volume never slows down.
          </motion.h2>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={staggerItem} className="bg-[#070914] p-6 sm:p-8">
              <p className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
