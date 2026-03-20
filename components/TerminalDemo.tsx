'use client'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, fadeUp } from '@/lib/motion'

const LINES = [
  { prompt: '$', text: 'webhook received · issue #4829', color: 'var(--off-white)', delay: 0 },
  { prompt: ' ', text: '  "TypeError: cannot read properties of undefined"', color: 'var(--muted)', delay: 0.8 },
  { prompt: '→', text: 'parsing issue body...', color: 'var(--off-white)', delay: 1.5 },
  { prompt: ' ', text: null, isTagLine: true, delay: 2.0 },
  { prompt: '→', text: 'searching knowledge graph...', color: 'var(--off-white)', delay: 2.7 },
  { prompt: ' ', text: null, isResultLine: true, delay: 3.3 },
  { prompt: '$', text: 'awaiting maintainer approval', color: 'var(--off-white)', isCursor: true, delay: 4.0 },
]

export default function TerminalDemo() {
  return (
    <section id="features" style={{ padding: 'clamp(60px,8vw,100px) clamp(16px,5vw,48px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,400px),1fr))', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }}>

      {/* Left copy */}
      <div>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}
          style={{ fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--accent)', marginBottom:16 }}>
          Live demo
        </motion.p>
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{once:true}}
          style={{ fontFamily:'var(--font-display)', fontSize:'clamp(32px,4vw,52px)', lineHeight:1.1, letterSpacing:'-0.02em', marginBottom:20 }}>
          800ms from filed to triaged.
        </motion.h2>
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{once:true}} custom={0.1}
          style={{ fontSize:17, color:'var(--muted)', lineHeight:1.7, marginBottom:36 }}>
          This is what happens between an issue being created and it appearing in your dashboard — fully understood, linked, and ready to approve.
        </motion.p>
        <motion.ul variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{once:true}}
          style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:16 }}>
          {['Embeds the issue in under 200ms using a local model','Searches 10,000+ issue embeddings in milliseconds','Drafts a reply citing the original fix — never makes one up'].map(item => (
            <motion.li key={item} variants={staggerItem} style={{ display:'flex', gap:14, alignItems:'flex-start' }}>
              <span style={{ color:'var(--accent)', fontFamily:'var(--font-mono)', fontSize:12, marginTop:2, flexShrink:0 }}>→</span>
              <span style={{ fontSize:15, color:'var(--muted)', lineHeight:1.6 }}>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Terminal */}
      <motion.div
        initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
        transition={{ duration:0.8, ease:[0.22,1,0.36,1] }}
        style={{ background:'#0d0d0b', border:'1px solid var(--border)', borderRadius:12, overflow:'hidden', fontFamily:'var(--font-mono)', fontSize:'clamp(11px,1.5vw,13px)', boxShadow:'0 40px 80px rgba(0,0,0,0.6)' }}>
        <div style={{ background:'#1a1a17', padding:'12px 18px', display:'flex', alignItems:'center', gap:8, borderBottom:'1px solid var(--border)' }}>
          {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} style={{ width:10, height:10, borderRadius:'50%', background:c }} />)}
          <span style={{ fontSize:12, color:'var(--muted)', marginLeft:'auto', marginRight:'auto' }}>mergemind · live triage</span>
        </div>
        <div style={{ padding:24 }}>
          {LINES.map((line, i) => (
            <motion.div key={i}
              initial={{ opacity:0, x:-8 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }}
              transition={{ delay: line.delay, duration:0.4 }}
              style={{ display:'flex', gap:10, marginBottom:10, lineHeight:1.5 }}>
              <span style={{ color:'var(--accent)', flexShrink:0, minWidth:12 }}>{line.prompt}</span>
              {line.isTagLine ? (
                <span style={{ color:'var(--muted)' }}>
                  &nbsp;&nbsp;type: <span style={{ color:'#ff5f5f' }}>bug</span> · severity: <span style={{ color:'#ff5f5f' }}>high</span> · env: node 20.x
                </span>
              ) : line.isResultLine ? (
                <span style={{ color:'var(--muted)' }}>
                  &nbsp;&nbsp;<span style={{ color:'#888' }}>duplicate of #3104</span> · fixed in PR #3287 · <span style={{ color:'var(--accent)' }}>resolved ✓</span>
                </span>
              ) : (
                <span style={{ color: line.color }}>
                  {line.text}
                  {line.isCursor && (
                    <motion.span animate={{ opacity:[1,0,1] }} transition={{ duration:1, repeat:Infinity, ease:'steps(1)' }}
                      style={{ display:'inline-block', width:8, height:14, background:'var(--accent)', verticalAlign:'middle', marginLeft:4 }} />
                  )}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
