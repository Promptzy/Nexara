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
  /** Action button text */
  action: string
  /** Whether to show code preview */
  hasCodePreview?: boolean
}

/**
 * Props for the FeatureCard component
 */
export interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  action: string
  hasCodePreview?: boolean
  className?: string
}