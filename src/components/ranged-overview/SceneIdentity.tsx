import React from 'react';
import { motion } from 'motion/react';
import { Crosshair } from 'lucide-react';

export default function SceneIdentity() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-12"
      >
        <h1 className="display text-5xl md:text-7xl tracking-widest text-glow mb-4 text-emerald-400">
          APEX
        </h1>
        <h2 className="text-xl text-emerald-400/80 tracking-[0.2em] uppercase font-light serif border-b border-emerald-400/20 pb-4 inline-block">
          Ranged Combat Showcase
        </h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex flex-col items-center gap-8 relative"
      >
         <div className="flex gap-8 items-center justify-center relative">
            <motion.div 
              animate={{ rotate: 180 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-emerald-500/10 blur-xl rounded-full"
            />
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-white drop-shadow-[0_0_15px_rgba(52,211,153,0.4)]"
            >
              <Crosshair className="w-24 h-24" />
            </motion.div>
         </div>

         <div className="mt-4">
           <p className="display text-2xl text-white tracking-widest glow-emerald">
             TRAJECTORY MASTERY
           </p>
         </div>
      </motion.div>
    </div>
  );
}
