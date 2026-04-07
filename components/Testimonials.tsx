'use client'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/motion'

const TESTIMONIALS = [
  { quote: '"We were closing 40 duplicate issues a week by hand. Comainter catches them in seconds. It\'s the first tool that actually understands what the issue is about, not just the title."', name: 'Siddharth K.', role: 'Lead maintainer, 8.2k ★ repo', initials: 'SK', color: 'rgba(200,255,0,0.15)', textColor: 'var(--accent)' },
  { quote: '"The context pack alone is worth it. I used to spend 20 minutes figuring out if a bug was already known. Now I open an issue and the answer is right there."', name: 'Maria R.', role: 'OSS DevRel, mid-size infra tool', initials: 'MR', color: 'rgba(255,95,95,0.15)', textColor: '#ff5f5f' },
  { quote: '"We were about to limit issue submissions because we couldn\'t keep up. This bought us six months of runway. The team is less burned out than it\'s been in two years."', name: 'James L.', role: 'Engineering Manager, corp-backed OSS', initials: 'JL', color: 'rgba(100,180,255,0.15)', textColor: '#64b4ff' },
]

export default function Testimonials() {
  return (
    <section style={{ padding: 'clamp(60px,8vw,100px) clamp(16px,5vw,48px)' }}>
      <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}
        style={{ fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--accent)', marginBottom:16 }}>
        Early feedback
      </motion.p>
      <motion.h2 initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}}
        style={{ fontFamily:'var(--font-display)', fontSize:'clamp(28px,4vw,52px)', lineHeight:1.1, letterSpacing:'-0.02em', marginBottom:'clamp(32px,5vw,56px)', maxWidth:640 }}>
        Maintainers who got their weekends back.
      </motion.h2>
      <motion.div
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once:true }}
        style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap:20 }}>
        {TESTIMONIALS.map(t => (
          <motion.div key={t.name} variants={staggerItem}
            whileHover={{ y:-4, borderColor:'rgba(200,255,0,0.15)' }}
            style={{ background:'var(--card-bg)', border:'1px solid var(--border)', borderRadius:12, padding:'clamp(20px,3vw,32px)', cursor:'default', transition:'border-color 0.3s' }}>
            <p style={{ fontFamily:'var(--font-display)', fontSize:'clamp(15px,2vw,17px)', lineHeight:1.6, marginBottom:24, color:'var(--off-white)' }}>{t.quote}</p>
            <div style={{ display:'flex', alignItems:'center', gap:12 }}>
              <div style={{ width:36, height:36, borderRadius:'50%', background:t.color, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-mono)', fontSize:12, fontWeight:500, color:t.textColor, flexShrink:0 }}>{t.initials}</div>
              <div>
                <p style={{ fontSize:14, fontWeight:600 }}>{t.name}</p>
                <p style={{ fontSize:12, color:'var(--muted)' }}>{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
