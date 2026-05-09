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
        <h2 className="display text-4xl text-gold tracking-[0.3em] glow-amber mb-4">
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
                <div className={`p-3 rounded-full border ${isActive ? 'bg-gold/10 border-gold text-gold shadow-[0_0_15px_rgba(212,175,55,0.5)]' : 'bg-black/40 border-gold/20 text-white/40'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`serif text-lg ${isActive ? 'text-gold' : 'text-white/60'}`}>
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
        <div className="flex-1 w-full h-[400px] relative flex items-center justify-center">
          {/* Grimoire Base Container */}
          <div className="relative w-64 h-80 grimoire-page rounded-sm flex items-center justify-center">
            
            <AnimatePresence mode="wait">
              {activeStep === 0 && (
                <motion.div
                  key="step0"
                  initial={{ opacity: 0, rotateY: -90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: 90 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 border-[4px] border-gold/40 bg-[#1a1a1e] flex items-center justify-center"
                >
                  <Book className="w-16 h-16 text-gold/50" />
                </motion.div>
              )}

              {activeStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 50, skewX: -10 }}
                  animate={{ opacity: 1, x: 0, skewX: 0 }}
                  exit={{ opacity: 0, x: -50, skewX: 10 }}
                  transition={{ duration: 0.8 }}
                  className="w-full relative h-full p-6 flex flex-col gap-4 text-white/20"
                >
                   {/* Simulate lines of text */}
                   <div className="w-full h-2 bg-white/20 rounded" />
                   <div className="w-3/4 h-2 bg-white/20 rounded" />
                   <div className="w-1/2 h-2 bg-white/20 rounded" />
                   <div className="w-full h-2 bg-white/20 rounded mt-8" />
                   <div className="w-5/6 h-2 bg-white/20 rounded" />
                   {/* Page turn motion hint */}
                   <motion.div 
                     animate={{ x: [-10, 10, -10] }} 
                     transition={{ repeat: Infinity, duration: 2 }}
                     className="absolute -right-4 top-1/2 w-8 h-8 rounded-full border border-white/20 border-r-white/60" 
                   />
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
                    className="w-40 h-40 border border-dashed border-gold/40 rounded-full flex items-center justify-center"
                  >
                    <div className="w-32 h-32 border border-gold/30 rotate-45 flex items-center justify-center">
                      <Eye className="w-8 h-8 text-gold/80" />
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {activeStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, filter: 'brightness(1)' }}
                  animate={{ opacity: 1, filter: 'brightness(1.5)' }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }} 
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-32 h-32 bg-gold/20 rounded-full blur-xl absolute" 
                  />
                  <Sparkles className="w-16 h-16 text-gold relative z-10 drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
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
                  <Mic className="w-12 h-12 text-blue-400" />
                  <motion.div 
                    animate={{ width: [20, 100, 20] }} 
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="h-1 bg-blue-400/50 rounded-full"
                  />
                  <p className="font-mono text-blue-300 text-xs tracking-widest uppercase">"Ignis..."</p>
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
                    <Flame className="w-24 h-24 text-orange-500 drop-shadow-[0_0_30px_rgba(249,115,22,0.8)]" />
                  </motion.div>
                  {/* Energy rings */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ scale: 3, opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute w-32 h-32 border-2 border-orange-500/50 rounded-full" 
                  />
                </motion.div>
              )}
            </AnimatePresence>
            
          </div>
        </div>

      </div>
    </div>
  );
}
