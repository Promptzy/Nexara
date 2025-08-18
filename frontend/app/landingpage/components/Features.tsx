'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Kanban, 
  Calendar, 
  BarChart3, 
  Users, 
  Zap, 
  Shield, 
  GitBranch, 
  MessageSquare,
  Workflow,
  Target,
  Clock,
  TrendingUp
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useRef } from 'react'

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const features = [
    {
      icon: Kanban,
      title: "Project Boards",
      description: "Customizable Kanban and Scrum boards with real-time collaboration and AI-powered task suggestions.",
      category: "Planning & Tracking"
    },
    {
      icon: Calendar,
      title: "Sprint Management",
      description: "Plan and execute agile sprints with intelligent backlog prioritization and milestone tracking.",
      category: "Planning & Tracking"
    },
    {
      icon: BarChart3,
      title: "Advanced Reporting",
      description: "Get insights into team performance, project progress, and automated analytics dashboards.",
      category: "Reporting & Analytics"
    },
    {
      icon: Users,
      title: "Role-Based Access",
      description: "Secure project management with Admin, Moderator, and User roles for proper governance.",
      category: "Security & Collaboration"
    },
    {
      icon: Zap,
      title: "AI Automation",
      description: "Intelligent task automation, predictive analytics, and smart workflow optimization.",
      category: "AI & Automation"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with encryption, SSO, and compliance standards for enterprise teams.",
      category: "Security & Collaboration"
    },
    {
      icon: GitBranch,
      title: "Git Integration",
      description: "Seamless integration with GitHub, GitLab, and Bitbucket for code-to-task linking.",
      category: "Integrations"
    },
    {
      icon: MessageSquare,
      title: "Team Collaboration",
      description: "Built-in chat, comments, and notifications to keep everyone in sync.",
      category: "Security & Collaboration"
    },
    {
      icon: Workflow,
      title: "Visual Workflows",
      description: "Drag-and-drop workflow builder inspired by n8n for complex automation scenarios.",
      category: "AI & Automation"
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Align tasks with company objectives and track progress with automated insights.",
      category: "Planning & Tracking"
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Built-in time tracking with AI-powered estimates and productivity analytics.",
      category: "Reporting & Analytics"
    },
    {
      icon: TrendingUp,
      title: "Performance Metrics",
      description: "Monitor team velocity, cycle time, and deployment frequency with actionable insights.",
      category: "Reporting & Analytics"
    }
  ]

  const categories = ["Planning & Tracking", "AI & Automation", "Reporting & Analytics", "Security & Collaboration", "Integrations"]

  return (
    <section id="features" className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 via-transparent to-emerald-900/5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-300 text-sm font-medium mb-6 border border-cyan-500/30 backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-4 h-4 mr-2 text-cyan-400" />
            </motion.div>
            Core Features
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Everything you need to{' '}
            <motion.span 
              className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              manage projects
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Nexara combines the best of Jira with AI-powered automation, giving you a complete project management solution that scales with your team.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1, ease: "backOut" }}
            >
              <Button
                variant="outline"
                size="sm"
                className="px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-cyan-500/10 hover:text-cyan-300 hover:border-cyan-400 border-slate-700 text-slate-300 hover:scale-105"
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="group"
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="h-full transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/25 hover:border-cyan-500/50 bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-6 h-6 text-black" />
                    </motion.div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-slate-300 text-sm leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <motion.span 
                    className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature.category}
                  </motion.span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border-cyan-500/30 backdrop-blur-sm overflow-hidden relative">
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-emerald-500/5"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <CardContent className="p-8 relative z-10">
              <motion.h3 
                className="text-2xl font-bold text-white mb-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Ready to transform your project management?
              </motion.h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Join thousands of teams already using Nexara to ship faster, collaborate better, and deliver exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-black shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30">
                    Start Free Trial
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="lg" className="border-2 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400">
                    Schedule Demo
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
