import React from 'react';
import FeatureCard from './FeatureCard';
import { Bot, Workflow, BarChart3, Search, FileText, Puzzle } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Puzzle,
      title: "No-code Automations",
      description: "Build powerful workflows without writing a single line of code using our visual automation builder.",
      delay: 0.1,
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30",
      iconColor: "text-blue-400"
    },
    {
      icon: Bot,
      title: "Smart Ticket Summaries",
      description: "AI-powered analysis that turns complex tickets into clear, actionable insights for your team.",
      delay: 0.2,
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30",
      iconColor: "text-purple-400"
    },
    {
      icon: BarChart3,
      title: "Live Dashboards",
      description: "Real-time project insights with customizable metrics that matter to your development workflow.",
      delay: 0.3,
      gradient: "from-green-500/20 to-emerald-500/20",
      border: "border-green-500/30",
      iconColor: "text-green-400"
    },
    {
      icon: Search,
      title: "Semantic Issue Search",
      description: "Find exactly what you're looking for with AI-powered search that understands context and intent.",
      delay: 0.4,
      gradient: "from-orange-500/20 to-red-500/20",
      border: "border-orange-500/30",
      iconColor: "text-orange-400"
    },
    {
      icon: FileText,
      title: "Auto Release Notes",
      description: "Generate professional release notes automatically from your commits and pull requests.",
      delay: 0.5,
      gradient: "from-indigo-500/20 to-blue-500/20",
      border: "border-indigo-500/30",
      iconColor: "text-indigo-400"
    },
    {
      icon: Workflow,
      title: "AI Sprint Planner",
      description: "Plan sprints automatically with GPT-4 based on team capacity, priorities, and historical data.",
      delay: 0.6,
      gradient: "from-teal-500/20 to-cyan-500/20",
      border: "border-teal-500/30",
      iconColor: "text-teal-400"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Core <span className="text-purple-400">Features</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Powerful tools designed to streamline your development workflow and boost team productivity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <FeatureCard
                key={index}
                feature={feature}
                index={index}
                Icon={Icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;