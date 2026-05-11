import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, ShieldX, Coins, Wand2 } from 'lucide-react';

export default function RangedCurveSlide() {
  const [activePath, setActivePath] = useState(0);

  const paths = [
    { name: "Normal Aim", result: "Straight Shot", d: "M 50 200 L 450 200" },
    { name: "Roll Left", result: "Curve Left", d: "M 50 200 Q 250 50 450 200" },
    { name: "Roll Right", result: "Curve Right", d: "M 50 200 Q 250 350 450 200" },
    { name: "Tilt Up", result: "Lofted Curve", d: "M 50 250 Q 250 0 450 250" },
    { name: "Tilt Down", result: "Dipping Curve", d: "M 50 150 Q 250 400 450 150" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePath((prev) => (prev + 1) % paths.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-6xl flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center border-b border-emerald-500/20 pb-4 w-full"
      >
        <h2 className="display text-4xl text-emerald-400 tracking-[0.3em] glow-emerald mb-2">
          Range Vision & Curves
        </h2>
        <p className="text-white/50 font-mono tracking-widest text-[10px] uppercase">
          Holding aim longer clarifies the preview (Archer's Thread)
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row w-full gap-8">
        
        {/* Left: Curves Visualization */}
        <div className="flex-1 w-full h-[350px] relative flex flex-col border border-emerald-500/20 panel-emerald rounded-sm overflow-hidden bg-black/40">
           
           <div className="p-4 absolute top-0 left-0 z-10 w-full flex justify-between items-center pointer-events-none">
             <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-emerald-400" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">Archer's Thread</span>
             </div>
             <div className="text-right">
                <div className="font-mono text-[10px] uppercase text-white/50">Input: <span className="text-white">{paths[activePath].name}</span></div>
                <div className="font-mono text-[10px] uppercase text-emerald-400 glow-emerald">{paths[activePath].result}</div>
             </div>
           </div>

           <div className="flex-1 relative flex items-center justify-center mt-12 mb-4">
             {/* Target dummy */}
             <div className="absolute right-12 flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-red-900/40 border border-red-500/50 mb-1" />
                <div className="w-10 h-16 rounded bg-red-900/30 border border-red-500/40 flex items-center justify-center">
                   <div className="w-6 h-6 rounded-full border border-red-500/60 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-red-500/80" />
                   </div>
                </div>
                <div className="w-4 h-10 bg-gray-800 border-x border-gray-600 mt-1" />
             </div>
             
             {/* Player bow approximation */}
             <div className="absolute left-10 flex items-center z-10 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]">
               <svg className="absolute w-48 h-64 overflow-visible -left-12 -top-32" viewBox="0 0 200 300">
                 <path d="M 100 20 C 130 20, 140 80, 100 130" stroke="url(#curveBowGrad)" strokeWidth="6" strokeLinecap="round" fill="none" />
                 <path d="M 100 280 C 130 280, 140 220, 100 170" stroke="url(#curveBowGrad)" strokeWidth="6" strokeLinecap="round" fill="none" />
                 <circle cx="98" cy="15" r="4" fill="#6ee7b7" />
                 <circle cx="98" cy="285" r="4" fill="#6ee7b7" />
                 <rect x="94" y="130" width="12" height="40" rx="3" fill="#1f2937" stroke="#047857" strokeWidth="2" />
                 <defs>
                   <linearGradient id="curveBowGrad" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="#059669" />
                     <stop offset="50%" stopColor="#064e3b" />
                     <stop offset="100%" stopColor="#059669" />
                   </linearGradient>
                 </defs>
               </svg>
             </div>

             <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 400" preserveAspectRatio="none">
               <AnimatePresence mode="popLayout">
                 <motion.path
                   key={activePath}
                   d={paths[activePath].d}
                   fill="transparent"
                   stroke="rgba(52,211,153,0.6)"
                   strokeWidth="3"
                   strokeDasharray="8 8"
                   initial={{ pathLength: 0, opacity: 0 }}
                   animate={{ pathLength: 1, opacity: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 1.5, ease: "easeOut" }}
                   style={{ filter: 'drop-shadow(0px 0px 8px rgba(52,211,153,0.5))' }}
                 />
               </AnimatePresence>
             </svg>
           </div>
        </div>

        {/* Right: Balance Rules */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          <h3 className="display text-xl text-emerald-400 mb-2">Physics & Balance</h3>
          
          <div className="panel-emerald bg-black/40 border-emerald-500/10 p-4 rounded-sm flex items-start gap-4">
            <ShieldX className="w-5 h-5 text-red-400 shrink-0 mt-1" />
            <div>
               <h4 className="font-mono text-[10px] uppercase tracking-widest text-white/80 mb-1">Momentum Decay</h4>
               <p className="text-white/50 text-[12px] serif italic">Stronger curves inherently reduce speed, raw damage, and armor penetration.</p>
            </div>
          </div>
          
          <div className="panel-emerald bg-black/40 border-emerald-500/10 p-4 rounded-sm flex items-start gap-4">
            <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-1"><span className="text-orange-400 font-bold border-b-2 border-orange-400">H</span></div>
            <div>
               <h4 className="font-mono text-[10px] uppercase tracking-widest text-white/80 mb-1">Ammunition Weight</h4>
               <p className="text-white/50 text-[12px] serif italic">Heavy bolts (crossbows) curve significantly less than lightweight arrows.</p>
            </div>
          </div>

          <div className="panel-emerald bg-black/40 border-emerald-500/10 p-4 rounded-sm flex items-start gap-4">
            <Coins className="w-5 h-5 text-gold shrink-0 mt-1" />
            <div>
               <h4 className="font-mono text-[10px] uppercase tracking-widest text-white/80 mb-1">Magical Toll</h4>
               <p className="text-white/50 text-[12px] serif italic">Violent, unnatural curve paths consume Vitae or require a slotted skillstone.</p>
            </div>
          </div>

          <div className="panel-emerald bg-black/40 border-emerald-500/10 p-4 rounded-sm flex items-start gap-4">
            <Wand2 className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
            <div>
               <h4 className="font-mono text-[10px] uppercase tracking-widest text-white/80 mb-1">PvP Reading</h4>
               <p className="text-white/50 text-[12px] serif italic">Enemies receive subtle magical trail tells indicating an incoming bent shot.</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
