import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpToLine, ArrowLeftToLine, ArrowRightToLine } from 'lucide-react';

export default function SceneQuivers() {
  const quivers = [
    { name: "Back Quiver", role: "Core Combat", flavor: "Quick shot, power, pierce. Fast to access." },
    { name: "Left Hip", role: "Utility & Control", flavor: "Smoke, binding, snare. Battlefield shaping." },
    { name: "Right Hip", role: "Heavy & Magical", flavor: "Lightning pierce, explosive, breaker tools." }
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="display text-3xl text-emerald-400 mb-12 tracking-[0.2em] glow-emerald"
      >
        Tactical Quivers
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl justify-center items-stretch h-[250px]">
        {quivers.map((q, i) => (
           <motion.div
             key={i}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: i * 0.3, duration: 0.6 }}
             className="flex-1 bg-black/40 border border-emerald-500/20 rounded-sm p-6 flex flex-col items-center justify-center text-center relative group overflow-hidden"
           >
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="p-4 rounded-full border border-emerald-500/30 text-emerald-400 mb-4 relative z-10 bg-black/60 shadow-[0_0_15px_rgba(52,211,153,0.1)]">
                {i === 0 ? <ArrowUpToLine /> : i === 1 ? <ArrowLeftToLine /> : <ArrowRightToLine />}
              </div>
              
              <h3 className="display text-xl text-white mb-1 relative z-10">{q.name}</h3>
              <p className="font-mono text-[9px] uppercase tracking-widest text-emerald-400/80 mb-4">{q.role}</p>

              <p className="text-white/60 text-xs italic serif relative z-10 border-t border-emerald-500/10 pt-4 w-full">
                {q.flavor}
              </p>
           </motion.div>
        ))}
      </div>
    </div>
  );
}
