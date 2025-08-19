'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  MessageCircle,
  ArrowUp,
  Heart,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Automation', href: '#automation' },
        { name: 'Integrations', href: '#integrations' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Roadmap', href: '#roadmap' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Blog', href: '#blog' },
        { name: 'Careers', href: '#careers' },
        { name: 'Press', href: '#press' },
        { name: 'Partners', href: '#partners' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#docs' },
        { name: 'Help Center', href: '#help' },
        { name: 'Community', href: '#community' },
        { name: 'Tutorials', href: '#tutorials' },
        { name: 'API Reference', href: '#api' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', href: '#contact' },
        { name: 'Status Page', href: '#status' },
        { name: 'Security', href: '#security' },
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms of Service', href: '#terms' },
      ],
    },
  ]

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black text-slate-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-slate-800/50" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                  <span className="text-black font-bold text-xl">N</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Nexara
                </span>
              </div>
              <p className="text-slate-400 mb-6 max-w-md">
                The future of project management. AI-powered automation,
                intelligent insights, and seamless integrations to help teams
                deliver exceptional results.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map(social => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="w-10 h-10 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 border-0"
                  >
                    <Link href={social.href} aria-label={social.label}>
                      <social.icon className="w-5 h-5" />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map(section => (
              <div key={section.title}>
                <h3 className="text-white font-semibold mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map(link => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-t border-slate-800 pt-12 mb-12"
          >
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay updated with Nexara
              </h3>
              <p className="text-slate-400 mb-6">
                Get the latest updates on new features, automation tips, and
                industry insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex-1 max-w-md">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <Button className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-black shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30">
                  Subscribe
                </Button>
              </div>
              <p className="text-slate-500 text-xs mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <span>© 2024 Nexara. Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>for amazing teams.</span>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <Link
                  href="#privacy"
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#terms"
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#cookies"
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-6 right-6"
        >
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="w-12 h-12 rounded-full bg-slate-900/80 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 backdrop-blur-sm shadow-lg shadow-cyan-500/25"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </footer>
  )
}
