import React from 'react';
import { motion } from 'motion/react';
import { Target, Zap, ArrowUp, Crosshair, Sparkles, Navigation, Layers, Flame } from 'lucide-react';

export default function RangedDrawSlide() {
  const forms = [
    { icon: <Target className="w-5 h-5" />, name: "Full Draw", desc: "Maximum power and armor pierce. Requires steady hold." },
    { icon: <Zap className="w-5 h-5" />, name: "Snap Draw", desc: "Fast interrupt and quick tagging. Minimal physical draw." },
    { icon: <ArrowUp className="w-5 h-5" />, name: "High Arc", desc: "Volley and area-of-effect delivery tracking." },
    { icon: <Crosshair className="w-5 h-5" />, name: "Ground Aim", desc: "Tunneling or trap placement along the floor." },
    { icon: <Sparkles className="w-5 h-5" />, name: "Held Mark", desc: "Binding and weakpoint highlighting over time." },
    { icon: <Navigation className="w-5 h-5" />, name: "Side Draw", desc: "Curve shots and evasive repositioning." },
    { icon: <Layers className="w-5 h-5" />, name: "Double Nock", desc: "Split shot capable of hitting dual targets." },
    { icon: <Flame className="w-5 h-5" />, name: "Overdraw", desc: "High-risk, high-reward breaker shot causing physical strain." },
  ];

  return (
    <div className="w-full max-w-5xl flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center border-b border-emerald-500/20 pb-4"
      >
        <h2 className="display text-4xl text-emerald-400 tracking-[0.3em] glow-emerald mb-2">
          Draw Forms
        </h2>
        <p className="text-white/50 font-mono tracking-widest text-[10px] uppercase">
          Physical intent dictates the skill output
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {forms.map((form, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
            className="flex items-start gap-4 panel-emerald p-4 rounded-sm border border-emerald-500/10 hover:border-emerald-500/40 transition-colors group relative overflow-hidden"
          >
            <div className="p-3 border border-emerald-500/30 rounded-sm bg-black/40 text-emerald-400 shrink-0 group-hover:bg-emerald-500/10 transition-colors">
              {form.icon}
            </div>
            
            <div className="flex flex-col h-full justify-center">
              <h4 className="display text-lg text-emerald-300 mb-1">{form.name}</h4>
              <p className="text-white/60 serif italic text-[13px]">{form.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
