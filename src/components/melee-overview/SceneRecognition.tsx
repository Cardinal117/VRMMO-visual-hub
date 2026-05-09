import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Activity, Focus, Zap, Focus as FocusIcon } from 'lucide-react';

export default function SceneRecognition() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulse(p => !p);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="display text-3xl text-gold mb-12 tracking-[0.2em] glow-amber"
      >
        Recognition Rules
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
        
        {/* Left: Body Zones */}
        <div className="flex-1 panel-gold bg-black/40 border border-gold/20 rounded-sm p-8 flex items-center justify-center relative">
           <div className="relative flex flex-col items-center">
             <motion.div animate={{ borderColor: pulse ? 'rgba(212,175,55,0.8)' : 'rgba(212,175,55,0.2)' }} className="w-16 h-16 border-2 border-dashed rounded-full mb-2 flex items-center justify-center"><span className="text-[8px] font-mono text-gold/50">HEAD</span></motion.div>
             <div className="flex gap-4">
               <motion.div animate={{ borderColor: pulse ? 'rgba(212,175,55,0.8)' : 'rgba(212,175,55,0.2)' }} className="w-12 h-12 border-2 border-dashed rounded-full mt-4 flex items-center justify-center"><span className="text-[8px] font-mono text-gold/50">HAND</span></motion.div>
               <div className="w-20 h-24 border border-gold/20 flex flex-col items-center justify-center"><span className="text-[8px] font-mono text-gold/50">CHEST</span></div>
               <motion.div animate={{ borderColor: pulse ? 'rgba(212,175,55,0.8)' : 'rgba(212,175,55,0.2)' }} className="w-12 h-12 border-2 border-dashed rounded-full mt-4 flex items-center justify-center"><span className="text-[8px] font-mono text-gold/50">HAND</span></motion.div>
             </div>
             <div className="w-24 h-12 border border-gold/20 mt-2 flex items-center justify-center"><span className="text-[8px] font-mono text-gold/50">HIPS</span></div>
           </div>
           
           <div className="absolute top-4 right-4 text-right">
             <span className="font-mono text-[9px] uppercase tracking-widest text-white/50 block">Forgiving</span>
             <span className="font-mono text-[9px] uppercase tracking-widest text-gold glow-amber">Broad Zones</span>
           </div>
        </div>

        {/* Right: Feedback Loop */}
        <div className="flex-1 flex flex-col gap-4">
           {[ 
             { icon: <FocusIcon />, text: "Subtle Weapon Glow (Stance)" },
             { icon: <Activity />, text: "Confirmation Pulse (Charge)" },
             { icon: <Activity className="text-orange-400" />, text: "Haptic Implication (Lock)" },
             { icon: <Zap className="text-white" />, text: "Visual Flash (Release)" }
           ].map((fb, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: i * 0.2 }}
               className="panel-gold bg-black/40 border border-gold/10 p-4 rounded-sm flex items-center gap-4"
             >
               <div className="text-gold">{fb.icon}</div>
               <span className="font-mono text-[10px] uppercase tracking-widest text-white/80">{fb.text}</span>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
}
