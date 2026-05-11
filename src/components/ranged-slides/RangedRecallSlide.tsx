import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Activity, VolumeX, Flame, Anchor, Wind } from 'lucide-react';

const ArrowVisual = ({ colorClass = "bg-white", className = "" }: { colorClass?: string, className?: string }) => (
  <div className={`relative w-2 h-16 shadow-[0_0_8px_rgba(255,255,255,0.5)] bg-gradient-to-b from-gray-300 to-gray-500 rounded-sm ${className}`}>
    <div className={`absolute -top-3 left-1/2 -ml-[3px] w-1.5 h-4 rounded-t-sm ${colorClass}`} style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} />
  </div>
);

const TargetBlock = ({ children, isHit = false }: { children?: React.ReactNode, isHit?: boolean }) => (
  <div className="absolute right-8 h-32 w-12 bg-gray-800 rounded flex items-center justify-center border-l-4 border-gray-600 shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
    {isHit && <motion.div animate={{ opacity: [0, 0.5, 0] }} transition={{ duration: 0.2 }} className="absolute inset-0 bg-red-500/20 rounded" />}
    {children}
  </div>
);

const PlayerHand = () => (
  <div className="absolute left-8 h-12 w-12 rounded-full bg-emerald-900/60 border border-emerald-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(52,211,153,0.3)]">
    <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse blur-[2px]" />
  </div>
);

const RecallAnimations = ({ type }: { type: string }) => {
  switch (type) {
    case 'Quick':
      return (
        <div className="relative w-full h-48 flex items-center justify-center overflow-hidden">
           <PlayerHand />
           <TargetBlock />
           
           <motion.div
             initial={{ x: 100, rotateZ: -90 }}
             animate={{ x: [-140], opacity: [1, 1, 0] }}
             transition={{ duration: 0.3, ease: "easeIn", repeat: Infinity, repeatDelay: 1.5 }}
             className="absolute drop-shadow-[0_0_15px_rgba(96,165,250,1)] z-10"
           >
             <ArrowVisual colorClass="bg-blue-300" />
           </motion.div>
           
           {/* Speed Trail */}
           <motion.div
             initial={{ x: 100, scaleX: 0, opacity: 0 }}
             animate={{ x: -100, scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
             transition={{ duration: 0.3, ease: "linear", repeat: Infinity, repeatDelay: 1.5 }}
             className="w-full h-0.5 bg-blue-300 absolute origin-right drop-shadow-[0_0_8px_rgba(96,165,250,1)]"
           />
           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: [0, 1, 0], scale: [0.8, 1.5, 2] }}
             transition={{ duration: 0.4, delay: 0.25, repeat: Infinity, repeatDelay: 1.4 }}
             className="absolute left-8 w-16 h-16 border-2 border-blue-400 rounded-full"
           />
        </div>
      );
    case 'Charged':
      return (
        <div className="relative w-full h-48 flex items-center justify-center overflow-hidden perspective-[500px]">
           <PlayerHand />
           <TargetBlock />

           {/* Arrow building charge, then shooting back */}
           <motion.div
             initial={{ x: 120, rotateZ: -90, scale: 1 }}
             animate={{ x: [120, 125, -140], scale: [1, 1.2, 2] }}
             transition={{ times: [0, 0.7, 1], duration: 1.2, ease: "easeIn", repeat: Infinity, repeatDelay: 0.8 }}
             className="absolute drop-shadow-[0_0_30px_rgba(52,211,153,1)] z-10"
           >
             <ArrowVisual colorClass="bg-emerald-300" />
             <motion.div animate={{ rotateZ: 360 }} transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }} className="absolute -inset-8 border-[3px] border-emerald-400 border-dashed rounded-full opacity-60" />
           </motion.div>
           
           {/* Charge buildup particles around target */}
           <motion.div
             initial={{ opacity: 0, scale: 0 }}
             animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 2] }}
             transition={{ duration: 1.2, ease: "easeOut", repeat: Infinity, repeatDelay: 0.8 }}
             className="absolute right-12 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl"
           />
           
           {/* Massive return beam */}
           <motion.div
             initial={{ scaleY: 0, opacity: 0 }}
             animate={{ scaleY: [0, 1, 0], opacity: [0, 0.8, 0] }}
             transition={{ duration: 0.4, delay: 0.8, repeat: Infinity, repeatDelay: 1.6 }}
             className="absolute w-[300px] h-4 bg-emerald-400 shadow-[0_0_20px_#34d399] mix-blend-screen"
           />
        </div>
      );
    case 'Silent':
      return (
        <div className="relative w-full h-48 flex items-center justify-center overflow-hidden">
           <PlayerHand />
           <TargetBlock />

           <motion.div
             initial={{ x: 120, rotateZ: -90, opacity: 1 }}
             animate={{ x: [-140], opacity: [1, 0, 0, 1] }}
             transition={{ times: [0, 0.2, 0.8, 1], duration: 3, ease: "linear", repeat: Infinity, repeatDelay: 0.5 }}
             className="absolute z-10"
           >
             <ArrowVisual colorClass="bg-purple-300" className="mix-blend-screen drop-shadow-[0_0_5px_#d8b4fe]" />
           </motion.div>

           {/* Faint rippling distortion trail */}
           <motion.div
             initial={{ x: 120, opacity: 0 }}
             animate={{ x: [-140], opacity: [0, 0.3, 0] }}
             transition={{ duration: 3, ease: "linear", repeat: Infinity, repeatDelay: 0.5 }}
             className="w-16 h-8 border-y border-purple-500/30 rounded-[100%] absolute filter blur-sm"
           />
        </div>
      );
    case 'Violent':
      return (
        <div className="relative w-full h-48 flex items-center justify-center overflow-hidden">
           <PlayerHand />
           <TargetBlock />

           <motion.div
             initial={{ x: 120, rotateZ: -90 }}
             animate={{ 
               x: [120, 130, 120, 130, -140], 
               rotateZ: [-90, -80, -100, -80, -720] 
             }}
             transition={{ times: [0, 0.2, 0.4, 0.6, 1], duration: 1.2, ease: "easeIn", repeat: Infinity, repeatDelay: 1 }}
             className="absolute drop-shadow-[0_0_20px_rgba(248,113,113,0.8)] z-10"
           >
             <ArrowVisual colorClass="bg-red-400" />
             <motion.div 
               animate={{ scale: [0, 2], opacity: [1, 0] }} 
               transition={{ duration: 0.4, delay: 0.6, ease: "easeOut", repeat: Infinity, repeatDelay: 1.8 }}
               className="absolute -inset-8 bg-red-600 rounded-full blur-xl mix-blend-screen" 
             />
           </motion.div>
           
           {/* Blood/Damage splat on target */}
           <motion.div
             initial={{ scale: 0, opacity: 0 }}
             animate={{ scale: [0, 1.5, 2], opacity: [0, 1, 0] }}
             transition={{ duration: 0.6, delay: 0.6, repeat: Infinity, repeatDelay: 1.6 }}
             className="absolute right-12 w-16 h-16 bg-red-500/40 rounded-[100%] filter blur-md transform rotate-45"
           />
        </div>
      );
    case 'Anchor':
      return (
        <div className="relative w-full h-48 flex items-center justify-center overflow-hidden">
           <div className="absolute right-12 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)] rotate-90 z-10">
             <ArrowVisual colorClass="bg-yellow-300" />
           </div>
           <TargetBlock />

           {/* Player zipping to the arrow */}
           <motion.div
             initial={{ x: -100, scale: 1 }}
             animate={{ x: [ -100, 80], scale: [1, 0.8] }}
             transition={{ duration: 0.4, ease: "backIn", repeat: Infinity, repeatDelay: 1.5 }}
             className="absolute flex items-center z-20"
           >
             <div className="w-10 h-10 bg-gray-700 rounded-full border-2 border-yellow-400 relative shadow-[0_0_20px_rgba(250,204,21,0.5)] flex items-center justify-center">
               <div className="w-4 h-4 bg-yellow-300 rounded-full animate-pulse" />
             </div>
             {/* Motion trail behind player */}
             <motion.div 
               initial={{ scaleX: 0, opacity: 1 }}
               animate={{ scaleX: [0, 1, 0], opacity: [1, 0] }}
               transition={{ duration: 0.4, ease: "easeOut", repeat: Infinity, repeatDelay: 1.5 }}
               className="h-1 w-32 bg-yellow-300 origin-right absolute right-[100%] shadow-[0_0_10px_#facc15]"
             />
           </motion.div>
           
           <motion.div
             initial={{ opacity: 0, scale: 0 }}
             animate={{ opacity: [0, 1, 0], scale: [0, 2] }}
             transition={{ duration: 0.4, delay: 0.4, repeat: Infinity, repeatDelay: 1.5 }}
             className="absolute right-12 w-16 h-16 border-2 border-yellow-400 rounded-full z-30"
           />
        </div>
      );
    case 'Scatter':
      return (
        <div className="relative w-full h-48 flex items-center justify-center overflow-hidden">
           <PlayerHand />
           <TargetBlock />

           {/* Initial Arrow in Target */}
           <motion.div
             animate={{ 
               opacity: [0, 1, 1, 0, 0, 0],
               scale: [0, 1, 1, 0, 0, 0],
             }}
             transition={{ times: [0, 0.05, 0.2, 0.21, 0.9, 1], duration: 2, repeat: Infinity }}
             className="absolute drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] z-10"
             style={{ x: 120, rotateZ: -90 }}
           >
             <ArrowVisual colorClass="bg-cyan-300" />
           </motion.div>
           
           {/* Detonation Flash at Target */}
           <motion.div
             animate={{ opacity: [0, 0, 1, 0, 0], scale: [0, 0, 2, 0, 0] }}
             transition={{ times: [0, 0.15, 0.2, 0.4, 1], duration: 2, repeat: Infinity }}
             className="absolute w-16 h-16 bg-cyan-400/60 rounded-full blur-md z-20"
             style={{ x: 120 }}
           />

           {/* Shrapnel Particles */}
           {[...Array(15)].map((_, i) => (
             <motion.div
               key={`particle-${i}`}
               animate={{ 
                 x: [120, 120, 0, -140, -140], 
                 y: [0, 0, (Math.random() - 0.5) * 160, 0, 0],
                 opacity: [0, 0, 1, 1, 0],
                 scale: [0, 0, Math.random() * 1.5 + 0.5, 0.5, 0]
               }}
               transition={{ times: [0, 0.2, 0.6, 0.9, 0.95], duration: 2, repeat: Infinity }}
               className="absolute w-3 h-1 bg-cyan-300 rounded-full shadow-[0_0_8px_#22d3ee] z-20"
             />
           ))}

           {/* 3 Shrapnel Arrows */}
           {[-60, 0, 60].map((yOffset, i) => (
             <motion.div
               key={`shrapnel-${i}`}
               animate={{ 
                 x: [120, 120, 0, -140, -140],
                 y:  [0, 0, yOffset, 0, 0],
                 rotateZ: [-90, -90, -90 + (yOffset/2.5), -90, -90],
                 opacity: [0, 0, 1, 1, 0],
                 scale: [0, 0, 0.7, 0.7, 0]
               }}
               transition={{ times: [0, 0.2, 0.6, 0.9, 0.95], duration: 2, repeat: Infinity }}
               className="absolute drop-shadow-[0_0_10px_rgba(34,211,238,1)] z-10 mix-blend-screen"
             >
               <ArrowVisual colorClass="bg-cyan-300" />
             </motion.div>
           ))}

           {/* Convergence Flash at Player */}
           <motion.div
             animate={{ opacity: [0, 0, 0, 1, 0], scale: [0, 0, 0, 2, 0] }}
             transition={{ times: [0, 0.8, 0.85, 0.9, 1], duration: 2, repeat: Infinity }}
             className="absolute w-16 h-16 bg-cyan-400/80 rounded-full blur-md z-20"
             style={{ x: -140 }}
           />

           {/* Re-formed Arrow at Player */}
           <motion.div
             animate={{ 
               opacity: [0, 0, 1, 1, 0, 0],
               scale: [0, 0, 1, 1, 0, 0],
             }}
             transition={{ times: [0, 0.85, 0.9, 1.8, 1.9, 1], duration: 2, repeat: Infinity }}
             className="absolute z-30 drop-shadow-[0_0_20px_rgba(34,211,238,1)]"
             style={{ x: -140, rotateZ: -90 }}
           >
             <ArrowVisual colorClass="bg-cyan-300" />
           </motion.div>
        </div>
      );
    default: return null;
  }
};

export default function RangedRecallSlide() {
  const [activeRecall, setActiveRecall] = useState(0);

  const recalls = [
    { name: "Quick", icon: <Zap className="w-8 h-8" />, color: "text-blue-400", desc: "Instant snap back to the quiver. Ideal for high-uptime combat loops." },
    { name: "Charged", icon: <Activity className="w-8 h-8" />, color: "text-emerald-400", desc: "Gains power on the return trip, dealing damage to anything in its path." },
    { name: "Silent", icon: <VolumeX className="w-8 h-8" />, color: "text-purple-400", desc: "Slow, invisible return. Essential for maintaining stealth and resetting." },
    { name: "Violent", icon: <Flame className="w-8 h-8" />, color: "text-red-400", desc: "Rips out of targets viciously, maximizing bleed damage on extraction." },
    { name: "Anchor", icon: <Anchor className="w-8 h-8" />, color: "text-yellow-400", desc: "Pulls the player towards the arrow's location rather than returning the arrow." },
    { name: "Scatter", icon: <Wind className="w-8 h-8" />, color: "text-cyan-400", desc: "Arrows break into fragments upon recall, showering the area with shrapnel." }
  ];

  return (
    <div className="w-full max-w-5xl flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center border-b border-emerald-500/20 pb-4 w-full"
      >
        <h2 className="display text-4xl text-emerald-400 tracking-[0.3em] glow-emerald mb-2">
          Ammunition Recall
        </h2>
        <p className="text-white/50 font-mono tracking-widest text-[10px] uppercase">
          Arrows remain in the world until recalled through a crystal
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
         
         {/* Visual Section */}
         <div className="panel-emerald bg-black/40 border-emerald-500/20 rounded-sm relative overflow-hidden flex flex-col items-center justify-center p-8 h-[400px]">
           <AnimatePresence mode="wait">
             <motion.div
               key={activeRecall}
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 1.1 }}
               transition={{ duration: 0.4 }}
               className="flex flex-col w-full h-full text-center relative z-10"
             >
               {/* Animation Viewport */}
               <div className="w-full h-48 border-b border-white/5 mb-6 bg-gradient-to-t from-white/5 to-transparent rounded-t-lg relative">
                 <RecallAnimations type={recalls[activeRecall].name} />
               </div>
               
               <div className="flex flex-col items-center">
                 <div className={`p-3 rounded-full bg-black/60 border mb-4 shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-colors border-white/10 ${recalls[activeRecall].color}`}>
                   {recalls[activeRecall].icon}
                 </div>
                 
                 <h3 className={`display text-2xl mb-2 ${recalls[activeRecall].color}`}>{recalls[activeRecall].name} Recall</h3>
                 <p className="text-white/70 serif italic text-[14px] leading-relaxed max-w-sm px-4">
                   {recalls[activeRecall].desc}
                 </p>
               </div>
             </motion.div>
           </AnimatePresence>
         </div>

         {/* Selection Menu */}
         <div className="flex flex-col justify-center gap-3">
           {recalls.map((recall, i) => (
             <button
               key={i}
               onClick={() => setActiveRecall(i)}
               className={`flex items-center gap-4 p-4 border border-emerald-500/10 rounded-sm transition-all duration-300 text-left hover:bg-emerald-500/10 ${activeRecall === i ? 'bg-emerald-500/20 border-emerald-500/40 shadow-[0_0_15px_rgba(52,211,153,0.2)]' : 'bg-black/40'}`}
             >
               <div className={`p-2 bg-black/40 rounded-sm ${activeRecall === i ? recall.color : 'text-white/30'}`}>
                 {recall.icon}
               </div>
               <span className={`display text-lg tracking-widest ${activeRecall === i ? 'text-white' : 'text-white/50'}`}>
                 {recall.name}
               </span>
               <div className={`ml-auto w-2 h-2 rounded-full transition-colors ${activeRecall === i ? 'bg-emerald-400' : 'bg-transparent'}`} />
             </button>
           ))}
         </div>
         
      </div>
    </div>
  );
}
