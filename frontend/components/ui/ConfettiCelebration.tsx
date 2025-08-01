"use client";

import React, { useState, useEffect } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { motion, AnimatePresence } from "framer-motion";

interface ConfettiCelebrationProps {
  isActive: boolean;
  variant?: "login" | "signup";
  onComplete?: () => void;
}

export const ConfettiCelebration: React.FC<ConfettiCelebrationProps> = ({
  isActive,
  variant = "login",
  onComplete
}) => {
  const [showConfetti, setShowConfetti] = useState(false);

  const colors = {
    login: ["#a855f7", "#ec4899", "#3b82f6", "#8b5cf6"],
    signup: ["#3b82f6", "#a855f7", "#ec4899", "#06b6d4"],
  };

  useEffect(() => {
    if (isActive) {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowConfetti(false);
        onComplete?.();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  return (
    <AnimatePresence>
      {showConfetti && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center"
        >
          <ConfettiExplosion
            force={0.8}
            duration={3000}
            particleCount={250}
            width={1600}
            colors={colors[variant]}
          />
          
          {/* Success message */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: 2 }}
                className="text-6xl text-center mb-4"
              >
                🎉
              </motion.div>
              <h3 className="text-2xl font-bold text-white text-center">
                {variant === "login" ? "Welcome Back!" : "Welcome to Zenjira!"}
              </h3>
              <p className="text-slate-300 text-center mt-2">
                {variant === "login" 
                  ? "Successfully signed in to your account" 
                  : "Your account has been created successfully"
                }
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};