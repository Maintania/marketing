'use client'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/motion'

const STEPS = [
  { num: '01', label: 'INGEST', icon: '⚡', title: 'Instant webhook capture', desc: 'A lightweight GitHub App catches every new issue and PR the moment it\'s created. Zero latency, zero polling, works across your entire org with a single install.' },
  { num: '02', label: 'UNDERSTAND', icon: '🧠', title: 'Deep issue parsing', desc: 'Stack traces, reproduction steps, environment info, and natural language are all extracted and structured. The AI understands what the reporter actually means, not just what they typed.' },
  { num: '03', label: 'CONNECT', icon: '🔗', title: 'Knowledge graph matching', desc: 'The issue is embedded and matched against your repo\'s entire history — open issues, closed issues, PRs, commits, and docs. Duplicates are flagged with the original resolution linked.' },
  { num: '04', label: 'DECIDE', icon: '✓', title: 'Human approves, AI acts', desc: 'A suggested label, severity, assignee, and draft reply land in your dashboard. One click to approve. The AI never posts to GitHub without a human in the loop.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: 'clamp(60px,8vw,100px) clamp(16px,5vw,48px) 0' }}>
      <div style={{ marginBottom: 'clamp(40px,5vw,60px)' }}>
        <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
          style={{ fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--accent)', marginBottom:16 }}>
          How it works
        </motion.p>
        <motion.h2 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7, ease:[0.22,1,0.36,1] }}
          style={{ fontFamily:'var(--font-display)', fontSize:'clamp(32px,5vw,60px)', lineHeight:1.1, letterSpacing:'-0.02em', maxWidth:680, marginBottom:16 }}>
          From chaotic inbox to calm, organised knowledge.
        </motion.h2>
        <motion.p initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7, delay:0.1 }}
          style={{ fontSize:17, color:'var(--muted)', maxWidth:520, lineHeight:1.7 }}>
          Every issue that hits your repo goes through four layers before a maintainer ever sees it.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once:true, amount:0.1 }}
        style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap:'1px', background:'var(--border)' }}>
        {STEPS.map((step) => (
          <motion.div key={step.num} variants={staggerItem}
            whileHover={{ background: '#0f0f0e' }}
            style={{ background:'var(--black)', padding:'clamp(28px,4vw,48px)', position:'relative', overflow:'hidden', cursor:'default', transition:'background 0.3s' }}>
            <motion.div
              initial={{ scaleX:0 }} whileHover={{ scaleX:1 }} transition={{ duration:0.3 }}
              style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,var(--accent),transparent)', transformOrigin:'left' }}
            />
            <p style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'var(--muted)', letterSpacing:'0.1em', marginBottom:20 }}>{step.num} / {step.label}</p>
            <span style={{ fontSize:28, marginBottom:20, display:'block' }}>{step.icon}</span>
            <h3 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(20px,2.5vw,26px)', marginBottom:12 }}>{step.title}</h3>
            <p style={{ fontSize:15, color:'var(--muted)', lineHeight:1.7 }}>{step.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
