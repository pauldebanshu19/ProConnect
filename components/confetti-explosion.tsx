"use client"

import { useEffect, useState } from "react"
import confetti from "canvas-confetti"

interface ConfettiExplosionProps {
  duration?: number
  particleCount?: number
  spread?: number
  origin?: { x: number; y: number }
}

export function ConfettiExplosion({
  duration = 3000,
  particleCount = 100,
  spread = 70,
  origin = { x: 0.5, y: 0.5 },
}: ConfettiExplosionProps) {
  const [isExploding, setIsExploding] = useState(true)

  useEffect(() => {
    if (isExploding) {
      const end = Date.now() + duration

      // Create a confetti cannon
      const frame = () => {
        confetti({
          particleCount: particleCount / 10,
          angle: Math.random() * 360,
          spread,
          origin,
          colors: ["#4F46E5", "#3B82F6", "#60A5FA", "#93C5FD", "#FFFFFF"],
        })

        if (Date.now() < end) {
          requestAnimationFrame(frame)
        } else {
          setIsExploding(false)
        }
      }

      frame()
    }
  }, [isExploding, duration, particleCount, spread, origin])

  return null
}

export function triggerConfetti(options?: ConfettiExplosionProps) {
  const defaults = {
    particleCount: 100,
    spread: 70,
    origin: { x: 0.5, y: 0.5 },
  }

  confetti({
    ...defaults,
    ...options,
    colors: ["#4F46E5", "#3B82F6", "#60A5FA", "#93C5FD", "#FFFFFF"],
  })
}
