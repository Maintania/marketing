'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '@/components/Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: 'clamp(14px,2vw,18px) clamp(16px,5vw,48px)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          background: scrolled ? 'rgba(10,10,10,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          transition: 'background 0.3s, border-color 0.3s',
        }}
      >
        <Logo size="md" />

        <div style={{ display:'flex', alignItems:'center', gap:32 }} className="nav-desktop">
          {links.map(l => (
            <a key={l.label} href={l.href}
              style={{ fontSize:14, color:'var(--muted)', textDecoration:'none', transition:'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color='var(--off-white)')}
              onMouseLeave={e => (e.currentTarget.style.color='var(--muted)')}>
              {l.label}
            </a>
          ))}
          <motion.a href="#waitlist"
            whileHover={{ y:-1, boxShadow:'0 8px 24px rgba(200,255,0,0.2)' }}
            whileTap={{ scale:0.97 }}
            style={{ fontFamily:'var(--font-mono)', fontSize:13, fontWeight:500, background:'var(--accent)', color:'var(--black)', padding:'10px 20px', borderRadius:4, textDecoration:'none' }}>
            Get early access →
          </motion.a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="nav-hamburger"
          aria-label="Toggle menu"
          style={{ background:'none', border:'1px solid var(--border)', borderRadius:4, padding:'8px 10px', cursor:'pointer', display:'none', flexDirection:'column', gap:4 }}>
          {[0,1,2].map(i => (
            <motion.span key={i}
              animate={menuOpen ? i===0?{rotate:45,y:8}:i===2?{rotate:-45,y:-8}:{opacity:0} : {rotate:0,y:0,opacity:1}}
              style={{ display:'block', width:18, height:1.5, background:'var(--off-white)', borderRadius:2 }}
            />
          ))}
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:0.2}}
            style={{ position:'fixed', top:60, left:0, right:0, zIndex:99, background:'rgba(10,10,10,0.97)', backdropFilter:'blur(20px)', borderBottom:'1px solid var(--border)', padding:'24px 20px 32px', display:'flex', flexDirection:'column', gap:20 }}>
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                style={{ fontSize:20, color:'var(--off-white)', textDecoration:'none', fontFamily:'var(--font-display)' }}>
                {l.label}
              </a>
            ))}
            <a href="#waitlist" onClick={() => setMenuOpen(false)}
              style={{ marginTop:8, fontFamily:'var(--font-mono)', fontSize:14, fontWeight:500, background:'var(--accent)', color:'var(--black)', padding:'14px 20px', borderRadius:4, textDecoration:'none', textAlign:'center' }}>
              Get early access →
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
