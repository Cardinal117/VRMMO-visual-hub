import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function RangedMotionReview() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // 0: Arrow Bends, 1: Impact, 2: Recall
    const timer = setInterval(() => {
      setStep((s) => (s + 1) % 3);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-64 h-64 bg-[#0a1510] rounded-lg border border-emerald-500/30 overflow-hidden relative flex flex-col items-center justify-center shadow-[0_0_15px_rgba(52,211,153,0.1)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0f251c_0%,_#050a08_100%)] pointer-events-none" />

      <AnimatePresence>
        {step === 0 && (
          <motion.div
            key="bends"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center -translate-y-4"
          >
            {/* Obstacle */}
            <div className="absolute top-1/2 left-1/2 -mt-4 -ml-2 w-4 h-24 bg-emerald-900 border border-emerald-500/50 rounded-sm" />
            
            <svg className="absolute w-full h-full overflow-visible pointer-events-none z-0" viewBox="0 0 256 256">
              <motion.path
                d="M 30 180 Q 128 50 226 180"
                fill="none"
                stroke="rgba(52,211,153,0.4)"
                strokeWidth="2"
                strokeDasharray="8 8"
                animate={{ strokeDashoffset: [0, -16] }}
                transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
              />
            </svg>

            <motion.div 
               animate={{ 
                 x: [-100, 0, 100], 
                 y: [52, -50, 52],
                 rotate: [-45, 0, 45]
               }}
               transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
               className="absolute top-1/2 left-1/2 -mt-1 -ml-6 w-12 h-2 flex items-center shadow-[0_0_10px_#34d399] z-10"
            >
              {/* Feathers */}
              <div className="w-2 h-3 bg-emerald-400 absolute left-0" style={{ clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)' }} />
              {/* Shaft */}
              <div className="w-10 h-[2px] bg-emerald-200 ml-1" />
              {/* Head */}
              <div className="w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-white absolute right-[-4px]" />
            </motion.div>
            
            <div className="font-mono text-[10px] text-emerald-400 absolute bottom-8 tracking-widest glow-emerald">CURVED FLIGHT</div>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="lands"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center z-10"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: [ -100, 40 ], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.5, ease: "easeOut", repeat: Infinity, repeatDelay: 0.5 }}
                className="absolute w-40 h-1 bg-gradient-to-r from-transparent via-emerald-300 to-white shadow-[0_0_15px_rgba(255,255,255,1)] z-20"
              />
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 2, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                className="absolute right-8 w-24 h-24 border-4 border-emerald-400 rounded-full z-10 shadow-[0_0_15px_#34d399]"
              />
              <div className="absolute right-8 w-1 h-32 bg-emerald-900 border-l border-emerald-500/50" />
            </div>
            <div className="font-mono text-[10px] text-emerald-300 absolute bottom-4 tracking-widest glow-emerald">TARGET IMPACT</div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="recall"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center z-10"
          >
             <div className="relative w-full h-full flex items-center justify-center">
               <div className="absolute left-6 w-2 h-20 bg-emerald-900 border border-emerald-500/50 rounded-sm" />
               
               {[...Array(6)].map((_, i) => (
                 <motion.div
                   key={`particle-${i}`}
                   initial={{ x: 100, y: 0, opacity: 0, scale: 0 }}
                   animate={{ 
                     x: [80, 80, -20, -100, -100], 
                     y: [0, 0, (Math.random() - 0.5) * 80, 0, 0],
                     opacity: [0, 0, 1, 1, 0],
                     scale: [0, 0, Math.random() * 1.5 + 0.5, 0.5, 0]
                   }}
                   transition={{ times: [0, 0.2, 0.6, 0.9, 0.95], duration: 1.8, repeat: Infinity }}
                   className="absolute left-1/2 top-1/2 w-3 h-1 bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399] z-20"
                 />
               ))}

               {[-30, 0, 30].map((yOffset, i) => (
                 <motion.div
                   key={`shrapnel-${i}`}
                   initial={{ x: 100, y: 0, opacity: 0 }}
                   animate={{ 
                     x: [80, 80, -20, -100, -100],
                     y:  [0, 0, yOffset, 0, 0],
                     rotateZ: [-90, -90, -90 + (yOffset/2), -90, -90],
                     opacity: [0, 0, 1, 1, 0],
                     scale: [0, 0, 0.8, 0.7, 0]
                   }}
                   transition={{ times: [0, 0.2, 0.6, 0.9, 0.95], duration: 1.8, repeat: Infinity }}
                   className="absolute left-1/2 top-1/2 drop-shadow-[0_0_10px_rgba(52,211,153,1)] z-10 mix-blend-screen"
                 >
                   <div className="relative w-1.5 h-10 shadow-[0_0_8px_rgba(255,255,255,0.5)] bg-gradient-to-b from-gray-300 to-gray-500 rounded-sm">
                     <div className="absolute -top-2 left-1/2 -ml-[2.5px] w-1.5 h-3 bg-emerald-300" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} />
                   </div>
                 </motion.div>
               ))}
            </div>
            <div className="font-mono text-[10px] text-emerald-400 absolute bottom-4 tracking-widest glow-emerald">SCATTER RECALL</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
