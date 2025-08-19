'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <div className="relative z-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo and Name - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25"
                whileHover={{
                  scale: 1.15,
                  rotate: 360,
                  boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)',
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  duration: 0.3,
                  rotate: { duration: 0.6, ease: 'easeInOut' },
                }}
              >
                <span className="text-black font-bold text-xl">N</span>
              </motion.div>
              <motion.span
                className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
                whileHover={{
                  scale: 1.05,
                  backgroundPosition: ['0% 50%', '100% 50%'],
                }}
                transition={{
                  duration: 0.3,
                  backgroundPosition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                }}
              >
                Nexara
              </motion.span>
            </Link>
          </motion.div>

          {/* CTA Buttons - Right Side */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4, ease: 'easeOut' }}
            >
              <Button
                variant="ghost"
                asChild
                size="sm"
                className="text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 border-0 px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Link href="/login">Sign In</Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6, ease: 'easeOut' }}
            >
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-black shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 border-0 px-6 py-2 rounded-lg relative overflow-hidden group"
              >
                <Link href="/signup">
                  <motion.span
                    className="relative z-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Get Started
                  </motion.span>
                  {/* Animated background shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
