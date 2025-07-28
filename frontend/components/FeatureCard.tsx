"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
  hasCodePreview?: boolean;
  className?: string;
}

/**
 * FeatureCard displays a feature with icon, title, description and action button
 * Matches the design with purple gradient icons and clean styling
 */
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  action,
  hasCodePreview = false,
  className = "",
}) => {
  return (
    <div className={`bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300 ${className}`}>
      <div className="flex flex-col h-full">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-6 bg-gradient-to-r from-purple-500 to-pink-500">
          <Icon className="w-6 h-6 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-white mb-4">
          {title}
        </h3>
        <p className="text-gray-300 text-base leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Code Preview for Code Collaboration Card */}
        {hasCodePreview && (
          <div className="bg-gray-900/80 rounded-lg p-4 mb-6 border border-gray-700/30">
            <div className="text-xs text-gray-400 mb-2">DigitalToken.js</div>
            <div className="font-mono text-sm space-y-1">
              <div className="text-gray-400">1. <span className="text-blue-400">// addNumbersToToken</span></div>
              <div className="text-gray-400">2. <span className="text-purple-400">function</span> <span className="text-yellow-400">addNumbersToToken</span><span className="text-white">(</span><span className="text-orange-400">num1</span><span className="text-white">, </span><span className="text-orange-400">num2</span><span className="text-white">) {'{'}</span></div>
              <div className="text-gray-400">3. &nbsp;&nbsp;<span className="text-purple-400">let</span> <span className="text-blue-300">sum</span> <span className="text-white">= </span><span className="text-orange-400">num1</span> <span className="text-white">+ </span><span className="text-orange-400">num2</span><span className="text-white">;</span></div>
              <div className="text-gray-400">4. &nbsp;&nbsp;<span className="text-purple-400">let</span> <span className="text-blue-300">token</span> <span className="text-white">= {'{'}</span></div>
              <div className="text-gray-400">5. &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">value:</span> <span className="text-blue-300">sum</span><span className="text-white">,</span></div>
              <div className="text-gray-400">6. &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">value:</span> <span className="text-blue-300">sum</span><span className="text-white">,</span></div>
              <div className="text-gray-400">7. &nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-blue-300">token</span><span className="text-white">;</span></div>
              <div className="text-gray-400">8. <span className="text-white">{'}'}</span></div>
            </div>
          </div>
        )}

        {/* Action Button */}
        <button className="text-white hover:text-purple-400 transition-colors duration-200 text-left font-medium">
          {action}
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;