'use client';

import React from 'react';
import { motion } from 'motion/react';

interface EnergyMeterProps {
  label: string;
  value: number; // 0 to 100
  color?: string;
}

export const EnergyMeter = ({ label, value, color = '#06b6d4' }: EnergyMeterProps) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-end mb-1">
        <span className="text-[10px] uppercase tracking-widest text-white/50 font-mono">{label}</span>
        <span className="text-[10px] font-mono" style={{ color }}>{value}%</span>
      </div>
      <div className="h-2 w-full bg-white/5 relative overflow-hidden">
        {/* Segments */}
        <div className="absolute inset-0 flex gap-[2px]">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex-1 bg-black/40 h-full z-10" />
          ))}
        </div>
        
        {/* Fill */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 left-0 h-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
};
