import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crosshair } from 'lucide-react';

export default function SceneDrawForms() {
  const [active, setActive] = useState(0);

  const combinations = [
    { quiver: "Back Quiver", form: "Full Draw", result: "Power Shot" },
    { quiver: "Left Quiver", form: "High Arc", result: "Smoke Volley" },
    { quiver: "Right Quiver", form: "Overdraw", result: "Dragonbone Breaker" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(s => (s + 1) % combinations.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="display text-3xl text-emerald-400 mb-4 tracking-[0.2em] glow-emerald"
      >
        Form & Fire
      </motion.h2>
      <p className="text-white/50 serif italic mb-12">Quiver choice + Physical form = Execution</p>

      <div className="w-full max-w-4xl h-[250px] relative bg-black/40 border border-emerald-500/20 rounded-sm flex items-center justify-center p-8 overflow-hidden">
        
        <AnimatePresence mode="wait">
           <motion.div
             key={active}
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -10 }}
             transition={{ duration: 0.4 }}
             className="flex flex-col items-center text-center w-full"
           >
              <div className="flex items-center justify-center gap-6 w-full font-mono uppercase tracking-widest text-xs">
                
                <div className="p-4 border border-emerald-500/30 rounded-sm bg-emerald-900/20 text-emerald-300 w-32 flex flex-col items-center shadow-[0_0_15px_rgba(52,211,153,0.1)]">
                  <span className="text-[9px] text-white/50 mb-1">Quiver</span>
                  {combinations[active].quiver}
                </div>
                
                <span className="text-white/40">+</span>
                
                <div className="p-4 border border-emerald-500/30 rounded-sm bg-emerald-900/20 text-emerald-300 w-32 flex flex-col items-center shadow-[0_0_15px_rgba(52,211,153,0.1)]">
                  <span className="text-[9px] text-white/50 mb-1">Draw Form</span>
                  {combinations[active].form}
                </div>

                <span className="text-emerald-400">=</span>
                
                <div className="p-4 border border-emerald-400 rounded-sm bg-emerald-900/40 text-white w-48 flex flex-col items-center shadow-[0_0_20px_rgba(52,211,153,0.3)] glow-emerald relative overflow-hidden">
                  <div className="absolute inset-0 bg-emerald-400/10 animate-pulse" />
                  <span className="text-[9px] text-emerald-400 mb-1 relative z-10">Result</span>
                  <span className="relative z-10 font-bold">{combinations[active].result}</span>
                </div>

              </div>
           </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}
