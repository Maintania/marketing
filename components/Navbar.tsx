'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from '@/components/Logo'

const links = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Features', href: '/#features' },
  { label: 'Preview', href: '/#dashboard' },
  { label: 'Pricing', href: '/pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 border-b px-4 transition-colors duration-300 sm:px-6 lg:px-8 ${
          scrolled ? 'border-white/10 bg-[#05060a]/78 shadow-2xl shadow-black/20 backdrop-blur-xl' : 'border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-8">
          <Logo />

          <div className="hidden items-center gap-9 md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-slate-400 transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <motion.a
              href="/#waitlist"
              whileHover={{ y: -1, boxShadow: '0 16px 48px rgba(56, 189, 248, 0.18)' }}
              whileTap={{ scale: 0.98 }}
              className="rounded-md border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sm font-semibold text-sky-100"
            >
              Get Started
            </motion.a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] md:hidden"
          >
            <span className="relative h-4 w-5">
              <motion.span animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="absolute left-0 top-0 h-px w-5 bg-white" />
              <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="absolute left-0 top-2 h-px w-5 bg-white" />
              <motion.span animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="absolute bottom-0 left-0 h-px w-5 bg-white" />
            </span>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-3 top-20 z-40 rounded-lg border border-white/10 bg-[#080b14]/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#waitlist"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-md border border-sky-300/20 bg-sky-300/10 px-3 py-3 text-center text-sm font-semibold text-sky-100"
            >
              Get Started
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
