import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crosshair, ArrowRight, ArrowLeft } from 'lucide-react';

export default function SceneFlow() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 6);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="display text-3xl text-emerald-400 mb-12 tracking-[0.2em] glow-emerald"
      >
        Core Loop
      </motion.h2>

      <div className="w-full max-w-2xl h-[350px] relative flex flex-col items-center justify-center bg-black/40 border border-emerald-500/20 rounded-sm overflow-hidden mb-8">
        
        <AnimatePresence mode="wait">
          {/* 0: Quiver/Nock */}
          {step === 0 && (
            <motion.div key="s0" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex flex-col items-center">
               <div className="w-16 h-24 border-2 border-dashed border-emerald-500/30 rounded-t-sm flex items-end justify-center pb-2">
                 <div className="w-1 h-12 bg-white/70 rounded-full" />
               </div>
               <div className="mt-4 font-mono text-[10px] text-emerald-400 uppercase tracking-widest text-center">
                 1. Choose Quiver <br/> 2. Nock Arrow
               </div>
            </motion.div>
          )}

          {/* 1: Draw & Preview */}
          {step === 1 && (
            <motion.div key="s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative flex flex-col items-center w-full">
               <div className="relative w-64 h-32 flex items-center justify-center">
                 <svg className="absolute inset-0 w-full h-full"><path d="M 32 64 Q 128 32 224 64" fill="none" stroke="rgba(52,211,153,0.5)" strokeWidth="1" strokeDasharray="4 4" /></svg>
                 <Crosshair className="w-12 h-12 text-emerald-400 opacity-60 absolute right-8" />
                 <div className="w-16 h-1 bg-white shadow-[0_0_10px_rgba(255,255,255,1)] absolute left-8" />
               </div>
               <div className="font-mono text-[10px] text-emerald-300 uppercase tracking-widest bg-emerald-500/10 px-4 py-2 border border-emerald-500/30 rounded-sm mt-4">
                 3. Draw Form & 4. Path Preview
               </div>
            </motion.div>
          )}

          {/* 2: Release */}
          {step === 2 && (
            <motion.div key="s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative flex items-center w-full h-full justify-center">
               <motion.div 
                 initial={{ x: -100 }} animate={{ x: 200 }} transition={{ duration: 0.3 }}
                 className="w-16 h-1 bg-white shadow-[0_0_15px_rgba(255,255,255,1)] rounded-full relative"
               >
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-400 blur-sm rounded-full" />
               </motion.div>
               <div className="absolute bottom-12 font-mono text-[10px] text-white uppercase tracking-widest">
                 5. Release
               </div>
            </motion.div>
          )}

          {/* 3: Land & Remain */}
          {step === 3 && (
            <motion.div key="s3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative flex flex-col items-center justify-center w-full h-full">
               <div className="w-full flex items-center justify-center relative">
                 <div className="w-1 bg-emerald-500/30 h-32 absolute right-32 rotate-12" />
                 <div className="w-16 h-1 bg-white/60 shadow-[0_0_5px_rgba(255,255,255,0.4)] relative right-16 rotate-12" />
               </div>
               <div className="absolute bottom-12 font-mono text-[10px] text-white/50 uppercase tracking-widest">
                 6. Arrow Remains In World
               </div>
            </motion.div>
          )}

          {/* 4: Recall */}
          {step === 4 && (
            <motion.div key="s4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative flex items-center justify-center w-full h-full">
               <motion.div 
                 initial={{ width: 0, opacity: 1 }} animate={{ width: 250, opacity: 0 }} transition={{ duration: 0.5 }}
                 className="h-px bg-emerald-400 absolute right-32 rotate-12 origin-right shadow-[0_0_10px_rgba(52,211,153,1)]"
               />
               <motion.div 
                 initial={{ x: 100 }} animate={{ x: -100 }} transition={{ duration: 0.3 }}
                 className="w-16 h-1 bg-emerald-200 shadow-[0_0_15px_rgba(110,231,183,1)] rounded-full rotate-12"
               />
               <div className="absolute bottom-12 font-mono text-[10px] text-emerald-400 uppercase tracking-widest glow-emerald">
                 7. Recall Through Crystal
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex gap-4 font-mono text-[9px] uppercase tracking-widest text-emerald-500/40">
        <span className={step === 0 ? 'text-emerald-400 glow-emerald' : ''}>Quiver</span>
        <span>→</span>
        <span className={step === 1 ? 'text-emerald-400 glow-emerald' : ''}>Draw & Preview</span>
        <span>→</span>
        <span className={step === 2 ? 'text-emerald-400 glow-emerald' : ''}>Release</span>
        <span>→</span>
        <span className={step === 3 ? 'text-emerald-400 glow-emerald' : ''}>Remain</span>
        <span>→</span>
        <span className={step === 4 ? 'text-emerald-400 glow-emerald' : ''}>Recall</span>
      </div>
    </div>
  );
}
