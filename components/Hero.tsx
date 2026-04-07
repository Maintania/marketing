'use client'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

const ISSUES = [
  { type:'dup', num:'#4821', title:'Memory leak on unmount', tag:'duplicate →#3104', tagClass:'tag-dup' },
  { type:'bug', num:'#4822', title:'TypeError in async iterator', tag:'bug · high', tagClass:'tag-bug' },
  { type:'feat', num:'#4823', title:'Add dark mode support', tag:'feature', tagClass:'tag-feat' },
  { type:'dup', num:'#4824', title:'Build fails on Windows', tag:'duplicate →#3892', tagClass:'tag-dup' },
  { type:'bug', num:'#4825', title:'useEffect fires twice', tag:'bug · critical', tagClass:'tag-bug' },
  { type:'feat', num:'#4826', title:'Plugin docs unclear', tag:'docs', tagClass:'tag-feat' },
  { type:'dup', num:'#4827', title:'HMR broken after v3.2', tag:'duplicate →#4103', tagClass:'tag-dup' },
  { type:'bug', num:'#4828', title:'Race condition in scheduler', tag:'bug · high', tagClass:'tag-bug' },
]
const DOUBLE = [...ISSUES, ...ISSUES]

const DOT_COLORS: Record<string,string> = { dup:'#888', bug:'#ff5f5f', feat:'#c8ff00' }
const TAG_STYLES: Record<string,React.CSSProperties> = {
  'tag-dup': { background:'rgba(136,136,136,0.15)', color:'#888' },
  'tag-bug': { background:'rgba(255,95,95,0.15)', color:'#ff5f5f' },
  'tag-feat': { background:'rgba(200,255,0,0.12)', color:'#c8ff00' },
}

export default function Hero() {
  return (
    <section style={{ minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', padding:'clamp(100px,12vw,140px) clamp(16px,5vw,48px) 60px', position:'relative', overflow:'hidden' }}>

      {/* Animated grid */}
      <motion.div
        animate={{ y:[0,60] }}
        transition={{ duration:20, repeat:Infinity, ease:'linear' }}
        style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(200,255,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(200,255,0,0.04) 1px,transparent 1px)', backgroundSize:'60px 60px', maskImage:'radial-gradient(ellipse 80% 60% at 50% 50%,black,transparent)', pointerEvents:'none' }}
      />

      {/* Glow blob */}
      <motion.div
        animate={{ scale:[1,1.12,1], opacity:[0.6,1,0.6] }}
        transition={{ duration:6, repeat:Infinity, ease:'easeInOut' }}
        style={{ position:'absolute', width:'min(700px,100vw)', height:'min(700px,100vw)', background:'radial-gradient(circle,rgba(200,255,0,0.07) 0%,transparent 70%)', top:'50%', left:'50%', transform:'translate(-50%,-50%)', pointerEvents:'none' }}
      />

      <div style={{ position:'relative', zIndex:2, maxWidth:900 }}>
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.1}
          style={{ display:'inline-flex', alignItems:'center', gap:8, fontFamily:'var(--font-mono)', fontSize:12, color:'var(--accent)', border:'1px solid rgba(200,255,0,0.3)', padding:'6px 14px', borderRadius:100, marginBottom:'clamp(24px,4vw,40px)' }}>
          <span style={{ width:6,height:6,borderRadius:'50%',background:'var(--accent)',flexShrink:0 }} />
          Now in private beta — 12 repos onboarded
        </motion.div>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={0.25}
          style={{ fontFamily:'var(--font-display)', fontSize:'clamp(44px,8vw,96px)', lineHeight:1.0, letterSpacing:'-0.02em', marginBottom:'clamp(20px,3vw,32px)' }}>
          Stop drowning<br />in{' '}
          <em style={{ fontStyle:'italic', color:'var(--accent)' }}>GitHub noise.</em>
        </motion.h1>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={0.4}
          style={{ fontSize:'clamp(16px,2vw,18px)', color:'var(--muted)', maxWidth:520, lineHeight:1.7, marginBottom:'clamp(32px,4vw,48px)' }}>
          Comainter is the AI co-maintainer for mid and large open source projects. It triages issues, surfaces duplicates, and builds knowledge — so your team can focus on shipping.
        </motion.p>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.55}
          style={{ display:'flex', alignItems:'center', gap:20, flexWrap:'wrap' }}>
          <motion.a href="#waitlist"
            whileHover={{ y:-2, boxShadow:'0 12px 40px rgba(200,255,0,0.25)' }}
            whileTap={{ scale:0.97 }}
            style={{ fontFamily:'var(--font-mono)', fontSize:14, fontWeight:500, background:'var(--accent)', color:'var(--black)', padding:'14px 28px', borderRadius:4, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8 }}>
            Request access
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.a>
          <motion.a href="#how-it-works"
            whileHover={{ color:'var(--off-white)' }}
            style={{ fontSize:14, color:'var(--muted)', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:6 }}>
            See how it works
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.a>
        </motion.div>

        {/* Issue ticker */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0.7}
          style={{ marginTop:'clamp(48px,6vw,80px)' }}>
          <p style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'var(--muted)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:12 }}>Live issue stream</p>
          <div style={{ overflow:'hidden', maskImage:'linear-gradient(90deg,transparent,black 8%,black 92%,transparent)' }}>
            <motion.div
              animate={{ x:['0%','-50%'] }}
              transition={{ duration:32, repeat:Infinity, ease:'linear' }}
              style={{ display:'flex', gap:12, width:'max-content' }}
              whileHover={{ animationPlayState:'paused' }}>
              {DOUBLE.map((issue, i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:10, background:'var(--card-bg)', border:'1px solid var(--border)', borderRadius:6, padding:'10px 14px', whiteSpace:'nowrap', fontSize:13 }}>
                  <div style={{ width:6,height:6,borderRadius:'50%',background:DOT_COLORS[issue.type],flexShrink:0 }} />
                  <span style={{ color:'var(--muted)' }}>{issue.num}</span>
                  <span>{issue.title}</span>
                  <span style={{ fontFamily:'var(--font-mono)', fontSize:10, padding:'2px 6px', borderRadius:3, fontWeight:500, ...TAG_STYLES[issue.tagClass] }}>{issue.tag}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
