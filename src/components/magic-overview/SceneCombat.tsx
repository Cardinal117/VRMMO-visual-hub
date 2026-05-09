import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hexagon, Hand, Zap } from 'lucide-react';

export default function SceneCombat() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => (s + 1) % 5);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="display text-3xl text-orange-400 mb-4 tracking-[0.2em] glow-amber"
      >
        Combat Casting
      </motion.h2>
      <p className="text-white/50 serif italic mb-12">Fast. Spatial. Reactive.</p>

      <div className="relative w-full max-w-2xl h-[350px] panel-orange bg-black/40 border border-orange-500/20 rounded-sm flex items-center justify-center overflow-hidden">
        
        {/* Hand Throwing */}
        {step === 0 && (
          <motion.div 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            exit={{ y: -50, opacity: 0 }}
            className="absolute flex flex-col items-center z-10"
          >
             <div className="w-16 h-24 bg-[#111] border border-orange-500/50 rounded-sm shadow-[0_0_20px_rgba(249,115,22,0.4)]" />
             <div className="mt-4 text-white/50"><Hand className="w-8 h-8" /></div>
          </motion.div>
        )}

        {/* Floating Ring of Pages */}
        {(step >= 1 && step < 4) && (
          <motion.div 
             initial={{ scale: 0, opacity: 0 }}
             animate={{ scale: 1, opacity: 1, rotate: step === 1 ? 180 : 0 }}
             transition={{ duration: 0.8 }}
             className="absolute inset-0 flex items-center justify-center z-10"
          >
             {/* Runes in a circle */}
             <div className="relative w-48 h-48 border border-dashed border-orange-500/30 rounded-full animate-[spin_10s_linear_infinite]">
                <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 bg-[#111] border border-orange-500/50 w-8 h-12 flex items-center justify-center"><Hexagon className="w-4 h-4 text-orange-400" /></div>
                <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 bg-[#111] border border-orange-500/50 w-8 h-12" />
                <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 bg-[#111] border border-orange-500/50 w-8 h-12" />
                <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 bg-[#111] border border-orange-500/50 w-8 h-12" />
             </div>
          </motion.div>
        )}

        {/* Hover & Select */}
        {(step === 2 || step === 3) && (
           <motion.div
             initial={{ x: 100, y: 100, opacity: 0 }}
             animate={{ x: 0, y: -70, opacity: 1 }}
             className="absolute z-20 text-white flex flex-col items-center"
           >
             <Hand className="w-8 h-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
             {step === 2 && <span className="font-mono text-[9px] uppercase tracking-widest text-orange-400 mt-2 glow-amber">Charging...</span>}
           </motion.div>
        )}

        {/* Release & Return */}
        {step === 3 && (
           <motion.div
             initial={{ scale: 0, opacity: 1 }}
             animate={{ scale: 5, opacity: 0 }}
             transition={{ duration: 0.5 }}
             className="absolute z-0 w-32 h-32 rounded-full border-2 border-orange-400 bg-orange-500/20"
           />
        )}
        
        {step === 4 && (
           <motion.div
             initial={{ scale: 1, y: -50, opacity: 1 }}
             animate={{ scale: 0.5, y: 50, opacity: 0 }}
             transition={{ duration: 0.5 }}
             className="absolute z-10 w-16 h-24 bg-[#111] border border-orange-500/50 rounded-sm shadow-[0_0_20px_rgba(249,115,22,0.4)] flex items-center justify-center"
           >
             <span className="font-mono text-[8px] uppercase tracking-widest text-orange-400">Return</span>
           </motion.div>
        )}

      </div>

      <div className="flex gap-4 mt-8 font-mono text-[9px] uppercase tracking-widest text-orange-300/50">
        <span className={step === 0 ? 'text-orange-400 glow-amber' : ''}>1. Throw</span>
        <span>→</span>
        <span className={step === 1 ? 'text-orange-400 glow-amber' : ''}>2. Ring Expands</span>
        <span>→</span>
        <span className={step === 2 ? 'text-orange-400 glow-amber' : ''}>3. Hover & Charge</span>
        <span>→</span>
        <span className={step === 3 ? 'text-orange-400 glow-amber' : ''}>4. Release</span>
        <span>→</span>
        <span className={step === 4 ? 'text-orange-400 glow-amber' : ''}>5. Collapse</span>
      </div>
    </div>
  );
}
