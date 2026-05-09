import React from 'react';
import { Sparkles, Swords, Crosshair } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hub({ onSelect }: { onSelect: (id: string) => void }) {
  const options = [
    {
       id: 'magic',
       title: 'AETHERIUM',
       subtitle: 'Arcane System',
       icon: <Sparkles className="w-16 h-16" />,
       color: 'text-blue-400',
       border: 'border-blue-500/30'
    },
    {
       id: 'melee',
       title: 'KINESIS',
       subtitle: 'Melee System',
       icon: <Swords className="w-16 h-16" />,
       color: 'text-gold',
       border: 'border-gold/30',
       glow: 'glow-amber'
    },
    {
       id: 'ranged',
       title: 'APEX',
       subtitle: 'Ranged System',
       icon: <Crosshair className="w-16 h-16" />,
       color: 'text-emerald-400',
       border: 'border-emerald-500/30',
       locked: false,
       glow: 'glow-emerald'
    }
  ];

  return (
    <div className="w-full h-screen bg-arcane relative flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center z-10"
      >
        <h1 className="display text-4xl text-white tracking-[0.3em] mb-4">
          Combat <span className="text-gold">Hub</span>
        </h1>
        <p className="text-white/50 font-mono tracking-widest text-[10px] uppercase">
          Select an exploration module
        </p>
      </motion.div>

      <div className="flex gap-8 z-10">
        {options.map((opt, i) => (
          <motion.button
            key={opt.id}
            onClick={() => !opt.locked && onSelect(opt.id)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15 + 0.2 }}
            disabled={opt.locked}
            className={`relative group p-8 w-64 h-80 flex flex-col items-center justify-center panel-gold border ${opt.border} rounded-sm transition-all duration-500 
              ${opt.locked ? 'opacity-40 grayscale cursor-not-allowed' : 'hover:scale-105 hover:bg-white/5 cursor-pointer'}`}
          >
            {!opt.locked && (
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            )}
            
            <div className={`mb-8 transition-transform duration-500 group-hover:-translate-y-2 ${opt.color} ${opt.glow || ''}`}>
              {opt.icon}
            </div>
            
            <h2 className={`display text-xl mb-2 transition-colors duration-300 ${opt.locked ? 'text-white/50' : opt.color}`}>
              {opt.title}
            </h2>
            
            <p className="text-[10px] uppercase font-mono tracking-widest text-white/50 group-hover:text-white/80 transition-colors">
              {opt.locked ? '[ CLASSIFIED ]' : opt.subtitle}
            </p>
          </motion.button>
        ))}
      </div>
      
      {/* Background Magic Particles/Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20 blur-[2px]"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + Math.random() * 200,
              opacity: Math.random() * 0.5,
              scale: Math.random() * 2 + 1
            }}
            animate={{ 
              y: -100,
              x: `calc(${Math.random() * 100 - 50}vw)`,
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10 
            }}
            style={{ width: 2, height: 2 }}
          />
        ))}
      </div>
    </div>
  );
}
