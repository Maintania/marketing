'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem } from '@/lib/motion'

const plans = [
  {
    name: '14-Day Trial',
    price: '$0',
    period: '14 days',
    description: 'Test Comainter on one active project with real issue flow before choosing a paid plan.',
    cta: 'Start Trial',
    featured: false,
    features: ['1 project', 'Up to 500 issues', 'Smart labels', 'Duplicate detection', 'Knowledge answers'],
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per project / month',
    description: 'For maintainers who want automated triage on a growing open source project.',
    cta: 'Get Pro',
    featured: false,
    features: ['3 projects', '5,000 issues / month', 'Labels and severity', 'Owner assignment', 'Duplicate linking'],
  },
  {
    name: 'Pro Plus',
    price: '$79',
    period: 'per workspace / month',
    description: 'For teams managing multiple projects, components, and maintainer ownership areas.',
    cta: 'Get Pro Plus',
    featured: true,
    features: ['10 projects', '25,000 issues / month', 'Advanced knowledge graph', 'Component ownership routing', 'Priority support'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'annual contract',
    description: 'For large foundations, companies, and self-hosted Git deployments with security needs.',
    cta: 'Contact Sales',
    featured: false,
    features: ['Unlimited projects', 'Self-hosted Git support', 'SSO and audit logs', 'Custom retention', 'Dedicated onboarding'],
  },
]

const faqs = [
  {
    question: 'Which Git platforms does Comainter support?',
    answer: 'Comainter is designed for GitHub, GitLab, Bitbucket, and self-hosted Git platforms through tracker events, APIs, and project knowledge ingestion.',
  },
  {
    question: 'Is the 14-day trial free?',
    answer: 'Yes. The trial lets you connect one project and evaluate labels, duplicate detection, assignment, and project-aware answers before upgrading.',
  },
  {
    question: 'What happens after the trial ends?',
    answer: 'You can upgrade to Pro, Pro Plus, or Enterprise. Your project configuration and knowledge graph can carry forward into the selected plan.',
  },
  {
    question: 'Does Comainter answer issues automatically?',
    answer: 'Comainter generates answers from your project history, docs, issues, merge requests, pull requests, and known fixes so maintainers avoid repeated manual triage.',
  },
  {
    question: 'How are duplicate issues detected?',
    answer: 'Comainter uses semantic matching against open and closed issues, related changes, docs, and previous resolutions to identify repeated reports.',
  },
  {
    question: 'Can Comainter assign issues to owners?',
    answer: 'Yes. It can route issues to maintainers, teams, or component owners based on project history, ownership patterns, labels, and knowledge graph context.',
  },
  {
    question: 'Can we use Comainter with private projects?',
    answer: 'Yes. Paid plans support private projects, and Enterprise can include custom security, retention, and deployment requirements.',
  },
  {
    question: 'Does it support monorepos?',
    answer: 'Yes. Comainter can map issues to packages, components, owners, docs, and past changes inside large monorepos.',
  },
  {
    question: 'What is counted as an issue?',
    answer: 'An issue is any tracker item processed for triage, labeling, duplicate detection, assignment, or answer generation.',
  },
  {
    question: 'Can we change labels and routing rules?',
    answer: 'Yes. Teams can adapt label sets, severity levels, owner mappings, and project-specific routing behavior.',
  },
  {
    question: 'Do you offer annual billing?',
    answer: 'Yes. Annual billing is available for Pro Plus and Enterprise, with custom terms for larger teams.',
  },
  {
    question: 'How does Enterprise differ from Pro Plus?',
    answer: 'Enterprise adds unlimited scale options, self-hosted Git support, SSO, audit logs, custom retention, security review, and dedicated onboarding.',
  },
]

export default function PricingContent() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <main className="min-h-screen overflow-hidden bg-[#05060a] text-white">
      <section className="relative px-4 pb-20 pt-32 text-center sm:px-6 lg:px-8">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_18%,rgba(56,189,248,0.16),transparent_26rem),radial-gradient(circle_at_50%_26%,rgba(139,92,246,0.18),transparent_30rem)]" />
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="mx-auto max-w-4xl">
          <motion.p variants={staggerItem} className="font-[var(--font-mono)] text-xs font-medium uppercase tracking-[0.18em] text-sky-300">
            Pricing
          </motion.p>
          <motion.h1 variants={fadeUp} className="mt-5 text-balance text-5xl font-black tracking-[-0.055em] text-white sm:text-7xl">
            Start small. Scale when issue volume grows.
          </motion.h1>
          <motion.p variants={fadeUp} custom={0.1} className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Choose the plan that matches your maintainer workflow, from a 14-day trial to enterprise-scale project knowledge automation.
          </motion.p>
        </motion.div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-4">
          {plans.map((plan) => (
            <motion.article
              key={plan.name}
              variants={staggerItem}
              whileHover={{ y: -8, borderColor: plan.featured ? 'rgba(125,211,252,0.38)' : 'rgba(255,255,255,0.22)' }}
              className={`relative rounded-lg border p-6 shadow-2xl shadow-black/20 backdrop-blur ${
                plan.featured ? 'border-sky-300/30 bg-sky-300/[0.075]' : 'border-white/10 bg-white/[0.035]'
              }`}
            >
              {plan.featured ? (
                <div className="mb-5 inline-flex rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1 font-[var(--font-mono)] text-[0.65rem] uppercase tracking-[0.14em] text-sky-100">
                  Best for teams
                </div>
              ) : null}
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white">{plan.name}</h2>
              <p className="mt-3 min-h-14 text-sm leading-6 text-slate-400">{plan.description}</p>
              <div className="mt-7">
                <span className="text-4xl font-black tracking-[-0.05em] text-white">{plan.price}</span>
                <span className="ml-2 text-sm text-slate-500">{plan.period}</span>
              </div>
              <motion.a
                href="/#waitlist"
                whileHover={{ y: -2, boxShadow: plan.featured ? '0 20px 60px rgba(56,189,248,0.22)' : 'none' }}
                whileTap={{ scale: 0.98 }}
                className={`mt-7 inline-flex h-11 w-full items-center justify-center rounded-md text-sm font-semibold ${
                  plan.featured
                    ? 'border border-sky-300/20 bg-gradient-to-b from-sky-300 to-violet-400 text-slate-950'
                    : 'border border-white/10 bg-slate-950/55 text-slate-100'
                }`}
              >
                {plan.cta}
              </motion.a>
              <ul className="mt-7 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="border-t border-white/10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className="text-center">
            <motion.p variants={fadeUp} className="font-[var(--font-mono)] text-xs font-medium uppercase tracking-[0.18em] text-violet-300">
              FAQ
            </motion.p>
            <motion.h2 variants={fadeUp} custom={0.08} className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
              Questions before you connect a project?
            </motion.h2>
          </motion.div>

          <div className="mt-12 divide-y divide-white/10 overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-white">{faq.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-white/10 text-xl leading-none text-sky-200"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-7 text-slate-400">{faq.answer}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
