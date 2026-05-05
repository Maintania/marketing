'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem } from '@/lib/motion'

export default function CtaSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const submit = () => {
    if (email.includes('@')) {
      setSubmitted(true)
    }
  }

  return (
    <section id="waitlist" className="relative overflow-hidden px-4 py-24 text-center sm:px-6 lg:px-8">
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.18, 0.36, 0.18], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.34),rgba(56,189,248,0.12)_44%,transparent_70%)] blur-3xl"
      />

      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className="relative mx-auto max-w-3xl">
        <motion.p variants={staggerItem} className="font-[var(--font-mono)] text-xs font-medium uppercase tracking-[0.18em] text-sky-300">
          Request Access
        </motion.p>
        <motion.h2 variants={fadeUp} className="mt-4 text-balance text-4xl font-semibold tracking-[-0.035em] text-white sm:text-6xl">
          Focus on shipping. Let AI handle triage.
        </motion.h2>
        <motion.p variants={fadeUp} custom={0.1} className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          Bring Comainter into your maintainer workflow and turn every new issue into labels, owners, duplicate links, and project-aware answers.
        </motion.p>

        <motion.div variants={fadeUp} custom={0.18} className="mx-auto mt-9 max-w-xl">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="submitted"
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12 }}
                className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 px-5 py-4 text-sm font-medium text-emerald-100"
              >
                You are on the access list. We will reach out when the next onboarding batch opens.
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  onKeyDown={(event) => event.key === 'Enter' && submit()}
                  placeholder="maintainer@project.dev"
                  aria-label="Email address"
                  className="h-12 min-w-0 flex-1 rounded-md border border-white/10 bg-slate-950/80 px-4 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-violet-300/60"
                />
                <motion.button
                  type="button"
                  onClick={submit}
                  whileHover={{ y: -2, boxShadow: '0 18px 60px rgba(139,92,246,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="h-12 rounded-md bg-white px-6 text-sm font-semibold text-slate-950"
                >
                  Request Access
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  )
}
