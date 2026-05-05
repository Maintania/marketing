'use client'

import { motion } from 'framer-motion'
import { DuplicateIcon, GraphIcon, LabelIcon, ReplyIcon } from '@/components/Icons'
import { fadeUp, staggerContainer, staggerItem } from '@/lib/motion'

const features = [
  {
    title: 'Duplicate detection',
    description: 'Finds repeated reports across open and closed issues, even when users describe the same problem in different words.',
    icon: DuplicateIcon,
  },
  {
    title: 'Smart issue labeling',
    description: 'Generates labels, severity, priority, and issue type so maintainers see structured work instead of raw tracker noise.',
    icon: LabelIcon,
  },
  {
    title: 'Owner assignment',
    description: 'Assigns issues to the right maintainer, team, or component owner based on project history and knowledge graph context.',
    icon: ReplyIcon,
  },
  {
    title: 'Knowledge graph',
    description: 'Builds a living map across issues, merge requests, pull requests, docs, labels, owners, versions, and recurring problem areas.',
    icon: GraphIcon,
  },
]

export default function FeaturesGrid() {
  return (
    <section id="features" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className="max-w-3xl">
          <motion.p variants={fadeUp} className="font-[var(--font-mono)] text-xs font-medium uppercase tracking-[0.18em] text-violet-300">
            Features
          </motion.p>
          <motion.h2 variants={fadeUp} custom={0.08} className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-white sm:text-6xl">
            Built for maintainers who need signal fast.
          </motion.h2>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} className="mt-12 grid gap-4 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.article
                key={feature.title}
                variants={staggerItem}
                whileHover={{
                  y: -8,
                  scale: 1.01,
                  boxShadow: '0 28px 90px rgba(56,189,248,0.08), 0 0 0 1px rgba(255,255,255,0.12)',
                }}
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-6 backdrop-blur"
              >
                <motion.div
                  aria-hidden="true"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(139,92,246,0.20),transparent_34%),radial-gradient(circle_at_86%_22%,rgba(56,189,248,0.12),transparent_30%)]"
                />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md border border-white/10 bg-slate-950 text-violet-200 transition-colors group-hover:text-sky-200">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-white">{feature.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">{feature.description}</p>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
