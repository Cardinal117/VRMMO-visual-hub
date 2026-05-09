import React from 'react';
import { motion } from 'motion/react';
import { Book, Wand2, Mic } from 'lucide-react';

export default function SceneClosing() {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-4xl space-y-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="display text-4xl md:text-5xl tracking-[0.2em] glow-blue mb-4 text-blue-400">
          THE SCHOLAR's EDGE
        </h2>
        <div className="h-px w-64 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-auto my-6" />
        <p className="text-xl text-white/80 max-w-3xl mx-auto serif italic leading-relaxed">
          The magic class is about physically handling knowledge under pressure. 
          A skilled mage prepares through study, reacts through fast grimoire selection, and expresses mastery through delivery tools, spellstones, and optional incantations.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full flex justify-center gap-8 mt-8"
      >
         <div className="flex flex-col items-center gap-2">
           <div className="p-4 border border-blue-500/30 rounded-full panel-blue">
             <Book className="w-6 h-6 text-blue-400" />
           </div>
           <span className="font-mono text-[9px] uppercase tracking-widest text-white/50">Preparation</span>
         </div>
         <div className="w-16 h-px bg-white/20 mt-7" />
         <div className="flex flex-col items-center gap-2">
           <div className="p-4 border border-blue-500/30 rounded-full panel-blue">
             <Wand2 className="w-6 h-6 text-blue-400" />
           </div>
           <span className="font-mono text-[9px] uppercase tracking-widest text-white/50">Timing</span>
         </div>
         <div className="w-16 h-px bg-white/20 mt-7" />
         <div className="flex flex-col items-center gap-2">
           <div className="p-4 border border-blue-500/30 rounded-full panel-blue">
             <Mic className="w-6 h-6 text-blue-400" />
           </div>
           <span className="font-mono text-[9px] uppercase tracking-widest text-white/50">Expression</span>
         </div>
      </motion.div>
    </div>
  );
}
