import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sword } from 'lucide-react';

export default function SceneCombat() {
  const [step, setStep] = useState(0);
  
  const sequence = [
    "High Guard recognized",
    "Blue-white charge",
    "Downward slash released",
    "Overhead Slash executes",
    "Transition to Side Guard",
    "Chained stance recognized",
    "Release sweeping cut"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => (s + 1) % sequence.length);
    }, 1400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="display text-3xl text-gold mb-8 tracking-[0.2em] glow-amber"
      >
        Combat Sequence
      </motion.h2>

      <div className="w-full max-w-4xl h-[400px] panel-gold bg-black/40 border border-gold/20 rounded-sm relative overflow-hidden flex items-center justify-center">
        
        {/* Dynamic Log */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-20 pointer-events-none">
          {sequence.map((text, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, x: -10 }}
               animate={{ 
                 opacity: i <= step ? (i === step ? 1 : 0.4) : 0,
                 x: i <= step ? 0 : -10
               }}
               className={`font-mono text-[10px] tracking-widest uppercase ${i === step ? 'text-gold' : 'text-white/50'}`}
             >
               {text}
             </motion.div>
          ))}
        </div>

        {/* Animation Display */}
        <AnimatePresence mode="wait">
          <motion.div className="relative text-white flex items-center justify-center w-full h-full">
            <motion.div
              animate={{
                rotate: step < 2 ? -45 : // high guard
                        step < 4 ? 135 : // downward slash
                        step < 6 ? 90 : // side
                        0, // sweeping
                x: step < 2 ? -20 :
                   step < 4 ? 60 :
                   step < 6 ? -60 :
                   80,
                y: step < 2 ? -60 :
                   step < 4 ? 60 :
                   step < 6 ? 20 :
                   0
              }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
              className="absolute z-10"
            >
              <div className="relative">
                 <motion.div
                   animate={{
                     opacity: (step === 1 || step === 5) ? 1 : 0,
                     scale: step === 1 ? [1, 1.2, 1] : 1
                   }}
                   transition={{ repeat: Infinity, duration: 1 }}
                   className="absolute inset-0 bg-blue-300 blur-xl rounded-full"
                 />
                 <Sword className="w-24 h-24 transform -rotate-45" />
              </div>
            </motion.div>

            <AnimatePresence>
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 300 }} exit={{ opacity: 0 }}
                  className="absolute z-0 w-8 bg-gradient-to-b from-white via-blue-400 to-transparent blur-sm rounded-full transform translate-x-12"
                />
              )}
              {step === 6 && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 400 }} exit={{ opacity: 0 }}
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
