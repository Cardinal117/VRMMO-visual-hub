import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crosshair, Grip, MoveRight, Eye, Play, ArrowDownCircle } from 'lucide-react';

const steps = [
  { icon: Grip, title: "Choose Quiver", desc: "Select ammunition type from varied hip/back quivers." },
  { icon: MoveRight, title: "Nock & Draw", desc: "Draw back the string with selected stance/form." },
  { icon: Eye, title: "Range Vision", desc: "Preview Trajectory Sight (Archer's Thread)." },
  { icon: Play, title: "Release", desc: "Loose the projectile perfectly on the predicted path." },
  { icon: ArrowDownCircle, title: "Ammo Remains", desc: "World-persistence for utility and delayed recall." },
];

export default function RangedIntroSlide() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-6xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h1 className="display text-5xl md:text-7xl tracking-widest text-glow mb-2 text-emerald-400">
          APEX
        </h1>
        <h2 className="text-xl text-emerald-400/80 tracking-[0.2em] uppercase font-light serif border-b border-emerald-500/20 pb-4 inline-block">
          Trajectory Mastery
        </h2>
        <p className="max-w-2xl mx-auto mt-6 text-white/70 serif italic">
          Archers and crossbow users choose quivers, nock arrows, select draw forms, preview shot paths, loose projectiles, and later recall ammo through a crystal.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row w-full gap-12 items-center justify-between">
        {/* Visual Animation Box */}
        <div className="flex-1 w-full h-[380px] relative flex items-center justify-center border border-emerald-500/20 panel-emerald rounded-sm overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            
            {activeStep === 0 && (
              <motion.div key="step0" className="flex flex-col items-center gap-4">
                 <div className="flex gap-4">
                    <div className="w-12 h-32 border-2 border-emerald-500/40 rounded-t-sm rounded-b-3xl flex justify-center pt-2 bg-black/40"><div className="w-1 h-20 bg-emerald-500/60" /></div>
                    <div className="w-12 h-32 border-2 border-orange-500/40 rounded-t-sm rounded-b-3xl flex justify-center pt-2 bg-black/40"><div className="w-1 h-20 bg-orange-500/60" /></div>
                    <div className="w-12 h-32 border-2 border-blue-500/40 rounded-t-sm rounded-b-3xl flex justify-center pt-2 bg-black/40"><div className="w-1 h-20 bg-blue-500/60" /></div>
                 </div>
                 <span className="font-mono text-[10px] uppercase text-emerald-500/80 tracking-widest">Select Quiver</span>
              </motion.div>
            )}

            {activeStep === 1 && (
              <motion.div key="step1" className="relative flex items-center justify-center w-full h-full">
                 <motion.div initial={{ width: 100 }} animate={{ width: 150 }} transition={{ duration: 1.5, ease: "easeOut" }} className="h-64 border-r-2 border-white/40 absolute rounded-[50%]" />
                 <motion.div initial={{ x: 20 }} animate={{ x: -60 }} transition={{ duration: 1.5, ease: "easeOut" }} className="w-40 h-1 bg-white/80 absolute z-10">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-l-[12px] border-l-emerald-400" />
                 </motion.div>
                 <motion.div initial={{ x: 50, scaleY: 1 }} animate={{ x: -60, scaleY: 0.5 }} transition={{ duration: 1.5, ease: "easeOut" }} className="absolute h-64 border-l border-white/20" />
              </motion.div>
            )}

            {activeStep === 2 && (
              <motion.div key="step2" className="relative flex items-center justify-center w-full h-full">
                 <div className="w-40 h-1 bg-white/80 absolute z-10 -translate-x-[60px] opacity-20">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-l-[12px] border-l-emerald-400" />
                 </div>
                 {/* Trajectory preview */}
                 <motion.svg className="absolute w-full h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                   <motion.path 
                     d="M 150 190 Q 300 130 450 250" 
                     fill="transparent" 
                     stroke="rgba(52,211,153,0.5)" 
                     strokeWidth="2"
                     strokeDasharray="4 4"
                     initial={{ pathLength: 0 }}
                     animate={{ pathLength: 1 }}
                     transition={{ duration: 1.5, ease: "easeOut" }}
                   />
                 </motion.svg>
                 <span className="font-mono text-emerald-400 text-[10px] uppercase font-bold absolute bottom-8 tracking-widest glow-emerald">Archer's Thread Active</span>
              </motion.div>
            )}

            {activeStep === 3 && (
              <motion.div key="step3" className="relative flex items-center justify-center w-full h-full">
                 <motion.div initial={{ x: -100 }} animate={{ x: 400 }} transition={{ duration: 0.4, ease: "easeIn" }} className="w-32 h-1 bg-emerald-400 absolute z-10 blur-[1px] shadow-[0_0_10px_rgba(52,211,153,0.8)]">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-l-[12px] border-l-white" />
                 </motion.div>
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.5 }} className="w-20 h-32 border-l-2 border-white/20 absolute -translate-x-[80px] rounded-[50%]" />
              </motion.div>
            )}

            {activeStep === 4 && (
              <motion.div key="step4" className="relative flex items-center justify-center w-full h-full">
                 <motion.div className="w-2 h-16 bg-white/20 absolute -bottom-4 right-1/4 -rotate-12 border-l border-emerald-500/50" />
                 <motion.div className="w-2 h-16 bg-white/20 absolute top-1/4 right-1/3 rotate-45 border-l border-emerald-500/50" />
                 
                 <motion.div 
                   animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="absolute left-1/4 top-1/3 w-8 h-8 rounded-full border border-emerald-400/50 flex flex-col items-center justify-center group"
                 >
                   <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                   <span className="absolute -bottom-6 font-mono text-[8px] text-emerald-400/80 uppercase">Recall Crystal</span>
                 </motion.div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Steps List */}
        <div className="flex-1 space-y-3">
          {steps.map((step, idx) => {
            const isActive = idx === activeStep;
            const isPassed = idx < activeStep;
            const Icon = step.icon;

            return (
              <div 
                key={idx} 
                className={`flex items-center gap-4 transition-all duration-300 ${
                  isActive ? 'opacity-100 scale-105 ml-4' : isPassed ? 'opacity-50' : 'opacity-20'
                }`}
              >
                <div className={`p-3 rounded-sm border ${isActive ? 'bg-emerald-500/10 border-emerald-400 text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.3)]' : 'bg-black/40 border-emerald-500/20 text-white/40'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`display text-md ${isActive ? 'text-emerald-400 glow-emerald' : 'text-white/60'}`}>
                    {step.title}
                  </h4>
                  {isActive && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-[13px] text-white/80 mt-1 serif italic"
                    >
                      {step.desc}
                    </motion.p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
