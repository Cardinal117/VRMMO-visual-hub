import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book, Copy, Hand, CheckCircle, Zap, Crosshair } from 'lucide-react';

const steps = [
  { icon: Book, title: "Release Grimoire", desc: "The player grips and releases the book forward." },
  { icon: Copy, title: "Page Expansion", desc: "Pages explode into a floating circular array." },
  { icon: Hand, title: "Hover Selection", desc: "A quick hand or staff gesture selects the spell." },
  { icon: CheckCircle, title: "System Validation", desc: "Cost and cooldowns are instantly processed." },
  { icon: Zap, title: "Activation", desc: "The selected spell charges." },
  { icon: Crosshair, title: "Delivery", desc: "Spell is fired dynamically with staff or gesture." },
];

export default function CombatCastingSlide() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2800); // slightly faster than study casting
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
          Combat Casting
        </h2>
        <p className="text-white/50 font-mono tracking-widest text-[10px] uppercase">
          Dynamic, Responsive, VR-Ready
        </p>
      </motion.div>

      <div className="flex flex-col-reverse md:flex-row w-full gap-12 items-center justify-between">
        
        {/* Left Side: Visual Representation */}
        <div className="flex-1 w-full h-[400px] relative flex items-center justify-center border border-gold/20 panel-gold rounded-sm overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            
            {/* Step 0: Grip & Throw */}
            {activeStep === 0 && (
              <motion.div
                key="combat_s0"
                initial={{ scale: 1.5, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.5, y: -50, opacity: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="w-32 h-40 bg-[#1a1a1e] border-2 border-gold/50 rounded flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.3)]"
              >
                <Book className="w-12 h-12 text-gold" />
              </motion.div>
            )}

            {/* Step 1: Page Expansion */}
            {activeStep === 1 && (
              <motion.div
                key="combat_s1"
                className="relative w-full h-full flex items-center justify-center perspective-[1000px]"
              >
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, x: 0, y: 0, rotateY: 0 }}
                    animate={{ 
                      scale: 1, 
                      x: Math.cos((i * Math.PI * 2) / 8) * 120,
                      y: Math.sin((i * Math.PI * 2) / 8) * 120,
                      rotateY: (i * 45),
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.05, type: "spring" }}
                    className="absolute w-16 h-24 bg-gold/10 border border-gold/40 rounded-sm flex flex-col p-1 gap-1 backdrop-blur-sm"
                  >
                    <div className="w-full h-1 bg-gold/20" />
                    <div className="w-3/4 h-1 bg-gold/20" />
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Step 2: Hover Selection */}
            {activeStep === 2 && (
              <motion.div
                key="combat_s2"
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* Simplified page array */}
                <div className="absolute w-64 h-64 border border-dashed border-gold/20 rounded-full" />
                <motion.div
                  initial={{ x: 0, y: 100 }}
                  animate={{ x: 60, y: -60 }} // Hands moves to a node
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute z-10"
                >
                  <Hand className="w-12 h-12 text-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
                </motion.div>
                {/* Target node glows */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, scale: [1, 1.2, 1] }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="absolute w-16 h-24 bg-gold/20 border-2 border-gold blur-sm rounded translate-x-[60px] translate-y-[-60px]"
                />
              </motion.div>
            )}

            {/* Step 3: System Validation */}
            {activeStep === 3 && (
              <motion.div
                key="combat_s3"
                className="relative w-full h-full flex items-center justify-center"
              >
                <div className="flex bg-[#1a1a1e] backdrop-blur-md border border-gold/40 p-6 rounded-sm gap-4 items-center">
                   <CheckCircle className="w-12 h-12 text-gold glow-amber" />
                   <div>
                     <p className="font-mono text-gold text-[10px] uppercase tracking-widest font-bold">Vitae: Cost Met</p>
                     <p className="font-mono text-gold/60 text-[10px] uppercase tracking-widest mt-1">Cooldown: Ready</p>
                   </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Activation */}
            {activeStep === 4 && (
              <motion.div
                key="combat_s4"
                className="relative w-full h-full flex items-center justify-center"
              >
                <motion.div 
                   animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
                   transition={{ duration: 0.8, repeat: Infinity }}
                   className="absolute w-32 h-32 bg-gold/40 rounded-full blur-xl"
                />
                <Zap className="w-16 h-16 text-gold z-10" />
              </motion.div>
            )}

            {/* Step 5: Delivery */}
            {activeStep === 5 && (
              <motion.div
                key="combat_s5"
                className="relative w-full h-full flex items-center justify-center"
              >
                <motion.div
                  initial={{ x: -100, scale: 0.5 }}
                  animate={{ x: 200, scale: 1.5 }}
                  transition={{ duration: 0.6, ease: "easeIn" }}
                  className="w-12 h-12 bg-white rounded-full shadow-[0_0_50px_10px_rgba(212,175,55,0.8)]"
                />
                {/* Trail */}
                <motion.div
                   initial={{ width: 0, x: -100 }}
                   animate={{ width: 300, x: 50 }}
                   transition={{ duration: 0.6, ease: "easeIn" }}
                   className="absolute h-2 bg-gradient-to-r from-transparent via-gold to-white blur-sm"
                />
              </motion.div>
            )}

          </AnimatePresence>
        </div>


        {/* Right Side: Sequence List */}
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
                <div className={`p-3 rounded-full border ${isActive ? 'bg-gold/10 border-gold text-gold shadow-[0_0_15px_rgba(212,175,55,0.5)]' : 'bg-black/40 border-white/10 text-white/40'}`}>
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
      </div>
    </div>
  );
}
