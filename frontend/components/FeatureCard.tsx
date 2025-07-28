"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import SpotlightCard from "./ui/Components/SpotlightCard/SpotlightCard";

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  className?: string;
}

/**
 * FeatureCard displays an animated card with icon, title, and description.
 * Uses SpotlightCard for dynamic hover glow effects.
 */
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  gradient,
  className,
}) => {
  return (
    <SpotlightCard
      spotlightColor="rgba(37, 99, 235, 0.12)" // blue-600 glow matching theme
      className={cn(
        "group cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
        "border-border/40 bg-card/60 backdrop-blur-sm",
        "hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10",
        "dark:border-border/20 dark:bg-card/40",
        "dark:hover:border-blue-400/30 dark:hover:shadow-blue-400/10",
        className
      )}
    >
      <div className="relative z-10">
        {/* Icon */}
        <div
          className={cn(
            "inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 text-white",
            "shadow-sm shadow-black/10 dark:shadow-black/20",
            "transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-black/20",
            "dark:group-hover:shadow-black/30",
            gradient
          )}
        >
          <Icon className="w-6 h-6" />
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed transition-colors duration-300 group-hover:text-foreground/90">
          {description}
        </p>
      </div>
    </SpotlightCard>
  );
};

export default FeatureCard;
