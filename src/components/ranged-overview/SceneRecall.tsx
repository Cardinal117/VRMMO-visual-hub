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
               <div className="absolute top-1/4 right-32 font-mono text-[10px] uppercase tracking-widest text-emerald-400 glow-emerald">
                 Scatter Recall
               </div>
               
               {/* Shrapnel Particles */}
               {[...Array(6)].map((_, i) => (
                 <motion.div
                   key={`particle-${i}`}
                   initial={{ x: 200, y: 0, opacity: 0, scale: 0 }}
                   animate={{ 
                     x: [200, 200, 0, -150, -150], 
                     y: [0, 0, (Math.random() - 0.5) * 100, 0, 0],
                     opacity: [0, 0, 1, 1, 0],
                     scale: [0, 0, Math.random() * 1.5 + 0.5, 0.5, 0]
                   }}
                   transition={{ times: [0, 0.2, 0.6, 0.9, 0.95], duration: 2, repeat: Infinity }}
                   className="absolute left-1/2 top-1/2 w-3 h-1 bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399] z-20"
                 />
               ))}

               {/* 3 Shrapnel Arrows */}
               {[-40, 0, 40].map((yOffset, i) => (
                 <motion.div
                   key={`shrapnel-${i}`}
                   initial={{ x: 200, y: 0, opacity: 0 }}
                   animate={{ 
                     x: [200, 200, 0, -150, -150],
                     y:  [0, 0, yOffset, 0, 0],
                     rotateZ: [-90, -90, -90 + (yOffset/2), -90, -90],
                     opacity: [0, 0, 1, 1, 0],
                     scale: [0, 0, 0.7, 0.7, 0]
                   }}
                   transition={{ times: [0, 0.2, 0.6, 0.9, 0.95], duration: 2, repeat: Infinity }}
                   className="absolute left-1/2 top-1/2 drop-shadow-[0_0_10px_rgba(52,211,153,1)] z-10 mix-blend-screen"
                 >
                   <div className="relative w-2 h-12 shadow-[0_0_8px_rgba(255,255,255,0.5)] bg-gradient-to-b from-gray-300 to-gray-500 rounded-sm">
                     <div className="absolute -top-2 left-1/2 -ml-[3px] w-1.5 h-3 rounded-t-sm bg-emerald-300" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} />
                   </div>
                 </motion.div>
               ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
