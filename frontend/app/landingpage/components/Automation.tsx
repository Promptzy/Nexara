'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Workflow, Zap, Bot, Code, Play, Settings, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useRef } from 'react'

export default function Automation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const automationFeatures = [
    {
      icon: Workflow,
      title: "Visual Workflow Builder",
      description: "Drag-and-drop interface inspired by n8n for creating complex automation workflows without coding.",
      color: "from-cyan-500 to-emerald-500"
    },
    {
      icon: Bot,
      title: "AI-Powered Automation",
      description: "Intelligent bots that learn from your team's patterns and suggest automation opportunities.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Custom Code Nodes",
      description: "Write custom JavaScript or Python code for advanced automation scenarios and integrations.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Play,
      title: "One-Click Triggers",
      description: "Set up automated actions triggered by events like new tasks, deadlines, or team updates.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Settings,
      title: "Smart Scheduling",
      description: "AI-optimized scheduling that considers team capacity, priorities, and dependencies.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Real-time Execution",
      description: "Instant workflow execution with live monitoring and rollback capabilities.",
      color: "from-yellow-500 to-orange-500"
    }
  ]

  const workflowSteps = [
    {
      step: "01",
      title: "Choose Trigger",
      description: "Select from 100+ built-in triggers or create custom ones",
      icon: "🎯"
    },
    {
      step: "02",
      title: "Add Actions",
      description: "Connect actions like notifications, task updates, or external API calls",
      icon: "⚡"
    },
    {
      step: "03",
      title: "Set Conditions",
      description: "Add logic gates and conditions for complex decision-making",
      icon: "🔀"
    },
    {
      step: "04",
      title: "Test & Deploy",
      description: "Test workflows in sandbox mode before going live",
      icon: "🚀"
    }
  ]

  return (
    <section id="automation" className="py-20 bg-gradient-to-br from-slate-900 via-black to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-pink-900/5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-32 left-32 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-36 h-36 bg-pink-500/5 rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Animated Grid Pattern */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
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
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-sm font-medium mb-6 border border-purple-500/30 backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-4 h-4 mr-2 text-purple-400" />
            </motion.div>
            AI Automation
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Automate everything with{' '}
            <motion.span 
              className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              AI-powered workflows
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Build intelligent automation workflows that adapt to your team's needs. From simple notifications to complex multi-step processes, 
            Nexara makes automation accessible to everyone.
          </motion.p>
        </div>

        {/* Automation Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {automationFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="h-full transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25 hover:border-purple-500/50 bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
                
                <CardHeader className="text-center pb-4 relative z-10">
                  <motion.div 
                    className="flex justify-center mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <feature.icon className="w-8 h-8 text-black" />
                      </motion.div>
                    </div>
                  </motion.div>
                  <CardTitle className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-slate-300 text-center group-hover:text-slate-200 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Workflow Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Build workflows in 4 simple steps
            </motion.h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Our intuitive interface makes it easy to create powerful automation workflows without any technical knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                className="text-center"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-pink-500/0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                  
                  <CardContent className="p-6 relative z-10">
                    <motion.div 
                      className="text-4xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.icon}
                    </motion.div>
                    <motion.div 
                      className="text-sm text-purple-400 font-mono mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1, ease: "backOut" }}
                    >
                      {step.step}
                    </motion.div>
                    <CardTitle className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {step.title}
                    </CardTitle>
                    <CardDescription className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/30 backdrop-blur-sm overflow-hidden relative">
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 12,
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
                Ready to automate your workflow?
              </motion.h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Start building intelligent automation workflows today. No coding required, just drag, drop, and deploy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30">
                    Try Automation Builder
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="lg" className="border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400">
                    View Templates
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
