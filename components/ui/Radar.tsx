'use client';

import React from 'react';
import { motion } from 'motion/react';

export const Radar = () => {
  return (
    <div className="relative w-32 h-32 border border-cyan-500/20 rounded-full flex items-center justify-center overflow-hidden">
      {/* Rotating Sweep */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 bg-conic-[from_0deg,_transparent_0%,_rgba(6,182,212,0.2)_10%,_transparent_20%]"
      />
      
      {/* Grid Lines */}
      <div className="absolute inset-0 border-b border-cyan-500/10 top-1/2 -translate-y-1/2" />
      <div className="absolute inset-0 border-l border-cyan-500/10 left-1/2 -translate-x-1/2" />
      
      {/* Concentric Circles */}
      <div className="absolute w-2/3 h-2/3 border border-cyan-500/10 rounded-full" />
      <div className="absolute w-1/3 h-1/3 border border-cyan-500/10 rounded-full" />
      
      {/* Blips */}
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        className="absolute top-1/4 right-1/3 w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_5px_cyan]"
      />
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
        className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_5px_cyan]"
      />
      
      <div className="absolute text-[8px] font-mono text-cyan-500/50 bottom-2">RADAR_ACTIVE</div>
    </div>
  );
};
