import React from 'react';
import { motion } from 'motion/react';
import { Sword, Wind, Target } from 'lucide-react';

export default function SceneClosing() {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-4xl space-y-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="display text-4xl md:text-5xl tracking-[0.2em] glow-amber mb-4 text-gold">
          MARTIAL MASTERY
        </h2>
        <div className="h-px w-64 bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto my-6" />
        <p className="text-xl text-white/80 max-w-3xl mx-auto serif italic leading-relaxed">
          The melee class is about turning the body into the input system. 
          A skilled player wins by forming readable stances, timing charge windows, releasing with intent, and mastering the physical identity of each weapon.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full flex justify-center gap-8 mt-8"
      >
         <div className="flex flex-col items-center gap-2">
           <div className="p-4 border border-gold/30 rounded-full panel-gold bg-black/40">
             <Target className="w-6 h-6 text-gold" />
           </div>
           <span className="font-mono text-[9px] uppercase tracking-widest text-white/50">Clarity</span>
         </div>
         <div className="w-16 h-px bg-white/20 mt-7" />
         <div className="flex flex-col items-center gap-2">
           <div className="p-4 border border-gold/30 rounded-full panel-gold bg-black/40">
             <Wind className="w-6 h-6 text-gold" />
           </div>
           <span className="font-mono text-[9px] uppercase tracking-widest text-white/50">Timing</span>
         </div>
         <div className="w-16 h-px bg-white/20 mt-7" />
         <div className="flex flex-col items-center gap-2">
           <div className="p-4 border border-gold/30 rounded-full panel-gold bg-black/40">
             <Sword className="w-6 h-6 text-gold" />
           </div>
           <span className="font-mono text-[9px] uppercase tracking-widest text-white/50">Mastery</span>
         </div>
      </motion.div>
    </div>
  );
}
