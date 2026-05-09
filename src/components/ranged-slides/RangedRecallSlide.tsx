import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Activity, VolumeX, Flame, Anchor, Wind } from 'lucide-react';

export default function RangedRecallSlide() {
  const [activeRecall, setActiveRecall] = useState(0);

  const recalls = [
    { name: "Quick", icon: <Zap className="w-8 h-8" />, color: "text-blue-400", desc: "Instant snap back to the quiver. Ideal for high-uptime combat loops." },
    { name: "Charged", icon: <Activity className="w-8 h-8" />, color: "text-emerald-400", desc: "Gains power on the return trip, dealing damage to anything in its path." },
    { name: "Silent", icon: <VolumeX className="w-8 h-8" />, color: "text-purple-400", desc: "Slow, invisible return. Essential for maintaining stealth and resetting." },
    { name: "Violent", icon: <Flame className="w-8 h-8" />, color: "text-red-400", desc: "Rips out of targets viciously, maximizing bleed damage on extraction." },
    { name: "Anchor", icon: <Anchor className="w-8 h-8" />, color: "text-gold", desc: "Pulls the player towards the arrow's location rather than returning the arrow." },
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
         <div className="panel-emerald bg-black/40 border-emerald-500/20 rounded-sm relative overflow-hidden flex flex-col items-center justify-center p-8 h-[350px]">
           <AnimatePresence mode="wait">
             <motion.div
               key={activeRecall}
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 1.2 }}
               transition={{ duration: 0.4 }}
               className="flex flex-col items-center text-center relative z-10"
             >
               <div className={`p-6 rounded-full bg-black/60 border mb-6 shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-colors border-white/10 ${recalls[activeRecall].color}`}>
                 {recalls[activeRecall].icon}
               </div>
               
               <h3 className={`display text-2xl mb-4 ${recalls[activeRecall].color}`}>{recalls[activeRecall].name} Recall</h3>
               <p className="text-white/70 serif italic text-[14px] leading-relaxed max-w-sm">
                 {recalls[activeRecall].desc}
               </p>
             </motion.div>
           </AnimatePresence>

           {/* Pulse effect */}
           <motion.div 
             animate={{ scale: [1, 2], opacity: [0.3, 0] }}
             transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
             className="absolute w-32 h-32 border border-emerald-400/30 rounded-full"
           />
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
