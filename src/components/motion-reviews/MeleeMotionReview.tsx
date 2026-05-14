import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sword } from 'lucide-react';

export default function MeleeMotionReview() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // 0: High Guard Lock, 1: High Strike, 2: Low Guard Lock, 3: Sweeping Cut
    const timer = setInterval(() => {
      setStep((s) => (s + 1) % 4);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-64 h-64 bg-[#0a0500] rounded-lg border border-gold/30 hover:border-gold/50 transition-colors overflow-hidden relative flex flex-col items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.1)]">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#2a1a00_0%,_#0a0500_100%)] pointer-events-none" />

      <AnimatePresence>
        {step === 0 && (
          <motion.div
            key="high-guard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col items-center justify-center z-10"
          >
            <motion.div 
               animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} 
               transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
               className="absolute w-24 h-24 bg-gold/30 blur-xl rounded-full" 
            />
            <Sword className="w-12 h-12 transform -rotate-[45deg] text-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.8)] z-10" />
            <div className="absolute -top-4 font-mono text-[9px] text-gold uppercase tracking-widest bg-gold/10 px-2 py-1 rounded-sm border border-gold/30">HIGH GUARD</div>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="high-strike"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col items-center justify-center z-10"
          >
            <motion.div 
              initial={{ rotate: -45, y: -20, x: -20 }}
              animate={{ rotate: 90, y: 20, x: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="z-20 absolute"
            >
              <Sword className="w-12 h-12 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            </motion.div>
            <svg className="absolute inset-0 w-full h-full overflow-visible z-10" viewBox="0 0 256 256">
               <motion.path 
                 d="M 90 90 Q 200 90 180 180"
                 fill="none"
                 stroke="url(#orange-grad)"
                 strokeWidth="16"
                 strokeLinecap="round"
                 initial={{ pathLength: 0, opacity: 0 }}
                 animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                 transition={{ duration: 0.4, ease: "easeOut" }}
                 className="drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]"
               />
               <defs>
                 <linearGradient id="orange-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                   <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                   <stop offset="50%" stopColor="#fb923c" />
                   <stop offset="100%" stopColor="#fff" />
                 </linearGradient>
               </defs>
            </svg>
            <div className="absolute font-mono text-[9px] text-white uppercase tracking-widest drop-shadow-[0_0_5px_#d4af37] mt-32">OVERHEAD SLASH</div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="low-guard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col items-center justify-center z-10"
          >
            <motion.div 
               animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }} 
               transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
               className="absolute w-24 h-24 bg-cyan-500/30 blur-xl rounded-full translate-y-8 translate-x-4" 
            />
            <Sword className="w-12 h-12 transform rotate-[135deg] text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] z-10 translate-y-4 translate-x-2" />
            <div className="absolute bottom-6 font-mono text-[9px] text-cyan-300 uppercase tracking-widest bg-cyan-500/10 px-2 py-1 rounded-sm border border-cyan-500/30">LOW GUARD</div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="low-sweep"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col items-center justify-center z-10"
          >
            <motion.div 
              initial={{ x: -20, y: 30, rotate: 135 }}
              animate={{ x: 20, y: -10, rotate: 45 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="z-20 absolute"
            >
              <Sword className="w-12 h-12 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            </motion.div>
            <svg className="absolute inset-0 w-full h-full overflow-visible z-10" viewBox="0 0 256 256">
               <motion.path 
                 d="M 90 180 Q 80 100 180 110"
                 fill="none"
                 stroke="url(#cyan-grad)"
                 strokeWidth="16"
                 strokeLinecap="round"
                 initial={{ pathLength: 0, opacity: 0 }}
                 animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                 transition={{ duration: 0.4, ease: "easeOut" }}
                 className="drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
               />
               <defs>
                 <linearGradient id="cyan-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                   <stop offset="50%" stopColor="#22d3ee" />
                   <stop offset="100%" stopColor="#fff" />
                 </linearGradient>
               </defs>
            </svg>
            <div className="absolute font-mono text-[9px] text-white uppercase tracking-widest drop-shadow-[0_0_5px_#22d3ee] mt-32">RISING SWEEP</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
