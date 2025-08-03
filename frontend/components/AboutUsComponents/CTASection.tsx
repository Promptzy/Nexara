import React from 'react'
import { useSlideIn, useScaleIn } from '../hooks/useScrollReveal'
import { Github, ArrowRight, Mail } from 'lucide-react'

const CTASection: React.FC = () => {
  const textAnimation = useSlideIn('up', 0.2)
  const buttonAnimation = useScaleIn(0.4)

  return (
    <section className="py-20 px-4 md:px-12 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <div
          ref={textAnimation.ref}
          style={textAnimation.style}
          className="space-y-6 mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Join the <span className="text-purple-400">Journey</span>
          </h2>

          <p className="text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto">
            Whether you&apos;re a developer, a product owner, or a curious
            innovator — Zenjira is built for you.
            <br />
            <span className="text-blue-400 font-medium">
              Let&apos;s simplify the future of software development. Together.
            </span>
          </p>
        </div>

        <div
          ref={buttonAnimation.ref}
          style={buttonAnimation.style}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center"
        >
          <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 hover:scale-105 shadow-lg shadow-purple-500/25 text-sm sm:text-base min-w-0 w-full sm:w-auto">
            <Github className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="truncate">Contribute on GitHub</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </button>

          <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 hover:scale-105 shadow-lg shadow-blue-500/25 text-sm sm:text-base min-w-0 w-full sm:w-auto">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="truncate">Join Early Access</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </button>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 rounded-2xl border border-neutral-700/50 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-400">10K+</div>
              <div className="text-neutral-400">Tickets Processed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-400">500+</div>
              <div className="text-neutral-400">Workflows Automated</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-400">95%</div>
              <div className="text-neutral-400">Time Saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
