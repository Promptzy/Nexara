'use client'

import { motion } from 'framer-motion'
import { Check, Star, Zap, Shield, Users, Crown } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started with project management",
      icon: Users,
      features: [
        "Up to 10 team members",
        "Basic project boards",
        "Standard reporting",
        "Email support",
        "Basic integrations",
        "1GB storage"
      ],
      popular: false,
      cta: "Get Started",
      variant: "outline" as const
    },
    {
      name: "Professional",
      description: "Advanced features for growing teams and complex projects",
      icon: Zap,
      features: [
        "Up to 50 team members",
        "Advanced automation",
        "Custom workflows",
        "Priority support",
        "Advanced integrations",
        "10GB storage",
        "AI-powered insights",
        "Advanced analytics"
      ],
      popular: true,
      cta: "Start Free Trial",
      variant: "default" as const
    },
    {
      name: "Enterprise",
      description: "Full-featured solution for large organizations",
      icon: Crown,
      features: [
        "Unlimited team members",
        "Custom AI models",
        "Advanced security",
        "Dedicated support",
        "Custom integrations",
        "Unlimited storage",
        "Advanced compliance",
        "Custom branding",
        "SLA guarantees"
      ],
      popular: false,
      cta: "Contact Sales",
      variant: "outline" as const
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-slate-900 via-black to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 text-sm font-medium mb-6 border border-yellow-500/30 backdrop-blur-sm"
          >
            <Star className="w-4 h-4 mr-2 text-yellow-400" />
            Pricing Plans
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Choose the perfect plan for{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              your team
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Start free and scale as you grow. All plans include our core features with no hidden fees.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-medium shadow-lg shadow-yellow-500/25">
                    Most Popular
                  </span>
                </div>
              )}
              
              <Card className={`h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular 
                  ? 'ring-2 ring-yellow-500 shadow-2xl scale-105 bg-gradient-to-br from-slate-900/80 to-slate-800/80' 
                  : 'hover:ring-2 hover:ring-yellow-500/50 bg-gradient-to-br from-slate-900/50 to-slate-800/50'
              } border-slate-700/50 backdrop-blur-sm`}>
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500 shadow-lg shadow-yellow-500/25' 
                        : 'bg-gradient-to-r from-slate-700 to-slate-600'
                    }`}>
                      <plan.icon className={`w-8 h-8 ${
                        plan.popular ? 'text-black' : 'text-slate-300'
                      }`} />
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-white">
                    {plan.name}
                  </CardTitle>
                  
                  <CardDescription className="text-slate-300 text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                          <Check className="w-3 h-3 text-black" />
                        </div>
                        <span className="text-slate-300 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-6">
                  <Button 
                    variant={plan.variant} 
                    size="lg" 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black shadow-lg shadow-yellow-500/25 hover:shadow-xl hover:shadow-yellow-500/30' 
                        : 'border-2 border-yellow-500/50 text-yellow-300 hover:bg-yellow-500/10 hover:border-yellow-400'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 border-slate-700/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">
                  Enterprise Security & Compliance
                </h3>
              </div>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                All plans include enterprise-grade security, SSO integration, and compliance with industry standards. 
                Need custom features? Our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" className="border-2 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400">
                  View Security Details
                </Button>
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-black shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30">
                  Contact Sales Team
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left p-6 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
              <h4 className="font-semibold text-white mb-2">
                Can I change plans anytime?
              </h4>
              <p className="text-slate-300 text-sm">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div className="text-left p-6 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
              <h4 className="font-semibold text-white mb-2">
                Is there a free trial?
              </h4>
              <p className="text-slate-300 text-sm">
                All paid plans include a 14-day free trial. No credit card required to start.
              </p>
            </div>
            <div className="text-left p-6 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
              <h4 className="font-semibold text-white mb-2">
                What payment methods do you accept?
              </h4>
              <p className="text-slate-300 text-sm">
                We accept all major credit cards, PayPal, and bank transfers for annual plans.
              </p>
            </div>
            <div className="text-left p-6 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
              <h4 className="font-semibold text-white mb-2">
                Do you offer discounts for nonprofits?
              </h4>
              <p className="text-slate-300 text-sm">
                Yes, we offer special pricing for educational institutions and nonprofit organizations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
