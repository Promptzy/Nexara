import React from 'react';
import { useFadeIn } from '../hooks/useScrollReveal';
import { GitBranch, Zap, Brain, BarChart } from 'lucide-react';

const PlatformShowcase: React.FC = () => {
  const containerAnimation = useFadeIn(0.4);

  return (
    <section className="py-20 px-4 md:px-12 relative z-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          One platform. <span className="text-purple-400">Infinite potential.</span>
        </h2>
        
        <div 
          ref={containerAnimation.ref}
          style={containerAnimation.style}
          className="mt-12"
        >
          <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 rounded-3xl p-8 border border-neutral-700/50 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Sprint Planner */}
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-xl p-6 border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <BarChart className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold">Sprint Planner</h3>
                </div>
                <p className="text-neutral-400 text-sm">AI-powered capacity planning and task distribution</p>
              </div>
              
              {/* Automation Builder */}
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-xl p-6 border border-purple-700/30 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                    <Zap className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-white font-semibold">Automation</h3>
                </div>
                <p className="text-neutral-400 text-sm">Drag-and-drop workflow builder with n8n integration</p>
              </div>
              
              {/* AI Summary */}
              <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-xl p-6 border border-green-700/30 hover:border-green-500/50 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <Brain className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-white font-semibold">AI Summary</h3>
                </div>
                <p className="text-neutral-400 text-sm">Intelligent ticket analysis and insights</p>
              </div>
              
              {/* GitHub Integration */}
              <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 rounded-xl p-6 border border-orange-700/30 hover:border-orange-500/50 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <GitBranch className="w-5 h-5 text-orange-400" />
                  </div>
                  <h3 className="text-white font-semibold">GitHub Sync</h3>
                </div>
                <p className="text-neutral-400 text-sm">Seamless repository and deployment integration</p>
              </div>
            </div>
            
            {/* Mock Dashboard Preview */}
            <div className="mt-8 bg-gradient-to-br from-neutral-900/70 to-neutral-800/50 rounded-2xl p-6 border border-neutral-600/30">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-neutral-400 text-sm ml-4">Zenjira Dashboard</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded p-3">
                  <div className="text-blue-400 font-medium">Sprint Progress</div>
                  <div className="text-white mt-1">12/15 tasks completed</div>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded p-3">
                  <div className="text-purple-400 font-medium">Automation Status</div>
                  <div className="text-white mt-1">3 workflows active</div>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded p-3">
                  <div className="text-green-400 font-medium">AI Insights</div>
                  <div className="text-white mt-1">5 recommendations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformShowcase;