"use client"

import React, { useState } from 'react'
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin } from 'lucide-react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [touched, setTouched] = useState({ name: false, email: false, message: false })


  // Basic validation
  const errors = {
    name: !form.name && touched.name ? 'Name is required' : '',
    email: !form.email && touched.email ? 'Email is required' : '',
    message: !form.message && touched.message ? 'Message is required' : '',
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched({ ...touched, [e.target.name]: true })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      // Placeholder: log data
      console.log(form)
    }, 1000)
  }

  return (
    <section id="contact" className="py-16 bg-slate-950 text-white animate-fadeIn">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-slate-900/80 rounded-2xl p-8 border border-slate-700/50 shadow animate-fadeIn"
          autoComplete="off"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Your Name"
              aria-invalid={!!errors.name}
              aria-describedby="name-error"
              className="focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.name && <span id="name-error" className="text-red-400 text-xs">{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="you@email.com"
              aria-invalid={!!errors.email}
              aria-describedby="email-error"
              className="focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.email && <span id="email-error" className="text-red-400 text-xs">{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="How can we help you?"
              rows={4}
              aria-invalid={!!errors.message}
              aria-describedby="message-error"
              className="focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.message && <span id="message-error" className="text-red-400 text-xs">{errors.message}</span>}
          </div>
          <Button type="submit" disabled={loading} className="w-full mt-2">
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </section>
  )
}
