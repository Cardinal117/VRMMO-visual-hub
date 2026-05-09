import React from 'react';
import { motion } from 'motion/react';
import { Shield, BookOpen, Swords, Crown } from 'lucide-react';

export default function SceneProgression() {
  const steps = [
    { icon: <Shield />, name: "Novice", desc: "4 One-handed Stances" },
    { icon: <BookOpen />, name: "Adept", desc: "Two-handed Committed Stances" },
    { icon: <Swords />, name: "Expert", desc: "Stance Chains & Combos" },
    { icon: <Crown />, name: "Master", desc: "Cancels, Counters & Signature Arts" }
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="display text-3xl text-gold mb-12 tracking-[0.2em] glow-amber"
      >
        Progression Ladder
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-4 w-full max-w-5xl justify-center items-stretch h-[250px]">
        {steps.map((s, i) => (
           <motion.div
             key={i}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: i * 0.3, duration: 0.6 }}
             className="flex-1 panel-gold bg-black/40 border border-gold/10 rounded-sm p-6 flex flex-col items-center justify-center text-center relative group"
           >
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-4 rounded-full border border-gold/30 text-gold mb-4 relative z-10 bg-black/60 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                {s.icon}
              </div>
              <h3 className="display text-xl text-white mb-2 relative z-10">{s.name}</h3>
              <p className="font-mono text-[9px] uppercase tracking-widest text-gold/70 relative z-10 p-2 bg-gold/10 rounded-sm w-full border border-gold/20">
                {s.desc}
              </p>
           </motion.div>
        ))}
      </div>
    </div>
  );
}
