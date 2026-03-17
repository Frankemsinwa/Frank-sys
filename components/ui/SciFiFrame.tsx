'use client';

import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface SciFiFrameProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  showScanLine?: boolean;
}

export const SciFiFrame = ({ 
  children, 
  className, 
  glowColor = 'cyan',
  showScanLine = false 
}: SciFiFrameProps) => {
  const colorMap: Record<string, string> = {
    cyan: 'border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]',
    blue: 'border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]',
    purple: 'border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.2)]',
  };

  const glowClass = colorMap[glowColor] || colorMap.cyan;

  return (
    <div className={cn("relative p-6 group", className)}>
      {/* Brackets */}
      {/* Top Left */}
      <div className={cn("absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 transition-all duration-300 group-hover:w-12 group-hover:h-12", glowClass)} />
      {/* Top Right */}
      <div className={cn("absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 transition-all duration-300 group-hover:w-12 group-hover:h-12", glowClass)} />
      {/* Bottom Left */}
      <div className={cn("absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 transition-all duration-300 group-hover:w-12 group-hover:h-12", glowClass)} />
      {/* Bottom Right */}
      <div className={cn("absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 transition-all duration-300 group-hover:w-12 group-hover:h-12", glowClass)} />

      {/* Side Accents (Gaps in center) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-white/10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-white/10" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/3 w-[1px] bg-white/10" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-1/3 w-[1px] bg-white/10" />

      {/* Scan Line Animation */}
      {showScanLine && (
        <motion.div
          initial={{ top: '0%' }}
          animate={{ top: '100%' }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute left-0 right-0 h-[1px] bg-cyan-500/20 z-0 pointer-events-none"
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
