'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../assets/logo-icon-for-dark-bg.svg'
import Button from '../components/button'

const navlinks = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Integrations', href: '/integrations' },
  { label: 'FAQ', href: '/faq' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div
          className={`
                    border border-white/15 rounded-full p-2 px-4 items-center bg-black/80 backdrop-blur-md
                    transition-all duration-500 ease-in-out
                    ${isScrolled ? 'w-full' : 'w-fit mx-auto max-w-2xl'}
                    grid grid-cols-2 lg:grid-cols-3
                `}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={logo}
              alt="Zenjira logo"
              className="h-8 lg:h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex justify-center items-center space-x-6">
            {navlinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Buttons & Mobile Menu Toggle */}
          <div className="flex justify-end items-center gap-2">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
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
                className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>

            {/* Desktop Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <Button
                variant="secondary"
                className="text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2"
              >
                Login
              </Button>
              <Button
                variant="primary"
                className="text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2"
              >
                Signup
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
                    lg:hidden mt-4 overflow-hidden transition-all duration-300 ease-in-out
                    ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}
        >
          <div className="bg-black/90 backdrop-blur-md border border-white/15 rounded-2xl p-4">
            <div className="flex flex-col space-y-4">
              {navlinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors duration-200 py-2 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-2 pt-2">
                <Button variant="secondary" className="flex-1 text-sm">
                  Login
                </Button>
                <Button variant="primary" className="flex-1 text-sm">
                  Signup
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
