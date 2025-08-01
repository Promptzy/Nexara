"use client";

import React from "react";
import { motion } from "framer-motion";

interface EnhancedBackgroundProps {
  variant?: "login" | "signup";
}

export const EnhancedBackground: React.FC<EnhancedBackgroundProps> = ({
  variant = "login"
}) => {
  const colors = {
    login: {
      primary: "from-purple-900",
      secondary: "via-pink-900", 
      tertiary: "to-slate-900",
      accent1: "bg-purple-500/10",
      accent2: "bg-pink-500/10",
    },
    signup: {
      primary: "from-blue-900",
      secondary: "via-purple-900",
      tertiary: "to-slate-900", 
      accent1: "bg-blue-500/10",
      accent2: "bg-purple-500/10",
    },
  };

  const currentColors = colors[variant];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentColors.primary} ${currentColors.secondary} ${currentColors.tertiary}`} />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/40 to-slate-900" />
      
      {/* Animated orbs */}
      <motion.div
        className={`absolute top-1/4 left-1/4 w-96 h-96 ${currentColors.accent1} rounded-full blur-3xl`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${currentColors.accent2} rounded-full blur-3xl`}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Additional smaller orbs */}
      <motion.div
        className={`absolute top-3/4 left-1/3 w-48 h-48 ${currentColors.accent1} rounded-full blur-2xl`}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
      
      <motion.div
        className={`absolute top-1/6 right-1/3 w-32 h-32 ${currentColors.accent2} rounded-full blur-xl`}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
      />
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};