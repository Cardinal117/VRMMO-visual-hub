import React from 'react';
import { motion } from 'motion/react';
import { Crosshair, Map, Clock } from 'lucide-react';

export default function SceneClosing() {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-4xl space-y-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="display text-4xl md:text-5xl tracking-[0.2em] glow-emerald mb-4 text-emerald-400">
          FIELD CONTROL
        </h2>
        <div className="h-px w-64 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mx-auto my-6" />
        <p className="text-xl text-white/80 max-w-3xl mx-auto serif italic leading-relaxed">
          The ranged class is about reading and shaping the battlefield. 
          A skilled archer chooses the right ammunition, defines the shot with physical form, previews trajectories, supports the party, and manages arrows as committed resources.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full flex justify-center gap-8 mt-8"
      >
         <div className="flex flex-col items-center gap-2">
           <div className="p-4 border border-emerald-500/30 rounded-full bg-black/40">
             <Crosshair className="w-6 h-6 text-emerald-400" />
           </div>
           <span className="font-mono text-[9px] uppercase tracking-widest text-white/50">Precision</span>
         </div>
         <div className="w-16 h-px bg-white/20 mt-7" />
         <div className="flex flex-col items-center gap-2">
           <div className="p-4 border border-emerald-500/30 rounded-full bg-black/40">
             <Map className="w-6 h-6 text-emerald-400" />
           </div>
           <span className="font-mono text-[9px] uppercase tracking-widest text-white/50">Tactics</span>
         </div>
         <div className="w-16 h-px bg-white/20 mt-7" />
         <div className="flex flex-col items-center gap-2">
           <div className="p-4 border border-emerald-500/30 rounded-full bg-black/40">
             <Clock className="w-6 h-6 text-emerald-400" />
           </div>
           <span className="font-mono text-[9px] uppercase tracking-widest text-white/50">Timing</span>
         </div>
      </motion.div>
    </div>
  );
}
