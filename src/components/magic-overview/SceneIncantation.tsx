import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mic, Check, AlertTriangle, X } from 'lucide-react';

export default function SceneIncantation() {
  const [active, setActive] = useState(0);
  
  const examples = [
    { type: "None", icon: <Mic className="w-5 h-5" />, color: "text-white", border: "border-white/20", result: "Spell casts normally." },
    { type: "Correct", icon: <Check className="w-5 h-5" />, color: "text-emerald-400", border: "border-emerald-500/40", result: "Gains potency, speed, or cost efficiency." },
    { type: "Partial", icon: <AlertTriangle className="w-5 h-5" />, color: "text-orange-400", border: "border-orange-500/40", result: "Gains a small or unstable bonus." },
    { type: "Wrong", icon: <X className="w-5 h-5" />, color: "text-red-400", border: "border-red-500/40", result: "No bonus. Harmless fizz, normal cast." },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(s => (s + 1) % 4);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="display text-3xl text-purple-400 mb-4 tracking-[0.2em] shadow-purple"
      >
        Optional Voice
      </motion.h2>
      <p className="text-white/70 serif italic mb-12 max-w-xl text-center">
        Voice is a modifier, never a strict requirement. Those who do not speak can still master the arcane arts. Voice simply flavors the delivery.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
        {examples.map((ex, i) => (
          <motion.div
            key={i}
            animate={{ 
              scale: active === i ? 1.05 : 1,
              borderColor: active === i ? ex.border.split('-')[1] : 'rgba(255,255,255,0.1)',
              backgroundColor: active === i ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.4)',
            }}
            className={`p-6 border rounded-sm flex items-start gap-4 transition-all duration-300 panel-purple`}
          >
             <div className={`p-3 rounded-full border bg-black/40 ${ex.color} ${active === i ? ex.border : 'border-white/10'}`}>
               {ex.icon}
             </div>
             <div>
               <h3 className={`display text-lg mb-1 ${ex.color}`}>{ex.type} Incantation</h3>
               <p className="text-white/60 serif italic text-[13px]">{ex.result}</p>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
