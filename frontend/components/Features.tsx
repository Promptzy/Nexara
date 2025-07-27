'use client'

import React from 'react'
import { useSlideIn, useScaleFadeIn } from '@/hooks/useScrollAnimation'
import { 
  Bot, 
  Zap, 
  Brain, 
  MessageSquare, 
  BarChart3, 
  Search,
  GitBranch,
  Calendar,
  Shield,
  Workflow,
  Target,
  Sparkles,
  ArrowRight
} from 'lucide-react'
import FeatureCard, { FeatureCardProps } from './FeatureCard'
import { cn } from '@/lib/utils'

interface Feature extends Omit<FeatureCardProps, 'icon'> {
  icon: typeof Workflow
}

/**
 * Features data configuration
 * Each feature includes icon, title, description, and gradient styling
 */
const features: Feature[] = [
  {
    icon: Workflow,
    title: "No-Code Automation",
    description: "Drag-and-drop workflow builder powered by n8n. Automate Jira tasks without writing a single line of code.",
    gradient: "bg-gradient-to-r from-blue-500 to-cyan-500"
  },
  {
    icon: Brain,
    title: "AI Sprint Planning",
    description: "GPT-4 powered sprint planning that considers team capacity, priorities, and historical data for optimal results.",
    gradient: "bg-gradient-to-r from-purple-500 to-pink-500"
  },
  {
    icon: Sparkles,
    title: "Smart Summaries",
    description: "Instantly summarize complex tickets and requirements using advanced AI to save time and improve clarity.",
    gradient: "bg-gradient-to-r from-amber-500 to-orange-500"
  },
  {
    icon: MessageSquare,
    title: "ChatOps Integration",
    description: "Seamlessly integrate with Slack and Teams. Get updates, create tickets, and manage workflows from chat.",
    gradient: "bg-gradient-to-r from-green-500 to-emerald-500"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive dashboards with Gantt charts, burndown reports, and team performance insights.",
    gradient: "bg-gradient-to-r from-indigo-500 to-blue-500"
  },
  {
    icon: Search,
    title: "Semantic Search",
    description: "Find issues by meaning, not just keywords. Powered by Hugging Face transformers for intelligent search.",
    gradient: "bg-gradient-to-r from-teal-500 to-cyan-500"
  }
]

/**
 * Features section component with animated entrance effects
 * Uses react-bits for smooth scroll-triggered animations
 */
const Features: React.FC = () => {
  // Animation hooks from react-bits
  const headerAnimation = useSlideIn({ direction: 'up', duration: 600 })
  const ctaAnimation = useScaleFadeIn({ duration: 500, delay: 300 })

  return (
    <section 
      className="py-16 md:py-24 bg-gradient-to-br from-background via-muted/20 to-background"
      role="region"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div 
          ref={headerAnimation.ref}
          className={cn(
            "text-center mb-12 md:mb-16 transition-all duration-600",
            headerAnimation.className
          )}
        >
          <h2 
            id="features-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Powerful Features for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Modern Teams
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your Jira workflow with AI-powered automation, intelligent insights, 
            and seamless integrations designed for high-performing development teams.
          </p>
        </div>

        {/* Features Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
          role="list"
          aria-label="Product features"
        >
          {features.map((feature, index) => {
            // Staggered animation for each card
            const cardAnimation = useSlideIn({ 
              direction: 'up', 
              duration: 500, 
              delay: index * 100 
            })

            return (
              <div
                key={feature.title}
                ref={cardAnimation.ref}
                className={cn(
                  "transition-all duration-500",
                  cardAnimation.className
                )}
                role="listitem"
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  gradient={feature.gradient}
                />
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div 
          ref={ctaAnimation.ref}
          className={cn(
            "text-center transition-all duration-500",
            ctaAnimation.className
          )}
        >
          <p className="text-lg text-muted-foreground mb-6 md:mb-8">
            Ready to revolutionize your development workflow?
          </p>
          <button
            className={cn(
              "inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4",
              "bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold",
              "rounded-lg shadow-lg hover:shadow-xl",
              "transition-all duration-300 hover:scale-105 active:scale-95",
              "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            )}
            aria-label="Get started with Zenjira today"
          >
            Get Started Today
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Features