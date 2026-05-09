import React from 'react';
import { motion } from 'motion/react';
import { Crosshair, Move3d, Waypoints, Box } from 'lucide-react';

export default function RangedOutroSlide({ onRestart, onHub }: { onRestart?: () => void, onHub?: () => void }) {
  const points = [
    { icon: <Move3d className="w-5 h-5" />, text: "Trajectory Shaping" },
    { icon: <Waypoints className="w-5 h-5" />, text: "Tactical Control" },
    { icon: <Box className="w-5 h-5" />, text: "Physical Inventory" },
    { icon: <Crosshair className="w-5 h-5" />, text: "Precision Focus" }
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-4xl space-y-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="display text-5xl md:text-6xl tracking-[0.2em] text-glow mb-4 text-emerald-400">
          APEX PREDICTIONS
        </h2>
        <div className="h-px w-64 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mx-auto my-6" />
        <p className="text-lg text-white/70 max-w-2xl mx-auto serif italic">
          An elegant, tactical ranged system focused on trajectory mastery, VR comfort, and battlefield resource management.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {points.map((pt, i) => (
             <div key={i} className="flex flex-col items-center gap-3 p-6 rounded-sm panel-emerald border-emerald-500/20">
               <div className="text-emerald-400">
                 {pt.icon}
               </div>
               <span className="font-mono text-[10px] tracking-widest uppercase text-white/50 w-full border-t border-emerald-500/20 pt-3">
                 {pt.text}
               </span>
             </div>
           ))}
        </div>
      </motion.div>

      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1.2, duration: 1 }}
         className="flex gap-4 mt-8"
      >
        <button
           onClick={onHub}
           className="px-8 py-3 rounded-sm border border-white/30 text-white uppercase tracking-widest font-mono text-[10px] hover:bg-white/10 hover:border-white transition-all duration-300"
        >
          Return to Hub
        </button>
        <button
           onClick={onRestart}
           className="px-8 py-3 rounded-sm border border-emerald-500/30 text-emerald-400 uppercase tracking-widest font-mono text-[10px] hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-300 bg-black/40"
        >
          Restart Experience
        </button>
      </motion.div>
    </div>
  );
}
