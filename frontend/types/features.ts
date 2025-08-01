import { LucideIcon } from 'lucide-react'

/**
 * Feature interface for the Features section
 * Represents a single feature with icon, content, and optional code preview
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
  /** Whether to show code preview (optional) */
  hasCodePreview?: boolean
}

/**
 * Props for the FeatureCard component
 */
export interface FeatureCardProps {
  /** Lucide icon component */
  icon: LucideIcon
  /** Feature title */
  title: string
  /** Feature description */
  description: string
  /** Action button text */
  action: string
  /** Whether to show code preview (optional) */
  hasCodePreview?: boolean
  /** Additional CSS classes (optional) */
  className?: string
}
