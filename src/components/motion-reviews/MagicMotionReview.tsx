import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book, Hand } from 'lucide-react';

export default function MagicMotionReview() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // 0: Grimoire & Pages Orbit, 1: Spell Locks, 2: Release
    const timer = setInterval(() => {
      setStep((s) => (s + 1) % 3);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-64 h-64 bg-[#0a0a0f] rounded-lg border border-blue-500/30 overflow-hidden relative flex flex-col items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.2)] perspective-[800px]">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#1e3a8a_0%,_transparent_100%)] pointer-events-none" />

      <AnimatePresence>
        {step === 0 && (
          <motion.div
            key="orbit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            {/* 3D Grimoire Small Representation */}
            <motion.div
              initial={{ scale: 0.5, rotateX: 20 }}
              animate={{ scale: 1, rotateX: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute flex items-center justify-center z-20"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="w-12 h-16 bg-[#1a1a1e] border-l-4 border-l-[#0a0a0a] border border-blue-500/30 shadow-[0_0_15px_rgba(0,0,0,0.8)] rounded-sm flex items-center justify-center">
                <Book className="w-6 h-6 text-blue-400 opacity-80" />
              </div>
            </motion.div>

            {/* Radial Array of Pages */}
            <motion.div 
               animate={{ rotateZ: 360 }} 
               transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
               className="relative w-full h-full flex items-center justify-center"
            >
              {Array.from({ length: 6 }).map((_, i) => {
                const angle = (i * 360) / 6;
                const radius = 60;
                const rad = (angle * Math.PI) / 180;
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;

                return (
                  <motion.div
                    key={i}
                    className="absolute"
                    initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotateZ: angle + 90 }}
                    animate={{ x, y, scale: 1, opacity: 1, rotateZ: angle + 90 }}
                    transition={{ duration: 0.8, delay: i * 0.1, type: "spring", stiffness: 100 }}
                  >
                    <div className="w-8 h-12 bg-[#0a0a0f] border border-blue-400/80 rounded flex flex-col p-1 gap-1 shadow-[0_0_10px_rgba(96,165,250,0.4)]">
                      <div className="w-full h-0.5 bg-cyan-300 rounded" />
                      <div className="w-3/4 h-0.5 bg-blue-400 rounded" />
                      <div className="w-full h-0.5 bg-purple-400/80 rounded mt-auto" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
            <div className="font-mono text-[10px] text-blue-300 absolute bottom-4 tracking-widest glow-blue">PAGES ORBIT</div>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="locks"
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center z-10"
          >
            <div className="relative w-32 h-32 flex items-center justify-center">
               {/* Floating Page */}
               <motion.div 
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: [0, -10, 0], opacity: 1 }}
                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute w-12 h-16 bg-[#1a1a1e] border border-blue-400/50 rounded flex flex-col p-1 gap-1 shadow-[0_0_15px_rgba(96,165,250,0.4)] z-10"
               >
                 <div className="w-full h-0.5 bg-cyan-300 rounded" />
                 <div className="w-3/4 h-0.5 bg-blue-400 rounded" />
                 <div className="w-1/2 h-0.5 bg-purple-400 rounded mt-auto" />
               </motion.div>

               {/* Hand Reaching out */}
               <motion.div
                 initial={{ scale: 1.5, opacity: 0, x: -20, y: 30 }}
                 animate={{ scale: [1.5, 1, 1], opacity: [0, 1, 1], x: [-20, 0, 0], y: [30, 0, 0] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                 className="absolute z-30"
               >
                 <Hand className="w-12 h-12 text-cyan-400 drop-shadow-[0_0_8px_#22d3ee] mt-12 ml-10" />
               </motion.div>
               
               {/* Targeting Reticle Locking On */}
               <motion.div
                 initial={{ scale: 2, opacity: 0 }}
                 animate={{ scale: [2, 0.8, 1], opacity: [0, 1, 1] }}
                 transition={{ duration: 2, repeat: Infinity, times: [0, 0.4, 0.6] }}
                 className="absolute w-24 h-24 border-[3px] border-dashed border-cyan-400/80 rounded-full flex items-center justify-center z-20"
               >
                 <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                   className="w-16 h-16 border border-blue-400 rotate-45 flex items-center justify-center"
                 >
                   <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff]" />
                 </motion.div>
               </motion.div>
            </div>
            <div className="font-mono text-[10px] text-cyan-300 absolute bottom-4 tracking-widest glow-blue">SPELL LOCKS</div>
          </motion.div>
        )}

        {step === 2 && (
           <motion.div
             key="releases"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 0.5 }}
             className="absolute inset-0 flex flex-col items-center justify-end z-10 overflow-hidden pb-8"
           >
             <div className="relative flex flex-col items-center">
               {/* Staff Body */}
               <div className="relative w-4 h-32 bg-gradient-to-t from-[#3e2723] to-[#5d4037] border-x border-[#8d6e63]/30 rounded-t-lg z-10 flex flex-col items-center">
                 {/* Gold wrappings */}
                 <div className="w-5 h-2 bg-yellow-600 border-y border-yellow-400/50 mt-4 shadow-[0_0_5px_rgba(202,138,4,0.5)]" />
                 <div className="w-5 h-2 bg-yellow-600 border-y border-yellow-400/50 mt-2 shadow-[0_0_5px_rgba(202,138,4,0.5)]" />
                 
                 {/* Staff Head Frame */}
                 <div className="absolute -top-10 w-12 h-14 border-[3px] border-yellow-600 rounded-t-full flex items-center justify-center overflow-visible z-20">
                    <div className="absolute -top-1 w-2 h-2 bg-cyan-200 rounded-full" />
                    {/* Gem */}
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], filter: ["brightness(1)", "brightness(2)", "brightness(1)"] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-6 h-8 bg-cyan-400 rotate-45 rounded-sm shadow-[0_0_20px_#22d3ee]"
                    />
                 </div>
               </div>
               
               {/* Casting Rings & Magic Circles */}
               <motion.div 
                 animate={{ scale: [0, 4], opacity: [1, 0] }}
                 transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                 className="absolute top-0 w-16 h-16 border-[3px] border-cyan-400 rounded-full z-0 pointer-events-none"
               />
               <motion.div 
                 animate={{ scale: [0, 5], opacity: [0.8, 0], rotate: 180 }}
                 transition={{ duration: 1.5, delay: 0.2, repeat: Infinity, ease: "easeOut" }}
                 className="absolute top-0 w-20 h-20 border-2 border-dashed border-blue-400 rounded-full z-0 pointer-events-none"
               />

               {/* Laser Beam */}
               <motion.div
                 initial={{ height: 0 }}
                 animate={{ height: [0, 300, 0], opacity: [0, 1, 0] }}
                 transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute bottom-32 w-10 bg-gradient-to-t from-cyan-400 via-white to-transparent blur-[2px] z-30 mix-blend-screen overflow-hidden"
                 style={{ transformOrigin: "bottom" }}
               />
               <motion.div
                 initial={{ height: 0 }}
                 animate={{ height: [0, 300, 0], opacity: [0, 1, 0] }}
                 transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute bottom-32 w-3 bg-white z-40 shadow-[0_0_20px_#fff]"
                 style={{ transformOrigin: "bottom" }}
               />
             </div>
             <div className="font-mono text-[10px] text-blue-300 absolute bottom-4 tracking-widest glow-blue">STAFF RELEASES</div>
           </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
