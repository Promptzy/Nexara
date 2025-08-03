'use client'

import React from 'react'
import Link from 'next/link'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { useTheme } from './contexts/ThemeContext'
import Logo from './Logo'

function NavBar() {
  const [active, setActive] = useState('home')
  const pathname = usePathname()
  const { isDarkMode, toggleTheme } = useTheme()

  function handleClick(link: string) {
    // sets the active link using the variable passed through to the function, used for conditional styling
    setActive(link)
  }

  return (
    <div className="bg-[transparent] backdrop-blur-sm flex justify-around">
      <div className="my-4">
        <Link href="/" className="flex items-center">
          <Logo variant="horizontal" size="lg" className="text-white" />
        </Link>
      </div>
      <div className="my-4 self-center hidden md:block">
        <nav>
          <Link
            href="/"
            className={`px-6 mt-8 text-[${
              active === 'home' ? 'white' : '#979696' // styles the active link brighter than the rest, same applied to the rest of the links
            }] text-[1.2rem]`}
            onClick={() => handleClick('home')}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`px-6 mt-8 text-[${
              active === 'about' ? 'white' : '#979696'
            }] text-[1.2rem]`}
            onClick={() => handleClick('about')}
          >
            About
          </Link>

          <Link
            href="/features"
            className={`px-6 mt-8 text-[${
              active === 'features' ? 'white' : '#979696'
            }] text-[1.2rem]`}
            onClick={() => handleClick('features')}
          >
            Features
          </Link>
          <Link
            href="/contact"
            className={`px-6 mt-8 text-[${
              active === 'contact' ? 'white' : '#979696'
            }] text-[1.2rem]`}
            onClick={() => handleClick('contact')}
          >
            Contact
          </Link>
        </nav>
      </div>
      <div className="self-center flex items-center space-x-4">
        <nav className="text-[white] bg-[black] px-4 md:px-6 py-2 rounded-3xl border-[#6C7DEE] border-2 text-sm md:text-base">
          <Link href="/">Get Started</Link>
        </nav>
        {pathname === '/about' && (
          <button
            onClick={toggleTheme}
            className={`p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-md border shadow-lg hover:scale-110 ${
              isDarkMode
                ? 'bg-black/20 border-white/20 text-white hover:bg-black/30'
                : 'bg-white/20 border-purple-300/30 text-purple-200 hover:bg-white/30'
            }`}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            <div className="relative w-5 h-5 md:w-6 md:h-6">
              {/* Sun icon */}
              <svg
                className={`absolute inset-0 w-5 h-5 md:w-6 md:h-6 transition-all duration-300 ${isDarkMode ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
              {/* Moon icon */}
              <svg
                className={`absolute inset-0 w-5 h-5 md:w-6 md:h-6 transition-all duration-300 ${isDarkMode ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </div>
          </button>
        )}
        <div className="flex md:hidden">
          <Popover>
            <PopoverTrigger>
              <FontAwesomeIcon
                icon={faBars}
                className="w-12 h-12 text-[1.3rem] cursor-pointer text-[white]"
              />
            </PopoverTrigger>
            <PopoverContent className="max-w-[10rem] py-0 my-0 px-0 mr-2 bg-[transparent] backdrop-blur-md ">
              <nav className="flex flex-col max-w-[10rem] bg-[transparent] backdrop-blur-sm rounded-sm">
                <Link
                  href="/"
                  className="px-6 mt-8 text-[#979696] text-[1.2rem]"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="px-6 mt-8 text-[#979696] text-[1.2rem]"
                >
                  About
                </Link>
                <Link
                  href="/features"
                  className="px-6 mt-8 text-[#979696] text-[1.2rem]"
                >
                  Features
                </Link>
                <Link
                  href="/contact"
                  className="px-6 mt-8 mb-8 text-[#979696] text-[1.2rem]"
                >
                  Contact
                </Link>
              </nav>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  )
}

export default NavBar
