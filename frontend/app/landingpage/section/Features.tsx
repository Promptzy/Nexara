'use client'

import React from 'react'
import { Zap, Users, BarChart3, Shield, GitBranch } from 'lucide-react'

const Features = () => {
  const coreFeatures = [
    {
      title: 'AI-Powered Automation',
      description:
        'Intelligent workflow automation that learns and optimizes your processes.',
      icon: Zap,
      color: '#3B82F6',
    },
    {
      title: 'Real-time Collaboration',
      description:
        'Work together seamlessly with live updates and instant notifications.',
      icon: Users,
      color: '#10B981',
    },
    {
      title: 'Advanced Analytics',
      description:
        'Get deep insights with AI-driven analytics and predictive modeling.',
      icon: BarChart3,
      color: '#F59E0B',
    },
    {
      title: 'Enterprise Security',
      description:
        'SOC 2 compliant with end-to-end encryption and role-based access.',
      icon: Shield,
      color: '#EF4444',
    },
    {
      title: 'Smart Project Tracking',
      description:
        'Track progress with intelligent milestone detection and automation.',
      icon: GitBranch,
      color: '#8B5CF6',
    },
  ]

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Core Features Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-16">
            Everything you need to manage projects efficiently with AI-powered
            insights
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-black/10 backdrop-blur-md border border-white/10 hover:bg-black/20 transition-all duration-300 group"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: `${feature.color}20` }}
              >
                <feature.icon
                  className="w-8 h-8"
                  style={{ color: feature.color }}
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                {feature.description}
              </p>
              <button
                className="px-6 py-3 bg-white/10 border border-white/20 text-white font-medium rounded-xl hover:bg-white/20 transition-colors duration-300 group-hover:border-white/40"
                style={{ color: feature.color }}
              >
                Explore Now
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Workflow?
            </h3>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join thousands of teams already using Nexara to streamline their
              project management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-white/90 transition-colors duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/10 transition-colors duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
