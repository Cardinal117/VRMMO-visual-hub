import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, BookMarked, Swords, Crown, GitMerge, Zap } from 'lucide-react';

export default function MeleeProgressionSlide() {
  const stages = {
    novice: { icon: <ShieldAlert className="w-6 h-6 text-gold" />, title: "Novice", desc: "Basic strikes & easy recognition." },
    branch1: { icon: <BookMarked className="w-6 h-6 text-gold" />, title: "One-Handed Adept", desc: "Fast, evasive combat." },
    branch2: { icon: <BookMarked className="w-6 h-6 text-gold" />, title: "Two-Handed Adept", desc: "Heavy, deliberate attacks." },
    expert: { icon: <GitMerge className="w-6 h-6 text-gold" />, title: "Expert", desc: "Stance chaining & active combos." },
    master: { icon: <Crown className="w-6 h-6 text-gold" />, title: "Master", desc: "Cancels, Counters & Signature Arts." },
  };

  const Node = ({ id, node, delay }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6, type: "spring", bounce: 0.4 }}
      className="relative z-10 flex flex-col items-center group w-48"
    >
      <div className="w-16 h-16 rounded-full panel-gold border border-gold/40 flex items-center justify-center bg-black/80 shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all mb-3 z-10">
        {node.icon}
      </div>
      <div className="text-center">
        <h3 className="display text-lg text-gold group-hover:glow-amber transition-all mb-1">{node.title}</h3>
        <p className="font-mono text-[9px] uppercase text-white/50 leading-tight">{node.desc}</p>
      </div>
    </motion.div>
  );

  return (
    <div className="w-full h-full max-w-5xl flex flex-col justify-center items-center relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 text-center border-b border-gold/20 pb-4 w-full"
      >
        <h2 className="display text-4xl text-gold tracking-[0.3em] glow-amber mb-2">
          Mastery Tree
        </h2>
        <p className="text-white/50 font-mono tracking-widest text-[10px] uppercase">
          Branching paths of physical skill expression
        </p>
      </motion.div>

      {/* Tree Visualization */}
      <div className="relative mt-24 flex flex-col items-center w-full max-w-3xl transform scale-90">
        {/* SVG connecting lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ minHeight: '400px' }}>
           <defs>
             <linearGradient id="lineGrad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="400">
               <stop offset="0%" stopColor="rgba(212,175,55,0.1)" />
               <stop offset="50%" stopColor="rgba(212,175,55,0.4)" />
               <stop offset="100%" stopColor="rgba(212,175,55,0.8)" />
             </linearGradient>
           </defs>
           <motion.path 
             initial={{ pathLength: 0, opacity: 0 }}
             animate={{ pathLength: 1, opacity: 1 }}
             transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
             d="M 50% 50 L 50% 120 M 50% 120 L 25% 180 M 50% 120 L 75% 180 M 25% 260 L 50% 320 M 75% 260 L 50% 320 M 50% 320 L 50% 400"
             stroke="url(#lineGrad)" 
             strokeWidth="2" 
             fill="none" 
             className="drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]"
           />
        </svg>

        {/* Nodes Layer - absolute positioning grid over the lines */}
        <div className="relative w-full h-[450px]">
           {/* Level 1: Novice */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2">
             <Node id="novice" node={stages.novice} delay={0.2} />
           </div>

           {/* Level 2: Branches */}
           <div className="absolute top-[160px] left-1/4 -translate-x-1/2">
             <Node id="branch1" node={stages.branch1} delay={0.6} />
           </div>
           <div className="absolute top-[160px] left-3/4 -translate-x-1/2">
             <Node id="branch2" node={stages.branch2} delay={0.6} />
           </div>

           {/* Level 3: Expert */}
           <div className="absolute top-[300px] left-1/2 -translate-x-1/2">
             <Node id="expert" node={stages.expert} delay={1.0} />
           </div>

           {/* Level 4: Master */}
           <div className="absolute top-[400px] left-1/2 -translate-x-1/2">
             <motion.div
               initial={{ opacity: 0, scale: 0.5, y: 50 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               transition={{ delay: 1.5, duration: 0.8, type: "spring", bounce: 0.5 }}
               className="relative z-10 flex flex-col items-center group w-64 mt-10"
             >
                <div className="w-24 h-24 rounded-full panel-gold border-2 border-amber-400 flex items-center justify-center bg-black/90 shadow-[0_0_30px_rgba(251,191,36,0.4)] group-hover:shadow-[0_0_50px_rgba(251,191,36,0.8)] transition-all mb-4 z-10 relative">
                  <div className="absolute inset-0 rounded-full border border-gold/30 animate-[spin_4s_linear_infinite]" />
                  <div className="absolute inset-2 rounded-full border border-gold/30 animate-[spin_6s_linear_infinite_reverse]" />
                  {stages.master.icon}
                  <Zap className="absolute top-0 right-0 w-6 h-6 text-white drop-shadow-[0_0_5px_rgba(255,255,255,1)]" />
                </div>
                <div className="text-center bg-black/60 px-4 py-2 rounded border border-gold/20 backdrop-blur-md">
                  <h3 className="display text-2xl text-amber-400 glow-amber mb-1">{stages.master.title}</h3>
                  <p className="font-mono text-[10px] uppercase text-white/70 leading-tight">{stages.master.desc}</p>
                </div>
             </motion.div>
           </div>
        </div>
      </div>
    </div>
  );
}

