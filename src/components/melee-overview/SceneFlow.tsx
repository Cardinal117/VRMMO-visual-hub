import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sword } from 'lucide-react';

export default function SceneFlow() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="display text-3xl text-gold mb-12 tracking-[0.2em] glow-amber"
      >
        Core Physical Flow
      </motion.h2>

      <div className="w-full max-w-2xl h-[350px] relative flex flex-col items-center justify-center panel-gold bg-black/40 border border-gold/20 rounded-sm overflow-hidden mb-8">
        
        <AnimatePresence mode="wait">
          {/* 0: Hold Weapon */}
          {step === 0 && (
            <motion.div 
              key="s0"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="flex items-center text-white/50"
            >
               <Sword className="w-16 h-16 transform -rotate-45" />
            </motion.div>
          )}

          {/* 1: Stance Recognized */}
          {step === 1 && (
            <motion.div 
              key="s1"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="relative"
            >
               <motion.div 
                 animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} 
                 transition={{ repeat: Infinity, duration: 1 }}
                 className="absolute inset-0 bg-gold/30 blur-xl rounded-full" 
               />
               <Sword className="w-16 h-16 transform -rotate-45 text-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
               <div className="absolute -top-12 left-1/2 -translate-x-1/2 font-mono text-[10px] text-gold uppercase tracking-widest bg-gold/10 px-2 py-1 rounded-sm border border-gold/30">High Guard Locked</div>
            </motion.div>
          )}

          {/* 2: Charge Builds */}
          {step === 2 && (
            <motion.div 
              key="s2"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="relative"
            >
               <motion.div 
                 animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0.2, 0.8] }} 
                 transition={{ repeat: Infinity, duration: 0.5 }}
                 className="absolute inset-0 bg-blue-400 blur-xl rounded-full" 
               />
               <Sword className="w-16 h-16 transform -rotate-45 text-white drop-shadow-[0_0_15px_rgba(255,255,255,1)]" />
               <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] text-blue-300 uppercase tracking-widest">Charging...</div>
            </motion.div>
          )}

          {/* 3: Release Motion */}
          {step === 3 && (
            <motion.div 
              key="s3"
              initial={{ opacity: 0, rotate: -45, y: -20, x: -20 }} 
              animate={{ opacity: 1, rotate: 135, y: 20, x: 20 }} 
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute text-white"
            >
               <Sword className="w-16 h-16" />
               <div className="absolute -top-4 -left-4 w-24 h-24 border-r-4 border-b-4 border-white/40 rounded-full blur-[2px]" />
            </motion.div>
          )}

          {/* 4: Skill Executes */}
          {step === 4 && (
            <motion.div 
              key="s4"
              initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              className="relative text-white"
            >
               <motion.div 
                 initial={{ height: 0 }} animate={{ height: 200 }} 
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 bg-gradient-to-b from-white via-blue-400 to-transparent blur-[2px] rounded-full" 
               />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[12px] text-white uppercase tracking-widest font-bold whitespace-nowrap glow-blue text-center mt-24">
                 Overhead Slash
               </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      <div className="flex gap-4 font-mono text-[9px] uppercase tracking-widest text-gold/40">
        <span className={step === 0 ? 'text-gold glow-amber' : ''}>1. Hold</span>
        <span>→</span>
        <span className={step === 1 ? 'text-gold glow-amber' : ''}>2. Stance</span>
        <span>→</span>
        <span className={step === 2 ? 'text-gold glow-amber' : ''}>3. Charge</span>
        <span>→</span>
        <span className={step === 3 ? 'text-gold glow-amber' : ''}>4. Release</span>
        <span>→</span>
        <span className={step === 4 ? 'text-gold glow-amber' : ''}>5. Execute</span>
      </div>
    </div>
  );
}
