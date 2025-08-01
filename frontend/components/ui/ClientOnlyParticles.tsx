'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface ClientOnlyParticlesProps {
  variant: 'login' | 'signup'
  count?: number
}

export const ClientOnlyParticles: React.FC<ClientOnlyParticlesProps> = ({
  variant,
  count = 6,
}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const colors = {
    login: ['#a855f7', '#ec4899', '#3b82f6'],
    signup: ['#3b82f6', '#a855f7', '#ec4899'],
  }

  const particleColors = colors[variant]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: particleColors[i % particleColors.length],
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
