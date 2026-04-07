'use client'
import Logo from '@/components/Logo'

export default function Footer() {
  return (
    <footer style={{ borderTop:'1px solid var(--border)', padding:'clamp(24px,3vw,40px) clamp(16px,5vw,48px)', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16, fontSize:13, color:'var(--muted)' }}>
      <Logo size="sm" />
      <div style={{ display:'flex', gap:24, flexWrap:'wrap' }}>
        {[['Privacy','#'],['Terms','#'],['GitHub','https://github.com'],['Contact','mailto:support@comainter.com']].map(([label, href]) => (
          <a key={label} href={href} style={{ color:'var(--muted)', textDecoration:'none', transition:'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color='var(--off-white)')}
            onMouseLeave={e => (e.currentTarget.style.color='var(--muted)')}>
            {label}
          </a>
        ))}
      </div>
      <span>© 2026 Comainter</span>
    </footer>
  )
}
