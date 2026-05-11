import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crosshair, Grip, MoveRight, Eye, Play, ArrowDownCircle } from 'lucide-react';
import { QuiverVisual } from './RangedQuiverSlide';

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
              <motion.div key="step0" className="flex flex-col items-center gap-6 z-10 perspective-[1000px]">
                 <div className="flex gap-16 items-end justify-center h-48 pl-2">
                    {/* Left Utility Quiver */}
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                      <QuiverVisual type="Utility" />
                    </motion.div>

                    {/* Center Core Quiver */}
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                      <QuiverVisual type="Core" />
                    </motion.div>

                    {/* Right Heavy Quiver */}
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
                      <QuiverVisual type="Heavy" />
                    </motion.div>
                 </div>
                 <span className="font-mono text-[10px] uppercase text-emerald-400 tracking-widest bg-black/60 px-4 py-1 rounded border border-emerald-500/30 backdrop-blur-sm mt-4">
                   Ammunition & Quivers
                 </span>
              </motion.div>
            )}

            {activeStep === 1 && (
              <motion.div key="step1" className="relative flex items-center justify-center w-full h-full perspective-[1000px]">
                 {/* Bow Chassis */}
                 <div className="absolute left-1/4 h-72 flex items-center z-10 w-8 drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]">
                   <motion.div 
                     initial={{ rotateX: 60, scale: 0.8 }} 
                     animate={{ rotateX: 0, scale: 1 }} 
                     transition={{ duration: 1, type: "spring" }}
                     className="w-full h-full flex justify-center items-center"
                   >
                     {/* SVG Magic Recurve Bow */}
                     <svg className="absolute w-64 h-96 overflow-visible -left-16" viewBox="0 0 200 300">
                       {/* Magical energy string */}
                       <motion.path 
                         initial={{ d: "M 100 20 Q 100 150 100 280" }}
                         animate={{ d: "M 100 20 Q 10 150 100 280" }}
                         transition={{ duration: 1.5, ease: "easeOut" }}
                         stroke="rgba(110, 231, 183, 0.6)" strokeWidth="2" fill="none"
                         className="drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                       />
                       {/* Recurve Top Limb */}
                       <path d="M 100 20 C 130 20, 140 80, 100 130" stroke="url(#bowGrad)" strokeWidth="6" strokeLinecap="round" fill="none" />
                       {/* Recurve Bottom Limb */}
                       <path d="M 100 280 C 130 280, 140 220, 100 170" stroke="url(#bowGrad)" strokeWidth="6" strokeLinecap="round" fill="none" />
                       {/* Floating Artifact Top */}
                       <circle cx="98" cy="15" r="4" fill="#6ee7b7" className="drop-shadow-[0_0_5px_#34d399]" />
                       {/* Floating Artifact Bottom */}
                       <circle cx="98" cy="285" r="4" fill="#6ee7b7" className="drop-shadow-[0_0_5px_#34d399]" />
                       {/* Riser / Handle */}
                       <rect x="94" y="130" width="12" height="40" rx="3" fill="#1f2937" stroke="#047857" strokeWidth="2" />
                       <defs>
                         <linearGradient id="bowGrad" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="0%" stopColor="#059669" />
                           <stop offset="50%" stopColor="#064e3b" />
                           <stop offset="100%" stopColor="#059669" />
                         </linearGradient>
                       </defs>
                     </svg>

                     {/* The Arrow being drawn */}
                     <motion.div 
                       initial={{ x: 80, opacity: 0 }} 
                       animate={{ x: -20, opacity: 1 }} 
                       transition={{ duration: 1.5, ease: "easeOut" }} 
                       className="absolute flex items-center z-0 left-[-40px]"
                     >
                       {/* Arrow shaft */}
                       <div className="w-48 h-1 bg-gradient-to-r from-emerald-200 to-emerald-700 shadow-[0_0_10px_rgba(52,211,153,0.8)] flex items-center justify-between">
                         <div className="w-4 h-3 bg-white/80 rounded-l-full ml-1" /> {/* Fletching */}
                         <div className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[16px] border-l-emerald-300 filter drop-shadow-[0_0_5px_rgba(52,211,153,1)] mr-[-10px]" /> {/* Arrowhead */}
                       </div>
                     </motion.div>
                   </motion.div>
                 </div>
              </motion.div>
            )}

            {activeStep === 2 && (
              <motion.div key="step2" className="relative flex items-center justify-center w-full h-full perspective-[1000px]">
                 {/* Bow held in tension */}
                 <div className="absolute left-1/4 h-72 flex items-center drop-shadow-[0_0_10px_rgba(52,211,153,0.5)] z-10 w-8">
                   <svg className="absolute w-64 h-96 overflow-visible -left-16" viewBox="0 0 200 300">
                     <path d="M 100 20 Q -20 150 100 280" stroke="rgba(110, 231, 183, 0.6)" strokeWidth="2" fill="none" />
                     <path d="M 100 20 C 130 20, 140 80, 100 130" stroke="url(#bowGrad)" strokeWidth="6" strokeLinecap="round" fill="none" />
                     <path d="M 100 280 C 130 280, 140 220, 100 170" stroke="url(#bowGrad)" strokeWidth="6" strokeLinecap="round" fill="none" />
                     <circle cx="98" cy="15" r="4" fill="#6ee7b7" />
                     <circle cx="98" cy="285" r="4" fill="#6ee7b7" />
                     <rect x="94" y="130" width="12" height="40" rx="3" fill="#1f2937" stroke="#047857" strokeWidth="2" />
                     <defs>
                       <linearGradient id="bowGrad" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="0%" stopColor="#059669" />
                         <stop offset="50%" stopColor="#064e3b" />
                         <stop offset="100%" stopColor="#059669" />
                       </linearGradient>
                     </defs>
                   </svg>
                   {/* Drawn Arrow */}
                   <div className="absolute left-[-40px] w-48 h-1 bg-gradient-to-r from-emerald-200 to-emerald-600 filter drop-shadow-[0_0_5px_rgba(52,211,153,1)]">
                     <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[4px] border-y-transparent border-l-[16px] border-l-emerald-300" />
                   </div>
                 </div>

                 {/* Trajectory preview (Archer's Thread) */}
                 <motion.svg className="absolute w-full h-full pointer-events-none" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                   <motion.path 
                     d="M 150 190 Q 350 120 500 280" 
                     fill="transparent" 
                     stroke="rgba(52,211,153,0.8)" 
                     strokeWidth="2"
                     strokeDasharray="6 6"
                     initial={{ pathLength: 0 }}
                     animate={{ pathLength: 1 }}
                     transition={{ duration: 1.5, ease: "easeOut" }}
                     className="filter drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                   />
                 </motion.svg>
                 <motion.div 
                   initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5 }}
                   className="absolute right-[50px] bottom-[80px] w-12 h-12 border border-emerald-500 rounded-full flex items-center justify-center bg-emerald-500/10 shadow-[0_0_20px_rgba(52,211,153,0.3)]"
                 >
                   <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                   <div className="absolute w-full h-px bg-emerald-400/50" />
                   <div className="absolute w-px h-full bg-emerald-400/50" />
                 </motion.div>

                 <span className="font-mono text-emerald-400 text-xs uppercase font-bold absolute bottom-6 tracking-widest bg-black/60 px-4 py-1 rounded border border-emerald-900 backdrop-blur-sm shadow-[0_0_10px_rgba(52,211,153,0.3)] z-20">
                   Archer's Thread Simulated
                 </span>
              </motion.div>
            )}

            {activeStep === 3 && (
              <motion.div key="step3" className="relative flex items-center justify-center w-full h-full overflow-hidden perspective-[1000px]">
                 {/* Bow post-release */}
                 <div className="absolute left-1/4 h-72 flex items-center drop-shadow-[0_0_10px_rgba(52,211,153,0.5)] z-10 w-8">
                   <svg className="absolute w-64 h-96 overflow-visible -left-16" viewBox="0 0 200 300">
                     <path d="M 100 20 Q 100 150 100 280" stroke="rgba(110, 231, 183, 0.4)" strokeWidth="2" fill="none" />
                     <path d="M 100 20 C 130 20, 140 80, 100 130" stroke="url(#bowGrad)" strokeWidth="6" strokeLinecap="round" fill="none" />
                     <path d="M 100 280 C 130 280, 140 220, 100 170" stroke="url(#bowGrad)" strokeWidth="6" strokeLinecap="round" fill="none" />
                     <circle cx="98" cy="15" r="4" fill="#6ee7b7" />
                     <circle cx="98" cy="285" r="4" fill="#6ee7b7" />
                     <rect x="94" y="130" width="12" height="40" rx="3" fill="#1f2937" stroke="#047857" strokeWidth="2" />
                     <defs>
                       <linearGradient id="bowGrad" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="0%" stopColor="#059669" />
                         <stop offset="50%" stopColor="#064e3b" />
                         <stop offset="100%" stopColor="#059669" />
                       </linearGradient>
                     </defs>
                   </svg>
                 </div>

                 {/* Arrow Release Blur & Trail */}
                 <motion.div 
                   initial={{ x: 50 }} 
                   animate={{ x: 600 }} 
                   transition={{ duration: 0.3, ease: "easeIn" }} 
                   className="absolute z-20 flex items-center"
                 >
                    <div className="w-40 h-2 bg-white rounded-full blur-[1px] shadow-[0_0_20px_2px_rgba(52,211,153,1)] flex items-center justify-end">
                       <div className="w-6 h-6 bg-emerald-100 rounded-full blur-md opacity-80 mix-blend-screen" />
                    </div>
                 </motion.div>

                 {/* Wind / Speed Lines */}
                 <motion.div 
                   initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.4 }}
                   className="absolute w-full h-full pointer-events-none flex flex-col justify-center gap-10 opacity-30 mix-blend-screen overflow-hidden z-20"
                 >
                   <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-emerald-200 to-transparent transform -translate-x-1/2" />
                   <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-emerald-200 to-transparent transform translate-x-1/4" />
                 </motion.div>
              </motion.div>
            )}

            {activeStep === 4 && (
              <motion.div key="step4" className="relative flex items-center justify-center w-full h-full perspective-[1000px]">
                 {/* Stuck Arrows in the ground/target */}
                 <motion.div 
                   initial={{ rotateZ: -15, y: -80, opacity: 0 }}
                   animate={{ rotateZ: -15, y: 0, opacity: 1 }}
                   transition={{ duration: 0.2, ease: "easeIn" }}
                   className="absolute bottom-1/4 right-[35%]"
                 >
                   <div className="relative w-1.5 h-20 bg-emerald-700 shadow-[0_0_8px_rgba(52,211,153,0.5)]">
                     <div className="absolute -top-3 left-1/2 -ml-1.5 w-3 h-4 bg-white/80 rounded-t-full" />
                   </div>
                 </motion.div>
                 
                 <motion.div 
                   initial={{ rotateZ: 30, y: -80, opacity: 0 }}
                   animate={{ rotateZ: 30, y: 10, opacity: 1 }}
                   transition={{ duration: 0.2, ease: "easeIn", delay: 0.15 }}
                   className="absolute bottom-1/3 right-[30%]"
                 >
                   <div className="relative w-1.5 h-20 bg-emerald-700 shadow-[0_0_8px_rgba(52,211,153,0.5)]">
                     <div className="absolute -top-3 left-1/2 -ml-1.5 w-3 h-4 bg-white/80 rounded-t-full" />
                   </div>
                 </motion.div>

                 {/* Recall Crystal */}
                 <motion.div 
                   initial={{ scale: 0.5, opacity: 0, rotateZ: -45 }}
                   animate={{ scale: 1, opacity: 1, rotateZ: 0 }}
                   transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
                   className="absolute left-1/4 top-1/3 flex flex-col items-center group cursor-pointer drop-shadow-[0_0_15px_rgba(52,211,153,0.8)] z-10"
                 >
                   <div className="relative w-12 h-16 pointer-events-none">
                     <div className="absolute inset-0 bg-gradient-to-b from-emerald-300 to-emerald-600 opacity-60 mix-blend-screen" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                     <div className="absolute inset-1 bg-gradient-to-b from-white to-emerald-400 opacity-90" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                   </div>
                   <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-8 h-2 bg-emerald-400/50 blur-sm rounded-[100%] mt-4" />
                   <span className="absolute -bottom-8 font-mono text-[10px] text-emerald-300 uppercase tracking-widest bg-emerald-900/40 px-2 py-0.5 rounded border border-emerald-500/30 font-bold whitespace-nowrap shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                     Recall Crystal
                   </span>
                 </motion.div>

                 {/* Recall tether lines */}
                 <motion.svg className="absolute inset-0 w-full h-full pointer-events-none z-0" initial={{ opacity: 0 }} animate={{ opacity: [0, 0.8, 0.2] }} transition={{ delay: 0.5, duration: 1.5, repeat: Infinity }}>
                   <path d="M 210 150 Q 300 180 370 280" fill="none" stroke="rgba(52,211,153,0.8)" strokeWidth="2" strokeDasharray="4 4" className="filter drop-shadow-[0_0_5px_rgba(52,211,153,1)]"/>
                   <path d="M 210 150 Q 320 150 400 240" fill="none" stroke="rgba(52,211,153,0.8)" strokeWidth="2" strokeDasharray="4 4" className="filter drop-shadow-[0_0_5px_rgba(52,211,153,1)]"/>
                 </motion.svg>
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
