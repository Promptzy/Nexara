'use client'

import { useEffect, useState } from 'react'

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!isVisible) return null

  return (
    <>
      <style>
        {`
          @keyframes gradient-x {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .gradient-text {
            background: linear-gradient(to right, #a78bfa, #60a5fa, #c084fc);
            background-size: 200% 200%;
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
            animation: gradient-x 4s ease infinite;
          }

          .back-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 1000;
            border: none;
            border-radius: 50%;
            width: 52px;
            height: 52px;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
            background-color: white;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          }
        `}
      </style>

      <button onClick={scrollToTop} className="back-to-top">
        <span className="gradient-text">↑</span>
      </button>
    </>
  )
}
