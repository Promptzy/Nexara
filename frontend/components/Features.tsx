'use client'

import React from 'react'
import { 
  Workflow, 
  Bot, 
  FileText, 
  MessageSquare, 
  Users, 
  Search,
  TestTube,
  BarChart3,
  Calendar,
  Map,
  GitBranch
} from 'lucide-react'
import FeatureCard from './FeatureCard'

/**
 * Core Features - Essential Zenjira capabilities
 */
const coreFeatures = [
  {
    icon: Workflow,
    title: "Automation Designer",
    description: "Use n8n's drag-and-drop editor to automate Jira events like task transitions or sending Slack notifications.",
    action: "Explore automation"
  },
  {
    icon: Bot,
    title: "AI Sprint Planner",
    description: "GPT‑4 helps generate sprints based on team capacity and priorities for optimal planning.",
    action: "Try AI planner"
  },
  {
    icon: FileText,
    title: "Smart Ticket Summaries",
    description: "Instantly summarize long issue descriptions with AI to save time and improve clarity.",
    action: "See summaries"
  },
  {
    icon: MessageSquare,
    title: "ChatOps Bot",
    description: "Use Slack or Microsoft Teams to ask things like 'What are today's blockers?' and get instant answers.",
    action: "Setup ChatOps"
  },
  {
    icon: Users,
    title: "Developer Load Balancer",
    description: "Distribute tasks more evenly to avoid burnout and optimize team productivity.",
    action: "Balance workload"
  }
]

/**
 * Advanced Features - Powerful capabilities for enhanced productivity
 */
const advancedFeatures = [
  {
    icon: Search,
    title: "Semantic Search",
    description: "Use Hugging Face models to search Jira issues based on meaning, not just keywords.",
    action: "Try semantic search"
  },
  {
    icon: TestTube,
    title: "AI Test Case Generator",
    description: "Turn bug reports into suggested test cases automatically using machine learning.",
    action: "Generate tests",
    hasCodePreview: true
  },
  {
    icon: BarChart3,
    title: "Retrospective Insights",
    description: "Get reports on what worked and what didn't after every sprint with AI-powered analysis.",
    action: "View insights"
  },
  {
    icon: Calendar,
    title: "Gantt and Calendar Views",
    description: "Visual tools to see due dates, timelines, and sprint plans in interactive formats.",
    action: "Open calendar"
  },
  {
    icon: Map,
    title: "Cross-Project Heatmap",
    description: "Identify bottlenecks and dependencies between multiple projects with visual insights.",
    action: "View heatmap"
  },
  {
    icon: GitBranch,
    title: "Auto Release Notes",
    description: "Generate release notes from closed issues and merged pull requests automatically.",
    action: "Generate notes"
  }
]

/**
 * Features section component showcasing all Zenjira capabilities
 */
const Features: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <span className="text-2xl">✨</span>
            <span className="text-blue-400 font-medium">Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              supercharge your workflow
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            From AI-powered automation to advanced analytics, Zenjira provides comprehensive tools 
            to transform your Jira experience and boost team productivity.
          </p>
        </div>

        {/* Core Features Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-2 text-center">Core Features</h3>
          <p className="text-slate-400 text-center mb-12">Essential capabilities that power your daily workflow</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>

        {/* Advanced Features Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 text-center">Advanced Features</h3>
          <p className="text-slate-400 text-center mb-12">Powerful tools for enhanced productivity and insights</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features