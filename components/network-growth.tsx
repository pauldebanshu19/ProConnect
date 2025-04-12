"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

interface NetworkGrowthProps {
  data: {
    month: string
    connections: number
  }[]
  className?: string
}

export function NetworkGrowth({ data, className = "" }: NetworkGrowthProps) {
  const maxValue = Math.max(...data.map((item) => item.connections))
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect()
        setCanvasSize({ width: rect.width, height: rect.height })
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || canvasSize.width === 0) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = canvasSize.width * dpr
    canvas.height = canvasSize.height * dpr
    ctx.scale(dpr, dpr)

    // Clear canvas
    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height)

    // Draw gradient background
    const gradient = ctx.createLinearGradient(0, canvasSize.height, 0, 0)
    gradient.addColorStop(0, "rgba(59, 130, 246, 0.1)")
    gradient.addColorStop(1, "rgba(59, 130, 246, 0.4)")

    // Calculate bar width based on canvas size and data length
    const barWidth = Math.max(10, canvasSize.width / data.length - 10)
    const barMargin = Math.min(10, canvasSize.width * 0.02)

    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.moveTo(0, canvasSize.height)

    data.forEach((item, index) => {
      const x = index * (barWidth + barMargin)
      const barHeight = (item.connections / maxValue) * canvasSize.height * 0.8
      const y = canvasSize.height - barHeight

      ctx.lineTo(x, y)
      ctx.lineTo(x + barWidth, y)
    })

    ctx.lineTo(canvasSize.width, canvasSize.height)
    ctx.closePath()
    ctx.fill()

    // Draw line
    ctx.strokeStyle = "rgba(59, 130, 246, 0.8)"
    ctx.lineWidth = 2
    ctx.beginPath()

    data.forEach((item, index) => {
      const x = index * (barWidth + barMargin) + barWidth / 2
      const barHeight = (item.connections / maxValue) * canvasSize.height * 0.8
      const y = canvasSize.height - barHeight

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()

    // Draw dots
    data.forEach((item, index) => {
      const x = index * (barWidth + barMargin) + barWidth / 2
      const barHeight = (item.connections / maxValue) * canvasSize.height * 0.8
      const y = canvasSize.height - barHeight

      ctx.fillStyle = "#fff"
      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = "rgba(59, 130, 246, 1)"
      ctx.beginPath()
      ctx.arc(x, y, 3, 0, Math.PI * 2)
      ctx.fill()
    })

    // Draw month labels
    ctx.fillStyle = "rgba(100, 116, 139, 0.8)"
    ctx.font = `${Math.min(10, Math.max(8, canvasSize.width / 40))}px Inter, sans-serif`
    ctx.textAlign = "center"

    data.forEach((item, index) => {
      const x = index * (barWidth + barMargin) + barWidth / 2
      ctx.fillText(item.month, x, canvasSize.height - 5)
    })
  }, [data, maxValue, canvasSize])

  return (
    <Card className={`border-blue-100 dark:border-gray-700 shadow-sm ${className}`}>
      <CardHeader className="pb-1 sm:pb-2">
        <CardTitle className="text-sm sm:text-base md:text-lg">Network Growth</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[160px] sm:h-[180px] md:h-[200px] relative">
          <canvas ref={canvasRef} className="w-full h-full"></canvas>
          <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 text-[10px] sm:text-xs md:text-sm font-medium text-blue-600 dark:text-blue-400">
            {data.reduce((sum, item) => sum + item.connections, 0)} total connections
          </div>
        </div>
        <div className="mt-3 sm:mt-4 grid grid-cols-3 gap-1.5 sm:gap-2 text-center">
          {[
            { label: "New this month", value: data[data.length - 1].connections },
            {
              label: "Average growth",
              value: Math.round(data.reduce((sum, item) => sum + item.connections, 0) / data.length),
            },
            {
              label: "Growth rate",
              value: `+${Math.round((data[data.length - 1].connections / data[data.length - 2].connections - 1) * 100)}%`,
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-blue-50 dark:bg-blue-900/20 p-1.5 sm:p-2 rounded-md"
            >
              <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              <div className="text-xs sm:text-sm md:text-lg font-semibold text-blue-600 dark:text-blue-400">{stat.value}</div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
