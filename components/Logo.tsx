import Image from 'next/image'
import { motion } from 'framer-motion'

type LogoProps = {
  href?: string
  size?: 'sm' | 'md'
}

const sizes = {
  sm: {
    icon: 36,
    fontSize: 15,
    gap: 10,
    radius: 12,
  },
  md: {
    icon: 46,
    fontSize: 18,
    gap: 12,
    radius: 14,
  },
}

export default function Logo({ href = '#', size = 'md' }: LogoProps) {
  const config = sizes[size]

  return (
    <motion.a
      href={href}
      aria-label="Comainter home"
      whileHover={{ y: -1 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: config.gap,
        color: 'var(--off-white)',
        textDecoration: 'none',
      }}
    >
      <motion.span
        aria-hidden="true"
        animate={{
          y: [0, -2, 0],
          boxShadow: [
            '0 0 0 rgba(200,255,0,0.0)',
            '0 0 26px rgba(200,255,0,0.2)',
            '0 0 0 rgba(200,255,0,0.0)',
          ],
        }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: config.icon,
          height: config.icon,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: config.radius,
          overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(200,255,0,0.14), rgba(255,255,255,0.04))',
          border: '1px solid rgba(200,255,0,0.2)',
          position: 'relative',
        }}
      >
        <motion.span
          aria-hidden="true"
          animate={{ x: ['-140%', '160%'] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.2 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.32) 50%, transparent 80%)',
            zIndex: 1,
          }}
        />
        <Image
          src="/icon.jpg"
          alt=""
          width={config.icon}
          height={config.icon}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </motion.span>
      <motion.span
        animate={{ opacity: [0.92, 1, 0.92] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: config.fontSize,
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          textShadow: '0 0 18px rgba(200,255,0,0.12)',
        }}
      >
        Comainter
      </motion.span>
    </motion.a>
  )
}
