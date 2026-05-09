import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sword } from 'lucide-react';

export default function MeleeStancesSlide() {
  const categories = [
    {
      title: "One-Handed Stances",
      stances: [
        { name: "High Guard", desc: "Weapon raised near or above the head.", skills: "Overhead Slash, Wind Slash" },
        { name: "Low Guard", desc: "Weapon held low near hips or side.", skills: "Rising Slash, Draw Cut" },
        { name: "Side Guard", desc: "Weapon held to the left or right side.", skills: "Sweeping Cut, Cleave" },
        { name: "Forward Point", desc: "Weapon pointed forward at the target.", skills: "Thrust, Dash Pierce" }
      ]
    },
    {
      title: "Two-Handed Stances",
      stances: [
        { name: "Two-Hand Overhead", desc: "Both hands on weapon, raised high.", skills: "Crescent Wave, Heavy Cleave" },
        { name: "Two-Hand Low Draw", desc: "Both hands low, prepared for fast draw.", skills: "Iai Slash, Shock Cut" }
      ]
    }
  ];

  return (
    <div className="w-full max-w-5xl flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center border-b border-gold/20 pb-4"
      >
        <h2 className="display text-4xl text-gold tracking-[0.3em] glow-amber mb-2">
          Recognizable Stances
        </h2>
        <p className="text-white/50 font-mono tracking-widest text-[10px] uppercase">
          Each stance receives a subtle recognition glow
        </p>
      </motion.div>

      <div className="flex flex-col gap-10">
        {categories.map((cat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.3 + 0.3, duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2 border border-gold/40 rounded-sm bg-black/40 text-gold">
                {i === 0 ? <Sword className="w-5 h-5" /> : <Shield className="w-5 h-5" />}
              </div>
              <h3 className="display text-xl text-white/90">{cat.title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cat.stances.map((stance, j) => (
                <div key={j} className="panel-gold p-5 rounded-sm border border-gold/10 hover:border-gold/40 transition-colors group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <h4 className="display text-lg text-gold mb-1">{stance.name}</h4>
                    <p className="text-white/60 serif italic text-[12px] mb-4 flex-grow">{stance.desc}</p>
                    <div className="mt-auto">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-gold/40 border-b border-gold/20 pb-1 mb-2 block">
                        Possible Skills
                      </span>
                      <p className="text-white/90 text-xs font-bold uppercase tracking-wider">{stance.skills}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
