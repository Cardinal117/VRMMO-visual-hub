import React from 'react';
import { motion } from 'motion/react';

export default function SceneStances() {
  const stances = [
    { name: "High Guard", skills: "Overhead Slash, Wind Slash" },
    { name: "Low Guard", skills: "Rising Slash, Draw Cut" },
    { name: "Side Guard", skills: "Sweeping Cut, Cleave" },
    { name: "Forward Point", skills: "Thrust, Dash Pierce" },
    { name: "Two-Hand Overhead", skills: "Crescent Wave, Heavy Cleave" },
    { name: "Two-Hand Low Draw", skills: "Iai Slash, Shock Cut" }
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="display text-3xl text-gold mb-4 tracking-[0.2em] glow-amber"
      >
        Recognizable Stances
      </motion.h2>
      <p className="text-white/50 serif italic mb-12">Clean visuals format for main stances</p>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
        {stances.map((stance, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex items-center justify-between p-4 panel-gold bg-black/40 border border-gold/20 rounded-sm hover:border-gold/50 transition-colors"
          >
            <span className="display text-lg text-gold">{stance.name}</span>
            <span className="font-mono text-[9px] text-white/50 uppercase tracking-widest text-right max-w-[150px]">
              {stance.skills}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
