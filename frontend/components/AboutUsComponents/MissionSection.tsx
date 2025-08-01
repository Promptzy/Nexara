import React from 'react'
import { useSlideIn } from '../hooks/useScrollReveal'
import useAdvancedScroll from '../hooks/useAdvancedScroll'
import { Zap, Cpu, Sparkles } from 'lucide-react'

const MissionSection: React.FC = () => {
  const missionScroll = useAdvancedScroll(0.3)

  return (
    <section
      ref={missionScroll.ref}
      style={missionScroll.style}
      className="py-24 px-6 md:px-12 relative z-10"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text content */}
        <div
          className="space-y-6 stagger-child"
          style={{ '--stagger-index': 1 } as React.CSSProperties}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Why We Built <span className="text-purple-400">Zenjira</span>
          </h2>
          <div className="space-y-4 text-base md:text-lg text-neutral-300 leading-relaxed">
            <p>
              Zenjira started with a question:{' '}
              <span className="text-neutral-100 font-medium">
                Why does project management feel like more work than the actual
                project?
              </span>
            </p>
            <p>
              We envisioned a future where your task board thinks with you, not
              against you. Using the latest AI technologies, we built Zenjira to
              automate, analyze, and amplify productivity.
            </p>
            <p>
              Whether it&apos;s automating workflows or planning sprints,{' '}
              <span className="text-blue-400 font-medium">
                Zenjira does the heavy lifting
              </span>{' '}
              so your team can focus on building.
            </p>
          </div>
        </div>

        {/* Animated image/card */}
        <div
          className="relative animate-cosmic-drift stagger-child"
          style={{ '--stagger-index': 2 } as React.CSSProperties}
        >
          <div className="absolute -inset-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl filter blur-xl opacity-40 animate-pulse"></div>
          <div className="relative bg-neutral-900/60 rounded-2xl p-8 border border-neutral-700/50 backdrop-blur-lg shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <Cpu className="w-10 h-10 text-purple-400" />
              <h3 className="text-2xl font-semibold text-white">
                AI System Active
              </h3>
            </div>
            <div className="bg-neutral-800/50 rounded-lg p-4 space-y-3">
              {[
                {
                  icon: <Zap className="w-4 h-4 text-blue-400" />,
                  text: 'Analyzing sprint capacity...',
                },
                {
                  icon: <Sparkles className="w-4 h-4 text-purple-400" />,
                  text: 'Optimizing ticket distribution...',
                },
                {
                  icon: <Zap className="w-4 h-4 text-green-400" />,
                  text: 'Sprint plan generated ✓',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {item.icon}
                  <span className="text-sm text-neutral-300">{item.text}</span>
                </div>
              ))}
            </div>
            <p className="text-center mt-6 text-xs text-neutral-500">
              AI-powered workflow automation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionSection
