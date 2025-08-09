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
    <div className="bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <div className="relative px-4 pt-32 pb-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium text-purple-300">Trusted by 10,000+ teams worldwide</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            The Future of
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Project Management
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
            Transform your workflow with AI-powered insights, seamless collaboration, and intelligent automation that
            scales with your ambitions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-2xl shadow-purple-500/25">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-white/90 hover:text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Bento Section */}
      <div className="relative px-4 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">AI-Powered Features</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Everything you need to
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                scale your business
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Experience the future of project management with intelligent automation, real-time collaboration, and
              AI-driven insights
            </p>
          </div>

          {/* Magic Bento Grid */}
          <div className="flex justify-center mb-24">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
              <div className="relative">
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
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:from-white/10 hover:to-white/15 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightning className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                Built for speed with real-time updates and instant collaboration across all devices
              </p>
            </div>

            <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:from-white/10 hover:to-white/15 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                Bank-level security with SOC 2 compliance and end-to-end encryption for peace of mind
              </p>
            </div>

            <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:from-white/10 hover:to-white/15 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Analytics</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                Predictive insights and intelligent recommendations to optimize workflow and boost productivity
              </p>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-3xl p-12 backdrop-blur-sm">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                    99.9%
                  </div>
                  <div className="text-white/70 text-lg font-medium">Uptime Guarantee</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                    10,000+
                  </div>
                  <div className="text-white/70 text-lg font-medium">Active Teams</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                    50+
                  </div>
                  <div className="text-white/70 text-lg font-medium">Integrations</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                    24/7
                  </div>
                  <div className="text-white/70 text-lg font-medium">Expert Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flowing Menu Section - UNCHANGED */}
      <div className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Power Up Your Workflow</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Experience seamless collaboration with AI-driven insights that transform how teams work together
            </p>
          </div>

          <div style={{ height: "600px", position: "relative" }}>
            <FlowingMenu items={demoItems} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeContent
