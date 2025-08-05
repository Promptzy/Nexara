'use client'

import React from 'react'
import Button from '../components/button'
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
  Globe,
  Lock,
} from 'lucide-react'

const Home = () => {
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
    <div className="min-h-screen pt-24">
      {/* News Banner */}
      <div className="flex justify-center pt-8 pb-2">
        <div className="bg-black/20 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
          <span className="bg-black/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs flex items-center gap-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
            {/* Live */}
          </span>
          <span>AI-Powered Features Now Live - Try Free Today</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Trust Indicator */}
          <div className="inline-flex items-center gap-2 text-white/60 text-sm mb-6">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
            <span>Trusted by 10,000+ teams worldwide</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
              Nexara
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            An AI Powered Project Management Tool
          </p>

          {/* Description */}
          <p className="text-lg text-white mb-12 max-w-3xl mx-auto leading-relaxed">
            Streamline your workflow with intelligent automation, real-time
            collaboration, and AI-driven insights that transform how teams work
            together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              variant="primary"
              className="px-8 py-4 text-lg font-semibold"
            >
              Start Free Trial
            </Button>

            <Button
              variant="secondary"
              className="px-8 py-4 text-lg font-semibold"
            >
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Watch Demo
              </span>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-8 text-white text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>4.9/5 rating</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>14-day free trial</span>
            </div>
          </div>
        </div>
      </div>

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

      <style jsx>{gradientAnimation}</style>
    </div>
  )
}

export default Home

// Add gradient animation styles
const gradientAnimation = `
  @keyframes gradient-x {
    0%, 100% {
      background-size: 200% 200%;
      background-position: left center;
    }
    50% {
      background-size: 200% 200%;
      background-position: right center;
    }
  }
  
  .animate-gradient-x {
    animation: gradient-x 3s ease infinite;
    background: linear-gradient(
      to right,
      #a855f7,
      #3b82f6,
      #8b5cf6,
      #a855f7
    );
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`
