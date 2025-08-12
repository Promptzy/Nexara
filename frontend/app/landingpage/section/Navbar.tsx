'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../assests/logo-icon-for-dark-bg.svg'
import Button from '../components/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navlinks = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Integrations', href: '/integrations' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Pricing', href: '/pricing' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false) // close on route change
  }, [pathname])

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}
      `}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-lg p-1"
          >
            <Image
              src={logo}
              alt="Nexara"
              className="h-8 w-8 lg:h-10 lg:w-10 transition-transform duration-300 group-hover:scale-110"
              priority
            />
            <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Nexara
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navlinks.map(link => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative text-sm font-medium transition-colors duration-200
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-md px-2 py-1
                    ${active ? 'text-white' : 'text-white/70 hover:text-white'}
                  `}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-0 rounded-md bg-white/10" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/login">
              <Button
                variant="secondary"
                className="px-6 py-2.5 text-sm font-medium bg-white/5 hover:bg-white/10 border-white/20 hover:border-white/30 text-white"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                variant="primary"
                className="px-6 py-2.5 text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-xl rounded-xl border border-white/10 mt-4 shadow-2xl">
              {navlinks.map(link => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      block px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200
                      ${active ? 'text-white bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/5'}
                    `}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <div className="pt-4 border-t border-white/10">
                <div className="flex flex-col gap-3 px-3">
                  <Link href="/login">
                    <Button
                      variant="secondary"
                      className="w-full py-2.5 text-sm font-medium bg-white/5 hover:bg-white/10 border-white/20 hover:border-white/30 text-white"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button
                      variant="primary"
                      className="w-full py-2.5 text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-lg shadow-purple-500/25"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
