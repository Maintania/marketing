'use client'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/motion'

const PLANS = [
  {
    name: 'Community', price: '0', period: 'forever free', featured: false,
    features: ['1 public repo', '500 issues / month', 'Duplicate detection', 'Basic triage'],
    cta: 'Get started free', ctaHref: '#', ctaStyle: 'outline',
  },
  {
    name: 'Team', price: '149', period: 'per repo / month', featured: true,
    features: ['Unlimited issues', 'Full triage engine', 'Context packs', 'Draft reply engine', 'Insights dashboard', 'Slack alerts'],
    cta: 'Start free trial →', ctaHref: '#waitlist', ctaStyle: 'filled',
  },
  {
    name: 'Enterprise', price: null, period: 'contact us', featured: false,
    features: ['Unlimited repos', 'SSO + audit logs', 'Private repo indexing', 'SLA + dedicated support', 'Custom knowledge models'],
    cta: 'Talk to sales', ctaHref: 'mailto:support@comainter.com', ctaStyle: 'outline',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: 'clamp(60px,8vw,100px) clamp(16px,5vw,48px)' }}>
      <div style={{ textAlign:'center', marginBottom:'clamp(40px,5vw,60px)' }}>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}
          style={{ fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--accent)', marginBottom:16 }}>
          Pricing
        </motion.p>
        <motion.h2 initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.7}}
          style={{ fontFamily:'var(--font-display)', fontSize:'clamp(28px,5vw,56px)', lineHeight:1.1, letterSpacing:'-0.02em', marginBottom:16 }}>
          Simple. Per repo. No surprises.
        </motion.h2>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.15}}
          style={{ fontSize:17, color:'var(--muted)' }}>
          Free for community OSS. Paid for teams that need it.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once:true }}
        style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,240px),1fr))', gap:'1px', background:'var(--border)', maxWidth:860, margin:'0 auto' }}>
        {PLANS.map(plan => (
          <motion.div key={plan.name} variants={staggerItem}
            style={{ background: plan.featured ? '#111' : 'var(--card-bg)', padding:'clamp(24px,4vw,40px)', position:'relative' }}>
            {plan.featured && (
              <div style={{ position:'absolute', top:-1, left:'50%', transform:'translateX(-50%)', fontFamily:'var(--font-mono)', fontSize:10, background:'var(--accent)', color:'var(--black)', padding:'4px 12px', letterSpacing:'0.08em', whiteSpace:'nowrap' }}>MOST POPULAR</div>
            )}
            <p style={{ fontFamily:'var(--font-mono)', fontSize:12, letterSpacing:'0.1em', color:'var(--muted)', marginBottom:12, textTransform:'uppercase' }}>{plan.name}</p>
            <div style={{ fontFamily:'var(--font-display)', fontSize: plan.price ? 'clamp(36px,5vw,44px)' : 'clamp(24px,3.5vw,34px)', marginBottom:4, paddingTop: plan.price ? 0 : 8 }}>
              {plan.price ? <><sup style={{ fontSize:'0.5em', verticalAlign:'super' }}>$</sup>{plan.price}</> : 'Custom'}
            </div>
            <p style={{ fontSize:13, color:'var(--muted)', marginBottom:'clamp(20px,3vw,32px)' }}>{plan.period}</p>
            <ul style={{ listStyle:'none', marginBottom:'clamp(20px,3vw,32px)', display:'flex', flexDirection:'column' }}>
              {plan.features.map(f => (
                <li key={f} style={{ fontSize:14, color:'var(--muted)', padding:'8px 0', borderBottom:'1px solid var(--border)', display:'flex', gap:10, alignItems:'flex-start' }}>
                  <span style={{ color:'var(--accent)', fontFamily:'var(--font-mono)', fontSize:12, flexShrink:0, marginTop:1 }}>→</span>
                  {f}
                </li>
              ))}
            </ul>
            <motion.a href={plan.ctaHref}
              whileHover={plan.ctaStyle === 'filled' ? { y:-1, boxShadow:'0 8px 24px rgba(200,255,0,0.2)' } : { borderColor:'var(--accent)', color:'var(--accent)' }}
              whileTap={{ scale:0.97 }}
              style={{ display:'block', textAlign:'center', fontFamily:'var(--font-mono)', fontSize:13, fontWeight:500, padding:'12px 16px', borderRadius:4, textDecoration:'none', transition:'all 0.2s',
                ...(plan.ctaStyle === 'filled'
                  ? { background:'var(--accent)', color:'var(--black)', border:'none' }
                  : { border:'1px solid var(--border)', color:'var(--muted)', background:'transparent' }) }}>
              {plan.cta}
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
