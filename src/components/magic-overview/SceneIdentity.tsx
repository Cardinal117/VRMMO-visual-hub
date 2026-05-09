import React from 'react';
import { motion } from 'motion/react';
import { Book, Wand2 } from 'lucide-react';

export default function SceneIdentity() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-12"
      >
        <h1 className="display text-5xl md:text-7xl tracking-widest text-glow mb-4 text-blue-400">
          AETHERIUM
        </h1>
        <h2 className="text-xl text-blue-400/80 tracking-[0.2em] uppercase font-light serif border-b border-blue-500/20 pb-4 inline-block">
          Arcane Showcase
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
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-24 h-32 border border-blue-500/30 rounded-sm panel-blue bg-black/60 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.15)] relative overflow-hidden"
            >
              <div className="absolute left-2 top-0 bottom-0 w-1 bg-blue-500/20" />
              <Book className="w-8 h-8 text-blue-400/80" />
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="w-4 h-40 bg-gradient-to-b from-blue-400 to-transparent rounded-full flex flex-col items-center"
            >
               <Wand2 className="w-8 h-8 text-white -mt-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            </motion.div>
         </div>

         <div className="mt-8">
           <p className="display text-2xl text-white tracking-widest glow-blue">
             MAGIC IS RITUAL, SELECTION, AND DELIVERY.
           </p>
         </div>
      </motion.div>
    </div>
  );
}
