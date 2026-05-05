'use client'

import { motion } from 'framer-motion'
import { ApprovalIcon, BrainIcon, GraphIcon, WebhookIcon } from '@/components/Icons'
import { fadeUp, revealClip, staggerContainer, staggerItem } from '@/lib/motion'

const steps = [
  {
    label: 'Ingest',
    title: 'Tracker capture',
    description: 'Comainter listens to new issues, merge requests, and pull requests from your Git platform, then normalizes each event into a triage-ready payload.',
    icon: WebhookIcon,
  },
  {
    label: 'Understand',
    title: 'Understand intent',
    description: 'The system reads the report, extracts the problem, identifies severity, and understands whether it is a bug, feature request, question, or duplicate.',
    icon: BrainIcon,
  },
  {
    label: 'Connect',
    title: 'Connect history',
    description: 'It links related issues, merge requests, pull requests, docs, and past resolutions so the answer comes from project knowledge.',
    icon: GraphIcon,
  },
  {
    label: 'Decide',
    title: 'Label + answer',
    description: 'Comainter applies the right labels, owner, severity, duplicate link, and project-aware answer so maintainers do not repeat manual triage.',
    icon: ApprovalIcon,
  },
]

const issueStates = [
  { label: 'New issue', detail: '#4829 opened', tone: 'border-sky-300/25 bg-sky-300/10 text-sky-100' },
  { label: 'Labeled', detail: 'bug - high', tone: 'border-violet-300/25 bg-violet-300/10 text-violet-100' },
  { label: 'Matched', detail: 'duplicate #3104', tone: 'border-cyan-300/25 bg-cyan-300/10 text-cyan-100' },
  { label: 'Answered', detail: 'from project docs', tone: 'border-emerald-300/25 bg-emerald-300/10 text-emerald-100' },
]

const trackDots = ['left-[12.5%]', 'left-[37.5%]', 'left-[62.5%]', 'left-[87.5%]']

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className="mx-auto max-w-3xl text-center">
          <motion.p variants={fadeUp} className="font-[var(--font-mono)] text-xs font-medium uppercase tracking-[0.18em] text-violet-300">
            How It Works
          </motion.p>
          <motion.h2 variants={fadeUp} custom={0.08} className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-white sm:text-6xl">
            A calm pipeline before the maintainer inbox.
          </motion.h2>
          <motion.p variants={fadeUp} custom={0.16} className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Four lightweight stages turn every incoming issue into labels, owners, duplicate links, and a project-aware answer.
          </motion.p>
        </motion.div>

        <div className="relative mt-14">
          <div className="relative mb-6 hidden h-24 lg:block">
            <motion.div
              variants={revealClip}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              className="absolute left-[12.5%] right-[12.5%] top-1/2 h-px bg-gradient-to-r from-sky-300/20 via-violet-300/50 to-emerald-300/20"
            />
            {trackDots.map((position) => (
              <div
                key={position}
                className={`absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-slate-950 ${position}`}
              />
            ))}
            <motion.div
              animate={{
                left: ['12.5%', '37.5%', '62.5%', '87.5%', '87.5%'],
                opacity: [1, 1, 1, 1, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: [0.22, 1, 0.36, 1],
                times: [0, 0.25, 0.5, 0.75, 1],
              }}
              className="absolute top-1/2 w-44 -translate-x-1/2 -translate-y-1/2"
            >
              <motion.div
                animate={{
                  borderColor: [
                    'rgba(125,211,252,0.28)',
                    'rgba(196,181,253,0.30)',
                    'rgba(103,232,249,0.30)',
                    'rgba(110,231,183,0.30)',
                    'rgba(125,211,252,0.28)',
                  ],
                  boxShadow: [
                    '0 18px 60px rgba(56,189,248,0.12)',
                    '0 18px 60px rgba(139,92,246,0.14)',
                    '0 18px 60px rgba(34,211,238,0.12)',
                    '0 18px 60px rgba(16,185,129,0.14)',
                    '0 18px 60px rgba(56,189,248,0.12)',
                  ],
                }}
                transition={{ duration: 8, repeat: Infinity, times: [0, 0.25, 0.5, 0.75, 1] }}
                className="rounded-lg border bg-slate-950/95 p-3 backdrop-blur"
              >
                <p className="font-[var(--font-mono)] text-[0.65rem] uppercase tracking-[0.14em] text-slate-500">
                  issue packet
                </p>
                <RotatingIssueState />
              </motion.div>
            </motion.div>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} className="grid gap-4 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.article
                  key={step.label}
                  variants={staggerItem}
                  whileHover={{ y: -8, borderColor: 'rgba(255,255,255,0.22)' }}
                  className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 backdrop-blur"
                >
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-md border border-white/10 bg-slate-950 text-sky-200">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-slate-500">
                    0{index + 1} / {step.label}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{step.description}</p>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function RotatingIssueState() {
  return (
    <div className="mt-2 h-12 overflow-hidden">
      <motion.div
        animate={{ y: [0, -48, -96, -144, -192] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: [0.22, 1, 0.36, 1],
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      >
        {[...issueStates, issueStates[0]].map((state, index) => (
          <div key={`${state.label}-${index}`} className="h-12">
            <div className={`rounded-md border px-3 py-2 ${state.tone}`}>
              <p className="text-sm font-semibold leading-none">{state.label}</p>
              <p className="mt-1 font-[var(--font-mono)] text-[0.64rem] uppercase tracking-[0.12em] opacity-75">{state.detail}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
