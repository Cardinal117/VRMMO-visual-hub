import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book, Hexagon, Wand2, Mic } from 'lucide-react';

export default function SceneStudy() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => (s + 1) % 6);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="display text-3xl text-blue-400 mb-4 tracking-[0.2em] glow-blue"
      >
        Study Casting
      </motion.h2>
      <p className="text-white/50 serif italic mb-12">Slow. Deliberate. Scholarly.</p>

      <div className="relative w-full max-w-2xl h-[300px] panel-blue bg-black/40 border border-blue-500/20 rounded-sm flex items-center justify-center overflow-hidden">
        
        {/* Grimoire Open */}
        <AnimatePresence>
          {step >= 0 && (
            <motion.div 
               initial={{ rotateX: 90, opacity: 0 }} 
               animate={{ rotateX: 0, opacity: 1 }} 
               className="absolute flex gap-1 z-10"
            >
               <div className="w-32 h-48 bg-[#111] border border-blue-500/30 rounded-l-sm" />
               <div className="w-32 h-48 bg-[#111] border border-blue-500/30 rounded-r-sm relative flex items-center justify-center">
                 {/* Spell Symbol */}
                 <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: step >= 2 ? 1 : 0 }}
                   className="absolute text-blue-400"
                 >
                   <Hexagon className="w-12 h-12" />
                 </motion.div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Wand Hover */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ x: 100, y: -50, opacity: 0 }}
              animate={{ x: 30, y: 0, opacity: 1 }}
              className="absolute z-20 text-white"
            >
              <Wand2 className="w-10 h-10 -rotate-45 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Optional Voice */}
        <AnimatePresence>
          {step >= 4 && (
             <motion.div
               initial={{ opacity: 0, scale: 0 }}
               animate={{ opacity: 1, scale: 1 }}
               className="absolute z-30 flex items-center justify-center mr-32 mb-32"
             >
                <div className="p-2 border border-blue-300 rounded-full bg-blue-500/20 text-blue-300 shadow-[0_0_20px_rgba(96,165,250,0.5)]">
                  <Mic className="w-4 h-4" />
                </div>
             </motion.div>
          )}
        </AnimatePresence>

        {/* Spell Cast Effect */}
        <AnimatePresence>
          {step === 5 && (
             <motion.div
               initial={{ scale: 0, opacity: 1 }}
               animate={{ scale: 4, opacity: 0 }}
               transition={{ duration: 1 }}
               className="absolute z-0 w-32 h-32 rounded-full border border-blue-400 bg-blue-500/20"
             />
          )}
        </AnimatePresence>

      </div>

      <div className="flex gap-4 mt-8 font-mono text-[9px] uppercase tracking-widest text-blue-300/50">
        <span className={step === 0 ? 'text-blue-400 glow-blue' : ''}>1. Open</span>
        <span>→</span>
        <span className={step === 1 ? 'text-blue-400 glow-blue' : ''}>2. Pages Turn</span>
        <span>→</span>
        <span className={step === 2 ? 'text-blue-400 glow-blue' : ''}>3. Diagrams Appear</span>
        <span>→</span>
        <span className={step === 3 ? 'text-blue-400 glow-blue' : ''}>4. Select</span>
        <span>→</span>
        <span className={step === 4 ? 'text-blue-400 glow-blue' : ''}>5. Incant (Opt)</span>
        <span>→</span>
        <span className={step === 5 ? 'text-blue-400 glow-blue' : ''}>6. Release</span>
      </div>
    </div>
  );
}
