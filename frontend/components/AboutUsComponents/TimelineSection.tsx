import React from 'react'
import TimelineItem from './TimelineItem'
import { CheckCircle, Clock, Sparkles } from 'lucide-react'

const TimelineSection: React.FC = () => {
  const timelineItems = [
    {
      quarter: 'Q1 2024',
      title: 'AI Ticket Summarizer Launched',
      description: 'Introduced intelligent ticket analysis and summarization',
      status: 'completed',
      icon: CheckCircle,
      delay: 0.1,
    },
    {
      quarter: 'Q2 2024',
      title: 'n8n Workflow Builder Integrated',
      description:
        'Added no-code automation capabilities for complex workflows',
      status: 'completed',
      icon: CheckCircle,
      delay: 0.2,
    },
    {
      quarter: 'Q3 2025',
      title: 'AI-Powered Retrospective Generator',
      description: 'Automated sprint retrospectives with actionable insights',
      status: 'upcoming',
      icon: Clock,
      delay: 0.3,
    },
    {
      quarter: '2026',
      title: 'Zenjira for Enterprises',
      description:
        'Enterprise-grade features with advanced security and compliance',
      status: 'future',
      icon: Sparkles,
      delay: 0.4,
    },
  ]

  return (
    <section className="py-20 px-4 md:px-12 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-purple-400">Journey</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            From inception to innovation - tracking our progress and what&apos;s
            coming next.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const Icon = item.icon
              const isLeft = index % 2 === 0

              return (
                <TimelineItem
                  key={index}
                  item={item}
                  index={index}
                  isLeft={isLeft}
                  Icon={Icon}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TimelineSection
