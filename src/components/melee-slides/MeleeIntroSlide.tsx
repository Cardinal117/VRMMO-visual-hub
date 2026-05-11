import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Swords, Grip, Hand, Gauge, Share } from 'lucide-react';

const steps = [
  { icon: Hand, title: "Hold Weapon", desc: "The player grips a melee weapon physically in VR." },
  { icon: Swords, title: "Stance Recognized", desc: "The system detects a recognized martial pose." },
  { icon: Gauge, title: "Charge Duration", desc: "A subtle visual aura builds based on hold duration." },
  { icon: Share, title: "Release Motion", desc: "The player executes a specific directional swing or thrust." },
  { icon: Grip, title: "Skill Executes", desc: "The technique materializes with matching physical VFX." },
];

export default function MeleeIntroSlide() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);
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
        <h1 className="display text-5xl md:text-7xl tracking-widest text-glow mb-2 text-gold">
          KINESIS
        </h1>
        <h2 className="text-xl text-gold/80 tracking-[0.2em] uppercase font-light serif border-b border-gold/20 pb-4 inline-block">
          Physical VR Stance Combat
        </h2>
        <p className="max-w-2xl mx-auto mt-6 text-white/70 serif italic">
          Melee skills are not selected from a traditional skill bar. Instead, skills are activated through physical VR actions: stance, grip, hold duration, and release motion.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row w-full gap-12 items-center justify-between">
        {/* Visual Animation Box */}
        <div className="flex-1 w-full h-[350px] relative flex items-center justify-center border border-gold/20 panel-gold rounded-sm overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            
            {activeStep === 0 && (
              <motion.div key="step0" className="flex flex-col items-center justify-center w-full h-full perspective-[1000px]">
                 <motion.div 
                   initial={{ y: 50, rotateX: 45, opacity: 0 }} 
                   animate={{ y: 0, rotateX: 0, opacity: 1 }} 
                   exit={{ opacity: 0, scale: 0.8 }}
                   transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                   className="relative flex flex-col items-center justify-center transform-gpu"
                 >
                    {/* The Longsword */}
                    <div className="relative flex flex-col items-center drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                      {/* Blade */}
                      <div className="w-4 h-40 bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 rounded-t-full border-x border-t border-white/50" />
                      {/* Crossguard */}
                      <div className="w-20 h-3 bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 rounded-sm border border-yellow-900 shadow-[0_2px_10px_rgba(0,0,0,0.5)] z-10" />
                      {/* Grip */}
                      <div className="w-3 h-12 bg-[#2a1b12] border-x border-[#1a100a] flex flex-col justify-evenly">
                        <div className="w-full h-[1px] bg-white/20" />
                        <div className="w-full h-[1px] bg-white/20" />
                        <div className="w-full h-[1px] bg-white/20" />
                      </div>
                      {/* Pommel */}
                      <div className="w-5 h-5 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border border-yellow-800 shadow-[0_2px_5px_rgba(0,0,0,0.8)]" />
                    </div>
                 </motion.div>
              </motion.div>
            )}

            {activeStep === 1 && (
              <motion.div key="step1" className="relative flex items-center justify-center w-full h-full perspective-[1000px]">
                 {/* High Guard Stance Recognition */}
                 <motion.div 
                   initial={{ scale: 0.8, opacity: 0 }} 
                   animate={{ scale: 1, opacity: 1 }} 
                   exit={{ scale: 1.1, opacity: 0 }}
                   transition={{ duration: 0.8, ease: "easeOut" }}
                   className="absolute w-56 h-56 border border-gold/40 border-dashed rounded-full"
                 >
                   <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} className="w-full h-full rounded-full border-t border-gold/60" />
                 </motion.div>

                 <motion.div 
                   initial={{ rotateZ: 0, y: 30 }} 
                   animate={{ rotateZ: 45, y: -20, x: 20 }} 
                   transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                   className="relative flex flex-col items-center justify-center transform-gpu z-10"
                 >
                    {/* The Longsword */}
                    <div className="relative flex flex-col items-center drop-shadow-[0_0_25px_rgba(212,175,55,0.6)]">
                      <div className="w-4 h-40 bg-gradient-to-b from-yellow-100 via-gold to-yellow-700 rounded-t-full border-x border-t border-yellow-200" />
                      <div className="w-20 h-3 bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 rounded-sm border border-yellow-900 z-10" />
                      <div className="w-3 h-12 bg-[#2a1b12] border-x border-[#1a100a]" />
                      <div className="w-5 h-5 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border border-yellow-800" />
                    </div>
                 </motion.div>
                 <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="absolute bottom-16 uppercase tracking-widest text-gold text-xs font-bold bg-black/60 px-4 py-1 border border-gold/20 rounded backdrop-blur-sm"
                 >
                    High Guard Recognized
                 </motion.div>
              </motion.div>
            )}

            {activeStep === 2 && (
              <motion.div key="step2" className="relative flex items-center justify-center w-full h-full perspective-[1000px]">
                 <motion.div 
                   className="relative flex flex-col items-center justify-center transform-gpu z-10 rotate-45 translate-x-5 -translate-y-5"
                 >
                    {/* The Longsword glowing heavily */}
                    <div className="relative flex flex-col items-center">
                      <motion.div 
                        animate={{ boxShadow: ['0 0 10px rgba(59,130,246,0.5)', '0 0 50px rgba(59,130,246,1)', '0 0 10px rgba(59,130,246,0.5)'] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-4 h-40 bg-gradient-to-b from-blue-100 via-blue-400 to-blue-600 rounded-t-full relative flex justify-center overflow-hidden"
                      >
                         <motion.div 
                           animate={{ y: [40, -160] }}
                           transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                           className="w-full h-10 bg-white/80 blur-sm"
                         />
                      </motion.div>
                      <div className="w-20 h-3 bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 rounded-sm border border-yellow-900 z-10" />
                      <div className="w-3 h-12 bg-[#2a1b12]" />
                      <div className="w-5 h-5 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full" />
                    </div>
                 </motion.div>

                 {/* Gathering energy */}
                 <motion.div 
                   animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
                   transition={{ repeat: Infinity, duration: 1 }}
                   className="absolute w-40 h-40 border-2 border-blue-400 rounded-full shadow-[inset_0_0_20px_rgba(59,130,246,0.5)]"
                 />
                 
                 <div className="absolute bottom-16 font-mono text-blue-300 text-xs uppercase font-bold text-center bg-blue-900/40 px-4 py-1 rounded border border-blue-500/30">
                    Charging Phase II
                 </div>
              </motion.div>
            )}

            {activeStep === 3 && (
              <motion.div key="step3" className="relative flex items-center justify-center w-full h-full overflow-hidden perspective-[1000px]">
                 {/* The Swing */}
                 <motion.div 
                   initial={{ rotateZ: 45, x: -50, y: -50 }} 
                   animate={{ rotateZ: 135, x: 50, y: 50 }} 
                   transition={{ duration: 0.4, ease: "easeIn" }}
                   className="absolute flex flex-col items-center justify-center transform-gpu z-10"
                 >
                    {/* The Longsword */}
                    <div className="relative flex flex-col items-center drop-shadow-[0_0_30px_rgba(255,255,255,1)]">
                      <div className="w-4 h-40 bg-white rounded-t-full" />
                      <div className="w-20 h-3 bg-yellow-400 rounded-sm z-10" />
                      <div className="w-3 h-12 bg-[#2a1b12]" />
                      <div className="w-5 h-5 bg-yellow-400 rounded-full" />
                    </div>
                 </motion.div>
                 
                 {/* Swing trail */}
                 <motion.div 
                   initial={{ opacity: 0, width: 0, rotateZ: 45, x: -50, y: -50 }} 
                   animate={{ opacity: [0, 1, 0], width: 250, rotateZ: [45, 135], x: 50, y: 50 }} 
                   transition={{ duration: 0.5, ease: "easeOut" }} 
                   className="absolute h-6 bg-gradient-to-r from-transparent via-white to-transparent blur-md mix-blend-screen transform-origin-left" 
                 />
              </motion.div>
            )}

            {activeStep === 4 && (
              <motion.div key="step4" className="relative flex items-center justify-center w-full h-full overflow-hidden">
                 {/* The Longsword (Resting post-cleave) */}
                 <motion.div 
                   initial={{ rotateZ: 135, x: 50, y: 50 }} 
                   animate={{ rotateZ: 145, x: 60, y: 60 }} 
                   transition={{ duration: 0.8, ease: "easeOut" }}
                   className="absolute flex flex-col items-center justify-center transform-gpu z-10"
                 >
                    <div className="relative flex flex-col items-center drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                      <div className="w-4 h-40 bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 rounded-t-full border-x border-t border-white/50" />
                      <div className="w-20 h-3 bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 rounded-sm border border-yellow-900 shadow-[0_2px_10px_rgba(0,0,0,0.5)] z-10" />
                      <div className="w-3 h-12 bg-[#2a1b12] border-x border-[#1a100a]" />
                      <div className="w-5 h-5 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border border-yellow-800 shadow-[0_2px_5px_rgba(0,0,0,0.8)]" />
                    </div>
                 </motion.div>

                 {/* Crescent Cleave Skill VFX */}
                 <motion.div 
                   initial={{ scale: 0.5, x: -50, opacity: 1 }}
                   animate={{ scale: [1, 2.5], x: [0, 150], opacity: [1, 0] }}
                   transition={{ duration: 0.8, ease: "easeOut" }}
                   className="absolute w-64 h-24 border-r-[8px] border-cyan-400 rounded-full blur-[2px] shadow-[10px_0_30px_rgba(34,211,238,0.8)]"
                 />
                 <motion.div 
                   initial={{ scale: 0.5, x: -50, opacity: 1 }}
                   animate={{ scale: [1, 2.5], x: [0, 150], opacity: [1, 0] }}
                   transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
                   className="absolute w-56 h-16 border-r-[4px] border-white rounded-full mix-blend-screen"
                 />
                 
                 <span className="font-mono text-cyan-300 text-sm tracking-widest uppercase glow-blue absolute bottom-16 font-bold bg-cyan-900/30 px-6 py-2 border border-cyan-500/40 rounded backdrop-blur-md">
                   Crescent Cleave Executed
                 </span>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Steps List */}
        <div className="flex-1 space-y-4">
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
                <div className={`p-3 rounded-sm border ${isActive ? 'bg-gold/10 border-gold text-gold shadow-[0_0_15px_rgba(212,175,55,0.5)]' : 'bg-black/40 border-gold/20 text-white/40'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`display text-md ${isActive ? 'text-gold glow-amber' : 'text-white/60'}`}>
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
