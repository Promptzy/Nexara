'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'

export interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  action: string
  hasCodePreview?: boolean
  className?: string
}


const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  action,
  hasCodePreview = false,
  className = '',
}) => {
  return (
    <div
      className={`bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 hover:bg-slate-800/80 transition-all duration-300 group ${className}`}
    >
      <div className="flex flex-col h-full">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300">
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-300 text-base leading-relaxed mb-6 flex-grow group-hover:text-slate-200 transition-colors duration-300">
          {description}
        </p>

        {/* Code Preview for AI Test Case Generator */}
        {hasCodePreview && (
          <div className="bg-slate-900/90 rounded-xl p-5 mb-6 border border-slate-700/40 shadow-inner">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs text-slate-400 font-medium">
                test-generator.js
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
            </div>
            <div className="font-mono text-sm space-y-1">
              <div className="text-slate-400">
                1.{' '}
                <span className="text-green-400">
                </span>
              </div>
              <div className="text-slate-400">
                2. <span className="text-purple-400">const</span>{' '}
                <span className="text-blue-300">testCase</span>{' '}
                <span className="text-white">=</span>{' '}
                <span className="text-purple-400">await</span>{' '}
                <span className="text-blue-300">ai</span>
                <span className="text-white">.</span>
                <span className="text-yellow-400">generateTest</span>
                <span className="text-white">(</span>
              </div>
              <div className="text-slate-400">
                3. &nbsp;&nbsp;<span className="text-blue-300">bugReport</span>
                <span className="text-white">,</span>
              </div>
              <div className="text-slate-400">
                4. &nbsp;&nbsp;{'{'}{' '}
                <span className="text-green-400">type:</span>{' '}
                <span className="text-green-300">&apos;unit&apos;</span>
                <span className="text-white">,</span>{' '}
                <span className="text-green-400">coverage:</span>{' '}
                <span className="text-orange-400">90</span>{' '}
                <span className="text-white">{'}'}</span>
              </div>
              <div className="text-slate-400">
                5. <span className="text-white">);</span>
              </div>
              <div className="text-slate-400">
                6. <span className="text-purple-400">return</span>{' '}
                <span className="text-blue-300">testCase</span>
                <span className="text-white">;</span>
              </div>
            </div>
          </div>
        )}

        {/* Action Button */}
        <button className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-left font-medium flex items-center group/btn">
          {action}
          <svg
            className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-200"
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
        </button>
      </div>
    </div>
  )
}

export default FeatureCard
