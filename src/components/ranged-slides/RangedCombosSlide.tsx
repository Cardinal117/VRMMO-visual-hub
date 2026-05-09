import React from 'react';
import { motion } from 'motion/react';
import { Layers } from 'lucide-react';

export default function RangedCombosSlide() {
  const combos = [
    { quiver: "Back Quiver", form: "Full Draw", result: "Power Shot", desc: "Standard heavy sustained damage." },
    { quiver: "Back Quiver", form: "Snap Draw", result: "Quick Shot", desc: "Fast interrupts and light tagging." },
    { quiver: "Left Quiver", form: "High Arc", result: "Smoke Volley", desc: "Area denial and vision obscuring." },
    { quiver: "Left Quiver", form: "Held Mark", result: "Binding Shot", desc: "Locks target in place after delay." },
    { quiver: "Right Quiver", form: "Full Draw", result: "Lightning Pierce", desc: "Energy beam ignoring physical armor." },
    { quiver: "Right Quiver", form: "Overdraw", result: "Dragonbone Breaker", desc: "Massive stagger, high stamina cost." },
    { quiver: "Left Quiver", form: "Ground Aim", result: "Root Snare", desc: "Lays a trap that blooms on proximity." },
    { quiver: "Back Quiver", form: "Wall Angle", result: "Ricochet Shot", desc: "Bounces off hard surfaces for trick shots." },
  ];

  return (
    <div className="w-full max-w-6xl flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center border-b border-emerald-500/20 pb-4 w-full"
      >
        <h2 className="display text-4xl text-emerald-400 tracking-[0.3em] glow-emerald mb-2">
          Synergy & Synthesis
        </h2>
        <p className="text-white/50 font-mono tracking-widest text-[10px] uppercase">
          Quiver Choice + Physical Form = Execution
        </p>
      </motion.div>

      <div className="w-full relative">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           {combos.map((combo, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1, duration: 0.5 }}
               className="panel-emerald bg-black/40 border-emerald-500/20 p-5 rounded-sm relative group overflow-hidden flex flex-col"
             >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-sm">
                    {combo.quiver}
                  </span>
                  <span className="text-white/40 text-xs">+</span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-300 bg-emerald-400/10 px-2 py-1 rounded-sm">
                    {combo.form}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-2 mt-2">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <h4 className="display text-md text-white/90">{combo.result}</h4>
                </div>

                <p className="text-white/50 text-[12px] serif italic mt-auto">
                  {combo.desc}
                </p>
             </motion.div>
           ))}
         </div>
      </div>
    </div>
  );
}
