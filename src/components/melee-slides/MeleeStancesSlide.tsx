import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sword } from 'lucide-react';

export default function MeleeStancesSlide() {
  const categories = [
    {
      title: "One-Handed Stances",
      icon: <Sword className="w-4 h-4" />,
      stances: [
        { name: "High Guard", desc: "Raised near head.", skills: "Overhead Slash" },
        { name: "Low Guard", desc: "Held low near hips.", skills: "Rising Slash" },
        { name: "Side Guard", desc: "Held to the side.", skills: "Sweeping Cut" },
        { name: "Forward Point", desc: "Pointed forward.", skills: "Thrust, Pierce" }
      ]
    },
    {
      title: "Two-Handed Stances",
      icon: <Shield className="w-4 h-4" />,
      stances: [
        { name: "Overhead", desc: "Both hands raised high.", skills: "Heavy Cleave" },
        { name: "Low Draw", desc: "Prepared for fast draw.", skills: "Iai Slash" }
      ]
    }
  ];

  return (
    <div className="w-full h-full max-w-5xl flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center border-b border-gold/20 pb-4"
      >
        <h2 className="display text-4xl text-gold tracking-[0.3em] glow-amber mb-2">
          Recognizable Stances
        </h2>
        <p className="text-white/50 font-mono tracking-widest text-[10px] uppercase">
          Each stance receives a subtle recognition glow
        </p>
      </motion.div>

      <div className="flex flex-col gap-6">
        {categories.map((cat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.3 + 0.3, duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4 border-b border-gold/10 pb-2 w-fit">
              <div className="p-1 border border-gold/40 rounded bg-black/40 text-gold">
                {cat.icon}
              </div>
              <h3 className="display text-lg text-white/90">{cat.title}</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {cat.stances.map((stance, j) => (
                <motion.div 
                  key={j} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (i * 0.3) + (j * 0.1) + 0.5, duration: 0.4 }}
                  className="relative p-3 rounded bg-[#0a0a0c] border border-gold/20 group hover:border-gold/60 transition-all overflow-hidden flex flex-col justify-between min-h-[100px]"
                >
                  <motion.div 
                    animate={{ 
                      boxShadow: ["inset 0 0 0px rgba(212,175,55,0)", "inset 0 0 20px rgba(212,175,55,0.3)", "inset 0 0 0px rgba(212,175,55,0)"] 
                    }}
                    transition={{ duration: 2, delay: j * 0.5, repeat: Infinity }}
                    className="absolute inset-0 pointer-events-none rounded"
                  />
                  <div className="relative z-10">
                    <h4 className="display text-sm text-gold mb-1">{stance.name}</h4>
                    <p className="text-white/50 serif italic text-[10px] leading-tight mb-2">{stance.desc}</p>
                  </div>
                  <div className="relative z-10 mt-auto">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-gold/60 block truncate">
                      Skills: <span className="text-white/80">{stance.skills}</span>
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
