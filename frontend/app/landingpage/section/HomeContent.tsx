"use client"
import MagicBento from "../components/MagicBento"
import FlowingMenu from "../components/FlowingMenu"
import {
  CheckSquare,
  Users,
  BarChart3,
  Zap,
  GitBranch,
  Clock,
  Sparkles,
  Shield,
  CloudLightningIcon as Lightning,
  TrendingUp,
  ArrowRight,
  Star,
  Play,
  Rocket,
  ChevronRight,
  Globe,
  Brain,
  Eye,
  Gauge,
  Lock,
  Layers,
  Code2,
  Database,
  Smartphone,
  Monitor,
  Award,
  CheckCircle,
  Infinity,
  Zap as Bolt,
  Target,
  MessageSquare,
  Palette,
  Cpu,
} from "lucide-react"

const HomeContent = () => {
  const demoItems = [
    {
      link: "#",
      text: "Task Management",
      image: CheckSquare,
      color: "#3B82F6",
    },
    { link: "#", text: "Team Collaboration", image: Users, color: "#10B981" },
    { link: "#", text: "AI Analytics", image: BarChart3, color: "#F59E0B" },
    { link: "#", text: "Workflow Automation", image: Zap, color: "#EF4444" },
    { link: "#", text: "Project Tracking", image: GitBranch, color: "#8B5CF6" },
    { link: "#", text: "Real-time Updates", image: Clock, color: "#06B6D4" },
  ]

  return (
    <div className="bg-black min-h-screen">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/3 to-blue-500/3 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
            <span className="text-sm font-semibold text-purple-300">
              Introducing Nexara AI - The Future is Here
            </span>
            <ChevronRight className="w-4 h-4 text-purple-400" />
          </div>

          {/* Main Headlines */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 leading-none tracking-tight">
            BUILD THE
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              IMPOSSIBLE
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-white/70 max-w-5xl mx-auto mb-12 leading-relaxed">
            The most advanced project management platform that transforms ambitious ideas into 
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-semibold"> extraordinary results</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 hover:scale-105">
              Start Building Today
              <Rocket className="inline-block w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group flex items-center gap-4 text-white hover:text-purple-300 transition-colors duration-300">
              <div className="w-16 h-16 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:scale-110">
                <Play className="w-8 h-8 ml-1" />
              </div>
              <div className="text-left">
                <div className="font-bold text-xl">Watch Demo</div>
                <div className="text-white/60">3 min overview</div>
              </div>
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center group cursor-pointer">
              <div className="text-5xl font-black text-white mb-2 group-hover:text-purple-400 transition-colors">2M+</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Global Users</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-5xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">99.99%</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Uptime SLA</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-5xl font-black text-white mb-2 group-hover:text-green-400 transition-colors">500+</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Integrations</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-5xl font-black text-white mb-2 group-hover:text-yellow-400 transition-colors">24/7</div>
              <div className="text-white/60 text-sm uppercase tracking-wider">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="relative px-4 py-32">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-6 py-3 mb-8">
              <Brain className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">AI-Powered Innovation</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
              Beyond
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Expectations
              </span>
            </h2>
            <p className="text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Experience next-generation features that redefine what's possible in project management
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {/* Card 1 - AI Intelligence */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <Brain className="w-16 h-16 text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-4">AI Intelligence</h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  Advanced machine learning that predicts project outcomes and optimizes workflows automatically
                </p>
              </div>
            </div>

            {/* Card 2 - Real-time Sync */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <Bolt className="w-16 h-16 text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-4">Lightning Speed</h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  Sub-50ms response times with real-time collaboration across global teams
                </p>
              </div>
            </div>

            {/* Card 3 - Security */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <Shield className="w-16 h-16 text-green-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-4">Fort Knox Security</h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  Military-grade encryption with zero-trust architecture and SOC 2 Type II compliance
                </p>
              </div>
            </div>

            {/* Card 4 - Analytics */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <BarChart3 className="w-16 h-16 text-orange-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-4">Smart Analytics</h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  Predictive insights and intelligent recommendations powered by advanced algorithms
                </p>
              </div>
            </div>

            {/* Card 5 - Global Scale */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <Globe className="w-16 h-16 text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-4">Global Scale</h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  Seamlessly scale from startup to enterprise with unlimited users and projects
                </p>
              </div>
            </div>

            {/* Card 6 - Innovation */}
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <Infinity className="w-16 h-16 text-pink-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-4">Limitless Potential</h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  Unlimited customization with extensible APIs and powerful automation tools
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative px-4 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Built on
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {" "}Tomorrow's Tech
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Powered by cutting-edge technologies for unmatched performance and reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:scale-105 transition-all duration-300">
              <Code2 className="w-16 h-16 text-blue-400 mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-3">Next.js 14</h3>
              <p className="text-white/70">React Server Components & Edge Runtime</p>
            </div>
            <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:scale-105 transition-all duration-300">
              <Database className="w-16 h-16 text-green-400 mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-3">GraphQL</h3>
              <p className="text-white/70">Efficient Data Fetching & Real-time Updates</p>
            </div>
            <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:scale-105 transition-all duration-300">
              <Brain className="w-16 h-16 text-purple-400 mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-3">AI Engine</h3>
              <p className="text-white/70">Machine Learning & Predictive Analytics</p>
            </div>
            <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:scale-105 transition-all duration-300">
              <Layers className="w-16 h-16 text-orange-400 mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-3">Microservices</h3>
              <p className="text-white/70">Scalable Cloud Architecture</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="relative px-4 py-32">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Ecosystem
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {" "}Excellence
            </span>
          </h2>
          <p className="text-xl text-white/70 mb-16 max-w-3xl mx-auto">
            Connect with 500+ tools and platforms in the most comprehensive integration ecosystem
          </p>

          {/* Integration Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6 mb-16">
            {[
              { name: "Slack", icon: "💬" },
              { name: "GitHub", icon: "🐙" },
              { name: "Figma", icon: "🎨" },
              { name: "Notion", icon: "📝" },
              { name: "Jira", icon: "🔷" },
              { name: "Zoom", icon: "📹" },
              { name: "Teams", icon: "👥" },
              { name: "Drive", icon: "📁" },
            ].map((integration, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {integration.icon}
                </div>
                <div className="text-white/80 font-medium text-sm">{integration.name}</div>
              </div>
            ))}
          </div>

          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:scale-105">
            Explore All Integrations
            <ArrowRight className="inline-block w-5 h-5 ml-3" />
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative px-4 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Loved by
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {" "}Industry Leaders
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Nexara transformed our entire development workflow. The AI insights are game-changing.",
                author: "Sarah Chen",
                role: "CTO, TechCorp",
                rating: 5
              },
              {
                quote: "The most intuitive project management tool we've ever used. Our productivity increased by 300%.",
                author: "Marcus Rodriguez",
                role: "VP Engineering, StartupX",
                rating: 5
              },
              {
                quote: "Security and performance at this level is unprecedented. Nexara is the future.",
                author: "Emily Watson",
                role: "Director, GlobalTech",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300"
              >
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.author}</div>
                  <div className="text-white/60">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-4 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-8">
            Ready to Build
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              The Future?
            </span>
          </h2>
          <p className="text-2xl text-white/70 mb-16 max-w-3xl mx-auto leading-relaxed">
            Join over 2 million users who are already building extraordinary projects with Nexara
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-12">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-16 py-6 rounded-2xl font-black text-2xl transition-all duration-300 shadow-2xl hover:scale-105">
              Start Your Journey
            </button>
            <button className="border-2 border-white/20 hover:border-white/40 text-white px-16 py-6 rounded-2xl font-bold text-2xl transition-all duration-300 backdrop-blur-sm hover:bg-white/5">
              Schedule Demo
            </button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-white/50 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Free 30-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Power Up Your Workflow Section - PRESERVED */}
      <section className="relative px-4 py-24">
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

          <div style={{ height: "600px", position: "relative" }}>
            <FlowingMenu items={demoItems} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeContent
