import React from 'react';
import { motion } from 'motion/react';
import { Archive, Backpack, Box } from 'lucide-react';

export default function RangedQuiverSlide() {
  const quivers = [
    {
      icon: <Backpack className="w-8 h-8 text-emerald-400" />,
      title: "Back Quiver",
      role: "Core Combat",
      traits: ["Quick Shot", "Power Shot", "Pierce", "Mark"],
      desc: "Your primary damage dealing and sustained combat ammunition."
    },
    {
      icon: <Archive className="w-8 h-8 text-blue-400" />,
      title: "Left Hip Quiver",
      role: "Utility & Control",
      traits: ["Smoke", "Rope", "Flare", "Binding", "Silence"],
      desc: "Tactical arrows designed to manipulate the battlefield and control crowds."
    },
    {
      icon: <Box className="w-8 h-8 text-orange-400" />,
      title: "Right Hip Quiver",
      role: "Heavy & Magical",
      traits: ["Lightning Pierce", "Breaker", "Explosive", "Boss Tools"],
      desc: "High cost, high impact specialized tools for armored targets or massive damage."
    }
  ];

  return (
    <div className="w-full max-w-5xl flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center border-b border-emerald-500/20 pb-4 w-full"
      >
        <h2 className="display text-4xl text-emerald-400 tracking-[0.3em] glow-emerald mb-2">
          Quiver Loadout
        </h2>
        <p className="text-white/50 font-mono tracking-widest text-[10px] uppercase">
          Dynamic combat through physical inventory placement
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {quivers.map((quiver, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 + 0.3, duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center panel-emerald p-8 rounded-sm border border-emerald-500/10 group hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all text-center relative overflow-hidden"
          >
            {/* Subtle glow background */}
            <div className={`absolute top-0 w-full h-1/2 opacity-0 group-hover:opacity-10 transition-opacity blur-2xl rounded-full ${i===0 ? 'bg-emerald-400' : i===1 ? 'bg-blue-400' : 'bg-orange-400'}`} />
            
            <div className="p-4 rounded-full bg-black/40 border border-white/10 mb-6 relative z-10 group-hover:scale-110 transition-transform">
              {quiver.icon}
            </div>
            
            <h3 className="display text-xl text-white mb-1 relative z-10">{quiver.title}</h3>
            <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 font-bold mb-4 border-b border-emerald-500/20 pb-1 relative z-10">
              [ {quiver.role} ]
            </span>
            
            <p className="text-white/60 text-[13px] serif italic mb-6 leading-relaxed relative z-10 h-16">
              {quiver.desc}
            </p>

            <div className="flex flex-wrap gap-2 justify-center w-full mt-auto relative z-10">
               {quiver.traits.map((trait, j) => (
                 <span key={j} className="text-[9px] font-mono uppercase tracking-widest text-white/50 bg-black/40 px-2 py-1 rounded-sm border border-white/10">
                   {trait}
                 </span>
               ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
