import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sword, CircleDot, Bomb, Scissors, Shield, Axe, Target } from 'lucide-react';

const WeaponVisual = ({ type }: { type: string }) => {
  switch(type) {
    case 'Longsword':
      return (
        <div className="relative flex flex-col items-center drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] scale-150">
          <div className="w-2 h-20 bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 rounded-t-full border-x border-t border-white/50" />
          <div className="w-10 h-1.5 bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 rounded-sm shadow-[0_2px_10px_rgba(0,0,0,0.5)] z-10" />
          <div className="w-1.5 h-6 bg-[#2a1b12] border-x border-[#1a100a]" />
          <div className="w-2.5 h-2.5 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full" />
        </div>
      );
    case 'Greatsword':
      return (
        <div className="relative flex flex-col items-center drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] scale-150">
          <div className="w-4 h-24 bg-gradient-to-b from-gray-400 via-gray-600 to-gray-800 rounded-t border-x border-t border-white/30" />
          <div className="w-14 h-2 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 rounded-sm z-10" />
          <div className="w-2 h-8 bg-[#1a100a] border-x border-black" />
          <div className="w-3 h-3 bg-gradient-to-br from-gray-500 to-gray-700 rounded-sm" />
        </div>
      );
    case 'Spear':
      return (
        <div className="relative flex flex-col items-center drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] scale-150">
          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[20px] border-l-transparent border-r-transparent border-b-gray-400" />
          <div className="w-1.5 h-32 bg-gradient-to-b from-[#3a2010] to-[#1a1005] rounded-b-full" />
        </div>
      );
    case 'Hammer':
      return (
        <div className="relative flex flex-col items-center drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] scale-150">
           <div className="w-12 h-6 bg-gradient-to-b from-gray-400 to-gray-600 rounded-sm border border-gray-400 z-10" />
           <div className="w-2 h-20 bg-gradient-to-b from-[#3a2010] to-[#1a1005]" />
        </div>
      );
    case 'Daggers':
      return (
        <div className="relative flex gap-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] scale-150">
          <div className="flex flex-col items-center rotate-12">
            <div className="w-2 h-12 bg-gradient-to-b from-gray-200 to-gray-500 rounded-t-full border-x border-white/50" />
            <div className="w-6 h-1 bg-yellow-600 rounded-sm z-10" />
            <div className="w-1 h-3 bg-[#2a1b12]" />
          </div>
          <div className="flex flex-col items-center -rotate-12 mt-4">
            <div className="w-2 h-12 bg-gradient-to-b from-gray-200 to-gray-500 rounded-t-full border-x border-white/50" />
            <div className="w-6 h-1 bg-yellow-600 rounded-sm z-10" />
            <div className="w-1 h-3 bg-[#2a1b12]" />
          </div>
        </div>
      );
    case 'Shield':
      return (
        <div className="relative flex flex-col items-center drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] scale-150">
           <div className="w-16 h-16 bg-gradient-to-b from-gray-300 to-gray-600 rounded-full border-4 border-yellow-600 flex items-center justify-center">
             <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-yellow-700" />
           </div>
        </div>
      );
    case 'Axe':
      return (
        <div className="relative flex flex-col items-center drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] scale-150 mt-4">
          <div className="flex items-center absolute -top-2 z-10 ml-5">
            <div className="w-8 h-10 bg-gradient-to-r from-gray-400 to-gray-600 rounded-r-3xl" style={{ clipPath: 'polygon(0 20%, 100% 0, 100% 100%, 0 80%)' }} />
          </div>
          <div className="w-2 h-24 bg-gradient-to-b from-[#3a2010] to-[#1a1005]" />
        </div>
      );
    default:
      return null;
  }
}

export default function MeleeWeaponIdentitySlide() {
  const [activeWeapon, setActiveWeapon] = useState(0);

  const weapons = [
    {
      name: "Longsword",
      icon: <Sword className="w-8 h-8" />,
      feel: "Balanced slashes, counters, light beams.",
      anim: "Clean arcs, controlled movement, balanced offensive and defensive style."
    },
    {
      name: "Greatsword",
      icon: <Sword className="w-8 h-8 rotate-180" />, // simple variation
      feel: "Heavy arcs, charged cuts.",
      anim: "Slower wind-up, powerful release, weighty impact."
    },
    {
      name: "Spear",
      icon: <Target className="w-8 h-8" />,
      feel: "Thrusts, lunges, range control.",
      anim: "Forward point stance, sharp linear attacks, controlled distance."
    },
    {
      name: "Hammer",
      icon: <CircleDot className="w-8 h-8" />,
      feel: "Slams, shockwaves, armor breaks.",
      anim: "Downward impact, ground ripple, heavy haptic-style feedback."
    },
    {
      name: "Daggers",
      icon: <Scissors className="w-8 h-8 rotate-90" />,
      feel: "Fast dual-hand combos.",
      anim: "Quick alternating strikes, close-range fluid motion, fast chained attacks."
    },
    {
      name: "Shield",
      icon: <Shield className="w-8 h-8" />,
      feel: "Guards, bashes, parries.",
      anim: "Defensive stance, impact block, counter bash."
    },
    {
      name: "Axe",
      icon: <Axe className="w-8 h-8" />,
      feel: "Hooks, cleaves, bleed effects, guard breaking.",
      anim: "Hooking motion, brutal cleaving arcs, strong stagger effect."
    }
  ];

  return (
    <div className="w-full max-w-6xl flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center border-b border-gold/20 pb-4"
      >
        <h2 className="display text-4xl text-gold tracking-[0.3em] glow-amber mb-2">
          Weapon Identity
        </h2>
        <p className="text-white/50 font-mono tracking-widest text-[10px] uppercase">
          Each weapon feels mechanically and visually different
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 min-h-[400px]">
        {/* Navigation List */}
        <div className="w-full md:w-1/3 flex flex-col gap-2">
          {weapons.map((w, i) => (
            <button
              key={i}
              onClick={() => setActiveWeapon(i)}
              className={`p-4 flex items-center justify-between border-l-2 transition-all duration-300 text-left ${activeWeapon === i ? 'border-gold bg-gold/10 text-gold shadow-[inset_20px_0_20px_-20px_rgba(212,175,55,0.3)]' : 'border-transparent text-white/50 hover:bg-white/5 hover:text-white/80'}`}
            >
              <span className="display text-sm">{w.name}</span>
            </button>
          ))}
        </div>

        {/* Display Area */}
        <div className="flex-1 panel-gold border border-gold/30 rounded-sm p-8 relative overflow-hidden flex flex-col justify-center min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeWeapon}
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 1.05, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="rounded-full bg-black/60 border border-gold/40 text-gold mb-6 shadow-[0_0_30px_rgba(212,175,55,0.2)] flex items-center justify-center h-32 w-32">
                <WeaponVisual type={weapons[activeWeapon].name} />
              </div>
              
              <h3 className="display text-3xl text-gold mb-6">{weapons[activeWeapon].name}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left w-full max-w-2xl">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gold/50 border-b border-gold/20 pb-1 mb-3 block">Combat Feel</span>
                  <p className="text-white/90 serif text-[14px] leading-relaxed italic">{weapons[activeWeapon].feel}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gold/50 border-b border-gold/20 pb-1 mb-3 block">Animation Profile</span>
                  <p className="text-white/90 serif text-[14px] leading-relaxed italic">{weapons[activeWeapon].anim}</p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Abstract background effect per weapon */}
          <div className="absolute inset-0 z-0 opacity-[0.05] flex items-center justify-center pointer-events-none scale-[3] blur-md">
            <AnimatePresence mode="wait">
               <motion.div
                  key={`bg-${activeWeapon}`}
                  initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                  animate={{ opacity: 1, scale: 1.5, rotate: 0 }}
                  exit={{ opacity: 0, scale: 2, rotate: 45 }}
                  transition={{ duration: 1.5 }}
               >
                 <WeaponVisual type={weapons[activeWeapon].name} />
               </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
