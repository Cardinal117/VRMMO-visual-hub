import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeftToLine } from 'lucide-react';

export default function SceneRecall() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => (s + 1) % 2);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="display text-3xl text-emerald-400 mb-4 tracking-[0.2em] glow-emerald"
      >
        Tactical Recall
      </motion.h2>
      <p className="text-white/50 serif italic mb-12">Arrows remain in the world. Recall timing is life.</p>

      <div className="w-full max-w-4xl h-[300px] relative bg-black/40 border border-emerald-500/20 rounded-sm flex items-center justify-center overflow-hidden p-8">
        
        {/* Crystal */}
        <div className="absolute left-16 top-1/2 -translate-y-1/2 w-16 h-24 border border-emerald-500/40 bg-emerald-900/20 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(52,211,153,0.1)] z-20">
           <ArrowLeftToLine className="text-emerald-400 opacity-50" />
        </div>

        <AnimatePresence mode="wait">
          {step === 0 ? (
            <motion.div key="scattered" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
               <div className="absolute top-1/4 right-1/4 text-[10px] font-mono text-emerald-400/50 uppercase">Embedded Arrow</div>
               <div className="absolute w-12 h-0.5 bg-white/60 rotate-45 top-1/4 right-32" />
               
               <div className="absolute bottom-1/4 right-1/3 text-[10px] font-mono text-emerald-400/50 uppercase">Embedded Arrow</div>
               <div className="absolute w-12 h-0.5 bg-white/60 -rotate-12 bottom-1/4 right-48" />
            </motion.div>
          ) : (
            <motion.div key="recall" className="absolute inset-0 z-10">
               {/* Recall Lines */}
               <motion.div 
                 initial={{ width: 0, opacity: 1 }} animate={{ width: 400, opacity: 0 }} transition={{ duration: 0.8 }}
                 className="absolute top-1/4 right-32 h-px bg-emerald-400 origin-right shadow-[0_0_10px_rgba(52,211,153,1)] rotate-[15deg]"
               />
               <motion.div 
                 initial={{ width: 0, opacity: 1 }} animate={{ width: 300, opacity: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                 className="absolute bottom-1/4 right-48 h-px bg-emerald-400 origin-right shadow-[0_0_10px_rgba(52,211,153,1)] rotate-[-10deg]"
               />

               <div className="absolute right-16 top-8 font-mono text-[10px] uppercase tracking-widest text-emerald-400 glow-emerald">
                 Violent Recall
               </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
