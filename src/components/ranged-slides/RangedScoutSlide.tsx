import React from 'react';
import { motion } from 'motion/react';
import { Telescope, Crosshair, Map, Wind, Eye, Scan } from 'lucide-react';

export default function RangedScoutSlide() {
  const abilities = [
    { icon: <Telescope className="w-5 h-5" />, name: "Eagle Eye", desc: "Magnification without full-screen nausea." },
    { icon: <Crosshair className="w-5 h-5" />, name: "Weakpoint Mark", desc: "Highlights structural flaws for the party." },
    { icon: <Map className="w-5 h-5" />, name: "Trail Sight", desc: "Reveals footprints and recent entity passage." },
    { icon: <Wind className="w-5 h-5" />, name: "Wind Read", desc: "Visualizes physical air currents affecting ballistics." },
    { icon: <Eye className="w-5 h-5" />, name: "Watchpoint", desc: "Places a temporary arcane camera at an arrow's impact site." },
    { icon: <Scan className="w-5 h-5" />, name: "Survey Pulse", desc: "Sends a wave revealing hidden geography and traps." }
  ];

  return (
    <div className="w-full max-w-6xl flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center border-b border-emerald-500/20 pb-4 w-full"
      >
        <h2 className="display text-4xl text-emerald-400 tracking-[0.3em] glow-emerald mb-2">
          The Scout Role
        </h2>
        <p className="text-white/50 font-mono tracking-widest text-[10px] uppercase">
          Information superiority & VR comfort
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row w-full gap-12">
        {/* VR Comfort Callout */}
        <div className="w-full md:w-1/3 flex flex-col justify-center gap-6">
           <div className="panel-emerald bg-black/40 border-emerald-500/30 p-8 rounded-sm relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <Eye className="w-32 h-32 text-emerald-400" />
             </div>
             
             <h3 className="display text-2xl text-emerald-300 mb-4 relative z-10">VR Comfort Lens</h3>
             <p className="text-white/70 serif italic text-[14px] leading-relaxed relative z-10">
               To prevent simulation sickness during scouting, we completely avoid full-screen zoom effects.
             </p>
             <p className="text-white/70 serif italic text-[14px] leading-relaxed relative z-10 mt-4">
               Instead, magnification is handled via stabilized circular lenses, crystal scopes attached to the bow, or handheld spyglasses—creating a "picture in picture" effect that preserves the player's peripheral grounding.
             </p>
           </div>
        </div>

        {/* Scout Abilities Grid */}
        <div className="flex-1">
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {abilities.map((ability, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.1, duration: 0.5 }}
                 className="flex items-center gap-4 bg-black/40 border border-emerald-500/10 p-4 rounded-sm hover:border-emerald-500/30 transition-colors"
               >
                 <div className="p-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full shrink-0">
                   {ability.icon}
                 </div>
                 <div>
                   <h4 className="display text-sm text-emerald-100">{ability.name}</h4>
                   <p className="text-white/50 font-mono text-[9px] uppercase tracking-wide mt-1">{ability.desc}</p>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
}
