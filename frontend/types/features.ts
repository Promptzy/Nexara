import { LucideIcon } from 'lucide-react'

/**
 * Feature interface for the Features section
 */
export interface Feature {
  /** Lucide icon component */
  icon: LucideIcon
  /** Feature title */
  title: string
  /** Feature description */
  description: string
  /** Tailwind gradient classes for styling */
  gradient: string
}

/**
 * Animation configuration for react-bits
 */
export interface AnimationConfig {
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
  delay?: number
}

/**
 * Props for the FeatureCard component
 */
export interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
  className?: string
}