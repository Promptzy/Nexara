'use client'

import React from 'react'
import MagicBento from '../components/MagicBento'
import FlowingMenu from '../components/FlowingMenu'
import {
  CheckSquare,
  Users,
  BarChart3,
  Zap,
  GitBranch,
  Clock,
  Sparkles,
  Shield,
  Zap as Lightning,
  TrendingUp,
} from 'lucide-react'

const HomeContent = () => {
  const demoItems = [
    {
      link: '#',
      text: 'Task Management',
      image: CheckSquare,
      color: '#3B82F6',
    },
    { link: '#', text: 'Team Collaboration', image: Users, color: '#10B981' },
    { link: '#', text: 'AI Analytics', image: BarChart3, color: '#F59E0B' },
    { link: '#', text: 'Workflow Automation', image: Zap, color: '#EF4444' },
    { link: '#', text: 'Project Tracking', image: GitBranch, color: '#8B5CF6' },
    { link: '#', text: 'Real-time Updates', image: Clock, color: '#06B6D4' },
  ]

  return (
    <div className="bg-black">
      {/* Enhanced Bento Section */}
      <div className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">
                AI-Powered Features
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Everything you need to
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {' '}
                scale your business
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Experience the future of project management with intelligent
              automation, real-time collaboration, and AI-driven insights that
              transform how teams work together
            </p>
          </div>

          {/* Magic Bento Grid */}
          <div className="flex justify-center mb-16">
            <MagicBento
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
            />
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lightning className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Lightning Fast
              </h3>
              <p className="text-white/70 text-sm">
                Built for speed with real-time updates and instant collaboration
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Enterprise Security
              </h3>
              <p className="text-white/70 text-sm">
                Bank-level security with SOC 2 compliance and end-to-end
                encryption
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                AI Analytics
              </h3>
              <p className="text-white/70 text-sm">
                Predictive insights and intelligent recommendations to optimize
                workflow
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mt-20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                99.9%
              </div>
              <div className="text-white/70 text-sm">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                10,000+
              </div>
              <div className="text-white/70 text-sm">Teams</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                50+
              </div>
              <div className="text-white/70 text-sm">Integrations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                24/7
              </div>
              <div className="text-white/70 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Flowing Menu Section */}
      <div className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Power Up Your Workflow
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Experience seamless collaboration with AI-driven insights that
              transform how teams work together
            </p>
          </div>

          <div style={{ height: '600px', position: 'relative' }}>
            <FlowingMenu items={demoItems} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeContent 