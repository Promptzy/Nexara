'use client'
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
  TrendingUp,
  ArrowRight,
  Star,
  Play,
  Rocket,
  ChevronRight,
  Globe,
  Brain,
  CheckCircle,
  Bolt,
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
    <div className="bg-black min-h-screen">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
            <span className="text-sm font-semibold text-purple-300">
              Trusted by 10,000+ teams worldwide
            </span>
          </div>

          {/* Main Headlines */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 leading-none tracking-tight">
            BUILD THE
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              FUTURE
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-white/70 max-w-4xl mx-auto mb-12 leading-relaxed">
            The most advanced project management platform that transforms how
            teams collaborate and deliver results
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:scale-105">
              Start Free Trial
              <Rocket className="inline-block w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group flex items-center gap-4 text-white hover:text-purple-300 transition-colors duration-300">
              <div className="w-16 h-16 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:scale-110">
                <Play className="w-8 h-8 ml-1" />
              </div>
              <div className="text-left">
                <div className="font-bold text-xl">Watch Demo</div>
                <div className="text-white/60">2 min overview</div>
              </div>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>4.9/5 from 10,000+ reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>No credit card required</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features - Simplified to 3 main features like wati.io */}
      <section className="relative px-4 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Everything you need to
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                scale your business
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Three powerful features that transform how teams work together
            </p>
          </div>

          {/* 3 Main Feature Cards */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* AI Intelligence */}
            <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-500">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">
                AI Intelligence
              </h3>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Advanced machine learning that predicts project outcomes and
                optimizes workflows automatically for maximum efficiency.
              </p>
              <button className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 mx-auto group">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Lightning Performance */}
            <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-500">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Bolt className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Lightning Speed
              </h3>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Sub-50ms response times with real-time collaboration that keeps
                your team in perfect sync across the globe.
              </p>
              <button className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 mx-auto group">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Enterprise Security */}
            <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-500">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Enterprise Security
              </h3>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Military-grade encryption with SOC 2 Type II compliance and
                zero-trust architecture for complete peace of mind.
              </p>
              <button className="text-green-400 hover:text-green-300 font-semibold flex items-center gap-2 mx-auto group">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Simplified like wati.io */}
      <section className="relative px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Loved by
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {' '}
                Industry Leaders
              </span>
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                2M+
              </div>
              <div className="text-white/60 text-sm uppercase tracking-wider">
                Active Users
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                99.99%
              </div>
              <div className="text-white/60 text-sm uppercase tracking-wider">
                Uptime
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                500+
              </div>
              <div className="text-white/60 text-sm uppercase tracking-wider">
                Integrations
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                24/7
              </div>
              <div className="text-white/60 text-sm uppercase tracking-wider">
                Support
              </div>
            </div>
          </div>

          {/* Single Testimonial */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl text-white/80 mb-8 leading-relaxed">
              &ldquo;Nexara transformed our entire development workflow. The AI
              insights are absolutely game-changing for our team&rsquo;s
              productivity.&rdquo;
            </blockquote>
            <div className="text-white font-bold text-lg">Sarah Chen</div>
            <div className="text-white/60">CTO, TechCorp</div>
          </div>
        </div>
      </section>

      {/* Final CTA - Clean like wati.io */}
      <section className="relative px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Ready to transform
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              your workflow?
            </span>
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join over 2 million users building the future with Nexara
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white/20 hover:border-white/40 text-white px-12 py-5 rounded-2xl font-semibold text-xl transition-all duration-300 backdrop-blur-sm hover:bg-white/5">
              Book a Demo
            </button>
          </div>

          <p className="text-white/50 text-sm">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Power Up Your Workflow Section - PRESERVED */}
      <section className="relative px-4 py-24">
        <div className="max-w-7xl mx-auto">
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
      </section>
    </div>
  )
}

export default HomeContent
