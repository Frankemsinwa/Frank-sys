'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';

const generateParticles = () => {
  return Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100 + '%',
    y: Math.random() * 100 + '%',
    opacity: Math.random() * 0.5,
    duration: 10 + Math.random() * 20,
  }));
};

export const FloatingParticles = () => {
  const [particles] = useState(generateParticles);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ 
            x: p.x, 
            y: p.y,
            opacity: p.opacity
          }}
          animate={{ 
            y: [null, '-=100', '+=100'],
            x: [null, '+=50', '-=50'],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: p.duration, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
          className="absolute w-[1px] h-[1px] bg-cyan-400 shadow-[0_0_2px_cyan]"
        />
      ))}
    </div>
  );
};
