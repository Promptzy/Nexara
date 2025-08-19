'use client'

import { motion } from 'framer-motion'
import { Link, Zap, Shield, Code, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Integrations() {
  const integrationCategories = [
    {
      name: "Communication",
      icon: "💬",
      integrations: ["Slack", "Discord", "Microsoft Teams", "Zoom", "Google Meet"],
      color: "from-cyan-500 to-emerald-500"
    },
    {
      name: "Development",
      icon: "💻",
      integrations: ["GitHub", "GitLab", "Bitbucket", "VS Code", "Jira"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "Design & Creative",
      icon: "🎨",
      integrations: ["Figma", "Adobe Creative Suite", "Canva", "Sketch", "InVision"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Productivity",
      icon: "📊",
      integrations: ["Notion", "Airtable", "Trello", "Asana", "Monday.com"],
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Analytics",
      icon: "📈",
      integrations: ["Google Analytics", "Mixpanel", "Amplitude", "Hotjar", "Segment"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "CRM & Sales",
      icon: "💰",
      integrations: ["Salesforce", "HubSpot", "Pipedrive", "Zoho", "Freshworks"],
      color: "from-yellow-500 to-orange-500"
    }
  ]

  const mcpFeatures = [
    {
      title: "Multi-Channel Platform",
      description: "Centralized integration hub that connects all your tools and services",
      icon: Link
    },
    {
      title: "Real-time Sync",
      description: "Instant data synchronization across all connected platforms",
      icon: Zap
    },
    {
      title: "Secure Authentication",
      description: "OAuth 2.0 and API key management with enterprise-grade security",
      icon: Shield
    },
    {
      title: "Custom Webhooks",
      description: "Build custom integrations for any service not in our marketplace",
      icon: Code
    }
  ]

  return (
    <section id="integrations" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 text-sm font-medium mb-6 border border-emerald-500/30 backdrop-blur-sm"
          >
            <Link className="w-4 h-4 mr-2 text-emerald-400" />
            Integrations
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Connect with{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              500+ tools and services
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Nexara's MCP server seamlessly integrates with your existing workflow. Connect Slack, GitHub, Figma, and hundreds more 
            to create a unified project management experience.
          </motion.p>
        </div>

        {/* MCP Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mcpFeatures.map((feature, index) => (
              <Card key={feature.title} className="text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                      <feature.icon className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Integration Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Popular integration categories
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Browse integrations by category to find the perfect tools for your workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-emerald-500/50 bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <CardTitle className="text-xl font-semibold text-white">
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.integrations.map((integration) => (
                        <div key={integration} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">
                            {integration}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              How integrations work
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Setting up integrations is simple and secure. Here's how it works:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/25">
                  <span className="text-2xl font-bold text-black">1</span>
                </div>
                <CardTitle className="text-lg font-semibold text-white mb-2">
                  Choose Your Tool
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Select from our marketplace of 500+ pre-built integrations
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/25">
                  <span className="text-2xl font-bold text-black">2</span>
                </div>
                <CardTitle className="text-lg font-semibold text-white mb-2">
                  Authenticate Securely
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Connect using OAuth or API keys with enterprise-grade security
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                  <span className="text-2xl font-bold text-black">3</span>
                </div>
                <CardTitle className="text-lg font-semibold text-white mb-2">
                  Start Automating
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Create workflows that automatically sync data across platforms
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-emerald-500/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to connect your tools?
              </h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Explore our integration marketplace and start building seamless workflows across all your favorite tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-black shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30">
                  Browse Integrations
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/10 hover:border-emerald-400">
                  Request Integration
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
