import React from 'react'
import { useScaleIn } from '../hooks/useScrollReveal'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  feature: {
    delay: number
    gradient: string
    border: string
    iconColor: string
    title: string
    description: string
  }
  index: number
  Icon: LucideIcon
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index, Icon }) => {
  const animation = useScaleIn(feature.delay)

  return (
    <div
      key={index}
      ref={animation.ref}
      style={animation.style}
      className="group cursor-pointer"
    >
      <div
        className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-6 border ${feature.border} backdrop-blur-sm hover:scale-105 transition-all duration-300 h-full`}
      >
        <div className="flex items-center gap-4 mb-4">
          <div
            className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center border ${feature.border}`}
          >
            <Icon className={`w-6 h-6 ${feature.iconColor}`} />
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-white/90">
            {feature.title}
          </h3>
        </div>

        <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300">
          {feature.description}
        </p>

        <div className="mt-4 pt-4 border-t border-neutral-700/50">
          <span className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">
            Learn more →
          </span>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
