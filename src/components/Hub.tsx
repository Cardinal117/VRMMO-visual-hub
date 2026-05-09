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
       glow: 'glow-amber',
       overviewId: 'melee-overview'
    },
    {
       id: 'ranged',
       title: 'APEX',
       subtitle: 'Ranged System',
       icon: <Crosshair className="w-16 h-16" />,
       color: 'text-emerald-400',
       border: 'border-emerald-500/30',
       locked: false,
       glow: 'glow-emerald',
       overviewId: 'ranged-overview'
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
            
            {opt.overviewId === 'magic-overview' && (
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

            {opt.overviewId === 'melee-overview' && (
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 0.98 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: i * 0.15 + 0.4, type: "spring", stiffness: 400, damping: 25 }}
                onClick={() => onSelect(opt.overviewId!)}
                className="absolute -bottom-14 w-64 h-10 bg-[#151515] border-y-2 border-x-4 border-[#333] hover:border-gold shadow-[0_0_10px_rgba(0,0,0,0.8)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-colors duration-300 overflow-hidden group cursor-pointer z-20 flex items-center justify-center rounded-sm"
              >
                {/* Dark Brushed Metal Background */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,#1a1a1a_0%,#2a2a2a_50%,#1a1a1a_100%)] opacity-80" />
                
                {/* Diagonal Slash Highlight (Reflection) */}
                <div className="absolute top-0 bottom-0 w-16 bg-white/10 -skew-x-[30deg] -translate-x-[500px] group-hover:animate-[slash_0.5s_ease-in-out_forwards]" />

                {/* Golden Slash-Line Charge (Heated Steel) */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 h-px bg-gradient-to-r from-red-600 via-orange-500 to-white w-0 group-hover:w-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(212,175,55,1)]" />

                {/* Sparks */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {Array.from({ length: 8 }).map((_, j) => (
                    <motion.div
                      key={j}
                      className="absolute w-1.5 h-[1px] bg-gold shadow-[0_0_5px_rgba(255,200,0,1)] rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        top: `50%`,
                      }}
                      initial={{ x: 0, y: 0, opacity: 0 }}
                      whileHover={{
                         x: [0, Math.random() * 150 + 50],
                         y: [0, (Math.random() - 0.5) * 60],
                         opacity: [1, 0],
                         scale: [1, 0.5]
                      }}
                      transition={{
                        duration: Math.random() * 0.4 + 0.3,
                        repeat: Infinity,
                        delay: Math.random() * 0.3,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </div>

                <span className="relative z-20 font-mono text-[10px] uppercase tracking-widest text-gold/60 group-hover:text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)] transition-colors duration-300">
                  Quick Overview
                </span>
              </motion.button>
            )}

            {opt.overviewId === 'ranged-overview' && (
               <motion.button
                 initial={{ opacity: 0, y: -10 }}
                 animate={{ opacity: 1, y: 0 }}
                 whileHover={{ scale: 0.98 }}
                 whileTap={{ scale: 0.95 }}
                 transition={{ delay: i * 0.15 + 0.4, type: "spring", stiffness: 400, damping: 25 }}
                 onClick={() => onSelect(opt.overviewId!)}
                 className="absolute -bottom-14 w-64 h-10 bg-[#0a1510] border border-emerald-900/50 hover:border-emerald-400/80 shadow-[0_0_10px_rgba(0,0,0,0.8)] hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-colors duration-300 overflow-hidden group cursor-pointer z-20 flex items-center justify-center rounded-full"
               >
                 {/* Dark Glass Capsule Background */}
                 <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a15] via-[#0f251c] to-[#0a1a15] opacity-90" />
                 
                 {/* Crosshair Ticks */}
                 <div className="absolute inset-x-0 top-0 h-1/2 flex justify-between px-4 opacity-30">
                   {[...Array(8)].map((_, j) => (
                      <div key={j} className="w-[1px] h-1.5 bg-emerald-500/50" />
                   ))}
                 </div>
 
                 {/* Animated Trajectory Line (Curved Preview) */}
                 <div className="absolute left-4 right-8 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-emerald-500/0 via-emerald-400 to-transparent group-hover:via-emerald-300 group-hover:to-emerald-200 group-hover:shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-all duration-300 w-0 group-hover:w-[calc(100%-3rem)] ease-out" />
                 
                 {/* Moving Path Dots */}
                 <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100">
                   {Array.from({ length: 3 }).map((_, j) => (
                     <motion.div
                       key={j}
                       className="absolute w-1 h-1 bg-emerald-300 rounded-full shadow-[0_0_4px_rgba(110,231,183,1)]"
                       style={{ top: '50%', marginTop: '-2px' }}
                       initial={{ x: 16 }}
                       whileHover={{
                          x: [16, 224]
                       }}
                       transition={{
                         duration: 1,
                         repeat: Infinity,
                         delay: j * 0.3,
                         ease: "linear"
                       }}
                     />
                   ))}
                 </div>
 
                 {/* Sweep Reticle */}
                 <div className="absolute top-0 bottom-0 w-8 border-x border-emerald-400/30 bg-emerald-400/5 opacity-0 group-hover:opacity-100 group-hover:animate-[sweep_2s_ease-in-out_infinite]" />
 
                 {/* Arrowhead Impact Flare */}
                 <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-t border-r border-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300 flex items-center justify-center">
                    <div className="w-1 h-1 bg-emerald-100 rounded-full shadow-[0_0_8px_rgba(255,255,255,1)]" />
                 </div>
 
                 <span className="relative z-20 font-mono text-[10px] uppercase tracking-widest text-emerald-500/60 group-hover:text-emerald-100 drop-shadow-[0_2px_2px_rgba(0,0,0,1)] transition-colors duration-300">
                   Quick Overview
                 </span>
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
