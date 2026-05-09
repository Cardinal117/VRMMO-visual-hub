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
              <motion.div key="step0" className="flex flex-col items-center">
                 <motion.div initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{opacity: 0}} className="w-4 h-32 bg-white/10 border border-white/20 rounded-sm mb-4" />
                 <Hand className="w-12 h-12 text-white/40" />
              </motion.div>
            )}

            {activeStep === 1 && (
              <motion.div key="step1" className="relative flex items-center justify-center w-full h-full">
                 <motion.div initial={{scale: 0.8, opacity: 0}} animate={{scale: 1, opacity: 1}} exit={{scale: 1.2, opacity: 0}} className="absolute w-40 h-40 border border-gold/40 border-dashed rounded-full animate-[spin_10s_linear_infinite]" />
                 <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="w-4 h-32 bg-gold border border-gold rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.5)] rotate-45" />
                 <div className="absolute top-1/4 uppercase tracking-widest text-gold text-[10px] font-bold">High Guard</div>
              </motion.div>
            )}

            {activeStep === 2 && (
              <motion.div key="step2" className="relative flex items-center justify-center w-full h-full">
                 <div className="w-4 h-32 bg-gold/50 border border-gold/50 rounded-sm rotate-45 z-10" />
                 <motion.div 
                   animate={{ scale: [1, 1.5, 2], opacity: [0.8, 0.4, 0] }}
                   transition={{ repeat: Infinity, duration: 1.5 }}
                   className="absolute w-32 h-32 bg-blue-500/30 rounded-full blur-xl"
                 />
                 <div className="absolute font-mono text-blue-300 text-[10px] uppercase font-bold text-center mt-32">Charging Phase II</div>
              </motion.div>
            )}

            {activeStep === 3 && (
              <motion.div key="step3" className="relative flex items-center justify-center w-full h-full">
                 <motion.div initial={{ x: -50, y: -50, rotate: 45 }} animate={{ x: 50, y: 50, rotate: 135 }} transition={{ duration: 0.5, ease: "easeIn" }} exit={{opacity: 0}} className="w-4 h-32 bg-white flex items-center justify-center rounded-sm shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
                 <motion.div initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 140 }} transition={{ duration: 0.5 }} className="absolute h-1 bg-white/50 blur-sm rotate-45" />
              </motion.div>
            )}

            {activeStep === 4 && (
              <motion.div key="step4" className="relative flex items-center justify-center w-full h-full">
                 <motion.div 
                   initial={{ scale: 0.8, opacity: 1 }}
                   animate={{ scale: [1, 2], opacity: [1, 0] }}
                   transition={{ duration: 0.8 }}
                   className="absolute w-40 h-6 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rotate-45"
                 />
                 <span className="font-mono text-cyan-300 text-xs tracking-widest uppercase glow-blue absolute mt-16 font-bold">Crescent Cleave</span>
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
