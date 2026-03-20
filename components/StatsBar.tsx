'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { num: 73, suffix: '%', label: 'reduction in triage time' },
  { num: 4200, suffix: '+', label: 'issues triaged per day' },
  { num: 91, suffix: '%', label: 'duplicate detection accuracy' },
  { num: 12, suffix: '', label: 'repos in private beta' },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const step = target / (duration / 16)
    let current = 0
    const timer = setInterval(() => {
      current = Math.min(current + step, target)
      setCount(Math.round(current))
      if (current >= target) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

export default function StatsBar() {
  return (
    <div style={{
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
      gap: '1px',
      background: 'var(--border)',
    }}>
      {STATS.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
          style={{ background: 'var(--black)', padding: 'clamp(24px,4vw,40px) clamp(20px,4vw,40px)' }}
        >
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,5vw,52px)', color: 'var(--accent)', lineHeight: 1, marginBottom: 8 }}>
            <AnimatedCounter target={s.num} suffix={s.suffix} />
          </div>
          <div style={{ fontSize: 14, color: 'var(--muted)' }}>{s.label}</div>
        </motion.div>
      ))}
    </div>
  )
}
