import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sword } from 'lucide-react';

export default function MeleeCombatExampleSlide() {
  const [step, setStep] = useState(0);

  const steps = [
    "Player holds a Longsword",
    "Enters High Guard",
    "System recognizes the stance",
    "Weapon gains a blue-white charge",
    "Holds briefly",
    "Releases downward slash",
    "Overhead Slash executes",
    "Transitions to Side Guard",
    "System recognizes chained stance",
    "Releases sweeping cut"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-6xl flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <h2 className="display text-4xl text-gold tracking-[0.3em] glow-amber mb-2">
          Combat Sequence
        </h2>
      </motion.div>

      <div className="w-full h-[500px] relative flex items-center justify-center panel-gold border border-gold/30 rounded-sm overflow-hidden shadow-2xl">
        
        {/* Dynamic Log */}
        <div className="absolute top-4 left-4 flex flex-col gap-1 z-20 pointer-events-none">
          {steps.map((text, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, x: -10 }}
               animate={{ 
                 opacity: i <= step ? (i === step ? 1 : 0.4) : 0,
                 x: i <= step ? 0 : -10
               }}
               className={`font-mono text-[10px] tracking-widest uppercase ${i === step ? 'text-gold' : 'text-white/50'}`}
             >
               {i + 1}. {text}
             </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* Base Animation Container */}
          <motion.div className="relative flex items-center justify-center w-full h-full text-white">
            
            {/* The Sword */}
            <motion.div
              animate={{
                rotate: step < 1 ? 0 : 
                        step < 5 ? -45 : // High Guard
                        step < 7 ? 135 : // Downward slash
                        step < 9 ? 90 : // Side Guard
                        0, // Sweeping cut
                x: step < 1 ? 0 :
                   step < 5 ? -20 :
                   step < 7 ? 60 :
                   step < 9 ? -80 :
                   100,
                y: step < 1 ? 0 :
                   step < 5 ? -80 :
                   step < 7 ? 80 :
                   step < 9 ? 20 :
                   0
              }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
              className="absolute z-10"
            >
              <div className="relative">
                 {/* Aura based on step */}
                 <motion.div
                   animate={{
                     opacity: (step >= 3 && step <= 5) || (step === 8) ? 1 : 0,
                     scale: (step === 4) ? [1, 1.2, 1] : 1
                   }}
                   transition={{ repeat: step === 4 ? Infinity : 0, duration: 1 }}
                   className="absolute inset-0 bg-blue-300 blur-xl rounded-full"
                 />
                 <Sword className="w-24 h-24 transform -rotate-45" />
              </div>
            </motion.div>

            {/* Arcs / Skill Execution VFX */}
            <AnimatePresence>
              {step === 6 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 300 }}
                  exit={{ opacity: 0 }}
                  className="absolute z-0 w-8 bg-gradient-to-b from-white via-blue-400 to-transparent blur-sm rounded-full transform translate-x-16"
                />
              )}
              {step === 9 && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 400 }}
                  exit={{ opacity: 0 }}
                  className="absolute z-0 h-8 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm rounded-full"
                />
              )}
            </AnimatePresence>

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
