'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimationConfig {
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
  delay?: number
  threshold?: number
}

interface AnimationReturn {
  ref: React.RefObject<HTMLDivElement>
  className: string
  isVisible: boolean
}

/**
 * Custom hook for scroll-triggered animations
 * Provides similar functionality to react-bits but with better Next.js compatibility
 */
export function useSlideIn(config: AnimationConfig = {}): AnimationReturn {
  const {
    direction = 'up',
    duration = 500,
    delay = 0,
    threshold = 0.1
  } = config

  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [delay, threshold])

  // Generate CSS classes based on configuration
  const getTransformClasses = () => {
    const baseClasses = `transition-all duration-${duration}`
    
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `${baseClasses} opacity-0 translate-y-8`
        case 'down':
          return `${baseClasses} opacity-0 -translate-y-8`
        case 'left':
          return `${baseClasses} opacity-0 translate-x-8`
        case 'right':
          return `${baseClasses} opacity-0 -translate-x-8`
        default:
          return `${baseClasses} opacity-0 translate-y-8`
      }
    }

    return `${baseClasses} opacity-100 translate-x-0 translate-y-0`
  }

  return {
    ref,
    className: getTransformClasses(),
    isVisible
  }
}

/**
 * Scale and fade animation hook
 */
export function useScaleFadeIn(config: AnimationConfig = {}): AnimationReturn {
  const {
    duration = 500,
    delay = 0,
    threshold = 0.1
  } = config

  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [delay, threshold])

  const className = isVisible
    ? `transition-all duration-${duration} opacity-100 scale-100`
    : `transition-all duration-${duration} opacity-0 scale-95`

  return {
    ref,
    className,
    isVisible
  }
}