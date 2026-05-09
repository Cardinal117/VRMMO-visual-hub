import React from 'react';
import { motion } from 'motion/react';
import { Sword } from 'lucide-react';

export default function SceneIdentity() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-12"
      >
        <h1 className="display text-5xl md:text-7xl tracking-widest text-glow mb-4 text-gold">
          KINESIS
        </h1>
        <h2 className="text-xl text-gold/80 tracking-[0.2em] uppercase font-light serif border-b border-gold/20 pb-4 inline-block">
          Melee Combat Showcase
        </h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex flex-col items-center gap-8 relative"
      >
         <div className="flex gap-8 items-center justify-center">
            <motion.div 
              animate={{ rotate: [-45, -30, -45], x: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
            >
              <Sword className="w-24 h-24" />
            </motion.div>
         </div>

         <div className="mt-4">
           <p className="display text-2xl text-white tracking-widest glow-amber">
             SKILLS ARE PERFORMED, NOT SELECTED.
           </p>
         </div>
      </motion.div>
    </div>
  );
}
