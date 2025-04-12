"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button, type ButtonProps } from "@/components/ui/button"

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode
}

export function AnimatedButton({ children, ...props }: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Button {...props}>
        <motion.span initial={{ y: 0 }} animate={{ y: isHovered ? -2 : 0 }} transition={{ duration: 0.2 }}>
          {children}
        </motion.span>
      </Button>
      <motion.div
        className="absolute inset-0 rounded-md bg-blue-500/20 blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ zIndex: -1 }}
      />
    </motion.div>
  )
}
