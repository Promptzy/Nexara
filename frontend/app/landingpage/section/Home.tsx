'use client'

import React from 'react'
import Button from '../components/button'
import {
  Sparkles,
  Zap,
  Brain,
  Shield,
  ArrowRight,
  Play,
  Star,
  CheckCircle,
  Rocket,
  Globe,
  Cpu,
  Target,
} from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen pt-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Floating AI Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-10 animate-float-slow">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30 backdrop-blur-sm flex items-center justify-center">
            <Brain className="w-8 h-8 text-purple-400" />
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-float-medium">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30 backdrop-blur-sm flex items-center justify-center">
            <Cpu className="w-6 h-6 text-blue-400" />
          </div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float-fast">
          <div className="w-14 h-14 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-500/30 backdrop-blur-sm flex items-center justify-center">
            <Target className="w-7 h-7 text-green-400" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 text-center px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-3 bg-black/40 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 mb-16 animate-fade-in-up shadow-2xl shadow-black/50">
            <div className="relative">
              <div className="w-3 h-3 bg-white rounded-full animate-ping" />
              <div className="absolute inset-0 w-3 h-3 bg-white rounded-full animate-pulse" />
            </div>
            <Sparkles className="w-6 h-6 text-white animate-pulse" />
            <span className="text-base font-bold text-white tracking-wide">
              ✨ AI-Powered Features Now Live ✨
            </span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-10 leading-none tracking-tight animate-fade-in-up animation-delay-200">
            <span className="block text-5xl md:text-6xl lg:text-7xl font-extralight text-white/90 mb-2">
              The Future of
            </span>
            <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient-shift font-black">
              Project Management
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/70 max-w-4xl mx-auto mb-12 leading-relaxed font-normal animate-fade-in-up animation-delay-400">
            Harness the power of{' '}
            <span className="text-emerald-300 font-semibold">
              artificial intelligence
            </span>{' '}
            to transform how teams collaborate,
            <span className="text-cyan-300 font-semibold">
              {' '}
              automate workflows
            </span>
            , and
            <span className="text-blue-300 font-semibold">
              {' '}
              deliver results faster
            </span>
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-5 mb-20 animate-fade-in-up animation-delay-600">
            <div className="flex items-center gap-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-400/30 rounded-full px-6 py-3 hover:scale-105 transition-transform duration-300">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-base font-semibold text-yellow-200">
                Lightning Fast
              </span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-emerald-400/30 rounded-full px-6 py-3 hover:scale-105 transition-transform duration-300">
              <Brain className="w-5 h-5 text-emerald-400" />
              <span className="text-base font-semibold text-emerald-200">
                AI-Powered
              </span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 hover:scale-105 transition-transform duration-300">
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="text-base font-semibold text-blue-200">
                Enterprise Secure
              </span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-3 hover:scale-105 transition-transform duration-300">
              <Globe className="w-5 h-5 text-purple-400" />
              <span className="text-base font-semibold text-purple-200">
                Global Scale
              </span>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in-up animation-delay-800">
            <button className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              <span className="flex items-center gap-3">
                <Rocket className="w-5 h-5 group-hover:animate-bounce" />
                Start Building Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>

            <button className="group flex items-center gap-4 text-white/80 hover:text-white transition-colors duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 rounded-xl flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:scale-110 border border-purple-400/30 shadow-lg">
                <Play className="w-6 h-6 ml-1" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-lg">Watch Demo</div>
                <div className="text-white/60 text-sm">See AI in action</div>
              </div>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-10 text-white/70 text-base animate-fade-in-up animation-delay-1000">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="font-semibold">4.9/5 from 10,000+ reviews</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span className="font-semibold">SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">
                99.99% Uptime SLA
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 px-4 pb-20 animate-fade-in-up animation-delay-1200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-black text-emerald-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                2.5M+
              </div>
              <div className="text-white/80 text-base font-semibold uppercase tracking-wider">
                Users
              </div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-black text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                85+
              </div>
              <div className="text-white/80 text-base font-semibold uppercase tracking-wider">
                Countries
              </div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-black text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                200+
              </div>
              <div className="text-white/80 text-base font-semibold uppercase tracking-wider">
                Integrations
              </div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-black text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                99.5%
              </div>
              <div className="text-white/80 text-base font-semibold uppercase tracking-wider">
                Uptime
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-gradient-shift {
          animation: gradient-shift 4s ease infinite;
          background: linear-gradient(
            to right,
            #10b981,
            #06b6d4,
            #3b82f6,
            #8b5cf6,
            #10b981
          );
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-3deg);
          }
        }

        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
        }
      `}</style>
    </div>
  )
}

export default Home
