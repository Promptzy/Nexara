'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff, Loader2, Mail, Lock, Sparkles } from 'lucide-react'
import { toast } from 'sonner'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { ConfettiCelebration } from '@/components/ui/ConfettiCelebration'
import { ClientOnlyParticles } from '@/components/ui/ClientOnlyParticles'
import { loginSchema, type LoginFormData } from '@/lib/validations'
import { authService } from '@/lib/authService'

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [loginProgress, setLoginProgress] = useState(0)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    setLoginProgress(0)

    try {
      // Simulate progress steps
      setLoginProgress(25)
      await new Promise(resolve => setTimeout(resolve, 300))

      setLoginProgress(50)
      await new Promise(resolve => setTimeout(resolve, 300))

      setLoginProgress(75)
      const response = await authService.login(data)

      setLoginProgress(100)
      await new Promise(resolve => setTimeout(resolve, 300))

      if (response.success) {
        setShowConfetti(true)
        toast.success(response.message)
        reset()
        // In a real app, you would redirect to dashboard
        // router.push('/dashboard');
      } else {
        toast.error(response.message)
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
      console.error('Login error:', error)
    } finally {
      setTimeout(() => {
        setIsLoading(false)
        setLoginProgress(0)
      }, 1000)
    }
  }

  const handleGoogleLogin = async () => {
    setIsLoading(true)

    try {
      const response = await authService.googleAuth()

      if (response.success) {
        toast.success(response.message)
        // In a real app, you would redirect to dashboard
      } else {
        toast.error('Google login failed')
      }
    } catch (error) {
      toast.error('Google login failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Enhanced Card with multiple layers and effects */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative group"
      >
        {/* Outer glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Main card */}
        <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
          </div>

          {/* Floating particles - client-only to avoid hydration mismatch */}
          <ClientOnlyParticles variant="login" count={8} />

          {/* Header */}
          <div className="relative text-center space-y-6 mb-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                type: 'spring',
                bounce: 0.4,
                delay: 0.2,
              }}
              className="relative mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 shadow-2xl shadow-purple-500/50 relative overflow-hidden">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/50 via-pink-400/50 to-red-400/50 rounded-3xl" />
                <Lock className="w-10 h-10 text-white relative z-10" />

                {/* Animated ring */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-purple-400/50"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />

                {/* Corner sparkles */}
                <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-yellow-400" />
                <motion.div
                  className="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-3"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                Welcome Back
              </h2>
              <p className="text-slate-300/80 text-lg">
                Continue your productivity journey
              </p>

              {/* Animated underline */}
              <motion.div
                className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
              />
            </motion.div>
          </div>

          {/* Progress indicator */}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6 relative"
            >
              <div className="w-full bg-slate-700/30 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-full relative overflow-hidden"
                  style={{ width: `${loginProgress}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.div>
              </div>
              <p className="text-xs text-purple-300 mt-2 text-center">
                Signing you in...
              </p>
            </motion.div>
          )}

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative space-y-6"
          >
            {/* Email Field */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Label
                htmlFor="email"
                className="text-slate-200 font-medium flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                Email Address
              </Label>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400 group-hover:text-purple-400 transition-colors duration-200" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="pl-12 pr-4 py-4 bg-slate-800/60 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-purple-500/70 focus:ring-purple-500/30 rounded-lg backdrop-blur-sm transition-all duration-200 hover:bg-slate-800/80"
                    {...register('email')}
                    disabled={isLoading}
                  />
                  {/* Focus indicator */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    initial={{ width: 0 }}
                    whileFocus={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-400 flex items-center gap-2"
                >
                  <div className="w-1 h-1 bg-red-400 rounded-full" />
                  {errors.email.message}
                </motion.p>
              )}
            </motion.div>

            {/* Password Field */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="password"
                  className="text-slate-200 font-medium flex items-center gap-2"
                >
                  <Lock className="w-4 h-4 text-purple-400" />
                  Password
                </Label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-purple-400 hover:text-purple-300 underline-offset-4 hover:underline transition-colors duration-200 flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" />
                  Forgot password?
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400 group-hover:text-purple-400 transition-colors duration-200" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="pl-12 pr-12 py-4 bg-slate-800/60 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-purple-500/70 focus:ring-purple-500/30 rounded-lg backdrop-blur-sm transition-all duration-200 hover:bg-slate-800/80"
                    {...register('password')}
                    disabled={isLoading}
                  />
                  <motion.button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400 hover:text-purple-400 transition-colors duration-200"
                    disabled={isLoading}
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </motion.button>
                  {/* Focus indicator */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    initial={{ width: 0 }}
                    whileFocus={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
              {errors.password && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-400 flex items-center gap-2"
                >
                  <div className="w-1 h-1 bg-red-400 rounded-full" />
                  {errors.password.message}
                </motion.p>
              )}
            </motion.div>

            {/* Login Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <Button
                  type="submit"
                  className="relative w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl border-0 overflow-hidden"
                  disabled={isLoading}
                >
                  {/* Button shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: isLoading ? ['-100%', '100%'] : '-100%' }}
                    transition={{
                      duration: 1.5,
                      repeat: isLoading ? Infinity : 0,
                      ease: 'easeInOut',
                    }}
                  />

                  <div className="relative flex items-center justify-center gap-3">
                    {isLoading && <Loader2 className="h-5 w-5 animate-spin" />}
                    <span className="text-lg">
                      {isLoading ? 'Signing In...' : 'Sign In to Zenjira'}
                    </span>
                    {!isLoading && <Sparkles className="w-5 h-5" />}
                  </div>
                </Button>
              </motion.div>
            </motion.div>
          </form>

          {/* Divider */}
          <motion.div
            className="relative my-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600/50 to-transparent" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 px-6 py-2 text-sm text-slate-400 rounded-full border border-slate-600/30 backdrop-blur-sm">
                Or continue with
              </span>
            </div>
          </motion.div>

          {/* Google Login Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-600/50 to-slate-500/50 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Button
                type="button"
                variant="outline"
                className="relative w-full bg-slate-800/60 border-slate-600/50 text-slate-200 hover:bg-slate-700/70 hover:border-slate-500/70 hover:text-white transition-all duration-300 py-4 rounded-xl backdrop-blur-sm overflow-hidden"
                onClick={handleGoogleLogin}
                disabled={isLoading}
              >
                {/* Button shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                <div className="relative flex items-center justify-center gap-3">
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <motion.svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </motion.svg>
                  )}
                  <span className="font-medium">Continue with Google</span>
                </div>
              </Button>
            </motion.div>
          </motion.div>

          {/* Sign Up Link */}
          <motion.div
            className="text-center text-sm mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <span className="text-slate-400">Don't have an account? </span>
            <Link
              href="/signup"
              className="text-purple-400 hover:text-purple-300 underline-offset-4 hover:underline transition-colors font-semibold inline-flex items-center gap-1"
            >
              Sign up for free
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Confetti celebration */}
      {showConfetti && (
        <ConfettiCelebration
          isActive={showConfetti}
          variant="login"
          onComplete={() => setShowConfetti(false)}
        />
      )}
    </div>
  )
}
