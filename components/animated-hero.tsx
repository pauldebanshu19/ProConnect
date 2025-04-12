"use client"
import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

export function AnimatedHero() {
  return (
    <div className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-white/80 z-0"></div>

      {/* Animated circles */}
      <div className="absolute inset-0 z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/5"
            initial={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              x: `${Math.random() * 100 - 50}%`,
              y: `${Math.random() * 100 - 50}%`,
              opacity: 0,
            }}
            animate={{
              x: [`${Math.random() * 100 - 50}%`, `${Math.random() * 100 - 50}%`],
              y: [`${Math.random() * 100 - 50}%`, `${Math.random() * 100 - 50}%`],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: Math.random() * 10 + 10,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text mb-4">
            Find Your Dream Job
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Browse thousands of opportunities from top companies around the world
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative w-32 h-32 mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
            <Briefcase className="w-16 h-16 text-blue-600" />
          </div>

          {/* Orbiting elements */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center"
              initial={{
                x: -50,
                y: -50,
                opacity: 0,
              }}
              animate={{
                x: [50 * Math.cos((i * 2 * Math.PI) / 3), 50 * Math.cos((i * 2 * Math.PI) / 3 + 2 * Math.PI)],
                y: [50 * Math.sin((i * 2 * Math.PI) / 3), 50 * Math.sin((i * 2 * Math.PI) / 3 + 2 * Math.PI)],
                opacity: 1,
              }}
              transition={{
                x: { repeat: Number.POSITIVE_INFINITY, duration: 8, ease: "linear" },
                y: { repeat: Number.POSITIVE_INFINITY, duration: 8, ease: "linear" },
                opacity: { duration: 1 },
              }}
            >
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-blue-600">{i + 1}K+</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
