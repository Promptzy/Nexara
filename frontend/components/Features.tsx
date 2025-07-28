'use client'

import React from 'react'
import { useSlideIn, useScaleFadeIn } from '@/hooks/useScrollAnimation'
import { 
  Bot, 
  Brain, 
  MessageSquare, 
  BarChart3, 
  Search,
  Calendar,
  Workflow,
  Target,
  Sparkles,
  ArrowRight,
  FileText,
  TrendingUp,
  Map,
  LucideIcon
} from 'lucide-react'
import FeatureCard from './FeatureCard'
import { Feature } from '@/types/features'
import { cn } from '@/lib/utils'

/**
 * Features data configuration
 * Each feature includes icon, title, description, and gradient styling
 */
const features: Feature[] = [
  {
    icon: Workflow,
    title: "Automation Designer",
    description: "Use n8n's drag-and-drop editor to automate Jira events like task transitions or sending Slack notifications.",
    gradient: "bg-gradient-to-r from-blue-600 to-cyan-500"
  },
  {
    icon: Brain,
    title: "AI Sprint Planner",
    description: "GPT‑4 helps generate sprints based on team capacity and priorities for optimal planning.",
    gradient: "bg-gradient-to-r from-purple-600 to-violet-500"
  },
  {
    icon: Sparkles,
    title: "Smart Ticket Summaries",
    description: "Instantly summarize long issue descriptions with AI to save time and improve clarity.",
    gradient: "bg-gradient-to-r from-amber-500 to-yellow-500"
  },
  {
    icon: MessageSquare,
    title: "ChatOps Bot",
    description: "Use Slack or Microsoft Teams to ask things like 'What are today's blockers?' and get instant answers.",
    gradient: "bg-gradient-to-r from-emerald-500 to-teal-500"
  },
  {
    icon: Target,
    title: "Developer Load Balancer",
    description: "Distribute tasks more evenly to avoid burnout and optimize team productivity.",
    gradient: "bg-gradient-to-r from-rose-500 to-pink-500"
  },
  {
    icon: Search,
    title: "Semantic Search",
    description: "Use Hugging Face models to search Jira issues based on meaning, not just keywords.",
    gradient: "bg-gradient-to-r from-teal-600 to-cyan-500"
  },
  {
    icon: Bot,
    title: "AI Test Case Generator",
    description: "Turn bug reports into suggested test cases automatically using machine learning.",
    gradient: "bg-gradient-to-r from-cyan-500 to-blue-600"
  },
  {
    icon: TrendingUp,
    title: "Retrospective Insights",
    description: "Get reports on what worked and what didn't after every sprint with AI-powered analysis.",
    gradient: "bg-gradient-to-r from-violet-600 to-purple-600"
  },
  {
    icon: Calendar,
    title: "Gantt and Calendar Views",
    description: "Visual tools to see due dates, timelines, and sprint plans in interactive formats.",
    gradient: "bg-gradient-to-r from-emerald-600 to-green-500"
  },
  {
    icon: Map,
    title: "Cross-Project Heatmap",
    description: "Identify bottlenecks and dependencies between multiple projects with visual insights.",
    gradient: "bg-gradient-to-r from-orange-500 to-red-500"
  },
  {
    icon: FileText,
    title: "Auto Release Notes",
    description: "Generate release notes from closed issues and merged pull requests automatically.",
    gradient: "bg-gradient-to-r from-indigo-600 to-blue-600"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive dashboards with burndown reports, team performance insights, and metrics.",
    gradient: "bg-gradient-to-r from-slate-600 to-gray-600"
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-12 md:mb-16"
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