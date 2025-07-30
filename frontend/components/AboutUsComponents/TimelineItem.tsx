import React from 'react';
import { useSlideIn } from '../hooks/useScrollReveal';
import { LucideIcon } from 'lucide-react';

interface TimelineItemProps {
  item: {
    quarter: string;
    title: string;
    description: string;
    status: string;
    delay: number;
  };
  index: number;
  isLeft: boolean;
  Icon: LucideIcon;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index, isLeft, Icon }) => {
  const animation = useSlideIn('up', item.delay);

  return (
    <div
      key={index}
      ref={animation.ref}
      style={animation.style}
      className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
    >
      {/* Timeline dot */}
      <div className="absolute left-6 md:left-1/2 w-4 h-4 transform md:-translate-x-2 z-10">
        <div className={`w-4 h-4 rounded-full border-2 ${
          item.status === 'completed' 
            ? 'bg-green-500 border-green-400' 
            : item.status === 'upcoming'
            ? 'bg-blue-500 border-blue-400'
            : 'bg-purple-500 border-purple-400'
        }`}></div>
      </div>
      
      {/* Content */}
      <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
        <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 rounded-2xl p-6 border border-neutral-700/50 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              item.status === 'completed' 
                ? 'bg-green-500/20 border border-green-500/30' 
                : item.status === 'upcoming'
                ? 'bg-blue-500/20 border border-blue-500/30'
                : 'bg-purple-500/20 border border-purple-500/30'
            }`}>
              <Icon className={`w-5 h-5 ${
                item.status === 'completed' 
                  ? 'text-green-400' 
                  : item.status === 'upcoming'
                  ? 'text-blue-400'
                  : 'text-purple-400'
              }`} />
            </div>
            <span className={`text-sm font-medium px-3 py-1 rounded-full ${
              item.status === 'completed' 
                ? 'bg-green-500/20 text-green-400' 
                : item.status === 'upcoming'
                ? 'bg-blue-500/20 text-blue-400'
                : 'bg-purple-500/20 text-purple-400'
            }`}>
              {item.quarter}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2">
            {item.title}
          </h3>
          
          <p className="text-neutral-400 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;

