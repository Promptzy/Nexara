'use client'

import React from 'react'
import Image from 'next/image'
import { useTheme } from './contexts/ThemeContext'

interface LogoProps {
  variant?: 'icon' | 'horizontal' | 'vertical'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  showTagline?: boolean
}

const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  className = '',
  showTagline = true,
}) => {
  const { isDarkMode } = useTheme()

  // Size mappings
  const sizeMap = {
    sm: { width: 32, height: 32 },
    md: { width: 48, height: 48 },
    lg: { width: 64, height: 64 },
    xl: { width: 80, height: 80 },
  }

  // Variant mappings with dark/light theme support
  const getLogoSrc = () => {
    const basePath = '/assets/logos'

    switch (variant) {
      case 'icon':
        return isDarkMode
          ? `${basePath}/logo-icon-dark.svg`
          : `${basePath}/logo-icon.svg`
      case 'horizontal':
        return isDarkMode
          ? `${basePath}/logo-horizontal-dark.svg`
          : `${basePath}/logo-horizontal.svg`
      case 'vertical':
        return `${basePath}/logo-vertical.svg` // Only light version for now
      default:
        return isDarkMode
          ? `${basePath}/logo-horizontal-dark.svg`
          : `${basePath}/logo-horizontal.svg`
    }
  }

  // Get dimensions based on variant and size
  const getDimensions = () => {
    if (variant === 'icon') {
      return sizeMap[size]
    } else if (variant === 'horizontal') {
      const baseHeight = sizeMap[size].height
      const aspectRatio = 200 / 64 // width / height
      return {
        width: Math.round(baseHeight * aspectRatio),
        height: baseHeight,
      }
    } else if (variant === 'vertical') {
      const baseWidth = sizeMap[size].width
      const aspectRatio = 120 / 120 // width / height
      return {
        width: baseWidth,
        height: baseWidth,
      }
    }
    return sizeMap[size]
  }

  const dimensions = getDimensions()

  return (
    <div className={`inline-block ${className}`}>
      <Image
        src={getLogoSrc()}
        alt={`Zenjira ${variant} logo`}
        width={dimensions.width}
        height={dimensions.height}
        className="object-contain"
        priority={variant === 'horizontal'} // Priority for main logo
      />
    </div>
  )
}

export default Logo
