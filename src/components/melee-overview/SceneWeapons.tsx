import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sword, CircleDot, Shield, Target } from 'lucide-react';

export default function SceneWeapons() {
  const [active, setActive] = useState(0);

  const weapons = [
    { name: "Longsword", icon: <Sword className="w-12 h-12" />, flavor: "Balanced stance flow, light beams." },
    { name: "Greatsword", icon: <Sword className="w-16 h-16 rotate-180" />, flavor: "Heavy commitment, slow charged cuts." },
    { name: "Spear", icon: <Target className="w-12 h-12" />, flavor: "Forward point, linear thrust, range control." },
    { name: "Shield", icon: <Shield className="w-12 h-12" />, flavor: "Defensive bash, parries, guard." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(s => (s + 1) % weapons.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="display text-3xl text-gold mb-12 tracking-[0.2em] glow-amber"
      >
        Weapon Identity
      </motion.h2>

      <div className="relative w-full max-w-3xl h-[300px] panel-gold bg-black/40 border border-gold/20 rounded-sm flex items-center justify-center p-8 overflow-hidden">
        
        <AnimatePresence mode="wait">
           <motion.div
             key={active}
             initial={{ opacity: 0, scale: 0.8, x: 20 }}
             animate={{ opacity: 1, scale: 1, x: 0 }}
             exit={{ opacity: 0, scale: 1.2, x: -20 }}
             transition={{ duration: 0.4 }}
             className="flex flex-col items-center text-center"
           >
              <div className="p-8 rounded-full border border-gold/30 text-gold mb-6 bg-black/40 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                {weapons[active].icon}
              </div>
              <h3 className="display text-3xl text-white mb-2">{weapons[active].name}</h3>
              <p className="text-white/60 font-mono text-[11px] uppercase tracking-widest">{weapons[active].flavor}</p>
           </motion.div>
        </AnimatePresence>
        
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          {weapons.map((w, i) => (
             <div key={i} className={`w-2 h-8 rounded-sm transition-colors ${active === i ? 'bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]' : 'bg-white/10'}`} />
          ))}
        </div>

      </div>
    </div>
  );
}
