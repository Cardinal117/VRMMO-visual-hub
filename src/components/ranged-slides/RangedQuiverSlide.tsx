import React from 'react';
import { motion } from 'motion/react';
import { Archive, Backpack, Box } from 'lucide-react';

export const QuiverVisual = ({ type }: { type: string }) => {
  switch(type) {
    case 'Core':
      return (
        <div className="relative w-16 h-32 flex flex-col items-center perspective-[500px]">
          {/* Arrows sticking out */}
          <div className="absolute -top-6 flex gap-1 items-end justify-center w-full h-10 z-0">
            <div className="w-1.5 h-16 bg-gradient-to-b from-gray-300 to-gray-500 rounded-sm rotate-[-15deg] origin-bottom shadow-[0_0_8px_rgba(52,211,153,0.6)]">
               <div className="w-3 h-4 bg-emerald-200/80 -ml-[3px] rounded-t-sm" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} />
            </div>
            <div className="w-1.5 h-20 bg-gradient-to-b from-gray-300 to-gray-500 rounded-sm rotate-[-5deg] origin-bottom shadow-[0_0_8px_rgba(52,211,153,0.5)]">
               <div className="w-3 h-4 bg-emerald-300/80 -ml-[3px] rounded-t-sm" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} />
            </div>
            <div className="w-1.5 h-18 bg-gradient-to-b from-gray-300 to-gray-500 rounded-sm rotate-[8deg] origin-bottom shadow-[0_0_8px_rgba(52,211,153,0.6)]">
               <div className="w-3 h-4 bg-emerald-100/80 -ml-[3px] rounded-t-sm" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} />
            </div>
            <div className="w-1.5 h-14 bg-gradient-to-b from-gray-300 to-gray-500 rounded-sm rotate-[18deg] origin-bottom shadow-[0_0_8px_rgba(52,211,153,0.5)]">
               <div className="w-3 h-4 bg-emerald-400/80 -ml-[3px] rounded-t-sm" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} />
            </div>
          </div>
          {/* Quiver Body */}
          <div className="relative w-14 h-32 bg-gradient-to-b from-[#1a2e20] to-[#0a1510] border-x border-b border-emerald-900 rounded-b-xl rounded-t-sm shadow-[0_10px_20px_rgba(0,0,0,0.8)] z-10 flex flex-col items-center overflow-hidden">
             <div className="w-full h-3 border-y border-emerald-500/50 bg-emerald-900/60 mt-2" />
             <div className="w-8 h-8 rounded-full border border-emerald-500/30 flex items-center justify-center mt-4">
                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
             </div>
             {/* Faint Glow */}
             <div className="absolute inset-0 bg-emerald-500/5 blur-xl pointer-events-none" />
          </div>
        </div>
      );
    case 'Utility':
      return (
        <div className="relative w-16 h-32 flex flex-col items-center perspective-[500px]">
          {/* Arrows */}
          <div className="absolute -top-5 flex gap-1.5 items-end justify-center w-full h-10 z-0 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
            <div className="w-1 h-14 bg-blue-300 rounded-full rotate-[-12deg] origin-bottom"><div className="w-2 h-3 bg-white mt-[-2px] -ml-[2px] rounded-t-sm"/></div>
            <div className="w-1 h-16 bg-blue-400 rounded-full rotate-[0deg] origin-bottom"><div className="w-2 h-3 bg-white mt-[-2px] -ml-[2px] rounded-t-sm"/></div>
            <div className="w-1 h-12 bg-blue-300 rounded-full rotate-[15deg] origin-bottom"><div className="w-2 h-3 bg-white mt-[-2px] -ml-[2px] rounded-t-sm"/></div>
          </div>
          {/* Quiver Body */}
          <div className="relative w-12 h-28 bg-gradient-to-b from-[#101a2e] to-[#050a15] border-x border-b border-blue-900 rounded-b-[30px] rounded-t-sm shadow-[0_10px_20px_rgba(0,0,0,0.8)] z-10 flex flex-col items-center overflow-hidden mt-4">
             <div className="w-full h-6 border-y border-blue-500/50 bg-blue-900/40 mt-2 flex justify-center items-center">
                <div className="flex gap-1"><div className="w-1 h-3 bg-blue-400/50"/><div className="w-1 h-3 bg-blue-400/50"/></div>
             </div>
             {/* Faint Glow */}
             <div className="absolute inset-0 bg-blue-500/10 blur-xl pointer-events-none" />
          </div>
        </div>
      );
    case 'Heavy':
      return (
        <div className="relative w-16 h-32 flex flex-col items-center perspective-[500px]">
          {/* Heavy Bolts */}
          <div className="absolute -top-7 flex gap-2 items-end justify-center w-full h-10 z-0 drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]">
            <div className="w-2 h-16 bg-orange-400 rounded-sm rotate-[-5deg] origin-bottom" style={{clipPath: 'polygon(50% 0%, 100% 10%, 100% 100%, 0% 100%, 0% 10%)'}} />
            <div className="w-2 h-20 bg-orange-500 rounded-sm rotate-[8deg] origin-bottom" style={{clipPath: 'polygon(50% 0%, 100% 10%, 100% 100%, 0% 100%, 0% 10%)'}} />
          </div>
          {/* Quiver Body */}
          <div className="relative w-16 h-32 bg-gradient-to-b from-[#2e1510] to-[#150a05] border-x-2 border-b-2 border-orange-900 rounded-sm shadow-[0_10px_20px_rgba(0,0,0,0.8)] z-10 flex flex-col items-center overflow-hidden mt-1">
             <div className="w-full h-2 bg-orange-900/60 mt-4" />
             <div className="w-full h-2 bg-orange-900/60 mt-1" />
             <div className="w-10 h-10 border-2 border-orange-500/30 rotate-45 mt-6 flex items-center justify-center">
               <div className="w-3 h-3 bg-orange-500/80" />
             </div>
             {/* Faint Glow */}
             <div className="absolute inset-0 bg-orange-500/5 blur-xl pointer-events-none" />
          </div>
        </div>
      );
    default: return null;
  }
};

export default function RangedQuiverSlide() {
  const quivers = [
    {
      type: "Core",
      title: "Back Quiver",
      role: "Core Combat",
      traits: ["Quick Shot", "Power Shot", "Pierce", "Mark"],
      desc: "Your primary damage dealing and sustained combat ammunition."
    },
    {
      type: "Utility",
      title: "Left Hip Quiver",
      role: "Utility & Control",
      traits: ["Smoke", "Rope", "Flare", "Binding", "Silence"],
      desc: "Tactical arrows designed to manipulate the battlefield and control crowds."
    },
    {
      type: "Heavy",
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
            
            <div className="pt-8 pb-4 relative z-10 group-hover:scale-110 transition-transform">
              <QuiverVisual type={quiver.type} />
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
