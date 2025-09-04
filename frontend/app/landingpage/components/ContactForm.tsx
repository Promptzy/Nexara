'use client'
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Something went wrong')
      }

      setFormStatus('success')
      setFormData({ name: '', email: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle')
      }, 5000)
    } catch (error) {
      setFormStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong'
      )

      // Reset error message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle')
        setErrorMessage('')
      }, 5000)
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-black via-slate-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-purple-600/10" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Fill out the
            form below and our team will get back to you as soon as possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 md:p-8 shadow-xl shadow-cyan-500/5">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Name
                  </label>
                  <Input
                  id="name"
                  name="name"
                  type="text"   
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-cyan-500/30"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={`What's your email?`}
                    required
                    className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-cyan-500/30"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Don't hesitate to write to us"
                    required
                    rows={5}
                    className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-cyan-500/30"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <Button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-black shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {formStatus === 'submitting' ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>
                </div>

                {/* Success Message */}
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 flex items-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>Your message has been sent successfully!</span>
                  </motion.div>
                )}

                {/* Error Message */}
                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-red-500/20 border border-red-500/30 text-red-300 flex items-center gap-2"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <span>
                      {errorMessage ||
                        'Failed to send message. Please try again.'}
                    </span>
                  </motion.div>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
