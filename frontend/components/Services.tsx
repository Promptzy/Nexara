'use client'

import React from 'react'
import {
  Code,
  Rocket,
  BarChart3,
  GitBranch,
  MessageSquare,
  Search,
  TestTube,
  Calendar,
  FileText,
} from 'lucide-react'

const SERVICES = [
  {
    icon: Code,
    title: 'No-Code Automation',
    description:
      'Drag-and-drop automation for Jira using n8n—no coding required!',
  },
  {
    icon: MessageSquare,
    title: 'AI Sprint Planner',
    description:
      'GPT-4 powered sprint planning and ticket summarization to save time.',
  },
  {
    icon: BarChart3,
    title: 'Live Dashboards & Gantt Charts',
    description:
      'Visualize sprints, timelines, and project health in real time.',
  },
  {
    icon: GitBranch,
    title: 'Deep Integrations',
    description:
      'Connect with GitHub, GitLab, Slack, CI/CD, and more for seamless workflows.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, description }, idx) => (
            <div
              key={title}
              className={`animate-fadeIn flex flex-col items-center bg-slate-800/60 rounded-2xl p-8 border border-slate-700/50 shadow hover:shadow-lg transition-all duration-300`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <Icon
                className="text-blue-400 mb-4 w-10 h-10"
                aria-hidden="true"
              />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-slate-300 text-center">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
