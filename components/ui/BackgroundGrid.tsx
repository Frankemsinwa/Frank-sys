'use client';

import React from 'react';
import { motion } from 'motion/react';

export const BackgroundGrid = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Base Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Moving Scan Line */}
      <motion.div
        initial={{ top: '-10%' }}
        animate={{ top: '110%' }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute left-0 right-0 h-[2px] bg-cyan-500/20 blur-[1px] z-0"
      />

      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_0%,_#050505_90%]" />

      {/* Ambient HUD Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-l border-t border-cyan-500/10" />
      <div className="absolute top-10 right-10 w-32 h-32 border-r border-t border-cyan-500/10" />
      <div className="absolute bottom-10 left-10 w-32 h-32 border-l border-b border-cyan-500/10" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-r border-b border-cyan-500/10" />
    </div>
  );
};
