import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crosshair } from 'lucide-react';

export default function SceneCurves() {
  const [step, setStep] = useState(0);

  const curves = [
    { title: "Normal Aim", desc: "Straight Shot", path: "M 0 100 Q 150 100 300 100" },
    { title: "Roll Left", desc: "Curve Left", path: "M 0 100 Q 150 0 300 100" },
    { title: "Tilt Up", desc: "Lofted Curve", path: "M 0 100 Q 150 200 300 100" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => (s + 1) % curves.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="display text-3xl text-emerald-400 mb-4 tracking-[0.2em] glow-emerald"
      >
        Fate Line Bending
      </motion.h2>
      <p className="text-white/50 serif italic mb-12">Bow angle shapes the trajectory. Curves cost tension/damage.</p>

      <div className="w-full max-w-4xl h-[300px] relative bg-black/40 border border-emerald-500/20 rounded-sm flex items-center justify-center overflow-hidden">
        
        <div className="absolute left-8 top-8 font-mono text-[10px] uppercase tracking-widest flex flex-col gap-2 z-20">
           <span className="text-emerald-400">Physical Input: {curves[step].title}</span>
           <span className="text-white/60">Behavior: {curves[step].desc}</span>
        </div>

        <svg className="w-[300px] h-[200px] overflow-visible">
          <AnimatePresence mode="wait">
            <motion.path
              key={step}
              d={curves[step].path}
              fill="transparent"
              stroke="rgba(52,211,153,0.5)"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </AnimatePresence>
          
          <path d="M 0 100 Q 150 100 300 100" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          
          <Crosshair className="absolute top-1/2 -right-4 -translate-y-1/2 text-white/20 w-8 h-8" />
        </svg>

      </div>
    </div>
  );
}
