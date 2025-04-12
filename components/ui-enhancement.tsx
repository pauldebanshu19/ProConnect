"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface UIEnhancementProps {
  children: React.ReactNode
  className?: string
}

export function EnhancedSection({ children, className = "" }: UIEnhancementProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"
        animate={{
          opacity: [0, 0.5, 0],
          x: ["0%", "100%"],
        }}
        transition={{
          duration: 8,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
      />
      {children}
    </motion.div>
  )
}

export function GlowButton({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }) {
  return (
    <motion.button
      className={`relative overflow-hidden rounded-md px-4 py-2 font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 2,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
      />
      {children}
    </motion.button>
  )
}

export function PulseEffect({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-full bg-blue-500/20"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
    </div>
  )
}
