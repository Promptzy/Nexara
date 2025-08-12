'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../assests/logo-icon-for-dark-bg.svg'
import Button from '../components/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
    const onScroll = () => setScrolled(window.scrollY > 10)
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
        fixed inset-x-0 top-0 z-50 pt-4 transition-all duration-500
      `}
    >
      <nav className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 flex justify-center">
        <div className="w-full max-w-5xl flex flex-col items-stretch">
          {/* Pill Navbar */}
          <div
            className={`
              relative flex items-center gap-4 rounded-full border border-white/10
              px-4 md:px-6 h-14 md:h-16
              bg-black/55 ${scrolled ? 'backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.65)]' : 'backdrop-blur-md'}
              transition-all duration-500
            `}
          >
            {/* Left: Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-md"
            >
              <span className="relative inline-flex">
                <Image
                  src={logo}
                  alt="Logo"
                  className="h-8 w-auto md:h-9 transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </span>
              <span className="hidden sm:inline-block text-sm font-medium tracking-wide text-white/80 group-hover:text-white transition-colors">
                Nexara
              </span>
            </Link>

            {/* Center: Desktop Nav (spaced) */}
            <div className="hidden lg:flex items-center gap-1 ml-2">
              {navlinks.map(l => {
                const active = pathname === l.href
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`
                      relative px-3 py-2 text-sm font-medium rounded-md transition
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
                      ${
                        active ? 'text-white' : 'text-white/60 hover:text-white'
                      }
                    `}
                  >
                    <span>{l.label}</span>
                    <span
                      className={`
                        absolute left-1/2 -bottom-0.5 h-px w-0 bg-gradient-to-r from-white/0 via-white/70 to-white/0
                        transition-all duration-500
                        ${active ? 'w-full -translate-x-1/2' : 'group-hover:w-full group-hover:-translate-x-1/2'}
                      `}
                    />
                    {active && (
                      <span className="pointer-events-none absolute inset-0 rounded-md bg-white/[0.05] ring-1 ring-white/10" />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 ml-auto">
              <Link href="/login" className="hidden md:inline-flex">
                <Button
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium hover:scale-[1.03] transition"
                >
                  Login
                </Button>
              </Link>
              <Link href="/signup" className="hidden md:inline-flex">
                <Button
                  variant="primary"
                  className="px-4 py-2 text-sm font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition"
                >
                  Get Started
                </Button>
              </Link>

              {/* Mobile Toggle */}
              <button
                aria-label="Toggle menu"
                aria-expanded={open}
                aria-controls="mobile-nav"
                onClick={() => setOpen(p => !p)}
                className={`
                  lg:hidden relative h-10 w-10 inline-flex items-center justify-center rounded-xl
                  border border-white/10 bg-white/5 hover:bg-white/10
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
                  transition-all duration-300
                  ${open ? 'rotate-90' : 'rotate-0'}
                `}
              >
                <div className="relative w-5 h-5">
                  <span
                    className={`
                      absolute inset-x-0 top-1 h-0.5 bg-white transition
                      ${open ? 'translate-y-2 rotate-45' : ''}
                    `}
                  />
                  <span
                    className={`
                      absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-white transition
                      ${open ? 'opacity-0' : 'opacity-100'}
                    `}
                  />
                  <span
                    className={`
                      absolute inset-x-0 bottom-1 h-0.5 bg-white transition
                      ${open ? '-translate-y-2 -rotate-45' : ''}
                    `}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Panel (aligned with pill) */}
          <div
            id="mobile-nav"
            className={`
              lg:hidden overflow-hidden transition-[max-height,opacity,margin] duration-500 ease
              ${open ? 'max-h-[520px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}
            `}
          >
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl p-5 space-y-4 shadow-[0_12px_48px_-12px_rgba(0,0,0,0.7)]">
              <div className="grid gap-1">
                {navlinks.map(l => {
                  const active = pathname === l.href
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={`
                        group relative rounded-lg px-4 py-3 text-sm font-medium
                        transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
                        ${
                          active
                            ? 'text-white bg-white/10'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                        }
                      `}
                    >
                      {l.label}
                      {active && (
                        <span className="absolute inset-0 rounded-lg ring-1 ring-white/15" />
                      )}
                    </Link>
                  )
                })}
              </div>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="flex gap-3">
                <Link href="/login" className="flex-1">
                  <Button
                    variant="secondary"
                    className="w-full py-2 text-sm font-medium"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/signup" className="flex-1">
                  <Button
                    variant="primary"
                    className="w-full py-2 text-sm font-semibold"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
