"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedCard({ children, className = "" }: AnimatedCardProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const rotateX = ((mouseY - height / 2) / height) * -10
    const rotateY = ((mouseX - width / 2) / width) * 10

    setRotateX(rotateX)
    setRotateY(rotateY)
    setMouseX(mouseX / width)
    setMouseY(mouseY / height)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.5,
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 pointer-events-none"
        style={{
          opacity: Math.abs(rotateX) + Math.abs(rotateY) > 0 ? 0.15 : 0,
          background: `radial-gradient(circle at ${mouseX * 100}% ${mouseY * 100}%, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />
      {children}
    </motion.div>
  )
}
