'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function CtaSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (email.includes('@')) setSubmitted(true)
  }

  return (
    <section id="waitlist" style={{ padding: 'clamp(80px,10vw,120px) clamp(16px,5vw,48px)', textAlign:'center', position:'relative', overflow:'hidden' }}>
      <motion.div
        animate={{ scale:[1,1.1,1], opacity:[0.5,0.8,0.5] }}
        transition={{ duration:8, repeat:Infinity, ease:'easeInOut' }}
        style={{ position:'absolute', width:'min(600px,100vw)', height:300, background:'radial-gradient(ellipse,rgba(200,255,0,0.07) 0%,transparent 70%)', top:'50%', left:'50%', transform:'translate(-50%,-50%)', pointerEvents:'none' }}
      />
      <div style={{ position:'relative', zIndex:1 }}>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}
          style={{ fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--accent)', marginBottom:16 }}>
          Early access
        </motion.p>
        <motion.h2 initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}}
          style={{ fontFamily:'var(--font-display)', fontSize:'clamp(36px,7vw,72px)', lineHeight:1.1, letterSpacing:'-0.02em', maxWidth:700, margin:'0 auto 20px' }}>
          Ready to reclaim your <em style={{ fontStyle:'italic', color:'var(--accent)' }}>focus?</em>
        </motion.h2>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.15}}
          style={{ fontSize:17, color:'var(--muted)', marginBottom:'clamp(32px,4vw,48px)' }}>
          Join 200+ maintainers on the waitlist. We onboard repos in batches.
        </motion.p>

        {submitted ? (
          <motion.div initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} transition={{duration:0.5,ease:[0.22,1,0.36,1]}}
            style={{ display:'inline-flex', alignItems:'center', gap:10, background:'rgba(200,255,0,0.1)', border:'1px solid rgba(200,255,0,0.3)', borderRadius:8, padding:'16px 28px', color:'var(--accent)', fontFamily:'var(--font-mono)', fontSize:14 }}>
            ✓ You're on the list — we'll be in touch!
          </motion.div>
        ) : (
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.2}}>
            <div style={{ display:'flex', gap:0, maxWidth:420, margin:'0 auto', flexWrap:'wrap', justifyContent:'center', gap:'clamp(0px,1vw,0px)' }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                placeholder="you@yourrepo.dev"
                style={{ flex:1, minWidth:200, background:'var(--card-bg)', border:'1px solid var(--border)', borderRight:'none', borderRadius:'4px 0 0 4px', padding:'14px 18px', color:'var(--off-white)', fontFamily:'var(--font-body)', fontSize:14, outline:'none', transition:'border-color 0.2s' }}
                onFocus={e => (e.target.style.borderColor = 'rgba(200,255,0,0.4)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
              <motion.button
                onClick={handleSubmit}
                whileHover={{ background:'var(--accent-dim)' }}
                whileTap={{ scale:0.97 }}
                style={{ fontFamily:'var(--font-mono)', fontSize:13, fontWeight:500, background:'var(--accent)', color:'var(--black)', border:'none', padding:'14px 24px', borderRadius:'0 4px 4px 0', cursor:'pointer', whiteSpace:'nowrap' }}>
                Request access →
              </motion.button>
            </div>
            <p style={{ fontFamily:'var(--font-mono)', fontSize:12, color:'var(--muted)', marginTop:14 }}>No spam. No pitch deck. Just early access.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
