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
    let delay = 3000; // default duration
    if (activeStep === 1) delay = 3500; // Page Expansion radial form
    if (activeStep === 2) delay = 4500; // Hover selection stays on longer
    if (activeStep === 5) delay = 4500; // Delivery animation stays on longer

    const timeout = setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, delay);
    return () => clearTimeout(timeout);
  }, [activeStep]);

  return (
    <div className="w-full max-w-6xl flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2 className="display text-4xl text-blue-400 tracking-[0.3em] glow-blue mb-4">
          Combat Casting
        </h2>
        <p className="text-white/50 font-mono tracking-widest text-[10px] uppercase">
          Dynamic, Responsive, VR-Ready
        </p>
      </motion.div>

      <div className="flex flex-col-reverse md:flex-row w-full gap-12 items-center justify-between">
        
        {/* Left Side: Visual Representation */}
        <div className="flex-1 w-full h-[400px] relative flex items-center justify-center border border-blue-500/20 panel-blue rounded-sm overflow-hidden shadow-2xl perspective-[1000px]">
          <AnimatePresence mode="wait">
            
            {/* Step 0: Grip & Throw */}
            {activeStep === 0 && (
              <motion.div
                key="combat_s0"
                initial={{ scale: 1.8, y: 150, z: 150, opacity: 0, rotateX: -40, rotateY: 0 }}
                animate={{ scale: [1.8, 1, 1], y: [150, 0, 0], z: [150, -50, 0], opacity: 1, rotateX: [-40, 20, 10], rotateY: [0, -25, -15] }}
                exit={{ scale: 0.8, z: -300, rotateX: 45, rotateY: 0, opacity: 0 }}
                transition={{ duration: 1.2, times: [0, 0.6, 1], ease: 'circOut' }}
                className="relative w-48 h-64 flex bg-[#111] rounded-sm shadow-[20px_20px_60px_rgba(0,0,0,0.8),inset_0_0_80px_rgba(0,0,0,1)] border-y border-r border-[#333] border-l-[12px] border-l-[#0a0a0a]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                 {/* Pages edge effect */}
                <div className="absolute right-0 top-1 bottom-1 w-3 bg-[#222] rounded-r-md shadow-[inset_-2px_0_4px_rgba(0,0,0,0.5)] transform translate-x-full" />
                <div className="absolute right-[-2px] inset-y-2 w-0.5 bg-blue-900/20" />
                
                {/* The page surface */}
                <div className="absolute inset-1 ml-3 bg-[#1a1a1e] border border-blue-500/20 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] overflow-hidden flex items-center justify-center">
                  <Book className="w-16 h-16 text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]" />
                  <div className="absolute top-4 font-mono text-[10px] tracking-widest text-blue-400 font-bold drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]">GRIMOIRE DRAWN</div>
                </div>

                {/* Book Front Cover (slightly open or closed in combat) */}
                <motion.div
                  className="absolute inset-y-0 left-0 w-full bg-[#0a0a0c] border border-[#333] z-50 rounded-r-md shadow-[5px_0_20px_rgba(0,0,0,0.9)] flex flex-col items-center justify-center border-l-[#0a0a0a] border-l-[8px]"
                  style={{ transformOrigin: 'left', backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: -10 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
                >
                  <Book className="w-20 h-20 text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]" />
                  <div className="absolute top-16 font-mono text-[12px] tracking-widest text-blue-400 font-bold drop-shadow-[0_0_8px_rgba(96,165,250,0.8)] text-center px-4">INCANTAMENTA<br/>ANTIQUA</div>
                  
                  {/* Inside of the cover (backface) */}
                  <div 
                    className="absolute inset-0 bg-[#151515] rounded-l-md border border-[#222] shadow-[inset_0_0_40px_rgba(0,0,0,0.9)] flex items-center justify-center"
                    style={{ transform: 'rotateY(180deg) translateZ(1px)', backfaceVisibility: 'hidden' }}
                  >
                      <div className="absolute inset-4 border border-white/5 opacity-50 rounded-sm" />
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Step 1: Page Expansion */}
            {activeStep === 1 && (
              <motion.div
                key="combat_s1"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full h-full flex items-center justify-center overflow-hidden"
              >
                {/* Center glowing book / origin point */}
                <motion.div className="absolute w-20 h-20 bg-blue-500/20 rounded-full blur-2xl shadow-[0_0_50px_rgba(96,165,250,0.8)]" />

                {/* Slow rotation of the circular radial array */}
                <motion.div 
                   animate={{ rotateZ: 360 }} 
                   transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                   className="relative w-full h-full flex items-center justify-center"
                >
                  {Array.from({ length: 10 }).map((_, i) => {
                    const angle = (i * 360) / 10;
                    const radius = 130;
                    const rad = (angle * Math.PI) / 180;
                    const x = Math.cos(rad) * radius;
                    const y = Math.sin(rad) * radius;

                    return (
                      <motion.div
                        key={i}
                        className="absolute"
                        initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotateZ: angle + 90 }}
                        animate={{ x, y, scale: 1, opacity: 1, rotateZ: angle + 90 }}
                        exit={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                        transition={{ duration: 0.8, delay: i * 0.05 + 0.1, type: "spring", stiffness: 120 }}
                      >
                        <div className="w-16 h-24 bg-[#0a0a0f] border border-blue-400/80 rounded flex flex-col p-2 gap-2 shadow-[0_0_15px_rgba(96,165,250,0.5),inset_0_0_10px_rgba(96,165,250,0.3)]">
                          <div className="w-full h-1 bg-cyan-300 shadow-[0_0_5px_rgba(34,211,238,0.8)] rounded" />
                          <div className="w-3/4 h-1 bg-blue-400 shadow-[0_0_5px_rgba(96,165,250,0.8)] rounded" />
                          <div className="w-1/2 h-1 bg-blue-400 shadow-[0_0_5px_rgba(96,165,250,0.8)] rounded mt-1" />
                          <div className="w-full h-1 bg-purple-400/80 shadow-[0_0_5px_rgba(192,132,252,0.6)] rounded mt-auto" />
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
                
                {/* Floating particles/runes in the center */}
                <motion.div 
                   animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 1, 0.5] }} 
                   transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                   className="absolute font-mono text-xs text-blue-300 tracking-[0.5em] font-bold"
                >
                   ARCANA
                </motion.div>
              </motion.div>
            )}

            {/* Step 2: Hover Selection */}
            {activeStep === 2 && (
              <motion.div
                key="combat_s2"
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* Simplified page array */}
                <div className="absolute w-64 h-64 border-2 border-dashed border-blue-400/50 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.3)]" />
                <motion.div
                  initial={{ x: 0, y: 100 }}
                  animate={{ x: 60, y: -60 }} // Hands moves to a node
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute z-10"
                >
                  <Hand className="w-12 h-12 text-blue-200 drop-shadow-[0_0_15px_rgba(96,165,250,0.9)]" />
                </motion.div>
                {/* Target node glows */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, scale: [1, 1.2, 1] }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="absolute w-20 h-28 bg-[#1a1a1e] border-2 border-blue-400 rounded-sm translate-x-[60px] translate-y-[-60px] shadow-[0_0_20px_rgba(96,165,250,0.8),inset_0_0_15px_rgba(96,165,250,0.5)] flex flex-col p-2 gap-2"
                >
                    <div className="w-full h-1 bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,1)] rounded" />
                    <div className="w-3/4 h-1 bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,1)] rounded" />
                </motion.div>
              </motion.div>
            )}

            {/* Step 3: System Validation */}
            {activeStep === 3 && (
              <motion.div
                key="combat_s3"
                className="relative w-full h-full flex items-center justify-center"
              >
                <div className="flex bg-[#1a1a1e] backdrop-blur-md border border-blue-500/40 p-6 rounded-sm gap-4 items-center">
                   <CheckCircle className="w-12 h-12 text-blue-400 glow-blue" />
                   <div>
                     <p className="font-mono text-blue-400 text-[10px] uppercase tracking-widest font-bold">Vitae: Cost Met</p>
                     <p className="font-mono text-blue-400/60 text-[10px] uppercase tracking-widest mt-1">Cooldown: Ready</p>
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
                   className="absolute w-32 h-32 bg-blue-500/40 rounded-full blur-xl"
                />
                <Zap className="w-16 h-16 text-blue-400 z-10" />
              </motion.div>
            )}

            {/* Step 5: Delivery */}
            {activeStep === 5 && (
              <motion.div
                key="combat_s5"
                className="relative w-full h-full flex items-center justify-center overflow-hidden"
              >
                {/* Complex Multiple Magic Casting Circles */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
                  animate={{ opacity: [0, 1, 0.8], scale: [0, 1.2, 1], rotateZ: 0 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="absolute left-6 w-56 h-56 border border-cyan-400/30 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.3)]"
                >
                  <motion.div 
                    animate={{ rotateZ: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="w-48 h-48 border-2 border-dashed border-blue-400/60 rounded-full flex items-center justify-center"
                  >
                     <div className="w-40 h-40 border border-purple-400/50 rounded-full flex items-center justify-center shadow-[inset_0_0_20px_rgba(192,132,252,0.4)]">
                        {/* Inner geometric shapes */}
                        <motion.div 
                           animate={{ rotateZ: 360 }}
                           transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                           className="w-32 h-32 border border-cyan-300/80 rotate-45 flex items-center justify-center" 
                        />
                        <motion.div 
                           animate={{ rotateZ: -360 }}
                           transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                           className="absolute w-32 h-32 border border-blue-300/80 -rotate-45" 
                        />
                     </div>
                  </motion.div>
                </motion.div>

                {/* Spell Core Charging -> Exploding */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1.5, 0.8, 3],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{ duration: 1.5, times: [0, 0.4, 0.6, 1], ease: "easeIn" }}
                  className="absolute left-6 w-16 h-16 bg-white rounded-full mix-blend-screen blur-[2px] shadow-[0_0_80px_20px_rgba(255,255,255,0.8)]"
                />
                
                {/* Main Intense Beam */}
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ 
                    width: ["0%", "200%"], 
                    opacity: [0, 1, 1, 0] 
                  }}
                  transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                  className="absolute left-6 h-20 bg-gradient-to-r from-white via-cyan-300 to-blue-600 blur-md mix-blend-screen"
                  style={{ transformOrigin: "left center" }}
                />
                
                {/* Secondary helix beams jumping around */}
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ 
                    width: ["0%", "200%"], 
                    y: [0, -30, 0, 30, 0],
                    opacity: [0, 1, 0] 
                  }}
                  transition={{ duration: 0.8, delay: 0.7, ease: "linear", repeat: 1 }}
                  className="absolute left-10 h-4 bg-gradient-to-r from-purple-300 to-transparent blur-sm mix-blend-screen"
                  style={{ transformOrigin: "left center" }}
                />
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ 
                    width: ["0%", "200%"], 
                    y: [0, 30, 0, -30, 0],
                    opacity: [0, 1, 0] 
                  }}
                  transition={{ duration: 0.8, delay: 0.7, ease: "linear", repeat: 1 }}
                  className="absolute left-10 h-4 bg-gradient-to-r from-blue-300 to-transparent blur-sm mix-blend-screen"
                  style={{ transformOrigin: "left center" }}
                />

                {/* Particle streaks */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={`streak-${i}`}
                    initial={{ x: 0, opacity: 0 }}
                    animate={{ x: 600, opacity: [0, 1, 0] }}
                    transition={{ duration: 0.6, delay: 0.6 + (i * 0.1), ease: "easeOut" }}
                    className={`absolute left-10 h-1 w-24 bg-white rounded-full blur-[1px] ${i%2===0?'top-1/3':'top-2/3'}`}
                    style={{ y: (i - 2) * 20 }}
                  />
                ))}

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
                <div className={`p-3 rounded-full border ${isActive ? 'bg-blue-400/10 border-blue-400 text-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.5)]' : 'bg-black/40 border-white/10 text-white/40'}`}>
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
      </div>
    </div>
  );
}
