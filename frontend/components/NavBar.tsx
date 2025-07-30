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

function NavBar() {
  const [active, setActive] = useState('home')

  function handleClick(link: string) {
    // sets the active link using the variable passed through to the function, used for conditional styling
    setActive(link)
  }

  return (
    <div className="bg-[transparent] backdrop-blur-sm flex justify-around">
      <div className="my-4">
        {/* <div className="my-2"> */}
        <Link className="text-[white] text-[2rem] font-bold" href="/">
          {/* <Link className="text-[white] text-[1.5rem] font-bold" href="/"> */}
          Zenjira
        </Link>
      </div>
      <div className="my-4 self-center hidden sm:block">
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
      <nav className="self-center hidden sm:block my-4 text-[white] bg-[black] px-6 py-2 rounded-3xl border-[#6C7DEE] border-2">
        <Link href="/">Get Started</Link>
      </nav>
      <div className="flex sm:hidden">
        <Popover>
          <PopoverTrigger>
            <FontAwesomeIcon
              icon={faBars}
              className="w-12 h-12 text-[1.3rem] cursor-pointer text-[white]"
            />
          </PopoverTrigger>
          <PopoverContent className="max-w-[10rem] py-0 my-0 px-0 mr-2 bg-[transparent] backdrop-blur-md ">
            <nav className="flex flex-col max-w-[10rem] bg-[transparent] backdrop-blur-sm rounded-sm">
              <Link href="/" className="px-6 mt-8 text-[#979696] text-[1.2rem]">
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
                className="px-6 mt-8 text-[#979696] text-[1.2rem]"
              >
                Contact
              </Link>
              <div className="self-center sm:block mt-10 mb-4 px-6 py-2 text-[white] bg-[black] rounded-3xl border-[#6C7DEE] border-2">
                <Link href="/">Get Started</Link>
              </div>
            </nav>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

export default NavBar
