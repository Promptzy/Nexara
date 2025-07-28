'use client'

import React from 'react'
import { BarChart3, MessageSquare, Code } from 'lucide-react'
import FeatureCard from './FeatureCard'

/**
 * Features data based on the provided design
 */
const features = [
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights.",
    action: "View dashboard"
  },
  {
    icon: MessageSquare,
    title: "Digital Credit Tokens",
    description: "Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business.",
    action: "View tokens"
  },
  {
    icon: Code,
    title: "Code collaboration",
    description: "Our advanced code synchronization technology ensures that your data is always up-to-date and accurate, no matter where it's coming from. Whether you're integrating data from multiple sources or working with a team of developers, our synchronization technology makes it easy to collaborate and ensure that your data is consistent and reliable.",
    action: "View code collaboration",
    hasCodePreview: true
  }
]

/**
 * Features section component matching the provided design
 */
const Features: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#1a1b2e] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Features that work for your future.
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Check out our amazing features and experience the power of Vaultflow for yourself.
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