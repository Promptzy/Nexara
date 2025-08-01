'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { SignUpForm } from '@/components/SignUpForm'
import { EnhancedBackground } from '@/components/ui/EnhancedBackground'

export default function SignUpPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background */}
      <EnhancedBackground variant="signup" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Title */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  type: 'spring',
                  bounce: 0.4,
                }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full mb-6 backdrop-blur-sm shadow-lg shadow-blue-500/25"
              >
                <motion.span
                  className="text-3xl"
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🚀
                </motion.span>
                <span className="text-blue-400 font-semibold text-lg">
                  Join the Zenjira Revolution
                </span>
              </motion.div>

              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
                  Transform your{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    project management
                  </span>
                </h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="text-slate-300 text-xl max-w-2xl leading-relaxed"
                >
                  Join thousands of teams already using AI-powered automation to
                  supercharge their workflow and achieve unprecedented success
                </motion.p>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full"
            >
              <SignUpForm />
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center text-sm text-slate-400 mt-12"
          >
            By signing up, you agree to our{' '}
            <a
              href="/terms"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors"
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href="/privacy"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors"
            >
              Privacy Policy
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
