'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
  className?: string
}

/**
 * FeatureCard component displays a single feature with icon, title, and description
 * Includes hover animations and gradient styling
 */
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  gradient,
  className
}) => {
  return (
    <Card className={cn(
      "group relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
      className
    )}>
      <CardContent className="p-6">
        {/* Background gradient overlay on hover */}
        <div 
          className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300",
            gradient
          )} 
        />
        
        {/* Icon container */}
        <div className={cn(
          "inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 text-white shadow-sm group-hover:scale-110 transition-transform duration-300",
          gradient
        )}>
          <Icon className="w-6 h-6" />
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors">
          {description}
        </p>

        {/* Subtle border animation */}
        <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-border/20 transition-colors duration-300" />
      </CardContent>
    </Card>
  )
}

export default FeatureCard