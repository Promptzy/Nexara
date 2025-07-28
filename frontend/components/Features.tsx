'use client'

import React from 'react'
import { Bot, BarChart3, Workflow } from 'lucide-react'
import FeatureCard from './FeatureCard'

/**
 * Features data inspired by the design but tailored for Zenjira
 */
const features = [
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description: "Transform your Jira workflow with intelligent automation that learns from your team's patterns. From smart task assignments to automated sprint planning, our AI helps you work smarter, not harder.",
    action: "Explore automation"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights into your team's performance with comprehensive dashboards and reports. Track velocity, identify bottlenecks, and make data-driven decisions to optimize your development process.",
    action: "View analytics"
  },
  {
    icon: Workflow,
    title: "Seamless Integration",
    description: "Connect Zenjira with your existing tools and workflows. Our platform integrates seamlessly with Slack, GitHub, and other development tools to create a unified workspace for your team.",
    action: "See integrations",
    hasCodePreview: true
  }
]

/**
 * Features section component inspired by the provided design
 */
const Features: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Features that power your{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              development workflow
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Discover how Zenjira transforms your Jira experience with intelligent automation and powerful insights.
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-8">
          {/* Top Row - Two Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FeatureCard {...features[0]} />
            <FeatureCard {...features[1]} />
          </div>
          
          {/* Bottom Row - Single Large Card */}
          <div className="w-full">
            <FeatureCard {...features[2]} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features