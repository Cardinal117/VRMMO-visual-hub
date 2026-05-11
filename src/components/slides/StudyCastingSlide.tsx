import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book, FileText, Eye, Sparkles, Mic, Flame } from 'lucide-react';

const steps = [
  { icon: Book, title: "Open Grimoire", desc: "The mage summons and opens the heavy binding." },
  { icon: FileText, title: "Turn Pages", desc: "Slow, deliberate physical interaction to find the right magic." },
  { icon: Eye, title: "Inspect Runes", desc: "Arcane diagrams are inspected for structural integrity." },
  { icon: Sparkles, title: "Select Spell", desc: "The chosen spell illuminates with stored vitae." },
  { icon: Mic, title: "Vocalize (Optional)", desc: "Speaking the ancient incantation to modify the cast." },
  { icon: Flame, title: "Ritual Cast", desc: "The spell is slowly released for utility or long-form magic." },
];

export default function StudyCastingSlide() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-6xl flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2 className="display text-4xl text-blue-400 tracking-[0.3em] glow-blue mb-4">
          Study Casting
        </h2>
        <p className="text-white/50 font-mono tracking-widest text-[10px] uppercase">
          Slow, Flavorful, Ritualistic
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row w-full gap-12 items-center justify-between">
        
        {/* Left Side: Sequence List */}
        <div className="flex-1 space-y-4">
          {steps.map((step, idx) => {
            const isActive = idx === activeStep;
            const isPassed = idx < activeStep;
            const Icon = step.icon;

            return (
              <div 
                key={idx} 
                className={`flex items-center gap-4 transition-all duration-500 ${
                  isActive ? 'opacity-100 scale-105 ml-4' : isPassed ? 'opacity-50 blur-[1px]' : 'opacity-30'
                }`}
              >
                <div className={`p-3 rounded-full border ${isActive ? 'bg-blue-400/10 border-blue-400 text-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.5)]' : 'bg-black/40 border-blue-400/20 text-white/40'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`serif text-lg ${isActive ? 'text-blue-400' : 'text-white/60'}`}>
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

        {/* Right Side: Visual Representation */}
        <div className="flex-1 w-full h-[400px] relative flex items-center justify-center perspective-[1000px]">
          {/* Grimoire Base Container */}
          <motion.div 
            className="relative w-64 h-80 flex bg-[#111] rounded-sm shadow-[20px_20px_60px_rgba(0,0,0,0.8),inset_0_0_80px_rgba(0,0,0,1)] border-y border-r border-[#333] border-l-[12px] border-l-[#0a0a0a]"
            style={{ transformStyle: 'preserve-3d' }}
            initial={{ rotateX: 10, rotateY: 0, x: 0 }}
            animate={{ 
              rotateX: 10, 
              rotateY: activeStep === 0 ? -5 : -15, 
              x: activeStep === 0 ? 0 : 50 
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Pages edge effect */}
            <div className="absolute right-0 top-1 bottom-1 w-3 bg-[#222] rounded-r-md shadow-[inset_-2px_0_4px_rgba(0,0,0,0.5)] transform translate-x-full" />
            <div className="absolute right-[-2px] inset-y-2 w-0.5 bg-blue-900/20" />
            
            {/* Left Side Resting Pages (Flipped Pages) */}
            <AnimatePresence>
              {activeStep >= 1 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute inset-1 ml-3 bg-[#151518] shadow-[inset_-10px_0_20px_rgba(0,0,0,0.8)] border-l border-[#222] flex flex-col gap-4 p-6 origin-left overflow-hidden z-10"
                  style={{ transform: 'rotateY(-180deg) translateZ(-1px)', backfaceVisibility: 'hidden' }}
                >
                   <div className="w-full h-2 bg-blue-400/40 rounded blur-[1px]" />
                   <div className="w-3/4 h-2 bg-blue-400/40 rounded blur-[1px]" />
                   <div className="w-1/2 h-2 bg-blue-400/40 rounded blur-[1px]" />
                   <div className="w-full h-2 bg-blue-400/40 rounded mt-8 blur-[1px]" />
                   <div className="w-5/6 h-2 bg-blue-400/40 rounded blur-[1px]" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* The page surface */}
            <div className="absolute inset-1 ml-3 bg-[#1a1a1e] border border-blue-500/20 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] overflow-hidden p-6 flex flex-col justify-center items-center z-10">
            
            <AnimatePresence mode="wait">
              {activeStep === 0 && (
                <motion.div
                  key="step0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col items-center justify-center w-full h-full"
                >
                  <div className="w-full h-full border border-blue-400/10 rounded-sm shadow-[inset_0_0_20px_rgba(96,165,250,0.05)] flex items-center justify-center relative overflow-hidden">
                     <div className="w-full h-1 bg-blue-400/20 absolute top-10" />
                     <div className="w-full h-1 bg-blue-400/20 absolute top-14" />
                     <div className="w-full h-1 bg-blue-400/20 absolute top-18" />
                  </div>
                </motion.div>
              )}

              {activeStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                  style={{ perspective: '1200px' }}
                >
                  {/* Flipping pages sequence */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ rotateY: 0, originX: 0, zIndex: 20 - i, opacity: 0 }}
                      animate={{ rotateY: -180, opacity: [0, 1, 1, 1] }}
                      transition={{ 
                        duration: 1.2, 
                        delay: i * 0.18,
                        ease: "easeIn",
                        repeat: 0
                      }}
                      className="absolute inset-0"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* Front face */}
                      <div className="absolute inset-0 bg-[#1a1a1e] border-r border-[#333] shadow-[8px_0_15px_rgba(0,0,0,0.5)] flex flex-col gap-4 p-6" style={{ backfaceVisibility: 'hidden' }}>
                        <div className="w-full h-2 bg-blue-400/80 rounded shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                        <div className="w-3/4 h-2 bg-blue-400/80 rounded shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                        <div className="w-1/2 h-2 bg-blue-400/80 rounded shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                        <div className="w-full h-2 bg-blue-400/80 rounded mt-8 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                        <div className="w-5/6 h-2 bg-blue-400/80 rounded shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                      </div>
                      
                      {/* Back face */}
                      <div 
                        className="absolute inset-0 bg-[#151518] shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] border-r border-[#222] flex flex-col gap-4 p-6" 
                        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                      >
                         <div className="w-full h-2 bg-blue-400/50 rounded blur-[1px]" />
                         <div className="w-3/4 h-2 bg-blue-400/50 rounded blur-[1px]" />
                         <div className="w-1/2 h-2 bg-blue-400/50 rounded blur-[1px]" />
                         <div className="w-full h-2 bg-blue-400/50 rounded mt-8 blur-[1px]" />
                         <div className="w-5/6 h-2 bg-blue-400/50 rounded blur-[1px]" />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="w-full h-full flex items-center justify-center relative"
                >
                  {/* Glowing diagram */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-40 h-40 border-2 border-dashed border-blue-400 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(96,165,250,0.5)]"
                  >
                    <div className="w-32 h-32 border-2 border-blue-400 rotate-45 flex items-center justify-center shadow-[inset_0_0_15px_rgba(96,165,250,0.5),0_0_15px_rgba(96,165,250,0.5)]">
                      <Eye className="w-8 h-8 text-blue-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {activeStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }} 
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-32 h-32 bg-blue-400/40 rounded-full blur-xl absolute shadow-[0_0_50px_rgba(96,165,250,0.8)]" 
                  />
                  <Sparkles className="w-16 h-16 text-white relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,1)]" />
                </motion.div>
              )}

              {activeStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full flex items-center justify-center flex-col gap-4"
                >
                  <Mic className="w-12 h-12 text-blue-200 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]" />
                  <motion.div 
                    animate={{ width: [20, 100, 20] }} 
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="h-1 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,1)]"
                  />
                  <p className="font-mono text-blue-200 text-sm tracking-widest uppercase font-bold drop-shadow-[0_0_8px_rgba(96,165,250,1)]">"Ignis..."</p>
                </motion.div>
              )}

              {activeStep === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1.5 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full flex items-center justify-center mt-[-20px]"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Flame className="w-24 h-24 text-blue-300 drop-shadow-[0_0_40px_rgba(96,165,250,1)]" />
                  </motion.div>
                  {/* Energy rings */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ scale: 3, opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute w-32 h-32 border-2 border-blue-400 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.8)]" 
                  />
                </motion.div>
              )}
            </AnimatePresence>
            </div>

            {/* Book Front Cover */}
            <motion.div
              className="absolute inset-y-0 left-0 w-full bg-[#0a0a0c] border border-[#333] z-50 rounded-r-md shadow-[5px_0_20px_rgba(0,0,0,0.9)] flex flex-col items-center justify-center border-l-[#0a0a0a] border-l-[8px]"
              style={{ transformOrigin: 'left', backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: activeStep === 0 ? -170 : (activeStep === steps.length - 1 ? 0 : -170) }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: activeStep === 0 ? 0.5 : 0 }}
            >
              <Book className="w-20 h-20 text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]" />
              <div className="absolute top-16 font-mono text-[12px] tracking-widest text-blue-400 font-bold drop-shadow-[0_0_8px_rgba(96,165,250,0.8)] text-center px-4">INCANTAMENTA<br/>ANTIQUA</div>
              
              {/* Inside of the cover (backface) */}
              <div 
                className="absolute inset-0 bg-[#151515] rounded-l-md border border-[#222] shadow-[inset_0_0_40px_rgba(0,0,0,0.9)] flex items-center justify-center overflow-hidden"
                style={{ transform: 'rotateY(180deg) translateZ(1px)', backfaceVisibility: 'hidden' }}
              >
                  <div className="absolute inset-4 border border-white/5 opacity-50 rounded-sm" />
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </div>
  );
}
