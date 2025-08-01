import React from 'react'
import { useSlideIn, useFadeIn, useScaleIn } from '../hooks/useScrollReveal'
import useAdvancedScroll from '../hooks/useAdvancedScroll'
import { ArrowRight, Sparkles } from 'lucide-react'

const HeroSection: React.FC = () => {
  const heroScroll = useAdvancedScroll(0.2)

  return (
    <section
      ref={heroScroll.ref}
      style={heroScroll.style}
      className="min-h-screen flex items-center justify-center relative z-10 px-6 md:px-12 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full animate-parallax-float filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full animate-parallax-float filter blur-3xl delay-500"></div>
      </div>

      <div
        className="text-center space-y-8 stagger-child"
        style={{ '--stagger-index': 1 } as React.CSSProperties}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in-up">
          Reimagining Jira with AI.
          <br />
          <span className="relative bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Simpler. Smarter. Faster.
            <Sparkles className="absolute -top-4 -right-8 w-8 h-8 text-purple-300 animate-star-twinkle" />
          </span>
        </h1>

        <p
          className="text-xl text-neutral-300 mt-4 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          We build tools that free your development team from the noise — using
          intelligent automation, smart insights, and seamless integrations.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 hover:scale-105 animate-galaxy-glow">
            Explore Features
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border border-neutral-600 hover:border-neutral-400 text-neutral-300 hover:text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-neutral-800/50">
            Meet the Team
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
