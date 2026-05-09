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
       border: 'border-blue-500/30',
       overviewId: 'magic-overview'
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
          <div key={opt.id} className="relative flex flex-col items-center">
            <motion.button
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
            
            {opt.overviewId && (
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 + 0.4 }}
                onClick={() => onSelect(opt.overviewId!)}
                className="absolute -bottom-14 w-64 h-10 rounded-full border border-cyan-500/40 bg-black/60 shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:border-cyan-400 transition-all duration-300 overflow-hidden group cursor-pointer z-20 flex items-center justify-center"
              >
                {/* Background Dim Liquid */}
                <div className="absolute inset-0 bg-cyan-900/40 transition-colors duration-300 group-hover:bg-cyan-800/40" />

                {/* Animated Liquid Level */}
                <div className="absolute top-0 bottom-0 left-0 w-4/5 bg-cyan-400/40 border-r-2 border-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.8)] transition-all duration-700 ease-out group-hover:w-full group-hover:bg-cyan-400/60" />

                {/* Glass Specular Highlight top */}
                <div className="absolute top-0 left-4 right-4 h-[30%] bg-gradient-to-b from-white/30 to-transparent rounded-full z-10 pointer-events-none" />
                
                {/* Glass Shadow bottom */}
                <div className="absolute bottom-0 left-4 right-4 h-[30%] bg-gradient-to-t from-black/50 to-transparent rounded-full z-10 pointer-events-none" />

                {/* Bubbles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {Array.from({ length: 15 }).map((_, j) => (
                    <motion.div
                      key={j}
                      className="absolute rounded-full bg-cyan-100 shadow-[0_0_5px_rgba(255,255,255,0.8)]"
                      style={{
                        top: `${Math.random() * 60 + 20}%`,
                        width: `${Math.random() * 3 + 1.5}px`,
                        height: `${Math.random() * 3 + 1.5}px`,
                      }}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 270, opacity: [0, 1, 1, 0] }}
                      transition={{
                        duration: Math.random() * 2 + 1.5,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "linear"
                      }}
                    />
                  ))}
                </div>

                {/* Text Content */}
                <span className="relative z-20 font-mono text-[10px] uppercase tracking-widest text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)] group-hover:text-cyan-50 transition-colors duration-300">
                  Quick Overview
                </span>
                
                {/* Cap Left */}
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 border-r border-black/40 z-10 shadow-[inset_-2px_0_4px_rgba(0,0,0,0.5)]" />
                {/* Cap Right */}
                <div className="absolute right-0 top-0 bottom-0 w-3 bg-gradient-to-l from-gray-500 via-gray-400 to-gray-500 border-l border-black/40 z-10 shadow-[inset_2px_0_4px_rgba(0,0,0,0.5)]" />
              </motion.button>
            )}
          </div>
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
