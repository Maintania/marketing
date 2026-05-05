'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

type AnimatedCounterProps = {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
}

export default function AnimatedCounter({ target, suffix = '', prefix = '', duration = 1400 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return

    let frame = 0
    const totalFrames = Math.max(1, Math.round(duration / 16))

    const timer = window.setInterval(() => {
      frame += 1
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3)
      setCount(Math.round(target * progress))

      if (frame >= totalFrames) {
        setCount(target)
        window.clearInterval(timer)
      }
    }, 16)

    return () => window.clearInterval(timer)
  }, [duration, inView, target])

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}
