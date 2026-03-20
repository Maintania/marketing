'use client'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/motion'

const FEATURES = [
  { icon: '🔍', name: 'Duplicate detector', desc: 'Vector similarity search across all open and closed issues. Finds duplicates even when reporters use completely different words.' },
  { icon: '🏷', name: 'Auto-triage & labelling', desc: 'Classifies every issue as bug, feature, question, or docs. Assigns severity and suggested assignee — ready for one-click approval.' },
  { icon: '📦', name: 'Context pack', desc: 'Opens every issue with a full briefing: related PRs, relevant code files, similar past resolutions, and affected versions.' },
  { icon: '💬', name: 'Draft reply engine', desc: 'Generates a contextual, accurate first reply — including links to existing fixes. Never invents a solution that doesn\'t exist.' },
  { icon: '⏰', name: 'Stale issue manager', desc: 'Monitors inactive issues and drafts polite follow-ups or close suggestions. Keeps your tracker clean automatically.' },
  { icon: '📊', name: 'Insights dashboard', desc: 'Issue velocity, top recurring problems, time saved, and contributor heat maps — the data your engineering manager needs to justify the tool.' },
]

export default function FeaturesGrid() {
  return (
    <section style={{ padding: '0 0 clamp(60px,8vw,100px)' }}>
      <div style={{ padding: '0 clamp(16px,5vw,48px) clamp(32px,4vw,48px)' }}>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}
          style={{ fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--accent)', marginBottom:16 }}>
          Everything included
        </motion.p>
        <motion.h2 initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7,ease:[0.22,1,0.36,1]}}
          style={{ fontFamily:'var(--font-display)', fontSize:'clamp(32px,5vw,56px)', lineHeight:1.1, letterSpacing:'-0.02em', maxWidth:680 }}>
          Built for the repos that never sleep.
        </motion.h2>
      </div>

      <motion.div
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once:true, amount:0.1 }}
        style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap:'1px', background:'var(--border)' }}>
        {FEATURES.map(f => (
          <motion.div key={f.name} variants={staggerItem}
            whileHover={{ background:'#161614' }}
            style={{ background:'var(--card-bg)', padding:'clamp(24px,4vw,40px)', position:'relative', overflow:'hidden', cursor:'default', transition:'background 0.3s' }}>
            <div style={{ position:'absolute', top:0, right:0, width:80, height:80, background:'radial-gradient(circle at top right,rgba(200,255,0,0.07),transparent)', pointerEvents:'none' }} />
            <motion.div
              whileHover={{ borderColor:'rgba(200,255,0,0.4)' }}
              style={{ width:44, height:44, border:'1px solid var(--border)', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', fontSize:20, marginBottom:24, transition:'border-color 0.3s' }}>
              {f.icon}
            </motion.div>
            <h3 style={{ fontSize:17, fontWeight:600, marginBottom:10, letterSpacing:'-0.01em' }}>{f.name}</h3>
            <p style={{ fontSize:14, color:'var(--muted)', lineHeight:1.7 }}>{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
