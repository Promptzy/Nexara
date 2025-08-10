'use client'
import { useState } from 'react'
import Image from 'next/image'
import logo from '../assests/logo-icon-for-dark-bg.svg'
import Button from '../components/button'
import Link from 'next/link'

const navlinks = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Integrations', href: '/integrations' },
  { label: 'Toast Demo', href: '/toast-demo' },
  { label: 'FAQ', href: '/faq' },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <section className="py-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div
          className={`
            border border-white/15 rounded-full p-2 px-4 items-center backdrop-blur-md
            w-fit mx-auto max-w-2xl bg-gradient-to-r from-black/70 via-black/60 to-black/70
            hover:from-black/80 hover:via-black/70 hover:to-black/80
            shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/40
            transform hover:scale-105 hover:-translate-y-1
            transition-all duration-700 ease-out
            grid grid-cols-2 lg:grid-cols-3
            animate-float
          `}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={logo}
                alt="Zenjira logo"
                className="h-8 lg:h-10 w-auto transition-all duration-500 ease-out hover:scale-110"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex justify-center items-center space-x-6">
            {navlinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-white transition-all duration-300 ease-out text-sm font-medium relative group"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-white/70 transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop Buttons & Mobile Menu Toggle */}
          <div className="flex justify-end items-center gap-2">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-all duration-300 ease-out hover:scale-110"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-all duration-500 ease-out ${
                  isMobileMenuOpen
                    ? 'rotate-180 scale-110'
                    : 'rotate-0 scale-100'
                }`}
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>

            {/* Desktop Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <Link href="/login">
                <Button
                  variant="secondary"
                  className="text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg"
                >
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  variant="primary"
                  className="text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg"
                >
                  Signup
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden mt-4 overflow-hidden transition-all duration-500 ease-out
            ${
              isMobileMenuOpen
                ? 'max-h-96 opacity-100 translate-y-0'
                : 'max-h-0 opacity-0 -translate-y-4'
            }
          `}
        >
          <div className="bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-md border border-white/15 rounded-2xl p-4 transform transition-all duration-500 ease-out shadow-xl">
            <div className="flex flex-col space-y-4">
              {navlinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-all duration-300 ease-out py-2 text-center relative group"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-white to-white/70 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
                </a>
              ))}
              <div className="flex gap-2 pt-2">
                <Link href="/login" className="flex-1">
                  <Button
                    variant="secondary"
                    className="w-full text-sm transition-all duration-300 ease-out hover:scale-105"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/signup" className="flex-1">
                  <Button
                    variant="primary"
                    className="w-full text-sm transition-all duration-300 ease-out hover:scale-105"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Signup
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
